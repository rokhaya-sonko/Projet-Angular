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

  meteo: Town[] = [];

  constructor(private townService: TownService) { }
  
   ngOnInit() {
     this.townService.getMeteobyid(1)
        .subscribe(town => this.meteo[0] = town);
   console.log(this.meteo);
   }
  
  onSelect(town: Town): void {
    this.selectedTown = town;
    this.getMeteobyid(town.id);
  }

  getMeteo(): void {
    this.townService.getMeteo()
        .subscribe(meteo=> this.meteo= meteo);
  }
  getMeteobyid(id: number): void {
    this.townService.getMeteobyid(id)
        .subscribe(town => this.selectedTown = town);
  
}
  weatherIcon(icon) {
    switch (icon) {
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy'
      case 'clear-day':
        return 'wi wi-day-sunny'
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy'
      default:
        return `wi wi-day-sunny`
    }
  }
}