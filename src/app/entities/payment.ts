import {Account} from './account';

export class Payment {
    constructor(
        private id: number,
        private amount: number,
        private date: Date,
        private account: Account
    ) {
    }

    getId(): number {
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(amount: number){
        this.amount = amount;
    }

    getDate(): Date {
        return this.date;
    }

    setDate(date: Date){
        this.date = date;
    }

    getAccount(): Account {
        return this.account;
    }

    setAccount(account: Account) {
        this.account = account;
    }
}
