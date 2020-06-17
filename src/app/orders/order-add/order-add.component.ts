import {Component, OnInit} from '@angular/core';
import {ICustomer, IOrderItem, IState} from '../../shared/interfaces';
import {DataService} from '../../core/services/data.service';
import {Router} from '@angular/router';
import {GrowlerMessageType} from '../../core/growler/growler.service';

@Component({
  selector: 'cm-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  order: IOrderItem =
    {
      id: 0,
      productName: '',
      itemCost: null,
    };
  customer: ICustomer = null;
  customers: ICustomer[];

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe((customers: ICustomer[]) => this.customers = customers);

    console.log('getting orders');
    this.dataService.getOrders().subscribe(res => {
      console.log(res);
    });
  }


  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/orders']);
  }

  submit() {
    console.log(this.order);
    // this.dataService.insertCustomer(this.customer)
    //   .subscribe((insertedCustomer: ICustomer) => {
    //       if (insertedCustomer) {
    //         // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
    //         this.customerForm.form.markAsPristine();
    //         this.router.navigate(['/customers']);
    //       } else {
    //         const msg = 'Unable to insert customer';
    //         this.growler.growl(msg, GrowlerMessageType.Danger);
    //         this.errorMessage = msg;
    //       }
    //     },
    //     (err: any) => this.logger.log(err));
  }
}
