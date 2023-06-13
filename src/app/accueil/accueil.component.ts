import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  title!: string;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = "Bienvenue sur la page d'accueil ! :D"
    this.imageUrl = "../../assets/teamwork.webp";
  }
}
