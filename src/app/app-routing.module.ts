import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './components/foods/foods.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateFoodComponent } from './components/create-food/create-food.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UpdatefoodComponent } from './components/updatefood/updatefood.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'foods', pathMatch: 'full' },
  { path:  'foods', component:  FoodsComponent},
  { path: 'updatefood/:_id', component: UpdatefoodComponent},
  { path:  'cart', component:  CartComponent},
  { path:  'register', component:  RegisterComponent},
  { path:  'userlist', component: UserListComponent},
  { path: 'create-food', component: CreateFoodComponent},
  { path: 'login', component: LoginComponent},
  { path: 'update/:_id', component: UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
