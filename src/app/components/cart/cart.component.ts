import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  foodArray:any;
  selectedFood:string='';
  selectedCategory:string='';
   constructor(private food:FoodService, private router:Router, private route:ActivatedRoute) {
    this.route.params.subscribe((params)=>{
      if(params['_id'])
      this.foodArray = food.getFood(params['_id'])
    })
   }
   ngOnInit(): void {
   this.loadFoods();
  
   }
   loadFoods(){
    this.food.getFoods().subscribe((res:any)=>{
      this.foodArray=res;
    });
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