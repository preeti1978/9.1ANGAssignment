import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { ContaincomponentComponent } from './containcomponent/containcomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    HeadercomponentComponent,
    ContaincomponentComponent,
    FootercomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
