import { BrowserModule } from '@angular/platform-browser';
import { BtCardComponent } from './bt-card/bt-card.component';
import { BtJumbComponent } from './bt-jumb/bt-jumb.component';
import { MyAlert2Component } from './bt-card/my-alert2.component';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ToddMotoComponent } from './todd-moto/todd-moto.component';

@NgModule({
  declarations: [
    AppComponent,
    BtJumbComponent,
    BtCardComponent,
    MyAlert2Component,
    DataBindingComponent,
    ToddMotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }