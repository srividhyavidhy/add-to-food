import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginObj: any= {
  "name":"",
  "password":""
}
loggedObj: any={};
  constructor(private food:FoodService){
    const localData = localStorage.getItem('users');
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
     localStorage.setItem('users',JSON.stringify(res))
    }
    else{

     alert(res.message)
    }

  })

 }

}

