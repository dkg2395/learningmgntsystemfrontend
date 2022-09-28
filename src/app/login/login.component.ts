import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: '',
    password: '',
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  

  constructor(private authService: AuthServiceService, private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
   
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
     

        this.isLoginFailed = false;
        this.isLoggedIn = true;
      
        // this.reloadPage();
        this.router.navigate(['/allcourses']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // reloadPage(): void {
  //   window.location.reload();
  // }
}