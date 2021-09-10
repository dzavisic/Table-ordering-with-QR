import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { FooterComponent } from './components/footer/footer.component';


import { SaladComponent } from './components/course/salad/salad.component';
import { DesertComponent } from './components/course/desert/desert.component'; 
import { AddonComponent } from './components/course/addon/addon.component';
import { ButtonsComponent } from './components/buttons/buttons.component';


import { DrinkMenuComponent } from './components/drink-menu/drink-menu.component';
import { NoncarbonatedComponent } from './components/drinks/noncarbonated/noncarbonated.component';


import { DishesService } from './services/dishes.service';
import { AddToCartModalPage } from './pages/add-to-cart-modal/add-to-cart-modal.page';
import { CartModalPage } from './pages/cart-modal/cart-modal.page';
import { FormsModule } from '@angular/forms';
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
import { StrongComponent } from './components/drinks/strong/strong.component';
import { BeerComponent } from './components/drinks/beer/beer.component';
import { WineComponent } from './components/drinks/wine/wine.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    NavbarComponent,
    FoodMenuComponent,
    FooterComponent,
    ButtonsComponent,
    SaladComponent,
    DesertComponent,
    BurgersComponent,
    PizzasComponent,
    FishComponent,
    ChickenComponent,
    GrillComponent,
    PlattersComponent,
    SandwichesComponent,
    AddonComponent,
    AddToCartModalPage,
    CartModalPage,
    DrinkMenuComponent,
    NoncarbonatedComponent,
    CarbonatedComponent,
    StrongComponent,
    BeerComponent,
    WarmComponent,
    WineComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DishesService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
