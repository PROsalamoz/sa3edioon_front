import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showsubcategory',
  templateUrl: './showsubcategory.component.html',
  styleUrls: ['./showsubcategory.component.css']
})
export class ShowsubcategoryComponent implements OnInit {

  constructor(private Ser:SubcategoryService) { }
  SubCategoryList:any=[];

  ModalTitle:string;
  ActivateAddEditSubCatComp:boolean=false;
  subcat:any;
  ngOnInit(): void {
    this.refreshSubCatList();
  }
  addClick(){
    this.subcat={
      SubCategoryId:0,
      category:"",
      name:"",
      slug:"",
      img:"anonymous.png"
    }
    this.ModalTitle="Add SubCategory";
    this.ActivateAddEditSubCatComp=true;

  }

  editClick(item){
    console.log(item);
    this.subcat=item;
    this.ModalTitle="Edit Subcategory";
    this.ActivateAddEditSubCatComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.Ser.deleteSubCategory(item.SubCategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshSubCatList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditSubCatComp=false;
    this.refreshSubCatList();
  }


  refreshSubCatList(){
    this.Ser.getSubCategoryList().subscribe(data=>{
      this.SubCategoryList=data;
    });
  }
}
