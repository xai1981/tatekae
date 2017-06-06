import {Account} from '../entities/account';

export class AccountRepository {
    accounts: Array<Account> = new Array<Account>();

    constructor(
      // TODO Correspond Accounts param
      // private accounts: Array<Account>
    ) {}

    getAll(): Array<Account> {
        this.accounts.push(new Account(1, '財布'));
        this.accounts.push(new Account(1, 'VISA'));
        this.accounts.push(new Account(1, 'JCB'));

        return this.accounts;
    }
}
