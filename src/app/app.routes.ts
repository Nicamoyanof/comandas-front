import { Routes } from '@angular/router';
import { ReceptionPage } from './components/reception/reception.page';
import { KitchenPage } from './components/kitchen/kitchen.page';
import { ReceiptPage } from './components/receipt/receipt.page';

export const routes: Routes = [
  { path: '', redirectTo: 'reception', pathMatch: 'full' },
  { path: 'reception', component: ReceptionPage },
  { path: 'kitchen', component: KitchenPage },
  { path: 'receipt/:ticketId', component: ReceiptPage }
];
