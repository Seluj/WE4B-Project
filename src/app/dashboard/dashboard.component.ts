import {Component, OnInit} from '@angular/core';
import {UtilisateurComponent} from "../utilisateur/utilisateur.component";
import {Utilisateur} from "../models/utilisateur.model";
import {Restaurateur} from "../models/restaurateur.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  utilisateur!: Utilisateur;
  restaurateur!: Restaurateur;


  ngOnInit(): void {
    this.utilisateur = new Utilisateur("Michel","Schmürz","SchmurzMichMich@gmail.com","mdp")
    this.restaurateur = new Restaurateur("Bernard","LaMouette","bernardmoumou@gmail.com","mdp", 1)
  }
}
