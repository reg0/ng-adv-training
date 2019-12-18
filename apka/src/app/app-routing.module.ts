import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './modules/cart/cart/cart.component';

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'items', loadChildren: () => import ('./modules/items/items.module').then(m => m.ItemsModule)},
  {path: 'register', loadChildren: () => import ('./modules/register/register.module').then(m => m.RegisterModule)},
  {path: 'game', loadChildren: () => import ('./modules/game/game.module').then(m => m.GameModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
