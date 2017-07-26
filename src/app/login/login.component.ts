import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loggedin : Boolean
person : String
error=false

jwtHelper: JwtHelper = new JwtHelper();



  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {



var token = localStorage.getItem('token');

console.log(
  this.jwtHelper.decodeToken(token),
  this.jwtHelper.getTokenExpirationDate(token),
  this.jwtHelper.isTokenExpired(token)
);
}



loggedIn() {
  return tokenNotExpired();
}


login(form: any): void {

  this.dataService.login(form.username,form.password).subscribe((token) => {
console.log("token "+token.token)
localStorage.setItem('token',token.token);

     this.person="user connected is  "+token.token.name
      if(tokenNotExpired('token',token.token))
      this.router.navigate(['/home']);
      else
       this.error=true


});
}


}
