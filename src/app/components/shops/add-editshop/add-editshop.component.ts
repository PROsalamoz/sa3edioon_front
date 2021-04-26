import { Component, Input, OnInit } from '@angular/core';
import { ShopservicesService } from 'src/app/services/shopservices.service';

@Component({
  selector: 'app-add-editshop',
  templateUrl: './add-editshop.component.html',
  styleUrls: ['./add-editshop.component.css']
})
export class AddEditshopComponent implements OnInit {

  constructor(private service:ShopservicesService) { }
  @Input() shops:any;
  ShopId:number;
    name:string;
    slug:string;
    address:string;
    phone:string;
    img:string;
    category:number;
  shopList:any=[];
  ngOnInit(): void {
    this.loadShopList();
  }
  loadShopList(){
    this.service.getShopList().subscribe((data:any)=>{
      this.shopList=data;

      this.ShopId=this.shops.ShopId;
      this.name=this.shops.name;
      this.slug=this.shops.slug;
      this.address=this.shops.address;
      this.phone=this.shops.phone;
      this.img=this.shops.img;
      this.category=this.shops.category;
    });
  }
  addShop(){
    var val = {ShopId:this.ShopId,
      name:this.name,
      slug:this.slug,
      address:this.address,
      phone:this.phone,
      img:this.img=this.shops,
      category:this.category  
    };
     this.service.addShop(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateShop(){
    var val = {ShopId:this.ShopId,
      name:this.name,
      slug:this.slug,
      address:this.address,
      phone:this.phone,
      img:this.img=this.shops,
      category:this.category 
      };

    this.service.updateShop(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
