import { useEffect, useState } from 'react';

import InvoiceTable from './InvoiceTable.tsx';
import type { Invoice } from './invoice.ts';

export default function App() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInvoices = async () => {
      try {
        const response = await fetch('/api/invoices');

        if (response.ok) {
          const data = await response.json();
          setInvoices(data);
        } else {
          setError('Não foi possível carregar as faturas.');
        }
      } catch {
        setError('Não foi possível carregar as faturas.');
      }

      setLoading(false);
    };

    loadInvoices();
  }, []);

  if (loading) {
    return <p>Carregando faturas...</p>;
  }

  if (error !== null) {
    return <p>{error}</p>;
  }

  return <InvoiceTable invoices={invoices} />;
}
