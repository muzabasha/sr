"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
    type: string;
    moduleId: number;
}

export default function InteractiveActivity({ type, moduleId }: Props) {
    switch (type) {
        case "selfAssessment": return <SelfAssessment />;
        case "topicGenerator": return <TopicGenerator />;
        case "ethicsSimulator": return <EthicsSimulator />;
        case "searchBuilder": return <SearchBuilder />;
        case "paperClassification": return <PaperClassification />;
        case "paperAnalysis": return <PaperAnalysis />;
        case "gapIdentification": return <GapIdentification />;
        case "problemStatementBuilder": return <ProblemStatementBuilder />;
        case "expertFinder": return <ExpertFinder />;
        case "paperDraftingTemplate": return <PaperDraftingTemplate />;
        case "venueDecisionTree": return <VenueDecisionTree />;
        case "submissionSimulator": return <SubmissionSimulator />;
        case "reviewerRoleplay": return <ReviewerRoleplay />;
        case "impactPlanner": return <ImpactPlanner />;
        case "proposalWorkshop": return <ProposalWorkshop />;
        case "trlAssessment": return <TRLAssessment />;
        case "startupReadiness": return <StartupReadiness />;
        default: return <div className="p-4 text-sm text-[var(--muted-foreground)]">Activity: {type}</div>;
    }
}

