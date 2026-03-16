"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        case "mindmap": return <ModuleMindmap moduleId={moduleId} />;
        case "startupMindmap": return <StartupMindmap />;
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

function ModuleMindmap({ moduleId }: { moduleId: number }) {
    // Data for all modules
    const mindmapData: Record<number, any[]> = {
        1: [
            { id: "curiosity", title: "1. Curiosity Spark", cost: "₹0", icon: "✨", narrative: "Observe daily problems. Ask 'Why does this happen?'.", roi: "High", details: "Research starts in the brain, not the lab.", successCase: "Ravi noticed a faulty BP monitor; started a 3-year journey.", failureCase: "Neha picked a 'trending' topic she hated; quit in 3 months." },
            { id: "prelim", title: "2. The 'Why' Check", cost: "₹0", icon: "🔍", narrative: "Quick Google Scholar search to see if others asked the same thing.", roi: "High", details: "Validate your curiosity before committing.", successCase: "A student found their 'idea' was already a product; pivoted early.", failureCase: "Spent weeks planning only to find the solution already existed." },
            { id: "smart", title: "3. Goal Setting", cost: "₹0", icon: "🎯", narrative: "Set specific, achievable research goals using tools like Google Calendar.", roi: "High", details: "Plan for 10 hours a week, not 50.", successCase: "Arun scheduled 2 hours daily; finished first draft in 4 weeks.", failureCase: "Sam tried 14 hours a day; burnt out by day 10." },
            { id: "tools", title: "4. Tool Selection", cost: "₹0", icon: "🛠️", narrative: "Pick your free AI stack (Perplexity, Zotero, ResearchGate).", roi: "Max", details: "Don't work harder, work smarter.", successCase: "Used Zotero from day 1; zero citation errors.", failureCase: "Manually cited 50 papers; spent 1 week fixing typos." }
        ],
        2: [
            { id: "scan", title: "1. Problem Scan", cost: "₹0", icon: "📡", narrative: "Scan news, farms, hospitals, or your own hobby for pain points.", roi: "High", details: "Look for 'frequent' and 'annoying' problems.", successCase: "Priya scanned her father's farm; found a tomato leaf disease.", failureCase: "Suresh scanned 'AI trends'; found generic topics with no data." },
            { id: "interest", title: "2. Interest Match", cost: "₹0", icon: "❤️", narrative: "Check if the problem aligns with your passion (Coding, Biology, Design).", roi: "Max", details: "Passion is the fuel for long-term research.", successCase: "Kavya matched music with AI; published a unique Raga-ML paper.", failureCase: "Picked 'Blockchain' for CV; hated it after 2 months." },
            { id: "feasible", title: "3. Feasibility", cost: "₹0", icon: "⚖️", narrative: "Check if you have the data, tools, and skills to solve it.", roi: "High", details: "Avoid 'World Hunger' scale; solve 'Local Garden' scale.", successCase: "Used free Kaggle datasets to validate her farm app idea.", failureCase: "Tried to build a quantum computer at home; failed by day 1." },
            { id: "narrow", title: "4. Narrow Down", cost: "₹0", icon: "🔬", narrative: "Convert 'AI in Health' to 'AI for Diabetes in Elderly'.", roi: "Max", details: "Specificity is the key to publishable novelty.", successCase: "Narrowed to 'Skin cancer on dark skin'; found a major research gap.", failureCase: "Stayed 'broad'; results were too generic for any journal." }
        ],
        3: [
            { id: "brainstorm", title: "1. AI Brainstorm", cost: "₹0", icon: "🧠", narrative: "Use LLMs to brainstorm directions, not to write facts.", roi: "High", details: "AI is a mirror, not a source of truth.", successCase: "Used ChatGPT to find 10 synonyms for his search query.", failureCase: "Asked AI for 'Recent Papers'; got 10 fake, halluncinated titles." },
            { id: "verify", title: "2. Fact Check", cost: "₹0", icon: "✅", narrative: "Verify every AI claim on Google Scholar or official databases.", roi: "Critical", details: "AI can hallucinate; humans must validate.", successCase: "Anita verified an AI summary; found a crucial error in the logic.", failureCase: "A PhD student cited fake AI refs; degree was revoked." },
            { id: "re-write", title: "3. Human Re-write", cost: "₹0", icon: "✍️", narrative: "Re-write AI outputs in your own voice to ensure deep understanding.", roi: "High", details: "AI text lacks 'Research Soul' and is easily detected.", successCase: "Used AI for grammar; kept logic human. Got 'Excellent' reviews.", failureCase: "Submitted AI-generated abstract; journal blacklisted him." },
            { id: "transparency", title: "4. Disclosure", cost: "₹0", icon: "📢", narrative: "Add an 'AI Usage Statement' to your paper for transparency.", roi: "Max", details: "Honesty builds trust with peer reviewers.", successCase: "Reviewers praised his clear disclosure of using AI for editing.", failureCase: "Hidden AI use was found; paper was desk-rejected instantly." }
        ],
        4: [
            { id: "keywords", title: "1. Keyword Plan", cost: "₹0", icon: "🗝️", narrative: "Create a list of primary and secondary keywords for your topic.", roi: "High", details: "Better keywords = Better results.", successCase: "Added 'Wearable' to 'Health monitor'; found relevant IoT papers.", failureCase: "Used only 'AI'; got 1 million useless results." },
            { id: "boolean", title: "2. Boolean Search", cost: "₹0", icon: "⩓", narrative: "Use AND, OR, NOT to filter the noise from databases.", roi: "Max", details: "10 minutes of logic saves 10 days of reading.", successCase: "Amit used (X AND Y NOT Z); cut results from 3000 to 47.", failureCase: "Manually scrolled 50 pages of Google; missed key papers." },
            { id: "trail", title: "3. Citation Trail", cost: "₹0", icon: "🔗", narrative: "Follow the 'Cited by' and 'References' of a great paper.", roi: "High", details: "One paper is a seed; follow the tree.", successCase: "Found one 2020 paper; followed its trail to 40 years of work.", failureCase: "Only read the first page of results; missed the seminal work." },
            { id: "freshness", title: "4. Freshness Check", cost: "₹0", icon: "📅", narrative: "Filter results to the last 3-5 years for relevance.", roi: "High", details: "Old tech is often obsolete tech in CS.", successCase: "Found a 2-month-old paper that fixed his exact bottleneck.", failureCase: "Cited 2012 papers for LLMs; reviewer laughed at the 'old' data." }
        ],
        5: [
            { id: "scan-title", title: "1. Title Scan", cost: "₹0", icon: "👀", narrative: "Quick scan of titles to remove 90% of irrelevant noise.", roi: "High", details: "Don't open the PDF yet; first check the title.", successCase: "Scanned 100 titles in 10 mins; kept only 15 relevant ones.", failureCase: "Downloaded 50 PDFs without reading titles; never opened half." },
            { id: "abstract", title: "2. Abstract Filter", cost: "₹0", icon: "📄", narrative: "Read only the abstract to see the 'Problem' and 'Result'.", roi: "High", details: "The Abstract is the 'Trailer' of the movie.", successCase: "Ria filtered her 15 papers down to 5 using deep abstract reading.", failureCase: "Tried to read full papers immediately; lost interest after 2 days." },
            { id: "method-spot", title: "3. Method Spotting", cost: "₹0", icon: "🔍", narrative: "Look at the methodology section: Is it similar to your plan?", roi: "High", details: "Find papers that solved problems like yours.", successCase: "Found a paper using 'LSTMs' for his exact dataset; huge help.", failureCase: "Picked a paper with perfect results but 'Impossible' equipment." },
            { id: "golden", title: "4. Golden Selection", cost: "₹0", icon: "⭐", narrative: "Select 1 Review + 1 Tutorial + 3 Experimental papers.", roi: "Max", details: "This 'Golden 5' is all you need to start.", successCase: "Mastered his 5 papers in a week; started his code by Friday.", failureCase: "Hoarded 150 PDFs; spent 3 months just 'categorizing' them." }
        ],
        6: [
            { id: "pass1", title: "1. Pass 1: Bird's Eye", cost: "₹0", icon: "🦅", narrative: "Title, Abstract, Figures, Headings. 5-10 minutes max.", roi: "High", details: "Decide: Is this worth my time?", successCase: "Pass 1 saved him from reading a flawed paper for 2 hours.", failureCase: "Read 20 pages of a paper only to find the result wasn't related." },
            { id: "pass2", title: "2. Pass 2: Main Body", cost: "₹0", icon: "🏃", narrative: "Read everything except the math and proofs. 30-60 minutes.", roi: "High", details: "Understand the 'What' and 'Why'.", successCase: "Pass 2 gave her the intuition needed to build her own model.", failureCase: "Stuck on page 3 math for 5 hours; never finished the paper." },
            { id: "pass3", title: "3. Pass 3: Deep Dive", cost: "₹0", icon: "🤿", narrative: "Virtually re-implement the study in your head. 1-2 hours.", roi: "Max", details: "Understand the 'How' and the 'Glitches'.", successCase: "Found a hidden flaw in a top paper during pass 3; wrote a fix.", failureCase: "Skimmed only; missed a crucial parameter that broke her code." },
            { id: "annotate", title: "4. Annotate", cost: "₹0", icon: "📝", narrative: "Use Zotero/Notion to tag and summarize in your words.", roi: "High", details: "Un-annotated reading is forgotten reading.", successCase: "Searchable notes allowed him to find a quote in 3 seconds.", failureCase: "Remembered a paper existed but couldn't find the name." }
        ],
        7: [
            { id: "compare", title: "1. Core Comparison", cost: "₹0", icon: "⚖️", narrative: "Pick 5 papers and list their methods, datasets, and scores.", roi: "High", details: "Compare what works and what doesn't.", successCase: "Noticed all 5 used the same small dataset; proposed a new one.", failureCase: "Read papers individually; never noticed they used the same flaw." },
            { id: "matrix", title: "2. Matrix Build", cost: "₹0", icon: "🧶", narrative: "Build a table. Rows = Papers, Columns = Features/Methods.", roi: "Max", details: "The gap is usually an 'Empty Box' in your matrix.", successCase: "Blank 'Privacy' column across 10 rows led to her research gap.", failureCase: "Relied on memory; forgot that paper #3 already solved his gap." },
            { id: "conflict", title: "3. Conflict Spotting", cost: "₹0", icon: "⚔️", narrative: "Find two authors who disagree. Why do they disagree?", roi: "High", details: "Intellectual debates are goldmines for research.", successCase: "Proposed a hybrid model to resolve a famous contradiction.", failureCase: "Ignored the 'Discussion' section; missed the experts' fight." },
            { id: "aha", title: "4. The 'Aha' Moment", cost: "₹0", icon: "💡", narrative: "Connect the dots: 'Method X works here, but not there... why?'.", roi: "Max", details: "This is where your unique contribution is born.", successCase: "Realized OCT images + AI wasn't done for rural clinics yet.", failureCase: "Waited for 'divine inspiration' instead of building the matrix." }
        ],
        8: [
            { id: "pain", title: "1. Identify Pain", cost: "₹0", icon: "🩹", narrative: "Who is suffering? What is broken? Why does it matter?", roi: "High", details: "A problem without a victim is not worth solving.", successCase: "Focused on 'Skin cancer diagnosis wait times in villages'.", failureCase: "Wrote: 'AI needs more efficiency' (Too vague, no pain)." },
            { id: "scope", title: "2. Scope Bound", cost: "₹0", icon: "🧱", narrative: "Define the 'Walls' of your research. What will you NOT do?", roi: "High", details: "Scope prevents your project from becoming infinite.", successCase: "Defined: 'Only for 10-18 age group using Android devices'.", failureCase: "Tried to solve 'Cybersecurity' for the whole world at once." },
            { id: "refine", title: "3. SMART Refine", cost: "₹0", icon: "📐", narrative: "Check if your statement is Specific, Measurable, and Timely.", roi: "Max", details: "A sharp statement acts as a shield against bad ideas.", successCase: "Refined to: 'Improving accuracy by 10% in low-light conds'.", failureCase: "Remained broad; advisor rejected it as 'unmeasurable'." },
            { id: "validate-stmt", title: "4. Stakeholder Check", cost: "₹0", icon: "🤝", narrative: "Show your problem statement to a mentor or user. Do they agree?", roi: "High", details: "If they don't 'get it' in 60 seconds, it's too complex.", successCase: "Showed to a doctor; they added a crucial 'usability' angle.", failureCase: "Kept it secret; built a solution for a non-existent problem." }
        ],
        9: [
            { id: "trace", title: "1. Profile Trace", cost: "₹0", icon: "👣", narrative: "Find the 5 most cited people in your bibliography. Follow them.", roi: "High", details: "Experts are people, not just names on papers.", successCase: "Followed Prof. Kumar; saw his recent call for collaborators.", failureCase: "Only read the name; never clicked the personal URL." },
            { id: "deep-dive-exp", title: "2. Their Recent Work", cost: "₹0", icon: "📑", narrative: "Read their last 2 preprints or conference papers. What's next?", roi: "High", details: "The 'Discussion' section often holds their future plans.", successCase: "Found a typo in their code; sent a fix (Best intro ever).", failureCase: "Asked them a question answered in their first page's intro." },
            { id: "reachout", title: "3. Value-Add Email", cost: "₹0", icon: "📧", narrative: "Don't ask for a favor. Offer an insight or a specific question.", roi: "Max", details: "One custom email > 1000 'Dear Sir' spams.", successCase: "Proposed a new dataset for their model; got an internship.", failureCase: "Emailed 50 profs in CC; got blacklisted as a spammer." },
            { id: "nurture", title: "4. Stay Visible", cost: "₹0", icon: "🌱", narrative: "Share their work on LinkedIn. Tag them with an intelligent comment.", roi: "High", details: "Build a bridge before you need to cross it.", successCase: "Shared their paper with a video summary; they invited him.", failureCase: "Only emailed when he needed a reference letter; ignored." }
        ],
        10: [
            { id: "skeleton", title: "1. Skeleton Draft", cost: "₹0", icon: "🦴", narrative: "Paste headings from the journal template. Add bullet points.", roi: "High", details: "An empty page is your biggest enemy. Fill it with bones.", successCase: "Built the skeleton in 1 hour; writing became a fill-in task.", failureCase: "Stared at a white screen for 1 week; got 'writer's block'." },
            { id: "math-first", title: "2. Method/Results First", cost: "₹0", icon: "📊", narrative: "Write the concrete parts first. You already know what you did.", roi: "Max", details: "Don't wait for inspiration; record the facts first.", successCase: "Wrote Methodology while code was running; saved 2 weeks.", failureCase: "Tried writing from Abstract to Conclusion; got stuck at intro." },
            { id: "polish", title: "3. Iterative Polish", cost: "₹0", icon: "💎", narrative: "First draft for content. Second for logic. Third for grammar.", roi: "High", details: "Separate 'Thinking' from 'Editing'.", successCase: "Used Grammarly/AI for the last pass only; kept logic strong.", failureCase: "Edited every sentence 10 times; never finished the page." },
            { id: "abstract-last", title: "4. Abstract LAST", cost: "₹0", icon: "🎬", narrative: "The abstract is a summary of the WHOLE paper. Write it last.", roi: "Max", details: "You can't summarize what you haven't finished.", successCase: "Abstract took 15 mins because the paper was done.", failureCase: "Wrote Abstract first; had to delete it when results changed." }
        ],
        11: [
            { id: "scope-audit", title: "1. Scope Audit", cost: "₹0", icon: "🏘️", narrative: "Does your paper fit the journal's 'Aims & Scope'?", roi: "High", details: "Scope mismatch is the #1 desk rejection reason.", successCase: "Re-read scope; pivoted from 'AI' journal to 'Agriculture' one.", failureCase: "Sent medical paper to CS journal; rejected in 24 hours." },
            { id: "metrics", title: "2. Metric Check", cost: "₹0", icon: "📉", narrative: "Check H-index and Quartiles (Q1-Q4) on Scimago.", roi: "High", details: "Choose a realistic venue for early-stage career.", successCase: "Targeted a Q2 journal as a student; got accepted in 4 months.", failureCase: "Sent first paper to Nature; 1 year wait for a 1-line rejection." },
            { id: "legit-check", title: "3. Legit Verify", cost: "₹0", icon: "⚖️", narrative: "Check Beall's List and Scopus. Is it a real journal?", roi: "Critical", details: "Predatory journals will kill your CV.", successCase: "Found a 'fake' journal just in time; withdrew submission.", failureCase: "Paid ₹50k to a fake journal; paper is now un-publishable." },
            { id: "ready", title: "4. Final Selection", cost: "₹0", icon: "🎯", narrative: "Select a 'Dream', 'Reach', and 'Safety' option.", roi: "Max", details: "Have a plan B ready before you submit plan A.", successCase: "Safety journal accepted him after Dream journal rejected.", failureCase: "Had no backup; quit research after his first rejection." }
        ],
        12: [
            { id: "template-sync", title: "1. Template Sync", cost: "₹0", icon: "📑", narrative: "Download the official LaTeX/Word template. Don't change margins.", roi: "High", details: "Non-compliance shows lack of professionalism.", successCase: "Used official Overleaf template; editors loved the layout.", failureCase: "Used custom styles; desk rejected for 'Formatting Issues'." },
            { id: "grammar-guard", title: "2. Grammar Guard", cost: "₹0", icon: "🛡️", narrative: "Use tools like Paperpal or Grammarly. No typos on page 1.", roi: "Max", details: "An error on page 1 makes editors doubt your science.", successCase: "Editor noted: 'Well-written manuscript'. Straight to review.", failureCase: "3 typos in the title; rejected in 5 minutes by the editor." },
            { id: "length", title: "3. Length Strict", cost: "₹0", icon: "📏", narrative: "Respect word and page limits. Cut the fluff.", roi: "High", details: "Extra pages cost the editor money and time.", successCase: "Cut 2 pages of generic intro; results became clearer.", failureCase: "Submitted 15 pages to 10-page limit; rejected instantly." },
            { id: "cover-letter", title: "4. Cover Letter Sale", cost: "₹0", icon: "✉️", narrative: "Explain WHY this paper matters to THIS journal's readers.", roi: "Max", details: "The cover letter is your personal pitch to the editor.", successCase: "Explained how his work solved a 2023 editorial's question.", failureCase: "Wrote: 'Please accept my paper' (Generic & lazy)." }
        ],
        13: [
            { id: "calm", title: "1. Calm Analysis", cost: "₹0", icon: "🧘", narrative: "Read the reviews. Close the tab. Wait 24 hours. Don't be angry.", roi: "High", details: "Reviewers want to help, even if they sound harsh.", successCase: "Initial anger passed; realized reviewer #2 was actually right.", failureCase: "Sent an angry reply in 1 hour; editor blacklisted him." },
            { id: "point-plan", title: "2. Response Matrix", cost: "₹0", icon: "📋", narrative: "Put every comment in a table. Plan your defense or fix.", roi: "Max", details: "Never skip a comment. Even the small ones matter.", successCase: "Addressed 47 comments point-by-point; editor was impressed.", failureCase: "Ignored the 'hard' comments; reviewer rejected again." },
            { id: "major-fix", title: "3. Real Revisions", cost: "₹0", icon: "🛠️", narrative: "Don't just change words. Re-run experiments if needed.", roi: "High", details: "Authors who do extra work get faster approval.", successCase: "Added one new comparison graph; reviewer #3 said 'Accept'.", failureCase: "Only fixed grammar; reviewer said 'Underlying flaws remain'." },
            { id: "polite", title: "4. Polite Rebuttal", cost: "₹0", icon: "🤝", narrative: "Use: 'We thank the reviewer for this insight...' even if you disagree.", roi: "Max", details: "Respectful experts get respected back.", successCase: "Politely corrected an expert's mistake; they thanked her.", failureCase: "Arrogantly said 'Reviewer doesn't understand'; desk rejected." }
        ],
        14: [
            { id: "orcid", title: "1. Research Identity", cost: "₹0", icon: "🆔", narrative: "Get an ORCID ID. Claim your profile on Scholar and ResearchGate.", roi: "High", details: "If people can't find you, they can't cite you.", successCase: "Linked his ORCID; citations from 4 platforms tracked instantly.", failureCase: "3 people had his same name; his citations went to others." },
            { id: "presence", title: "2. Digital Buzz", cost: "₹0", icon: "🌐", narrative: "Share your 'Key Finding' on LinkedIn and Twitter/X.", roi: "High", details: "Social signals often lead to formal citations.", successCase: "A LinkedIn post got 10k views; paper downloads spiked.", failureCase: "Published and went silent; 5 years later, 0 citations." },
            { id: "visual", title: "3. Graphical Abstract", cost: "₹0", icon: "🖼️", narrative: "Use Canva to make a 1-page visual summary of your paper.", roi: "Max", details: "A picture is worth 1000 citations in social media.", successCase: "Visual summary was shared by a top expert in the field.", failureCase: "Only shared the text PDF; nobody clicked the link." },
            { id: "open-code", title: "4. Open Source", cost: "₹0", icon: "🔓", narrative: "Share your code on GitHub and data on Zenodo.", roi: "Max", details: "Reproducible papers are 2x more likely to be cited.", successCase: "Other students used his script; every use = one citation.", failureCase: "Kept code 'private'; researchers skipped his paper for others." }
        ],
        15: [
            { id: "agency-align", title: "1. Agency Align", cost: "₹0", icon: "🎯", narrative: "Match your idea to the funding agency's 'Priority Areas'.", roi: "High", details: "Don't ask for health money for an agriculture project.", successCase: "Targeted DST specifically for 'Rural Women Tech' call.", failureCase: "Sent a generic tech proposal to a biodiversity fund." },
            { id: "smart-obj", title: "2. SMART Objectives", cost: "₹0", icon: "📐", narrative: "Write exactly what you will deliver: 'A prototype that does X'.", roi: "Max", details: "Agencies fund 'Outputs', not 'Hopes'.", successCase: "List of 5 clear deliverables secured the full ₹35L grant.", failureCase: "Wrote: 'We will study the effects of...' (Too vague to fund)." },
            { id: "pilot-proof", title: "3. Pilot Proof", cost: "₹0", icon: "📸", narrative: "Show photos of your lab setup or early results. Gain trust.", roi: "Max", details: "Trust is the currency of funding boards.", successCase: "Included photos of his ₹500 prototype; proved 'It works!'.", failureCase: "Had no photos or data; jury didn't believe it was feasible." },
            { id: "fin-plan", title: "4. Receipt-Level Budget", cost: "₹0", icon: "💰", narrative: "Breakdown every rupee. Justify equipment, travel, and salary.", roi: "High", details: "They need to see you won't waste the money.", successCase: "Detailed budget justification left the jury with zero doubts.", failureCase: "Asked for '₹5 Lakhs generic'; rejected for 'Financial opacity'." }
        ],
        16: [
            { id: "trl-identify", title: "1. Honest Stage", cost: "₹0", icon: "📍", narrative: "Where are you? TRL 1 (Idea) or TRL 4 (Lab Demo)?", roi: "High", details: "Lying about TRL is research fraud.", successCase: "Admitted they were TRL 3; got a 'Foundation' grant.", failureCase: "Claimed TRL 7; jury asked for demo; failed miserably." },
            { id: "trl-lab", title: "2. Lab Validation", cost: "₹0", icon: "⚗️", narrative: "TRL 4. Does it work under controlled conditions?", roi: "High", details: "The lab is the 'Safe Space' for failure.", successCase: "Found 10 bugs in the lab; fixed them for ₹0.", failureCase: "Tested first time in the field; device caught fire." },
            { id: "trl-env", title: "3. Environment Test", cost: "Low", icon: "🌍", narrative: "TRL 6. Take it outside. Real weather, real people.", roi: "High", details: "The real world is messier than the lab.", successCase: "Tested crop app in rain; learned they needed higher contrast.", failureCase: "Only tested in AC lab; app was unreadable in the sun." },
            { id: "trl-ready", title: "4. Market Ready", cost: "₹0", icon: "🏙️", narrative: "TRL 9. Fully proven. Ready for startup or licensing.", roi: "Max", details: "Once you hit TRL 9, the investors find you.", successCase: "Hit TRL 8 with 1yr field data; got 3 investor offers.", failureCase: "Launched at TRL 4; customer reviews killed the reputation." }
        ]
    };

    const steps = mindmapData[moduleId] || [];
    const [activeStep, setActiveStep] = useState<string | null>(null);

    return (
        <div className="space-y-6">
            <div className="p-5 rounded-xl bg-linear-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <h4 className="text-lg font-bold mb-2 text-indigo-500 text-center">🌟 Narrative Strategy: Step-by-Step</h4>
                <p className="text-sm text-(--muted-foreground) leading-relaxed text-center italic">
                    &quot;Success in research isn't just about intelligence—it's about following a proven procedure. 
                    Expand each step to see success stories, failure traps, and the maximum ROI strategy.&quot;
                </p>
            </div>
            
            <p className="text-xs text-(--muted-foreground) text-center mb-4 uppercase tracking-widest font-semibold">
                Interactive Journey Map
            </p>

            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500/20 via-pink-500/20 to-purple-500/20 -translate-x-1/2 hidden md:block" />

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col ${i % 2 === 0 ? "md:items-end text-right" : "md:items-start text-left"}`}
                        >
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-pink-500 z-10 hidden md:block" />

                            <button
                                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                                className={`w-full max-w-sm p-4 rounded-xl border transition-all duration-300 ${activeStep === step.id
                                    ? "bg-linear-to-br from-purple-500 to-pink-500 text-white border-transparent shadow-lg scale-105"
                                    : "bg-(--secondary) border-(--border) hover:border-pink-500"
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`text-2xl p-2 rounded-lg ${activeStep === step.id ? "bg-white/20" : "bg-white dark:bg-zinc-800 shadow-sm"}`}>
                                        {step.icon}
                                    </span>
                                    <div className="flex-1 text-left">
                                        <h4 className="font-bold text-sm">{step.title}</h4>
                                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeStep === step.id ? "bg-white/20" : "bg-pink-500/10 text-pink-500"}`}>
                                            Cost: {step.cost}
                                        </span>
                                    </div>
                                </div>
                                <p className={`text-xs line-clamp-2 ${activeStep === step.id ? "text-white/90" : "text-(--muted-foreground)"}`}>
                                    {step.narrative}
                                </p>
                            </button>

                            <AnimatePresence mode="wait">
                                {activeStep === step.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-3 w-full max-w-sm text-left overflow-hidden"
                                    >
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                                                    <h5 className="text-[9px] font-bold uppercase tracking-wider text-green-500 mb-1">Success Case</h5>
                                                    <p className="text-[10px] leading-tight">{step.successCase}</p>
                                                </div>
                                                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                                                    <h5 className="text-[9px] font-bold uppercase tracking-wider text-red-500 mb-1">Failure Case</h5>
                                                    <p className="text-[10px] leading-tight">{step.failureCase}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="text-[10px] font-bold uppercase tracking-wider text-pink-500">Maximum ROI Strategy</h5>
                                                <p className="text-xs text-(--foreground)">{step.roi}</p>
                                            </div>
                                            <div>
                                                <h5 className="text-[10px] font-bold uppercase tracking-wider text-purple-500">Pro Tip</h5>
                                                <p className="text-xs italic text-(--foreground)">{step.details}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="p-4 rounded-xl bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
                <p className="text-sm font-medium italic">
                    &quot;Your journey is unique, but the path is proven. Follow the steps, learn from failures, and maximize your impact.&quot;
                </p>
            </div>
        </div>
    );
}

function StartupMindmap() {
    const steps = [
        {
            id: "idea",
            title: "1. Problem Discovery",
            cost: "₹0",
            icon: "💡",
            narrative: "Identify a real-world problem from your research. Use Google Scholar to see if it's solved. Use Google Forms for free market validation.",
            roi: "High - Building on a real need ensures users will want it.",
            details: "Focus on 'Pain Points' rather than 'Nice to have' features.",
            successCase: "A student surveyed 200 farmers first; found they only needed SMS alerts, not an app. Result: Zero wasted code.",
            failureCase: "Team built a 'Smart Fridge' for 6 months; realized nobody wanted to pay $500 for milk alerts. Result: 6 months lost."
        },
        {
            id: "ip",
            title: "2. Zero-Cost Protection",
            cost: "₹0 - ₹1750",
            icon: "🛡️",
            narrative: "Search IPIndia for free. Draft a provisional patent yourself for ₹1,750. This protects your idea for 12 months with 'Patent Pending' status.",
            roi: "Maximum - Protects your IP while you build the prototype.",
            details: "A provisional patent gives you time to find investors without losing your rights.",
            successCase: "Team filed for ₹1750; used 'Patent Pending' status to win a ₹1 Lakh competition prize.",
            failureCase: "Inventor shared the secret on a blog; a competitor patented it first and legally banned the original inventor."
        },
        {
            id: "open-source",
            title: "3. Open-Source Prototyping",
            cost: "₹0",
            icon: "🛠️",
            narrative: "Use Python, GitHub, and Kaggle (Free GPU). Use free tiers of Vercel/Firebase for hosting. Build only what is necessary to prove the concept.",
            roi: "High - No initial investment, only your time and skills.",
            details: "Iterate fast. Fix bugs before they cost money.",
            successCase: "Used Kaggle's free GPU to build a diagnostic AI prototype in 2 weeks for ₹0.",
            failureCase: "Team spent ₹2 Lakhs on servers before testing code; servers sat idle as the project hit a logic roadblock."
        },
        {
            id: "student-perks",
            title: "4. Student Dev Perks",
            cost: "₹0",
            icon: "🎓",
            narrative: "Sign up for 'GitHub Student Developer Pack'. Get free AWS/Azure credits, free domains, and access to premium tools worth $10,000+ for free.",
            roi: "Infinite - Accessing professional infrastructure at zero cost.",
            details: "Your .edu email is your most valuable financial asset as a student founder.",
            successCase: "Used GitHub pack for free domain and $1k AWS credits; hosted the entire beta for 1 year for free.",
            failureCase: "Group used personal cards for cloud; forgot alerts and got a ₹40,000 bill for a project with zero users."
        },
        {
            id: "grants",
            title: "5. Gov & NGO Support",
            cost: "₹0",
            icon: "🏛️",
            narrative: "Register on Startup India. Apply for NIDHI-EIR or BIRAC-BIG grants. These provide monthly stipends or prototype funds of ₹5-50 Lakhs.",
            roi: "Maximum - Capital without giving away ownership (equity).",
            details: "Non-dilutive funding is the 'Holy Grail' of startup capital.",
            successCase: "Received ₹30k/month stipend from NIDHI-EIR; allowed student to focus 100% on research-startup.",
            failureCase: "Team ignored grand deadlines and docs; lost ₹25 Lakhs because they didn't have a registered entity."
        },
        {
            id: "mvp",
            title: "6. The Lean MVP",
            cost: "Low",
            icon: "🚀",
            narrative: "Build the simplest version (Minimum Viable Product). Focus on one 'Killer Feature'. Use free social media (LinkedIn/Twitter) for early buzz.",
            roi: "High - Early feedback prevents building expensive, unwanted features.",
            details: "If you aren't embarrassed by your first version, you've launched too late.",
            successCase: "Launched a simple landing page; 1000 signups proved demand before even building the product.",
            failureCase: "Built a suite with 50 features; users found it too complex and only wanted the core feature."
        },
        {
            id: "organic-marketing",
            title: "7. Zero-Cost Marketing",
            cost: "₹0",
            icon: "📢",
            narrative: "Don't buy ads. Write blog posts about your research journey. Create 'Learn in Public' videos on YouTube/Reels to build an audience organically.",
            roi: "High - Community-led growth is more stable and cheaper than paid ads.",
            details: "Content is currency. Your story is your most unique marketing asset.",
            successCase: "Posted 10 LinkedIn articles; grew to 5k followers and got 2 B2B inquiries for total ₹0 cost.",
            failureCase: "Spent ₹50k on FB ads for a technical tool; got clicks but zero sales as audience was too broad."
        },
        {
            id: "hiring",
            title: "8. Equity-Based Hiring",
            cost: "₹0",
            icon: "👥",
            narrative: "Can't pay salaries? Hire interns or co-founders for equity (ownership). Use portals like Internshala for high-quality student talent.",
            roi: "High - Aligns team success with company success without burning cash.",
            details: "A small piece of a big pie is better than 100% of nothing.",
            successCase: "Recruited 2 juniors for 5% equity; they worked harder than paid employees because they felt like owners.",
            failureCase: "Hired an expensive 'Consultant' for cash; they didn't understand the vision and quit after 2 months."
        },
        {
            id: "roi-audit",
            title: "9. Precise ROI Audit",
            cost: "₹0",
            icon: "📊",
            narrative: "Track every single rupee. Conduct an annual self-audit. Every expense must contribute to 'Customer Acquisition' or 'Product Quality'.",
            roi: "Essential - Maintains cash flow and ensures sustainable growth.",
            details: "Frugality is a competitive advantage. Spend only on what moves the needle.",
            successCase: "Cut ₹10k/month on vanity subs; used it to hire a specialist editor for their research paper.",
            failureCase: "Team bought expensive merch and premium coffee; ran out of 'runway' right before a major trade fair."
        },
        {
            id: "sales",
            title: "10. Direct B2B Sales",
            cost: "Low",
            icon: "💼",
            narrative: "Reach out to businesses directly on LinkedIn. Offer a 'Free Trial' for your research-based solution. Convert trials to paying customers.",
            roi: "Immediate - Cash flow from customers is better than cash from investors.",
            details: "B2B (Business to Business) often has higher margins and lower churn.",
            successCase: "Sent personalized videos to 20 CEOs; 2 signed up for paid pilots, funding next 6 months.",
            failureCase: "Waited for customers to 'find' them; had zero sales for 4 months because they were shy to ask."
        },
        {
            id: "scale",
            title: "11. Strategic Scaling",
            cost: "Profits",
            icon: "📈",
            narrative: "Reinvest your profits. Only scale once you have 'Unit Economics' (you make more from a customer than it costs to find them).",
            roi: "Compounding - Stable, profitable growth leads to a world-class company.",
            details: "Premature scaling is the #1 reason startups fail. Grow only when you are ready.",
            successCase: "Automated support using first profits; grew from 100 to 1k users without increasing headcount.",
            failureCase: "Hired 10 sales people before product worked; high burn rate killed the company in 3 months."
        },
        {
            id: "exit",
            title: "12. High-Value Exit",
            cost: "External",
            icon: "🏁",
            narrative: "With a stable, research-backed product, decide: Scale globally or be acquired by a tech giant. Your IP makes you a premium target.",
            roi: "Maximum - This is the ultimate financial reward for years of innovation.",
            details: "An acquisition (Exit) provides the liquidity to start your next big venture.",
            successCase: "Tech giant acquired startup for IP; founders stayed as VPs with a multi-crore exit.",
            failureCase: "Refused a good buy-out offer, wanting to be 'Next Google'; year later, new tech made their IP obsolete."
        }
    ];

    const [activeStep, setActiveStep] = useState<string | null>(null);

    return (
        <div className="space-y-6">
            <div className="p-5 rounded-xl bg-linear-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <h4 className="text-lg font-bold mb-2 text-indigo-500 text-center">🌟 The Zero-to-One Narrative</h4>
                <p className="text-sm text-(--muted-foreground) leading-relaxed text-center italic">
                    &quot;Your research is the spark. By following this lean, low-cost path, you can transform a classroom idea into a real-world startup. 
                    The secret? Use free resources, validate early, and never spend a rupee before you've proven the value.&quot;
                </p>
            </div>
            
            <p className="text-xs text-(--muted-foreground) text-center mb-4 uppercase tracking-widest font-semibold">
                Interactive Journey Map
            </p>

            <div className="relative">
                {/* Connection Line (Mobile: Vertical, Desktop: Zigzag) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500/20 via-pink-500/20 to-purple-500/20 -translate-x-1/2 hidden md:block" />

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col ${i % 2 === 0 ? "md:items-end text-right" : "md:items-start text-left"}`}
                        >
                            {/* Connector Node */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-pink-500 z-10 hidden md:block" />

                            <button
                                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                                className={`w-full max-w-sm p-4 rounded-xl border transition-all duration-300 ${activeStep === step.id
                                    ? "bg-linear-to-br from-purple-500 to-pink-500 text-white border-transparent shadow-lg scale-105"
                                    : "bg-(--secondary) border-(--border) hover:border-pink-500"
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`text-2xl p-2 rounded-lg ${activeStep === step.id ? "bg-white/20" : "bg-white dark:bg-zinc-800 shadow-sm"}`}>
                                        {step.icon}
                                    </span>
                                    <div className="flex-1 text-left">
                                        <h4 className="font-bold text-sm">{step.title}</h4>
                                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeStep === step.id ? "bg-white/20" : "bg-pink-500/10 text-pink-500"}`}>
                                            Cost: {step.cost}
                                        </span>
                                    </div>
                                </div>
                                <p className={`text-xs line-clamp-2 ${activeStep === step.id ? "text-white/90" : "text-(--muted-foreground)"}`}>
                                    {step.narrative}
                                </p>
                            </button>

                            <AnimatePresence mode="wait">
                                {activeStep === step.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-3 w-full max-w-sm text-left overflow-hidden"
                                    >
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                                                    <h5 className="text-[9px] font-bold uppercase tracking-wider text-green-500 mb-1">Success Case</h5>
                                                    <p className="text-[10px] leading-tight">{step.successCase}</p>
                                                </div>
                                                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                                                    <h5 className="text-[9px] font-bold uppercase tracking-wider text-red-500 mb-1">Failure Case</h5>
                                                    <p className="text-[10px] leading-tight">{step.failureCase}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="text-[10px] font-bold uppercase tracking-wider text-pink-500">Maximum ROI Strategy</h5>
                                                <p className="text-xs">{step.roi}</p>
                                            </div>
                                            <div>
                                                <h5 className="text-[10px] font-bold uppercase tracking-wider text-purple-500">Pro Tip</h5>
                                                <p className="text-xs italic">{step.details}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="p-4 rounded-xl bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
                <p className="text-sm font-medium">
                    🏆 <span className="text-purple-600 dark:text-purple-400">The Golden Rule:</span> Excellence in research is the best foundation for a high-ROI startup.
                </p>
            </div>
        </div>
    );
}
