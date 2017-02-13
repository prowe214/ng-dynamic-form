import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../models/question-base';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
