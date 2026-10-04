import type { InvoiceStatus } from './invoice.ts';

export default function statusLabel(status: InvoiceStatus) {
    return status === 'paid' ? 'Pago' : 'Pendente';
}
