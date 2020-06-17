import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import {CurrencyMaskModule} from 'ng2-currency-mask';

@NgModule({
  imports: [SharedModule, OrdersRoutingModule, CurrencyMaskModule],
  declarations: [OrdersRoutingModule.components]
})
export class OrdersModule { }
