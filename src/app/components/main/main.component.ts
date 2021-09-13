import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  url_id:any;
  check:any;

  constructor(private route: ActivatedRoute, private _router: Router, private cartService: CartService, private http:HttpClient) { 
    
  }
  public routeSub: Subscription;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.url_id = params['id'];
    });
    
    location.reload()
    
    setTimeout(()=>{
      this.cartService.emptyCartDish(this.url_id);
      this.cartService.create_cart(this.url_id);
      setTimeout(()=>{
        let url_path = this.url_id + '/home';
        this._router.navigate([url_path]);
      },300)
    },1000)
  }



}
