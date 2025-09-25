import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { CurrencyPipe } from '@angular/common';
import { Clock } from '../clock/clock';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, Clock],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  // day 3 task
  // @Input({required:true})product!: IProduct;
  // @Output()closeDetails = new EventEmitter<any>();
  // onCloseDetails(){
  //   this.closeDetails.emit(this.product)
  // }

  activateRoute = inject(ActivatedRoute);

  productService = inject(ProductService);
  currentProduct!: IProduct;
  activateInterval: boolean = true;

  ngOnInit(): void {
    const id = +this.getIdFromUrl();
    this.loadData(id);
  }
  getIdFromUrl(): string {
    return this.activateRoute.snapshot.paramMap.get('id')!;
  }
  loadData(id: number): void {
    this.currentProduct = this.productService.getProductByID(id);
  }
}
