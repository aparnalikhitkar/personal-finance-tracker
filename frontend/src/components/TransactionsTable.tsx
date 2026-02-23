import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import type { Transaction } from '../types/Transaction';

export default function TransactionsTable({ data }: { data: Transaction[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Note</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((t) => (
          <TableRow key={t.id}>
            <TableCell>{t.type}</TableCell>
            <TableCell>{t.category}</TableCell>
            <TableCell>{t.amount}</TableCell>
            <TableCell>{t.date}</TableCell>
            <TableCell>{t.note}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}