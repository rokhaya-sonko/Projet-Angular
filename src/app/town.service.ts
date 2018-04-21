import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  Town } from './town';
import { METEOS } from './mock-meteo';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class TownService {
  
  private townsUrl = https://projet-app.herokuapp.com/towns';  // URL to web api
  private jsonString = '.json';

  constructor(private http: HttpClient, private messageService: MessageService) { }
  
  /** GET towns from the server */
  getMeteo (): Observable<Town[]> {
  return this.http.get<Town[]>(this.townsUrl)
}
  /** GET town by id. Will 404 if id not found */
  getMeteo(id: number): Observable<Town> {
    const url = `${this.townsUrl}/${id}${this.jsonString}`;
    return this.http.get<Town>(url).pipe(
      tap(_ => this.log(`fetched town id=${id}`)),
      catchError(this.handleError<Town>(`getMeteo id=${id}`))
    );
  }

  /** GET town by id. Return `undefined` when id not found */
  getMeteoNo404<Data>(id: number): Observable<Town> {
    const url = `${this.townsUrl}/?id=${id}${this.jsonString}`;
    return this.http.get<Town[]>(url)
      .pipe(
        map(meteo => meteo[0]), // returns a {0|1} element array
        tap(t => {
          const outcome = t ? `fetched` : `did not find`;
          this.log(`${outcome} town id=${id}`);
        }),
        catchError(this.handleError<Town>(`getTown id=${id}`))
      );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  /** Log a TownService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TownService: ' + message);
  }
}