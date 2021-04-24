import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Category} from '../../interfaces/category';
import {Observable} from 'rxjs';
import {ShopservicesService} from '../../services/shopservices.service';
import {CategoryService} from '../../services/category.service';
import {Ishops} from '../../interfaces/ishops';
import {MainComponent} from './main/main.component';
import {main} from '@angular/compiler-cli/src/main';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  categories: Category[];
  shops: Ishops[];
  AllShops: number;
  CategoryID: number;
  isFilterByCat: boolean;
  // tslint:disable-next-line:variable-name
  // all_shops: Ishops[];
  // tslint:disable-next-line:variable-name
  constructor(private myservice: CategoryService, private _shop_serv: ShopservicesService) {}

  ngOnInit(): void {
    this.myservice.get_all_categories().subscribe(data => {
      // tslint:disable-next-line:no-unused-expression
      this.categories = data;
      // console.log(data);
    }, error => {
      console.log(error);
    });
  }

  // @ts-ignore
  // get_all_shops(): Ishops[]{
  //   this._shop_serv.get_all_shops().subscribe(data => {
  //     this.isFilterByCat = false;
  //     // this.AllShops = data;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
