import { Component, Input } from '@angular/core';
import { Restaurant } from "../models/restaurant.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Utilisateur } from "../models/utilisateur.model";
import { RestaurantsService } from "../restaurants.service";
import {UtilisateurService} from "../utilisateur.service";

@Component({
  selector: 'app-ajout-restaurant',
  templateUrl: './ajout-restaurant.component.html',
  styleUrls: ['./ajout-restaurant.component.scss']
})
export class AjoutRestaurantComponent {
  @Input() utilisateur!: Utilisateur;
  restaurant!: Restaurant;

  restaurantForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required]),
  })


  constructor(private restaurantService: RestaurantsService, private utilisateurService: UtilisateurService) {
  }

  onRestaurantForm() {
    this.restaurant = new Restaurant(
      0,
      <string>this.restaurantForm.value.nom,
      <string>this.restaurantForm.value.adresse,
      "nothing.jpeg",
      <string>this.restaurantForm.value.description,
      parseInt(<string>this.restaurantForm.value.type),
      parseInt(<string>this.restaurantForm.value.prix),
      parseInt(<string>this.utilisateurService.getSessionItem('id')),
      0,
      new Date().toString(),
    );
    console.log(this.restaurant);

    this.restaurantService.addRestaurants(this.restaurant).subscribe(
      (data: any) => {
        console.log(data);
        this.restaurant = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
