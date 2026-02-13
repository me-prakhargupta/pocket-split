import React, { useState } from 'react';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Users } from 'lucide-react';

export function BillSplitter() {
    const [total, setTotal] = useState('');
    const [people, setPeople] = useState('2');
    const [tip, setTip] = useState('0');

    const { perPerson, grandTotal, tipAmount } = React.useMemo(() => {
        const bill = parseFloat(total) || 0;
        const tipPercent = parseFloat(tip) || 0;
        const count = parseInt(people);

        // Handle invalid parsing (NaN) or zero/negative people
        const safePeople = (isNaN(count) || count <= 0) ? 0 : count;

        const calculatedTip = (bill * tipPercent) / 100;
        const calculatedTotal = bill + calculatedTip;

        const calculatedPerPerson = safePeople > 0
            ? calculatedTotal / safePeople
            : 0;

        return {
            perPerson: calculatedPerPerson,
            grandTotal: calculatedTotal,
            tipAmount: calculatedTip
        };
    }, [total, people, tip]);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Split Bill</h2>

            <div className="bg-blue-600 text-white rounded-2xl shadow-sm py-8 px-4">
                <div className="flex flex-col items-center">
                    <span className="text-blue-100 text-sm font-medium mb-1">Per Person</span>
                    <span className="text-5xl font-bold tracking-tight">
                        ${perPerson.toFixed(2)}
                    </span>
                    <div className="flex gap-4 mt-4 text-sm text-blue-100">
                        <span>Total: ${grandTotal.toFixed(2)}</span>
                        <span>Tip: ${tipAmount.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <Input
                    label="Bill Amount"
                    type="number"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    placeholder="0.00"
                />

                <div className="flex gap-4">
                    <Input
                        label="People"
                        type="number"
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        className="flex-1"
                    />
                    <Input
                        label="Tip %"
                        type="number"
                        value={tip}
                        onChange={(e) => setTip(e.target.value)}
                        className="flex-1"
                    />
                </div>
            </div>
        </div>
    );
}
