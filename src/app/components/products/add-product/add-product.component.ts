import { Component, OnInit } from '@angular/core';
import { ApiProductService } from 'src/app/services/api-product.service';
import { HideAndDispalyService } from 'src/app/services/hide-and-dispaly.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ApiProductService,public carsoule: HideAndDispalyService) { }

  ngOnInit(): void {
    this.carsoule.hide();
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
      alert(data.toString());
    });


  
}
}
