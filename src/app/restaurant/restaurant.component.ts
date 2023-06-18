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
  restaurant: Restaurant = {
    id: 0,
    nom: '',
    adresse: '',
    image: '',
    description: '',
    prix: 0,
    user_id: 0,
    date_edit: '',
    popularite: 0,
  };

  liked!: boolean;
  popularity!: number;

  error = '';
  success = '';

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantsService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.countLikes(id);
      this.getRestaurantById(id);
    });
  }

  countLikes(id: number): void {
    this.restaurantService.countLikes(id)
      .subscribe((data: any) => {
          this.popularity = data;
        },
        (err) => {
          console.log(err);
          this.error = 'Failed to get restaurant details.';
        });
  }

  getRestaurantById(id : number): void {
    this.restaurantService.getRestaurantById(id).subscribe((data: any) => {
        if (data) {
          this.restaurant = {
            id: data.id,
            nom: data.nom,
            adresse: data.adresse,
            image: data.image,
            description: data.description,
            prix: data.prix,
            user_id: data.user_id,
            popularite: this.popularity,
            date_edit: data.date_edit
          };
        }
      },
      (err) => {
        console.log(err);
        this.error = 'Failed to get restaurant details.';
      }
    );
  }
}
