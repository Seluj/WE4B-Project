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

  liked!: boolean;
  class!: string;

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.liked = false;
    this.class = "like";
    this.countLikes(this.restaurant.id);
  }

  onLike() {
    if (this.liked) {
      this.restaurant.popularite--;
      this.liked = false;
      this.class = "like";
    } else {
      this.restaurant.popularite++;
      this.liked = true;
      this.class = "unlike";
    }
  }

  countLikes(id: number) {
    this.restaurantService.countLikes(id)
      .subscribe(data => {
          this.restaurant.popularite = data;
        },
        (err) => {
          console.log(err);
        });
  }
}
