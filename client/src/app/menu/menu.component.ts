import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import * as $ from "jquery";
import * as socketIo from 'socket.io-client';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[OrderService]
})
export class MenuComponent implements OnInit {
private customerOrder=[];
private deletedOrders=[];
TotalPrice=0;
TotalAmount=0;
placedOrder:{};
		listOfItems=[{
		     "icecreamname":"Cherries",
			 "img": "../../assets/images/post-2.jpg",
			 "Description":"Lorem Ipsum Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum",
			 "price":100,
			 "totalAmt":0.00,
			 "Types":["Chocolate","Caromal"]
		},{
		      "icecreamname":"Dondruma",
			 "img": "../../assets/images/post-3.jpg",
			 "Description":"Lorem Ipsum Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum",
			 "price":200,
			 "totalAmt":0.00,
			  "Types":["Chocolate","Caromal"]
		},
		{
		      "icecreamname":"Booza",
			 "img": "../../assets/images/post-4.jpg",
			 "Description":"Lorem Ipsum Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum",
			 "price":300,
			 "totalAmt":0.00,
			  "Types":["Chocolate","Caromal"]
		},
		{
		      "icecreamname":"Cherries jubilee",
			 "img": "../../assets/images/post-6.jpg",
			 "Description":"Lorem Ipsum Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum",
			 "price":400,
			 "totalAmt":0.00,
			  "Types":["Chocolate","Caromal"]
		},
		{
		      "icecreamname":"Cherries jubilee",
			 "img": "../../assets/images/post-7.jpg",
			 "Description":"Lorem Ipsum Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum",
			 "price":500,
			 "totalAmt":0.00,
			  "Types":["Chocolate","Caromal"]
		},
		{
		      "icecreamname":"Cherries jubilee",
			 "img": "../../assets/images/post-10.jpg",
			 "Description":"Lorem Ipsum Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum",
			 "price":500,
			 "totalAmt":0.00,
			  "Types":["Chocolate","Caromal"]
		}];

  constructor(private orderService:OrderService) {}

  ngOnInit() {}

  onChange(val,i){
	this.TotalAmount=val * this.listOfItems[i].price;
	this.listOfItems[i].totalAmt = this.TotalAmount;
	}

  addCart(obj){
 
  if((obj.type=="")||(obj.totalAmt==0)){
  alert("Please select ItemType and Quantity");
  obj.type="";
  obj.total="";
  obj.totalAmt=0;
  }
  else{
	this.placedOrder={"IcecrreamName":obj.icecreamname,"IcecreamType":obj.type,"Qunatity":obj.total,"TotalAmount":obj.totalAmt};
	this.customerOrder.push(this.placedOrder);
	this.TotalPrice=this.TotalPrice+obj.totalAmt;
	obj.type="";
	obj.total="";
    obj.totalAmt=0;
    }
    }

   placeOrder(){
    if(this.customerOrder.length ==0){
      alert("There is no Orders in u r cart Please select u r items");
    }
	for(var i=0;i<this.customerOrder.length;i++){
	  if(i==this.customerOrder.length-1){
	  this.customerOrder[i].grandTotal=this.TotalPrice;
	   }
	 else{
	 this.customerOrder[i].grandTotal="";
	   }
	  var r = confirm("Are u Sure to Confirm u r Order?");
        if (r == true) {
          this.orderService.postOrderForm(this.customerOrder).subscribe((res)=>{
          console.log(res);
              
              });
           } 
        }
      this.customerOrder=[];
      this.TotalPrice=0;
      }
   
  removeOrder(i){
   var removeItem = confirm("Are u Sure to Remove u r Item From Cart?");
        if (removeItem == true) {
    this.deletedOrders=this.customerOrder.splice(i,1);
    var remOrderAmount=this.deletedOrders[0].TotalAmount;
    this.TotalPrice=this.TotalPrice-remOrderAmount;
    console.log(this.TotalPrice)
  }
  }    
  }