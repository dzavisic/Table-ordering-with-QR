import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes.service';
import { ModalController } from '@ionic/angular';
import { AddToCartModalPage } from 'src/app/pages/add-to-cart-modal/add-to-cart-modal.page';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss'],
})
export class SaladComponent implements OnInit {

  dishes$: Observable<any>;
  constructor(private route: ActivatedRoute,public dishService: DishesService,public modalController:ModalController) { 
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

  url_id:any;
  private routeSub: Subscription;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.url_id = params['id'];
    });
    this.dishes$ = this.dishService.salads$.pipe(
      map(data => data.data)
    )
  }

}
