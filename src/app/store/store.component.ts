import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: Item[] = [];
  cartItemCount = 0;

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    this.http.get<Item[]>('https://fakestoreapi.com/products')
      .subscribe(data => this.products = data);

    this.cartService.getCart().subscribe(cart => {
      this.cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    });
  }

  addToCart(product: Item) {
    this.cartService.addToCart({ ...product, quantity: 1 });
  }
}
