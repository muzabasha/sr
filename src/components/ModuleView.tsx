"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modules, type Slide } from "@/data/modules";
import { useApp } from "@/context/AppContext";
import { getToolInstructions } from "@/data/toolInstructions";
import QuizEngine from "./QuizEngine";
import InteractiveActivity from "./InteractiveActivity";

export default function ModuleView({
    moduleId,
    onNavigate,
}: {
    moduleId: number;
    onNavigate: (view: string, moduleId?: number) => void;
}) {
    const mod = modules.find((m) => m.id === moduleId);
    const { presentationMode, completeModule, addBadge, progress } = useApp();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState<"slides" | "quiz" | "casestudy" | "ethics" | "dodont" | "aitools">("slides");
    const [revealedBullets, setRevealedBullets] = useState(0);

    if (!mod) return <div className="p-8 text-center">Module not found</div>;

    const slide = mod.slides[currentSlide];
    const totalSlides = mod.slides.length;
    const isCompleted = progress.completedModules.includes(mod.id);

    const nextSlide = useCallback(() => {
        if (presentationMode && slide?.bulletPoints && revealedBullets < slide.bulletPoints.length) {
            setRevealedBullets((r) => r + 1);
            return;
        }
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide((s) => s + 1);
            setRevealedBullets(0);
        }
    }, [currentSlide, totalSlides, presentationMode, slide, revealedBullets]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide((s) => s - 1);
            setRevealedBullets(0);
        }
    }, [currentSlide]);

    const handleComplete = () => {
        completeModule(mod.id);
        if (progress.completedModules.length === 0) addBadge("first-step");
        if (mod.id === 1) addBadge("curious-mind");
        if (mod.id === 3) addBadge("ethics-champion");
        if (mod.id === 4) addBadge("paper-hunter");
        if (mod.id === 6) addBadge("critical-reader");
        if (mod.id === 7) addBadge("gap-finder");
        if (mod.id === 8) addBadge("problem-solver");
        if (mod.id === 10) addBadge("writer");
        if (mod.id === 17) addBadge("startup-ready");
        if (progress.completedModules.length + 1 >= 9) addBadge("halfway");
        if (progress.completedModules.length + 1 >= 17) addBadge("researcher");
    };

    return (
        <div className={`max-w-6xl mx-auto px-4 py-6 ${presentationMode ? "presentation-mode" : ""}`}>
            {/* Module Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <button onClick={() => onNavigate("home")} className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                        ← Back
                    </button>
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${mod.color} text-white text-xs font-medium`}>
                        Module {mod.id}
                    </span>
                    {isCompleted && <span className="text-green-500 text-sm">✅ Completed</span>}
                </div>
                <h2 className={`font-bold mb-1 ${presentationMode ? "text-4xl" : "text-2xl"}`}>
                    {mod.icon} {mod.title}
                </h2>
                <p className="text-[var(--muted-foreground)]">{mod.subtitle}</p>
            </motion.div>

            {/* Analogy Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6 p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
            >
                <p className="text-sm italic">💡 <span className="font-medium">Analogy:</span> {mod.analogy}</p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {(["slides", "quiz", "casestudy", "ethics", "dodont", "aitools"] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition ${activeTab === tab
                            ? "bg-indigo-500 text-white"
                            : "bg-[var(--secondary)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]"
                            }`}
                    >
                        {tab === "slides" && "📑 Content"}
                        {tab === "quiz" && "❓ Quiz"}
                        {tab === "casestudy" && "📋 Case Study"}
                        {tab === "ethics" && "⚖️ Ethics Check"}
                        {tab === "dodont" && "✅ Do & Don't"}
                        {tab === "aitools" && `🤖 AI Tools (${mod.aiTools.length})`}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {activeTab === "slides" && (
                    <motion.div key="slides" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {/* Slide Progress */}
                        <div className="flex items-center gap-2 mb-4">
                            {mod.slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setCurrentSlide(i); setRevealedBullets(0); }}
                                    className={`h-2 rounded-full transition-all ${i === currentSlide ? "w-8 bg-indigo-500" : i < currentSlide ? "w-4 bg-indigo-300" : "w-4 bg-[var(--secondary)]"
                                        }`}
                                />
                            ))}
                            <span className="ml-auto text-xs text-[var(--muted-foreground)]">
                                {currentSlide + 1} / {totalSlides}
                            </span>
                        </div>

                        {/* Slide Content */}
                        <SlideContent
                            slide={slide}
                            presentationMode={presentationMode}
                            revealedBullets={revealedBullets}
                            moduleId={mod.id}
                        />

                        {/* Navigation */}
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                                className="px-4 py-2 rounded-lg bg-[var(--secondary)] disabled:opacity-30 hover:bg-[var(--accent)] transition"
                            >
                                ← Previous
                            </button>
                            <div className="flex gap-2">
                                {currentSlide === totalSlides - 1 && !isCompleted && (
                                    <button
                                        onClick={handleComplete}
                                        className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                                    >
                                        ✅ Mark Complete
                                    </button>
                                )}
                                <button
                                    onClick={nextSlide}
                                    disabled={currentSlide === totalSlides - 1 && (!presentationMode || !slide?.bulletPoints || revealedBullets >= (slide?.bulletPoints?.length || 0))}
                                    className="px-4 py-2 rounded-lg bg-indigo-500 text-white disabled:opacity-30 hover:bg-indigo-600 transition"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>

                        {/* Module Navigation */}
                        <div className="flex justify-between mt-8 pt-4 border-t border-[var(--border)]">
                            {mod.id > 1 && (
                                <button
                                    onClick={() => { onNavigate("module", mod.id - 1); setCurrentSlide(0); }}
                                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                >
                                    ← Module {mod.id - 1}: {modules[mod.id - 2]?.title}
                                </button>
                            )}
                            {mod.id < 17 && (
                                <button
                                    onClick={() => { onNavigate("module", mod.id + 1); setCurrentSlide(0); }}
                                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] ml-auto"
                                >
                                    Module {mod.id + 1}: {modules[mod.id]?.title} →
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}

                {activeTab === "quiz" && (
                    <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <QuizEngine moduleId={mod.id} questions={mod.quiz} />
                    </motion.div>
                )}

                {activeTab === "casestudy" && (
                    <motion.div key="case" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                            <h3 className="text-xl font-bold mb-4">📋 Real-World Case Study</h3>
                            <p className="text-[var(--muted-foreground)] leading-relaxed">{mod.caseStudy}</p>
                        </div>
                    </motion.div>
                )}

                {activeTab === "ethics" && (
                    <motion.div key="ethics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                            <h3 className="text-xl font-bold mb-4">⚖️ AI Ethics Checkpoint</h3>
                            <p className="text-[var(--muted-foreground)] leading-relaxed">{mod.ethicsCheckpoint}</p>
                        </div>
                    </motion.div>
                )}

                {activeTab === "dodont" && (
                    <motion.div key="dodont" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                                <h3 className="text-lg font-bold text-green-600 mb-3">✅ What To Do</h3>
                                <ul className="space-y-2">
                                    {mod.doAndDont.do.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                                <h3 className="text-lg font-bold text-red-600 mb-3">❌ What NOT To Do</h3>
                                <ul className="space-y-2">
                                    {mod.doAndDont.dont.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <span className="text-red-500 mt-0.5">✗</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === "aitools" && (
                    <motion.div key="aitools" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="space-y-6">
                            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                                <h3 className="text-xl font-bold mb-1">🤖 Free AI Tools for This Module</h3>
                                <p className="text-sm text-[var(--muted-foreground)]">
                                    Explore these tools with step-by-step instructions. Learn how to use each tool and interpret its output for your research.
                                </p>
                            </div>
                            {mod.aiTools.map((tool, i) => {
                                const instr = getToolInstructions(tool.name);
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
                                    >
                                        <div className="p-4 flex items-start justify-between gap-3 border-b border-[var(--border)]">
                                            <div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h5 className="font-semibold">{tool.name}</h5>
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-600">{tool.freeTag}</span>
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500">{tool.category}</span>
                                                </div>
                                                <p className="text-sm text-[var(--muted-foreground)] mt-1">{tool.description}</p>
                                            </div>
                                            <a href={tool.url} target="_blank" rel="noopener noreferrer"
                                                className="shrink-0 px-3 py-1.5 text-xs rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition">
                                                Open Tool ↗
                                            </a>
                                        </div>
                                        {instr && (
                                            <div className="p-4 space-y-4">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
                                                        <h6 className="text-xs font-semibold uppercase tracking-wide text-indigo-500 mb-2">📋 How to Use (Step-by-Step)</h6>
                                                        <ol className="space-y-2">
                                                            {instr.howToUse.map((step, si) => (
                                                                <li key={si} className="text-xs text-[var(--muted-foreground)] flex items-start gap-2">
                                                                    <span className="bg-indigo-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{si + 1}</span>
                                                                    <span>{step}</span>
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                    <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                                                        <h6 className="text-xs font-semibold uppercase tracking-wide text-amber-500 mb-2">🔍 Interpreting Output</h6>
                                                        <ul className="space-y-2">
                                                            {instr.interpretOutput.map((tip, ti) => (
                                                                <li key={ti} className="text-xs text-[var(--muted-foreground)] flex items-start gap-2">
                                                                    <span className="text-amber-400 shrink-0 mt-0.5">▸</span>
                                                                    <span>{tip}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                {instr.dos && instr.donts && (
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                                                            <h6 className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-2">✅ Do This</h6>
                                                            <ul className="space-y-2">
                                                                {instr.dos.map((d, di) => (
                                                                    <li key={di} className="text-xs text-[var(--muted-foreground)] flex items-start gap-2">
                                                                        <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                                                                        <span>{d}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                                                            <h6 className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-2">❌ Don&apos;t Do This</h6>
                                                            <ul className="space-y-2">
                                                                {instr.donts.map((d, di) => (
                                                                    <li key={di} className="text-xs text-[var(--muted-foreground)] flex items-start gap-2">
                                                                        <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                                                                        <span>{d}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/10">
                                                    <p className="text-xs">
                                                        <span className="font-semibold text-green-600">💡 Research Tip:</span>{" "}
                                                        <span className="text-[var(--muted-foreground)]">{instr.researchTip}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function SlideContent({
    slide,
    presentationMode,
    revealedBullets,
    moduleId,
}: {
    slide: Slide;
    presentationMode: boolean;
    revealedBullets: number;
    moduleId: number;
}) {
    if (!slide) return null;

    return (
        <motion.div
            key={slide.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] min-h-[300px]"
        >
            <h3 className={`font-bold mb-4 ${presentationMode ? "text-3xl" : "text-xl"}`}>{slide.title}</h3>
            <p className={`text-[var(--muted-foreground)] mb-4 ${presentationMode ? "text-xl" : ""}`}>{slide.content}</p>

            {slide.type === "text" && slide.bulletPoints && (
                <ul className="space-y-3">
                    {slide.bulletPoints.map((bp, i) => {
                        if (presentationMode && i >= revealedBullets) return null;
                        return (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: presentationMode ? 0 : i * 0.1 }}
                                className={`flex items-start gap-2 ${presentationMode ? "text-lg" : "text-sm"}`}
                            >
                                <span className="text-indigo-500 mt-1">▸</span>
                                <span>{bp}</span>
                            </motion.li>
                        );
                    })}
                </ul>
            )}

            {slide.type === "comparison" && slide.tableData && (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr>
                                {slide.tableData.headers.map((h, i) => (
                                    <th key={i} className="text-left p-3 bg-[var(--secondary)] font-semibold border-b border-[var(--border)]">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {slide.tableData.rows.map((row, ri) => (
                                <motion.tr
                                    key={ri}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: ri * 0.1 }}
                                    className="border-b border-[var(--border)] hover:bg-[var(--secondary)]/50"
                                >
                                    {row.map((cell, ci) => (
                                        <td key={ci} className="p-3">{cell}</td>
                                    ))}
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {slide.type === "diagram" && slide.bulletPoints && (
                <div className="space-y-3">
                    {slide.bulletPoints.map((bp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.15 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--secondary)]"
                        >
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold`}>
                                {i + 1}
                            </div>
                            <span className={presentationMode ? "text-lg" : "text-sm"}>{bp}</span>
                        </motion.div>
                    ))}
                </div>
            )}

            {slide.type === "interactive" && slide.interactiveType && (
                <InteractiveActivity type={slide.interactiveType} moduleId={moduleId} />
            )}

            {slide.type === "activity" && (
                <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        🎯 Complete this activity to earn progress points!
                    </p>
                </div>
            )}
        </motion.div>
    );
}
