import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {

}

export interface Item {
  name: string;
  amount: number;
}
