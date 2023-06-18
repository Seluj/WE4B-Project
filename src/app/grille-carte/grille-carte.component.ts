import { Component, Input, OnInit } from '@angular/core';
import {Restaurant} from "../models/restaurant.model";
import {RestaurantsService} from "../restaurants.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grille-carte',
  templateUrl: './grille-carte.component.html',
  styleUrls: ['./grille-carte.component.css']
})
export class GrilleCarteComponent implements OnInit {
  @Input() customInitializeMode: string = '';
  popularity!: number;

  restaurants: Restaurant[] = [];
  error = '';
  success = '';

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    if (this.customInitializeMode === 'recherche') {
      this.route.params.subscribe(params => {
        const cheap = params['cheap'];
        const moderate = params['moderate'];
        const expensive = params['expensive'];
        const adresse = params['adresse'];
        const type1 = params['type1'];
        const type2 = params['type2'];
        const type3 = params['type3'];
        this.searchRestaurants(cheap, moderate, expensive, adresse, type1, type2, type3);
      });
    } else {
      this.getRestaurants();
    }
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

  searchRestaurants(cheap: boolean, moderate: boolean, expensive: boolean, adresse: Text, type1: boolean, type2: boolean, type3: boolean): void {
    this.restaurantService.searchRestaurants(cheap, moderate, expensive, adresse, type1, type2, type3).subscribe(
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
