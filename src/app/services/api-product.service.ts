import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiIproduct } from '../interfaces/api-iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private _http:HttpClient) { }

  getAllProducts():Observable<ApiIproduct[]>{
      return this._http.get<ApiIproduct[]>(`http://127.0.0.1:8000/products/all_products`)
  }

  getProductByID(pid:number):Observable<ApiIproduct>{
    return this._http.get<ApiIproduct>(`http://127.0.0.1:8000/products/all_products/${pid}`);
  }
}
