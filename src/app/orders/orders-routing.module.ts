import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrdersComponent} from './orders.component';
import {OrderAddComponent} from './order-add/order-add.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {CanActivateGuard} from '../shared/guards/can-activate.guard';
import {CanDeactivateGuard} from '../shared/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {path: '', redirectTo: 'list'},
      {path: 'list', component: OrdersListComponent},
      {
        path: 'add/:id',
        component: OrderAddComponent,
        canActivate: [CanActivateGuard],
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateGuard, CanDeactivateGuard]
})
export class OrdersRoutingModule {
  static components = [OrdersComponent, OrderAddComponent, OrdersListComponent];
}
