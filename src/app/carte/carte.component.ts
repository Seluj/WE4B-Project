import { Component, Input, OnInit } from '@angular/core';
import { Carte } from '../models/carte.model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() carte!: Carte;

  liked!: boolean;
  class!: string;

  ngOnInit(): void {
    this.liked = false;
    this.class = "like";
  }

  onLike() {
    if (this.liked === true) {
      this.carte.popularite--;
      this.liked = false;
      this.class = "like";
    } else {
      this.carte.popularite++;
      this.liked = true;
      this.class = "unlike";
    }
  }
}
