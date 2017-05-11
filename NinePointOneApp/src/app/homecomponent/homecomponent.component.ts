import { Component, OnInit } from '@angular/core';
import {FoodService} from '../food.service';
@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css'],
   providers:[FoodService]
})
export class HomecomponentComponent implements OnInit {

  //Achieveing dependency injection through Constructor Injection
  constructor(public foodSvc:FoodService) { }

foods:Object[];
foodsIsEmpty:boolean=true;
  ngOnInit() {
  }
    getFood(){
	this.foods=this.foodSvc.getFood();
	if (this.foods.length>0) this.foodsIsEmpty=false;
	}


}
