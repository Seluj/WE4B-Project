import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs";
import {Restaurant} from "./models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService implements OnInit {
  baseUrl = 'http://79.80.238.57:34229/WE4B-Project/api';
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
    const params = new HttpParams()
    .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/getRestaurantById.php`, { params: params }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }


}
