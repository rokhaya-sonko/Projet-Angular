import { Component, OnInit } from '@angular/core';

import { Town } from '../town';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  selectedTown: Town;

  towns: Town[];

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.getTowns();
  }

  onSelect(town: Town): void {
    this.selectedTown = town;
  }

  getTowns(): void {
    this.meteoService.getTowns()
        .subscribe(towns=> this.towns = towns);
  }
}