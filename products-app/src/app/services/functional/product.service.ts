import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class ProductService {
  abstract getProducts(): Observable<any>;
}