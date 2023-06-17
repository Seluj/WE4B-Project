import { Component } from '@angular/core';

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
  }
  rechercheRestaurant() {}
}
