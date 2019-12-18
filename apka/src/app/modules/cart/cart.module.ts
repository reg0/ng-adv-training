import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './store/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './store/cart.effects';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CartComponent}
    ]),
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]),
  ]
})
export class CartModule { }
