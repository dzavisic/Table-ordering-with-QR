import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  addons$ : Observable<any>;
  burgers$ : Observable<any>;
  chickens$ : Observable<any>;
  deserts$ : Observable<any>;
  fish$ : Observable<any>;
  grill$ : Observable<any>;
  pizzas$ : Observable<any>;
  platters$ : Observable<any>;
  salads$ : Observable<any>;
  sandwiches$ : Observable<any>;

  constructor(private http: HttpClient) {
    this.addons$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/addons/all');
    this.burgers$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/burger/all');
    this.chickens$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/chicken/all');
    this.deserts$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/deserts/all');
    this.salads$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/salads/all');
    this.sandwiches$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/sandwiches/all');
    this.fish$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/fish/all');
    this.grill$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/grill/all');
    this.pizzas$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/pizza/all');
    this.platters$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/platters/all');
  }
}
