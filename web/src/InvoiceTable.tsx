import type { Invoice } from './invoice.ts';
import InvoiceRow from './InvoiceRow.tsx';

interface InvoiceTableProps {
    invoices: Invoice[];
}

export default function InvoiceTable(props: InvoiceTableProps) {
    const invoices = props.invoices;

    return <>
        <table>
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Valor</th>
                    <th>Emissão</th>
                    <th>Vencimento</th>
                    <th>Situação</th>
                </tr>
            </thead>
            <tbody>
                {invoices.map(invoice => (
                    <InvoiceRow
                        key={invoice.id}
                        invoice={invoice}
                    />
                ))}
            </tbody>
        </table>
    </>;
} 