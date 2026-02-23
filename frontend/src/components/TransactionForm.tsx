import { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import api from '../services/api';

export default function TransactionForm({ onAdd }: { onAdd: () => void }) {
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [note, setNote] = useState('');

  const handleSubmit = async () => {
    await api.post('/transactions', {
      type,
      category,
      amount,
      note,
    });

    setCategory('');
    setAmount(0);
    setNote('');
    onAdd();
  };

  return (
    <Box display="flex" gap={2} mb={3}>
      <TextField
        select
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value as any)}
      >
        <MenuItem value="income">Income</MenuItem>
        <MenuItem value="expense">Expense</MenuItem>
      </TextField>

      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <TextField
        label="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Add
      </Button>
    </Box>
  );
}