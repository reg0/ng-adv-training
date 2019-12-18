import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectCartCount } from '../modules/cart/store/cart.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  cartCount$: Observable<number>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<any>,
  ) {
    this.store.subscribe(console.log);
    this.cartCount$ = this.store.select(selectCartCount);
  }
}
