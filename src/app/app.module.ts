import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrickComponent } from './prick/prick.component';
import { ImageTrayComponent } from './image-tray/image-tray.component';

@NgModule({
  declarations: [
    AppComponent,
    PrickComponent,
    ImageTrayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
