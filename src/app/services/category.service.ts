import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../interfaces/category';
import {Ishops} from '../interfaces/ishops';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url = 'http://127.0.0.1:8000/shops/category/';
readonly APIUrl = "http://127.0.0.1:8000";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";
  constructor(private http: HttpClient) { }

  get_all_categories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }
  
  getCategoryList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/category/');
  }

  addCategory(val:any){
    return this.http.post(this.APIUrl + '/category/',val);
  }

  updateCategory(val:any){
    return this.http.put(this.APIUrl + '/category/',val);
  }

  deleteCategory(val:any){
    return this.http.delete(this.APIUrl + '/category/'+val);
  }
}
