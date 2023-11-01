import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  foodArray:any[]=[];
totalItem : number = 0;
 
constructor( private cart:CartService, private route:ActivatedRoute, private food:FoodService, private http:HttpClient){}
ngOnInit(): void {
 

 
  }
  loadFoods(){
   this.food.getFoods().subscribe((res:any)=>{
     this.foodArray=res;
   });
  }


}


