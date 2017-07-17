import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(public http:Http) {
      console.log('Data service connected...');
    }

    getBooksByCategory(){
      return this.http.get('http://localhost:3000/book/category/Scientifique')
        .map(res => res.json());
  }
}
