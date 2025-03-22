
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import StarDisplay from '@/components/StarDisplay';
import TransactionList from '@/components/TransactionList';
import { getUserId, initTelegramWebApp } from '@/lib/telegram';
import { Transaction, User } from '@/types';

// Mock API functions - replace with actual API calls
const fetchUserData = async (userId: number): Promise<User> => {
  // Return mock user data immediately
  return {
    id: userId,
    stars: Math.floor(Math.random() * 10000)
  };
};

const fetchTransactions = async (userId: number): Promise<Transaction[]> => {
  // Return mock transactions immediately
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    userId,
    amount: Math.floor(Math.random() * 100) + 1,
    description: Math.random() > 0.5 
      ? `Reward for activity ${i + 1}` 
      : `Used for purchase ${i + 1}`,
    type: Math.random() > 0.3 ? 'credit' : 'debit',
    createdAt: new Date(Date.now() - Math.random() * 604800000).toISOString() // Within the last week
  })).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

const Index = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Telegram Web App
    initTelegramWebApp();
    
    // Get user ID from Telegram
    const id = getUserId();
    setUserId(id);
    
    // Fetch initial data
    if (id) {
      fetchData(id);
    }
  }, []);

  const fetchData = async (id: number) => {
    setIsLoading(true);
    try {
      // Fetch data without artificial delays
      const userData = await fetchUserData(id);
      const transactionsData = await fetchTransactions(id);
      
      setUser(userData);
      setTransactions(transactionsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-tg-bg text-tg-text">
      <div className="max-w-md mx-auto pb-8">
        <Header title="Star Lounge" />
        
        <main className="px-4 py-6">
          <StarDisplay 
            count={user?.stars || 0} 
            isLoading={isLoading} 
          />
          
          <TransactionList 
            transactions={transactions} 
            isLoading={isLoading} 
          />
        </main>
      </div>
    </div>
  );
};

export default Index;
