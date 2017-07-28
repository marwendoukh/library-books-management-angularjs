import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Person }    from '../Models/Person';


@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css'],
  providers: [DataService]

})
export class SearchPersonComponent implements OnInit {

  notFound=false
  personByName:Person[];
  isbn=this.route.snapshot.paramMap.get('isbn')

  constructor(private dataService:DataService,private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
  }



  searchPerson(form: any): void {

    this.dataService.findPersonByName(form.searchtext).subscribe((result) => {

    this.personByName=result

  });


}

}
