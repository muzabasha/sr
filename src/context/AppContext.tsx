"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Progress {
    completedModules: number[];
    quizScores: Record<number, number>;
    badges: string[];
    bookmarks: number[];
}

interface AppState {
    theme: "light" | "dark";
    toggleTheme: () => void;
    presentationMode: boolean;
    togglePresentationMode: () => void;
    progress: Progress;
    completeModule: (id: number) => void;
    saveQuizScore: (moduleId: number, score: number) => void;
    addBadge: (badge: string) => void;
    toggleBookmark: (moduleId: number) => void;
    searchQuery: string;
    setSearchQuery: (q: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [presentationMode, setPresentationMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [progress, setProgress] = useState<Progress>({
        completedModules: [],
        quizScores: {},
        badges: [],
        bookmarks: [],
    });

    useEffect(() => {
        const saved = localStorage.getItem("rc-progress");
        if (saved) setProgress(JSON.parse(saved));
        const savedTheme = localStorage.getItem("rc-theme") as "light" | "dark";
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("rc-progress", JSON.stringify(progress));
    }, [progress]);

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        localStorage.setItem("rc-theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    const togglePresentationMode = () => setPresentationMode((p) => !p);

    const completeModule = (id: number) => {
        setProgress((p) => ({
            ...p,
            completedModules: p.completedModules.includes(id)
                ? p.completedModules
                : [...p.completedModules, id],
        }));
    };

    const saveQuizScore = (moduleId: number, score: number) => {
        setProgress((p) => ({ ...p, quizScores: { ...p.quizScores, [moduleId]: score } }));
    };

    const addBadge = (badge: string) => {
        setProgress((p) => ({
            ...p,
            badges: p.badges.includes(badge) ? p.badges : [...p.badges, badge],
        }));
    };

    const toggleBookmark = (moduleId: number) => {
        setProgress((p) => ({
            ...p,
            bookmarks: p.bookmarks.includes(moduleId)
                ? p.bookmarks.filter((b) => b !== moduleId)
                : [...p.bookmarks, moduleId],
        }));
    };

    return (
        <AppContext.Provider
            value={{
                theme, toggleTheme, presentationMode, togglePresentationMode,
                progress, completeModule, saveQuizScore, addBadge, toggleBookmark,
                searchQuery, setSearchQuery,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useApp = () => {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error("useApp must be used within AppProvider");
    return ctx;
};
