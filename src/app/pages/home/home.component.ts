import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

question_one: boolean = true;
question_two: boolean = false;  
question_three: boolean = false;
question_four: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showQuestionOne(){
    this.question_one = true;
    this.question_two = false;
    this.question_three = false;
    this.question_four = false;
  }


  showQuestionTwo(){
    this.question_one = false;
    this.question_two = true;
    this.question_three = false;
    this.question_four = false;
  }
  showQuestionThree(){
    this.question_one = false;
    this.question_two = false;
    this.question_three = true;
    this.question_four = false;
  }
  showQuestionFour(){
    this.question_one = false;
    this.question_two = false;
    this.question_three = false;
    this.question_four = true;
  }
}
