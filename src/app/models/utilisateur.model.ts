export class utilisateur{
    id?: number;
    nom: string;
    prenom:string;
    email : string;
    dateNaiss:string
    image :string;
    constructor(id: number,nom: string,
        prenom:string,
        email : string,
        dateNaiss:string,
        image :string
        ){
            this.id= id;
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.dateNaiss = dateNaiss;
            this.image = image;



    }
}