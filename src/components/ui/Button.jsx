import React from 'react';

export function Button({ children, onClick, variant = 'primary', className = '', type = 'button' }) {
    const baseStyles = "px-4 py-2 rounded-xl font-medium transition-colors duration-200 active:scale-95";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
        danger: "bg-red-50 text-red-600 hover:bg-red-100",
        outline: "border border-slate-200 text-slate-600 hover:bg-slate-50"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
