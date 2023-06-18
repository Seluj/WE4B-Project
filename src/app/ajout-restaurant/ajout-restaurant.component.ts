import { Component, Input } from '@angular/core';
import { Restaurant } from "../models/restaurant.model";
import { FormGroup } from "@angular/forms";
import { Utilisateur } from "../models/utilisateur.model";

@Component({
  selector: 'app-ajout-restaurant',
  templateUrl: './ajout-restaurant.component.html',
  styleUrls: ['./ajout-restaurant.component.css']
})
export class AjoutRestaurantComponent {
  @Input() utilisateur!: Utilisateur;
  restaurant!: Restaurant;

  restaurantForm = new FormGroup({

  })
}
