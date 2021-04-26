import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-showorder',
  templateUrl: './showorder.component.html',
  styleUrls: ['./showorder.component.css']
})
export class ShoworderComponent implements OnInit {

  constructor(private Ser:OrderService) { }
  ShowOrderList:any=[];

  ModalTitle:string;
  ActivateAddEditShowOrderComp:boolean=false;
  ShowOrder:any;
  ngOnInit(): void {
    this.refreshShowOrderList();
  }
  
  addClick(){
    this.ShowOrder={
      code:"",
      description:"",
      slug:""
    }
    this.ModalTitle="Add Order";
    this.ActivateAddEditShowOrderComp=true;

  }

  editClick(item){
    console.log(item);
    this.ShowOrder=item;
    this.ModalTitle="Edit order";
    this.ActivateAddEditShowOrderComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.Ser.deleteorder(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshShowOrderList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditShowOrderComp=false;
    this.refreshShowOrderList();
  }


  refreshShowOrderList(){
    this.Ser.getOrderList().subscribe(data=>{
      this.ShowOrderList=data;
    });
  }

}
