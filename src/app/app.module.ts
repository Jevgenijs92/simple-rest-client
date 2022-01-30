import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonFormComponent} from "./components/pages/person/person-form/person-form.component";
import {PersonDetailsComponent} from "./components/pages/person/person-details/person-details.component";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {ShellComponent} from "./components/shared/shell/shell.component";
import {DatePipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonDetailsComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [DatePipe, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
