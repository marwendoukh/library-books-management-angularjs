import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [DataService]

})
export class SignUpComponent implements OnInit {


    error=false
    jwtHelper: JwtHelper = new JwtHelper();


    constructor(private dataService:DataService,private router: Router) { }

    ngOnInit() {

    }




    signup(form: any): void {

      this.dataService.signup(form.personName,form.personType,form.username,form.password,form.email).subscribe((result) => {

        if(result.success)
          {
            this.error=false
            this.router.navigate(['/login']);
          }
        else
          {
            this.error=true
          }

    });
    }


}
