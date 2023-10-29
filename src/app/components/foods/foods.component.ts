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

selectedCategory:string='';
 constructor(private food:FoodService, private router:Router) {}
 ngOnInit(): void {
 this.loadFoods();
 this.loadFoodCategorys();
 }
 loadFoods(){
  this.food.getFoods().subscribe((res:any)=>{
    this.foodArray=res;
  });
 }

 loadFoodCategorys(){
  this.food.getFoodCategorys().subscribe((res:any)=>{
    this.categorys=res;
  });
 }
 getFoodCategory(_id:string){
  this.selectedCategory = _id;
  this.food.getFoodCategory(_id).subscribe((res:any)=>{
    this.categorys=res;
  })
}

deleteFood(event:any, _id:string){
  if(confirm('Are your sure you want to delete this data ?'))
  {
    event.target.innerText ="Deleting....";

    this.food.deleteFood(_id).subscribe((res:any)=>{
      this.loadFoods();
      if(res){
        alert("User Creation Done");
        this.router.navigate(['/foods']);
       }
       else{
        alert("Failed to create employee");
        
       }
    })
  }
}
}