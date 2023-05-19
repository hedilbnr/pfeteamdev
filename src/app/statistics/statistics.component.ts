import { Component, OnInit } from '@angular/core';
import { PointageService } from '../../services/pointage.service';
import { multi } from '../data';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',

  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  horairesPredefinis: Date[] = []; // Les horaires prédéfinis à récupérer depuis un formulaire ou autre

  pourcentageArrivesALHeure: number;
  pourcentageRetards: number;
  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  constructor(private pointageService: PointageService) { }

  ngOnInit() {
    this.getPourcentages();
    //this.getHorairesPredefinis();
  }
  // getHorairesPredefinis() {
  //   this.pointageService.getHorairesPredefinis()
  //     .subscribe(horaires => {
  //       this.horairesPredefinis = horaires;
  //       this.getPourcentages();
  //     });
  // }
  getPourcentages() {
    console.log(this.horairesPredefinis);
    let dateToSend={
      dateDebut:"2023-05-04T09:40:00Z"
    }
    this.pointageService.getPourcentageArrivesALHeure("2023-05-04T09:40:00Z")
      .subscribe(pourcentage => {
        this.pourcentageArrivesALHeure = pourcentage
        console.log("****",this.pourcentageArrivesALHeure);
        
      }
      );

    // this.pointageService.getPourcentageRetards(this.horairesPredefinis)
    //   .subscribe(pourcentage => this.pourcentageRetards = pourcentage);
  }
}