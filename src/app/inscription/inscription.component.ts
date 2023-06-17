import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../custom-validators";
import { UtilisateurService } from "../utilisateur.service";
import { first } from "rxjs";
import { Utilisateur } from "../models/utilisateur.model";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  utilisateur!: Utilisateur;

  inscriptionForm = new FormGroup({

    // Vérification du nom
    nom: new FormControl('', [
      Validators.required,
      // Obligation de mettre un nom sans chiffre
      Validators.pattern(/^[a-zA-ZÀ-ÿ--]*$/)
    ]),

    // Vérification du prénom
    prenom: new FormControl('', [
      Validators.required,
      // Obligation de mettre un prénom sans chiffre
      Validators.pattern(/^[a-zA-ZÀ-ÿ--]*$/)
    ]),

    // Vérification de l'email
    email: new FormControl('', [
      Validators.required,

      CustomValidators.patternValidator(/@/, {hasAt: true}),

      // utilisation d'un modèle pour vérifier que l'email est valide au lieu de type="email"
      Validators.pattern(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)
    ]),

    // Vérification du mot de passe
    mdp: new FormControl('', [
      // Obligation de mettre un mot de passe
      Validators.required,
      // Obligation de mettre 1 chiffre
      CustomValidators.patternValidator(/\d/, {hasNumber: true}),
      // Obligation de mettre 1 lettre majuscule
      CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
      // Obligation de mettre 1 lettre minuscule
      CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
      // Obligation de mettre 1 caractère spécial
      CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {hasSpecialCharacters: true}),
      // Obligation de mettre au moins 8 caractères
      Validators.minLength(8),
      // Doit correspondre au champ mdp2
      CustomValidators.matchValidator('mdp2', true)
    ]),

    // Vérification du mot de passe de confirmation
    mdp2: new FormControl('', [
      // Obligation de mettre un mot de passe de confirmation
      Validators.required,
      // Doit correspondre au champ mdp
      CustomValidators.matchValidator('mdp')
    ]),

    restaurateur: new FormControl('')
  });

  constructor(private inscription: UtilisateurService) {

  }

  ngOnInit(): void {
  }

  onInscriptionForm() {
    let restaurateur: number;
    if (<string>this.inscriptionForm.value.restaurateur) {
      restaurateur = 1;
    } else {
      restaurateur = 0;
    }

    this.utilisateur = new Utilisateur(
      <string>this.inscriptionForm.value.prenom,
      <string>this.inscriptionForm.value.nom,
      <string>this.inscriptionForm.value.email,
      <string>this.inscriptionForm.value.mdp,
      restaurateur,
    );


    console.log(this.inscriptionForm.value);

    this.inscription.inscription(this.utilisateur)
      .pipe(first())
      .subscribe(data => {
        console.log("Success");
        this.inscriptionForm.reset();
      },
        error => {
        console.log(error);
        });
  }
}
