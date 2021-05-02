import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import {ActivatedRoute} from '@angular/router';
import {logger} from 'codelyzer/util/logger';
import {SubCategories} from '../../classes/sub-categories';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../interfaces/category';
import { TestiHideService } from 'src/app/services/testi-hide.service';

@Component({
  selector: 'app-showsubcategory',
  templateUrl: './showsubcategory.component.html',
  styleUrls: ['./showsubcategory.component.css']
})
export class ShowsubcategoryComponent implements OnInit {
  SubCategoryList: SubCategories[];
  AllSubCat: SubCategories[];

  CategoryObj: Category;
  catId: number;

  // tslint:disable-next-line:variable-name
  constructor(private Ser: SubcategoryService,  private _activedRoute: ActivatedRoute, public testi:TestiHideService) {
    this.catId = this._activedRoute.snapshot.params.id;
  }

  ModalTitle: string;
  ActivateAddEditSubCatComp = false;
  subcat: any;
  ngOnInit(): void {
    this.testi.hide();
    this.refreshSubCatList2();
    this.refreshSubCatList();
  }
  addClick(){
    this.subcat = {
      SubCategoryId: 0,
      category: '',
      name: '',
      slug: '',
      // img: 'anonymous.png'
    };
    this.ModalTitle = 'Add SubCategory';
    this.ActivateAddEditSubCatComp = true;

  }

  editClick(item){
    console.log(item);
    this.subcat = item;
    this.ModalTitle = 'Edit Subcategory';
    this.ActivateAddEditSubCatComp = true;
  }

  deleteClick(item){
    if (confirm('Are you sure??')){
      this.Ser.deleteSubCategory(item.SubCategoryId).subscribe(data => {
        alert(data.toString());
        this.refreshSubCatList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditSubCatComp = false;
    this.refreshSubCatList();
  }


  // tslint:disable-next-line:typedef
  refreshSubCatList2(){
    this.Ser.getSubCategoryList().subscribe(data => {
      this.AllSubCat = data;
    });
  }


  // tslint:disable-next-line:typedef
  refreshSubCatList(){
    this.Ser.getSubCategoryList_By_catId(this.catId).subscribe(data => {
      this.CategoryObj = data;
      this.SubCategoryList = this.CategoryObj.bigCategory;
      this.filetrSubCat();
      console.log(this.filetrSubCat());
    },
      (err) => {
        console.log(err);
      });
  }

  filetrSubCat(): SubCategories[]{
    return this.AllSubCat.filter((subCat) => {
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      // subCat.id == this.SubCategoryList[0];
      for (let i = 0; i < this.SubCategoryList.length; i++){

        // @ts-ignore
        // tslint:disable-next-line:triple-equals
        if (subCat.id == this.SubCategoryList[i]){
          return true;
        }
      }
      // this.SubCategoryList.map(this.Ser.getSubCategoryList_By_catId());
    });
  }
}
