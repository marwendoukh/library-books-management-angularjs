import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [DataService]

})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
