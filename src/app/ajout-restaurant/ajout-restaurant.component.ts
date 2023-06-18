import {Component, Input} from '@angular/core';
import {Restaurateur} from "../models/restaurateur.model";

@Component({
  selector: 'app-ajout-restaurant',
  templateUrl: './ajout-restaurant.component.html',
  styleUrls: ['./ajout-restaurant.component.css']
})
export class AjoutRestaurantComponent {
  @Input() ajoutRestaurant!: Restaurateur;
}
