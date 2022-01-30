import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonFormComponent} from "./components/pages/person/person-form/person-form.component";
import {PersonDetailsComponent} from "./components/pages/person/person-details/person-details.component";
import {ShellComponent} from "./components/shared/shell/shell.component";
import {Person} from "./models/person";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: PersonFormComponent
      },
      {
        path: 'details',
        component: PersonDetailsComponent,
        data: Person
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
