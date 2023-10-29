import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginForm: any;

constructor(private user:UsersService , private router:Router, public fb:FormBuilder){
this.loginForm = this.fb.group({
  email:[""],
  password:[""]

})

}
ngOnInit(): void {
  
}
SubmitForm(){

  console.log(this.loginForm.value)
}
 }

