import { Component, OnInit } from '@angular/core';
import { ShopservicesService } from 'src/app/services/shopservices.service';

@Component({
  selector: 'app-showshop',
  templateUrl: './showshop.component.html',
  styleUrls: ['./showshop.component.css']
})
export class ShowshopComponent implements OnInit {

  constructor(private Ser:ShopservicesService) { }
  ShopList:any=[];
  ModalTitle:string;
  ActivateAddEditShopComp:boolean=false;
  shop:any;
  ngOnInit(): void {
    this.refreshShopList();
  }
  addClick(){
    this.shop={
      ShopId:0,
      name:"",
      slug:"",
      address:"",
      phone:"",
      img:"",
      category:0
    }
    this.ModalTitle="Add Shop";
    this.ActivateAddEditShopComp=true;

  }

  editClick(item){
    console.log(item);
    this.ShopList=item;
    this.ModalTitle="Edit Shop";
    this.ActivateAddEditShopComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.Ser.deleteShop(item.SubCategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshShopList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditShopComp=false;
    this.refreshShopList();
  }


  refreshShopList(){
    this.Ser.getShopList().subscribe(data=>{
      this.ShopList=data;
    });
  }

}
