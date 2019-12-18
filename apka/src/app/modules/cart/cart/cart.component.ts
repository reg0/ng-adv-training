import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  count$: Observable<any>;

  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.count$ = this.store.select((state) => state.cart);
  }

}
