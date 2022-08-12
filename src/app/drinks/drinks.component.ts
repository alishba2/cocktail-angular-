import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../drinks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks',
  templateUrl:'./drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  
  drinks:any[]=[]
  constructor(private _drink: DrinksService,private route: Router){

  }
  getDrinks(){
    this._drink.getDrinks().subscribe(data => this.drinks = data)
  }
  ngOnInit(){
    this._drink.getDrinks().subscribe(data => this.drinks = data)
  }
  OnSelect(drink){
    this.route.navigate(['./drinks' , drink.strDrink])
   }

 
}
