import { QuestionControlService } from './../services/question-control.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [QuestionControlService],
  declarations: []
})
export class DynamicFormModule { }
