import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss'],
})
export class FoodMenuComponent implements OnInit {
  url_id:any;
  constructor(private route: ActivatedRoute, private _router: Router) { }
  private routeSub: Subscription;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.url_id = params['id'];
    });
  }
  redirect(path:string){
    let url_path = this.url_id + path;
    this._router.navigate([url_path]);
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }
}
