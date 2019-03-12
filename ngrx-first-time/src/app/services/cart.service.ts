import * as CartActions from './../ngrx/actions/cart.action';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _itemInCart: Item[];

  constructor(private store: Store<{ cart: { items: Item[] } }>) {
  }

  addItemToCart(item: Item) {
    this.store.dispatch(new CartActions.AddItemInCart(item));
    // let isItemIncar = false;
    // for (let each of this._itemInCart) {
    //   if (each.name === item.name) {
    //     each.amount += item.amount;
    //     isItemIncar = true;
    //     break;
    //   }
    // }
    // if (!isItemIncar) {
    //   this._itemInCart = [...this._itemInCart, item];
    // }
  }

  removeItemInCart(item: Item) {
    this.store.dispatch(new CartActions.RemoveItemInCart(item));
    // this._itemInCart = this._itemInCart.filter((each) => {
    //   if (each.name === item.name) {
    //     each.amount -= item.amount;
    //   }

    //   if (each.amount <= 0) {
    //     return;
    //   }
    //   return each;
    // })
  }

  get itemInCart(): Item[] {
    return this._itemInCart;
  }
}

export interface Item {
  name: string;
  amount: number;
}
