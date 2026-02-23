import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import TransactionForm from './components/TransactionForm';
import TransactionsTable from './components/TransactionsTable';
import api from './services/api';
import type { Transaction } from './types/Transaction';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const res = await api.get('/transactions');
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Personal Finance Tracker
      </Typography>

      <TransactionForm onAdd={fetchTransactions} />
      <TransactionsTable data={transactions} />
    </Container>
  );
}

export default App;