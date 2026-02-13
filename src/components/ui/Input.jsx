import React from 'react';

export function Input({ label, type = 'text', value, onChange, placeholder, required = false, className = '' }) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && <label className="text-sm font-medium text-slate-600 ml-1">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
        </div>
    );
}
