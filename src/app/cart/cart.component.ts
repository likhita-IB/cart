import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../models/item.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.cartItems = cart;
      this.totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }
}
