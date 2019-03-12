import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Item } from './../../services/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  private cartState: Observable<{ items: Item[] }>

  constructor(private location: Location, private store: Store<{ cart: { items: Item[] } }>) { }

  ngOnInit() {
    this.cartState = this.store.select('cart');
  }

  onBack() {
    this.location.back();
  }

}
