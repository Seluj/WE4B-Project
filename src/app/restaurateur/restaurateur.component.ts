import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from "../models/utilisateur.model";
import { Restaurant } from "../models/restaurant.model";
import { RestaurantsService } from "../restaurants.service";

@Component({
  selector: 'app-restaurateur',
  templateUrl: './restaurateur.component.html',
  styleUrls: ['./restaurateur.component.css']
})
export class RestaurateurComponent implements OnInit {
  @Input() utilisateur!: Utilisateur;

  restaurant!: Restaurant;

  constructor(public serviceRestaurant: RestaurantsService) {
  }

  ngOnInit(): void {
    this.serviceRestaurant.getRestaurantByRestaurateur(this.utilisateur.id)
      .subscribe((data: any) => {
        this.restaurant = new Restaurant(
          data['id'],
          data['nom'],
          data['adresse'],
          data['image'],
          data['description'],
          data['type'],
          data['prix'],
          data['date_edit'],
          this.utilisateur.id,
        );
      });
  }
}
