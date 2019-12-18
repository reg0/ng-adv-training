import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface State {

}

export const initialState: State = {

};

const cartReducer = createReducer(
  initialState,

  on(CartActions.loadCarts, state => state),
  on(CartActions.loadCartsSuccess, (state, action) => state),
  on(CartActions.loadCartsFailure, (state, action) => state),
  on(CartActions.addToCart, (state, {data}) => {
    return {...state, data};
  }),

);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}
