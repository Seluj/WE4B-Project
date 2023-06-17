import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {CustomValidators} from "../custom-validators";

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
      Validators.required,

      CustomValidators.patternValidator(/\d/, {hasNumber: true}),

      CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),

      CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),

      CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {hasSpecialCharacters: true}),

      Validators.minLength(8),

      CustomValidators.matchValidator('pwd2', true)
    ]),
    pwd2: new FormControl('', [
      Validators.required,
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
