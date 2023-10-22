import { Component } from '@angular/core';
import { FoodService } from './services/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'add-to-food';
  loginObj: any= {
    "name":"",
    "password":""
  }
  loggedObj: any={};
    constructor(private food:FoodService){
      const localData = localStorage.getItem('amazon-user');
      if(localData!=null){
        const parseObj=JSON.parse(localData);
        this.loggedObj=parseObj
      }
    }
  onLogin(){
    this.food.login(this.loginObj).subscribe((res:any)=>{
      if(res.result){
       alert("User Login success");
       this.loggedObj=res;
       localStorage.setItem('amazon-user',JSON.stringify(res))
      }
      else{
  
       alert(res.message)
      }
  
    })
  
   }
  }

