import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { catchError, map, concatMap, tap, switchMap, delay, withLatestFrom, mapTo } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CartActions from './cart.actions';

import { CartIDBService } from "../idb/cart.idb.service";
import { Store } from '@ngrx/store';
import { selectAllCartItems } from './cart.selectors';

@Injectable()
export class CartEffects {

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private cartService: CartIDBService
  ) {}

  @Effect()
  loadCart$ = this.actions$.pipe(
      ofType(CartActions.loadCarts.type),
      switchMap(async () => await this.cartService.getStorage() || []),
      map((data) => CartActions.loadCartsSuccess({ data }))
  );

  @Effect()
  updateCart$ = this.actions$.pipe(
      ofType(CartActions.addToCart.type), // , CartActions.removeFromCarts.type),
      delay(1000), // wydłużenie czasu w celu wyświetlania spinnera.
      withLatestFrom(this.store.select(selectAllCartItems)),
      tap(([, data]) => this.cartService.updateStorage(data)),
      mapTo(CartActions.updateStorageSuccess())
  );



}
