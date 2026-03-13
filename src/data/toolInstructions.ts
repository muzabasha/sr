export interface ToolInstruction {
    howToUse: string[];
    interpretOutput: string[];
    researchTip: string;
}

// Keyed by tool name — matched to AITool.name in modules.ts
// Module-specific overrides use "toolName::moduleId" format
const instructions: Record<string, ToolInstruction> = {
    // ===== CHATGPT =====
    "ChatGPT (Free)": {
        howToUse: [
            "Sign up free at chat.openai.com with your email or Google account",
            "Start a new chat and clearly state your research context first: 'I am an undergraduate researching [topic]...'",
            "Ask specific questions rather than broad ones — 'What are 5 open problems in fall detection using wearables?' is better than 'Tell me about healthcare AI'",
            "Use follow-up prompts to go deeper: 'Explain point 3 in more detail with examples'",
            "Copy useful outputs into your notes app — never paste them directly into your paper",
        ],
        interpretOutput: [
            "AI responses are starting points, not facts — always verify claims on Google Scholar",
            "If it lists paper titles or authors, search for them individually to confirm they exist",
            "Look for patterns across multiple responses rather than trusting a single answer",
            "When it says 'studies show...' without specifics, ask: 'Which specific studies? Give me titles and years'",
            "Treat confident-sounding but unsourced claims with skepticism",
        ],
        researchTip: "Use ChatGPT as a brainstorming partner and concept explainer. Write your own understanding after the conversation — that's what goes in your paper.",
    },
    // ===== GOOGLE GEMINI =====
    "Google Gemini": {
        howToUse: [
            "Visit gemini.google.com and sign in with your Google account",
            "Ask domain overview questions: 'Give me a research landscape overview of [topic] with recent 2023-2024 developments'",
            "Use it to compare areas: 'Compare research opportunities in [Area A] vs [Area B] for a beginner'",
            "Ask for structured outputs: 'Create a table comparing 5 research sub-areas in [domain] with their key challenges'",
        ],
        interpretOutput: [
            "Gemini can access web content so its information may be more current — but still verify dates and claims",
            "When it mentions specific researchers or labs, note them down for your expert-finding phase",
            "If it lists 'emerging trends,' cross-check on Google Scholar to see actual publication volume",
            "Pay attention to areas marked as 'under-explored' — these may have genuine research gaps",
        ],
        researchTip: "Gemini's web access makes it useful for recent trends. Use it early in your journey to map the landscape, then switch to academic databases for depth.",
    },

    // ===== PERPLEXITY =====
    "Perplexity AI": {
        howToUse: [
            "Visit perplexity.ai — basic use requires no account",
            "Type research questions naturally: 'What are the latest breakthroughs in [topic]?'",
            "Click the 'Focus' dropdown and select 'Academic' for scholarly results",
            "Click numbered citations [1][2][3] in responses to verify each source directly",
            "Use follow-up questions in the same thread to drill deeper into specific points",
        ],
        interpretOutput: [
            "Numbered citations are Perplexity's strength — ALWAYS click them to verify the source exists and says what's claimed",
            "Sources from .edu, .gov, or known journal domains are more reliable than blogs",
            "If a claim has no citation number, treat it as AI-generated opinion, not fact",
            "Use the cited URLs as starting points for your actual literature search on Google Scholar",
        ],
        researchTip: "Perplexity is the best AI tool for getting verified starting points because it shows sources. Use it first, then dive deeper into the cited papers.",
    },

    // ===== MIND MAPPING =====
    "MindMeister": {
        howToUse: [
            "Sign up free at mindmeister.com (3 free mind maps)",
            "Create a central node with your broad interest area (e.g., 'AI in Healthcare')",
            "Branch out into sub-topics, then further into specific problems",
            "Color-code branches: green for areas that excite you, red for areas you want to avoid",
            "Export as PDF to share with your advisor",
        ],
        interpretOutput: [
            "The branch with the most sub-nodes usually indicates your strongest interest area",
            "Look for connections between different branches — interdisciplinary topics often have more research gaps",
            "Sparse branches may indicate areas you need to explore more, or areas with less research potential",
        ],
        researchTip: "Create your mind map BEFORE using AI tools. This captures your genuine interests. Then use AI to expand branches you're curious about.",
    },

    "Coggle": {
        howToUse: [
            "Visit coggle.it and sign in with Google",
            "Start with your research interest in the center",
            "Add branches for sub-domains, methods, applications, and datasets",
            "Use the collaboration feature to brainstorm with classmates",
        ],
        interpretOutput: [
            "Dense clusters of connected ideas suggest well-established research areas",
            "Isolated nodes with few connections may represent novel interdisciplinary opportunities",
            "Share with your advisor to get feedback on which branches are most promising",
        ],
        researchTip: "Collaborative mind mapping with peers often reveals perspectives you'd miss alone. Invite 2-3 classmates to a shared Coggle session.",
    },
    // ===== SEMANTIC SCHOLAR =====
    "Semantic Scholar": {
        howToUse: [
            "Go to semanticscholar.org and search your topic keywords",
            "Use filters: Year (last 3-5 years), Fields of Study, Publication Type",
            "Click 'TLDR' on any paper for an AI-generated one-line summary",
            "Check 'Highly Influential Citations' to find the most impactful papers",
            "Click 'Create Alert' to get notified when new papers match your search",
        ],
        interpretOutput: [
            "TLDR summaries are AI-generated — read the actual abstract to verify accuracy",
            "Papers with high 'Influential Citation' counts are foundational — prioritize reading these",
            "The 'Citation Velocity' graph shows if a topic is gaining or losing research interest",
            "Author pages show h-index and publication history — useful for finding domain experts",
        ],
        researchTip: "Use Semantic Scholar's TLDR feature for initial screening (Pass 1 of the 3-pass strategy), but always read the full abstract before shortlisting.",
    },

    // ===== CONNECTED PAPERS =====
    "Connected Papers": {
        howToUse: [
            "Go to connectedpapers.com and paste a paper title or DOI",
            "Wait for the visual graph to generate (takes 10-30 seconds)",
            "Larger nodes = more citations. Closer nodes = more similar content",
            "Click 'Prior Works' tab to see foundational papers, 'Derivative Works' for newer papers",
            "Use the graph to find papers you missed in your keyword search",
        ],
        interpretOutput: [
            "Clusters of closely connected papers indicate established research sub-areas",
            "Papers that bridge two clusters may represent interdisciplinary work — great for finding gaps",
            "Isolated nodes far from the main cluster might be tangentially related — verify relevance",
            "The 'Prior Works' list is excellent for building your literature review's historical context",
        ],
        researchTip: "Start with one strong paper you've already read, then use Connected Papers to discover the entire neighborhood. This is faster than keyword searching.",
    },

    // ===== RESEARCH RABBIT =====
    "Research Rabbit": {
        howToUse: [
            "Sign up free at researchrabbit.ai",
            "Create a 'Collection' and add 2-3 seed papers you've already found",
            "Click 'Similar Work' to find related papers the AI recommends",
            "Click 'These Authors Also Published' to follow researcher lineage",
            "Use 'All References' and 'All Citations' to trace the citation network",
        ],
        interpretOutput: [
            "Papers appearing in multiple recommendation categories are likely very relevant",
            "The 'Similar Work' suggestions are based on content similarity, not just citations — good for finding work from different research groups",
            "Author recommendations help you discover research labs working on your topic",
            "Save promising papers to your collection to refine future recommendations",
        ],
        researchTip: "Research Rabbit improves as you add more papers. Start with 3 seed papers, review recommendations, add the best ones, and repeat for 2-3 cycles.",
    },

    // ===== LITMAPS =====
    "Litmaps": {
        howToUse: [
            "Visit litmaps.com and create a free account",
            "Search for a seed paper and click 'Explore' to generate a citation map",
            "The timeline view shows how research evolved chronologically",
            "Use 'Discover' to find papers that connect different parts of your map",
        ],
        interpretOutput: [
            "Gaps in the timeline may indicate periods where research stalled — potential for revival",
            "Dense clusters at recent dates show active research fronts",
            "Papers connecting different clusters are often review/survey papers — great for your Golden 5",
            "The visual map helps you explain the research landscape in your literature review",
        ],
        researchTip: "Use Litmaps' timeline view to identify when key breakthroughs happened in your field. This chronological understanding strengthens your introduction section.",
    },

    // ===== ELICIT =====
    "Elicit": {
        howToUse: [
            "Go to elicit.com and sign up for a free account",
            "Type a research question (not just keywords): 'Does deep learning improve fall detection accuracy?'",
            "Use the table view to compare papers across columns: Method, Dataset, Results, Limitations",
            "Click 'Extract' to pull specific data points from papers automatically",
            "Export the comparison table to CSV for your research gap matrix",
        ],
        interpretOutput: [
            "Elicit's extracted data is AI-interpreted — always verify by reading the actual paper section",
            "Empty cells in the comparison table may indicate the paper didn't report that metric — not that it's zero",
            "The 'Abstract Summary' is useful for screening but may miss nuances in methodology",
            "Use the extracted limitations column directly to identify research gaps",
        ],
        researchTip: "Elicit is your best friend for building the comparison matrix (Module 7). Export the table, add your own columns, and the research gap often becomes obvious.",
    },
    // ===== GOOGLE TRENDS =====
    "Google Trends": {
        howToUse: [
            "Visit trends.google.com",
            "Enter your research topic and compare with related terms",
            "Set the time range to 'Past 5 years' and category to 'Science'",
            "Compare up to 5 topics to see which has growing interest",
            "Check 'Related queries' for emerging sub-topics",
        ],
        interpretOutput: [
            "Rising trends indicate growing public and research interest — good for relevance arguments",
            "Declining trends don't mean the area is dead — it may mean foundational work is done and applications are needed",
            "Spikes often correlate with major publications or news events — investigate what caused them",
            "Regional interest data can help you identify where research is most active",
        ],
        researchTip: "Include a Google Trends graph in your introduction to demonstrate the growing relevance of your research topic. Reviewers appreciate data-backed motivation.",
    },

    // ===== GRAMMARLY =====
    "Grammarly": {
        howToUse: [
            "Install the free browser extension from grammarly.com",
            "Paste your written text into the Grammarly editor (or use the browser extension in Google Docs)",
            "Review suggestions one by one — don't accept all blindly",
            "Set the 'Goals' to: Academic, Formal, Informative for research writing",
            "Focus on clarity and correctness scores",
        ],
        interpretOutput: [
            "Green underlines = spelling/grammar — usually safe to accept",
            "Blue underlines = clarity suggestions — read carefully, some may change your meaning",
            "Purple underlines = vocabulary enhancement — only accept if the suggestion matches your intended meaning",
            "The 'Clarity' score is most important for academic writing — aim for 80+",
        ],
        researchTip: "Run Grammarly on each section AFTER you finish writing it, not during. Writing and editing simultaneously kills your flow.",
    },

    // ===== QUILLBOT =====
    "QuillBot": {
        howToUse: [
            "Visit quillbot.com — free tier allows 125 words at a time",
            "Paste YOUR OWN text that you want to rephrase for clarity",
            "Try different modes: Standard, Fluency, Academic",
            "Use the 'Synonyms' slider to control how much the text changes",
            "NEVER paste someone else's text to paraphrase — that's still plagiarism",
        ],
        interpretOutput: [
            "Compare the output with your original — does it still say what YOU meant?",
            "If the paraphrased version sounds better but you don't understand why, learn from the changes",
            "Academic mode produces more formal language suitable for papers",
            "Always read the output aloud — if it sounds unnatural, revert to your original",
        ],
        researchTip: "Use QuillBot to learn better academic phrasing, not to disguise copied text. The ethical use is: write first in your own words, then polish with QuillBot.",
    },

    // ===== TURNITIN =====
    "Turnitin (via institution)": {
        howToUse: [
            "Access through your university's LMS (Moodle, Canvas, Blackboard)",
            "Upload your paper as a Word or PDF file",
            "Wait for the similarity report (usually 15-30 minutes)",
            "Click on highlighted sections to see the matching sources",
            "Aim for less than 15% similarity (excluding references and quotes)",
        ],
        interpretOutput: [
            "High similarity doesn't always mean plagiarism — properly cited quotes will show as matches",
            "Check if matches are from your own previous submissions (self-plagiarism)",
            "Small matches (1-2%) from common phrases are normal and not concerning",
            "Large matches from a single source need immediate attention — either cite properly or rewrite",
            "The color coding shows severity: blue (low) to red (high match percentage)",
        ],
        researchTip: "Run Turnitin BEFORE final submission, not after. This gives you time to fix any unintentional similarity issues.",
    },

    // ===== DUPLICHECKER =====
    "Duplichecker": {
        howToUse: [
            "Visit duplichecker.com — no account needed for basic checks",
            "Paste up to 1000 words at a time in the text box",
            "Click 'Check Plagiarism' and wait for results",
            "Review highlighted sentences that match online sources",
        ],
        interpretOutput: [
            "Results show percentage of text matching online sources",
            "Click on matched sentences to see the original source",
            "Some matches may be common phrases — focus on paragraph-level matches",
            "Use this as a quick check before the more thorough Turnitin scan",
        ],
        researchTip: "Use Duplichecker for quick self-checks during writing. Save Turnitin for the final pre-submission check.",
    },

    // ===== UNESCO ETHICS =====
    "AI Ethics Guidelines (UNESCO)": {
        howToUse: [
            "Visit the UNESCO AI ethics recommendation page",
            "Read the 'Values and Principles' section for foundational ethical guidelines",
            "Focus on sections about 'Transparency,' 'Fairness,' and 'Human oversight'",
            "Reference these guidelines in your paper's ethics section",
        ],
        interpretOutput: [
            "These are internationally recognized standards — citing them strengthens your ethics discussion",
            "Map each principle to your specific AI usage in research",
            "Use the framework to create your own 'Ethical AI Usage Declaration' for your paper",
        ],
        researchTip: "Including a brief 'Ethical AI Usage Statement' in your methodology section, referencing UNESCO guidelines, shows reviewers you take ethics seriously.",
    },
    // ===== GOOGLE SCHOLAR =====
    "Google Scholar": {
        howToUse: [
            "Go to scholar.google.com and enter your research keywords",
            "Use quotes for exact phrases: \"fall detection\" \"deep learning\"",
            "Click 'Cited by' to find newer papers that reference a key paper (forward citations)",
            "Click 'Related articles' to discover similar work",
            "Use 'Since [year]' filter to find recent papers only",
            "Click the star icon to save papers to your Google Scholar library",
        ],
        interpretOutput: [
            "Papers with high citation counts are influential — but old papers naturally have more citations",
            "Look at 'Cited by' count relative to the paper's age — 50 citations in 2 years is more impressive than 200 in 10 years",
            "The [PDF] link on the right means free full-text access — prioritize these",
            "Results are ranked by relevance, not quality — a top result isn't necessarily the best paper",
            "Check if the paper is from a reputable venue (IEEE, ACM, Springer, Elsevier) vs unknown sources",
        ],
        researchTip: "Create a Google Scholar profile early. Set up email alerts for your research keywords — you'll get notified when new relevant papers are published.",
    },

    "Google Scholar Profiles": {
        howToUse: [
            "Search your topic on scholar.google.com",
            "Click on author names in search results to view their profiles",
            "Check their h-index, total citations, and recent publications",
            "Click 'Follow' to get email alerts when they publish new work",
            "Look at their co-authors to discover research groups",
        ],
        interpretOutput: [
            "h-index above 20 indicates an established researcher in most fields",
            "Recent publications (last 2-3 years) show the researcher is still active",
            "Co-author networks reveal research groups and potential collaborators",
            "If their recent work aligns with your interest, they could be a potential advisor or collaborator",
        ],
        researchTip: "Before emailing any researcher, read at least 3 of their recent papers. Mention specific findings in your email — this shows genuine interest.",
    },

    // ===== PUBMED =====
    "PubMed": {
        howToUse: [
            "Visit pubmed.ncbi.nlm.nih.gov",
            "Use MeSH terms for precise medical/biomedical searches",
            "Apply filters: Article Type (Review, Clinical Trial), Date, Free Full Text",
            "Use the 'Similar Articles' feature on any paper's page",
            "Save searches and set up email alerts for new results",
        ],
        interpretOutput: [
            "PubMed IDs (PMIDs) are unique identifiers — use them for precise referencing",
            "Papers marked 'Free PMC article' have full text available at no cost",
            "Review articles in PubMed are excellent for your literature review foundation",
            "Check the 'MeSH Terms' section to discover standardized keywords for your topic",
        ],
        researchTip: "If your research involves any health/biomedical component, PubMed is mandatory. Reviewers in health-related fields expect PubMed-indexed references.",
    },

    // ===== ARXIV =====
    "arXiv": {
        howToUse: [
            "Visit arxiv.org and search by keyword or browse by category (cs.AI, cs.CV, etc.)",
            "Sort by 'Recent' to find the very latest research (often months before journal publication)",
            "Check the 'Comments' field for conference acceptance info (e.g., 'Accepted at NeurIPS 2024')",
            "Use arXiv Sanity (arxiv-sanity-lite.com) for AI-powered paper recommendations",
        ],
        interpretOutput: [
            "arXiv papers are NOT peer-reviewed — treat them as preliminary until published in a venue",
            "Papers with 'v2', 'v3' versions have been revised — read the latest version",
            "High download counts suggest community interest but not necessarily quality",
            "Check if the paper was later published in a conference/journal for the peer-reviewed version",
        ],
        researchTip: "arXiv gives you a 6-12 month head start on the latest research. But NEVER cite only arXiv preprints in your paper — find the published versions when available.",
    },

    // ===== CORE =====
    "CORE": {
        howToUse: [
            "Visit core.ac.uk and search for your topic",
            "Use filters to narrow by year, repository, and language",
            "Download full-text PDFs directly — all content is open access",
            "Use the API for bulk searches if you need many papers",
        ],
        interpretOutput: [
            "CORE aggregates from institutional repositories — quality varies widely",
            "Check the source repository and original publication venue for quality assessment",
            "Thesis and dissertation results can provide detailed methodology descriptions",
            "Use CORE when you can't access papers behind paywalls — it often has open-access versions",
        ],
        researchTip: "CORE is your backup when you hit paywalls. Many papers have open-access versions in institutional repositories that CORE indexes.",
    },

    // ===== INCITEFUL =====
    "Inciteful": {
        howToUse: [
            "Go to inciteful.xyz and paste a paper DOI or title",
            "Choose 'Paper Discovery' to find related work from a single seed paper",
            "Choose 'Literature Connector' to find papers connecting two different topics",
            "Review the 'Most Important Papers' list generated from the citation network",
        ],
        interpretOutput: [
            "The 'Most Important Papers' list identifies foundational work you must read and cite",
            "The 'Literature Connector' results reveal interdisciplinary bridges — great for novel research angles",
            "Papers appearing as connectors between two fields often represent research gaps",
            "The network visualization shows how your topic relates to adjacent research areas",
        ],
        researchTip: "Use Inciteful's Literature Connector when your research spans two domains (e.g., AI + Healthcare). It finds the bridge papers that connect both fields.",
    },

    // ===== SCITE.AI =====
    "Scite.ai": {
        howToUse: [
            "Visit scite.ai and search for a paper or topic",
            "Look at the 'Smart Citation' counts: Supporting, Contrasting, Mentioning",
            "Click on contrasting citations to find papers that challenge the findings",
            "Use the dashboard to see how a paper has been received by the community",
        ],
        interpretOutput: [
            "High 'Supporting' citations mean the findings are well-accepted",
            "Any 'Contrasting' citations indicate debate — investigate these for research gaps",
            "Papers with mostly 'Mentioning' citations may not have been deeply engaged with",
            "A paper with many contrasting citations might have methodology issues — read critically",
        ],
        researchTip: "Scite.ai is uniquely valuable for finding contradictions in the literature. Contradictions = research gaps = your opportunity.",
    },

    // ===== REFERENCE MANAGERS =====
    "Zotero": {
        howToUse: [
            "Download free from zotero.org and install the browser connector",
            "Click the Zotero icon in your browser to save papers with one click",
            "Organize papers into collections (folders) by topic or module",
            "Use the 'Generate Bibliography' feature to create citations in any format (IEEE, APA, etc.)",
            "Attach PDFs and add your own notes and tags to each paper",
        ],
        interpretOutput: [
            "The metadata Zotero captures (title, authors, journal, year) should be verified for accuracy",
            "Use tags like 'methodology,' 'dataset,' 'baseline' to categorize papers for your literature review",
            "The 'Related' feature helps you link papers that discuss similar topics",
            "Export your collection as a bibliography to paste directly into your paper",
        ],
        researchTip: "Start using Zotero from Day 1 of your research. Organizing papers early saves weeks of pain when writing your literature review.",
    },

    "Mendeley": {
        howToUse: [
            "Download from mendeley.com and create a free account",
            "Import PDFs by dragging them into the Mendeley library",
            "Use the built-in PDF reader to highlight and annotate papers",
            "Install the Word/LibreOffice plugin for in-text citation insertion",
            "Use 'Groups' to collaborate with your research team",
        ],
        interpretOutput: [
            "Mendeley auto-extracts metadata from PDFs — always verify title, authors, and year are correct",
            "The 'Readership Statistics' show how popular a paper is among Mendeley users",
            "Annotations and highlights sync across devices — useful for reading on tablet and writing on laptop",
        ],
        researchTip: "Mendeley's annotation feature is perfect for the 3-pass reading strategy. Highlight key findings in yellow, methodology in blue, and limitations in red.",
    },
    // ===== PAPER READING TOOLS =====
    "SciSpace (Typeset)": {
        howToUse: [
            "Go to typeset.io and upload a research paper PDF",
            "Use the AI Copilot chat to ask questions: 'What is the main contribution of this paper?'",
            "Highlight any confusing text and click 'Explain' for a simplified explanation",
            "Ask: 'Summarize the methodology in simple terms' or 'What datasets were used?'",
            "Use 'Compare Papers' to see differences between two papers side by side",
        ],
        interpretOutput: [
            "AI explanations simplify complex concepts but may lose important nuances — always re-read the original",
            "The 'Key Findings' extraction is useful for your comparison matrix but verify against the actual results section",
            "If the AI explanation contradicts your understanding, trust the original paper and re-read carefully",
            "Use the extracted information as study notes, never as direct content for your paper",
        ],
        researchTip: "SciSpace is ideal for Pass 1 and Pass 2 of the 3-pass reading strategy. Use it to quickly understand a paper, then do Pass 3 (deep reading) without AI assistance.",
    },

    "Explainpaper": {
        howToUse: [
            "Visit explainpaper.com and upload a PDF",
            "Highlight any sentence or paragraph you find confusing",
            "The AI will explain it in simpler language",
            "Ask follow-up questions for deeper understanding",
        ],
        interpretOutput: [
            "Explanations are simplified — they may omit important technical details",
            "If the explanation doesn't make sense, the original text might be poorly written (common in papers!)",
            "Use explanations to build your understanding, then write your own interpretation",
            "Compare AI explanations with textbook definitions for accuracy",
        ],
        researchTip: "Explainpaper is best for understanding mathematical formulas and technical jargon. Highlight the equation, get the explanation, then try to explain it yourself.",
    },

    "ChatPDF": {
        howToUse: [
            "Visit chatpdf.com and upload a research paper PDF (free: 2 PDFs/day)",
            "Start with: 'Summarize this paper in 5 bullet points'",
            "Then ask specific questions: 'What method did they use?' 'What were the limitations?'",
            "Ask: 'What research gap does this paper identify for future work?'",
        ],
        interpretOutput: [
            "ChatPDF answers are based on the uploaded document only — it won't hallucinate external references",
            "Verify extracted numbers (accuracy percentages, dataset sizes) against the actual tables in the paper",
            "The 'future work' section extraction is particularly useful for identifying research gaps",
            "If it says 'the paper doesn't mention...' — double-check, as it may have missed a section",
        ],
        researchTip: "Use ChatPDF to quickly extract the 'Future Work' and 'Limitations' sections from multiple papers. These sections are gold mines for research gaps.",
    },

    "Scholarcy": {
        howToUse: [
            "Visit scholarcy.com and upload a paper or paste a URL",
            "Review the auto-generated 'Summary Flashcard' with key findings",
            "Check the extracted 'Key Concepts' and 'Study Highlights'",
            "Use the 'Reference Check' feature to verify cited sources",
        ],
        interpretOutput: [
            "Flashcard summaries are great for quick screening but miss methodology details",
            "The 'Key Concepts' list helps you identify important terms for your own keyword searches",
            "Extracted tables and figures are useful for your comparison matrix",
            "Always read the full methodology section yourself — Scholarcy often oversimplifies it",
        ],
        researchTip: "Use Scholarcy flashcards to quickly screen 20+ papers during your shortlisting phase. Then deep-read only the 5 papers you select.",
    },

    "Hypothesis": {
        howToUse: [
            "Install the Hypothesis browser extension from web.hypothes.is",
            "Navigate to any online paper and click the Hypothesis sidebar",
            "Highlight text and add annotations with your notes",
            "Create groups to share annotations with your research team",
            "Search public annotations to see what others noted about the same paper",
        ],
        interpretOutput: [
            "Public annotations from other researchers can reveal important insights you missed",
            "Your own annotations become a searchable knowledge base across all papers you've read",
            "Group annotations enable collaborative literature review with your team",
        ],
        researchTip: "Annotate every paper you read with Hypothesis. When writing your literature review, search your annotations by keyword instead of re-reading papers.",
    },

    "Notion": {
        howToUse: [
            "Sign up free at notion.so (free for students with .edu email)",
            "Create a 'Research Database' with columns: Paper Title, Authors, Year, Method, Key Finding, Limitation",
            "Use templates for the 3-pass reading strategy notes",
            "Create linked pages for each paper with detailed notes",
            "Use the Kanban view to track papers: To Read → Reading → Read → Cited",
        ],
        interpretOutput: [
            "Your database becomes your personal research knowledge base",
            "Filter and sort by any column to find patterns across papers",
            "The Kanban view gives you a visual overview of your reading progress",
            "Export tables as CSV for use in your comparison matrix",
        ],
        researchTip: "A well-organized Notion database saves more time than any AI tool. Spend 30 minutes setting it up before you start reading papers.",
    },
    // ===== GAP & ANALYSIS TOOLS =====
    "Consensus": {
        howToUse: [
            "Visit consensus.app and type a yes/no research question: 'Does deep learning improve medical image diagnosis?'",
            "Review the 'Consensus Meter' showing what percentage of studies agree/disagree",
            "Click individual papers to see their specific findings",
            "Look for topics where consensus is low — these indicate active debate and research gaps",
        ],
        interpretOutput: [
            "A strong consensus (>80% agree) means the area is well-established — harder to find gaps",
            "Mixed results (40-60%) indicate active debate — excellent opportunity for your research",
            "Papers in the 'disagree' category often highlight methodological limitations you can address",
            "The extracted 'findings' are AI-interpreted — verify by reading the actual paper conclusions",
        ],
        researchTip: "Use Consensus to quickly identify controversial topics in your field. Where scientists disagree, there's room for your contribution.",
    },

    "Google Sheets": {
        howToUse: [
            "Create a new sheet at sheets.google.com",
            "Set up columns: Paper, Year, Method, Dataset, Metrics, Results, Limitations",
            "Fill one row per paper as you read through your shortlisted papers",
            "Use conditional formatting to highlight gaps (empty cells = potential gaps)",
            "Share with your advisor for feedback",
        ],
        interpretOutput: [
            "Columns with many empty cells across papers indicate under-reported aspects — potential gaps",
            "Rows where 'Limitations' are similar across papers suggest a systematic gap",
            "Sort by 'Results' to see which methods perform best and where improvement is needed",
            "The completed matrix IS your research gap analysis — include it in your paper",
        ],
        researchTip: "Your comparison matrix in Google Sheets can be directly converted into a table for your paper. Many published papers include exactly this kind of comparison.",
    },

    // ===== WRITING TOOLS =====
    "Hemingway Editor": {
        howToUse: [
            "Visit hemingwayapp.com (free web version)",
            "Paste your problem statement or any paragraph",
            "Aim for Grade 10 or lower readability for academic writing",
            "Fix red highlights (very hard to read) first, then yellow (hard to read)",
            "Reduce adverb usage and passive voice as suggested",
        ],
        interpretOutput: [
            "Red sentences need to be split into shorter ones or simplified",
            "Yellow sentences can often be improved by removing unnecessary words",
            "The readability grade should be appropriate for your audience — Grade 12-14 is fine for academic papers",
            "Don't eliminate ALL passive voice — some is natural in scientific writing ('The experiment was conducted...')",
        ],
        researchTip: "Run your Abstract and Introduction through Hemingway. These sections need to be the clearest since they determine if reviewers keep reading.",
    },

    // ===== WRITING PLATFORM =====
    "Overleaf": {
        howToUse: [
            "Sign up free at overleaf.com",
            "Search 'Templates' for your target journal/conference template (IEEE, ACM, Springer, etc.)",
            "Use the Rich Text mode if you're new to LaTeX, or Source mode for full control",
            "Share the project link with co-authors for real-time collaboration",
            "Use the 'Track Changes' feature for revision management",
        ],
        interpretOutput: [
            "Compilation errors (red) must be fixed — usually missing brackets or undefined commands",
            "Warnings (yellow) are usually non-critical but should be reviewed",
            "The PDF preview shows exactly how your paper will look when submitted",
            "Use the 'History' feature to revert to previous versions if something breaks",
        ],
        researchTip: "Start writing in Overleaf from Day 1 using the target journal's template. This ensures formatting is never an issue at submission time.",
    },

    "Writefull": {
        howToUse: [
            "Install from writefull.com (free tier available, also integrates with Overleaf)",
            "It checks your text against patterns from millions of published papers",
            "Review suggestions for academic phrasing, word choice, and sentence structure",
            "Use the 'Paraphrase' feature to rephrase awkward sentences academically",
        ],
        interpretOutput: [
            "Suggestions are based on how published authors write — more reliable than generic grammar tools for academic text",
            "The 'Language Check' catches field-specific issues that Grammarly might miss",
            "Accept suggestions that improve clarity; reject those that change your intended meaning",
            "The confidence score shows how certain the tool is — prioritize high-confidence suggestions",
        ],
        researchTip: "Writefull is specifically trained on academic papers, making it more suitable than Grammarly for research writing. Use both: Grammarly for grammar, Writefull for academic style.",
    },
    // ===== FORMATTING & FIGURES =====
    "Tables Generator": {
        howToUse: [
            "Visit tablesgenerator.com",
            "Choose your format: LaTeX, HTML, Markdown, or MediaWiki",
            "Enter your data in the visual editor or paste from a spreadsheet",
            "Customize borders, alignment, and formatting",
            "Copy the generated code directly into your paper",
        ],
        interpretOutput: [
            "The generated code is ready to paste — but verify it compiles correctly in your document",
            "For LaTeX, you may need to add the \\usepackage{booktabs} for professional-looking tables",
            "Adjust column widths manually if the auto-generated table is too wide",
        ],
        researchTip: "Use booktabs-style tables (no vertical lines, minimal horizontal lines) for a professional look. Most top journals prefer this style.",
    },

    "draw.io (diagrams.net)": {
        howToUse: [
            "Visit app.diagrams.net (no account needed)",
            "Choose a template or start blank for your research diagram",
            "Use flowchart shapes for methodology, block diagrams for system architecture",
            "Export as PNG (300 DPI) or SVG for high-quality figures in your paper",
            "Save to Google Drive or locally for future editing",
        ],
        interpretOutput: [
            "Your diagram should be self-explanatory — if someone can't understand it without reading the text, simplify it",
            "Use consistent colors and shapes throughout your paper's figures",
            "Label every component clearly with readable font sizes",
            "Include a figure caption that describes what the diagram shows",
        ],
        researchTip: "Create your methodology diagram BEFORE writing the methodology section. The diagram forces you to think through your approach logically.",
    },

    "draw.io": {
        howToUse: [
            "Visit app.diagrams.net (no account needed)",
            "Use flowchart shapes for methodology, block diagrams for architecture",
            "Export as PNG (300 DPI) or SVG for paper figures",
            "Save to Google Drive for future editing",
        ],
        interpretOutput: [
            "Diagrams should be self-explanatory with clear labels",
            "Use consistent colors and shapes across all figures",
            "Export at high resolution (300 DPI minimum) for publication quality",
        ],
        researchTip: "Draw your system architecture diagram first — it becomes the backbone of your methodology section.",
    },

    "BioRender": {
        howToUse: [
            "Sign up at biorender.com (free for students with .edu email)",
            "Browse the icon library for scientific illustrations",
            "Drag and drop components to create professional figures",
            "Export in publication-quality formats (PNG, SVG, PDF)",
        ],
        interpretOutput: [
            "BioRender figures look professional but ensure they accurately represent your research",
            "Add proper labels and legends to every figure",
            "Check the license — free tier may have usage restrictions for publications",
        ],
        researchTip: "A single well-designed BioRender figure can replace paragraphs of text. Invest time in creating clear visual representations of your methodology.",
    },

    // ===== JOURNAL SELECTION =====
    "Journal Finder (Elsevier)": {
        howToUse: [
            "Visit journalfinder.elsevier.com",
            "Paste your paper's title and abstract",
            "Review the ranked list of matching Elsevier journals",
            "Check each journal's impact factor, acceptance rate, and review time",
            "Click 'Journal Homepage' to read the aims and scope",
        ],
        interpretOutput: [
            "Higher match percentage means better scope alignment — but also check manually",
            "Impact factor alone doesn't determine quality — consider the journal's reputation in your specific field",
            "Review time estimates help you plan your publication timeline",
            "Check if the journal is SCI/SCIE indexed — this matters for academic credit",
        ],
        researchTip: "Use 3 different journal finders (Elsevier, Springer, JANE) and see which journals appear in multiple results — those are your best matches.",
    },

    "Journal Suggester (Springer)": {
        howToUse: [
            "Visit journalsuggester.springer.com",
            "Enter your manuscript title and abstract",
            "Review Springer Nature journal recommendations",
            "Check open access options and article processing charges",
        ],
        interpretOutput: [
            "Springer suggestions are limited to Springer Nature journals — use alongside other finders",
            "Open access journals have wider readership but may have publication fees",
            "Check the 'Aims and Scope' of each suggested journal before submitting",
        ],
        researchTip: "If a journal appears in both Elsevier and Springer finders' results, it's likely a very good scope match for your paper.",
    },

    "JANE (Journal/Author Name Estimator)": {
        howToUse: [
            "Visit jane.biosemantics.org",
            "Paste your abstract in the text box",
            "Click 'Find Journals' for venue suggestions or 'Find Authors' for expert discovery",
            "Review the confidence scores and article matches",
        ],
        interpretOutput: [
            "Higher confidence scores indicate better content match",
            "The 'Articles' tab shows specific papers in that journal similar to yours",
            "JANE is particularly strong for biomedical and life science journals",
            "Use the 'Find Authors' feature to discover potential reviewers or collaborators",
        ],
        researchTip: "JANE's 'Find Authors' feature is a hidden gem — it identifies researchers working on similar topics, useful for both Module 9 (Experts) and Module 11 (Venue).",
    },
    // ===== JOURNAL QUALITY =====
    "Scimago Journal Rank (SJR)": {
        howToUse: [
            "Visit scimagojr.com and search for a journal name",
            "Check the SJR indicator, H-index, and quartile ranking (Q1 is best)",
            "Review the 'Subject Area' to confirm scope match",
            "Check the trend graph — is the journal's impact rising or falling?",
        ],
        interpretOutput: [
            "Q1 journals are top 25% in their category — aim for Q1 or Q2",
            "A rising SJR trend indicates a journal gaining reputation",
            "Compare multiple journals in the same subject area using the 'Compare' feature",
            "Check 'Total Documents' to see how many papers they publish per year — very high numbers may indicate less selectivity",
        ],
        researchTip: "Always check SJR before submitting. A journal that looks legitimate but isn't indexed in Scimago is a red flag.",
    },

    "Scimago Journal Rank": {
        howToUse: [
            "Visit scimagojr.com and search for a journal name",
            "Check quartile ranking (Q1-Q4), H-index, and SJR score",
            "Verify the journal's subject area matches your paper's topic",
            "Use the 'Compare' feature to evaluate multiple journals side by side",
        ],
        interpretOutput: [
            "Q1 = top 25% journals, Q2 = top 50% — aim for Q1 or Q2 for maximum impact",
            "Check the acceptance rate if available — very high rates (>80%) may indicate low selectivity",
            "A journal not found in Scimago is likely not indexed — avoid submitting there",
        ],
        researchTip: "Include the target journal's SJR quartile in your cover letter — it shows you've done your homework on venue selection.",
    },

    "Beall's List": {
        howToUse: [
            "Visit beallslist.net",
            "Search for the journal or publisher name",
            "If listed, the journal is potentially predatory — DO NOT submit",
            "Cross-reference with DOAJ and Scimago for confirmation",
        ],
        interpretOutput: [
            "Being on Beall's List is a strong warning sign — but verify with other sources too",
            "Some legitimate journals may be incorrectly listed — check DOAJ and Scimago as well",
            "If a journal aggressively emails you to submit, check Beall's List immediately",
        ],
        researchTip: "Before paying any publication fee, check Beall's List + DOAJ + Scimago. If the journal fails any two of these checks, don't submit.",
    },

    "DOAJ": {
        howToUse: [
            "Visit doaj.org and search for the journal",
            "If listed in DOAJ, the journal meets quality standards for open access",
            "Check the 'APC' (Article Processing Charge) information",
            "Verify the journal's review process and editorial board",
        ],
        interpretOutput: [
            "DOAJ-listed journals have passed a quality review — they are legitimate open access venues",
            "Not being in DOAJ doesn't automatically mean predatory — some good journals aren't listed",
            "Check if your institution has agreements for APC waivers with DOAJ-listed publishers",
        ],
        researchTip: "DOAJ is the gold standard for verifying open access journals. If a journal claims to be open access but isn't in DOAJ, investigate further.",
    },

    // ===== MANUSCRIPT CHECK =====
    "Paperpal": {
        howToUse: [
            "Visit paperpal.com and create a free account",
            "Upload your manuscript or paste text",
            "Review language, grammar, and academic style suggestions",
            "Check the 'Consistency' report for formatting issues",
            "Use the 'Pre-submission Check' feature before final submission",
        ],
        interpretOutput: [
            "Paperpal is trained on academic manuscripts — its suggestions are field-appropriate",
            "The consistency check catches issues like inconsistent abbreviations and number formatting",
            "Accept language suggestions that improve clarity; reject those that change technical meaning",
            "The pre-submission checklist helps avoid common desk rejection reasons",
        ],
        researchTip: "Run Paperpal's pre-submission check as your final step before submitting. It catches formatting issues that cause desk rejection.",
    },

    "LaTeX Diff (latexdiff)": {
        howToUse: [
            "In Overleaf, use the built-in 'Track Changes' or 'History' comparison",
            "Alternatively, use the latexdiff command-line tool on your local machine",
            "Upload both original and revised .tex files",
            "The output highlights additions (blue) and deletions (red) in the PDF",
        ],
        interpretOutput: [
            "The diff document shows reviewers exactly what changed — saves them time and shows thoroughness",
            "Include the diff as supplementary material with your revision submission",
            "Make sure all changes are intentional — accidental formatting changes will show up too",
        ],
        researchTip: "Always submit a diff document with your revision. Reviewers appreciate being able to see changes at a glance — it often leads to faster acceptance.",
    },
    // ===== NETWORKING & VISIBILITY =====
    "ResearchGate": {
        howToUse: [
            "Sign up at researchgate.net with your institutional email",
            "Complete your profile with research interests and skills",
            "Upload your published papers and preprints",
            "Follow researchers in your domain and engage with their work",
            "Ask and answer questions in the Q&A section",
        ],
        interpretOutput: [
            "Your 'RG Score' increases with engagement — higher scores increase visibility",
            "Track 'Reads' and 'Citations' on your papers to measure impact",
            "Researchers who view your profile are potential collaborators — reach out to them",
            "The 'Recommendations' feature suggests papers based on your interests",
        ],
        researchTip: "Upload your paper to ResearchGate immediately after publication. It often gets more reads there than on the journal website.",
    },

    "ORCID": {
        howToUse: [
            "Register at orcid.org to get your unique 16-digit researcher ID",
            "Link your publications by searching and claiming them",
            "Connect ORCID to your Google Scholar, Scopus, and journal accounts",
            "Include your ORCID in all paper submissions and grant applications",
        ],
        interpretOutput: [
            "Your ORCID profile becomes your verified academic identity across all platforms",
            "Linked publications are automatically verified — no more name confusion with other researchers",
            "Many journals now require ORCID during submission — having one ready saves time",
        ],
        researchTip: "Get your ORCID before your first publication. Include it in your email signature and all academic profiles.",
    },

    "LinkedIn": {
        howToUse: [
            "Create or update your LinkedIn profile with research focus",
            "Share your publications with a brief summary of key findings",
            "Follow and connect with researchers, professors, and industry professionals",
            "Join research groups and participate in discussions",
        ],
        interpretOutput: [
            "Post engagement (likes, comments) indicates interest in your research topic",
            "Connection suggestions may reveal researchers you didn't know about",
            "Industry connections can provide real-world validation for your research",
        ],
        researchTip: "Write a LinkedIn post summarizing your paper in plain language when it's published. This reaches audiences beyond academia and can lead to industry collaborations.",
    },

    "Twitter/X": {
        howToUse: [
            "Create an account and follow researchers using #AcademicTwitter",
            "Share your papers with a thread explaining key findings in simple language",
            "Engage with other researchers' work through thoughtful comments",
            "Use hashtags relevant to your field for discoverability",
        ],
        interpretOutput: [
            "Retweets and likes indicate community interest in your topic",
            "Threads that get high engagement can significantly boost paper downloads",
            "Follow conference hashtags to stay updated on the latest presentations",
        ],
        researchTip: "A well-crafted Twitter thread about your paper can get more attention than the paper itself. Include a figure, the key finding, and a link.",
    },

    "Canva": {
        howToUse: [
            "Sign up free at canva.com",
            "Search templates for 'Research Poster,' 'Visual Abstract,' or 'Pitch Deck'",
            "Customize with your research data, figures, and findings",
            "Export as PDF for posters or PNG for social media sharing",
        ],
        interpretOutput: [
            "Visual abstracts get 7x more engagement on social media than text-only posts",
            "Keep the design clean — too many elements reduce readability",
            "Use your institution's color scheme for a professional look",
        ],
        researchTip: "Create a visual abstract for every paper you publish. Share it on ResearchGate, LinkedIn, and Twitter to maximize visibility.",
    },

    "Loom": {
        howToUse: [
            "Sign up free at loom.com and install the browser extension",
            "Record a 3-5 minute video explaining your paper's key contribution",
            "Share your screen to walk through figures and results",
            "Share the video link on your paper's ResearchGate page and social media",
        ],
        interpretOutput: [
            "View count shows how many people watched your explanation",
            "Comments may contain valuable feedback or collaboration offers",
            "Videos under 5 minutes get the most complete views",
        ],
        researchTip: "A video abstract makes your research accessible to non-experts and increases citations. Many conferences now accept video presentations.",
    },

    "GitHub": {
        howToUse: [
            "Create a free account at github.com",
            "Create a repository for your research project with a clear README",
            "Upload your code, datasets (if shareable), and documentation",
            "Add a LICENSE file (MIT or Apache 2.0 for open research)",
            "Link the repository in your paper's 'Data Availability' section",
        ],
        interpretOutput: [
            "Stars indicate community interest in your research code",
            "Issues and pull requests show active engagement",
            "Forks mean other researchers are building on your work — great for citations",
            "A well-documented repository increases reproducibility and trust in your results",
        ],
        researchTip: "Papers with linked GitHub repositories get significantly more citations. Make your code reproducible with clear instructions and sample data.",
    },

    "Zenodo": {
        howToUse: [
            "Visit zenodo.org and sign in with your GitHub or ORCID account",
            "Upload your dataset, code, or supplementary materials",
            "Zenodo assigns a DOI — making your data permanently citable",
            "Link the DOI in your paper's references or data availability statement",
        ],
        interpretOutput: [
            "The DOI is permanent — once assigned, your data is archived forever",
            "Download counts show how many researchers accessed your data",
            "Zenodo integrates with GitHub — you can auto-archive repository releases",
        ],
        researchTip: "Archive your research data on Zenodo before paper submission. Include the DOI in your paper — reviewers increasingly expect data availability.",
    },
    // ===== PROPOSAL & PLANNING =====
    "Gantt.io": {
        howToUse: [
            "Visit gantt.io and create a free project",
            "Add your research milestones as tasks with start and end dates",
            "Set dependencies between tasks (e.g., 'Data Collection' must finish before 'Analysis')",
            "Export the Gantt chart as an image for your research proposal",
        ],
        interpretOutput: [
            "The critical path (longest chain of dependent tasks) determines your minimum project duration",
            "Tasks that can run in parallel should be identified to optimize your timeline",
            "Buffer time between milestones accounts for unexpected delays",
            "The visual timeline helps funding agencies understand your project plan",
        ],
        researchTip: "Include a Gantt chart in every research proposal. It shows you've thought through the timeline realistically — a key factor in funding decisions.",
    },

    "Google Forms": {
        howToUse: [
            "Create a form at forms.google.com",
            "Design survey questions to validate your research idea or collect user feedback",
            "Use a mix of multiple choice, Likert scale, and open-ended questions",
            "Share the link with your target audience and collect responses",
            "Analyze results in the built-in 'Responses' tab or export to Sheets",
        ],
        interpretOutput: [
            "Response rates below 10% may indicate poor survey design or wrong audience",
            "Look for patterns in open-ended responses — recurring themes validate your research direction",
            "Likert scale averages above 3.5/5 generally indicate positive reception",
            "Include survey methodology and response rates in your paper's methodology section",
        ],
        researchTip: "A survey with 50+ responses provides preliminary validation for your research idea. Include the results as 'preliminary data' in funding proposals.",
    },

    // ===== PROTOTYPING =====
    "Google Colab": {
        howToUse: [
            "Visit colab.research.google.com and sign in with Google",
            "Create a new notebook or open one from GitHub",
            "Select GPU runtime: Runtime → Change runtime type → T4 GPU (free)",
            "Write and run Python code in cells — results appear inline",
            "Save notebooks to Google Drive for persistence",
        ],
        interpretOutput: [
            "GPU sessions are limited to ~12 hours — save checkpoints regularly",
            "If your model training is interrupted, resume from the last checkpoint",
            "Memory errors mean your model/data is too large — reduce batch size or use data generators",
            "Share notebook links for reproducibility — anyone can run your code",
        ],
        researchTip: "Google Colab is sufficient for most undergraduate research experiments. Include the Colab notebook link in your paper for reproducibility.",
    },

    "Kaggle": {
        howToUse: [
            "Sign up at kaggle.com",
            "Search 'Datasets' for data relevant to your research topic",
            "Use 'Notebooks' to see how others analyzed similar data",
            "Create your own notebook with 30 hours/week of free GPU",
            "Enter competitions to benchmark your methods against others",
        ],
        interpretOutput: [
            "Dataset descriptions include size, format, and license — check license before using in research",
            "Public notebooks show state-of-the-art approaches — learn from them but don't copy",
            "Competition leaderboards show how your method compares to others — useful for your results section",
            "Cite the dataset properly using the citation provided on the dataset page",
        ],
        researchTip: "Kaggle datasets are great for benchmarking. Using a well-known Kaggle dataset makes your results comparable to other published work.",
    },

    "Hugging Face": {
        howToUse: [
            "Visit huggingface.co and explore the Model Hub",
            "Search for pre-trained models relevant to your task (NLP, CV, Audio)",
            "Use the 'Inference API' to test models without any code",
            "Clone models to Google Colab for fine-tuning on your data",
            "Deploy demos using Hugging Face Spaces (free)",
        ],
        interpretOutput: [
            "Model cards describe capabilities and limitations — read them before using",
            "Benchmark scores on the model card show expected performance",
            "Community discussions reveal known issues and best practices",
            "License information determines if you can use the model in your research",
        ],
        researchTip: "Fine-tuning a pre-trained Hugging Face model on your specific dataset is often more effective than training from scratch — and it's a valid research contribution.",
    },

    "Streamlit": {
        howToUse: [
            "Install with: pip install streamlit",
            "Create a Python file with your demo interface using Streamlit widgets",
            "Run locally with: streamlit run app.py",
            "Deploy free on Streamlit Cloud by connecting your GitHub repository",
        ],
        interpretOutput: [
            "User interactions with your demo provide qualitative validation of your research",
            "Deploy the demo and share the link in your paper for interactive results",
            "Viewer analytics show how many people tried your demo",
        ],
        researchTip: "A live Streamlit demo of your research makes your paper stand out. Include the demo URL in your paper — reviewers love interactive results.",
    },

    "Figma": {
        howToUse: [
            "Sign up free at figma.com",
            "Create wireframes and UI mockups for your research prototype",
            "Use the prototyping feature to create clickable demos",
            "Share the prototype link for user testing and feedback",
        ],
        interpretOutput: [
            "User feedback on prototypes validates your design before building",
            "Heatmaps and click data show which features users find most useful",
            "Iterate on the design based on feedback before coding the final version",
        ],
        researchTip: "Design your prototype in Figma before coding. User testing on a Figma prototype is faster and cheaper than testing on a coded version.",
    },
    // ===== STARTUP & IP =====
    "Lean Canvas (Leanstack)": {
        howToUse: [
            "Visit leanstack.com and create a free Lean Canvas",
            "Fill in the 9 blocks: Problem, Solution, Key Metrics, Unique Value Proposition, Unfair Advantage, Channels, Customer Segments, Cost Structure, Revenue Streams",
            "Start with 'Problem' and 'Customer Segments' — these come from your research",
            "Iterate the canvas as you learn more from user validation",
        ],
        interpretOutput: [
            "If you struggle to fill 'Unique Value Proposition,' your research may not have clear commercial value yet",
            "Empty 'Revenue Streams' means you need to think about monetization before seeking funding",
            "The canvas should fit on one page — if it doesn't, your idea needs simplification",
        ],
        researchTip: "Your research paper's 'Contribution' section maps directly to the Lean Canvas 'Unique Value Proposition.' Use the same language.",
    },

    "Indian Patent Search (IPIndia)": {
        howToUse: [
            "Visit ipindia.gov.in and click 'Patent Search'",
            "Search by keyword, applicant name, or patent number",
            "Review existing patents in your domain to ensure your invention is novel",
            "Check patent status: granted, pending, or expired",
        ],
        interpretOutput: [
            "If similar patents exist, your invention needs a clear differentiator",
            "Expired patents may indicate the technology is now in the public domain",
            "Pending patents show active innovation in your area — both competition and validation",
            "Note the claims section — this defines what the patent actually protects",
        ],
        researchTip: "Search patents BEFORE filing. If a similar patent exists, you'll need to clearly articulate how your invention differs in the claims.",
    },

    "Startup India Portal": {
        howToUse: [
            "Visit startupindia.gov.in and register your startup idea",
            "Explore available schemes: tax benefits, funding, mentorship",
            "Apply for DPIIT recognition for government benefits",
            "Browse the 'Learning Program' for free entrepreneurship courses",
        ],
        interpretOutput: [
            "DPIIT recognition unlocks tax benefits and easier compliance",
            "The 'Fund of Funds' provides indirect funding through SEBI-registered funds",
            "State-specific schemes may offer additional benefits — check your state's startup policy",
        ],
        researchTip: "Register on Startup India even at the idea stage. The learning resources and networking opportunities are valuable long before you need funding.",
    },
};

// Helper function to get instructions for a tool
export function getToolInstructions(toolName: string): ToolInstruction | null {
    return instructions[toolName] || null;
}

export default instructions;
