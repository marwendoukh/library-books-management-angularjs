import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book }    from '../Models/Book';
import { Person }    from '../Models/Person';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css'],
  providers: [DataService]

})
export class ReturnBookComponent implements OnInit {


  param: string;
  person:Person;
  book:Book;
  error=false
  jwtHelper: JwtHelper = new JwtHelper();


    constructor(private dataService:DataService,private router: Router,private route: ActivatedRoute) {}

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

    // return book
this.dataService.returnBook(this.route.snapshot.paramMap.get('isbn'),this.route.snapshot.paramMap.get('id')).subscribe((result) => {

console.log(result.success)
this.error=!result.success

});
}



}
