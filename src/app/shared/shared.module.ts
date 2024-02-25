import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { GalleriaModule } from 'primeng/galleria';
@NgModule({
  declarations: [],
  imports: [CommonModule, MenubarModule, CardModule, TableModule, TabMenuModule, GalleriaModule],
})
export class SharedModule {}
