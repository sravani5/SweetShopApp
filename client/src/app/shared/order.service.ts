import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Observer } from 'rxjs/Observer';
import { of } from 'rxjs/observable/of';
import { Orders } from './orders.model';


@Injectable()
export class OrderService {
 customerid:number;
  icecreamtype:string;
  quantity :string;
  amount:number;
orders:Orders;
customerorder:Orders[];
 observer: Observer<any>;
 socket;
 baseURL='http://localhost:3000/';
  constructor(private http: HttpClient) { }
  postOrderForm(order:Orders){
  
      return this.http.post(this.baseURL + 'onReceivedOrdes/', order);
  }
 
 } 

