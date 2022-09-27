import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayallcoursesComponent } from './lms/displayallcourses/displayallcourses.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

{path: '', component: DisplayallcoursesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
