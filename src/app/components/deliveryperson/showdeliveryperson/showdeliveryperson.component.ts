import { Component, OnInit } from '@angular/core';
import { DeliverypersonService } from 'src/app/services/deliveryperson.service';

@Component({
  selector: 'app-showdeliveryperson',
  templateUrl: './showdeliveryperson.component.html',
  styleUrls: ['./showdeliveryperson.component.css']
})
export class ShowdeliverypersonComponent implements OnInit {

  constructor(private Ser:DeliverypersonService) { }
  DeliverPersonList:any=[];

  ModalTitle:string;
  ActivateAddEditDeliveryPersonComp:boolean=false;
  deliveryperson:any;
  ngOnInit(): void {
    this.refreshDeliveryPersonList();
  }
  addClick(){
    this.deliveryperson={
      name:"",
      phone:"",
      slug:"anonymous.png"
    }
    this.ModalTitle="Add DeliveryPerson";
    this.ActivateAddEditDeliveryPersonComp=true;

  }

  editClick(item){
    console.log(item);
    this.deliveryperson=item;
    this.ModalTitle="Edit DeliveryPerson";
    this.ActivateAddEditDeliveryPersonComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.Ser.deleteDeliveryPerson(item.SubCategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshDeliveryPersonList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDeliveryPersonComp=false;
    this.refreshDeliveryPersonList();
  }


  refreshDeliveryPersonList(){
    this.Ser.getDeliveryPersonList().subscribe(data=>{
      this.DeliverPersonList=data;
    });
  }
}
