import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../models/utilisateur.model";
import {Restaurateur} from "../models/restaurateur.model";
import {Restaurant} from "../models/restaurant.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../custom-validators";
import {UtilisateurService} from "../utilisateur.service";
import {first} from "rxjs";
import {InscriptionComponent} from "../inscription/inscription.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inscription!: InscriptionComponent
  service!: UtilisateurService;
  utilisateur!: Utilisateur;
  restaurateur!: Restaurateur;
  nom!: string;
  adresse!: string;
  image!: string;
  restaurant!: Restaurant;

  ngOnInit(): void {
    //this.service.estConnecte();

    this.utilisateur = new Utilisateur("Michel","Schmürz","SchmurzMichMich@gmail.com","mdp", 0);
    this.restaurateur = new Restaurateur("Bernard","LaMouette","bernardmoumou@gmail.com","mdp", 1);
    this.restaurant = new Restaurant(1,"BOB", "5 rue du BOB", "../../assets/restaurant_belfort.jpg", "wow trop bien BOB", 0, 0, 0);
    this.nom = "Restaurant Belfort";
    this.adresse = "90000 Belfort, France";
    this.image = "../../assets/restaurant_belfort.jpg";
  }

}
