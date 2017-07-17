import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:Book[];



  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getBooksByCategory('Scientifique').subscribe((books) => {
      this.books = books;
      console.log(books);
});
  }

}




interface Book{
  name:string,
  isbn:string,
  category:string,
  count:number,
  createdAt:Date,
  updatedAt:Date

}
