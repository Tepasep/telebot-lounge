
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Transaction } from '@/types';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const isCredit = transaction.type === 'credit';
  const formattedDate = new Date(transaction.createdAt).toLocaleDateString(undefined, { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  return (
    <div className="flex items-center py-3 border-b border-tg-card last:border-0 animate-slide-up" style={{ 
      animationDelay: `${100 + (transaction.id % 10) * 50}ms` 
    }}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isCredit ? 'bg-green-800/30' : 'bg-red-800/30'}`}>
        {isCredit ? (
          <ArrowUp className="h-4 w-4 text-green-400" />
        ) : (
          <ArrowDown className="h-4 w-4 text-red-400" />
        )}
      </div>
      
      <div className="ml-3 flex-grow">
        <p className="text-sm font-medium">{transaction.description}</p>
        <p className="text-xs text-tg-secondary">{formattedDate}</p>
      </div>
      
      <div className={`flex-shrink-0 font-medium ${isCredit ? 'text-green-400' : 'text-red-400'}`}>
        {isCredit ? '+' : '-'}{Math.abs(transaction.amount)}
      </div>
    </div>
  );
};

export default TransactionItem;
