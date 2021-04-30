
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiIproduct } from '../interfaces/api-iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<ApiIproduct[]>{
      return this._http.get<ApiIproduct[]>(`http://127.0.0.1:8000/products/all_products`);
  }

  viewProduct(pid:number): Observable<ApiIproduct>{

    return this._http.get<ApiIproduct>(`${environment.ApiUrl}/${pid}`);
  }

  createProduct(productBody): Observable<ApiIproduct>{
    const productUrl = "http://127.0.0.1:8000/products/all_products/";

    return this._http.post<ApiIproduct>(productUrl, productBody); // return an observable
  }

  updateProduct(productId, productBody): Observable<ApiIproduct>{
    const productUrl = "http://127.0.0.1:8000/products/all_products/" + productId+"/";
    return this._http.put<ApiIproduct>(productUrl, productBody); // return an observable
  }

  deleteProduct(productId): Observable<ApiIproduct>{
    const productUrl = 'http://127.0.0.1:8000/products/all_products/' + productId;
    return this._http.delete<ApiIproduct>(productUrl); // return an observable
  }


  uploadPhoto(val:any){
    // return this._http.post(this.imgUrl+'/SaveFile',val)
  }

  searchForProduct(keyword: string): Observable<ApiIproduct[]>{
    const searchUrl = `http://127.0.0.1:8000/products/all_products/?search=${keyword}`
    return this._http.get<ApiIproduct[]>(searchUrl);
  }
}
