import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Restaurant} from "./models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService implements OnInit {
  baseUrl = 'http://localhost/WE4B-Project/api';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public getAllRestaurants() {
    return this.http.get(`${this.baseUrl}/getRestaurants.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }


  public addRestaurants(data: Restaurant) {
    return this.http.post(`${this.baseUrl}/addRestaurants.php`, {data: data}).pipe(
      map((res: any) => {
        return res['data'];
      })
    )
  }

  public getRestaurantById(id: number) {
    return this.http.get(`${this.baseUrl}/getRestaurantById.php?id=${id}`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }


}
