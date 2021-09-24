import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllRestaurant } from '../Bean/AllRestaurants';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  allData:AllRestaurant[];
  constructor(private getRestaurantService: RestaurantService,
                      private router: Router) { }

  ngOnInit(): void {
    this.getRestaurantService.getRestaurants().subscribe(data => {
      this.allData = data.allRestaurants;
    });
  }

  getDetails(id:number) {
    this.router.navigateByUrl('restaurant/detail/' + id);
  }
 
}
