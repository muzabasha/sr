"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { modules } from "@/data/modules";
import { useApp } from "@/context/AppContext";

// Zoomable Image Component
function ZoomableImage({ src }: { src: string }) {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const isDragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0 });

    const handleWheel = (e: React.WheelEvent) => {
        if (!e.ctrlKey) return;
        e.preventDefault();
        setScale(s => Math.min(Math.max(s - e.deltaY * 0.01, 1), 5));
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale === 1) return;
        isDragging.current = true;
        dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        setPosition({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
    };

    const handleMouseUp = () => { isDragging.current = false; };

    return (
        <div 
            className="relative w-full h-[300px] md:h-[600px] bg-[var(--secondary)] rounded-2xl overflow-hidden border border-[var(--border)] group"
            onWheel={handleWheel}
        >
            <div className="absolute top-4 right-4 z-10 flex gap-2 lg:opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-xl backdrop-blur-sm">
                <button onClick={() => setScale(s => Math.min(s + 0.5, 5))} className="w-10 h-10 bg-white/20 text-white rounded-lg hover:bg-white/30 text-xl font-bold transition">＋</button>
                <button onClick={() => setScale(s => Math.max(s - 0.5, 1))} className="w-10 h-10 bg-white/20 text-white rounded-lg hover:bg-white/30 text-xl font-bold transition">－</button>
                <button onClick={() => { setScale(1); setPosition({ x: 0, y: 0 }) }} className="px-4 bg-white/20 text-white rounded-lg hover:bg-white/30 text-sm font-semibold transition">Reset</button>
            </div>
            
            <div 
                className={`w-full h-full ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={(e) => {
                    if (scale === 1) return;
                    isDragging.current = true;
                    dragStart.current = { x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y };
                }}
                onTouchMove={(e) => {
                    if (!isDragging.current) return;
                    setPosition({ x: e.touches[0].clientX - dragStart.current.x, y: e.touches[0].clientY - dragStart.current.y });
                }}
                onTouchEnd={handleMouseUp}
            >
                {/* Notice: Assumes the image is saved in the public folder as journey-map.jpg */}
                <img 
                    src={src} 
                    alt="Research Journey Visual Map" 
                    className="w-full h-full object-contain pointer-events-none select-none transition-transform duration-75"
                    style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})` }}
                />
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 text-white/90 text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <span className="hidden md:inline">Ctrl + Scroll to zoom in/out. </span>Drag to pan when zoomed.
            </div>
        </div>
    );
}

