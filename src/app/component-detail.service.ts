import { Injectable } from '@angular/core';
import { IcocktailDetail } from './cocktail-detail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComponentDetailService {

  constructor(public http : HttpClient) { }
  getDetails(name:any):Observable<IcocktailDetail[]>{
    return this.http.get<IcocktailDetail[]>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+name)
  }
}
