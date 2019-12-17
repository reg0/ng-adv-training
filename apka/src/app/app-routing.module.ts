import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'cart', loadChildren: () => import ('./modules/cart/cart.module').then(m => m.CartModule)},
  {path: 'items', loadChildren: () => import ('./modules/items/items.module').then(m => m.ItemsModule)},
  {path: 'register', loadChildren: () => import ('./modules/register/register.module').then(m => m.RegisterModule)},
  {path: 'game', loadChildren: () => import ('./modules/game/game.module').then(m => m.GameModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
