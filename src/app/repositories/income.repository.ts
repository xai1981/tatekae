import {Income} from '../entities/income';

export class IncomeRepository {
    private incomes: Array<Income> = [];

    constructor() { }

    push(income: Income) {
        this.incomes.push(income);
    }

    getAll(): Array<Income> {
        return this.incomes;
    }
}
