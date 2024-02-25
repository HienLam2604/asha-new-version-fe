import { Component } from '@angular/core';
import { images, responsiveOptions } from 'src/app/shared/constant/shared.constant';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  responsiveOptions = responsiveOptions;
  images = images;
}
