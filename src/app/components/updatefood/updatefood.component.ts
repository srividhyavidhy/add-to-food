import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.css']
})
export class UpdatefoodComponent implements OnInit{
  _id:any;
  foodsobj:any={
    "_id": "",
    "name": "",
    "quantity":"",
    "price":"",
    "image": ""
    }
constructor(private food:FoodService , private route:ActivatedRoute,private router:Router){}
    ngOnInit(): void {
      this._id = this.route.snapshot.paramMap.get('_id');
      alert(this._id);
     
      this.food.getFood(this._id).subscribe((res)=>{
       this.foodsobj = res
      })
     }
     onUpdate(){
     this.food.updateFood(this.foodsobj,this._id).subscribe((res)=>{
       if(res){
         alert("Update food successfully");
         this.router.navigate(['/foods']);
        }
        else{
         alert("Failed to update food");
         
        }
     
      })
     
     }
}
