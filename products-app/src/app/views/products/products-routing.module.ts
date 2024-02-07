import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductsComponent } from './products.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [{ 
  path: '', 
  component: ProductsComponent,
  resolve: {
    products: ProductResolver
  }
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
