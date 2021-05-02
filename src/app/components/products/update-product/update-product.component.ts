import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { ApiIproduct } from 'src/app/interfaces/api-iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';
import {Location} from '@angular/common';
import { HideHowComponentsService } from 'src/app/services/hide-how-components.service';
import { TestiHideService } from 'src/app/services/testi-hide.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;

  productDetails: ApiIproduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ApiProductService,
    private location: Location,
    public slider:HideHowComponentsService,
    public testi: TestiHideService,
      ) { }

  ngOnInit(): void {
    this.slider.hide();
    this.testi.hide();
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData; // get the existing data of the product
        console.log(this.productDetails);
      });

    });
  }

  updateProduct(form){
    const updateProduct = {
      id: form.value.id,
        Title: form.value.Title,
        price: form.value.price,
        description: form.value.description,
        discount: form.value.discount,
        slug: '',
  // img: '',
  stock:  form.value.stock,
  subCat:2,
  };
    console.log(form);
    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data=>{
      console.log(data)
      alert('Updated Successfully');
      // @ts-ignore
      this.location.back();
    });
    return
  }

  back(){
    this.location.back();
  }

}
