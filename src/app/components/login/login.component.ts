import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  users: any[]=[];
signupUsers:any[]=[];
signupObj:any={
_id:'',  
name:'',
email:'',
password:''
};
loginObj:any={
  email:'',
  password:''
  };
constructor(private food:FoodService){}
ngOnInit(): void {
  const localData = localStorage.getItem('signUpUsers');
  if(localData !=null){
    this.signupUsers = JSON.parse(localData);
  }
}
onSignUp(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
this.signupObj={
  _id:'',
  name:'',
  email:'',
  password:''
}
}
onLogin(){

const isUserExist = this.signupUsers.find(m => m.name == this.loginObj.name && m.password == this.loginObj.password); 
if(isUserExist != undefined){
  alert('User Login Successfully');
} else {
  alert('Wrong credentials');
}
}
}

