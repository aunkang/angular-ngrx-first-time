import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('itemName') itemName;
  @Input('page') page;
  @Input('amount') amount;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addItem() {
    this.cartService.addItemToCart({ name: this.itemName, amount: 1 });
  }

  removeItem() {
    this.cartService.removeItemInCart({ name: this.itemName, amount: 1 });
  }

}
