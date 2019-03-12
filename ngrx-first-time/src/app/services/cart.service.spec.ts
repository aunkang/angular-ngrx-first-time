import { TestBed } from '@angular/core/testing';
import { CartService } from "./cart.service";

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
      imports: []
    });
  });

  beforeEach(() => {
    service = TestBed.get(CartService);
  });

  it('should increase amount of target', () => {
    let item = { name: 'hat', amount: 1 };
    (service as any)._itemInCart = [
      { name: 'hat', amount: 1 },
      { name: 'shirt', amount: 4 },
    ];
    service.addItemToCart(item);
    const expectedValue = [{ name: 'hat', amount: 2 }, { name: 'shirt', amount: 4 }];
    expect(service.itemInCart).toEqual(expectedValue);
  })

  it('should add the hat', () => {
    let item = { name: 'hat', amount: 2 };
    (service as any)._itemInCart = [
      { name: 'shirt', amount: 1 },
    ];
    service.addItemToCart(item);
    const expectedValue = [{ name: 'shirt', amount: 1 }, { name: 'hat', amount: 2 }];
    expect(service.itemInCart).toEqual(expectedValue);
  })



  it('should decrease amount of target', () => {
    let item = { name: 'hat', amount: 1 };
    (service as any)._itemInCart = [
      { name: 'cap', amount: 2 },
      { name: 'hat', amount: 4 },
      { name: 'shirt', amount: 7 }
    ];
    service.removeItemInCart(item);
    const expectedValue = [
      { name: 'cap', amount: 2 },
      { name: 'hat', amount: 3 },
      { name: 'shirt', amount: 7 }
    ];
    expect(service.itemInCart).toEqual(expectedValue);
  })


  it('should remove the cap', () => {
    let item = { name: 'cap', amount: 3 };
    (service as any)._itemInCart = [
      { name: 'cap', amount: 3 },
      { name: 'hat', amount: 4 },
      { name: 'shirt', amount: 7 }
    ];
    service.removeItemInCart(item);
    const expectedValue = [
      { name: 'hat', amount: 4 },
      { name: 'shirt', amount: 7 }
    ];
    expect(service.itemInCart).toEqual(expectedValue);
  })
})
