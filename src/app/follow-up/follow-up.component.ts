import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent implements OnInit {

  followups:FollowUp[];


  constructor(private dataService:DataService,private router: Router) { }


  ngOnInit() {
    this.dataService.findAllFollowUp().subscribe((result) => {

      this.followups=result

  });
  }







}



interface FollowUp{
  status:string,
  startDate:Date,
  finishDate:Date,
  BookIsbn:string,
  PersonnId:string
}
