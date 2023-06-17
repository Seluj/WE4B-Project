import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import {RestaurantsService} from "../restaurants.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant!: Restaurant;
  liked!: boolean;
  popularity!: number;

  error = '';
  success = '';

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantsService) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurant.id = params['id'];
    });
    this.getRestaurantById();
  }

  getRestaurantById(): void {
    this.restaurantService.getRestaurantById(this.restaurant.id).subscribe((data: any) => {
        if (data) {
          this.restaurant = new Restaurant(
            data.nom,
            data.adresse,
            data.image,
            data.description,
            data.prix,
            data.user_id,
            data.date_edit
          );
        }
      },
      (err) => {
        console.log(err);
        this.error = 'Failed to get restaurant details.';
      }
    );
  }
}
