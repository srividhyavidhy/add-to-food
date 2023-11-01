import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
 searchTerm='';
constructor(private activatedRoute:ActivatedRoute, private food:FoodService, private router:Router){
  activatedRoute.params.subscribe((params:any)=>{
    if(params.searchTerm)this.searchTerm = params.searchTerm;
  })
}
ngOnInit(): void {
  

}
search(term:string):void{
  if(term){
    this.router.navigateByUrl('/search'+ term);
  }
}
}
