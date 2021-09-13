import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  nonCarb$: Observable<any>;
  carb$: Observable<any>;
  strong$: Observable<any>;
  beer$: Observable<any>;
  wine$: Observable<any>;
  warm$: Observable<any>;

  constructor(private http: HttpClient) { 
    this.nonCarb$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/noncarbonated/all');
    this.carb$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/carbonated/all');
    this.strong$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/strong/all');
    this.beer$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/beer/all');
    this.wine$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/wine/all');
    this.warm$ = this.http.get('https://restaurant-table-server.herokuapp.com/api/warm_beverages/all');
  }

}
