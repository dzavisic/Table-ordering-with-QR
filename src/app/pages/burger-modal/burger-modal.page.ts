import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-burger-modal',
  templateUrl: './burger-modal.page.html',
  styleUrls: ['./burger-modal.page.scss'],
})
export class BurgerModalPage implements OnInit {

  cart$:Observable<any>;
  index:number;
  loading:any;
  @Input() id:string;
  @Input() name:string;
  @Input() price:string;
  @Input() type:string;
  quantity:number = 1;
  needed_id:any;
  food_addons:string ="";
  @Input() url_id:any;
  full_price=0;
  constructor(private modalController: ModalController, private cartService: CartService, private toastController: ToastController ) {}

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
      console.log(this.check)
      if(this.check===false){
        this.loading=true;
        let price_length = this.price.length;
        let price_number = this.price.substring(0,price_length-3);
        let full_price = parseInt(price_number)*this.quantity;
        data1 = {
          name: this.name,
          price: full_price,
          quantity: this.quantity,
          msg: this.food_addons,
          type: this.type
        }
        
      }else{
        data2 = {
          name:this.name,
          price: this.new_price,
          quantity: this.new_quantity,
          msg: this.food_addons,
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
    
    setTimeout(()=>{
      location.reload();
    },200)
  }
  
  add_to_food_addons(addon:string){
    var doc = document.getElementById(addon);
    if(this.food_addons.search(addon) == -1){
      if(this.food_addons===""){
        this.food_addons = addon;
      }else{
        this.food_addons = this.food_addons + ', ' + addon;
      }
      doc.style.backgroundColor = "#3dc2ff";
    }
    else{
      this.food_addons = this.food_addons.replace(addon+', ', "");
      setTimeout(() => {
        doc.style.backgroundColor = "rgb(224, 224, 224)";
      }, 1500);
    }
  }

  async addedToCart() {
    const toast = await this.toastController.create({
      message: 'Uspješno dodano narudžbi.',
      duration: 2000
    });
    toast.present();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
