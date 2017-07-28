import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Book }    from '../Models/Book';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]

})
export class HomeComponent implements OnInit {

  notFound=false
  booksByName:Book[];
  booksByISBN:Book[];
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



  }




    searchBook(form: any): void {

      this.dataService.findBookByName(form.searchtext).subscribe((result) => {

      this.booksByName=result

    });


    this.dataService.findBookByISBN(form.searchtext).subscribe((result) => {

      this.booksByISBN=result

  });


    }


}
