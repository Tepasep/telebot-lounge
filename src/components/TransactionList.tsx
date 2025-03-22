
import React from 'react';
import { Transaction } from '@/types';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
  isLoading?: boolean;
}

const TransactionList: React.FC<TransactionListProps> = ({ 
  transactions, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-tg-card">
          <h3 className="text-lg font-medium">Recent Transactions</h3>
        </div>
        <div className="p-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="py-3 border-b border-tg-card last:border-0 flex items-center">
              <div className="w-8 h-8 rounded-full bg-tg-card"></div>
              <div className="ml-3 flex-grow">
                <div className="h-4 w-3/4 bg-tg-card mb-2"></div>
                <div className="h-3 w-1/2 bg-tg-card"></div>
              </div>
              <div className="h-4 w-16 bg-tg-card"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-tg-card">
          <h3 className="text-lg font-medium">Recent Transactions</h3>
        </div>
        <div className="p-8 text-center text-tg-secondary">
          <p>No transactions yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-4 border-b border-tg-card">
        <h3 className="text-lg font-medium">Recent Transactions</h3>
      </div>
      <div className="px-4 divide-y divide-tg-card max-h-[400px] overflow-y-auto">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
