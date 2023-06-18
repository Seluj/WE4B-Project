import { Component, Input, OnInit } from '@angular/core';
import { RestaurantsService } from "../restaurants.service";
import {Restaurant} from "../models/restaurant.model";
import {UtilisateurService} from "../utilisateur.service";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() restaurant!: Restaurant;

  liked!: number;
  class!: string;

  constructor(private restaurantService: RestaurantsService, private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.countLikes(this.restaurant.id);
    if (this.utilisateurService.estConnecte()) {
      this.getLike();
    }
  }

  onLike() {
    if (this.utilisateurService.estConnecte()) {
      if (this.liked) {
        this.removeLike()
        this.class = "like";
        this.getLike();
      } else {
        this.addLike();
        this.class = "unlike";
        this.getLike();
      }
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

  addLike() {
    this.restaurantService.addLike(this.restaurant.id, parseInt(<string>this.utilisateurService.getSessionItem('id')))
      .subscribe( data => {
        console.log(data);
      },
        (err) => {
          console.log(err);
        });
  }

  getLike() {
    this.restaurantService.getLike(this.restaurant.id, parseInt(<string>this.utilisateurService.getSessionItem('id')))
      .subscribe( data => {
        if (data == "1") {
          this.liked = 1;
          this.class = "unlike";
        } else {
          this.liked = 0;
          this.class = "like";
        }


      },
        (err) => {
          console.log(err);
        })
  }

  removeLike() {
    this.restaurantService.removeLike(this.restaurant.id, parseInt(<string>this.utilisateurService.getSessionItem('id')))
      .subscribe( data => {
          console.log("removeLike = " + data);
        },
        (err) => {
          console.log(err);
        });
  }
}
