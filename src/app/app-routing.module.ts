import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { ReportsComponent } from './reports/reports.component';
import { RecipientsComponent } from './recipients/recipients.component';
import { SurveyTemplateComponent } from './survey-template/survey-template.component';


const routes: Routes = [
  {path: 'create-survey', component: CreateSurveyComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'recipients', component: RecipientsComponent},
  {path: 'survey-template', component: SurveyTemplateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
