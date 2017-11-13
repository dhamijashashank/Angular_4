import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import {RegestartionComponent} from './regestration/regestartion-component';


@NgModule({
  declarations: [
    AppComponent , RegestartionComponent
  ],
  imports: [
    BrowserModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
