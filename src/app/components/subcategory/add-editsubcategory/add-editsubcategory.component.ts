import { Component, Input, OnInit } from '@angular/core';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-add-editsubcategory',
  templateUrl: './add-editsubcategory.component.html',
  styleUrls: ['./add-editsubcategory.component.css']
})
export class AddEditsubcategoryComponent implements OnInit {

  constructor(private service:SubcategoryService) { }

  @Input() subcat:any;
  SubCategoryId:number;
  category:string;
  name:string;
  slug:string;
  img:string;
  SubCatList:any=[];
  PhotoFilePath: string;
  ngOnInit(): void {
    this.loadSubCategoryList();
  }

  loadSubCategoryList(){
    this.service.getSubCategoryList().subscribe((data:any)=>{
      this.SubCatList=data;

      this.SubCategoryId=this.SubCatList.SubCategoryId;
      this.category=this.SubCatList.category;
      this.name=this.SubCatList.name;
      this.slug=this.SubCatList.slug;
      this.img=this.SubCatList.img;
    });
  }
  addSubCategory(){
    var val = {SubCategoryId:this.SubCategoryId,
      category:this.category,
      name:this.name,
      slug:this.slug,
      img:this.img};

    this.service.addSubCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateSubCategory(){
    var val = {SubCategoryId:this.SubCategoryId,
      category:this.category,
      name:this.name,
      slug:this.slug,
      img:this.img};

    this.service.updateSubCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.img=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.img;
     })
  }
}
