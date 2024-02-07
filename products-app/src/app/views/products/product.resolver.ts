import { ProductService } from 'src/app/services/functional/product.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Observable<any>> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>{
    console.log("Retriveing products data using ProductResolver...");
    
    return this.productService.getProducts();
  }
}
