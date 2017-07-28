import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FollowUp }    from '../Models/FollowUp';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css'],
  providers: [DataService]

})
export class FollowUpComponent implements OnInit {

  followups:FollowUp[];
  jwtHelper: JwtHelper = new JwtHelper();


  constructor(private dataService:DataService,private router: Router) { }


  ngOnInit() {

    /// check user connected

  try{
   var token = localStorage.getItem('token');

  if(this.jwtHelper.isTokenExpired(token))
  {
    this.router.navigate(['/login']);

  }
  }
  catch(err)
  {
  this.router.navigate(['/login']);

  }

  ///////////////////////////

    this.dataService.findAllFollowUp().subscribe((result) => {

      this.followups=result

  });
  }







}
