import { Component, Input } from '@angular/core';
import { Restaurant } from "../models/restaurant.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Utilisateur } from "../models/utilisateur.model";
import { RestaurantsService } from "../restaurants.service";

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
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required]),
  })


  constructor(private restaurantService: RestaurantsService) {
  }

  onRestaurantForm() {
    this.restaurant = new Restaurant(
      0,
      <string>this.restaurantForm.value.nom,
      <string>this.restaurantForm.value.adresse,
      <string>this.restaurantForm.value.image,
      <string>this.restaurantForm.value.description,
      parseInt(<string>this.restaurantForm.value.prix),
      parseInt(<string>this.restaurantForm.value.type),
      this.utilisateur.id,
      0,
      new Date().toString(),
    );

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
