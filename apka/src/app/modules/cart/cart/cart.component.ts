import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../store/cart.reducer';
import { selectAllCartItems } from '../store/cart.selectors';
import { CartItemModel } from 'src/app/utils/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data$: Observable<CartItemModel[]>;

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.data$ = this.store.select(selectAllCartItems);
  }

}
