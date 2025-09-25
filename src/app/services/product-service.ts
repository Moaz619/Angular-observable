import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

// i)What’s the meaning of ProvidedIn: ‘root’, in the service @injectable function?
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = [
    {
      id: 1,
      name: 'iPhone 15',
      quantity: 10,
      price: 1200,
      img: 'images/iphone.webp',
      cateogryID: 1,
      displayDetails: false,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      quantity: 15,
      price: 1100,
      img: 'images/samsung.webp',
      cateogryID: 1,
      displayDetails: false,
    },

    {
      id: 3,
      name: 'MacBook Pro',
      quantity: 5,
      price: 2500,
      img: 'images/macbook.webp',
      cateogryID: 2,
      displayDetails: false,
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      quantity: 8,
      price: 1800,
      img: 'images/dellxps.webp',
      cateogryID: 2,
      displayDetails: false,
    },

    {
      id: 5,
      name: 'Apple Watch',
      quantity: 12,
      price: 500,
      img: 'images/applewatch.webp',
      cateogryID: 3,
      displayDetails: false,
    },
    {
      id: 6,
      name: 'Samsung Galaxy Watch',
      quantity: 20,
      price: 350,
      img: 'images/galaxywatch.webp',
      cateogryID: 3,
      displayDetails: false,
    },

    {
      id: 7,
      name: 'Wireless Headphones',
      quantity: 30,
      price: 150,
      img: 'images/headphones.webp',
      cateogryID: 4,
      displayDetails: false,
    },
    {
      id: 8,
      name: 'Mechanical Keyboard',
      quantity: 25,
      price: 100,
      img: 'images/keyboard.webp',
      cateogryID: 4,
      displayDetails: false,
    },
  ];

  cartProducts: IProduct[] = [];

  getProducts(): IProduct[] {
    return this.products;
  }
  getProductByID(id: number): IProduct {
    return this.products.find((prd) => prd.id == id)!;
  }
  getProductByCatID(catId: number): IProduct {
    return this.products.find((prd) => prd.cateogryID == catId)!;
  }
  addToCart(prd: IProduct) {
    let cartItemIndex = this.cartProducts.findIndex((p) => p.id == prd.id);
    if (cartItemIndex > -1) {
      this.cartProducts[cartItemIndex].quantity += 2;
    } else {
      this.cartProducts.push({ ...prd, quantity: 2 });
    }
  }
  getCartProducts(): IProduct[] {
    return this.cartProducts;
  }
}
