import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
private ourOrders=[];
  constructor() { }
 socket = socketIo('http://localhost:3000/');
  ngOnInit() {
    this.socket.on('orders', (res) => {
    debugger;
    console.log(res)
    
    this.ourOrders=res;
    console.log(this.ourOrders);
     
    });

 
  }
 print_page(){
   window.print();
 }

}
