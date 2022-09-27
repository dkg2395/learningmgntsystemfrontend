import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/Model/Courses';
import { CoursesserviceService } from 'src/app/service/coursesservice.service';

@Component({
  selector: 'app-displayallcourses',
  templateUrl: './displayallcourses.component.html',
  styleUrls: ['./displayallcourses.component.css']
})
export class DisplayallcoursesComponent implements OnInit {

  courses:Courses[] | undefined;

  course:Courses=new Courses();
  submitted = false;

  technology:string=''

  constructor(private coursesserviceService: CoursesserviceService,
    private router: Router) {}

  ngOnInit(): void {
    this.getAllCourseData()
  }

  getAllCourseData(){
  this.coursesserviceService.getAllCourse().subscribe(data=>{
    this.courses=data
    console.log(this.courses)

   });
   
  }

  getByTechnology(){

    this.coursesserviceService.getByTechnology(this.technology).subscribe(data=>{
      this.courses=data
    console.log(this.courses)
    })
  }

}
