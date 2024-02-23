import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [CommonModule, MenubarModule, CardModule, TableModule],
})
export class SharedModule {}
