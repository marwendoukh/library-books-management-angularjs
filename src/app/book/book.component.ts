import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book }    from '../Models/Book';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [DataService]

})
export class BookComponent implements OnInit {
  books:Book[];
    param: string;
    jwtHelper: JwtHelper = new JwtHelper();


  constructor(private dataService:DataService,private router: Router,private route: ActivatedRoute) { }

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

////////////////////////////////////


     this.dataService.findBookByISBN(this.route.snapshot.paramMap.get('isbn')).subscribe((books) => {
      this.books = books;
      console.log(books);
});



  }



}
