import {Component, Input} from '@angular/core';
import {Restaurateur} from "../models/restaurateur.model";

@Component({
  selector: 'app-restaurateur',
  templateUrl: './restaurateur.component.html',
  styleUrls: ['./restaurateur.component.css']
})
export class RestaurateurComponent {
  @Input() restaurateur!: Restaurateur;
}
