import {Payment} from '../entities/payment';

export class PaymentRepository {
    constructor(
        private payments: Array<Payment>
    ) {
    }

    push(payment: Payment) {
        this.payments.push(payment);
    }

    getAll(): Array<Payment> {
        return this.payments;
    }
}
