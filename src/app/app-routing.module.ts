import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddonComponent } from './components/course/addon/addon.component';
import { DesertComponent } from './components/course/desert/desert.component';
import { SaladComponent } from './components/course/salad/salad.component';
import { DrinkMenuComponent } from './components/drink-menu/drink-menu.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { HomeComponent } from './components/home/home.component';
import { NoncarbonatedComponent } from './components/drinks/noncarbonated/noncarbonated.component';
import { CarbonatedComponent } from './components/drinks/carbonated/carbonated.component';
import { WarmComponent } from './components/drinks/warm/warm.component';
import { MainComponent } from './components/main/main.component';
import { BurgersComponent } from './components/course/burgers/burgers.component';
import { PizzasComponent } from './components/course/pizzas/pizzas.component';
import { FishComponent } from './components/course/fish/fish.component';
import { ChickenComponent } from './components/course/chicken/chicken.component';
import { GrillComponent } from './components/course/grill/grill.component';
import { PlattersComponent } from './components/course/platters/platters.component';
import { SandwichesComponent } from './components/course/sandwiches/sandwiches.component';
import { WineComponent } from './components/drinks/wine/wine.component';
import { BeerComponent } from './components/drinks/beer/beer.component';
import { StrongComponent } from './components/drinks/strong/strong.component';

const routes: Routes = [
  { path: ':id', component: MainComponent },
  { path: ':id/home', component: HomeComponent },
  { path: ':id/menu/food', component: FoodMenuComponent },
  { path: ':id/menu/drink', component: DrinkMenuComponent },
  { path: ':id/menu/drink/noncarb', component: NoncarbonatedComponent },
  { path: ':id/menu/drink/carb', component: CarbonatedComponent },
  { path: ':id/menu/drink/warm', component: WarmComponent },
  { path: ':id/menu/drink/wine', component: WineComponent },
  { path: ':id/menu/drink/beer', component: BeerComponent },
  { path: ':id/menu/drink/strong', component: StrongComponent },
  { path: ':id/menu/food/burgers', component: BurgersComponent },
  { path: ':id/menu/food/pizzas', component: PizzasComponent },
  { path: ':id/menu/food/fish', component: FishComponent },
  { path: ':id/menu/food/chicken', component: ChickenComponent },
  { path: ':id/menu/food/grill', component: GrillComponent },
  { path: ':id/menu/food/platters', component: PlattersComponent },
  { path: ':id/menu/food/sandwich', component: SandwichesComponent },
  { path: ':id/menu/food/salads', component: SaladComponent },
  { path: ':id/menu/food/deserts', component: DesertComponent },
  { path: ':id/menu/food/addons', component: AddonComponent },

  {
    path: 'add-to-cart-modal',
    loadChildren: () => import('./pages/add-to-cart-modal/add-to-cart-modal.module').then( m => m.AddToCartModalPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },  {
    path: 'burger-modal',
    loadChildren: () => import('./pages/burger-modal/burger-modal.module').then( m => m.BurgerModalPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
