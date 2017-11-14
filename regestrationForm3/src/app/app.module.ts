import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import {RegestartionComponent} from './regestration/regestartion-component';
import { MyloginComponent } from './mylogin/mylogin.component';


@NgModule({
  declarations: [
    AppComponent , RegestartionComponent, MyloginComponent
  ],
  imports: [
    BrowserModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
