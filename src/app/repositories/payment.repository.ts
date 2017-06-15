import {Payment} from '../entities/payment';

export class PaymentRepository {
    private payments: Array<Payment> = [];

    constructor() { }

    push(payment: Payment) {
        this.payments.push(payment);
    }

    getAll(): Array<Payment> {
        return this.payments;
    }
}
