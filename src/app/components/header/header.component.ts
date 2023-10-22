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
loggedObj: any={};
  constructor(private food:FoodService){
    const localData = localStorage.getItem('amazon-user');
    if(localData!=null){
      const parseObj=JSON.parse(localData);
      this.loggedObj=parseObj
    }
  }
  ngOnInit(): void {
    
  }
  
 
}
