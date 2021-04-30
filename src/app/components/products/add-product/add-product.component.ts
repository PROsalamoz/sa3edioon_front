import { Component, OnInit } from '@angular/core';
import { ApiProductService } from 'src/app/services/api-product.service';
import {SubcategoryService} from "../../../services/subcategory.service";
import {SubCategories} from "../../classes/sub-categories";
import {Observable} from "rxjs";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
subCategories: Observable<SubCategories[]>;
  constructor(private productService: ApiProductService, private subCat: SubcategoryService, private route: Router) { }

  ngOnInit(): void {
    this.loadCategoryList();

  }
  addNewProduct(form){
    console.log(form.value);

    let newProduct = {
        id: form.value.product_id,
        Title: form.value.product_name,
        price: form.value.product_price,
        description: form.value.product_desc,
        discount: form.value.product_disc,
        // img: string,
        // stock: form.value.product_,
    };

    console.log(newProduct);

    this.productService.createProduct(newProduct).subscribe(data => {
      this.route.navigateByUrl('/ApiProducts');
    });

}

  loadCategoryList(){
    this.subCat.getSubCategoryList().subscribe((data:any)=>{
      this.subCategories=data;
      console.log(this.subCategories);
    });
  }

}
