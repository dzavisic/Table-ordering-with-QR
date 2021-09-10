import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes.service';
import { ModalController } from '@ionic/angular';
import { AddToCartModalPage } from 'src/app/pages/add-to-cart-modal/add-to-cart-modal.page';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.scss'],
})
export class AddonComponent implements OnInit {
  
  
  constructor(private route: ActivatedRoute,public dishService: DishesService,public modalController:ModalController,private _router: Router) { 

  }

  
  dishes$: Observable<any>;
  url_id:any;
  routeSub: Subscription;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.url_id = params['id'];
    });
    this.dishes$ = this.dishService.addons$.pipe(
      map(data => data.data)
    )
  }

  async presentModal(id:string, name:string, price:string, type:string) {
    const modal = await this.modalController.create({
      component: AddToCartModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        url_id: this.url_id,
        'id': id,
        'name': name,
        'price': price,
        'type':type
      }
    });
    return await modal.present();
  }

}
