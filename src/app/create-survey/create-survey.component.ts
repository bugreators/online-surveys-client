import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Survey } from './model/survey';

@Component({
  selector: 'create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  templates: Survey[] = [
    {name: 'Default Survey', questions: ['Question 1', 'Question 2', 'Question 3','Question 4','Question 5']}, {
      name: 'Custom Survey',
      questions: []
    }];
  selectSurveyForm = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  onNewSurvey(survey: Survey) {
    this.templates.push(survey);
  }

  findTemplate(name: string): Survey {
    console.log(this.templates.find(value => value.name === name));
    return this.templates.find(value => value.name === name);
  }
}
