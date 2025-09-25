import { Component, inject, Input, OnChanges, OnInit, Pipe, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { ShawdowBorder } from '../../directives/shawdow-border';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CreditCardFormatPipe } from '../../pipes/credit-card-format-pipe';
import { ProductDetails } from '../product-details/product-details';
import { ProductService } from '../../services/product-service';
import { CategoryService } from '../../services/category-service';
import { Router } from '@angular/router';
import { ProductServiceHttp } from '../../services/product-service-http';

@Component({
  selector: 'app-product',
  imports: [
    FormsModule,
    ShawdowBorder,
    CurrencyPipe,
    DatePipe,
    CreditCardFormatPipe,
    ProductDetails,
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnChanges, OnInit {
  // services
  // productService = inject(ProductService);

  constructor(
    private categoryService: CategoryService,
    private productService: ProductServiceHttp
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change');
    this.filter();
  }
  // router
  router = inject(Router);
  // inputs
  @Input() searchFilter: string = '';
  @Input() selectedCategoryId: number = 0;
  // members
  selectFilter: string = 'All items'; //string appearing when selecting a category
  currentDate: Date = new Date();
  categories: ICategory[] = [];
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  // ii)Use 2-ways for Dependency Injection : Constructor and inject.
  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.productService.getProducts().subscribe((response) => {
      console.log(response);
      this.products = response;
    });
    // this.filteredProducts = this.products;
  }

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
    // if (this.searchFilter.length > 0) {
    //   this.filteredProducts = this.products.filter((prd: IProduct) =>
    //     prd.title.toLocaleLowerCase().includes(this.searchFilter.toLowerCase())
    //   );
    // } else {
    //   this.filteredProducts = this.products;
    // }
  }
  filterByCategory() {
    // if (this.selectedCategoryId == 0) {
    //   this.filteredProducts = this.filteredProducts;
    //   this.selectFilter = 'All items';
    // } else {
    //   this.filteredProducts = this.filteredProducts.filter(
    //     (prd: IProduct) => prd.category == this.selectedCategoryId.toString()
    //   );
    //   const catName: string | undefined = this.categories.find(
    //     (cat: ICategory) => cat.id == this.selectedCategoryId
    //   )?.name;
    //   this.selectFilter = catName ? catName : 'invalid filter';
    // }
  }
  filter() {
    if (this.searchFilter.length > 0) {
      this.productService.searchProducts(this.searchFilter).subscribe((res) => {
        this.filteredProducts = res.products.map((resPrd: any) => ({
          ...resPrd,
          image: resPrd.images[0],
        }));
        console.log(this.filteredProducts[0]);
      });
    }
  }

  showDetails(prd: IProduct) {
    this.router.navigate(['/products', prd.id]);
  }
  // day 3 task
  // hideDetails(prd: IProduct) {
  //   prd.displayDetails = false;
  // }
}
