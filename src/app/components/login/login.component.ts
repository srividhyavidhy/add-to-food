import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginForm: any = {};
getData: any;
constructor(private login:LoginService, private router:Router, public fb:FormBuilder){


}
ngOnInit(): void {
  this.loginUser();
}
loginUser(){
var name = this.loginForm.name;
var password = this.loginForm.password;

this.login.getUserDetails(name, password).subscribe((res:any)=>{
  this.getData = res;

  if(this.getData == true){
    this.router.navigate(["/categorys"]);
  }
  else{
    alert("Invalid username/password")
  }
})
}
 }

