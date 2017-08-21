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
  booksByKeyWords:Book[];

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

      // search book by name
      this.dataService.findBookByName(form.searchBook).subscribe((result) => {

      this.booksByName=result

    });

    // search book by isbn
    this.dataService.findBookByISBN(form.searchBook).subscribe((result) => {

      this.booksByISBN=result

  });


  // search book by key words

  this.dataService.findBookByKeyWords(form.searchBook).subscribe((result) => {

    this.booksByKeyWords=result

});



    }


}
