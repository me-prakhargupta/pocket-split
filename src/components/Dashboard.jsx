import React from 'react';
import { Card } from './ui/Card';
import { Calendar } from 'lucide-react';

export function Dashboard({ expenses }) {
    const today = new Date().toDateString();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const totalToday = expenses
        .filter(e => new Date(e.date).toDateString() === today)
        .reduce((sum, e) => sum + e.amount, 0);

    const totalMonth = expenses
        .filter(e => {
            const d = new Date(e.date);
            return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
        })
        .reduce((sum, e) => sum + e.amount, 0);

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Overview</h2>
            <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none">
                    <div className="flex flex-col">
                        <span className="text-blue-100 text-sm font-medium flex items-center gap-1">
                            <Calendar size={14} /> Today
                        </span>
                        <span className="text-2xl font-bold mt-1">
                            ${totalToday.toFixed(2)}
                        </span>
                    </div>
                </Card>

                <Card className="bg-white border-slate-100">
                    <div className="flex flex-col">
                        <span className="text-slate-500 text-sm font-medium flex items-center gap-1">
                            <Calendar size={14} /> This Month
                        </span>
                        <span className="text-2xl font-bold mt-1 text-slate-800">
                            ${totalMonth.toFixed(2)}
                        </span>
                    </div>
                </Card>
            </div>

            <div className="pt-4">
                <h3 className="text-lg font-semibold text-slate-700 mb-2">Recent Activity</h3>
                {expenses.length === 0 ? (
                    <p className="text-slate-400 text-sm text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                        No expenses yet. Tap 'Add' to start tracking!
                    </p>
                ) : (
                    <div className="space-y-3">
                        {expenses.slice(0, 3).map(expense => (
                            <div key={expense.id} className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="flex flex-col">
                                    <span className="font-medium text-slate-700">{expense.description}</span>
                                    <span className="text-xs text-slate-400">{new Date(expense.date).toLocaleDateString()}</span>
                                </div>
                                <span className="font-semibold text-blue-600">-${expense.amount.toFixed(2)}</span>
                            </div>
                        ))}
                        {expenses.length > 3 && (
                            <p className="text-center text-xs text-slate-400 mt-2">Check 'History' for more</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
