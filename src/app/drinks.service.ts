import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDrink } from './drinks/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private http: HttpClient) { }
  getDrinks():Observable<IDrink[]>{
    return this.http.get<IDrink[]>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
  }
}
