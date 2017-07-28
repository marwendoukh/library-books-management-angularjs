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

  allFollowups:FollowUp[];
  jwtHelper: JwtHelper = new JwtHelper();
  followupsToshow:FollowUp[];


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

      this.allFollowups=result
      this.followupsToshow=result

  });
}




filterFollowUp(form: any): void {

  this.followupsToshow=[]
  

////// search by bookName AND personName
if(form.personName!="" && form.bookName!="")
{

  console.log("search by bookName AND personName ")


  for (var followup of this.allFollowups) {
   if(followup.name.indexOf(form.bookName)>=0)
  {
    for (var person of followup.Personns) {
    if(form.personName!=undefined && person.name==form.personName)
    {
    this.followupsToshow.push(followup)
    console.log("found by personName "+person.name)

    }
  }
}
}
}

else
{

  console.log("search by bookName OR personName ")

////// search by bookName OR personName


  for (var followup of this.allFollowups) {
console.log("search bookname result "+followup.name.indexOf(form.bookName))
if(form.bookName!=undefined && followup.name.indexOf(form.bookName)>=0)
{
  this.followupsToshow.push(followup)
  console.log("found by BookName "+followup.name)
}

  for (var person of followup.Personns) {
if(form.personName!=undefined && person.name==form.personName)
{
this.followupsToshow.push(followup)
console.log("found by personName "+person.name)

}

  }

}
 }
}




}
