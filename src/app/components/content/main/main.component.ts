import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Ishops} from '../../../interfaces/ishops';
import {ShopservicesService} from '../../../services/shopservices.service';
import {Observable} from 'rxjs';
import {Category} from '../../../interfaces/category';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  isFilterByCat: boolean;
  shops: Ishops[];
  categories: Category[];
  filterShops: Ishops[];


  // tslint:disable-next-line:variable-name
  @Input() all_shops: number;
  @Input() CategoryID;
  searchMode: boolean;
  // tslint:disable-next-line:variable-name
  // @Input() isFilter: boolean;
  // @Output() isFilterByCatEvent: EventEmitter<boolean>;
  // tslint:disable-next-line:variable-name
  constructor(private myservice: ShopservicesService, private _categoryService: CategoryService, private _route: ActivatedRoute) {
    // this.isFilterByCat = false;
    // this.isFilterByCatEvent = new EventEmitter<boolean>();
    // this.filterShops = [];
    // this.isFilter = false;
  }

  ngOnInit(): void {
    this.searchMode = this._route.snapshot.paramMap.has('keyword');

    if (this.searchMode){
      this.handleSearchMode();
    }
    else {
      this.get_all_shops();
    }
    // get all categories
    this._categoryService.get_all_categories().subscribe(data => {
      // tslint:disable-next-line:no-unused-expression
      this.categories = data;
      // console.log(data);
    }, error => {
      console.log(error);
    });
  }

  ngOnChanges(): void {
    this.filterShops = this.get_shop_by_category();
  }

  // @ts-ignore
  get_all_shops(): Ishops[]{
    this.myservice.get_all_shops().subscribe(data => {
      // tslint:disable-next-line:no-unused-expression
      this.shops = data;
    }, error => {
      console.log(error);
    });
  }

  get_shop_by_category(): Ishops[]{
    // tslint:disable-next-line:triple-equals
    if (this.CategoryID == 0){
      return this.shops;
    }
    else {
      this.filterShops = this.shops;
      return this.filterShops.filter((shop) => {
        this.isFilterByCat = true;
        // tslint:disable-next-line:triple-equals
        return shop.category == this.CategoryID;
      });
    }
  }


  handleSearchMode() {
    const keyword: string = this._route.snapshot.paramMap.get('keyword');

    this.myservice.searchForShop(keyword).subscribe(
      (data) => {
        this.shops = data;
      },
      (error) => {
        console.log(error);

      }
    );
  }

}
