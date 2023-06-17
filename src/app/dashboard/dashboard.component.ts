import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../models/utilisateur.model";
import {Restaurateur} from "../models/restaurateur.model";
import {Carte} from "../models/carte.model";
import {Restaurant} from "../models/restaurant.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  utilisateur!: Utilisateur;
  restaurateur!: Restaurateur;
  carte!: Carte;
  restaurant!: Restaurant;

  ngOnInit(): void {
    this.utilisateur = new Utilisateur("Michel","Schmürz","SchmurzMichMich@gmail.com","mdp", 0)
    this.restaurateur = new Restaurateur("Bernard","LaMouette","bernardmoumou@gmail.com","mdp", 1)
    this.restaurant = new Restaurant(1,"BOB", "5 rue du BOB", "../../assets/restaurant_belfort.jpg", "wow trop bien BOB", 0, 0, 0);
    this.carte = new Carte(1,"Restaurant Belfort", "90000 Belfort, France", "../../assets/restaurant_belfort.jpg", 5);
  }
}
