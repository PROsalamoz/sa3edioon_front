import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-for-product',
  templateUrl: './search-for-product.component.html',
  styleUrls: ['./search-for-product.component.css']
})
export class SearchForProductComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  search_for_product(value: string){
    this._route.navigateByUrl(`/search/${value}`)
  }

}
