import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerModalPage } from './burger-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerModalPageRoutingModule {}
