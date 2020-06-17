import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ICustomer, IOrder, IOrderItem, IState} from '../../shared/interfaces';
import {DataService} from '../../core/services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GrowlerMessageType, GrowlerService} from '../../core/growler/growler.service';
import {IModalContent, ModalService} from '../../core/modal/modal.service';
import {NgForm} from '@angular/forms';
import {LoggerService} from '../../core/services/logger.service';
import Order = jasmine.Order;
import {TrackByService} from '../../core/services/trackby.service';

@Component({
  selector: 'cm-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit, OnDestroy {
  order: IOrder =
    {
      productName: '',
      itemCost: null,
    };
  orders: IOrder[] = [];
  selectedCustomerId: number;
  customers: ICustomer[];
  orderTotal = 0;
  errorMessage: string;
  id: number;
  private sub: any;

  @ViewChild('orderForm', {static: true}) orderForm: NgForm;

  constructor(private dataService: DataService,
              private router: Router,
              private modalService: ModalService,
              private growler: GrowlerService,
              private logger: LoggerService,
              private route: ActivatedRoute,
              public trackbyService: TrackByService) {
  }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe((customers: ICustomer[]) => {
      this.customers = customers;
      this.updateId();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  updateId() {
    this.sub = this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
      const id = +params['id'];
      this.customers.map(customer => customer.id).includes(id) ? this.selectedCustomerId = id : this.selectedCustomerId = null;
    });
  }

  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/orders']);
  }

  submit() {
    this.dataService.inserOrder(this.selectedCustomerId, this.orders)
      .subscribe((insertedOrder: IOrder) => {
          if (insertedOrder) {
            // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            this.orderForm.form.markAsPristine();
            this.growler.growl('Order was added :)', GrowlerMessageType.Info);
            this.router.navigate(['/orders']);
          } else {
            const msg = 'Unable to insert order';
            this.growler.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
        (err: any) => this.logger.log(err));

  }

  addItem() {
    // Add recent item to orders list and reset fields and models (besides customer)
    this.orders.push(this.order);
    this.orderTotal += this.order.itemCost;
    this.order = {
      productName: '',
      itemCost: null,
    };
    this.orderForm.controls['productName'].reset();
    this.orderForm.controls['itemCost'].reset();

  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.orderForm.dirty) {
      return true;
    }

    // Dirty show display modal dialog to user to confirm leaving
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OKButtonText: 'Leave'
    };
    return this.modalService.show(modalContent);
  }
}
