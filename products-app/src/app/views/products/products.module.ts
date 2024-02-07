import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from 'src/app/services/functional/product.service';
import { ProductServiceImpl } from 'src/app/services/functional/product-impl.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from 'src/app/services/interceptors/logging.interceptor';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [
    { provide: ProductService, useClass: ProductServiceImpl },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ]
})
export class ProductsModule { }
