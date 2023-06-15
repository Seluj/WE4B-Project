import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      email: '',
      pwd: '',
    });
  }

  onConnnexionForm() {
    console.log(this.connexionForm.value);
  }
}
