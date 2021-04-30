import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-add-editsubcategory',
  templateUrl: './add-editsubcategory.component.html',
  styleUrls: ['./add-editsubcategory.component.css']
})
export class AddEditsubcategoryComponent implements OnInit {

  constructor(private service:SubcategoryService,private serv:CategoryService) { }

  @Input() subcat:any;
  SubCategoryId:number;
  category:number;
  name:string;
  slug:string;
  img:string;
  SubCatList:any=[];
  PhotoFilePath: string;
  PhotoFileName: string;
  categorylist:any;
  ngOnInit(): void {
    this.loadCategoryList();
  }


  // id: number;
  // name: string;
  // slug: string;
  // img: string;
  // category: number;
  loadCategoryList(){
    this.serv.getCategoryList().subscribe((data:any)=>{
      this.categorylist=data;
     console.log(this.categorylist);
      // this.SubCategoryId=this.subcat.SubCategoryId;
      // this.category=this.categorylist.CategoryId;
      // console.log(this.category);
     this.name=this.subcat.name;
      this.slug=this.subcat.slug;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }
  addSubCategory(){
    var val = {id:this.SubCategoryId,
      name:this.name,
      slug:this.slug,
      img:this.img,
      category:this.category};

    this.service.addSubCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateSubCategory(){
    var val = {SubCategoryId:this.SubCategoryId,
      name:this.name,
      slug:this.slug,
      img:this.img,
      category:this.category};

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
