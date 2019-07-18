import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank loan application';
  ages = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
        31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
        51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,
        71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,
        91,92,93,94,95,96,97,98,99,100];

  states = ["Alabama", "Arkansas", "Arizona", "Alaska", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", 
  "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", 
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", 
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
  "West Virginia", "Wisconsin", "Wyoming"];

  userModel = new User ('', 'Mamaliga', '123 Pine Street', 'apt A', 'Pittsburgh', 'Pennsylvania', 12345, 'test@test.com', 1231231234, 'default');

  ageHasError = true;
  submitted = false;
  errorMsg = '';
  topicHasError = true;



constructor(private _enrollmentService: EnrollmentService){}

validateAge(value){
  if(value === 'default'){
    this.ageHasError = true;
  } else{
    this.ageHasError = false;
  }
}

onsubmit(){
  this.submitted = true;
  this._enrollmentService.enroll(this.userModel)
    .subscribe(
      response => console.log('Success!', response),
      error => this.errorMsg = error.statusText
    )
  }
}
