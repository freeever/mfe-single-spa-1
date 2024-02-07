import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ProductService } from '../../services/functional/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  products: Array<any> = [];
  productsSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    // getting the product from the resolved data by the ProductResolver
    this.productsSubscription = this.route.data.subscribe((data) => {
      this.products = data['products'];
    });

    // this.productService.getProducts().pipe(
    //   takeUntilDestroyed(this.destroyRef)
    // ).subscribe(res => {
    //   // console.log(res);
    //   this.products = res;
    // });
  }
}
