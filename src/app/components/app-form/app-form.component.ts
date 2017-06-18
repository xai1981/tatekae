import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  myForm: FormGroup;
  date: AbstractControl;
  amount: AbstractControl;
  payment: AbstractControl;
  repayment: AbstractControl;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'date': ['', Validators.required],
      'amount': ['', Validators.required],
      'payment': ['', Validators.required],
      'repayment': ['', Validators.required]
    });
    this.date = this.myForm.controls['date'];
    this.amount = this.myForm.controls['amount'];
    this.payment = this.myForm.controls['payment'];
    this.repayment = this.myForm.controls['repayment'];
  }

  ngOnInit() {
  }

  onSubmit(data: Object): void {
    console.log(data);
  }
}
