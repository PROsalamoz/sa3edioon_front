import { Component, Input, OnInit } from '@angular/core';
import { DeliverypersonService } from 'src/app/services/deliveryperson.service';

@Component({
  selector: 'app-add-editdeliveryperson',
  templateUrl: './add-editdeliveryperson.component.html',
  styleUrls: ['./add-editdeliveryperson.component.css']
})
export class AddEditdeliverypersonComponent implements OnInit {

  constructor(private service:DeliverypersonService) { }
  @Input() deliveryperson:any;
  name:string;
  phone:string;
  slug:string;
  deliverypersonList:any=[];
  ngOnInit(): void {
    this.loadDeliveryPersonList();
  }
  loadDeliveryPersonList(){
    this.service.getDeliveryPersonList().subscribe((data:any)=>{
      this.deliverypersonList=data;
      this.name=this.deliverypersonList.name;
      this.phone=this.deliverypersonList.phone;
      this.slug=this.deliverypersonList.slug;
      
    });
  }
  addDeliveryPerson(){
    var val = {
      name:this.name,
      phone:this.phone,
      slug:this.slug,
    };

    this.service.addDeliveryPerson(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDeliveryPerson(){
    var val = {
      name:this.name,
      phone:this.phone,
      slug:this.slug
    };

    this.service.updateDeliveryPerson(val).subscribe(res=>{
    alert(res.toString());
    });
  }


 
  }

