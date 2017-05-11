import { Injectable } from '@angular/core';

@Injectable()//decorator which makes your class as service so that it can be injected
export class FoodService { //This service has to be consumed by headercompo

  constructor() { }//since class has constructor we can create objects of this class
  getFood(){ //we are defining a function in service called getFood
  	let dishes:Object[]=[
  	{name:'Biriyani',cost:200},
  	{name:'Dal',cost:150},
  	{name:'Cake',cost:100}
  	];
  	return dishes;
  }

}
