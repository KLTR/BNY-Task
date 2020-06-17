import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CustomerEditComponent } from '../../customer/customer-edit/customer-edit.component';
import { LoggerService } from '../../core/services/logger.service';
import {OrderAddComponent} from '../../orders/order-add/order-add.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CustomerEditComponent | OrderAddComponent> {

  constructor(private logger: LoggerService) {}

  canDeactivate(
    component: CustomerEditComponent | OrderAddComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    this.logger.log(`CustomerId: ${route.parent.params['id']} URL: ${state.url}`);

    // Check with component to see if we're able to deactivate
    return component.canDeactivate();
  }
}
