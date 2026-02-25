import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Transaction } from '../types/Transaction';

interface Props {
  transactions: Transaction[];
}

export default function DashboardCards({ transactions }: Props) {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expense;

  const cards = [
    { label: 'Total Income', value: income, color: 'green' },
    { label: 'Total Expense', value: expense, color: 'red' },
    { label: 'Balance', value: balance, color: 'black' },
  ];

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {cards.map((card, index) => (
        <Grid item xs={4} key={index} >
          <Card>
            <CardContent>
              <Typography variant="h6">{card.label}</Typography>
              <Typography sx={{ color: card.color }}>₹ {card.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}