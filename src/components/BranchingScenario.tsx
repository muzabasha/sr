"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScenarioNode {
  id: string;
  narrative: string;
  image: string;
  choices: { text: string; nextId: string; consequence: string; ethicsScore: number }[];
}

const scenarios: Record<string, ScenarioNode> = {
  start: {
    id: "start",
    narrative:
      "You're a 3rd-year undergraduate working on your first research paper about AI in healthcare. Your submission deadline is in 2 weeks. You've collected data and have preliminary results, but your literature review is incomplete and your writing needs work.",
    image: "📝",
    choices: [
      { text: "Use ChatGPT to write the entire literature review for you", nextId: "cheat_lit", consequence: "", ethicsScore: -2 },
      { text: "Use AI to help understand complex papers, then write the review yourself", nextId: "ethical_lit", consequence: "", ethicsScore: 3 },
      { text: "Skip the literature review and focus only on results", nextId: "skip_lit", consequence: "", ethicsScore: -1 },
    ],
  },
  cheat_lit: {
    id: "cheat_lit",
    narrative:
      "⚠️ You pasted your topic into ChatGPT and got a polished literature review. It looks great, but you notice some of the referenced papers don't seem to exist when you search for them. Your advisor asks you to present your literature review in the next meeting.",
    image: "😰",
    choices: [
      { text: "Present it anyway and hope no one checks the references", nextId: "caught", consequence: "Risky — fabricated references are easily caught", ethicsScore: -3 },
      { text: "Quickly verify and replace the fake references with real ones", nextId: "partial_fix", consequence: "Better, but the writing still isn't yours", ethicsScore: -1 },
      { text: "Admit to your advisor and start over with ethical AI use", nextId: "redemption", consequence: "Honest choice — your advisor will respect this", ethicsScore: 2 },
    ],
  },
  ethical_lit: {
    id: "ethical_lit",
    narrative:
      "✅ Great choice! You used AI to summarize and explain complex papers, then wrote the literature review in your own words with proper citations. Your advisor is impressed with your understanding. Now it's time to polish your writing.",
    image: "😊",
    choices: [
      { text: "Use Grammarly and AI for grammar/clarity improvements", nextId: "good_writing", consequence: "Smart — AI for polish is perfectly ethical", ethicsScore: 2 },
      { text: "Ask AI to rewrite your entire paper in 'academic style'", nextId: "grey_area", consequence: "Careful — this crosses into AI-generated content", ethicsScore: -1 },
      { text: "Submit as-is without any proofreading", nextId: "sloppy", consequence: "Risky — poor language can lead to desk rejection", ethicsScore: 0 },
    ],
  },
  skip_lit: {
    id: "skip_lit",
    narrative:
      "⚠️ You submitted the paper without a proper literature review. The editor desk-rejected it immediately, noting: 'The paper lacks context and fails to position itself within existing research. A thorough literature review is essential.'",
    image: "📭",
    choices: [
      { text: "Learn from this and write a proper literature review", nextId: "ethical_lit", consequence: "Good recovery — every rejection is a lesson", ethicsScore: 1 },
      { text: "Give up on research entirely", nextId: "end_bad", consequence: "Don't give up! Every researcher faces rejection", ethicsScore: -1 },
    ],
  },
  caught: {
    id: "caught",
    narrative:
      "❌ Your advisor checked the references and found that 5 out of 12 papers don't exist. They reported this to the department as academic misconduct. You now face a disciplinary hearing and potential suspension.",
    image: "😱",
    choices: [
      { text: "Accept responsibility and learn from this mistake", nextId: "end_lesson", consequence: "The hardest but most important lesson in research integrity", ethicsScore: 1 },
    ],
  },
  partial_fix: {
    id: "partial_fix",
    narrative:
      "You replaced the fake references, but during the peer review, a reviewer noted: 'The writing style in the literature review is inconsistent with the rest of the paper, suggesting possible AI-generated content.' The editor asks for clarification.",
    image: "🤔",
    choices: [
      { text: "Disclose your AI usage honestly and offer to rewrite", nextId: "redemption", consequence: "Transparency is always the best policy", ethicsScore: 2 },
      { text: "Deny using AI and hope they accept it", nextId: "end_bad", consequence: "Dishonesty compounds the problem", ethicsScore: -3 },
    ],
  },
  redemption: {
    id: "redemption",
    narrative:
      "✅ Your honesty was appreciated. Your advisor helped you understand ethical AI use and you rewrote the literature review properly. The paper took 2 extra weeks but was accepted at a reputable conference. You learned the most valuable lesson in research: integrity matters more than speed.",
    image: "🌟",
    choices: [{ text: "Complete the journey", nextId: "end_good", consequence: "", ethicsScore: 3 }],
  },
  good_writing: {
    id: "good_writing",
    narrative:
      "✅ Excellent! You used AI responsibly for grammar and clarity while keeping all ideas original. Your paper was well-received by reviewers who praised the clear writing and thorough literature review. You received a 'Minor Revision' decision!",
    image: "🎉",
    choices: [{ text: "Complete the journey", nextId: "end_good", consequence: "", ethicsScore: 3 }],
  },
  grey_area: {
    id: "grey_area",
    narrative:
      "⚠️ The AI-rewritten paper sounds impressive but doesn't reflect your voice or understanding. During the Q&A at the conference, you struggle to explain your own paper's arguments because the AI phrased things differently from how you think.",
    image: "😓",
    choices: [
      { text: "Learn to use AI only for assistance, not replacement", nextId: "end_lesson", consequence: "Important lesson: you must understand every word in your paper", ethicsScore: 1 },
    ],
  },
  sloppy: {
    id: "sloppy",
    narrative:
      "⚠️ The paper was desk-rejected due to 'poor English quality.' The editor noted multiple grammatical errors and unclear sentences. Using AI for grammar checking would have been perfectly ethical and could have prevented this.",
    image: "📭",
    choices: [
      { text: "Use AI for grammar improvement and resubmit", nextId: "good_writing", consequence: "Smart recovery — AI for polish is responsible use", ethicsScore: 1 },
    ],
  },
  end_good: {
    id: "end_good",
    narrative:
      "🏆 Congratulations! You've completed the Research Ethics Journey as a Responsible Researcher. You learned that AI is a powerful tool when used ethically — it enhances your capabilities without replacing your thinking. Your research career is off to a great start!",
    image: "🎓",
    choices: [],
  },
  end_bad: {
    id: "end_bad",
    narrative:
      "This path didn't end well, but every mistake is a learning opportunity. The key takeaway: research integrity is non-negotiable. AI tools are meant to assist, not replace your intellectual contribution. Start again and make ethical choices!",
    image: "📚",
    choices: [],
  },
  end_lesson: {
    id: "end_lesson",
    narrative:
      "📖 You've learned a valuable lesson about research ethics. Remember: transparency, honesty, and intellectual integrity are the foundations of good research. AI is a tool — use it wisely, disclose it honestly, and never let it replace your own thinking.",
    image: "💡",
    choices: [],
  },
};

