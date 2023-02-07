import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SameerComponent } from './components/sameer/sameer.component';
import { HarshitComponent } from './components/harshit/harshit.component';
import { OmkarComponent } from './components/omkar/omkar.component';
import { ProgrammerComponent } from './components/programmer/programmer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    SameerComponent,
    HarshitComponent,
    OmkarComponent,
    ProgrammerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
