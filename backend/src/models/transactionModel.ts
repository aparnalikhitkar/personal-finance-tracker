import { poolPromise } from '../services/db';
import sql from 'mssql';

export interface Transaction {
  id?: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date?: Date;
  note?: string;
}

export const getTransactions = async () => {
  const pool = await poolPromise;
  const result = await pool.request().query('SELECT * FROM Transactions ORDER BY Date DESC');
  return result.recordset;
};

export const addTransaction = async (transaction: Transaction) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('Type', sql.NVarChar, transaction.type)
    .input('Category', sql.NVarChar, transaction.category)
    .input('Amount', sql.Decimal(18,2), transaction.amount)
    .input('Note', sql.NVarChar, transaction.note || '')
    .query('INSERT INTO Transactions (Type, Category, Amount, Note) VALUES (@Type, @Category, @Amount, @Note); SELECT SCOPE_IDENTITY() AS id;');
  return result.recordset[0];
};