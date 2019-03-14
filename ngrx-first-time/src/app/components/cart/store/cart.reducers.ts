import * as CartActions from './cart.actions';
import { Item } from './../../../services/cart.service';

export interface State {
  items: Item[];
}

const initialState: State = {
  items: []
}

export function cartReducer(state = initialState, action: CartActions.CartActions) {
  switch (action.type) {
    /* add item in cart */
    case CartActions.CartActionTypes.Add:
      let isItemInCart = false; // use for check item in cart

      let newItems = state.items.filter((item: Item) => {
        /* plus by amount if in cart */
        if (item.name === action.payload.name) {
          item.amount += action.payload.amount;
          isItemInCart = true;
        }
        return item;
      })
      console.log(newItems);

      /* add item if not in cart */
      if (!isItemInCart) {
        newItems = [...newItems, action.payload];
      }
      return { ...state, items: [...newItems] };

    /* remove item in cart */
    case CartActions.CartActionTypes.Remove:
      return {
        ...state,
        items: state.items.filter((item: Item) => {
          if (item.name === action.payload.name) {
            item.amount -= action.payload.amount;
          }
          if (item.amount <= 0) {
            return;
          }
          return item;
        })
      }
    default:
      break;
  }
}