export default function HomePage({ onNavigate }: { onNavigate: (view: string, moduleId?: number) => void }) {
    const { progress, searchQuery, toggleBookmark } = useApp();
    const [activeTab, setActiveTab] = useState<"modules" | "quizzes" | "flashcards" | "videos">("modules");

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
                    <button
                        onClick={() => onNavigate("scenario")}
                        className="px-6 py-3 border border-[var(--border)] rounded-xl font-medium hover:bg-[var(--secondary)] transition"
                    >
                        🎭 Ethics Scenario
                    </button>
                    <a
                        href="https://scholar-sparkle-web.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all"
                    >
                        👨‍🏫 Resource Person
                    </a>
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

            {/* Visual Overview Image */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-12"
            >
                <h3 className="text-2xl font-bold mb-6 text-center">17-Step Journey to Ethical AI Research Excellence</h3>
                <ZoomableImage src="/journey-map.jpg" />
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

            {/* Tabs for Learning Content */}
            <section className="mt-12">
                <div className="flex flex-wrap gap-2 mb-8 border-b border-(--border) pb-4 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab("modules")}
                        className={`px-6 py-3 rounded-t-xl font-bold transition-all ${activeTab === "modules" ? "text-indigo-500 border-b-2 border-indigo-500 bg-indigo-500/5" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"}`}
                    >
                        📚 Learning Modules
                    </button>
                    <button
                        onClick={() => setActiveTab("quizzes")}
                        className={`px-6 py-3 rounded-t-xl font-bold transition-all ${activeTab === "quizzes" ? "text-purple-500 border-b-2 border-purple-500 bg-purple-500/5" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"}`}
                    >
                        🧠 AI Quizzes
                    </button>
                    <button
                        onClick={() => setActiveTab("flashcards")}
                        className={`px-6 py-3 rounded-t-xl font-bold transition-all ${activeTab === "flashcards" ? "text-amber-500 border-b-2 border-amber-500 bg-amber-500/5" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"}`}
                    >
                        🗂️ Research Flashcards
                    </button>
                    <button
                        onClick={() => setActiveTab("videos")}
                        className={`px-6 py-3 rounded-t-xl font-bold transition-all ${activeTab === "videos" ? "text-rose-500 border-b-2 border-rose-500 bg-rose-500/5" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"}`}
                    >
                        🎥 Learn by Watching
                    </button>
                </div>

                {activeTab === "modules" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    </motion.div>
                )}

                {activeTab === "quizzes" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "NotebookLM Quiz Part 1", url: "https://notebooklm.google.com/notebook/a4914d56-22c7-43a6-96a1-84969fc7013f?artifactId=b71ff311-70a9-48fa-b586-5e60eb4f612b" },
                            { name: "NotebookLM Quiz Part 2", url: "https://notebooklm.google.com/notebook/a4914d56-22c7-43a6-96a1-84969fc7013f?artifactId=af388466-429f-43af-a92d-c48e41b01965" },
                            { name: "NotebookLM Quiz Part 3", url: "https://notebooklm.google.com/notebook/a4914d56-22c7-43a6-96a1-84969fc7013f?artifactId=a2ac15a7-a43a-43cb-9964-ec22b775eec8" }
                        ].map((quiz, idx) => (
                            <a key={idx} href={quiz.url} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="p-6 rounded-2xl bg-(--card) border border-(--border) hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🧠</div>
                                    <h4 className="text-xl font-bold mb-2 text-(--foreground) group-hover:text-purple-500">{quiz.name}</h4>
                                    <p className="text-sm text-(--muted-foreground) mb-4">Click to open this interactive quiz directly in Google NotebookLM.</p>
                                    <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">Take Quiz ↗</span>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                )}

                {activeTab === "flashcards" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <a href="https://notebooklm.google.com/notebook/a4914d56-22c7-43a6-96a1-84969fc7013f?artifactId=843d58d1-6ff2-4d1b-a7aa-6e1589d7fdd4" target="_blank" rel="noopener noreferrer" className="block group">
                            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/10 border border-(--border) hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/20 transition-all flex flex-col justify-center items-center text-center">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🗂️</div>
                                <h4 className="text-2xl font-bold mb-3 text-(--foreground) group-hover:text-amber-500">Master Research Flashcards</h4>
                                <p className="text-(--muted-foreground) mb-6">Review your concepts efficiently with intelligent NotebookLM flashcards. Perfect for active recall!</p>
                                <span className="inline-block text-sm font-bold px-6 py-3 rounded-xl bg-amber-500 text-white hover:bg-amber-600 shadow-md">Open Flashcards ↗</span>
                            </div>
                        </a>
                        <div className="p-8 rounded-2xl bg-(--secondary) border border-(--border) flex flex-col justify-center text-center opacity-70">
                            <div className="text-4xl mb-4 grayscale">🔒</div>
                            <h4 className="text-lg font-semibold mb-2 text-(--muted-foreground)">More Flashcards Coming Soon</h4>
                            <p className="text-sm text-(--muted-foreground)">Keep checking back as we add more generative AI study materials based on the modules.</p>
                        </div>
                    </motion.div>
                )}

                {activeTab === "videos" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                        <a href="https://notebooklm.google.com/notebook/a4914d56-22c7-43a6-96a1-84969fc7013f?artifactId=7ac204ce-ca0e-499a-b72e-bad05ebc1c48" target="_blank" rel="noopener noreferrer" className="block group">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-rose-500/5 to-pink-500/10 border border-(--border) hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/20 transition-all flex flex-col sm:flex-row items-center gap-8">
                                <div className="text-8xl group-hover:scale-110 transition-transform origin-center shrink-0">
                                    🎥
                                </div>
                                <div className="text-center sm:text-left">
                                    <h4 className="text-3xl font-bold mb-3 text-(--foreground) group-hover:text-rose-500">Visual Research Guide</h4>
                                    <p className="text-lg text-(--muted-foreground) mb-6">Want to speed up your learning? Watch our comprehensive, interactive visual guide constructed directly inside NotebookLM to absorb the research methodology faster.</p>
                                    <span className="inline-block text-sm font-bold px-8 py-3 rounded-xl bg-rose-500 text-white hover:bg-rose-600 shadow-md">Start Watching Now ↗</span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                )}
            </section>
        </div>
    );
}
