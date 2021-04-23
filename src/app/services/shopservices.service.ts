import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ishops} from '../interfaces/ishops';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopservicesService {
 url = 'http://127.0.0.1:8000/shops/all_shops';
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  get_all_shops(): Observable<Ishops[]>{
    return this.http.get<Ishops[]>(this.url);
  }

  // getProductsByCatId(catID: number): Ishops[]{
  //   return this.get_all_shops().filter((productObj) => {
  //     // tslint:disable-next-line:triple-equals
  //     console.log(`category id : ${productObj.categoryid}`);
  //     console.log(`selected id : ${catID}`);
  //     return productObj.categoryid == catID;
  //   });
  // }

}


  // return this._http.get<ApiProduct[]>(`${environment.apiUrl}`);
// "proxyConfig": "src/proxy.conf.json"

