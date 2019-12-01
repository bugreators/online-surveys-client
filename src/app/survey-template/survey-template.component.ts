import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'survey-template',
  templateUrl: './survey-template.component.html',
  styleUrls: ['./survey-template.component.css']
})
export class SurveyTemplateComponent implements OnInit {

  @Input() questions: string[] = ["This is first question",
    "This is second question",
    "This is third question",
    "This is fourth question",
    "This is fifth question"];
  constructor() { }

  ngOnInit() {
  }

}
