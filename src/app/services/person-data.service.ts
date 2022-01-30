import { Injectable } from '@angular/core';
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  public person!: Person;

  constructor() { }
}
