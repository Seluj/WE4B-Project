import {Component, OnInit} from '@angular/core';
import {Carte} from "../models/carte.model";
import {UtilisateurComponent} from "../utilisateur/utilisateur.component";
import {Utilisateur} from "../models/utilisateur.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  popularity!: number;
  user1!: Utilisateur;
  user2!: Utilisateur
  user3!: Utilisateur
  user4!: Utilisateur


  ngOnInit(): void {
    this.user1 = new Utilisateur("Michel","Schmürz","SchmurzMichMich@gmail.com","mdp")
    this.user2 = new Utilisateur("Michel","Schmürz","SchmurzMichMich@gmail.com","mdp");
    this.user3 = new Utilisateur("Michel","Schmürz","SchmurzMichMich@gmail.com","mdp");
    this.user4 = new Utilisateur("Michel","Schmürz","SchmurzMichMich@gmail.com","mdp");
  }
}
