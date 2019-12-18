import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromCart from './cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = fromCart.cartAdapter.getSelectors();

export const selectAllCartItems = createSelector(
  selectCartState,
  selectAll,
);

export const selectCartCount = createSelector(
  selectAllCartItems,
  (all) => all.reduce((result, item) => result + item.count, 0),
);
