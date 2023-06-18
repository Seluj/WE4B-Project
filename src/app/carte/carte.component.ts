import { Component, Input, OnInit } from '@angular/core';
import { RestaurantsService } from "../restaurants.service";
import {Restaurant} from "../models/restaurant.model";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() restaurant!: Restaurant;
  popularite!: number;
  liked!: boolean;
  class!: string;

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.liked = false;
    this.class = "like";

    console.log(this.restaurant.popularite);
  }

  onLike() {
    if (this.liked) {
      // @ts-ignore
      this.restaurant.popularite--;
      this.liked = false;
      this.class = "like";
    } else {
      // @ts-ignore
      this.restaurant.popularite++;
      this.liked = true;
      this.class = "unlike";
    }
  }
}
