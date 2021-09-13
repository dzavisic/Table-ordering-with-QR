import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.page.html',
  styleUrls: ['./add-to-cart-modal.page.scss'],
})
export class AddToCartModalPage implements OnInit {
  index:number;
  loading:any;
  @Input() id:string;
  @Input() name:string;
  @Input() price:string;
  @Input() type:string;
  quantity:number = 1;
  needed_id:any;
  textboxInput:string ="";
  @Input() url_id:any;
  cart$:Observable<any>;
  current_quantity:any;
  full_price=0;
  constructor(private http:HttpClient,private modalController: ModalController, private cartService: CartService, public _router: Router, private toastController: ToastController ) { 
    
  }

  ngOnInit() {
  }
  addOne(){
    this.quantity=this.quantity+1;
  }
  removeOne(){
    if(this.quantity===1){
      this.quantity=1;
    }else{
      this.quantity=this.quantity-1;
    }
  }
  check=false;
  new_quantity=0;
  new_price=0;
  pushToCart(){
    var data1={};
    var data2={};
    this.cart$ = this.cartService.carts[this.url_id-1].pipe(tap(data=>{
      for(var i=0;i<data['data']['length'];i++){
        if(data['data'][i]['name']==this.name){
          this.check=true;
          this.new_quantity = data['data'][i]['quantity'] + this.quantity;
          this.new_price = parseInt(this.price)*this.new_quantity;
        }
      }
      if(this.check===false){
        this.loading=true;
        let price_length = this.price.length;
        let price_number = this.price.substring(0,price_length-3);
        let full_price = parseInt(price_number)*this.quantity;
        data1 = {
          name: this.name,
          price: full_price,
          quantity: this.quantity,
          msg: this.textboxInput,
          type: this.type
        }
        
      }else{
        data2 = {
          name:this.name,
          price: this.new_price,
          quantity: this.new_quantity,
          msg: this.textboxInput,
          type: this.type
        }
      }
    }));
    
    setTimeout(()=>{
      if(this.check===false){
        console.log(data1)
        this.cartService.add_to_cart(data1,this.url_id);
      }else{
        console.log(data2)
        this.cartService.update_cart_quantity(this.url_id, data2);
      }
    },100)
    
  }

  
  async addedToCart() {
    const toast = await this.toastController.create({
      message: 'Uspješno dodano narudžbi.',
      duration: 2000
    });
    toast.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
