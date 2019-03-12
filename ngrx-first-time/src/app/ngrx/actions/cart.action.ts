import { Action } from '@ngrx/store';
import { Item } from './../../services/cart.service';

export enum CartActionTypes {
  add = 'add',
  remove = 'remove',
}

export class AddItemInCart implements Action {
  type = CartActionTypes.add;
  constructor(public payload: Item) { }
}

export class RemoveItemInCart implements Action {
  type = CartActionTypes.remove;
  constructor(public payload: Item) { }
}

export type CartAction = AddItemInCart | RemoveItemInCart;
