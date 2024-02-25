import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Danh mục sản phẩm', url: '' },
      { label: 'Khuyến mãi', url: 'category/khuyen-mai' },
      { label: 'Bán chạy nhất' },
      { label: 'Giá siêu tốt' },
      { label: 'Siêu tiết kiệm' }
    ];
    this.activeItem = this.items[0];
  }
}