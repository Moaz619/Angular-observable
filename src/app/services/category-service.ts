import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: ICategory[] = [
    { id: 1, name: 'phone' },
    { id: 2, name: 'laptop' },
    { id: 3, name: 'watch' },
    { id: 4, name: 'accessory' },
  ];
  getCategories(): ICategory[] {
    return this.categories;
  }
}
