export class Utilisateur {

  constructor(public id: number,
              public prenom: string,
              public nom: string,
              public email: string,
              public mdp: string,
              public restaurateur: number) {}
}
