export class Restaurant {
    constructor(public id: number,
                public nom: string,
                public adresse: string,
                public image: string,
                public description: string,
                public prix: number,
                public user_id: number,
                public popularite: number
                ) {}
}