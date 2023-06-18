import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageRechercheComponent } from "./page-recherche/page-recherche.component";
import { Error404Component } from "./error404/error404.component";
import { AjoutRestaurantComponent } from "./ajout-restaurant/ajout-restaurant.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recherche/:cheap/:moderate/:expensive/:adresse/:type1/:type2/:type3', component: PageRechercheComponent },
  { path: 'ajoutRestaurant', component: AjoutRestaurantComponent},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
