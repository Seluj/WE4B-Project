import { Component, Input, OnInit } from '@angular/core';
import { RestaurantsService } from "../restaurants.service";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() popularite!: number;
  @Input() nom!: string;
  @Input() adresse!: string;
  @Input() image!: string;
  @Input() id!: number;

  liked!: boolean;
  class!: string;

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.liked = false;
    this.class = "like";
  }

  onLike() {
    if (this.liked) {
      // @ts-ignore
      this.popularite--;
      this.liked = false;
      this.class = "like";
    } else {
      // @ts-ignore
      this.popularite++;
      this.liked = true;
      this.class = "unlike";
    }
  }
}
