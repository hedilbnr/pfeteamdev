import { Component, OnInit } from '@angular/core';
import { multi } from '../data';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',

  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
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
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];
  multi: any[];
  view: any[] = [700, 400];
  view2: any[] = [800, 500];


  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Jours';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Minutes';
  legendTitle: string = 'Arrivée';
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  showLabels: boolean = true;


  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi })
    

  }

 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

