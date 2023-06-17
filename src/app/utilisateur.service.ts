import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Utilisateur } from "./models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService implements OnInit {
  baseUrl = 'http://79.80.238.57:34229/WE4B-Project/api';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  public inscription(data: Utilisateur) {
    console.log("On est dans la merde");
    return this.http.post(`${this.baseUrl}/inscription.php`, {data: data})
      .pipe(map((res: any) => {
        console.log("On est toujours dans la meme merde")
        return res['data'];
      }));
  }
}
