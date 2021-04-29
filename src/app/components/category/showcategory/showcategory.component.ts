import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-showcategory',
  templateUrl: './showcategory.component.html',
  styleUrls: ['./showcategory.component.css']
})
export class ShowcategoryComponent implements OnInit {

  constructor(private Ser:CategoryService ) { }
  CategoryList:any=[];
  CategoryIdFilter:string="";
  CategoryNameFilter:string="";
  CategoryListWithoutFilter:any=[];
  ModalTitle:string;
  ActivateAddEditCatComp:boolean=false;
  cat:any;
  ngOnInit( ): void {
    this.refreshCatList();
  }
  addClick(){
    this.cat={
      CategoryId:0,
      name:"",
      slug:"",
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;

  }

  editClick(item){
    console.log(item);
    this.cat=item;
    this.ModalTitle="Edit category";
    this.ActivateAddEditCatComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.Ser.deleteCategory(item.CategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshCatList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCatList();
  }


  refreshCatList(){
    this.Ser.getCategoryList().subscribe(data=>{
      this.CategoryList=data;
    });
  }
  FilterFn(){
    var CategoryIdFilter = this.CategoryIdFilter;
    var CategoryNameFilter = this.CategoryNameFilter;

    this.CategoryList = this.CategoryListWithoutFilter.filter(function (el){
        return el.CategoryId.toString().toLowerCase().includes(
          CategoryIdFilter.toString().trim().toLowerCase()
        )&&
        el.name.toString().toLowerCase().includes(
          CategoryNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.CategoryList = this.CategoryListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
