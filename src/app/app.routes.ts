import { Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: StoreComponent }, // Home (Shopping Store)
  { path: 'cart', component: CartComponent } // Cart Page
];
