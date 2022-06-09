import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BadAssesComponent } from './badasses/badasses.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BadassDetailComponent } from './badass-detail/badass-detail.component';
import { TitlecasePipeComponent } from './titlecase-pipe/titlecase-pipe.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    BadAssesComponent,
    HeroDetailComponent,
    BadassDetailComponent,
    TitlecasePipeComponent,
    ItemDetailComponent
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
