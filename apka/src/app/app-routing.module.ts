import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'cart', loadChildren: () => import ('./modules/cart/cart.module').then(m => m.CartModule)},
  {path: 'items', loadChildren: () => import ('./modules/items/items.module').then(m => m.ItemsModule)},
  // {path: 'cart', loadChildren: () => import ('./modules/cart/cart.module').then(m => m.CartModule)},
  // {path: 'cart', loadChildren: () => import ('./modules/cart/cart.module').then(m => m.CartModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
