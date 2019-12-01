import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Survey } from '../create-survey/model/survey';

@Component({
  selector: 'survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {

  @Input() template: Survey;
  @Output() newTemplate = new EventEmitter<Survey>();
  question = new FormControl();
  questions: string[] = [];
  templateName: string;
  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.question.value != '') {
      this.questions.push(this.question.value);
    }
    this.question.patchValue('');
  }

  saveTemplate() {
    const survey: Survey = {name: this.templateName, questions: this.questions};
    this.newTemplate.emit(survey);
    this.templateName = "";
    this.questions = [];
  }
}
