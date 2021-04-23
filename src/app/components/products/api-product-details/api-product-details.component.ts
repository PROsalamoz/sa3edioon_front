import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/interfaces/api-iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-api-product-details',
  templateUrl: './api-product-details.component.html',
  styleUrls: ['./api-product-details.component.css']
})
export class ApiProductDetailsComponent implements OnInit {
  prd:ApiIproduct;
  constructor(private _apiPrdServ:ApiProductService,private _activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   let id=this._activedRoute.snapshot.params["id"];
    this._apiPrdServ.getProductByID(id).subscribe((res)=>{
       this.prd=res;
       console.log(this.prd);
    })
  }

}
