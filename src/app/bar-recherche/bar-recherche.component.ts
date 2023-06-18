import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SearchCriteria {
  prix: {
    cheap: boolean;
    moderate: boolean;
    expensive: boolean;
  };
  adresse: string;
  type: {
    type1: boolean;
    type2: boolean;
    type3: boolean;
  };
}

@Component({
  selector: 'app-bar-recherche',
  templateUrl: './bar-recherche.component.html',
  styleUrls: ['./bar-recherche.component.css']
})

export class BarRechercheComponent {
  searchCriteria: SearchCriteria = {
    prix: {
      cheap: false,
      moderate: false,
      expensive: false
    },
    adresse: '',
    type: {
      type1: false,
      type2: false,
      type3: false
    }
  };

  constructor(private router: Router) { }


  rechercheRestaurant() {
    const { cheap, moderate, expensive } = this.searchCriteria.prix;
    const { type1, type2, type3 } = this.searchCriteria.type;
    const { adresse } = this.searchCriteria;

    this.router.navigate(['recherche',
      cheap.toString(),
      moderate.toString(),
      expensive.toString(),
      adresse,
      type1.toString(),
      type2.toString(),
      type3.toString()
    ]);
  }
}
