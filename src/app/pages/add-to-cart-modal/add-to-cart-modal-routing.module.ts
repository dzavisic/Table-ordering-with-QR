import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToCartModalPage } from './add-to-cart-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddToCartModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToCartModalPageRoutingModule {}
