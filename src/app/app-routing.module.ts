import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ProductDetailComponent } from './core/components/product-detail/product-detail.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { ProductPageComponent } from './core/pages/product-page/product-page.component';
import { ProductCategoryComponent } from './core/pages/product-category/product-category.component';

const routes: Routes = [
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'category/:categoryId', component: ProductCategoryComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
