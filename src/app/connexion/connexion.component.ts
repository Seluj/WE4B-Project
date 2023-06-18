import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../custom-validators";
import { UtilisateurService } from "../utilisateur.service";
import { Utilisateur } from "../models/utilisateur.model";
import { first } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  utilisateur!: Utilisateur;

  connexionForm = new FormGroup({

    // Vérification de l'email
    email: new FormControl('', [
      // Obligation de mettre un email
      Validators.required,
      // Teste préalable pour savoir si l'email contient un @
      CustomValidators.patternValidator(/@/, {hasAt: true}),

      CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
      // utilisation d'un modèle pour vérifier que l'email est valide au lieu de type="email"
      Validators.pattern(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)
    ]),

    // Vérification du mot de passe
    mdp: new FormControl('', Validators.required)
  });

  constructor(public connexion: UtilisateurService, public router: Router) {
  }

  ngOnInit(): void {
    if (this.connexion.estConnecte()) {
      this.router.navigate(['/']);
    }
  }

  onConnnexionForm(): void {
    console.log(this.connexionForm.value);

    this.utilisateur = new Utilisateur(
      0,
      "test",
      "test",
      <string>this.connexionForm.value.email,
      <string>this.connexionForm.value.mdp,
      0
    );

    this.connexion.connexion(this.utilisateur)
      .pipe(first())
      .subscribe(
        data => {
          if (data['message'] === "Email ou mot de passe incorrect") {
            alert(data['message'])
          } else if (data['message'] === "OK") {
            this.connexion.setSessionItem("id", data['id']);
            this.connexion.setSessionItem("prenom", data['prenom']);
            this.connexion.setSessionItem("nom", data['nom']);
            this.connexion.setSessionItem("mdp", data['mdp']);
            this.connexion.setSessionItem("email", data['email']);
            this.connexion.setSessionItem("restaurateur", data['restaurateur']);

            console.log("Connexion réussie");
            this.router.navigate(['/']);
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  protected readonly UtilisateurService = UtilisateurService;
}
