import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { CocktailListService } from './cocktail-list.service';
import { FormsModule } from '@angular/forms';
import { DrinksComponent } from './drinks/drinks.component';
// import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
// import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DrinksComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    CommonModule, 
    FormsModule
  ],
  providers: [CocktailListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
