import { Component, OnInit } from '@angular/core';
import { Town } from '../town';
import { TownService } from '../town.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  selectedTown: Town;

  meteo: Town[];

  constructor(private townService: TownService) { }

  ngOnInit() {
    this.getMeteo();
  }

  onSelect(town: Town): void {
    this.selectedTown = town;
  }

  getMeteo(): void {
    this.townService.getMeteo()
        .subscribe(meteo=> this.meteo= meteo);
  }
}