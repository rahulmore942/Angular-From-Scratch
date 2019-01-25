import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BtCardComponent } from './bt-card/bt-card.component';
import { BtJumbComponent } from './bt-jumb/bt-jumb.component';

@NgModule({
  declarations: [
    AppComponent,
    BtCardComponent,
    BtJumbComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
