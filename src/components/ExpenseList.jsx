import React from 'react';
import { Trash2 } from 'lucide-react';
import { Card } from './ui/Card';

export function ExpenseList({ expenses, onDelete }) {
    if (expenses.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                <p>No expenses recorded yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4 pb-20">
            <h2 className="text-2xl font-bold text-slate-800">History</h2>
            <div className="space-y-3">
                {expenses.map((expense) => (
                    <Card key={expense.id} className="flex justify-between items-center bg-white">
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-slate-800">{expense.description}</span>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="bg-slate-100 px-2 py-0.5 rounded-full">{expense.category}</span>
                                <span>{new Date(expense.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-slate-700">-${expense.amount.toFixed(2)}</span>
                            <button
                                onClick={() => onDelete(expense.id)}
                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
