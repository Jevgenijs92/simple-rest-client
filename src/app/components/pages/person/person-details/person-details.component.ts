import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Person} from "../../../../models/person";
import {PersonDataService} from "../../../../services/person-data.service";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PersonDetailsComponent implements OnInit {
  person!: Person;

  constructor(private personDataService: PersonDataService) {}

  ngOnInit(): void {
    this.person = this.personDataService.person;
  }

}
