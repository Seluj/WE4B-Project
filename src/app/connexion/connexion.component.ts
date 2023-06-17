import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../custom-validators";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

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
    pwd: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onConnnexionForm() {
    console.log(this.connexionForm.value);
  }
}
