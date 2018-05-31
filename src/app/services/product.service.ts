import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  searchUrl= 'http://localhost:8000/api/v1/'
  
  constructor(private http:HttpClient) {}

  getBranchOffices():Observable<any>{
    return this.http.get(this.searchUrl.concat('branch-offices/'))
  }

  getProducts():Observable<any>{
    return this.http.get(this.searchUrl.concat('products/'))
  }

  getStocks():Observable<any>{
    return this.http.get(this.searchUrl.concat('stocks/'))
  }
}
