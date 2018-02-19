import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './product';
import { HttpHandler } from '@angular/common/http/src/backend';



@Injectable()
export class ProductService {
  private url  = 'http://localhost:8000';
  private item = JSON.parse(localStorage.getItem('tokens'));
  private token = '';
  constructor(private http:HttpClient) {
    if(this.item != null){
      this.token = this.item.token;
    }
   }

   getProduct(): Observable<Product[]>{
    const url = `${this.url}/api/product`;
    return this.http.get(url,{headers: new HttpHeaders({Authorization:'Bearer '+ this.token})}).map(res =>res as Product[]);
   }

}