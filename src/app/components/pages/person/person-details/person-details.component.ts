import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Person} from "../../../../models/person";
import {PersonDataService} from "../../../../services/person-data.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PersonDetailsComponent implements OnInit {
  person!: Person;

  constructor(private personDataService: PersonDataService,
              private location: Location) {}

  ngOnInit(): void {
    this.person = this.personDataService.person;
  }

  onBack(){
    this.location.back();
  }

}
