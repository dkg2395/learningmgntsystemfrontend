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
  pageNo:number=0;
  pageSize:number =2;

  constructor(private coursesserviceService: CoursesserviceService,
    private router: Router) {}

  ngOnInit(): void {
    //this.getAllCourseData()
    this.Getpagination()
  }

  // getAllCourseData(){
  // this.coursesserviceService.getAllCourse().subscribe(data=>{
  //   this.courses=data
  //   console.log(this.courses)

  //  });
   
  // }

  Getpagination(){
    this.pageNo=this.pageNo+1
    this.coursesserviceService.pagination(this.pageNo,this.pageSize).subscribe(data=>{
      this.courses=data
      
    console.log(this.courses)
    })
  }

  DecrementPageNo(){
    this.pageNo=this.pageNo-1
    this.coursesserviceService.pagination(this.pageNo,this.pageSize).subscribe(data=>{
      this.courses=data
     
    console.log(this.courses)
    })
  }


  getByTechnology(){
    this.coursesserviceService.getByTechnology(this.technology).subscribe(data=>{
      this.courses=data
    console.log(this.courses)

  })
}


}
