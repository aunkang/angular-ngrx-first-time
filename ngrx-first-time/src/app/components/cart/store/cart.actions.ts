import { Action } from '@ngrx/store';
import { Item } from '../../../services/cart.service';

export enum CartActionTypes {
  Add = 'Add',
  Remove = 'remove',
}

export class AddItemInCart implements Action {
  type = CartActionTypes.Add;
  constructor(public payload: Item) { }
}

export class RemoveItemInCart implements Action {
  type = CartActionTypes.Remove;
  constructor(public payload: Item) { }
}

export type CartActions = AddItemInCart | RemoveItemInCart;
