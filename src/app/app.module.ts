import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppRoutingModule } from './app-routing.module';
import { CarteComponent } from './carte/carte.component';
import { BarRechercheComponent } from './bar-recherche/bar-recherche.component';
import { PageRechercheComponent } from './page-recherche/page-recherche.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { GrilleCarteComponent } from './grille-carte/grille-carte.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RestaurateurComponent } from './restaurateur/restaurateur.component';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { NgOptimizedImage } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    ConnexionComponent,
    InscriptionComponent,
    CarteComponent,
    BarRechercheComponent,
    PageRechercheComponent,
    DashboardComponent,
    RestaurantComponent,
    GrilleCarteComponent,
    UtilisateurComponent,
    RestaurateurComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
