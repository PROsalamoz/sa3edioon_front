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
  constructor(private http: HttpClient) { }

  get_all_categories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }
}
