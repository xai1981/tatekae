import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms';

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
  account: FormControl;

  // XXX form 系の初期化は ngOnInit で処理した方がよいかも。
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

    this.account = new FormControl('', Validators.required);
    this.myForm.addControl('account', this.account);
  }

  ngOnInit() {
  }

  onSubmit(data: Object): void {
    console.log(data);
  }
}
