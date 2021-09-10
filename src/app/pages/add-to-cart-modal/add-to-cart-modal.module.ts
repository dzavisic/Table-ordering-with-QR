import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToCartModalPageRoutingModule } from './add-to-cart-modal-routing.module';

import { AddToCartModalPage } from './add-to-cart-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToCartModalPageRoutingModule
  ],
  declarations: [AddToCartModalPage]
})
export class AddToCartModalPageModule {}
