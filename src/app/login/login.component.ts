import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loggedin : Boolean
person : String
error=false


  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {

    /*this.dataService.login('a','a').subscribe((login) => {
      console.log('result '+login.login);
        console.log('user '+login.user);
        this.person=login.user
  });*/

}




login(form: any): void {

  this.dataService.login(form.username,form.password).subscribe((login) => {
      this.person="user connected is  "+login.user
      if(login.login==true)
      this.router.navigate(['/home']);
      else
       this.error=true

});
}


}
