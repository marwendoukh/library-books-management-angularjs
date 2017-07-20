import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(public http:Http) {
      console.log('Data service connected...');
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    login(username,password){
      var body = "username=" + username + "&password=" + password;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return  this.http
        .post('http://localhost:3000/login', body, { headers: headers })
        .map(response => response.json());

      }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

      addBook(name,isbn,category,count){
        var body = "name=" + name + "&isbn=" + isbn+"&category="+category+"&count="+count;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return  this.http
          .post('http://localhost:3000/book', body, { headers: headers })
          .map(response => response.json());

        }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


    getBooksByCategory(category){
      return this.http.get('http://localhost:3000/book/category/'+category)
        .map(res => res.json());
  }


}
