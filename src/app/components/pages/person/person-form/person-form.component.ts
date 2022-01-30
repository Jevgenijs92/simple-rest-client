import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../../../services/person.service";
import {Router} from "@angular/router";
import {Person} from "../../../../models/person";
import {PersonDataService} from "../../../../services/person-data.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PersonFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  isSubmitted = false;
  person!: Person;

  constructor(private formBuilder: FormBuilder,
              private personService: PersonService,
              private router: Router,
              private personDataService: PersonDataService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this._initPersonForm();
  }

  private _initPersonForm() {
    this.form = this.formBuilder.group({
      personalId: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      birthdate: ['', Validators.required]
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      const personalId = this.personForm['personalId'].value;
      const date: Date = this.personForm['birthdate'].value;

      this.personService.getPersonByPersonalIdAndBirthdate(personalId, date).subscribe(person => {
          this.person = person;
          this.router.navigateByUrl('/details');
        },
        error => {
          this._handleResponseError(error);
        });
    }
  }

  _handleResponseError(error: any) {
    let errorMessage;
    if (error.status === 0) {
      errorMessage = "Cannot connect to the server. Please try again later.";
    } else {
      errorMessage = error.error;
    }
    this.messageService.add({severity: 'error', summary: 'Error occurred', detail: errorMessage});
  }

  get personForm() {
    return this.form.controls;
  }

  ngOnDestroy(): void {
    this.personDataService.person = this.person;
  }

}
