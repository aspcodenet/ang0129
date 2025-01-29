import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  public getData() : Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }  
}
