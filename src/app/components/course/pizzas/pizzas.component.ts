import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddToCartModalPage } from 'src/app/pages/add-to-cart-modal/add-to-cart-modal.page';
import { DishesService } from 'src/app/services/dishes.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss'],
})
export class PizzasComponent implements OnInit {

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
    this.dishes$ = this.dishService.pizzas$.pipe(
      map(data => data.data)
    )
  }

}
