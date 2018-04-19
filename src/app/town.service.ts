import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {  Town } from './town';
import { METEOS } from './mock-meteos';
import { MessageService } from './message.service';


@Injectable()
export class TownService {

 constructor(private messageService: MessageService) { }
 
  getMeteo(): Observable<Town[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('TownService: fetched meteo');
    return of (METEOS);
  }
}