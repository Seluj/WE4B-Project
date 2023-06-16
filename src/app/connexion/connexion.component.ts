import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  connexionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormControl('', Validators.required)
    });
  }

  onConnnexionForm() {
    console.log(this.connexionForm.value);
  }
}
