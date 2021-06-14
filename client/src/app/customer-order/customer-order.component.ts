import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../shared/order.service';
import * as $ from "jquery";
import * as socketIo from 'socket.io-client';
declare var M:any;
@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css'],
  providers:[OrderService]
})
export class CustomerOrderComponent implements OnInit {
date:"";
price;
stockQuote;

private ourOrders=[];
Store = [
    {Type: 'Milkshake', quantity: 'Small'},
    {Type: 'Softserve', quantity: 'Large'},
    {Type: 'Banans Foster', quantity: 'Medium'},
    {Type: 'Cherries jubilee'},
    {Type: 'Tin roof pie'},
    {Type: 'Coffee cabinet'},
    {Type: 'choc ice'},
    {Type: 'Dondruma'},
    {Type: 'Booza'},  
    {Type: 'Arctic roll'}
  ];
  constructor(private orderService:OrderService) { }
 socket = socketIo('http://localhost:3000');
  ngOnInit() {
   // this.orderService.getQuotes();
    

    this.socket.on('orders', (res) => {
    console.log(res)
    
    this.ourOrders.push(res);
     
    });

  this.resetForm();
  this.refreshOrderList();
  }
  resetForm(form?:NgForm){
    if(form)
    form.reset();
    this.orderService.orders={
    customerid:null,
    icecreamtype:"",
    quantity :"",
    amount:null
    }
   this.price=null;
  }
  onSubmit(form:NgForm){
        var r = confirm("Are u Sure to Confirm u r Order?");
        if (r == true) {
          this.orderService.postOrderForm(form.value).subscribe((res)=>{

               this.resetForm();
                 this.refreshOrderList();
               M.toast({html:'saved succesfully',classes:'rounded'});
              });
       } 
       else{
          this.orderService.orders={
          customerid:form.value.customerid,
          icecreamtype:form.value.icecreamtype,
          quantity :form.value.quantity,
          amount:form.value.amount
        }
         this.price=form.value.amount;
       }
       this.refreshOrderList();
       }
  refreshOrderList(){
 
  }
  editOrderForm(form?:NgForm){
  
  }
    onChange(val){
      var defaultprice=100;
      if(val=="Medium"){
        this.price=defaultprice*2;
      }
      if(val=="Large"){
         this.price=defaultprice*4;
      }
      if(val=="Small"){
          this.price=defaultprice;
      }
    }
     
}