
export interface User {
  id: number;
  stars: number;
}

export interface Transaction {
  id: number;
  userId: number;
  amount: number;
  description: string;
  type: 'credit' | 'debit';
  createdAt: string;
}
