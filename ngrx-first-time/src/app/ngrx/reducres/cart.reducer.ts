import { Item } from './../../services/cart.service';
import * as CartActions from './../actions/cart.action';
const initialState = {
  items: [] // type is Item[]
}

export function cartReducer(state = initialState, action: CartActions.CartAction) {
  switch (action.type) {
    case CartActions.CartActionTypes.add:
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


    case CartActions.CartActionTypes.remove:
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
