import { Component, OnInit } from '@angular/core';

import { Account } from '../../entities/account';
import { AccountRepository } from '../../repositories/account.repository';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts: Array<Account>;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.get();
  }

}
