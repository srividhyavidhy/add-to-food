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
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: 'categorys', pathMatch: 'full' },
  { path: 'cart', component: CartComponent},
  { path: 'categorys', component: CategoriesComponent},
  { path: 'foods', component: FoodsComponent},
  { path: 'foods/:_id', component: FoodsComponent},
  { path: 'updatefood/:_id', component: UpdatefoodComponent},
  { path:  'cart/:_id', component:  CartComponent},
  { path:  'search/:searchTerm', component:  FoodsComponent},
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
