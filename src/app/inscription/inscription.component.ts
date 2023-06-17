import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../custom-validators";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,

      CustomValidators.patternValidator(/@/, {hasAt: true}),

      // utilisation d'un modèle pour vérifier que l'email est valide au lieu de type="email"
      Validators.pattern(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)
    ]),
    pwd: new FormControl('', [
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
      // Doit correspondre au champ pwd2
      CustomValidators.matchValidator('pwd2', true)
    ]),
    pwd2: new FormControl('', [
      // Obligation de mettre un mot de passe de confirmation
      Validators.required,
      // Doit correspondre au champ pwd
      CustomValidators.matchValidator('pwd')
    ]),
    nom: new FormControl('', [
      Validators.required,
      // Obligation de mettre un nom sans chiffre
      Validators.pattern(/^[a-zA-ZÀ-ÿ--]*$/)
    ]),
    prenom: new FormControl('', [
      Validators.required,
      // Obligation de mettre un prénom sans chiffre
      Validators.pattern(/^[a-zA-ZÀ-ÿ--]*$/)
    ]),
    restaurateur: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onInscriptionForm() {
    console.log(this.inscriptionForm.value);
  }

}
