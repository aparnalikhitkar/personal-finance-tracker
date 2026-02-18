import { Request, Response } from 'express';
import { getTransactions as getAllTransactions, addTransaction as addNewTransaction, Transaction } from '../models/transactionModel';

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await getAllTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const addTransaction = async (req: Request, res: Response) => {
  try {
    const transaction: Transaction = req.body;
    const newTransaction = await addNewTransaction(transaction);
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};