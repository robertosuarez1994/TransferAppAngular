import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  searchUrl= 'http://localhost:8000/api/'
  
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

  patchStocks(transfer){
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let body = JSON.stringify(transfer)

    return this.http.patch('http://localhost:8000/api/stocks/transfer/',body,httpOptions).subscribe(val => alert(val['data']))
    
  }
}
