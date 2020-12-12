import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
import { EighthComponent } from './eighth/eighth.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ForthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    EighthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
