import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/foods';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit{
foodArray:any[]=[];
categorys:any[]=[];
selectedFood:string='';
selectedCategory:string='';
 constructor(private food:FoodService) {}
 ngOnInit(): void {
 this.loadFoods();
 this.loadFoodCategorys();
 }
 loadFoods(){
  this.food.getFoods().subscribe((res:any)=>{
    this.foodArray=res;
  });
 }
 loadFood(_id:string){
  this.selectedCategory = _id;
  this.food.getFood(_id).subscribe((res:any)=>{
    this.foodArray=res;
  })
 }
 loadFoodCategorys(){
  this.food.getFoodCategorys().subscribe((res:any)=>{
    this.categorys=res;
  });
 }
 loadFoodCategory(_id:string){
  this.selectedCategory = _id;
  this.food.getFood(_id).subscribe((res:any)=>{
    this.categorys=res;
  })
 }
}
