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

  ModalTitle:string;
  ActivateAddEditCatComp:boolean=false;
  cat:any;
  ngOnInit( ): void {
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
      this.Ser.deleteCategory(item.SubCategoryId).subscribe(data=>{
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
}
