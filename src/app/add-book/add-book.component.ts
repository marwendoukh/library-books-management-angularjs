import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  error=false


  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {
  }




  addBook(form: any): void {

    this.dataService.addBook(form.name,form.isbn,form.category,form.count).subscribe((result) => {

      if(result.success)
        {
          this.error=false
          this.router.navigate(['/home']);
        }
      else
        {
          this.error=true
        }

  });
  }

}
