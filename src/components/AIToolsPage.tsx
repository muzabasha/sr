"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toolInstructions } from "@/data/toolInstructions";

export default function AIToolsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedTool, setExpandedTool] = useState<string | null>(null);

    const tools = Object.entries(toolInstructions)
        .filter(([name]) => name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => a[0].localeCompare(b[0]));

    const toggleTool = (name: string) => {
        setExpandedTool(expandedTool === name ? null : name);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 text-sm font-semibold mb-4 border border-indigo-200 dark:border-indigo-800">
                        AI Tools Directory
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Master Your Research Tools
                    </h1>
                    <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
                        Comprehensive usage guides, best practices, and ethical guidelines for all AI tools and platforms discussed across the 17 modules.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-8 max-w-2xl mx-auto relative"
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-2xl">🔍</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for an AI tool (e.g. ChatGPT, Zotero, Overleaf)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-[#111] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm text-lg transition-all"
                    />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <AnimatePresence>
                    {tools.map(([name, instruction]) => {
                        const isExpanded = expandedTool === name;

                        return (
                            <motion.div
                                key={name}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className={`rounded-2xl border ${isExpanded ? 'border-purple-500 shadow-md shadow-purple-500/10' : 'border-[var(--border)]'} bg-white dark:bg-[#111] overflow-hidden`}
                            >
                                <button
                                    onClick={() => toggleTool(name)}
                                    className="w-full px-6 py-5 flex items-center justify-between bg-white dark:bg-[#111] hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-inner font-bold">
                                            {name.charAt(0)}
                                        </div>
                                        <h2 className="text-2xl font-bold">{name}</h2>
                                    </div>
                                    <div className="text-2xl text-[var(--muted-foreground)] transform transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        ↓
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden border-t border-[var(--border)]"
                                        >
                                            <div className="p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/50">
                                                <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                                                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                        <span>💡</span> Pro Research Tip
                                                    </h3>
                                                    <p className="text-blue-900 dark:text-blue-200 leading-relaxed font-medium">
                                                        {instruction.researchTip}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                                    <div>
                                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                            <span>✅</span> Do's
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {instruction.dos.map((item, idx) => (
                                                                <li key={idx} className="flex gap-3 text-green-800 dark:text-green-300 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                                                                    <span className="shrink-0 mt-0.5">•</span>
                                                                    <span className="leading-relaxed">{item.replace('✅ DO: ', '')}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                            <span>❌</span> Don'ts
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {instruction.donts.map((item, idx) => (
                                                                <li key={idx} className="flex gap-3 text-red-800 dark:text-red-300 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                                                                    <span className="shrink-0 mt-0.5">•</span>
                                                                    <span className="leading-relaxed">{item.replace('❌ DON\'T: ', '')}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div>
                                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                            <span>⚙️</span> How to Use
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {instruction.howToUse.map((item, idx) => (
                                                                <li key={idx} className="flex gap-3">
                                                                    <span className="w-6 h-6 shrink-0 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold mt-0.5">
                                                                        {idx + 1}
                                                                    </span>
                                                                    <span className="text-[var(--foreground)] leading-relaxed">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                            <span>📊</span> Interpreting Output
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {instruction.interpretOutput.map((item, idx) => (
                                                                <li key={idx} className="flex gap-3">
                                                                    <span className="w-6 h-6 shrink-0 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 flex items-center justify-center text-xs font-bold mt-0.5">
                                                                        !
                                                                    </span>
                                                                    <span className="text-[var(--foreground)] leading-relaxed">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {tools.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-2xl text-[var(--muted-foreground)]">No AI tools found matching "{searchQuery}"</p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                        >
                            Clear Search
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
