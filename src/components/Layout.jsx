import React from 'react';
import { Home, PlusCircle, List, Calculator } from 'lucide-react';

export function Layout({ children, activeTab, setActiveTab }) {
    const navItems = [
        { id: 'dashboard', icon: Home, label: 'Home' },
        { id: 'add', icon: PlusCircle, label: 'Add' },
        { id: 'list', icon: List, label: 'History' },
        { id: 'split', icon: Calculator, label: 'Split' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 relative pb-20 md:pb-0">
            <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl md:border-x md:border-slate-100 relative">
                <header className="px-6 py-5 border-b border-slate-50 sticky top-0 bg-white/80 backdrop-blur-md z-10">
                    <h1 className="text-xl font-bold text-blue-600 tracking-tight flex items-center gap-2">
                        <span className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
                            <Calculator size={20} />
                        </span>
                        PocketSplit
                    </h1>
                </header>

                <main className="p-4">
                    {children}
                </main>

                <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-2 md:absolute md:bottom-0 md:max-w-md md:mx-auto">
                    <div className="flex justify-between items-center">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-200 ${isActive
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                    <span className="text-[10px] font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </div>
    );
}
