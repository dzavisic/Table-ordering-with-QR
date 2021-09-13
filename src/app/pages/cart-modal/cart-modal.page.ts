import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  loading:any;
  cart$:Observable<any>;
  
  full_price:number=0;
  @Input() url_id:any;
  constructor(private http:HttpClient,private cartService: CartService, private modalController: ModalController,public _router: Router,public toastController: ToastController) {
    
  }
  currentdate = new Date(); 
  datetime = this.currentdate.getDate() + "/"
                + (this.currentdate.getMonth()+1)  + "/" 
                + this.currentdate.getFullYear() + " @ "  
                + this.currentdate.getHours() + ":"  
                + this.currentdate.getMinutes() + ":" 
                + this.currentdate.getSeconds();
  ngOnInit() {
    this.cart$ = this.cartService.carts[this.url_id-1].pipe(map((data)=>data['data']), tap((data)=>{
      for(var i=0;i<data['length'];i++){
        this.full_price = this.full_price + data[i]['price']
      }
    })
    );

  }
  
  deleteItem(name:any, price:any, msg:any, quantity:any, type:any){
    if(quantity>1){
      let item_price = parseInt(price)/quantity;
      let new_price = price-item_price;
      let data = {
        name: name,
        price: new_price,
        quantity:parseInt(quantity)-1,
        msg:msg,
        type:type
      }
      this.cartService.update_cart_quantity(this.url_id, data);
      
      setTimeout(()=>{
        this.full_price = 0;
        this.cart$ = this.cartService.carts[this.url_id-1].pipe(map((data)=>data['data']), tap((data)=>{
          for(var i=0;i<data['length'];i++){
            this.full_price = this.full_price + data[i]['price']
          }
        })
        );
      },200)
      
    }else{
      this.cartService.deleteItemFromCart(this.url_id,name,quantity);
      
      setTimeout(()=>{
        this.full_price = 0;
        this.cart$ = this.cartService.carts[this.url_id-1].pipe(map((data)=>data['data']), tap((data)=>{
          for(var i=0;i<data['length'];i++){
            this.full_price = this.full_price + data[i]['price']
          }
        })
        );
      },200)
    }
  }

  push_cart(){
    this.cart$ = this.cartService.carts[this.url_id-1].pipe(tap(data=>{
      let r = (Math.random() + 1).toString(36).substring(7);
      for(var i=0; i<data['data']['length'];i++){
        this.cartService.add_to_order(r,this.url_id, data['data'][i]['name'], data['data'][i]['price'], data['data'][i]['quantity'], data['data'][i]['msg'], data['data'][i]['type']);
      }
      this.cartService.add_to_orders_list(r,this.url_id);
    }))
  }


  async orderPlaced() {
    const toast = await this.toastController.create({
      message: 'Tvoja narudžba je uspješno obavljena.',
      duration: 2000
    });
    toast.present();
    this.push_cart();
    this.dismiss();
    if(screen.width>=700){
      window.open('','_self').close()
    }else{
      this._router.navigate(['/'+this.url_id]);
    }
    
  }

  async orderDeleted() {
    const toast = await this.toastController.create({
      message: 'Tvoja narudžba je poništena.',
      duration: 2000
    });
    toast.present();
    this.dismiss();
    this._router.navigate(['/'+this.url_id]);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
