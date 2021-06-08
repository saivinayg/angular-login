import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*user = {
    userName: "",
    password: ""
  }*/
  formData: any = {};
  isError = false;


  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(form) {

    if (form.username == "test" && form.password == "test") {
      this.isError = false;
      this.router.navigate(['home']);
    } else {
      this.isError = true;
    }
  }

}
