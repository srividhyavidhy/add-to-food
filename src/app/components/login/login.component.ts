import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  

loginObj:any={
  email:'',
  password:''
  };
constructor(private food:FoodService , private router:Router){}
ngOnInit(): void {
 
}
onLogin(){
  this.food.logins(this.loginObj).subscribe((res:any)=>{
    if(res){
     alert("Login Creation Done");
     this.router.navigate(['/register']);
    }
    else{
     alert("Failed to create login");
     
    }

  })

 }

}
