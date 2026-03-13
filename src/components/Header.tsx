"use client";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";
import { modules } from "@/data/modules";

export default function Header({ onNavigate }: { onNavigate: (view: string, moduleId?: number) => void }) {
    const { theme, toggleTheme, presentationMode, togglePresentationMode, progress, searchQuery, setSearchQuery } = useApp();
    const completionPercent = Math.round((progress.completedModules.length / modules.length) * 100);

    return (
        <motion.header
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0a0a0a]/80 border-b border-[var(--border)]"
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
                <button onClick={() => onNavigate("home")} className="flex items-center gap-2 hover:opacity-80 transition">
                    <span className="text-2xl">🧭</span>
                    <div>
                        <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                            Research Compass
                        </h1>
                        <p className="text-[10px] text-[var(--muted-foreground)] leading-tight">Ethical AI for Research Excellence</p>
                    </div>
                </button>

                <div className="flex-1 max-w-md hidden md:block">
                    <input
                        type="text"
                        placeholder="Search modules..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-[var(--secondary)] text-sm border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                    />
                </div>

                <div className="flex items-center gap-2">
                    {/* Progress indicator */}
                    <div className="hidden sm:flex items-center gap-2 mr-2">
                        <div className="w-24 h-2 bg-[var(--secondary)] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
                                style={{ width: `${completionPercent}%` }}
                            />
                        </div>
                        <span className="text-xs text-[var(--muted-foreground)]">{completionPercent}%</span>
                    </div>

                    <button
                        onClick={() => onNavigate("journey")}
                        className="px-3 py-1.5 text-xs rounded-lg bg-[var(--secondary)] hover:bg-[var(--accent)] transition"
                        title="Journey Map"
                    >
                        🗺️ Journey
                    </button>

                    <button
                        onClick={() => onNavigate("scenario")}
                        className="px-3 py-1.5 text-xs rounded-lg bg-[var(--secondary)] hover:bg-[var(--accent)] transition"
                        title="Ethics Scenario"
                    >
                        🎭 Scenario
                    </button>

                    <a
                        href="https://scholar-sparkle-web.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-md transition"
                        title="Resource Person"
                    >
                        👨‍🏫 Resource Person
                    </a>

                    <button
                        onClick={() => onNavigate("badges")}
                        className="px-3 py-1.5 text-xs rounded-lg bg-[var(--secondary)] hover:bg-[var(--accent)] transition"
                        title="Badges"
                    >
                        🏆 {progress.badges.length}
                    </button>

                    <button
                        onClick={togglePresentationMode}
                        className={`px-3 py-1.5 text-xs rounded-lg transition ${presentationMode ? "bg-indigo-500 text-white" : "bg-[var(--secondary)] hover:bg-[var(--accent)]"
                            }`}
                        title="Presentation Mode"
                    >
                        {presentationMode ? "🖥️ Exit" : "🖥️ Present"}
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="px-3 py-1.5 text-xs rounded-lg bg-[var(--secondary)] hover:bg-[var(--accent)] transition"
                        title="Toggle Theme"
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
