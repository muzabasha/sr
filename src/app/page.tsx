"use client";
import { useState, useEffect } from "react";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import ModuleView from "@/components/ModuleView";
import JourneyMap from "@/components/JourneyMap";
import BadgesPage from "@/components/BadgesPage";
import BranchingScenario from "@/components/BranchingScenario";
import ResearchCopilot from "@/components/ResearchCopilot";

type View = "home" | "module" | "journey" | "badges" | "scenario";

function AppContent() {
  const [view, setView] = useState<View>("home");
  const [moduleId, setModuleId] = useState(1);

  const navigate = (v: string, id?: number) => {
    setView(v as View);
    if (id) setModuleId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate("home");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header onNavigate={navigate} />
      <main>
        {view === "home" && <HomePage onNavigate={navigate} />}
        {view === "module" && (
          <ModuleView moduleId={moduleId} onNavigate={navigate} />
        )}
        {view === "journey" && <JourneyMap onNavigate={navigate} />}
        {view === "badges" && <BadgesPage />}
        {view === "scenario" && (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">🎭 Ethics Decision Scenario</h2>
              <p className="text-[var(--muted-foreground)]">
                Navigate real-world research ethics dilemmas and see the consequences of your choices
              </p>
            </div>
            <BranchingScenario />
          </div>
        )}
      </main>
      <ResearchCopilot />
      <footer className="border-t border-[var(--border)] py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-[var(--muted-foreground)]">
          <p>🧭 Research Compass: Ethical AI for Research Excellence</p>
          <p className="mt-1">
            Aligned with NEP 2020 Experiential Learning Standards • Designed for Undergraduate Researchers
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function Page() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
