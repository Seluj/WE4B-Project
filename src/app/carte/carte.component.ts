import { Component, Input, OnInit } from '@angular/core';
import { Carte } from '../models/carte.model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  popularite!: number;
  @Input() nom!: string;
  @Input() adresse!: string;
  @Input() image!: string;
  @Input() id!: number;

  liked!: boolean;
  class!: string;

  ngOnInit(): void {
    this.liked = false;
    this.class = "like";
    this.popularite = 0;
  }

  onLike() {
    if (this.liked) {
      this.popularite--;
      this.liked = false;
      this.class = "like";
    } else {
      this.popularite++;
      this.liked = true;
      this.class = "unlike";
    }
  }
}
