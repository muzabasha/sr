"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const knowledgeBase: Record<string, string> = {
    "research gap": "A research gap is an area where existing studies are insufficient. Types include: Knowledge Gap (topic not studied), Methodological Gap (better methods possible), Population Gap (not tested on specific groups), Data Gap (insufficient data), and Theoretical Gap (theories don't explain findings). Use a comparison matrix to systematically identify gaps across papers.",
    "problem statement": "A strong problem statement has 3 parts: (1) Problem Context — the broader area, (2) Limitation — what's wrong with current solutions, (3) Research Objective — what you'll do about it. Example: 'Existing fall detection systems have low accuracy in hypertensive patients due to limited physiological data integration. This research proposes a multi-sensor fusion approach.'",
    "literature review": "For an effective literature review: Use the Golden 5-Paper Strategy — select 1 tutorial/survey paper, 1 recent SCI literature review, and 3 experimental papers. Use the 3-pass reading strategy: Pass 1 (5-10 min) — title, abstract, headings; Pass 2 (30-60 min) — intro, results, conclusion; Pass 3 (2-4 hrs) — full paper with methodology.",
    "citation": "Use citation networks to trace research evolution. Forward citations show who cited a paper (newer work). Backward citations show what a paper cited (foundational work). Co-citations reveal related papers. Follow author networks to find prolific researchers. Use Google Scholar, Scopus, IEEE Xplore, and PubMed.",
    "ethics": "Ethical AI use in research: ✅ Use AI for grammar improvement, understanding concepts, code debugging, data visualization. ❌ Never generate fake references, copy AI text directly, submit AI-generated papers as original, fabricate data, or hide AI usage. Always disclose AI tool usage in your methodology section.",
    "journal": "Choose journals by checking: Impact Factor (JCR), SCI/SCIE/Scopus indexing, acceptance rate (very low <10% or very high >80% are red flags). Avoid predatory journals — signs include guaranteed acceptance, no peer review, and high fees. Use Beall's List and DOAJ to verify legitimacy.",
    "reviewer": "When responding to reviewers: Be respectful and thankful. Address EVERY comment point-by-point. Show exactly what changed with page/line numbers. If you disagree, provide evidence-based justification. Highlight changes in the revised manuscript. Never respond emotionally.",
    "trl": "Technology Readiness Levels: TRL 1 (idea) → TRL 3 (proof of concept) → TRL 5 (validated in relevant environment) → TRL 7 (system prototype) → TRL 9 (market-ready product). Most academic papers are TRL 3-4. Patents and prototypes are TRL 5-7.",
    "proposal": "Research proposal sections: Title, Objectives (SMART), Literature Review, Methodology, Budget with justification, Timeline (Gantt chart), Risk Analysis, Collaborators, Expected Outcomes. Major Indian funding agencies: DST-SERB, CSIR, DBT, AICTE, UGC.",
    "startup": "Research-to-startup pipeline: Idea Validation → Prototype → Patent → Incubation → Funding → MVP → Scale. Indian support: IIT/IIM incubators, DST-NIDHI seed funding (₹10-25L), Indian Angel Network, Startup India benefits, T-Hub/NASSCOM accelerators.",
    "plagiarism": "Plagiarism includes: copying text without citation, paraphrasing without credit, self-plagiarism (reusing your own published work), and fabricating references. Use tools like Turnitin, iThenticate to check. Always cite sources and write in your own words after understanding the content.",
    "abstract": "Write the abstract LAST. It should contain: Problem/Background (1-2 sentences), Method (2-3 sentences), Key Results (1-2 sentences), and Impact/Conclusion (1 sentence). Keep it 150-250 words. It's the most-read part of your paper — make it count.",
    "default": "I can help with: research gaps, problem statements, literature reviews, citations, AI ethics in research, journal selection, reviewer responses, TRL levels, research proposals, startup conversion, plagiarism avoidance, and abstract writing. What would you like to know more about?"
};

function getResponse(input: string): string {
    const lower = input.toLowerCase();
    for (const [key, value] of Object.entries(knowledgeBase)) {
        if (key !== "default" && lower.includes(key)) return value;
    }
    if (lower.includes("gap")) return knowledgeBase["research gap"];
    if (lower.includes("paper") && lower.includes("write")) return knowledgeBase["abstract"];
    if (lower.includes("search") || lower.includes("find paper")) return knowledgeBase["citation"];
    if (lower.includes("ethic") || lower.includes("ai use")) return knowledgeBase["ethics"];
    if (lower.includes("publish") || lower.includes("journal") || lower.includes("where")) return knowledgeBase["journal"];
    if (lower.includes("review") || lower.includes("comment") || lower.includes("revision")) return knowledgeBase["reviewer"];
    if (lower.includes("fund") || lower.includes("grant") || lower.includes("proposal")) return knowledgeBase["proposal"];
    if (lower.includes("startup") || lower.includes("commerc") || lower.includes("patent")) return knowledgeBase["startup"];
    if (lower.includes("copy") || lower.includes("plagiar")) return knowledgeBase["plagiarism"];
    if (lower.includes("level") || lower.includes("trl") || lower.includes("readiness")) return knowledgeBase["trl"];
    if (lower.includes("statement") || lower.includes("problem")) return knowledgeBase["problem statement"];
    if (lower.includes("literature") || lower.includes("survey") || lower.includes("read")) return knowledgeBase["literature review"];
    return knowledgeBase["default"];
}

export default function ResearchCopilot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm your Research Copilot 🧭. Ask me anything about research methodology, AI ethics, paper writing, or publication strategies." }
    ]);
    const [input, setInput] = useState("");
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

    const send = () => {
        if (!input.trim()) return;
        const userMsg: Message = { role: "user", content: input };
        const response = getResponse(input);
        setMessages((m) => [...m, userMsg, { role: "assistant", content: response }]);
        setInput("");
    };

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center text-2xl"
            >
                {open ? "✕" : "🤖"}
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xl flex flex-col overflow-hidden"
                    >
                        <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                            <h3 className="font-bold">🧭 Research Copilot</h3>
                            <p className="text-xs opacity-80">Your AI research methodology assistant</p>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${msg.role === "user"
                                            ? "bg-indigo-500 text-white rounded-br-sm"
                                            : "bg-[var(--secondary)] rounded-bl-sm"
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={endRef} />
                        </div>

                        <div className="p-3 border-t border-[var(--border)]">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && send()}
                                    placeholder="Ask about research..."
                                    className="flex-1 px-3 py-2 rounded-lg bg-[var(--secondary)] text-sm border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button onClick={send} className="px-3 py-2 bg-indigo-500 text-white rounded-lg text-sm">
                                    Send
                                </button>
                            </div>
                            <div className="flex gap-1 mt-2 flex-wrap">
                                {["Research gap", "Ethics", "Journal selection", "Problem statement"].map((q) => (
                                    <button key={q} onClick={() => { setInput(q); }}
                                        className="px-2 py-0.5 text-[10px] rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]">
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
