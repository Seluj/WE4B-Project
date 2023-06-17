import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant!: Restaurant;

  liked!: boolean;
  class!: string;

  ngOnInit(): void {
    this.restaurant = new Restaurant("BOB", "5 rue du BOB", "../../assets/restaurant_belfort.jpg", "wow trop bien BOB", 0, 0, 0);
    this.liked = false;
    this.class = "like";
  }

  onLike() {
    if (this.liked === true) {
      this.restaurant.popularite--;
      this.liked = false;
      this.class = "like";
    } else {
      this.restaurant.popularite++;
      this.liked = true;
      this.class = "unlike";
    }
  }

}
