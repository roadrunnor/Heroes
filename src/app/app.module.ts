import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BadAssesComponent } from './badasses/badasses.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BadassDetailComponent } from './badass-detail/badass-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    BadAssesComponent,
    HeroDetailComponent,
    BadassDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