function SelfAssessment() {
    const questions = [
        { q: "What are your strongest skills?", options: ["Programming", "Writing", "Analysis", "Design", "Communication"] },
        { q: "What problems interest you most?", options: ["Healthcare", "Environment", "Education", "Security", "Automation"] },
        { q: "What excites you about technology?", options: ["AI/ML", "IoT", "Cybersecurity", "Data Science", "Robotics"] },
    ];
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResult, setShowResult] = useState(false);

    const domainMap: Record<string, string[]> = {
        "Healthcare": ["AI-powered Diagnostics", "Wearable Health Monitoring", "Telemedicine Systems"],
        "Environment": ["Climate Change Prediction", "Smart Agriculture", "Pollution Monitoring IoT"],
        "Education": ["Adaptive Learning Systems", "AI Tutoring", "Gamified Education Platforms"],
        "Security": ["Intrusion Detection Systems", "Privacy-Preserving ML", "Blockchain Security"],
        "Automation": ["Robotic Process Automation", "Smart Manufacturing", "Autonomous Systems"],
    };

    return (
        <div className="space-y-4">
            {questions.map((item, qi) => (
                <div key={qi} className="p-4 rounded-lg bg-[var(--secondary)]">
                    <p className="font-medium mb-2">{item.q}</p>
                    <div className="flex flex-wrap gap-2">
                        {item.options.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => setAnswers((a) => ({ ...a, [qi]: opt }))}
                                className={`px-3 py-1.5 rounded-lg text-sm transition ${answers[qi] === opt ? "bg-indigo-500 text-white" : "bg-[var(--card)] border border-[var(--border)] hover:border-indigo-500"
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            {Object.keys(answers).length === 3 && !showResult && (
                <button onClick={() => setShowResult(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-lg">
                    🔍 Discover My Research Domains
                </button>
            )}
            {showResult && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h4 className="font-semibold mb-2">🎯 Suggested Research Domains:</h4>
                    <ul className="space-y-1">
                        {(domainMap[answers[1]] || domainMap["Automation"]).map((d, i) => (
                            <li key={i} className="text-sm flex items-center gap-2"><span className="text-green-500">▸</span>{d}</li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
}

function TopicGenerator() {
    const [interest, setInterest] = useState("");
    const [topics, setTopics] = useState<string[]>([]);

    const topicDatabase: Record<string, string[]> = {
        health: ["AI-based Early Disease Detection using Medical Imaging", "Wearable Sensor Fusion for Patient Monitoring", "NLP for Mental Health Assessment from Social Media"],
        security: ["Deep Learning for Network Intrusion Detection", "Privacy-Preserving Federated Learning", "AI-powered Phishing Detection Systems"],
        education: ["Adaptive Learning Platforms using Reinforcement Learning", "Automated Essay Scoring with NLP", "VR-based Immersive Learning Environments"],
        agriculture: ["Drone-based Crop Health Monitoring with Computer Vision", "IoT Soil Moisture Prediction for Smart Irrigation", "Plant Disease Detection using CNN"],
        environment: ["Satellite Image Analysis for Deforestation Tracking", "Air Quality Prediction using LSTM Networks", "Smart Waste Management with IoT"],
        ai: ["Explainable AI for Critical Decision Making", "Bias Detection in Large Language Models", "Efficient Fine-tuning of Foundation Models"],
        iot: ["Edge Computing for Real-time IoT Analytics", "Smart Home Energy Optimization", "Industrial IoT Predictive Maintenance"],
        default: ["Survey of Recent Advances in Your Interest Area", "Comparative Study of ML Approaches for Your Domain", "Novel Framework for Solving Problems in Your Field"],
    };

    const generate = () => {
        const key = Object.keys(topicDatabase).find((k) => interest.toLowerCase().includes(k)) || "default";
        setTopics(topicDatabase[key]);
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="Enter your interest (e.g., healthcare, security, AI...)"
                    className="flex-1 px-4 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button onClick={generate} disabled={!interest} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm disabled:opacity-50">
                    Generate Topics
                </button>
            </div>
            {topics.length > 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                    <h4 className="font-semibold text-sm">📝 Suggested Research Topics:</h4>
                    {topics.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
                            className="p-3 rounded-lg bg-[var(--secondary)] text-sm flex items-center gap-2">
                            <span className="text-indigo-500 font-bold">{i + 1}.</span> {t}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

function EthicsSimulator() {
    const scenarios = [
        {
            scenario: "You're running out of time for your literature review. You ask ChatGPT to write the entire section for you and plan to submit it as your own work.",
            ethical: false,
            feedback: "This is plagiarism. AI can help you understand papers, but the synthesis and writing must be your own intellectual contribution."
        },
        {
            scenario: "You use Grammarly and ChatGPT to improve the grammar and clarity of a paragraph you wrote yourself.",
            ethical: true,
            feedback: "This is ethical! Using AI for grammar improvement while keeping your original ideas is a responsible use of AI tools."
        },
        {
            scenario: "You can't find enough references, so you ask AI to generate some paper titles and authors that sound relevant.",
            ethical: false,
            feedback: "This is fabrication — one of the most serious forms of research misconduct. AI often generates non-existent papers. Always verify references."
        },
        {
            scenario: "You use AI to explain a complex algorithm in a paper you're reading, then write your understanding in your own words.",
            ethical: true,
            feedback: "This is a great use of AI! Using it as a learning tool to understand concepts, then expressing your understanding in your own words."
        },
        {
            scenario: "You use AI to generate experimental data because your actual experiments didn't give good results.",
            ethical: false,
            feedback: "This is data fabrication — the most serious form of research fraud. It can lead to degree revocation and career destruction."
        },
    ];

    const [current, setCurrent] = useState(0);
    const [answer, setAnswer] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);

    const handleAnswer = (isEthical: boolean) => {
        setAnswer(isEthical);
        if (isEthical === scenarios[current].ethical) setScore((s) => s + 1);
    };

    const next = () => {
        if (current < scenarios.length - 1) {
            setCurrent((c) => c + 1);
            setAnswer(null);
        } else {
            setDone(true);
        }
    };

    if (done) {
        return (
            <div className="p-4 rounded-lg bg-[var(--secondary)] text-center">
                <div className="text-4xl mb-2">{score >= 4 ? "🏆" : "📚"}</div>
                <p className="font-semibold">Ethics Score: {score}/{scenarios.length}</p>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                    {score >= 4 ? "Excellent ethical judgment!" : "Review the AI ethics guidelines and try again."}
                </p>
                <button onClick={() => { setCurrent(0); setAnswer(null); setScore(0); setDone(false); }}
                    className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">Retry</button>
            </div>
        );
    }

    const s = scenarios[current];
    return (
        <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[var(--secondary)]">
                <p className="text-sm font-medium mb-1">Scenario {current + 1} of {scenarios.length}:</p>
                <p className="text-sm">{s.scenario}</p>
            </div>
            {answer === null ? (
                <div className="flex gap-3">
                    <button onClick={() => handleAnswer(true)} className="flex-1 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 font-medium hover:bg-green-500/20 transition">
                        ✅ Ethical
                    </button>
                    <button onClick={() => handleAnswer(false)} className="flex-1 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 font-medium hover:bg-red-500/20 transition">
                        ❌ Unethical
                    </button>
                </div>
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className={`p-3 rounded-lg text-sm ${answer === s.ethical ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
                        <p className="font-medium">{answer === s.ethical ? "✅ Correct!" : "❌ Incorrect!"}</p>
                        <p className="mt-1 text-[var(--muted-foreground)]">{s.feedback}</p>
                    </div>
                    <button onClick={next} className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
                        {current < scenarios.length - 1 ? "Next Scenario →" : "See Results"}
                    </button>
                </motion.div>
            )}
        </div>
    );
}

function SearchBuilder() {
    const [keywords, setKeywords] = useState(["", "", ""]);
    const [operator, setOperator] = useState("AND");
    const [query, setQuery] = useState("");

    const buildQuery = () => {
        const filled = keywords.filter((k) => k.trim());
        setQuery(filled.map((k) => `"${k}"`).join(` ${operator} `));
    };

    return (
        <div className="space-y-4">
            <p className="text-sm text-[var(--muted-foreground)]">Build a Boolean search query for academic databases:</p>
            <div className="space-y-2">
                {keywords.map((kw, i) => (
                    <input key={i} type="text" value={kw}
                        onChange={(e) => { const n = [...keywords]; n[i] = e.target.value; setKeywords(n); }}
                        placeholder={`Keyword ${i + 1} (e.g., ${["machine learning", "healthcare", "deep learning"][i]})`}
                        className="w-full px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                ))}
            </div>
            <div className="flex gap-2">
                {["AND", "OR", "NOT"].map((op) => (
                    <button key={op} onClick={() => setOperator(op)}
                        className={`px-3 py-1.5 rounded-lg text-sm ${operator === op ? "bg-indigo-500 text-white" : "bg-[var(--secondary)]"}`}>
                        {op}
                    </button>
                ))}
            </div>
            <button onClick={buildQuery} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">Build Query</button>
            {query && (
                <div className="p-3 rounded-lg bg-[var(--secondary)] font-mono text-sm">
                    <p className="text-[var(--muted-foreground)] text-xs mb-1">Your search query:</p>
                    <p className="text-indigo-500">{query}</p>
                </div>
            )}
        </div>
    );
}

function PaperClassification() {
    const papers = [
        { title: "A Comprehensive Survey of Deep Learning in Medical Imaging (2023)", type: "Tutorial/Survey" },
        { title: "Systematic Review of NLP Techniques for Sentiment Analysis (2024)", type: "Literature Review" },
        { title: "Novel CNN Architecture for Real-time Object Detection (2023)", type: "Experimental" },
        { title: "Transfer Learning for Small Dataset Classification (2024)", type: "Experimental" },
        { title: "Attention Mechanisms in Vision Transformers: A Tutorial (2023)", type: "Tutorial/Survey" },
    ];
    const [classifications, setClassifications] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const categories = ["Tutorial/Survey", "Literature Review", "Experimental"];

    return (
        <div className="space-y-4">
            <p className="text-sm text-[var(--muted-foreground)]">Classify each paper into the correct category:</p>
            {papers.map((p, i) => (
                <div key={i} className="p-3 rounded-lg bg-[var(--secondary)]">
                    <p className="text-sm font-medium mb-2">{p.title}</p>
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setClassifications((c) => ({ ...c, [i]: cat }))}
                                className={`px-3 py-1 rounded text-xs transition ${classifications[i] === cat
                                    ? showResults
                                        ? cat === p.type ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                        : "bg-indigo-500 text-white"
                                    : "bg-[var(--card)] border border-[var(--border)]"
                                    }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            {Object.keys(classifications).length === papers.length && !showResults && (
                <button onClick={() => setShowResults(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
                    Check Answers
                </button>
            )}
            {showResults && (
                <div className="p-3 rounded-lg bg-[var(--secondary)] text-sm">
                    Score: {papers.filter((p, i) => classifications[i] === p.type).length}/{papers.length} correct
                </div>
            )}
        </div>
    );
}

function PaperAnalysis() {
    const sections = [
        { name: "Abstract", hint: "Brief summary of the entire paper", content: "This paper proposes a novel deep learning approach for detecting diabetic retinopathy from fundus images, achieving 96.5% accuracy on the APTOS dataset." },
        { name: "Introduction", hint: "Background and motivation", content: "Diabetic retinopathy affects 463 million people worldwide. Early detection can prevent 95% of vision loss cases." },
        { name: "Methodology", hint: "How the research was conducted", content: "We used a modified EfficientNet-B4 architecture with attention mechanisms, trained on 35,000 augmented fundus images." },
        { name: "Results", hint: "Key findings", content: "Our model achieved 96.5% accuracy, 94.2% sensitivity, and 97.1% specificity, outperforming existing methods by 3.2%." },
    ];
    const [revealed, setRevealed] = useState<number[]>([]);

    return (
        <div className="space-y-3">
            <p className="text-sm text-[var(--muted-foreground)]">Click each section to analyze a sample research paper:</p>
            {sections.map((s, i) => (
                <div key={i} className="rounded-lg border border-[var(--border)] overflow-hidden">
                    <button onClick={() => setRevealed((r) => r.includes(i) ? r.filter((x) => x !== i) : [...r, i])}
                        className="w-full p-3 text-left flex justify-between items-center bg-[var(--secondary)] hover:bg-[var(--accent)] transition">
                        <span className="font-medium text-sm">{s.name}</span>
                        <span className="text-xs text-[var(--muted-foreground)]">{s.hint}</span>
                    </button>
                    {revealed.includes(i) && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="p-3 text-sm bg-[var(--card)]">
                            {s.content}
                        </motion.div>
                    )}
                </div>
            ))}
        </div>
    );
}

function GapIdentification() {
    const [selectedGaps, setSelectedGaps] = useState<string[]>([]);
    const gaps = [
        { text: "All papers use single-modality data", isGap: true },
        { text: "Papers have high accuracy", isGap: false },
        { text: "No paper tests on diverse populations", isGap: true },
        { text: "Methods are computationally expensive", isGap: true },
        { text: "Papers are well-written", isGap: false },
        { text: "Limited real-world deployment testing", isGap: true },
    ];
    const [showResult, setShowResult] = useState(false);

    return (
        <div className="space-y-4">
            <p className="text-sm text-[var(--muted-foreground)]">Select the items that represent genuine research gaps:</p>
            <div className="space-y-2">
                {gaps.map((g, i) => (
                    <button key={i}
                        onClick={() => setSelectedGaps((s) => s.includes(g.text) ? s.filter((x) => x !== g.text) : [...s, g.text])}
                        className={`w-full text-left p-3 rounded-lg text-sm transition border ${selectedGaps.includes(g.text)
                            ? showResult
                                ? g.isGap ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"
                                : "border-indigo-500 bg-indigo-500/10"
                            : "border-[var(--border)] bg-[var(--secondary)]"
                            }`}>
                        {g.text}
                    </button>
                ))}
            </div>
            {!showResult && (
                <button onClick={() => setShowResult(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
                    Check My Answers
                </button>
            )}
            {showResult && (
                <div className="p-3 rounded-lg bg-[var(--secondary)] text-sm">
                    {selectedGaps.filter((s) => gaps.find((g) => g.text === s)?.isGap).length} of {gaps.filter((g) => g.isGap).length} gaps correctly identified!
                </div>
            )}
        </div>
    );
}

function ProblemStatementBuilder() {
    const [context, setContext] = useState("");
    const [limitation, setLimitation] = useState("");
    const [objective, setObjective] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {
        if (context && limitation && objective) {
            setGenerated(`${context} ${limitation} This research proposes ${objective}.`);
        }
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-medium block mb-1">1. Problem Context (What is the broader area?)</label>
                <textarea value={context} onChange={(e) => setContext(e.target.value)}
                    placeholder="e.g., Existing fall detection systems for elderly patients..."
                    className="w-full px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm resize-none h-20 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
                <label className="text-sm font-medium block mb-1">2. Limitation (What&apos;s wrong with current solutions?)</label>
                <textarea value={limitation} onChange={(e) => setLimitation(e.target.value)}
                    placeholder="e.g., have low accuracy in hypertensive patients due to limited physiological data integration."
                    className="w-full px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm resize-none h-20 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
                <label className="text-sm font-medium block mb-1">3. Research Objective (What will you do?)</label>
                <textarea value={objective} onChange={(e) => setObjective(e.target.value)}
                    placeholder="e.g., a multi-sensor fusion approach to improve detection accuracy."
                    className="w-full px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm resize-none h-20 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button onClick={generate} disabled={!context || !limitation || !objective}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm disabled:opacity-50">
                Generate Problem Statement
            </button>
            {generated && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="text-sm font-medium mb-1">Your Problem Statement:</p>
                    <p className="text-sm italic">&ldquo;{generated}&rdquo;</p>
                </motion.div>
            )}
        </div>
    );
}

function ExpertFinder() {
    const [domain, setDomain] = useState("");
    const [results, setResults] = useState<{ name: string; affiliation: string; hIndex: number; focus: string }[]>([]);

    const expertDB: Record<string, { name: string; affiliation: string; hIndex: number; focus: string }[]> = {
        ai: [
            { name: "Dr. A. Research Scholar", affiliation: "IIT Delhi", hIndex: 45, focus: "Deep Learning, NLP" },
            { name: "Prof. B. Data Scientist", affiliation: "IISc Bangalore", hIndex: 52, focus: "Computer Vision" },
            { name: "Dr. C. ML Expert", affiliation: "IIIT Hyderabad", hIndex: 38, focus: "Reinforcement Learning" },
        ],
        health: [
            { name: "Dr. D. Health Informatics", affiliation: "AIIMS Delhi", hIndex: 40, focus: "Medical Imaging AI" },
            { name: "Prof. E. Biomedical", affiliation: "IIT Bombay", hIndex: 35, focus: "Wearable Sensors" },
        ],
        security: [
            { name: "Dr. F. Cyber Expert", affiliation: "IIT Kanpur", hIndex: 42, focus: "Network Security" },
            { name: "Prof. G. Privacy Researcher", affiliation: "IISc Bangalore", hIndex: 37, focus: "Privacy-Preserving ML" },
        ],
        default: [
            { name: "Search on Google Scholar", affiliation: "scholar.google.com", hIndex: 0, focus: "Enter your specific domain" },
            { name: "Search on ResearchGate", affiliation: "researchgate.net", hIndex: 0, focus: "Follow top researchers" },
        ],
    };

    const search = () => {
        const key = Object.keys(expertDB).find((k) => domain.toLowerCase().includes(k)) || "default";
        setResults(expertDB[key]);
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter research domain (e.g., AI, healthcare, security...)"
                    className="flex-1 px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button onClick={search} disabled={!domain} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm disabled:opacity-50">
                    Find Experts
                </button>
            </div>
            {results.length > 0 && (
                <div className="space-y-2">
                    {results.map((r, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                            className="p-3 rounded-lg bg-[var(--secondary)] flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">{r.name}</p>
                                <p className="text-xs text-[var(--muted-foreground)]">{r.affiliation} • {r.focus}</p>
                            </div>
                            {r.hIndex > 0 && <span className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-500">h-index: {r.hIndex}</span>}
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}

function PaperDraftingTemplate() {
    const sections = [
        { name: "Abstract", placeholder: "Summarize your research in 150-250 words..." },
        { name: "Introduction", placeholder: "Background, motivation, and objectives..." },
        { name: "Methodology", placeholder: "Describe your approach, tools, and parameters..." },
        { name: "Expected Results", placeholder: "What results do you anticipate?" },
    ];
    const [drafts, setDrafts] = useState<Record<string, string>>({});
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className="space-y-4">
            <div className="flex gap-2 overflow-x-auto">
                {sections.map((s, i) => (
                    <button key={i} onClick={() => setActiveSection(i)}
                        className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${activeSection === i ? "bg-indigo-500 text-white" : "bg-[var(--secondary)]"}`}>
                        {s.name} {drafts[s.name] ? "✓" : ""}
                    </button>
                ))}
            </div>
            <div>
                <label className="text-sm font-medium block mb-1">{sections[activeSection].name}</label>
                <textarea
                    value={drafts[sections[activeSection].name] || ""}
                    onChange={(e) => setDrafts((d) => ({ ...d, [sections[activeSection].name]: e.target.value }))}
                    placeholder={sections[activeSection].placeholder}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm resize-none h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <p className="text-xs text-[var(--muted-foreground)]">
                {Object.values(drafts).filter(Boolean).length} of {sections.length} sections drafted
            </p>
        </div>
    );
}

function VenueDecisionTree() {
    const [step, setStep] = useState(0);
    const [result, setResult] = useState("");

    const questions = [
        { q: "Is your research complete with full experiments?", yes: 1, no: 2 },
        { q: "Is it a significant, novel contribution?", yes: 3, no: 4 },
        { q: "Do you have preliminary results?", yes: 4, no: 5 },
        { q: "Result: Submit to a SCI/Scopus Journal", yes: -1, no: -1 },
        { q: "Result: Submit to a Conference", yes: -1, no: -1 },
        { q: "Result: Present as a Poster or Workshop Paper", yes: -1, no: -1 },
    ];

    const handleAnswer = (isYes: boolean) => {
        const next = isYes ? questions[step].yes : questions[step].no;
        if (questions[next].q.startsWith("Result:")) {
            setResult(questions[next].q.replace("Result: ", ""));
        } else {
            setStep(next);
        }
    };

    if (result) {
        return (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                <p className="text-lg font-semibold mb-2">🎯 Recommended Venue:</p>
                <p className="text-indigo-500 font-medium">{result}</p>
                <button onClick={() => { setStep(0); setResult(""); }} className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 rounded-lg bg-[var(--secondary)]">
            <p className="font-medium mb-4">{questions[step].q}</p>
            <div className="flex gap-3">
                <button onClick={() => handleAnswer(true)} className="flex-1 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 hover:bg-green-500/20">Yes</button>
                <button onClick={() => handleAnswer(false)} className="flex-1 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 hover:bg-red-500/20">No</button>
            </div>
        </div>
    );
}

function SubmissionSimulator() {
    const checks = [
        { label: "Paper matches journal scope", id: "scope" },
        { label: "Follows journal formatting template", id: "format" },
        { label: "English is clear and professional", id: "english" },
        { label: "Novel contribution clearly stated", id: "novelty" },
        { label: "All references are verified and recent", id: "refs" },
        { label: "Cover letter included", id: "cover" },
    ];
    const [checked, setChecked] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const toggle = (id: string) => setChecked((c) => c.includes(id) ? c.filter((x) => x !== id) : [...c, id]);

    const score = checked.length;
    const decision = score >= 6 ? "Sent for Peer Review ✅" : score >= 4 ? "Minor Issues — Editor May Request Changes" : "Desk Rejected ❌";

    return (
        <div className="space-y-4">
            <p className="text-sm text-[var(--muted-foreground)]">Check all items before submitting:</p>
            {checks.map((c) => (
                <label key={c.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--secondary)] cursor-pointer">
                    <input type="checkbox" checked={checked.includes(c.id)} onChange={() => toggle(c.id)}
                        className="w-4 h-4 rounded border-[var(--border)] text-indigo-500 focus:ring-indigo-500" />
                    <span className="text-sm">{c.label}</span>
                </label>
            ))}
            {!submitted ? (
                <button onClick={() => setSubmitted(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
                    Submit Paper
                </button>
            ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-lg text-center ${score >= 5 ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
                    <p className="font-semibold">Editor Decision: {decision}</p>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">{score}/6 checks passed</p>
                    <button onClick={() => { setSubmitted(false); setChecked([]); }} className="mt-2 text-sm text-indigo-500">Try Again</button>
                </motion.div>
            )}
        </div>
    );
}

function ReviewerRoleplay() {
    const comments = [
        {
            reviewer: "The methodology section lacks detail on hyperparameter selection. How were these values chosen?",
            goodResponse: "Thank you for this observation. We have added a detailed hyperparameter tuning section (Section 4.2) describing our grid search approach over learning rates [0.001, 0.01, 0.1], batch sizes [16, 32, 64], and epochs [50, 100, 200]. Table 3 now shows the results of this ablation study.",
            badResponse: "We used standard hyperparameters that everyone uses. This is common practice."
        },
        {
            reviewer: "The comparison with baseline methods is insufficient. Please include comparisons with at least 3 recent state-of-the-art methods.",
            goodResponse: "We appreciate this suggestion. We have now included comparisons with three additional SOTA methods: Method A (2023), Method B (2024), and Method C (2024). Results are presented in the updated Table 5, showing our approach outperforms all baselines by 2-5%.",
            badResponse: "We compared with enough methods already. Adding more would make the paper too long."
        },
    ];
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="space-y-4">
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <p className="text-sm font-medium mb-1">Reviewer Comment:</p>
                <p className="text-sm italic">&ldquo;{comments[current].reviewer}&rdquo;</p>
            </div>
            {selected === null ? (
                <div className="space-y-2">
                    <p className="text-sm font-medium">Which response is better?</p>
                    <button onClick={() => setSelected("good")} className="w-full text-left p-3 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm hover:border-indigo-500">
                        A: {comments[current].goodResponse.substring(0, 100)}...
                    </button>
                    <button onClick={() => setSelected("bad")} className="w-full text-left p-3 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm hover:border-indigo-500">
                        B: {comments[current].badResponse}
                    </button>
                </div>
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className={`p-3 rounded-lg text-sm ${selected === "good" ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
                        <p className="font-medium">{selected === "good" ? "✅ Correct!" : "❌ Not the best choice."}</p>
                        <p className="mt-1 text-[var(--muted-foreground)]">
                            The professional response addresses the comment specifically, describes exact changes made, and provides evidence.
                        </p>
                    </div>
                    {current < comments.length - 1 && (
                        <button onClick={() => { setCurrent((c) => c + 1); setSelected(null); }}
                            className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">Next Comment →</button>
                    )}
                </motion.div>
            )}
        </div>
    );
}

function ImpactPlanner() {
    const strategies = [
        { id: "conference", label: "Present at conferences", impact: 3 },
        { id: "researchgate", label: "Share on ResearchGate", impact: 2 },
        { id: "blog", label: "Write a blog post", impact: 2 },
        { id: "video", label: "Create video abstract", impact: 3 },
        { id: "opensource", label: "Open-source code/data", impact: 4 },
        { id: "collaborate", label: "International collaboration", impact: 4 },
        { id: "social", label: "Share on LinkedIn/Twitter", impact: 1 },
        { id: "workshop", label: "Conduct a workshop", impact: 3 },
    ];
    const [selected, setSelected] = useState<string[]>([]);
    const totalImpact = strategies.filter((s) => selected.includes(s.id)).reduce((a, b) => a + b.impact, 0);

    return (
        <div className="space-y-4">
            <p className="text-sm text-[var(--muted-foreground)]">Select strategies to build your visibility plan:</p>
            <div className="grid grid-cols-2 gap-2">
                {strategies.map((s) => (
                    <button key={s.id}
                        onClick={() => setSelected((sel) => sel.includes(s.id) ? sel.filter((x) => x !== s.id) : [...sel, s.id])}
                        className={`p-3 rounded-lg text-sm text-left transition border ${selected.includes(s.id) ? "border-indigo-500 bg-indigo-500/10" : "border-[var(--border)] bg-[var(--secondary)]"
                            }`}>
                        <span>{s.label}</span>
                        <span className="block text-xs text-[var(--muted-foreground)] mt-1">Impact: {"⭐".repeat(s.impact)}</span>
                    </button>
                ))}
            </div>
            <div className="p-3 rounded-lg bg-[var(--secondary)] text-sm">
                <p>Selected: {selected.length} strategies | Estimated Impact Score: {totalImpact}/22</p>
                <div className="w-full h-2 bg-[var(--card)] rounded-full mt-2">
                    <div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${(totalImpact / 22) * 100}%` }} />
                </div>
            </div>
        </div>
    );
}

function ProposalWorkshop() {
    const [title, setTitle] = useState("");
    const [objectives, setObjectives] = useState("");
    const [methodology, setMethodology] = useState("");
    const [showPreview, setShowPreview] = useState(false);

    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-medium block mb-1">Project Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., AI-based Early Detection of Crop Diseases using Drone Imagery"
                    className="w-full px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
                <label className="text-sm font-medium block mb-1">Research Objectives (SMART)</label>
                <textarea value={objectives} onChange={(e) => setObjectives(e.target.value)}
                    placeholder="List 3-4 specific, measurable objectives..."
                    className="w-full px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
                <label className="text-sm font-medium block mb-1">Proposed Methodology</label>
                <textarea value={methodology} onChange={(e) => setMethodology(e.target.value)}
                    placeholder="Describe your research approach..."
                    className="w-full px-3 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button onClick={() => setShowPreview(true)} disabled={!title || !objectives || !methodology}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm disabled:opacity-50">
                Preview Proposal Summary
            </button>
            {showPreview && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-lg bg-[var(--secondary)] border border-[var(--border)]">
                    <h4 className="font-bold text-sm mb-2">📄 Proposal Summary</h4>
                    <p className="text-sm"><span className="font-medium">Title:</span> {title}</p>
                    <p className="text-sm mt-2"><span className="font-medium">Objectives:</span> {objectives}</p>
                    <p className="text-sm mt-2"><span className="font-medium">Methodology:</span> {methodology}</p>
                </motion.div>
            )}
        </div>
    );
}

function TRLAssessment() {
    const levels = [
        { trl: 1, desc: "Basic principles observed — just an idea", question: "Do you have a research idea or hypothesis?" },
        { trl: 3, desc: "Proof of concept — initial experiments done", question: "Have you conducted initial experiments or simulations?" },
        { trl: 5, desc: "Validated in relevant environment", question: "Has your solution been tested with real-world data?" },
        { trl: 7, desc: "System prototype demonstrated", question: "Do you have a working prototype?" },
        { trl: 9, desc: "Market-ready product", question: "Is your solution deployed and used by real users?" },
    ];
    const [answers, setAnswers] = useState<Record<number, boolean>>({});
    const [showResult, setShowResult] = useState(false);

    const currentTRL = () => {
        let trl = 1;
        for (const level of levels) {
            if (answers[level.trl]) trl = level.trl;
            else break;
        }
        return trl;
    };

    return (
        <div className="space-y-4">
            <p className="text-sm text-[var(--muted-foreground)]">Answer these questions to assess your TRL:</p>
            {levels.map((l) => (
                <div key={l.trl} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--secondary)]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {l.trl}
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium">{l.question}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">{l.desc}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setAnswers((a) => ({ ...a, [l.trl]: true }))}
                            className={`px-2 py-1 rounded text-xs ${answers[l.trl] === true ? "bg-green-500 text-white" : "bg-[var(--card)] border border-[var(--border)]"}`}>Yes</button>
                        <button onClick={() => setAnswers((a) => ({ ...a, [l.trl]: false }))}
                            className={`px-2 py-1 rounded text-xs ${answers[l.trl] === false ? "bg-red-500 text-white" : "bg-[var(--card)] border border-[var(--border)]"}`}>No</button>
                    </div>
                </div>
            ))}
            {Object.keys(answers).length >= 3 && !showResult && (
                <button onClick={() => setShowResult(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
                    Assess My TRL
                </button>
            )}
            {showResult && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-center">
                    <p className="text-2xl font-bold text-indigo-500">TRL {currentTRL()}</p>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">
                        {currentTRL() <= 3 ? "Early research stage — focus on proof of concept" :
                            currentTRL() <= 6 ? "Validation stage — test in real environments" :
                                "Advanced stage — ready for deployment or commercialization"}
                    </p>
                </motion.div>
            )}
        </div>
    );
}

function StartupReadiness() {
    const criteria = [
        { id: "problem", label: "Clear problem with market need identified" },
        { id: "solution", label: "Working prototype or MVP exists" },
        { id: "ip", label: "Intellectual property protected (patent filed)" },
        { id: "team", label: "Team with complementary skills formed" },
        { id: "validation", label: "Solution validated with potential users" },
        { id: "business", label: "Basic business model defined" },
        { id: "funding", label: "Funding strategy identified" },
        { id: "mentor", label: "Connected with mentors/incubator" },
    ];
    const [checked, setChecked] = useState<string[]>([]);
    const score = checked.length;
    const readiness = score >= 7 ? "🚀 Ready to Launch!" : score >= 5 ? "🔧 Almost There — Fill the Gaps" : score >= 3 ? "📋 Good Start — More Preparation Needed" : "💡 Idea Stage — Build Your Foundation";

    return (
        <div className="space-y-4">
            <p className="text-sm text-[var(--muted-foreground)]">Check all criteria that apply to your research:</p>
            {criteria.map((c) => (
                <label key={c.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--secondary)] cursor-pointer">
                    <input type="checkbox" checked={checked.includes(c.id)}
                        onChange={() => setChecked((ch) => ch.includes(c.id) ? ch.filter((x) => x !== c.id) : [...ch, c.id])}
                        className="w-4 h-4 rounded border-[var(--border)] text-indigo-500 focus:ring-indigo-500" />
                    <span className="text-sm">{c.label}</span>
                </label>
            ))}
            <div className="p-4 rounded-lg bg-[var(--secondary)] text-center">
                <p className="text-lg font-semibold">{readiness}</p>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">{score}/8 criteria met</p>
                <div className="w-full h-3 bg-[var(--card)] rounded-full mt-2">
                    <div className={`h-full rounded-full transition-all ${score >= 7 ? "bg-green-500" : score >= 4 ? "bg-yellow-500" : "bg-red-500"}`}
                        style={{ width: `${(score / 8) * 100}%` }} />
                </div>
            </div>
        </div>
    );
}
