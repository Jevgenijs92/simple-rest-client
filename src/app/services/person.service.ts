import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Person} from "../models/person";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiURLPerson = environment.apiURL + '/person';

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getPersonByPersonalIdAndBirthdate(personalId: string, birthdate: Date): Observable<any> {
    let params = new HttpParams();
    params = params.append("personalId", personalId);
    params = params.append("birthdate", this.datePipe.transform(birthdate, 'yyyy-MM-dd') ?? "");

    return this.http.get<Person>(this.apiURLPerson, {params}).pipe(catchError(PersonService._handleError));
  }

  private static _handleError(error: HttpErrorResponse): any {
    return throwError(()=>error);
  }

}
