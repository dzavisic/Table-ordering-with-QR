import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart1$: Observable<any>;
  cart2$: Observable<any>;
  cart3$: Observable<any>;
  cart4$: Observable<any>;
  cart5$: Observable<any>;
  cart6$: Observable<any>;
  cart7$: Observable<any>;
  cart8$: Observable<any>;
  cart9$: Observable<any>;
  cart10$: Observable<any>;
  carts=[];
  constructor(private http: HttpClient) {
    this.cart1$ = this.http.get(`http://localhost:3014/api/cart/cart1`);
    this.cart2$ = this.http.get(`http://localhost:3014/api/cart/cart2`);
    this.cart3$ = this.http.get(`http://localhost:3014/api/cart/cart3`);
    this.cart4$ = this.http.get(`http://localhost:3014/api/cart/cart4`);
    this.cart5$ = this.http.get(`http://localhost:3014/api/cart/cart5`);
    this.cart6$ = this.http.get(`http://localhost:3014/api/cart/cart6`);
    this.cart7$ = this.http.get(`http://localhost:3014/api/cart/cart7`);
    this.cart8$ = this.http.get(`http://localhost:3014/api/cart/cart8`);
    this.cart9$ = this.http.get(`http://localhost:3014/api/cart/cart9`);
    this.cart10$ = this.http.get(`http://localhost:3014/api/cart/cart10`);
    this.carts=[this.cart1$,this.cart2$,this.cart3$,this.cart4$,this.cart5$,this.cart6$,this.cart7$,this.cart8$,this.cart9$,this.cart10$];
  }

  create_cart(url_id_){
    return this.http.post('http://localhost:3014/api/cart/create', {url_id:url_id_}).toPromise().then((data:any) => {return data});
  }

  add_to_order(id,table_number,name,price,quantity,msg,type){
    return this.http.post('http://localhost:3014/api/orders/add',{
      id:id,
      table_number:table_number,
      name:name,
      price:price,
      quantity:quantity,
      msg:msg,
      type:type
    }).toPromise().then((data:any) => {return data});
  }

  add_to_orders_list(id,table_number){
    return this.http.post('http://localhost:3014/api/orders_list/add',{
      id:id,
      table_number:table_number
    }).toPromise().then((data:any) => {return data});
  }

  add_to_cart(data2,url_id_){
    if(data2.msg ===""){
      data2.msg = "/"
    }
    return this.http.post('http://localhost:3014/api/cart/add',
      {
        url_id:url_id_,
        name:data2.name,
        price:data2.price,
        quantity:data2.quantity,
        msg:data2.msg,
        type:data2.type
      }
    ).toPromise().then((data:any) => {});
  }
  cartId(url_id_){
    return this.http.get(`http://localhost:3014/api/cart/cart${url_id_}`);
  }

  get_cart(url_id_){
    return this.http.post('http://localhost:3014/api/cart/get',{url_id: url_id_}
    ).toPromise().then((data:any) => {return data});
  }
  
  deleteItemFromCart(url_id_,name,quantity){
    return this.http.post('http://localhost:3014/api/cart/deleteItem',{
      url_id:url_id_,
      name:name,
      quantity:quantity
    }).toPromise().then((data:any) => {});
  }

  update_cart_quantity(url_id_,data){
    if(data.msg ===""){
      data.msg = "/"
    }
    return this.http.post('http://localhost:3014/api/cart/update',{
      url_id:url_id_,
      name:data.name,
      price:data.price,
      quantity:data.quantity,
      msg:data.msg,
      type:data.type
    }).toPromise().then((data:any) => {});
  }


  emptyCartDish(url_id_){
    this.http.post('http://localhost:3014/api/cart/delete',{
      url_id:url_id_
    }).toPromise().then((data:any) => {});
    this.create_cart(url_id_);
    
  }
}
