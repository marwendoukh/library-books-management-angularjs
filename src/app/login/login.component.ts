import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
      providers: [DataService]
})
export class LoginComponent implements OnInit {

loggedin : Boolean
person : String
error=false
isNotActivated=false

jwtHelper: JwtHelper = new JwtHelper();


  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {

/// check user connected

try{
var token = localStorage.getItem('token');

if(!this.jwtHelper.isTokenExpired(token))
{
this.router.navigate(['/home']);

}
}
catch(err)
{
this.router.navigate(['/login']);

}
}



loggedIn() {
  return tokenNotExpired();
}


 signup()
 {
    this.router.navigate(['/signup']);
 }


login(form: any): void {

   this.dataService.login(form.username,form.password).subscribe((token) => {

console.log(token)
console.log(token.login)
console.log(token.activated)

// check if login is successfull
if(token.login)
{
console.log("token "+token.token)
localStorage.setItem('token',token.token);

     this.person="user connected is  "+token.token.name
      if(tokenNotExpired('token',token.token))
      this.router.navigate(['/home']);
      else
       {
         this.error=true
         this.isNotActivated=false
       }
}
else
{
  if(token.activated==undefined)
    {
      this.error=true;
      this.isNotActivated=false
    }
  else
    {
    this.isNotActivated=true
    this.error=false;
    }

}

});

 }


}
