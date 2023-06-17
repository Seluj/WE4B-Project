import {Utilisateur} from "./utilisateur.model";

export class Restaurateur extends Utilisateur {
  constructor(prenom: string,
              nom: string,
              email: string,
              password: string,
              public id_restaurant : number) {
    super(prenom, nom, email, password, id_restaurant);
  }
}
