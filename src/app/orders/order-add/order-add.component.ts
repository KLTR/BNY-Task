import {Component, OnInit} from '@angular/core';
import {ICustomer, IOrderItem, IState} from '../../shared/interfaces';
import {DataService} from '../../core/services/data.service';

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
  customer: ICustomer;
  customers: ICustomer[];
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe((customers: ICustomer[]) => this.customers = customers);
  }

}
