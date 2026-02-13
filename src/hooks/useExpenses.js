import { useState, useEffect } from 'react';

export function useExpenses() {
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem('expenses');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        const newExpense = {
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
            ...expense,
            amount: parseFloat(expense.amount)
        };
        setExpenses(prev => [newExpense, ...prev]);
    };

    const deleteExpense = (id) => {
        setExpenses(prev => prev.filter(ex => ex.id !== id));
    };

    return { expenses, addExpense, deleteExpense };
}
