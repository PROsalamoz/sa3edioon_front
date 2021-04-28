import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiIproduct } from '../interfaces/api-iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  sss="http://jsonplaceholder.typicode.com/photos";
  imgUrl="http://127.0.0.1:8000";
  photoUrl="http://127.0.0.1:8000/media/";
  constructor(private _http:HttpClient) { }

  getAllProducts():Observable<ApiIproduct[]>{
      return this._http.get<ApiIproduct[]>(`http://127.0.0.1:8000/products/all_products`)
  }

  viewProduct(pid:number): Observable<ApiIproduct>{
    
    return this._http.get<ApiIproduct>(`${environment.ApiUrl}/${pid}`); 
  }

  createProduct(productBody): Observable<ApiIproduct>{
    const productUrl = "http://127.0.0.1:8000/products/all_products/";

    return this._http.post<ApiIproduct>(productUrl, productBody); // return an observable
  }

  updateProduct(productId, productBody): Observable<ApiIproduct>{
    const productUrl = "http://127.0.0.1:8000/product/" + productId;
    return this._http.put<ApiIproduct>(productUrl, productBody); // return an observable
  }

  // deleteDepartment(val:any){
  //   return this._http.delete("http://127.0.0.1:8000/product/"+val);
  // }


  uploadPhoto(val:any){
    return this._http.post(this.imgUrl+'/SaveFile',val)
  }
}
