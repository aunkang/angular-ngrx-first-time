import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser/';
import { MatCardModule } from '@angular/material/card';

import { ItemComponent } from './item.component';
import { CartService } from 'src/app/services/cart.service';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let cartService: CartService;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    cartService = TestBed.get(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show add item button if "page" is "itemList"', () => {
    component.page = 'itemList';
    fixture.detectChanges();
    const addBtn = fixture.debugElement.query(By.css('.add-btn'));
    expect(addBtn).not.toBeNull();
  })

  it('should hide remove item button if "page" is "itemList"', () => {
    component.page = 'itemList';
    fixture.detectChanges();
    const removeBtn = fixture.debugElement.query(By.css('.remove-btn'));
    expect(removeBtn).toBeNull();
  })

  it('should show remove item button if "page" is "cart"', () => {
    component.page = 'cart';
    fixture.detectChanges();
    const removeBtn = fixture.debugElement.query(By.css('.remove-btn'));
    expect(removeBtn).not.toBeNull();
  })

  it('should hide add item button if "page" is "cart"', () => {
    component.page = 'cart';
    fixture.detectChanges();
    const addBtn = fixture.debugElement.query(By.css('.add-btn'));
    expect(addBtn).toBeNull();
  })

  it('should increase amount of item after call addItem()', () => {
    (cartService as any)._itemInCart = [{ name: 'hat', amount: 7 }];
    const item = cartService.itemInCart;
    component.itemName = item[0].name;
    component.amount = item[0].amount;
    component.addItem();
    const expectedAmount = 9;
    expect(component.amount).toBe(expectedAmount);
  })

  it('should decrease amount of item after call removeItem()', () => {
    (cartService as any)._itemInCart = [{ name: 'hat', amount: 7 }];
    const item = cartService.itemInCart;
    component.itemName = item[0].name;
    component.amount = item[0].amount;
    component.removeItem();
    const expectedAmount = 6;
    expect(component.amount).toBe(expectedAmount);
  })

});
