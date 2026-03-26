"use client";
import { motion } from "framer-motion";
import { modules } from "@/data/modules";
import { useApp } from "@/context/AppContext";

export default function JourneyMap({ onNavigate }: { onNavigate: (view: string, moduleId?: number) => void }) {
    const { progress, presentationMode } = useApp();

    const phases = [
        { name: "Foundation", range: [1, 3], color: "from-purple-500 to-indigo-500", shadow: "shadow-purple-500/20" },
        { name: "Discovery", range: [4, 7], color: "from-blue-500 to-cyan-500", shadow: "shadow-blue-500/20" },
        { name: "Creation", range: [8, 11], color: "from-orange-500 to-red-500", shadow: "shadow-orange-500/20" },
        { name: "Publication", range: [12, 14], color: "from-green-500 to-emerald-500", shadow: "shadow-green-500/20" },
        { name: "Impact", range: [15, 17], color: "from-pink-500 to-purple-500", shadow: "shadow-pink-500/20" },
    ];

    return (
        <div className={`mx-auto ${presentationMode ? "presentation-mode w-full min-h-screen px-8 py-12 flex flex-col justify-center max-w-[95%]" : "max-w-7xl px-4 py-8"}`}>
            {!presentationMode && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-10">
                    <h2 className="text-3xl flex justify-center items-center gap-3 font-bold mb-2">
                        <span className="text-4xl">🧠</span> Research Journey Mind Map
                    </h2>
                    <p className="text-[var(--muted-foreground)]">
                        Interactive navigation connecting all 17 modules for an effective learning experience
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                        <span className="text-sm px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)]">
                            {progress.completedModules.length} of {modules.length} milestones reached
                        </span>
                    </div>
                </motion.div>
            )}

            {presentationMode && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Research Compass Mind Map
                    </h1>
                    <p className="text-2xl text-[var(--muted-foreground)]">Navigate linearly through the 5 phases of research</p>
                </motion.div>
            )}

            <div className={`relative ${presentationMode ? "" : "transform origin-top"}`}>
                <div className={`flex flex-col ${presentationMode ? "gap-24" : "gap-12 sm:gap-16"}`}>
                    {phases.map((phase, pi) => {
                        const phaseModules = modules.filter(m => m.id >= phase.range[0] && m.id <= phase.range[1]);
                        const isEven = pi % 2 === 0;

                        return (
                            <div key={phase.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 ${presentationMode ? "lg:gap-16" : ""}`}>
                                {/* Phase Central Node */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: pi * 0.2 }}
                                    className={`relative z-10 shrink-0 rounded-full bg-linear-to-br ${phase.color} shadow-lg ${phase.shadow} flex flex-col items-center justify-center text-white border-4 border-white dark:border-[#0a0a0a] ${presentationMode ? "w-64 h-64 border-8" : "w-40 h-40"}`}
                                >
                                    <span className={`${presentationMode ? "text-xl mb-2" : "text-xs mb-1"} uppercase tracking-widest opacity-80 font-bold`}>Phase {pi + 1}</span>
                                    <span className={`${presentationMode ? "text-4xl" : "text-lg"} font-bold text-center px-4 leading-tight`}>{phase.name}</span>
                                </motion.div>

                                {/* Module Nodes Container */}
                                <div className={`flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 relative grow w-full ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                                    {/* Connection Line Behind Nodes */}
                                    <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-1.5 bg-linear-to-r ${phase.color} opacity-30 ${isEven ? 'left-[-80px] right-[10%]' : 'right-[-80px] left-[10%]'} -z-10 rounded-full`} />

                                    {/* Connection line dot at the end */}
                                    <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-linear-to-r ${phase.color} opacity-50 -z-10 ${isEven ? 'right-[10%]' : 'left-[10%]'}`} />

                                    {phaseModules.map((mod, mi) => {
                                        const isCompleted = progress.completedModules.includes(mod.id);
                                        return (
                                            <motion.button
                                                key={mod.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: pi * 0.2 + mi * 0.15 }}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => onNavigate("module", mod.id)}
                                                className={`relative group flex flex-col items-center justify-center bg-(--card) border shadow-sm hover:shadow-md transition-all z-0 
                                                ${isCompleted ? 'border-green-500/60 shadow-green-500/10' : 'border-(--border) hover:border-indigo-400 hover:shadow-indigo-500/10'} 
                                                ${presentationMode ? "w-1/4 min-w-[280px] p-10 rounded-3xl" : "w-32 sm:w-44 p-5 rounded-2xl"}`}
                                            >
                                                {/* ID Badge */}
                                                <div className={`absolute -top-3 -right-3 rounded-full flex items-center justify-center font-bold bg-(--background) border border-(--border) shadow-md z-10 text-[var(--foreground)]
                                                    ${presentationMode ? "w-14 h-14 text-2xl border-2" : "w-8 h-8 text-xs"}`}>
                                                    {mod.id}
                                                </div>
                                                
                                                <span className={`mb-3 group-hover:scale-110 transition-transform ${presentationMode ? "text-7xl mb-6" : "text-4xl"}`}>
                                                    {mod.icon}
                                                </span>
                                                
                                                <h4 className={`font-semibold text-center leading-snug line-clamp-3 text-[var(--foreground)]
                                                    ${presentationMode ? "text-2xl" : "text-sm"}`}>
                                                    {mod.title}
                                                </h4>
                                                
                                                {isCompleted && (
                                                    <div className={`absolute -bottom-2 -left-2 bg-green-500 text-white rounded-full flex items-center justify-center shadow-sm
                                                        ${presentationMode ? "w-10 h-10 text-xl border-2 border-white" : "w-6 h-6 text-xs border border-white"}`}>
                                                        ✓
                                                    </div>
                                                )}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {!presentationMode && (
                <div className="mt-16 text-center text-sm text-[var(--muted-foreground)]">
                    <p>Click on any module node to seamlessly navigate to its learning content.</p>
                </div>
            )}
        </div>
    );
}
