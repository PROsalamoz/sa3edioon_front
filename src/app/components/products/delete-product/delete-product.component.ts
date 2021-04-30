import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productServices:ApiProductService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id; // Capture the ID which i want delete product

      this.productServices.deleteProduct(this.productId).subscribe(deleteddata=>{
        alert("Product has been Deleted") //delete Data  selected id
      })
    });
  }

}
