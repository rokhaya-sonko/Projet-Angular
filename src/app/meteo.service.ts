import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Town} from './town';
import { METEOS } from './mock-meteo';
import { MessageService } from './message.service';

@Injectable()
export class MeteoService {

  constructor(private messageService: MessageService) { }
 
  getTowns(): Observable<Town[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('MeteoService: fetched towns');
    return of(METEOS);
  }
}