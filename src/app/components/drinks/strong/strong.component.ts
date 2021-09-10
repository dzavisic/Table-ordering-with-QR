import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddToCartModalPage } from 'src/app/pages/add-to-cart-modal/add-to-cart-modal.page';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-strong',
  templateUrl: './strong.component.html',
  styleUrls: ['./strong.component.scss'],
})
export class StrongComponent implements OnInit {

  drinks$: Observable<any>;
  id:any;
  url_id:any;
  private routeSub: Subscription;
  constructor(public drinkService: DrinksService, private route: ActivatedRoute, private _router: Router, public modalController:ModalController) { 
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
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.url_id = params['id'];
    });
    this.drinks$ = this.drinkService.strong$.pipe(
      map(data => data.data)
    )
  }
  redirect(path:string,course:string){
    let url_path = this.url_id + path;
    this._router.navigate([url_path + '/' + course]);
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}
