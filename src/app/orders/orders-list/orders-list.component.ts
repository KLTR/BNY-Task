import { Component, OnInit } from '@angular/core';
import {ICustomer, IPagedResults} from '../../shared/interfaces';
import {DataService} from '../../core/services/data.service';
import {TrackByService} from '../../core/services/trackby.service';

@Component({
  selector: 'cm-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  customers: ICustomer[];
  totalRecords = 0;
  pageSize = 5;



  constructor(private dataService: DataService, public trackbyService: TrackByService) { }

  ngOnInit() {
    this.getCustomersPage(1);
  }

  pageChanged(page: number) {
    this.getCustomersPage(page);
  }

  getCustomersPage(page: number) {
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe((response: IPagedResults<ICustomer[]>) => {
        this.totalRecords = response.totalRecords;
        this.customers = response.results;
      });
  }

}
