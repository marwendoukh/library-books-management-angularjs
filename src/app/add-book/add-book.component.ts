import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [DataService]

})
export class AddBookComponent implements OnInit {

  error=false
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
