import { Component , OnInit} from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  foodArray:any[]=[];
selectedFood:string='';
  constructor(private food:FoodService){}
  ngOnInit(): void {
    
  }
 
}
