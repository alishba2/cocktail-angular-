import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { DrinksComponent } from './drinks/drinks.component';


const routes: Routes = [
  {path:'' , component:DrinksComponent, },
  {path:'cocktailList' , component:CocktailListComponent},
  {path: 'drinks/:strDrink' , component:CocktailDetailsComponent},
  {path: 'cocktailDetails', component:CocktailDetailsComponent },
  {path: 'drinks' , component:DrinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CocktailDetailsComponent,CocktailListComponent]
