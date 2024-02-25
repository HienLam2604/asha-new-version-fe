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
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { BodyComponent } from './core/components/body/body.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { ProductCardComponent } from './core/components/product-card/product-card.component';
import { ProductListComponent } from './core/components/product-list/product-list.component';
import { ProductDetailComponent } from './core/components/product-detail/product-detail.component';
import { GalleriaModule } from 'primeng/galleria';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { ProductPageComponent } from './core/pages/product-page/product-page.component';
import { ProductCategoryComponent } from './core/pages/product-category/product-category.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PaginatorModule } from 'primeng/paginator';
import { BannerComponent } from './core/components/banner/banner.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BodyComponent, ProductCardComponent, ProductListComponent, ProductDetailComponent, HomePageComponent, ProductPageComponent, ProductCategoryComponent, BannerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TabMenuModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    CarouselModule,
    GalleriaModule,
    BreadcrumbModule,
    PaginatorModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
