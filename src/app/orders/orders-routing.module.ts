import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrdersComponent} from './orders.component';
import {OrderAddComponent} from './order-add/order-add.component';
import {OrdersListComponent} from './orders-list/orders-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {path: '', redirectTo: 'list'},
      {path: 'list', component: OrdersListComponent},
      {path: 'add', component: OrderAddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  static components = [OrdersComponent, OrderAddComponent, OrdersListComponent];
}
