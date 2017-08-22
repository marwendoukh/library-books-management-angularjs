import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-validate-registration',
  templateUrl: './validate-registration.component.html',
  styleUrls: ['./validate-registration.component.css'],
  providers: [DataService]

})
export class ValidateRegistrationComponent implements OnInit {

success=null


  constructor(private dataService:DataService,private router: Router,private route: ActivatedRoute) { }


  ngOnInit() {

    this.dataService.validateRegistration(this.route.snapshot.paramMap.get('key')).subscribe((validationResult) => {

      if(validationResult.success)
          this.success=true
      else
          this.success=false
    });

  }

}
