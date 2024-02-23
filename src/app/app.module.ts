import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    CardModule,
    TableModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
