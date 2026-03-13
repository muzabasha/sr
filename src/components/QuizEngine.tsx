"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type QuizQuestion } from "@/data/modules";
import { useApp } from "@/context/AppContext";

export default function QuizEngine({ moduleId, questions }: { moduleId: number; questions: QuizQuestion[] }) {
    const { saveQuizScore, addBadge } = useApp();
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const q = questions[current];

    const handleSelect = (idx: number) => {
        if (selected !== null) return;
        setSelected(idx);
        setShowExplanation(true);
        if (idx === q.correct) setScore((s) => s + 1);
    };

    const handleNext = () => {
        if (current < questions.length - 1) {
            setCurrent((c) => c + 1);
            setSelected(null);
            setShowExplanation(false);
        } else {
            const pct = Math.round(((score + (selected === q.correct ? 0 : 0)) / questions.length) * 100);
            saveQuizScore(moduleId, pct);
            if (pct === 100) addBadge("quiz-master");
            setFinished(true);
        }
    };

    const restart = () => {
        setCurrent(0);
        setSelected(null);
        setShowExplanation(false);
        setScore(0);
        setFinished(false);
    };

    if (finished) {
        const pct = Math.round((score / questions.length) * 100);
        return (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 rounded-xl bg-[var(--card)] border border-[var(--border)] text-center">
                <div className="text-6xl mb-4">{pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚"}</div>
                <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                <p className="text-4xl font-bold text-indigo-500 mb-2">{pct}%</p>
                <p className="text-[var(--muted-foreground)] mb-4">
                    You got {score} out of {questions.length} correct
                </p>
                <p className="text-sm text-[var(--muted-foreground)] mb-6">
                    {pct >= 80 ? "Excellent work! You have a strong understanding." : pct >= 50 ? "Good effort! Review the module to improve." : "Keep learning! Review the module content and try again."}
                </p>
                <button onClick={restart} className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                    Retry Quiz
                </button>
            </motion.div>
        );
    }

    return (
        <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--muted-foreground)]">
                    Question {current + 1} of {questions.length}
                </span>
                <span className="text-sm text-indigo-500 font-medium">Score: {score}/{current + (selected !== null ? 1 : 0)}</span>
            </div>

            <div className="w-full h-2 bg-[var(--secondary)] rounded-full mb-6">
                <div
                    className="h-full bg-indigo-500 rounded-full transition-all"
                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h4 className="text-lg font-semibold mb-4">{q.question}</h4>
                    <div className="space-y-3">
                        {q.options.map((opt, i) => {
                            let style = "border-[var(--border)] bg-[var(--secondary)] hover:border-indigo-500";
                            if (selected !== null) {
                                if (i === q.correct) style = "border-green-500 bg-green-500/10";
                                else if (i === selected) style = "border-red-500 bg-red-500/10";
                            }
                            return (
                                <button
                                    key={i}
                                    onClick={() => handleSelect(i)}
                                    disabled={selected !== null}
                                    className={`w-full text-left p-4 rounded-lg border transition ${style}`}
                                >
                                    <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                                    {opt}
                                </button>
                            );
                        })}
                    </div>

                    {showExplanation && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                            <p className="text-sm">
                                <span className="font-semibold">💡 Explanation:</span> {q.explanation}
                            </p>
                        </motion.div>
                    )}

                    {selected !== null && (
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleNext} className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                                {current < questions.length - 1 ? "Next Question →" : "Finish Quiz"}
                            </button>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
