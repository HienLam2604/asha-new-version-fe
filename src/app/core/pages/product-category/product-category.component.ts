import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  categoryId: any;
  product = {
    "id": "1005",
    "code": "av2231fwg",
    "name": "Brown Purse",
    "description": "Product Description",
    "image": "brown-purse.jpg",
    "price": 120,
    "category": "Accessories",
    "quantity": 0,
    "inventoryStatus": "OUTOFSTOCK",
    "rating": 4
  }
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
