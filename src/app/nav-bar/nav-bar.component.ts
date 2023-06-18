import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
import {UtilisateurService} from "../utilisateur.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUrl: string | undefined;
  connected: boolean = false;
  prenom!: string;
  nom!: string;

  constructor(private router: Router, private serviceUtilisateur: UtilisateurService) {
    router.events.subscribe(event => {
      if (event instanceof RouterEvent) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit(): void {
    if (this.serviceUtilisateur.estConnecte()) {
      this.connected = true;
      this.prenom = <string>this.serviceUtilisateur.getSessionItem('prenom');
      this.nom = <string>this.serviceUtilisateur.getSessionItem('nom');
    } else {
      this.connected = false;
    }
  }

  onDeconnexion() {
    this.serviceUtilisateur.deleteSession();
    this.router.navigate(['/']);
    window.location.reload();
  }
}
