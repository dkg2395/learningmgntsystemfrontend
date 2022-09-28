import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayallcoursesComponent } from './lms/displayallcourses/displayallcourses.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login' , pathMatch:'full'},
  {path: 'navbar', component: NavbarComponent},
  {path: 'allcourses', component: DisplayallcoursesComponent},

{path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
