import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Restaurant } from "./Bean/Restaurant";
import { Observable } from "rxjs";
import { Details } from "./Bean/Details";
import { AllMenu } from "./Bean/AllMenu";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private getRestaurant: string = "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants";
  private getDetails:string = "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails";
  private getMenus:string = "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu";

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant>{
    return this.http.get<Restaurant>(this.getRestaurant);
  }

  getRestaurantById(): Observable<Details>{
    return this.http.get<Details>(this.getDetails);
  }

  getMenu(): Observable<AllMenu>{
    return this.http.get<AllMenu>(this.getMenus);
  }
}
