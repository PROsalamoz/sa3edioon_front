import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-editorder',
  templateUrl: './add-editorder.component.html',
  styleUrls: ['./add-editorder.component.css']
})
export class AddEditorderComponent implements OnInit {

  constructor(private service:OrderService) { }
  @Input() orders:any;
  code:string;
  description:string;
  slug:string;
 ordersList:any=[];
  ngOnInit(): void {
    this.loadorderList();
  }
  loadorderList(){
    this.service.getOrderList().subscribe((data:any)=>{
      this.ordersList=data;
      this.code=this.orders.code;
      this.description=this.orders.description;
      this.slug=this.orders.slug;
    });
  }
  addOrder(){
    var val = {
      code:this.code,
      description:this.description,
      slug:this.slug,
        
    };
     this.service.addorder(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateOrder(){
    var val = {
      code:this.code,
      description:this.description,
      slug:this.slug,
        
      };

    this.service.updateorder(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
