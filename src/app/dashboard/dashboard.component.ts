import { Component, OnInit } from '@angular/core';
import { Utilisateur } from "../models/utilisateur.model";
import { Restaurant } from "../models/restaurant.model";
import { UtilisateurService } from "../utilisateur.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  utilisateur!: Utilisateur;
  restaurant!: Restaurant;
  restaurateurTest!: boolean;

  constructor(public serviceUtilisateur: UtilisateurService, private router: Router) {
  }

  ngOnInit(): void {
    this.restaurateurTest = false;
    // On regarde si l'utilisateur est connecté
    if (this.serviceUtilisateur.estConnecte()) {

      // On regarde si l'utilisateur est restaurateur
      if (this.serviceUtilisateur.estRestaurateur()) {
        this.restaurateurTest = true;
      }

      this.utilisateur = new Utilisateur(
        parseInt(<string>this.serviceUtilisateur.getSessionItem("id")),
        <string>this.serviceUtilisateur.getSessionItem("prenom"),
        <string>this.serviceUtilisateur.getSessionItem("nom"),
        <string>this.serviceUtilisateur.getSessionItem("email"),
        <string>this.serviceUtilisateur.getSessionItem("mdp"),
        parseInt(<string>this.serviceUtilisateur.getSessionItem("restaurateur")),
      );
    } else {
      this.router.navigate(['/']);
    }

  }

}
