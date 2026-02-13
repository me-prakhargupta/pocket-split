import React, { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { DollarSign } from 'lucide-react';

export function AddExpense({ onAdd }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !description) return;

        onAdd({
            amount: parseFloat(amount),
            description,
            category,
            date: new Date().toISOString()
        });

        setAmount('');
        setDescription('');
        setCategory('General');
    };

    const categories = ['General', 'Food', 'Transport', 'Utilities', 'Entertainment'];

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Add Expense</h2>
            <Card>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        label="Amount"
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />

                    <Input
                        label="Description"
                        placeholder="What is this for?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600 ml-1">Category</label>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setCategory(cat)}
                                    className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${category === cat
                                        ? 'bg-blue-100 text-blue-700 border-blue-200 font-medium'
                                        : 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button type="submit" className="mt-2 w-full flex items-center justify-center gap-2">
                        <DollarSign size={18} />
                        Save Expense
                    </Button>
                </form>
            </Card>
        </div>
    );
}