export default function BranchingScenario() {
  const [currentId, setCurrentId] = useState("start");
  const [totalScore, setTotalScore] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  const node = scenarios[currentId];
  const isEnd = node.choices.length === 0;

  const handleChoice = (choice: (typeof node.choices)[0]) => {
    setTotalScore((s) => s + choice.ethicsScore);
    setHistory((h) => [...h, currentId]);
    setCurrentId(choice.nextId);
  };

  const restart = () => {
    setCurrentId("start");
    setTotalScore(0);
    setHistory([]);
  };

  const scoreLabel =
    totalScore >= 5
      ? "🏆 Ethics Champion"
      : totalScore >= 2
        ? "👍 Responsible Researcher"
        : totalScore >= 0
          ? "⚠️ Needs Improvement"
          : "❌ Ethics Violation";

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentId}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{node.image}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)]">
                Step {history.length + 1}
              </span>
            </div>
            <div className="text-right">
              <p className="text-xs text-[var(--muted-foreground)]">Ethics Score</p>
              <p
                className={`text-lg font-bold ${totalScore >= 0 ? "text-green-500" : "text-red-500"}`}
              >
                {totalScore > 0 ? "+" : ""}
                {totalScore}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6">{node.narrative}</p>

          {!isEnd ? (
            <div className="space-y-3">
              {node.choices.map((choice, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleChoice(choice)}
                  className="w-full text-left p-4 rounded-xl border border-[var(--border)] bg-[var(--secondary)] hover:border-indigo-500 transition-all"
                >
                  <p className="text-sm font-medium">
                    {String.fromCharCode(65 + i)}. {choice.text}
                  </p>
                  {choice.consequence && (
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 italic">
                      {choice.consequence}
                    </p>
                  )}
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="p-4 rounded-xl bg-[var(--secondary)]">
                <p className="text-sm text-[var(--muted-foreground)]">Final Ethics Rating</p>
                <p className="text-2xl font-bold mt-1">{scoreLabel}</p>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  Score: {totalScore} points
                </p>
              </div>
              <button
                onClick={restart}
                className="px-6 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
              >
                🔄 Play Again
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
