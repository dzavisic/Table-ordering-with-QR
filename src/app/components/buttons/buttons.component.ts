import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CartModalPage } from 'src/app/pages/cart-modal/cart-modal.page';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  cart$:Observable<any>;
  id:any;
  url_id:any;
  cartsss = []
  constructor(private route: ActivatedRoute,private modalController: ModalController, private cartService : CartService) {
    
  }
  private routeSub: Subscription;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.url_id = params['id'];
    });
    this.cart$ = this.cartService.carts[this.url_id-1].pipe(map((data)=>data['data']));
    setInterval(()=>{
      this.cart$ = this.cartService.carts[this.url_id-1].pipe(map((data)=>data['data']));
    },2500)
  }

  async presentModalCart() {
    const modal = await this.modalController.create({
      component: CartModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        url_id: this.url_id
      }
    });
    return await modal.present();
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }
}
