import { Component, OnInit } from '@angular/core';
import { Carte } from '../models/carte.model';
import {Restaurant} from "../models/restaurant.model";
import {RestaurantsService} from "../restaurants.service";

@Component({
  selector: 'app-grille-carte',
  templateUrl: './grille-carte.component.html',
  styleUrls: ['./grille-carte.component.css']
})
export class GrilleCarteComponent implements OnInit {
  popularity!: number;

  restaurants: Restaurant[] = [];
  error = '';
  success = '';

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(
      (data: any) => {
        for (let i = 0; i < data.size; i++) {
          this.restaurants[i].id = data[i].id;
          this.restaurants[i].nom = data[i].nom;
          this.restaurants[i].adresse = data[i].adresse;
          this.restaurants[i].image = data[i].image;
          this.restaurants[i].description = data[i].description;
          this.restaurants[i].prix = data[i].prix;
          this.restaurants[i].user_id = data[i].user_id;
          this.restaurants[i].popularite = data[i].popularite;
        }
        this.restaurants = data;
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
}
