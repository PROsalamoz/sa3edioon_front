import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiIproduct } from 'src/app/interfaces/api-iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';

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
    private productsService: ApiProductService
      ) { }

  ngOnInit(): void {
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
       ProductId: form.value.id,
        Title: form.value.product_Title,
        price: form.value.price,
        description: form.value.description,
        discount: form.value.discount,
        slug: '',
  img: '',
  stock:  form.value.productstock,
  subCat:2,
  };
    console.log(form);
    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data=>{
      console.log(data)
    });

    
  }

}
