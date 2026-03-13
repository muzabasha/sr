"use client";
import { motion } from "framer-motion";
import { modules } from "@/data/modules";
import { useApp } from "@/context/AppContext";

export default function JourneyMap({ onNavigate }: { onNavigate: (view: string, moduleId?: number) => void }) {
    const { progress } = useApp();

    const phases = [
        { name: "Foundation", range: [1, 3], color: "from-purple-500 to-indigo-500" },
        { name: "Discovery", range: [4, 7], color: "from-blue-500 to-cyan-500" },
        { name: "Creation", range: [8, 11], color: "from-orange-500 to-red-500" },
        { name: "Publication", range: [12, 14], color: "from-green-500 to-emerald-500" },
        { name: "Impact", range: [15, 17], color: "from-pink-500 to-purple-500" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">🗺️ Your Research Journey Map</h2>
                <p className="text-[var(--muted-foreground)]">
                    Follow the path from curious student to responsible researcher
                </p>
                <div className="mt-4 flex justify-center gap-2">
                    <span className="text-sm text-[var(--muted-foreground)]">
                        {progress.completedModules.length} of {modules.length} milestones completed
                    </span>
                </div>
            </motion.div>

            <div className="space-y-8">
                {phases.map((phase, pi) => (
                    <motion.div
                        key={phase.name}
                        initial={{ opacity: 0, x: pi % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: pi * 0.15 }}
                    >
                        <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${phase.color} text-white text-sm font-medium mb-3`}>
                            Phase {pi + 1}: {phase.name}
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {modules
                                .filter((m) => m.id >= phase.range[0] && m.id <= phase.range[1])
                                .map((mod) => {
                                    const isCompleted = progress.completedModules.includes(mod.id);
                                    const hasScore = progress.quizScores[mod.id] !== undefined;
                                    return (
                                        <motion.button
                                            key={mod.id}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => onNavigate("module", mod.id)}
                                            className={`relative p-4 rounded-xl border text-left transition-all ${isCompleted
                                                    ? "border-green-500/50 bg-green-500/5"
                                                    : "border-[var(--border)] bg-[var(--card)] hover:border-indigo-500/50"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xl">{mod.icon}</span>
                                                <span className="text-xs text-[var(--muted-foreground)]">M{mod.id}</span>
                                                {isCompleted && <span className="ml-auto text-green-500">✅</span>}
                                            </div>
                                            <h4 className="text-sm font-medium leading-tight">{mod.title}</h4>
                                            {hasScore && (
                                                <div className="mt-1 text-xs text-[var(--muted-foreground)]">
                                                    Score: {progress.quizScores[mod.id]}%
                                                </div>
                                            )}
                                        </motion.button>
                                    );
                                })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
