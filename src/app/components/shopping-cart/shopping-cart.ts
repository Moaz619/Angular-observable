import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ShawdowBorder } from '../../directives/shawdow-border';
import { IProduct } from '../../models/iproduct';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe, ShawdowBorder, RouterModule],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart implements OnInit {
  productService = inject(ProductService);

  totalPrice: number = 0;

  cartProducts: IProduct[] = [];

  ngOnInit(): void {
    this.cartProducts = this.productService.getCartProducts();
    // this.totalPrice = this.productService.calculateTotalPrice();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    for (let prd of this.cartProducts) {
      this.totalPrice += prd.price * prd.quantity;
    }
  }
}

