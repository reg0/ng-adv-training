import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { CartItemModel } from 'src/app/utils/models';
export const cartFeatureKey = 'cart';

export const cartAdapter: EntityAdapter<CartItemModel> = createEntityAdapter<CartItemModel>();

export interface State extends EntityState<CartItemModel> {
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = cartAdapter.getInitialState({
  loading: false,
  loaded: false,
});

const cartReducer = createReducer(
  initialState,

  on(CartActions.loadCarts, state => ({...state, loading: true})),
  on(CartActions.loadCartsSuccess, (state, action) => {
    return cartAdapter.addAll(action.data, {...state, loading: false, loaded: true});
  }),
  on(CartActions.loadCartsFailure, (state, action) => state),
  on(CartActions.addToCart, (state, {data}) => {
    const found = state.entities[data.id];
    return cartAdapter.upsertOne({...data, count: found ? found.count + data.count : data.count}, {...state, loading: true});
  }),
  on(CartActions.updateStorageSuccess, state => ({...state, loading: false})),
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}
