import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../app/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Item[] = [];
  private cartSubject = new BehaviorSubject<Item[]>([]);

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(item: Item) {
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 }); 
    }
    this.cartSubject.next([...this.cartItems]); 
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0); 

    this.cartSubject.next([...this.cartItems]); 
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([...this.cartItems]);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
