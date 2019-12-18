import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/utils/models';
import { Store } from '@ngrx/store';
import { addToCart } from '../../cart/store/cart.actions';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  data$: Observable<ItemModel[]>;

  constructor(
    private items: ItemsService,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.data$ = this.items.fetch();
  }

  buy(item: ItemModel) {
    this.store.dispatch(addToCart({data: {...item, count: 2}}));
  }

}
