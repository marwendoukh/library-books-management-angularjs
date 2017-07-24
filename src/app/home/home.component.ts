import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notFound=false
  booksByName:Book[];
  booksByISBN:Book[];



  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {
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


interface Book{
  name:string,
  isbn:string,
  category:string,
  count:number
}
