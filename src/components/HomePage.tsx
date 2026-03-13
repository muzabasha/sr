"use client";
import { motion } from "framer-motion";
import { modules } from "@/data/modules";
import { useApp } from "@/context/AppContext";

export default function HomePage({ onNavigate }: { onNavigate: (view: string, moduleId?: number) => void }) {
    const { progress, searchQuery, toggleBookmark } = useApp();

    const filtered = modules.filter(
        (m) =>
            m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Your Research Journey Starts Here
                </h2>
                <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-6">
                    Transform from a curious student into a responsible researcher. Learn to use AI ethically
                    throughout the entire research lifecycle — from finding your topic to publishing your paper.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => onNavigate("module", 1)}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                    >
                        🚀 Start Learning
                    </button>
                    <button
                        onClick={() => onNavigate("journey")}
                        className="px-6 py-3 border border-[var(--border)] rounded-xl font-medium hover:bg-[var(--secondary)] transition"
                    >
                        🗺️ View Journey Map
                    </button>
                </div>
            </motion.section>

            {/* Stats */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
                {[
                    { label: "Modules", value: "17", icon: "📚" },
                    { label: "Activities", value: "50+", icon: "🎯" },
                    { label: "Quizzes", value: "34+", icon: "❓" },
                    { label: "Case Studies", value: "17", icon: "📋" },
                ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                        <div className="text-2xl mb-1">{stat.icon}</div>
                        <div className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</div>
                        <div className="text-sm text-[var(--muted-foreground)]">{stat.label}</div>
                    </div>
                ))}
            </motion.section>

            {/* Comparison: Traditional vs AI-Assisted */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-[var(--border)]"
            >
                <h3 className="text-xl font-bold mb-4 text-center">Traditional Research vs AI-Assisted Research</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-red-500">❌ Without Ethical AI Awareness</h4>
                        <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                            <li>• Copies AI-generated text directly</li>
                            <li>• Uses fake references from AI</li>
                            <li>• No understanding of research methodology</li>
                            <li>• Reactive approach to problems</li>
                            <li>• Risk of academic misconduct</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-green-500">✅ With Ethical AI Awareness</h4>
                        <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                            <li>• Uses AI to enhance understanding</li>
                            <li>• Verifies all references independently</li>
                            <li>• Strong research methodology skills</li>
                            <li>• Proactive, systematic approach</li>
                            <li>• Responsible, impactful scholarship</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* Module Grid */}
            <section>
                <h3 className="text-2xl font-bold mb-6">Learning Modules</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((mod, i) => {
                        const isCompleted = progress.completedModules.includes(mod.id);
                        const isBookmarked = progress.bookmarks.includes(mod.id);
                        return (
                            <motion.div
                                key={mod.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                                onClick={() => onNavigate("module", mod.id)}
                            >
                                <div className={`h-2 bg-gradient-to-r ${mod.color}`} />
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">{mod.icon}</span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)]">
                                                Module {mod.id}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {isCompleted && <span className="text-green-500 text-sm">✅</span>}
                                            <button
                                                onClick={(e) => { e.stopPropagation(); toggleBookmark(mod.id); }}
                                                className="text-sm hover:scale-110 transition"
                                            >
                                                {isBookmarked ? "🔖" : "📄"}
                                            </button>
                                        </div>
                                    </div>
                                    <h4 className="font-semibold mb-1 group-hover:text-indigo-500 transition">{mod.title}</h4>
                                    <p className="text-sm text-[var(--muted-foreground)] line-clamp-2">{mod.subtitle}</p>
                                    {progress.quizScores[mod.id] !== undefined && (
                                        <div className="mt-2 text-xs text-[var(--muted-foreground)]">
                                            Quiz Score: {progress.quizScores[mod.id]}%
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
