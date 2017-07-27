import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book }    from '../Models/Book';
import { Person }    from '../Models/Person';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';



@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

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

//////////////////////////////////////

    this.dataService.findPersonByUsername(this.route.snapshot.paramMap.get('username')).subscribe((result) => {

    this.person=result[0]

  });


  this.dataService.findBookByISBN(this.route.snapshot.paramMap.get('isbn')).subscribe((result) => {

  this.book=result[0]

  });


  }









    borrowBook(form: any): void {

      this.dataService.borrowBook(this.book.isbn,this.person.username,form.finishDate).subscribe((result) => {

console.log(result)
        if(result.success)
          {
            this.error=false
            this.router.navigate(['/follow-up']);
          }
        else
          {
            this.error=true
          }

    });
    }




}
