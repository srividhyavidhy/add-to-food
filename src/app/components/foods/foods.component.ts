import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/foods';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit{
foodArray:any;
selectedFood:string='';
selectedCategory:string='';
 constructor(private cart:CartService, private food:FoodService, private router:Router, private route:ActivatedRoute) {
 
 }
 ngOnInit(): void {
 this.loadFoods();
this.foodArray.forEach((a:any)=>{
Object.assign(a,{quantity:1, total:a.price});
})
 }
 loadFoods(){
  this.food.getFoods().subscribe((res:any)=>{
    this.foodArray=res;
  });
 }

getFood(_id:string){
  this.selectedFood = _id;
  this.food.getFood(_id).subscribe((res:any)=>{
    this.loadFoods=res;
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
  addToCart(product: any) {
    this.cart.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}