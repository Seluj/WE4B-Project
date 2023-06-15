import { Component, OnInit } from '@angular/core';
import { Carte } from '../models/carte.model';

@Component({
  selector: 'app-grille-carte',
  templateUrl: './grille-carte.component.html',
  styleUrls: ['./grille-carte.component.css']
})
export class GrilleCarteComponent implements OnInit {
  popularity!: number;
  carte1!: Carte;
  carte2!: Carte;
  carte3!: Carte;
  carte4!: Carte;

  ngOnInit(): void {
    this.carte1 = new Carte("Restaurant Belfort", "90000 Belfort, France", "../../assets/restaurant_belfort.jpg", 5);
    this.carte2 = new Carte("Restaurant Lyon", "69000 Lyon, France", "../../assets/restaurant_lyon.jpg", 15);
    this.carte3 = new Carte("Restaurant Paris", "75000 Paris, France", "../../assets/restaurant_paris.png", 59);
    this.carte4 = new Carte("Restaurant Belfort", "10115 Berlin, Germany", "../../assets/restaurant_berlin.jpg", 48);
  }
}
