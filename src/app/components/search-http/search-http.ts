import { Component, inject, Input, OnChanges, Pipe, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { Router } from '@angular/router';
import { ProductServiceHttp } from '../../services/product-service-http';
import { CategoryService } from '../../services/category-service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShawdowBorder } from '../../directives/shawdow-border';

@Component({
  selector: 'app-search-http',
  imports: [CurrencyPipe,FormsModule,ShawdowBorder],
  templateUrl: './search-http.html',
  styleUrl: './search-http.css',
})
export class SearchHttp implements OnChanges{
  // searchFilter
  constructor(
    private categoryService: CategoryService,
    private productService: ProductServiceHttp
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change");
    this.filter();
  }
  // router
  router = inject(Router);

  // inputs
  searchFilter: string = '';
  selectedCategoryId: number = 0;
  // members
  selectFilter: string = 'All items'; //string appearing when selecting a category
  currentDate: Date = new Date();
  categories: ICategory[] = [];
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  // functions
  buy(prd: IProduct) {
    // if (prd.quantity > 2) prd.quantity -= 2;
    // else {
    //   prd.quantity = 0;
    // }
    // this.productService.addToCart(prd);
  }

  //filtering
  filterByName() {
    if (this.searchFilter.length > 0) {
      this.productService.searchProducts(this.searchFilter).subscribe((res)=>{
        this.filteredProducts = res.products;
      });
    } else {
      this.filteredProducts = this.products;
    }
  }
  filterByCategory() {

  }
  filter() {
    this.filterByName();
    // this.filterByCategory();
  }

  showDetails(prd: IProduct) {
    // this.router.navigate(['/products', prd.id]);
  }
}
