import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-for-shop',
  templateUrl: './search-for-shop.component.html',
  styleUrls: ['./search-for-shop.component.css']
})
export class SearchForShopComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  search_for_shop(value: string){
    this._route.navigateByUrl(`/search/shop/${value}`)
  }

}
