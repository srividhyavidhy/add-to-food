import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categoryList:any;

  constructor(private food:FoodService, private router:Router){}
  ngOnInit(): void {
    this.loadFoodCategories();

  }
  loadFoodCategories(){
    this.food.getFoodCategorys().subscribe((res:any)=>{
      this.categoryList = res;
    })
  }
  navigate(data:string){
     this.router.navigate(['/foods',data])
  }
}
