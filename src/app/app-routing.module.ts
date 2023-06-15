import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageRechercheComponent } from "./page-recherche/page-recherche.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component:InscriptionComponent },
  { path: 'restaurant', component:RestaurantComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'recherche', component:PageRechercheComponent }
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
