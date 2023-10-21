import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './components/foods/foods.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateFoodComponent } from './components/create-food/create-food.component';

const routes: Routes = [
  { path: '', redirectTo: 'foods', pathMatch: 'full' },
  { path:  'foods', component:  FoodsComponent},
  { path:  'cart', component:  CartComponent},
  { path:  'register', component:  RegisterComponent},
  { path: 'create-food', component: CreateFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
