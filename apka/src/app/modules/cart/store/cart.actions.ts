import { createAction, props } from '@ngrx/store';
import { CartItemModel } from 'src/app/utils/models';

export const loadCarts = createAction(
  '[Cart] Load Carts'
);

export const loadCartsSuccess = createAction(
  '[Cart] Load Carts Success',
  props<{ data: any }>()
);

export const loadCartsFailure = createAction(
  '[Cart] Load Carts Failure',
  props<{ error: any }>()
);

export const addToCart = createAction(
  '[Cart] Add to cart',
  props<{ data: CartItemModel }>()
);

export const updateStorageSuccess = createAction(
  '[Cart] Update Storage Success'
);
