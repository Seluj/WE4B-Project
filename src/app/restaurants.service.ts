import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Restaurant } from "./models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService implements OnInit {
  baseUrl = 'http://79.80.238.57:34229/WE4B-Project/api';

  constructor(private http: HttpClient) {
  }

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
    return this.http.get(`${this.baseUrl}/getRestaurantById.php`, { params: { id: id } }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public searchRestaurants(cheap: boolean, moderate: boolean, expensive: boolean, adresse: string, type1: boolean, type2: boolean, type3: boolean) {
    return this.http.get(`${this.baseUrl}/searchRestaurants.php`, { params: { cheap: cheap, moderate: moderate, expensive: expensive, adresse: adresse, type1: type1, type2: type2, type3: type3 } }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  public getRestaurantByRestaurateur(id: number) {
    return this.http.get(`${this.baseUrl}/getRestaurantByRestaurateur.php`, { params: { id: id.toString() } }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  public countLikes(id_restaurant: number) {
    return this.http.get(`${this.baseUrl}/countLikes.php`, { params: { id_restaurant: id_restaurant.toString() } }).pipe(
      map((res: any) => {
        return res['count(id)'];
      })
    );
  }

  createRestaurant(data: Restaurant) {
    return this.http.post(`${this.baseUrl}/createRestaurant.php`, { data: data }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addLike(restau_id: number, user_id: number) {
    return this.http.post(`${this.baseUrl}/addLike.php`, { restau_id: restau_id, user_id: user_id  }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getLike(restau_id: number, user_id: number) {
    return this.http.get(`${this.baseUrl}/getLike.php`, { params: { restau_id: restau_id, user_id: user_id } }).pipe(
      map((res: any) => {
        return res['count(id)'];
      })
    );
  }

  removeLike(restau_id: number, user_id: number) {
    return this.http.post(`${this.baseUrl}/removeLike.php`, { restau_id: restau_id, user_id: user_id }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
