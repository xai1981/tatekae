import { Injectable } from '@angular/core';


import { Account } from '../entities/account';
import { AccountRepository } from '../repositories/account.repository';

@Injectable()
export class AccountService {

  constructor() { }

  get(): Array<Account> {
    let accountRepository = new AccountRepository();
    return accountRepository.getAll();
  }
}
