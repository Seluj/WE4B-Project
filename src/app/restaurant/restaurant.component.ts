import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant!: Restaurant;

  restaurantId!: string;
  liked!: boolean;
  class!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurantId = params['id'];
    });
    if (this.restaurantId === "1") {
      this.restaurant = new Restaurant("BOB", "5 rue du BOB", "../../assets/restaurant_belfort.jpg", "wow trop bien BOB", 0, 0, 0);
    } else if (this.restaurantId === "2") {
      this.restaurant = new Restaurant("JIMBOB", "5 rue du JIMBOB", "../../assets/restaurant_berlin.jpg", "wow trop bien JIMBOB", 0, 0, 0);
    }
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
