import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from '../components/cart/store/cart.reducers'

export interface AppState {
  items: fromCart.State,
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromCart.cartReducer,
};
