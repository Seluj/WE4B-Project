export class Restaurant {
    constructor(public nom: string,
                public adresse: string,
                public img: string,
                public description: string,
                public prix: number,
                public user_id: number,
                public popularite: number
                ) 
                {
                this.nom = nom;
                this.adresse = adresse;
                this.img = img;
                this.description = description;
                this.prix = prix;
                this.user_id = user_id;
                this.popularite = popularite;
                }
}