import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetailService } from '../component-detail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktailName;
  public details:any[]=[]
  
  constructor(private activatroute: ActivatedRoute,private ComponentService:ComponentDetailService) { }
 
  ngOnInit(): void {
    let name = this.activatroute.snapshot.paramMap.get('strDrink')
    this.cocktailName= name;
 
    this.ComponentService.getDetails(this.cocktailName).subscribe(data => this.details = data)

  }
  
 
}
