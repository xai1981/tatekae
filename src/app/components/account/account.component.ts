import { Component, OnInit, forwardRef, Injector } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

import { Account } from '../../entities/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccountComponent),
      multi: true
    }
  ]
})
export class AccountComponent implements OnInit, ControlValueAccessor {
  innerValue: string;
  ngControl: NgControl;
  accounts: Array<Account>;

  private onTouchedCallback = () => {};
  private onChangeCallback = (_: any) => {};

  constructor(
      private accountService: AccountService,
      private injector: Injector
  ) {}

  ngOnInit() {
    this.accounts = this.accountService.get();
    this.ngControl = this.injector.get(NgControl);
  }

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  // TODO 特定の値を入れたら disable にする。
  /*
  setDisabledState(isDisabled: boolean): void {
  }
  */
}
