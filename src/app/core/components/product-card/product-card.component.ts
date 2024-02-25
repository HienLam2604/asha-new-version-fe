import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  constructor(private router: Router) { }
  @Input() product: any;

  viewDetail(id: string) {
    this.router.navigate([`/product/`, id]);
  }

  addCart(product: any) {
    localStorage.setItem('cart', JSON.stringify(product))
  }
}
