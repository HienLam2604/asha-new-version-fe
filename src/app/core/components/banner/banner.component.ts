import { Component } from '@angular/core';
import { responsiveOptions, images } from 'src/app/shared/constant/shared.constant';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  responsiveOptions = responsiveOptions;
  images = images;
}
