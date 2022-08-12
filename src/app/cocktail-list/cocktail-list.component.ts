import { Component, OnInit } from '@angular/core';
import { CocktailListService } from '../cocktail-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails :any[]=[]
  constructor(private coctailService : CocktailListService , private route: Router) { }
public Name :any
getcocktails(){

  this.coctailService.getCocktails(this.Name).subscribe(data => this.cocktails = data)
}
 ngOnInit(): void {
   
 }


}
