import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { FoodsComponent } from './components/foods/foods.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFoodComponent } from './components/create-food/create-food.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UpdatefoodComponent } from './components/updatefood/updatefood.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './filter.pipe';
import { CategoriesComponent } from './components/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    FoodsComponent,
    CreateFoodComponent,
    RegisterComponent,
    LoginComponent,
    UpdateuserComponent,
    UpdatefoodComponent,
    UserListComponent,
    SearchComponent,
    FilterPipe,
    CategoriesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
