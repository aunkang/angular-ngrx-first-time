import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import * as fromApp from 'src/app/store/app.reducers';
import * as CartActions from './../cart/store/cart.actions';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('itemName') itemName;
  @Input('page') page;
  @Input('amount') amount;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  addItem() {
    this.store.dispatch(new CartActions.AddItemInCart({ name: this.itemName, amount: 1 }));
    // this.cartService.addItemToCart({ name: this.itemName, amount: 1 });
  }

  removeItem() {
    // this.cartService.removeItemInCart({ name: this.itemName, amount: 1 });
  }

}
