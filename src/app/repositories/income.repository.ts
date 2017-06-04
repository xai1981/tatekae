import {Income} from '../entities/income';

export class IncomeRepository {
    constructor(
        private incomes: Array<Income>
    ) {
    }

    push(income: Income) {
        this.incomes.push(income);
    }

    getAll(): Array<Income> {
        return this.incomes;
    }
}
