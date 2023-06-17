export class Restaurant {
    constructor(public nom: string,
                public adresse: string,
                public img: string,
                public description: string,
                public prix: number,
                public user_id: number,
                public popularite: number
                ) {}
}