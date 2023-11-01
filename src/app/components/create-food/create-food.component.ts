import { Component, OnInit,  ViewEncapsulation  } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Foods } from 'src/app/foods';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateFoodComponent implements OnInit{
  foodobj:any={
    "_id": "",
    "name": "",
    "quantity":"",
    "price":"",
    "image": ""
  }
  constructor(private food:FoodService, private router:Router){}

  ngOnInit(): void {
    
  }

  onSave(){
   this.food.createFood(this.foodobj).subscribe((res:any)=>{
     if(res){
      alert("Food Creation Done");
      this.router.navigate(['/cart']);
     }
     else{
      alert("Failed to create employee");
      
     }

   })

  }


  }


