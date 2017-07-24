import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



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


  constructor(private dataService:DataService,private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {

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



interface Book{
  name:string,
  isbn:string,
  category:string,
  count:number

}



interface Person{
  id:number,
  name:string,
  username:string,
  type:string

}
