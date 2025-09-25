import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category-service';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Product } from "../product/product";

@Component({
  selector: 'app-product-filter',
  imports: [FormsModule, Product],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter implements OnInit{
  categoryService = inject(CategoryService);
  categories: ICategory[] = [];
  searchFilter: string = '';
  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }
  CategoryId: number = 0;
}
