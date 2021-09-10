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
    this.nonCarb$ = this.http.get('http://localhost:3014/api/noncarbonated/all');
    this.carb$ = this.http.get('http://localhost:3014/api/carbonated/all');
    this.strong$ = this.http.get('http://localhost:3014/api/strong/all');
    this.beer$ = this.http.get('http://localhost:3014/api/beer/all');
    this.wine$ = this.http.get('http://localhost:3014/api/wine/all');
    this.warm$ = this.http.get('http://localhost:3014/api/warm_beverages/all');
  }

}
