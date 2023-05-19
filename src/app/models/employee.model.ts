export class Employee {
   id:number;
    nom:string;
    prenom:string;
    email:string;
    dateNaiss:Date;
    pointages:number;
    demandeConges:any;
    constructor(
        employeeId:number,
        nom:string,
        prenom:string,
        email:string,
        demandeConges:any
       
    ){
        this.id =  employeeId
        this.nom =  nom
        this.prenom = prenom
        this.email = email
        this.demandeConges=demandeConges
       
    }
    static create(){
        return Object.create(this.prototype)
    }
  
    
}