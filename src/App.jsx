import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { AddExpense } from './components/AddExpense';
import { ExpenseList } from './components/ExpenseList';
import { BillSplitter } from './components/BillSplitter';
import { useExpenses } from './hooks/useExpenses';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { expenses, addExpense, deleteExpense } = useExpenses();

  const handleAddExpense = (expense) => {
    addExpense(expense);
    setActiveTab('dashboard');
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'dashboard' && <Dashboard expenses={expenses} />}
      {activeTab === 'add' && <AddExpense onAdd={handleAddExpense} />}
      {activeTab === 'list' && <ExpenseList expenses={expenses} onDelete={deleteExpense} />}
      {activeTab === 'split' && <BillSplitter />}
    </Layout>
  );
}

export default App

