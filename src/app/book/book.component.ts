import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book }    from '../Models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:Book[];
    param: string;


  constructor(private dataService:DataService,private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit() {

     this.dataService.findBookByISBN(this.route.snapshot.paramMap.get('isbn')).subscribe((books) => {
      this.books = books;
      console.log(books);
});



  }



}
