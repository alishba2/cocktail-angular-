import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iapp } from './app';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getDrinks():Observable<Iapp[]>{
    return this.http.get<Iapp[]>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
  }
}
