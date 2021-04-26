import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";
  constructor(private http:HttpClient) { }
  getOrderList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/order/');
  }

  addorder(val:any){
    return this.http.post(this.APIUrl + '/order/',val);
  }

  updateorder(val:any){
    return this.http.put(this.APIUrl + '/order/',val);
  }

  deleteorder(val:any){
    return this.http.delete(this.APIUrl + '/order/'+val);
  }

}
