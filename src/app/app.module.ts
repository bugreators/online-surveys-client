import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { ReportsComponent } from './reports/reports.component';
import { RecipientsComponent } from './recipients/recipients.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyTemplateComponent } from './survey-template/survey-template.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CreateSurveyComponent,
    ReportsComponent,
    RecipientsComponent,
    SurveyCreatorComponent,
    SurveyTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
