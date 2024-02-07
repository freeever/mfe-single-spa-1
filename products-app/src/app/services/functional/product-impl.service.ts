import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkRequestService } from './../core/network-request.service';
import { ProductService } from './product.service';

@Injectable({ 
  providedIn: 'root'
})
export class ProductServiceImpl implements ProductService {

  constructor(private networkRequestService: NetworkRequestService) { }

  getProducts(): Observable<any> {
    return this.networkRequestService.get('products');
  }
}

