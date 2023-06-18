import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from "../restaurants.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurant!: Restaurant;

  popularity!: number;
  id!: number;
  error = '';

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantsService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.countLikes(this.id);
    this.getRestaurantById(this.id);
  }

  countLikes(id: number) {
    this.restaurantService.countLikes(id)
      .subscribe(data => {
          this.popularity = data;
        },
        (err) => {
          console.log(err);
          this.error = 'Failed to get restaurant details.';
        });
  }

  getRestaurantById(id : number) : void {
    this.restaurantService.getRestaurantById(id)
      .subscribe(data => {

        this.restaurant = new Restaurant(
          data['id'],
          data['nom'],
          data['adresse'],
          data['image'],
          data['description'],
          data['type'],
          data['prix'],
          data['user_id'],
          this.popularity
        );

      },
      (err) => {
        console.log(err);
        this.error = 'Failed to get restaurant details.';
      }
    );
  }
  print() {
    console.log(this.restaurant);
  }
}
