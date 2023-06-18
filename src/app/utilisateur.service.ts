import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Utilisateur } from "./models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService implements OnInit {
  baseUrl: string = 'http://79.80.238.57:34229/WE4B-Project/api';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  public inscription(data: Utilisateur) {
    return this.http.post(`${this.baseUrl}/inscription.php`, {data: data})
      .pipe(map((res: any) => {
        return res['data'];
      }));
  }

  public connexion(data: Utilisateur) {
    return this.http.post(`${this.baseUrl}/connexion.php`, {data: data})
      .pipe(map((res: any) => {
        return res['data'];
      }))
  }

  setSessionItem(name: string, value: string): void {
    sessionStorage.setItem(name, value);
  }

  getSessionItem(name: string): string | null {
    return sessionStorage.getItem(name);
  }

  deleteSessionItem(name: string): void {
    sessionStorage.removeItem(name);
  }

  deleteSession(): void {
    sessionStorage.clear();
  }

  estConnecte(): boolean {
    return this.getSessionItem("id") !== null;
  }

  estRestaurateur(): boolean {
    let restaurateur: string | null = this.getSessionItem("restaurateur")
    if (restaurateur === null) {
      return false
    } else {
      return parseInt(restaurateur) === 1;
    }
  }
}
