import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icocktail } from './cocktail-list';
@Injectable({
  providedIn: 'root'
})
export class CocktailListService {

  constructor(private http: HttpClient) { }
  getCocktails(Name = 'Margrita'):Observable<Icocktail[]>{
    return this.http.get<Icocktail[]>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+Name)
  }
}
