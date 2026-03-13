"use client";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

const allBadges = [
    { id: "first-step", name: "First Step", icon: "👣", desc: "Completed your first module" },
    { id: "curious-mind", name: "Curious Mind", icon: "🧠", desc: "Completed the Research Mindset module" },
    { id: "ethics-champion", name: "Ethics Champion", icon: "⚖️", desc: "Completed the AI Ethics module" },
    { id: "paper-hunter", name: "Paper Hunter", icon: "🔍", desc: "Completed the Paper Search module" },
    { id: "critical-reader", name: "Critical Reader", icon: "📖", desc: "Completed the Critical Reading module" },
    { id: "gap-finder", name: "Gap Finder", icon: "🔬", desc: "Identified a research gap" },
    { id: "problem-solver", name: "Problem Solver", icon: "🎯", desc: "Constructed a problem statement" },
    { id: "writer", name: "Academic Writer", icon: "✍️", desc: "Completed the Paper Drafting module" },
    { id: "quiz-master", name: "Quiz Master", icon: "🏅", desc: "Scored 100% on any quiz" },
    { id: "halfway", name: "Halfway There", icon: "🌟", desc: "Completed 9 modules" },
    { id: "researcher", name: "Responsible Researcher", icon: "🎓", desc: "Completed all 17 modules" },
    { id: "startup-ready", name: "Startup Ready", icon: "🚀", desc: "Completed the Startup module" },
];

export default function BadgesPage() {
    const { progress } = useApp();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">🏆 Achievement Badges</h2>
                <p className="text-[var(--muted-foreground)]">
                    Earn badges as you progress through your research journey
                </p>
                <p className="text-sm mt-2 text-indigo-500">
                    {progress.badges.length} of {allBadges.length} badges earned
                </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {allBadges.map((badge, i) => {
                    const earned = progress.badges.includes(badge.id);
                    return (
                        <motion.div
                            key={badge.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`p-4 rounded-xl border text-center transition-all ${earned
                                    ? "border-yellow-500/50 bg-yellow-500/5"
                                    : "border-[var(--border)] bg-[var(--card)] opacity-40 grayscale"
                                }`}
                        >
                            <div className="text-4xl mb-2">{badge.icon}</div>
                            <h4 className="text-sm font-semibold">{badge.name}</h4>
                            <p className="text-xs text-[var(--muted-foreground)] mt-1">{badge.desc}</p>
                            {earned && <span className="inline-block mt-2 text-xs text-yellow-600">✨ Earned</span>}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
