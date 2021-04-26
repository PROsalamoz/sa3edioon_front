import { Component, OnInit,Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-add-editcategory',
  templateUrl: './add-editcategory.component.html',
  styleUrls: ['./add-editcategory.component.css']
})
export class AddEditcategoryComponent implements OnInit {

  constructor(private service:CategoryService) { }
  @Input() cat:any;
  CategoryId:number;
  name:string;
  slug:string;
  CatList:any=[];
  ngOnInit(): void {
    this.loadCategoryList();
  }
  loadCategoryList(){
    this.service.getCategoryList().subscribe((data:any)=>{
      this.CatList=data;

      this.CategoryId=this.cat.CategoryId;
      this.name=this.cat.name;
      this.slug=this.cat.slug;
    });
  }
  addCategory(){
    var val = {CategoryId:this.CategoryId,
      name:this.name,
      slug:this.slug};
     this.service.addCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategory(){
    var val = {CategoryId:this.CategoryId,
      name:this.name,
      slug:this.slug
      };

    this.service.updateCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
