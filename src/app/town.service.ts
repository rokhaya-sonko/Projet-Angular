import { Injectable } from '@angular/core';
import {  Town } from './town';

@Injectable()
export class TownService {

 constructor(private messageService: MessageService) { }
 
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('TownService: fetched meteo');
    return of();
  }
}