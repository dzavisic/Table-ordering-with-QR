import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerModalPageRoutingModule } from './burger-modal-routing.module';

import { BurgerModalPage } from './burger-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerModalPageRoutingModule
  ],
  declarations: [BurgerModalPage]
})
export class BurgerModalPageModule {}
