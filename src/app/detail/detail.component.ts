import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Menu } from '../Bean/Menu';
import { RestaurantDetails } from '../Bean/RestaurantDetail';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: any;
  details: RestaurantDetails[];
  restDetail: RestaurantDetails;
  menus:Menu[]
  constructor(
    private getRestaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getRestaurantService.getRestaurantById().subscribe((data) => {
      this.details = data.restaurantDetails;
    });

    this.getRestaurantService.getMenu().subscribe((data => {
        this.menus = data.menu;
        console.log(this.menus)
    }))
  }
}
