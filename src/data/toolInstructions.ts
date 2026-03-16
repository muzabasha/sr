export interface ToolInstruction {
    howToUse: string[];
    interpretOutput: string[];
    researchTip: string;
    dos: string[];
    donts: string[];
}

const instructions: Record<string, ToolInstruction> = {
    // ===== MODULE 1 & 2: MINDSET & DOMAIN TOOLS =====
    "ChatGPT (Free)": {
        howToUse: [
            "Go to chat.openai.com → Click 'Sign up' → Use your Google or email account (completely free)",
            "Once logged in, click 'New chat' in the top-left corner to start a fresh conversation",
            "Always set context first. Type: 'I am an undergraduate student researching [your topic]. I need help with [specific task].' This gives the AI context to provide relevant answers",
            "Ask specific, focused questions. Example: 'What are 5 open research problems in fall detection using wearable sensors published after 2022?' — NOT 'Tell me about healthcare AI'",
            "Use follow-up prompts to dig deeper: 'Explain point 3 in more detail with real-world examples' or 'Give me the pros and cons of approach 2'",
            "Copy useful outputs into your personal notes app (Notion, Google Docs) — NEVER paste AI text directly into your research paper",
            "If the response is too generic, add constraints: 'Focus only on deep learning methods' or 'Compare only papers from IEEE and ACM'",
        ],
        interpretOutput: [
            "AI responses are starting points for exploration, NOT verified facts. Example: If ChatGPT says 'Smith et al. (2023) proposed a novel method...', search for that exact paper on Google Scholar — it may not exist",
            "When it lists paper titles or author names, verify each one individually. ChatGPT sometimes generates plausible-sounding but fake references (called 'hallucinations')",
            "Look for patterns across multiple responses rather than trusting a single answer. Ask the same question 2-3 different ways and see what's consistent",
            "When it says 'studies show...' or 'research indicates...' without specific citations, ask: 'Which specific studies? Give me exact paper titles, authors, and publication years'",
            "Confident-sounding responses can still be wrong. If ChatGPT says 'This method achieves 98% accuracy', verify the actual number from the original paper",
            "Use the response as a roadmap: it tells you WHAT to search for, not WHAT to write. Example: If it mentions 'transfer learning for medical imaging', go search that term on Google Scholar",
        ],
        researchTip: "Use ChatGPT as a brainstorming partner and concept explainer. After every conversation, write YOUR OWN understanding in your own words — that's what goes in your paper. The AI helps you think; you do the writing.",
        dos: [
            "✅ DO: Use it to brainstorm research directions. Example: 'Suggest 5 unexplored angles in sentiment analysis for regional Indian languages'",
            "✅ DO: Use it to understand complex concepts. Example: 'Explain transformer architecture like I'm a first-year undergraduate'",
            "✅ DO: Use it to improve your writing. Example: 'Rewrite this paragraph to be more formal and academic: [your text]' — then edit the result in your own voice",
            "✅ DO: Always verify every claim, reference, and statistic it provides by checking Google Scholar or the original source",
            "✅ DO: Mention in your paper's methodology if you used AI for brainstorming (transparency is ethical)",
        ],
        donts: [
            "❌ DON'T: Copy-paste AI-generated text into your paper. Example: If ChatGPT writes 'Deep learning has revolutionized healthcare...', do NOT put that sentence in your paper — write your own version",
            "❌ DON'T: Trust AI-generated references. Example: ChatGPT might say 'See Kumar et al., 2023, IEEE Trans.' — this paper may not exist at all",
            "❌ DON'T: Use it as your only research source. Example: Don't write a literature review based solely on what ChatGPT tells you — use Google Scholar, Scopus, IEEE Xplore",
            "❌ DON'T: Ask it to write your abstract, introduction, or any section of your paper. This is academic dishonesty",
            "❌ DON'T: Assume the AI knows the latest research. Its training data has a cutoff date and may miss recent papers",
        ],
    },

    "Google Gemini": {
        howToUse: [
            "Go to gemini.google.com → Sign in with your Google account (free with any Gmail)",
            "Start with a broad domain overview: Type 'Give me a research landscape overview of [your topic] with developments from 2023-2024'",
            "Use it to compare research areas: 'Compare research opportunities in [Area A] vs [Area B] for an undergraduate beginner — include key challenges, available datasets, and active research groups'",
            "Ask for structured outputs: 'Create a table comparing 5 research sub-areas in [domain] with columns: Sub-area, Key Challenge, Popular Methods, Top Conferences, Beginner Friendliness'",
            "Gemini can access the web, so ask about recent events: 'What were the trending research topics at [Conference Name] 2024?'",
            "Use the 'Google it' button that appears alongside responses to verify claims directly in Google Search",
        ],
        interpretOutput: [
            "Gemini has web access so its information may be more current than ChatGPT — but still verify dates, claims, and paper titles on Google Scholar",
            "When it mentions specific researchers or labs (e.g., 'Prof. X at MIT works on this'), note them down for your expert-finding phase in Module 9",
            "If it lists 'emerging trends', cross-check on Google Scholar to see actual publication volume. Example: If it says 'federated learning is emerging', search 'federated learning' on Scholar and check if papers are increasing year-over-year",
            "Pay attention to areas it marks as 'under-explored' or 'limited research' — these may have genuine research gaps you can investigate",
            "When Gemini provides links, click and verify them. Sometimes the links are real but the summary of the linked page may be inaccurate",
        ],
        researchTip: "Gemini's web access makes it uniquely useful for discovering recent trends. Use it early in your journey to map the research landscape, then switch to academic databases (Google Scholar, Scopus) for depth and rigor.",
        dos: [
            "✅ DO: Use it to get a quick overview of a new research domain. Example: 'What are the main research challenges in autonomous vehicles in 2024?'",
            "✅ DO: Use the web-grounded responses to find recent conference papers and workshops. Example: 'What papers on [topic] were presented at CVPR 2024?'",
            "✅ DO: Ask it to explain the difference between similar concepts. Example: 'What is the difference between federated learning and distributed learning? Give examples'",
            "✅ DO: Cross-verify its claims using the 'Google it' feature or by searching on Scholar",
        ],
        donts: [
            "❌ DON'T: Rely on Gemini's web results as your literature review. Example: Don't say 'According to Gemini, there are 5 papers on this topic' — search databases yourself",
            "❌ DON'T: Assume web-grounded means 100% accurate. Example: It might summarize a webpage incorrectly or cite an outdated version",
            "❌ DON'T: Use Gemini-generated text as your own writing. Even if it sounds academic, it's not YOUR analysis",
            "❌ DON'T: Skip verifying researcher names and affiliations it mentions — they could be outdated or incorrect",
        ],
    },

    "Perplexity AI": {
        howToUse: [
            "Go to perplexity.ai — you can use it immediately without creating an account (basic use is free)",
            "Type your research question naturally, like asking a knowledgeable friend: 'What are the latest breakthroughs in natural language processing for low-resource languages?'",
            "Click the 'Focus' dropdown at the top and select 'Academic' — this filters results to scholarly sources like papers and journals",
            "After getting results, click the numbered citation links [1], [2], [3] in the response to see the actual source papers and websites",
            "Use follow-up questions in the same thread: 'Which of these methods works best for Hindi language?' or 'Show me papers from 2023 only'",
            "Click 'View Sources' to see all referenced URLs — bookmark the useful ones for your literature review",
        ],
        interpretOutput: [
            "The numbered citations [1], [2], [3] are real links to actual sources — this is Perplexity's biggest advantage over ChatGPT. Always click them to verify",
            "In 'Academic' mode, sources come from Semantic Scholar's database of 200M+ papers. The citation count shown helps you gauge paper importance",
            "If a response has few citations, the topic may be too niche or too new. Try broadening your search terms",
            "The 'Related' questions at the bottom are AI-suggested follow-ups — they often reveal angles you hadn't considered for your research",
            "Pay attention to the publication dates of cited sources. If all citations are old (pre-2020), the field may have moved on — search for newer work separately",
        ],
        researchTip: "Perplexity is the best AI tool for initial literature discovery because it cites real sources. Use it to find your first 10-15 papers, then deep-dive into each using Google Scholar's 'Cited by' feature.",
        dos: [
            "✅ DO: Use 'Academic' focus mode for research queries. Example: Search 'federated learning privacy healthcare' in Academic mode to get paper-backed answers",
            "✅ DO: Click every citation link to read the original source. Example: If it cites [3] for a claim, open [3] and verify the claim matches",
            "✅ DO: Use it as a starting point to build your reading list. Example: Collect all cited papers from 3-4 Perplexity searches into your Zotero library",
            "✅ DO: Use the 'Related' questions to discover sub-topics you might have missed",
        ],
        donts: [
            "❌ DON'T: Cite Perplexity itself as a source in your paper. Example: Never write 'According to Perplexity AI...' — cite the original paper it referenced",
            "❌ DON'T: Assume all cited sources are high-quality. Example: A cited blog post is not the same as a cited IEEE paper — check the source type",
            "❌ DON'T: Copy the AI-generated summary as your literature review. The summary is a starting point, not finished academic writing",
            "❌ DON'T: Ignore sources that contradict the main answer — contradictions often reveal research gaps",
        ],
    },

    "Research Interest Profiler": {
        howToUse: [
            "This is the built-in self-assessment tool in Module 1 of this application",
            "Answer all questions honestly about your interests, strengths, and what excites you",
            "Review the suggested research domains and pick 2-3 that genuinely interest you",
            "Use the results as a starting point — explore each suggested domain on Google Scholar for 15 minutes before deciding",
        ],
        interpretOutput: [
            "The profiler suggests domains based on your stated interests — it's a guide, not a mandate. You can always change direction later",
            "If multiple domains interest you equally, look for intersections. Example: If both 'AI' and 'Healthcare' score high, consider 'AI in Healthcare'",
            "Low scores in a domain don't mean you can't research it — they mean you might need more foundational learning first",
        ],
        researchTip: "Take the profiler seriously but don't let it limit you. The best research often happens at the intersection of two domains you're curious about.",
        dos: [
            "✅ DO: Answer honestly based on genuine interest, not what sounds impressive. Example: If you love gaming, 'AI in Game Design' is a valid research area",
            "✅ DO: Explore the top 3 suggested domains before committing. Spend 30 minutes reading about each on Google Scholar",
            "✅ DO: Discuss results with your advisor or mentor for guidance",
        ],
        donts: [
            "❌ DON'T: Pick a domain just because it's trendy. Example: Don't choose 'Blockchain' if you have zero interest in it — passion sustains long research projects",
            "❌ DON'T: Ignore domains that seem 'too simple'. Example: 'Usability studies' may sound basic but has deep research potential",
            "❌ DON'T: Treat the profiler result as final — it's a starting point for exploration, not a binding decision",
        ],
    },

    "Research Topic Generator": {
        howToUse: [
            "This is the built-in interactive tool in Module 2 of this application",
            "Enter your broad interest area (e.g., 'elderly care', 'cybersecurity', 'agriculture')",
            "The tool converts your curiosity into structured research topics with domain, method, and application",
            "Review all generated topics and pick 2-3 that feel both interesting and feasible for your level",
        ],
        interpretOutput: [
            "Generated topics follow the pattern: Curiosity → Domain → Specific Research Question. Example: 'Why do elderly people fall?' → Healthcare AI → 'Fall Detection using Wearable Sensors with Deep Learning'",
            "Topics marked as 'beginner-friendly' use well-established methods with available datasets — good for first-time researchers",
            "Topics marked as 'advanced' may require specialized equipment, large datasets, or deep domain knowledge",
        ],
        researchTip: "A good research topic is specific enough to be achievable in 6-12 months but broad enough to have sufficient literature. If you can't find at least 20 papers on your topic, it might be too niche.",
        dos: [
            "✅ DO: Start with a genuine curiosity or problem you've observed. Example: 'I noticed my grandmother struggles with her medication schedule' → AI-based medication reminder systems",
            "✅ DO: Validate the generated topic by searching it on Google Scholar. If you find 20-50 papers, it's a good scope",
            "✅ DO: Refine the topic iteratively. Example: 'Fall detection' → 'Fall detection for elderly' → 'Fall detection for elderly with hypertension using wearable IMU sensors'",
        ],
        donts: [
            "❌ DON'T: Pick a topic that's too broad. Example: 'Artificial Intelligence in Healthcare' is a field, not a research topic",
            "❌ DON'T: Pick a topic that's too narrow with no existing literature. Example: 'Using quantum computing for detecting rare tropical diseases in rural Karnataka' — likely no papers exist",
            "❌ DON'T: Choose a topic just because the AI suggested it. Validate it with your advisor and existing literature first",
        ],
    },

    // ===== MODULE 3: ETHICS TOOLS =====
    "AI Ethics Simulator": {
        howToUse: [
            "This is the built-in ethics simulation tool in Module 3 of this application",
            "Read each scenario carefully — they present real ethical dilemmas researchers face when using AI",
            "Choose your response at each decision point. There's no single 'right' answer, but some choices are more ethical than others",
            "After completing a scenario, review the feedback explaining why certain choices are more ethical",
            "Repeat scenarios with different choices to understand the full range of ethical implications",
        ],
        interpretOutput: [
            "A high ethics score means your instincts align with responsible research practices — but always reflect on WHY a choice is ethical, not just that it scored well",
            "Scenarios where you scored low highlight areas where you need more awareness. Example: If you scored low on 'data privacy', read more about informed consent and GDPR",
            "The feedback after each choice explains the ethical principle involved (e.g., transparency, attribution, consent). Note these principles for your own research",
            "Real research ethics are more nuanced than any simulation — use this as a foundation, then consult your institution's ethics committee for actual research",
        ],
        researchTip: "Complete this simulator before starting any research involving human data, surveys, or AI-generated content. Understanding ethics early prevents serious problems later.",
        dos: [
            "✅ DO: Always disclose when you've used AI tools in your research. Example: Add a statement like 'ChatGPT was used for initial brainstorming of research directions. All content was independently verified and written by the authors'",
            "✅ DO: Get ethics committee approval before collecting any human data. Example: Even a simple survey needs IRB/ethics clearance at most universities",
            "✅ DO: Cite AI tools properly. Example: 'OpenAI. (2024). ChatGPT [Large language model]. https://chat.openai.com'",
        ],
        donts: [
            "❌ DON'T: Submit AI-generated text as your own writing. Example: If ChatGPT writes your abstract, that's plagiarism even if no human wrote the original",
            "❌ DON'T: Generate fake data using AI. Example: Using ChatGPT to create survey responses or experimental results is research fraud",
            "❌ DON'T: Use AI to fabricate references. Example: If ChatGPT invents 'Kumar et al., 2023, Nature' and you cite it, that's academic misconduct",
            "❌ DON'T: Ignore your institution's AI usage policy. Many universities now have specific guidelines — read them before starting",
        ],
    },

    // ===== MODULE 4: SEARCH TOOLS =====
    "Google Scholar": {
        howToUse: [
            "Go to scholar.google.com — no account needed, but signing in with Google lets you save papers to 'My Library'",
            "Type your research topic in the search bar. Start broad, then narrow down. Example: First search 'fall detection wearable sensors', then refine to 'fall detection IMU deep learning elderly 2023'",
            "Use search operators for precision: Put exact phrases in quotes (\"transfer learning\"), use OR for alternatives (CNN OR ResNet), use minus to exclude (-survey to skip review papers)",
            "Click 'Cited by X' under any paper to find newer papers that built on it — this is called forward citation tracking and is essential for finding recent work",
            "Click the '📋' icon (Cite) under any paper to get the citation in APA, MLA, IEEE, or BibTeX format for your reference manager",
            "Set up email alerts: Search your topic → click the envelope icon (📧) on the left sidebar → get notified when new papers are published on your topic",
            "Use 'Since 2022' or 'Since 2023' filter on the left sidebar to find only recent papers",
        ],
        interpretOutput: [
            "Citation count matters but context matters more. A paper with 500 citations from 2015 is foundational; a paper with 10 citations from 2024 might be cutting-edge. Both are valuable",
            "The [PDF] link on the right means free full-text is available. If no PDF link, try searching the paper title + 'PDF' or check your university library access",
            "Papers from arxiv.org in results are preprints (not peer-reviewed). They're useful for latest research but cite the published version when available",
            "The 'All versions' link shows the same paper across different repositories — useful for finding free versions of paywalled papers",
            "If your search returns millions of results, your query is too broad. Add more specific terms. If it returns <100 results, your query might be too narrow — try removing some terms",
            "The 'Related articles' link under each paper helps you discover papers you might have missed in your search",
        ],
        researchTip: "Master the 'Cited by' feature — it's the most powerful tool in Google Scholar. Start with one good paper, click 'Cited by', and you'll find an entire research lineage. This is how experienced researchers build their literature review.",
        dos: [
            "✅ DO: Use 'Cited by' to trace research lineage. Example: Find a seminal 2018 paper on BERT → Click 'Cited by 50,000+' → Filter by 2023-2024 → Find the latest applications of BERT in your domain",
            "✅ DO: Save important papers to 'My Library' with labels. Example: Create labels like 'Methodology', 'Baseline', 'Dataset' to organize your reading list",
            "✅ DO: Set up email alerts for your research topic. Example: Alert for 'federated learning healthcare privacy' sends you new papers weekly",
            "✅ DO: Use advanced search (click ≡ menu → Advanced search) to filter by author, journal, or date range",
        ],
        donts: [
            "❌ DON'T: Only read the first page of results. Example: Important papers might appear on page 2-3 because they use different terminology for the same concept",
            "❌ DON'T: Judge a paper solely by citation count. Example: A 2024 paper with 5 citations may be more relevant than a 2015 paper with 500 citations",
            "❌ DON'T: Ignore the 'Related articles' feature. Example: Your search for 'object detection YOLO' might miss papers that use 'real-time recognition' instead",
            "❌ DON'T: Cite papers you haven't actually read. Example: Don't add a paper to your references just because it appeared in search results — read at least the abstract and conclusion",
        ],
    },

    "Scopus": {
        howToUse: [
            "Access via your university library portal (Scopus requires institutional subscription). Ask your librarian for access if you don't have it",
            "Log in → Enter your search terms in the 'Document search' tab. Example: Search 'fall detection AND wearable AND deep learning'",
            "Use the 'Refine results' panel on the left to filter by: Year (2022-2024), Document type (Article, Conference Paper), Subject area (Computer Science), Source (specific journal names)",
            "Click 'Analyze search results' to see publication trends — a bar chart showing papers per year helps you understand if the field is growing",
            "For any paper, click 'View references' to see what it cited, and 'Cited by' to see who cited it. This builds your citation network",
            "Export selected papers to your reference manager (Zotero, Mendeley) using the 'Export' button → Choose BibTeX or RIS format",
        ],
        interpretOutput: [
            "Scopus only indexes peer-reviewed journals and conferences — so every result has passed quality review, unlike Google Scholar which includes preprints and theses",
            "The 'CiteScore' shown for journals indicates average citations per document. Higher CiteScore = more impactful journal. Example: CiteScore of 10+ is excellent",
            "The 'h-index' shown for authors tells you their research impact. Example: An h-index of 20 means the author has 20 papers each cited at least 20 times",
            "If 'Analyze results' shows increasing publications per year, the field is active and growing — good for your research. Declining trends may mean the field is maturing",
            "The 'Subject area' filter helps you find interdisciplinary papers. Example: A paper on 'AI in Healthcare' might be indexed under both Computer Science AND Medicine",
        ],
        researchTip: "Scopus is the gold standard for systematic literature reviews. If your university has access, use Scopus for your final literature search — reviewers trust Scopus-indexed papers more than random web sources.",
        dos: [
            "✅ DO: Use Boolean operators for precise searches. Example: '(deep learning OR machine learning) AND (fall detection) AND (elderly OR geriatric)' gives targeted results",
            "✅ DO: Use 'Analyze search results' to identify top authors, institutions, and journals in your field. This helps you find experts (Module 9) and venues (Module 11)",
            "✅ DO: Export your search query and results for reproducibility. Example: Save the exact search string and date so you can repeat it later",
        ],
        donts: [
            "❌ DON'T: Rely only on Scopus — it doesn't index all conferences and some open-access journals. Example: Many good IEEE workshop papers aren't in Scopus",
            "❌ DON'T: Ignore conference papers. Example: In Computer Science, top conference papers (CVPR, NeurIPS, AAAI) are often more impactful than journal papers",
            "❌ DON'T: Search with too many terms at once. Example: 'deep learning CNN LSTM transformer fall detection elderly wearable IoT healthcare' will return almost nothing — simplify",
        ],
    },

    "IEEE Xplore": {
        howToUse: [
            "Go to ieeexplore.ieee.org — some papers are free, others need university library access. Check if your institution has an IEEE subscription",
            "Use the search bar with your topic. Example: 'fall detection wearable sensors' → Then use 'Filters' on the left to narrow by year, conference, or journal",
            "For conference papers, browse by conference name. Example: Click 'Browse Conferences' → Search 'CVPR' or 'AAAI' → Browse papers from the latest edition",
            "Click 'Command Search' for advanced queries using Boolean operators: Example: ('deep learning' AND 'medical imaging') NOT 'survey'",
            "Download papers as PDF. If paywalled, check if a preprint version exists on arXiv by searching the paper title there",
            "Use 'IEEE Author' profiles to find all papers by a specific researcher in your domain",
        ],
        interpretOutput: [
            "IEEE papers are peer-reviewed and high quality. Conference papers from IEEE flagship events (CVPR, ICCV, ICRA) are considered top-tier in Computer Science",
            "The 'Accesses' count shows how many people viewed the paper — high access count means the topic is popular",
            "Papers marked 'Open Access' are free to read and download. Others require subscription — use your university VPN or library proxy",
            "Check the 'References' section of each paper to find foundational work, and 'Cited by' to find follow-up research",
            "IEEE Early Access papers are accepted but not yet assigned to a specific issue — they're the newest published work in your field",
        ],
        researchTip: "If you're in Computer Science or Electrical Engineering, IEEE Xplore is your primary database. Start here for finding baseline methods and benchmark datasets in your domain.",
        dos: [
            "✅ DO: Check IEEE Early Access for the very latest accepted papers. Example: A paper accepted to IEEE Trans. on Neural Networks today might not appear in Scopus for months",
            "✅ DO: Use IEEE's conference proceedings to find cutting-edge work. Example: CVPR 2024 papers represent the latest in computer vision",
            "✅ DO: Download the BibTeX citation for each paper you plan to reference — it saves time when writing in LaTeX/Overleaf",
        ],
        donts: [
            "❌ DON'T: Ignore the 'Filters' panel. Example: Without filtering by year, you might read outdated 2010 papers when 2024 versions exist",
            "❌ DON'T: Only search IEEE if your field spans multiple domains. Example: For 'AI in Agriculture', also check ACM Digital Library, Springer, and domain-specific databases",
            "❌ DON'T: Download papers illegally from pirate sites. Use your university library access, interlibrary loan, or email the author directly for a copy",
        ],
    },

    "PubMed": {
        howToUse: [
            "Go to pubmed.ncbi.nlm.nih.gov — completely free, no account needed (but creating one lets you save searches)",
            "Search using medical/health terms. Example: 'fall detection elderly wearable sensor' → Results are from biomedical and life science journals",
            "Use MeSH (Medical Subject Headings) for precise searches: Click 'MeSH Database' in the top menu → Search your term → Find the standardized medical term → Use it in your search",
            "Filter results using the sidebar: Article type (Review, Clinical Trial), Publication date, Species (Human), Language (English), Free full text",
            "Use the 'Similar Articles' feature on any paper's page to find related work you might have missed",
            "Save searches and set up email alerts: Click 'Save' → Choose 'Save search' → Set frequency for email alerts when new papers match your query",
        ],
        interpretOutput: [
            "PubMed IDs (PMIDs) are unique identifiers — use them for precise referencing. Example: PMID 12345678 always refers to the same paper, unlike titles which can be ambiguous",
            "Papers marked 'Free PMC article' have full text available at no cost through PubMed Central. Click the link to read the complete paper",
            "Review articles (filter by 'Article type: Review') are excellent starting points for your literature review — they summarize dozens of papers in one place",
            "Check the 'MeSH Terms' section at the bottom of any paper's page to discover standardized keywords. Using these in your search gives more precise results",
            "The 'Cited by' section in PubMed Central shows papers that referenced this work — essential for forward citation tracking",
        ],
        researchTip: "If your research involves any health, biomedical, or life science component, PubMed is mandatory. Reviewers in health-related fields expect PubMed-indexed references in your bibliography.",
        dos: [
            "✅ DO: Use MeSH terms for precise medical searches. Example: Instead of 'heart attack', use the MeSH term 'Myocardial Infarction' for comprehensive results",
            "✅ DO: Filter for 'Free Full Text' when building your initial reading list. Example: This gives you papers you can read immediately without library access",
            "✅ DO: Use PubMed's 'Clinical Queries' for evidence-based research. Example: If studying a medical intervention, use the clinical query filters for therapy, diagnosis, or prognosis",
        ],
        donts: [
            "❌ DON'T: Use PubMed for non-biomedical research. Example: Searching 'blockchain security' on PubMed will give poor results — use IEEE Xplore or ACM instead",
            "❌ DON'T: Ignore the MeSH database. Example: Searching 'cancer' gives millions of results; using the MeSH term 'Neoplasms' with specific subheadings gives focused results",
            "❌ DON'T: Skip review articles. Example: A systematic review on your topic saves you weeks of reading individual papers — start with reviews, then read the key papers they cite",
        ],
    },

    "arXiv": {
        howToUse: [
            "Go to arxiv.org — completely free, no account needed to read papers",
            "Search by keyword in the search bar, or browse by category. Example: For AI research, browse cs.AI (Artificial Intelligence), cs.CV (Computer Vision), cs.CL (Computation and Language)",
            "Sort results by 'Recent' to find the very latest research — arXiv papers often appear 6-12 months before the journal/conference version",
            "Check the 'Comments' field on each paper for conference acceptance info. Example: 'Accepted at NeurIPS 2024' means it's peer-reviewed despite being on arXiv",
            "Use arXiv Sanity (arxiv-sanity-lite.com) for AI-powered paper recommendations based on your reading history",
            "Subscribe to daily email digests for your categories: Click your category (e.g., cs.CV) → Click 'Subscribe' to get new papers daily",
        ],
        interpretOutput: [
            "arXiv papers are preprints — they are NOT peer-reviewed unless the 'Comments' field says otherwise. Treat them as preliminary findings until published in a venue",
            "Papers with version numbers like 'v2', 'v3' have been revised by the authors — always read the latest version (click 'v3' in the version history)",
            "High download counts suggest community interest but not necessarily quality. A paper with 1000 downloads might still have flawed methodology",
            "Check if the paper was later published in a conference or journal by searching the title on Google Scholar — cite the published version when available",
            "The 'Subjects' field shows which categories the paper belongs to. Cross-listed papers (e.g., cs.CV + cs.AI) often represent interdisciplinary work",
        ],
        researchTip: "arXiv gives you a 6-12 month head start on the latest research. But NEVER cite only arXiv preprints in your paper — always try to find and cite the published (peer-reviewed) version when available.",
        dos: [
            "✅ DO: Use arXiv to stay ahead of the curve. Example: A method posted on arXiv in January might not appear in a journal until December — you'll know about it first",
            "✅ DO: Check the 'Comments' field for peer-review status. Example: 'Accepted at ICML 2024' means it's been reviewed — you can cite the arXiv version with the conference reference",
            "✅ DO: Read the latest version (v2, v3) as authors often fix errors and add experiments based on community feedback",
        ],
        donts: [
            "❌ DON'T: Build your entire literature review on arXiv preprints. Example: A reviewer might reject your paper if most references are unreviewed preprints",
            "❌ DON'T: Assume arXiv papers are correct just because they're from a famous lab. Example: Even papers from Google or MIT on arXiv can have errors — they haven't been peer-reviewed yet",
            "❌ DON'T: Cite the arXiv version if a published version exists. Example: If 'Smith et al.' is on arXiv AND published in CVPR, cite the CVPR version",
        ],
    },

    // ===== MODULE 4 continued: MORE SEARCH TOOLS =====
    "CORE": {
        howToUse: [
            "Go to core.ac.uk — completely free, no account needed. CORE aggregates open-access papers from thousands of institutional repositories worldwide",
            "Search for your topic in the search bar. Example: 'machine learning crop disease detection'",
            "Use filters on the left to narrow by year, repository, and language",
            "Download full-text PDFs directly — all content on CORE is open access, meaning free to read and download",
            "Use the CORE API (core.ac.uk/services/api) for bulk searches if you need to download metadata for many papers at once (useful for systematic reviews)",
        ],
        interpretOutput: [
            "CORE aggregates from institutional repositories — quality varies widely. A PhD thesis from MIT is different from an undergraduate project report. Always check the source",
            "Check the source repository and original publication venue for quality assessment. Example: A paper from 'Oxford University Research Archive' is likely higher quality than an unknown repository",
            "Thesis and dissertation results can provide detailed methodology descriptions that journal papers often compress due to page limits — great for understanding methods in depth",
            "Use CORE when you hit paywalls on other databases — it often has open-access versions of papers that are paywalled on publisher websites",
        ],
        researchTip: "CORE is your backup when you hit paywalls. Many papers have open-access versions in institutional repositories that CORE indexes. Before paying for a paper, search its title on CORE.",
        dos: [
            "✅ DO: Use CORE to find free versions of paywalled papers. Example: A paper behind a $30 paywall on Springer might have a free version in the author's university repository on CORE",
            "✅ DO: Use thesis/dissertation results for detailed methodology understanding. Example: A PhD thesis on 'fall detection' will have 50+ pages of methodology detail that the 8-page journal paper summarizes",
            "✅ DO: Check the original publication venue of any paper you find on CORE before citing it",
        ],
        donts: [
            "❌ DON'T: Assume all CORE results are peer-reviewed. Example: Technical reports, working papers, and student projects also appear in CORE — verify the publication type",
            "❌ DON'T: Use CORE as your primary search database. Example: Use Google Scholar or Scopus first, then use CORE to find free PDFs of papers you've already identified",
            "❌ DON'T: Cite the CORE URL instead of the original publication. Example: Cite 'Published in IEEE Access, 2023' not 'Available on core.ac.uk'",
        ],
    },

    "Inciteful": {
        howToUse: [
            "Go to inciteful.xyz — free, no account needed",
            "Paste a paper's DOI (Digital Object Identifier) or title into the search box. Example: Paste '10.1109/CVPR.2023.12345' or the full paper title",
            "Choose 'Paper Discovery' to find related work starting from a single seed paper — it builds a citation network and shows you the most important connected papers",
            "Choose 'Literature Connector' to find papers that connect two different topics. Example: Enter a paper on 'deep learning' and another on 'agriculture' to find bridge papers",
            "Review the 'Most Important Papers' list — these are ranked by how central they are in the citation network, not just by citation count",
        ],
        interpretOutput: [
            "The 'Most Important Papers' list identifies foundational work you must read and cite. These are papers that many other papers in your area reference — missing them is a gap in your literature review",
            "The 'Literature Connector' results reveal interdisciplinary bridges — papers that connect two fields. These are great for finding novel research angles that combine domains",
            "Papers appearing as connectors between two fields often represent research gaps — if only a few papers connect two active fields, there's room for more work",
            "The network visualization shows how your topic relates to adjacent research areas. Clusters of papers represent sub-topics; gaps between clusters represent potential research opportunities",
        ],
        researchTip: "Use Inciteful's Literature Connector when your research spans two domains (e.g., AI + Healthcare). It finds the bridge papers that connect both fields — these are often the most innovative and citable papers.",
        dos: [
            "✅ DO: Start with your best paper and use 'Paper Discovery' to build outward. Example: If you found one great paper on your topic, Inciteful will find 20 more related ones",
            "✅ DO: Use 'Literature Connector' for interdisciplinary research. Example: Connect 'natural language processing' with 'mental health' to find NLP-based depression detection papers",
            "✅ DO: Pay attention to papers that appear in multiple searches — they're likely foundational to your field",
        ],
        donts: [
            "❌ DON'T: Skip the foundational papers it identifies. Example: If Inciteful says 'Paper X is central to this network', you must read it — reviewers will expect you to cite it",
            "❌ DON'T: Use only Inciteful for your literature search. Example: It's great for discovering connections but may miss very recent papers not yet in citation networks",
            "❌ DON'T: Ignore the network visualization. Example: Isolated papers (not connected to the main cluster) might be from a different sub-field — verify relevance before including",
        ],
    },

    "Scite.ai": {
        howToUse: [
            "Go to scite.ai — free tier available with limited searches per month. Sign up for more access",
            "Search for a paper title or topic in the search bar",
            "Look at the 'Smart Citation' counts for each paper: Supporting (green), Contrasting (red), Mentioning (gray). This tells you how other papers reference this work",
            "Click on 'Contrasting' citations to find papers that challenge or disagree with the findings — these are gold for identifying research gaps and debates",
            "Use the dashboard to see an overall picture of how a paper has been received by the scientific community",
        ],
        interpretOutput: [
            "High 'Supporting' citations (green) mean the findings are well-accepted by the community. Example: If a method has 50 supporting citations, it's likely reliable as a baseline",
            "Any 'Contrasting' citations (red) indicate active debate — investigate these papers carefully. Example: If 3 papers contradict a method's claimed accuracy, there's a research gap you can address",
            "Papers with mostly 'Mentioning' citations (gray) may not have been deeply engaged with — they're referenced but not tested or validated by others",
            "A paper with many contrasting citations might have methodology issues — read the contrasting papers to understand what went wrong and how you can improve upon it",
        ],
        researchTip: "Scite.ai is uniquely valuable for finding contradictions in the literature. Contradictions = research gaps = your opportunity. If two papers disagree on a method's effectiveness, that's a problem you can solve.",
        dos: [
            "✅ DO: Check contrasting citations for your baseline papers. Example: If you plan to use Method X as your baseline, check if other papers found problems with it — you might need a different baseline",
            "✅ DO: Use supporting citation counts to validate your chosen methodology. Example: A method with 30+ supporting citations is a safe choice for your baseline",
            "✅ DO: Look for papers with high 'Mentioning' but low 'Supporting' — they might be under-validated and worth investigating",
        ],
        donts: [
            "❌ DON'T: Ignore contrasting citations. Example: If you cite a paper claiming '95% accuracy' but 5 other papers show it only achieves 80%, your reviewer will notice",
            "❌ DON'T: Assume high citation count means the paper is correct. Example: A highly-cited paper might have many contrasting citations — check the breakdown",
            "❌ DON'T: Use Scite.ai as your only quality check. Example: Combine it with reading the actual papers and checking journal quality on Scimago",
        ],
    },

    // ===== MODULE 5: SHORTLISTING & REFERENCE MANAGEMENT =====
    "Zotero": {
        howToUse: [
            "Download free from zotero.org → Install the desktop app AND the browser connector extension (available for Chrome, Firefox, Edge)",
            "When you find a paper on Google Scholar, IEEE, or any website, click the Zotero icon in your browser toolbar — it automatically saves the paper with all metadata (title, authors, journal, year, DOI)",
            "Organize papers into collections (folders) by topic or module. Example: Create collections like 'Baseline Methods', 'Datasets', 'Related Work', 'Methodology References'",
            "To cite in your paper: In Word/Google Docs, use the Zotero plugin → Click 'Add Citation' → Search for the paper → It inserts the citation in your chosen format (IEEE, APA, etc.)",
            "Attach PDFs and add your own notes and tags to each paper. Example: Tag papers as 'must-cite', 'methodology', 'dataset', 'future-work' for easy filtering later",
            "Use 'Generate Bibliography' to create your complete reference list in one click — it formats everything automatically",
        ],
        interpretOutput: [
            "The metadata Zotero captures (title, authors, journal, year) should be verified for accuracy — sometimes it captures incomplete or incorrect information from web pages",
            "Use tags like 'methodology', 'dataset', 'baseline', 'gap' to categorize papers for your literature review. Example: When writing your lit review, filter by 'methodology' tag to find all method-related papers instantly",
            "The 'Related' feature helps you link papers that discuss similar topics. Example: Link all papers that use the same dataset so you can compare their results easily",
            "Export your collection as a bibliography in any format (IEEE, APA, BibTeX) to paste directly into your paper or Overleaf project",
        ],
        researchTip: "Start using Zotero from Day 1 of your research. Organizing papers early saves weeks of pain when writing your literature review. A well-organized Zotero library is a researcher's most valuable asset.",
        dos: [
            "✅ DO: Install the browser connector and save every paper you read. Example: Even if you're just skimming, save it — you might need it later and won't remember where you found it",
            "✅ DO: Add notes to each paper as you read. Example: After reading, add a note: 'Method: CNN + LSTM, Dataset: UCI HAR, Accuracy: 94.5%, Limitation: small dataset, only 30 subjects'",
            "✅ DO: Use collections to organize by research phase. Example: 'To Read' → 'Reading' → 'Read' → 'Will Cite' → 'Cited in Paper'",
            "✅ DO: Verify auto-captured metadata. Example: Check that the year, journal name, and author list are correct before citing",
        ],
        donts: [
            "❌ DON'T: Save papers without reading at least the abstract. Example: A library of 200 unread papers is useless — quality over quantity",
            "❌ DON'T: Forget to back up your Zotero library. Example: Use Zotero's free 300MB cloud sync or export your library periodically",
            "❌ DON'T: Manually type references when Zotero can auto-generate them. Example: Hand-typing IEEE references leads to formatting errors that cause desk rejection",
            "❌ DON'T: Mix up citation styles. Example: If your target journal uses IEEE format, don't accidentally include APA-formatted references — Zotero handles this automatically if configured correctly",
        ],
    },

    "Mendeley": {
        howToUse: [
            "Download from mendeley.com → Create a free account → Install the desktop app and Word/LibreOffice plugin",
            "Import PDFs by dragging them into the Mendeley library window — it automatically extracts metadata (title, authors, year) from the PDF",
            "Use the built-in PDF reader to highlight and annotate papers. Example: Highlight key findings in yellow, methodology in blue, and limitations in red for the 3-pass reading strategy",
            "Install the Word/LibreOffice plugin: In Word, go to References tab → Click 'Insert Citation' → Search for the paper → It adds the in-text citation and bibliography entry",
            "Use 'Groups' to collaborate with your research team. Example: Create a group called 'Fall Detection Project' and share papers with your co-authors",
        ],
        interpretOutput: [
            "Mendeley auto-extracts metadata from PDFs — always verify that title, authors, and year are correct. Example: Sometimes it captures the wrong year or misspells author names",
            "The 'Readership Statistics' show how popular a paper is among Mendeley users — high readership in your field suggests the paper is widely known",
            "Annotations and highlights sync across devices — useful for reading on tablet during commute and writing on laptop at home",
            "The 'Suggest' feature recommends papers based on your library — useful for discovering related work you might have missed",
        ],
        researchTip: "Mendeley's annotation feature is perfect for the 3-pass reading strategy. Highlight key findings in yellow, methodology in blue, and limitations in red. When writing your paper, these color-coded highlights save hours.",
        dos: [
            "✅ DO: Use color-coded highlights consistently. Example: Yellow = key finding, Blue = methodology, Red = limitation, Green = future work suggestion",
            "✅ DO: Verify auto-extracted metadata before citing. Example: Check that 'J. Smith' isn't actually 'J. Smyth' — small errors in references look unprofessional",
            "✅ DO: Use Groups for team collaboration. Example: Share your annotated papers with your advisor so they can see your reading progress",
        ],
        donts: [
            "❌ DON'T: Import hundreds of PDFs without organizing them. Example: Create folders like 'Survey Papers', 'Core Methods', 'Datasets' before bulk importing",
            "❌ DON'T: Rely solely on auto-extracted metadata. Example: If Mendeley extracts the wrong journal name, your citation will be incorrect — always verify",
            "❌ DON'T: Forget to sync before switching devices. Example: Annotations made on your laptop won't appear on your tablet until you sync",
        ],
    },

    // ===== MODULE 6: PAPER READING TOOLS =====
    "SciSpace (Typeset)": {
        howToUse: [
            "Go to typeset.io → Create a free account → Click 'Upload PDF' and upload any research paper",
            "Once uploaded, the AI Copilot chat appears on the right side. Start by asking: 'What is the main contribution of this paper?' to get a quick overview",
            "Highlight any confusing text in the paper and click 'Explain' — the AI will simplify it in plain language. Example: Highlight a complex equation and ask 'Explain this formula in simple terms'",
            "Ask specific extraction questions: 'Summarize the methodology in 3 bullet points', 'What datasets were used?', 'What are the reported accuracy numbers?', 'What are the limitations mentioned?'",
            "Use 'Compare Papers' to see differences between two papers side by side — upload both PDFs and ask 'What are the key differences in methodology between these two papers?'",
        ],
        interpretOutput: [
            "AI explanations simplify complex concepts but may lose important nuances — always re-read the original text after getting the AI explanation to catch details the AI missed",
            "The 'Key Findings' extraction is useful for building your comparison matrix (Module 7) but verify the numbers against the actual results tables in the paper",
            "If the AI explanation contradicts your understanding, trust the original paper and re-read carefully. The AI might misinterpret domain-specific terminology",
            "Use the extracted information as study notes and reading aids, never as direct content for your paper. Example: The AI summary helps you understand; you write your own analysis",
        ],
        researchTip: "SciSpace is ideal for Pass 1 (quick scan) and Pass 2 (detailed reading) of the 3-pass reading strategy. Use it to quickly understand a paper, then do Pass 3 (deep critical reading) without AI assistance to form your own opinions.",
        dos: [
            "✅ DO: Use it to quickly screen papers during shortlisting. Example: Upload 10 papers, ask 'What is the main method and result?' for each — this helps you decide which 5 to deep-read",
            "✅ DO: Use the 'Explain' feature for mathematical equations. Example: Highlight the loss function formula and ask 'Explain this loss function and why it's used here'",
            "✅ DO: Cross-verify extracted numbers with the original tables. Example: If SciSpace says 'accuracy is 94%', find the actual results table and confirm",
        ],
        donts: [
            "❌ DON'T: Use AI summaries as your literature review text. Example: Don't copy 'SciSpace says this paper proposes...' into your paper — write your own critical analysis",
            "❌ DON'T: Skip reading the methodology section yourself. Example: SciSpace might say 'they used a CNN' but miss that they used a specific variant with custom modifications",
            "❌ DON'T: Trust AI explanations of domain-specific terms blindly. Example: In medical AI, 'sensitivity' has a specific statistical meaning that the AI might oversimplify",
        ],
    },

    "Explainpaper": {
        howToUse: [
            "Go to explainpaper.com → Upload a research paper PDF (free tier available)",
            "Read through the paper normally. When you encounter a confusing sentence, paragraph, or equation, highlight it with your cursor",
            "The AI will immediately explain the highlighted text in simpler language. Example: Highlight 'We employ a multi-head self-attention mechanism with positional encoding' → AI explains what each part means",
            "Ask follow-up questions for deeper understanding. Example: After the explanation, ask 'Why is positional encoding necessary?' or 'What happens without multi-head attention?'",
        ],
        interpretOutput: [
            "Explanations are simplified — they may omit important technical details that matter for your research. Use them to build initial understanding, then read the original again",
            "If the explanation doesn't make sense, the original text might be poorly written (this is common in papers). Try asking 'Rephrase this in a different way'",
            "Use explanations to build your understanding, then write your own interpretation in your notes. Example: After reading the AI explanation, close it and write what YOU understood",
            "Compare AI explanations with textbook definitions for accuracy. Example: If the AI explains 'backpropagation', verify against your deep learning textbook",
        ],
        researchTip: "Explainpaper is best for understanding mathematical formulas and technical jargon. Highlight the equation, get the explanation, then try to explain it yourself without looking — that's how you truly learn it.",
        dos: [
            "✅ DO: Use it for equations and formulas you don't understand. Example: Highlight the attention score formula Q·K^T/√d_k and get a step-by-step explanation",
            "✅ DO: Write your own notes after reading the AI explanation. Example: 'I now understand that attention mechanism works like a search engine — Query finds relevant Keys to retrieve Values'",
            "✅ DO: Use it alongside your textbook for cross-verification",
        ],
        donts: [
            "❌ DON'T: Highlight the entire paper and read only AI explanations. Example: You need to develop your own reading skills — use AI for difficult parts only",
            "❌ DON'T: Copy AI explanations into your paper. Example: 'As explained by Explainpaper, the attention mechanism...' is not acceptable academic writing",
            "❌ DON'T: Assume simplified explanations capture all nuances. Example: The AI might explain 'dropout' as 'randomly removing neurons' but miss the regularization theory behind it",
        ],
    },

    "ChatPDF": {
        howToUse: [
            "Go to chatpdf.com → Upload a research paper PDF (free tier: 2 PDFs per day, 50 pages max)",
            "Start with broad questions: 'Summarize this paper in 5 bullet points' to get an overview",
            "Then ask specific extraction questions: 'What method did they use?', 'What were the limitations?', 'What datasets were used?', 'What accuracy did they achieve?'",
            "Ask research-gap questions: 'What research gap does this paper identify for future work?' and 'What limitations do the authors acknowledge?'",
            "For comparison: Upload two papers on different days and ask the same questions to both — compile answers in your comparison matrix",
        ],
        interpretOutput: [
            "ChatPDF answers are based on the uploaded document only — it won't hallucinate external references or make up information not in the paper. This makes it more reliable than general ChatGPT for paper-specific questions",
            "Verify extracted numbers (accuracy percentages, dataset sizes, parameter counts) against the actual tables and figures in the paper. Example: If ChatPDF says 'accuracy is 92%', find Table 3 and confirm",
            "The 'future work' section extraction is particularly useful for identifying research gaps — ask 'What do the authors suggest as future work?' for every paper you read",
            "If it says 'the paper doesn't mention...' — double-check by searching the PDF yourself, as it may have missed a section or used different terminology",
        ],
        researchTip: "Use ChatPDF to quickly extract the 'Future Work' and 'Limitations' sections from multiple papers. These sections are gold mines for research gaps. Compile them in a spreadsheet to see patterns.",
        dos: [
            "✅ DO: Use it to quickly extract key information from many papers. Example: Upload 5 papers and ask each 'What is the main limitation?' — compile answers to find common gaps",
            "✅ DO: Ask about specific sections. Example: 'What evaluation metrics did they use?' or 'How many subjects were in the study?'",
            "✅ DO: Use it to understand papers in unfamiliar domains. Example: If you're a CS student reading a medical paper, ask 'Explain the clinical significance of these results'",
        ],
        donts: [
            "❌ DON'T: Use ChatPDF summaries as your paper's content. Example: Don't write 'This paper proposes...' based solely on ChatPDF's summary — read the actual paper",
            "❌ DON'T: Rely on it for nuanced critical analysis. Example: ChatPDF can tell you WHAT the paper says but not WHETHER the methodology is sound — that requires your own judgment",
            "❌ DON'T: Upload confidential or unpublished papers to any AI tool. Example: Your advisor's unpublished manuscript should not be uploaded to third-party services",
        ],
    },

    "Scholarcy": {
        howToUse: [
            "Go to scholarcy.com → Upload a paper PDF or paste a URL to an online paper",
            "Review the auto-generated 'Summary Flashcard' — it extracts key findings, methods, and contributions in a structured card format",
            "Check the extracted 'Key Concepts' list — these are the important terms and ideas from the paper, useful for building your keyword vocabulary",
            "Use the 'Reference Check' feature to verify that cited sources actually exist and are correctly referenced",
        ],
        interpretOutput: [
            "Flashcard summaries are great for quick screening (deciding whether to deep-read a paper) but miss methodology details — never rely on them for your literature review writing",
            "The 'Key Concepts' list helps you identify important terms for your own keyword searches. Example: If Scholarcy extracts 'federated learning', 'differential privacy', 'gradient compression', use these as search terms",
            "Extracted tables and figures are useful for your comparison matrix — but verify the numbers against the original paper",
            "Always read the full methodology section yourself — Scholarcy often oversimplifies complex methods into one-line descriptions",
        ],
        researchTip: "Use Scholarcy flashcards to quickly screen 20+ papers during your shortlisting phase. Read the flashcard, decide if the paper is relevant, then deep-read only the 5 papers you select for your core literature.",
        dos: [
            "✅ DO: Use flashcards for initial paper screening. Example: Generate flashcards for 20 papers → Read each in 2 minutes → Select the 5 most relevant for deep reading",
            "✅ DO: Use extracted key concepts to expand your search vocabulary. Example: If you searched 'fall detection' but Scholarcy extracts 'activity recognition' and 'anomaly detection', search those terms too",
        ],
        donts: [
            "❌ DON'T: Write your literature review based on flashcard summaries. Example: A flashcard saying 'CNN-based method, 94% accuracy' misses crucial details about dataset, preprocessing, and evaluation protocol",
            "❌ DON'T: Skip reading papers that have good flashcard summaries. Example: The flashcard is a preview, not a replacement for reading",
            "❌ DON'T: Trust the 'Reference Check' as definitive. Example: It might flag a valid reference as suspicious if the metadata doesn't match exactly",
        ],
    },

    "Hypothesis": {
        howToUse: [
            "Install the Hypothesis browser extension from web.hypothes.is → Create a free account",
            "Navigate to any online paper (on publisher websites, arXiv, PubMed Central) and click the Hypothesis sidebar icon on the right edge of your browser",
            "Highlight any text in the paper and add your annotation — your notes are saved and searchable across all papers you've annotated",
            "Create groups to share annotations with your research team. Example: Create a group 'Fall Detection Team' and invite your co-authors",
            "Search public annotations to see what other researchers noted about the same paper — this gives you insights from experienced readers",
        ],
        interpretOutput: [
            "Public annotations from other researchers can reveal important insights you missed. Example: A senior researcher might annotate 'This assumption is questionable because...' — valuable critical perspective",
            "Your own annotations become a searchable knowledge base across all papers you've read. Example: Search 'limitation' in your annotations to find all limitations you noted across 50 papers",
            "Group annotations enable collaborative literature review — your team can divide papers and share insights without meetings",
        ],
        researchTip: "Annotate every paper you read with Hypothesis. When writing your literature review, search your annotations by keyword instead of re-reading papers. This saves weeks of work.",
        dos: [
            "✅ DO: Annotate consistently using a system. Example: Tag annotations as #method, #result, #limitation, #future-work for easy searching later",
            "✅ DO: Check public annotations before deep-reading a paper. Example: Other researchers' notes might highlight the most important sections to focus on",
            "✅ DO: Use group annotations for team literature reviews. Example: Each team member annotates 5 papers, then everyone reads each other's annotations",
        ],
        donts: [
            "❌ DON'T: Make public annotations that are disrespectful or unconstructive. Example: 'This paper is terrible' is not helpful — 'The sample size of 10 limits generalizability' is constructive",
            "❌ DON'T: Annotate without a consistent tagging system. Example: Random notes without tags become unsearchable — always use consistent hashtags",
            "❌ DON'T: Share private research ideas in public annotations. Example: Your novel research angle should stay in private annotations until published",
        ],
    },

    "Notion": {
        howToUse: [
            "Sign up free at notion.so — students get the Plus plan free with a .edu email address",
            "Create a 'Research Database': Click 'New Page' → Choose 'Table' → Add columns: Paper Title, Authors, Year, Method, Dataset, Key Finding, Limitation, Relevance Score (1-5)",
            "Use templates for the 3-pass reading strategy: Create a template page with sections for Pass 1 (5-min scan), Pass 2 (detailed notes), Pass 3 (critical analysis)",
            "Create linked pages for each paper with detailed notes. Example: Click a paper title in your table → It opens a full page where you write your detailed reading notes",
            "Use the Kanban board view to track papers: Create a 'Status' column → View as Board → Drag papers between 'To Read' → 'Reading' → 'Read' → 'Will Cite'",
        ],
        interpretOutput: [
            "Your database becomes your personal research knowledge base — the more consistently you fill it, the more useful it becomes when writing your paper",
            "Filter and sort by any column to find patterns across papers. Example: Sort by 'Method' to see all papers using CNNs together, or filter by 'Limitation' to find common gaps",
            "The Kanban view gives you a visual overview of your reading progress — aim to move at least 3 papers per week from 'To Read' to 'Read'",
            "Export tables as CSV for use in your comparison matrix or to share with your advisor",
        ],
        researchTip: "A well-organized Notion database saves more time than any AI tool. Spend 30 minutes setting it up before you start reading papers. Your future self will thank you when writing the literature review.",
        dos: [
            "✅ DO: Fill in every column for every paper you read. Example: Even if a paper doesn't mention the dataset, write 'Not specified' — this itself is a finding",
            "✅ DO: Use the Kanban view to track your reading progress. Example: Set a goal of moving 5 papers from 'To Read' to 'Read' each week",
            "✅ DO: Link related papers using Notion's relation property. Example: Link all papers that use the same baseline method",
        ],
        donts: [
            "❌ DON'T: Create an overly complex database with 20+ columns. Example: Start with 8-10 essential columns and add more only if needed",
            "❌ DON'T: Save papers without adding notes. Example: A database of 100 paper titles with empty notes is useless — add at least a 2-sentence summary for each",
            "❌ DON'T: Forget to back up your Notion workspace. Example: Export your database periodically as CSV or Markdown",
        ],
    },

    // ===== MODULE 7: GAP ANALYSIS TOOLS =====
    "Consensus": {
        howToUse: [
            "Go to consensus.app → Create a free account (limited searches per month on free tier)",
            "Type a yes/no research question in the search bar. Example: 'Does deep learning improve medical image diagnosis accuracy?' or 'Is federated learning effective for privacy preservation?'",
            "Review the 'Consensus Meter' — it shows what percentage of studies agree, disagree, or are mixed on your question",
            "Click individual papers in the results to see their specific findings and how they were classified (agree/disagree/mixed)",
            "Look for topics where consensus is low (40-60% mixed) — these indicate active debate and excellent research gap opportunities",
        ],
        interpretOutput: [
            "Strong consensus (>80% agree) means the area is well-established — harder to find gaps but you can focus on improving existing methods or applying them to new domains",
            "Mixed results (40-60%) indicate active debate — this is an excellent opportunity for your research. Example: If 50% of papers say 'Method X works' and 50% say 'it doesn't', investigate WHY results differ",
            "Papers in the 'disagree' category often highlight methodological limitations you can address. Example: If papers disagree on accuracy, maybe they used different datasets — you can standardize the comparison",
            "The extracted 'findings' are AI-interpreted — verify by reading the actual paper conclusions. The AI might misclassify a nuanced finding as 'agree' or 'disagree'",
        ],
        researchTip: "Use Consensus to quickly identify controversial topics in your field. Where scientists disagree, there's room for your contribution. A research gap is often hiding in the disagreement.",
        dos: [
            "✅ DO: Frame questions as yes/no for best results. Example: 'Does transfer learning improve small dataset performance?' works better than 'What is transfer learning?'",
            "✅ DO: Investigate WHY papers disagree. Example: If some say 'LSTM outperforms CNN' and others say the opposite, check if they used different datasets or metrics — that's your research gap",
            "✅ DO: Use the results to justify your research motivation. Example: 'Consensus analysis shows mixed results on Method X (45% supporting, 35% contrasting), motivating further investigation'",
        ],
        donts: [
            "❌ DON'T: Treat the Consensus Meter as definitive truth. Example: 80% agreement doesn't mean the remaining 20% are wrong — they might have found important edge cases",
            "❌ DON'T: Ask vague questions. Example: 'Is AI good?' gives meaningless results — be specific about the method, domain, and metric",
            "❌ DON'T: Cite Consensus.app in your paper. Example: Cite the individual papers it found, not the tool itself",
        ],
    },

    "Google Sheets": {
        howToUse: [
            "Go to sheets.google.com → Create a new spreadsheet → Name it 'Research Gap Analysis Matrix'",
            "Set up columns: Paper Title | Authors | Year | Method Used | Dataset | Evaluation Metrics | Key Results | Limitations | Future Work Suggested",
            "Fill one row per paper as you read through your shortlisted papers. Example: Row 1: 'Smith 2023 | CNN+LSTM | UCI HAR | Accuracy, F1 | 94.5%, 0.93 | Small dataset, only accelerometer | Add gyroscope data'",
            "Use conditional formatting to highlight gaps: Select the 'Limitations' column → Format → Conditional formatting → Highlight cells containing specific keywords like 'small dataset', 'limited', 'not tested'",
            "Share with your advisor for feedback: Click 'Share' → Add your advisor's email → They can comment directly on your matrix",
        ],
        interpretOutput: [
            "Columns with many empty cells across papers indicate under-reported aspects — this itself is a potential gap. Example: If 8 out of 10 papers don't report inference time, computational efficiency is under-studied",
            "Rows where 'Limitations' are similar across papers suggest a systematic gap. Example: If 5 papers all say 'limited to English language', multilingual approaches are a clear gap",
            "Sort by 'Results' to see which methods perform best and where improvement is needed. Example: If the best accuracy is 90%, there's room for improvement",
            "The completed matrix IS your research gap analysis — include a version of it as a comparison table in your paper. Many published papers include exactly this kind of table",
        ],
        researchTip: "Your comparison matrix in Google Sheets can be directly converted into Table 1 or Table 2 of your paper. Many published papers include a 'Comparison of Related Work' table — yours is already built.",
        dos: [
            "✅ DO: Be consistent in how you fill each column. Example: Always use the same metric names (Accuracy, not 'Acc' in one row and 'Accuracy' in another)",
            "✅ DO: Include at least 10-15 papers in your matrix for a comprehensive comparison. Example: 5 papers is too few for a convincing gap analysis",
            "✅ DO: Highlight patterns using color coding. Example: Green = strength, Yellow = partial, Red = not addressed — visual patterns reveal gaps instantly",
        ],
        donts: [
            "❌ DON'T: Fill the matrix from memory. Example: Always have the paper open while filling in the row — misremembered numbers are a serious error",
            "❌ DON'T: Include only papers that support your hypothesis. Example: Include papers with contradicting results too — this shows thoroughness and honesty",
            "❌ DON'T: Make the matrix too complex. Example: 20+ columns become unreadable — stick to 8-10 essential columns",
        ],
    },

    // ===== MODULE 8: PROBLEM STATEMENT TOOLS =====
    "Hemingway Editor": {
        howToUse: [
            "Go to hemingwayapp.com — the web version is completely free, no account needed",
            "Copy your problem statement, abstract, or any paragraph from your paper and paste it into the editor",
            "The editor color-codes your text: Red = very hard to read (fix immediately), Yellow = hard to read (simplify), Blue = adverbs (reduce), Green = passive voice (consider active), Purple = simpler word available",
            "Aim for Grade 10-12 readability for academic writing. The grade level is shown in the top-right corner",
            "Fix red highlights first (split long sentences), then yellow (remove unnecessary words), then address blue/green/purple suggestions selectively",
        ],
        interpretOutput: [
            "Red sentences need to be split into two shorter sentences or simplified. Example: A 50-word sentence with 3 clauses should become 2-3 shorter sentences",
            "Yellow sentences can often be improved by removing filler words. Example: 'It is important to note that the results clearly demonstrate...' → 'The results demonstrate...'",
            "The readability grade should be appropriate for your audience — Grade 12-14 is acceptable for academic papers, but lower is always better for clarity",
            "Don't eliminate ALL passive voice — some is natural and expected in scientific writing. Example: 'The experiment was conducted...' is standard academic style",
        ],
        researchTip: "Run your Abstract and Introduction through Hemingway before submission. These sections need to be the clearest since they determine if reviewers keep reading your paper.",
        dos: [
            "✅ DO: Use it for your abstract and introduction first. Example: Paste your 200-word abstract → Fix all red and yellow highlights → Your abstract becomes clearer and more impactful",
            "✅ DO: Aim to reduce the readability grade by 2-3 levels. Example: If your first draft is Grade 16, revise until it's Grade 12-13",
            "✅ DO: Use it iteratively — paste, fix, paste again, fix again until no red highlights remain",
        ],
        donts: [
            "❌ DON'T: Follow every suggestion blindly. Example: Technical terms like 'convolutional neural network' will be flagged as complex — keep them, they're necessary",
            "❌ DON'T: Remove all passive voice. Example: 'The model was trained on 10,000 images' is perfectly fine in academic writing — don't force it to 'We trained the model...' if passive is more appropriate",
            "❌ DON'T: Use it for your entire paper at once. Example: Process one section at a time for better focus — abstract, then introduction, then methodology, etc.",
        ],
    },

    // ===== MODULE 9: EXPERT FINDING TOOLS =====
    "ORCID": {
        howToUse: [
            "Go to orcid.org → Click 'Register' → Fill in your name, email, and create a password. You'll get a unique 16-digit ORCID iD (like 0000-0002-1234-5678)",
            "After registration, add your publications by clicking 'Works' → 'Add' → Search by DOI or title to claim your papers",
            "Connect ORCID to your Google Scholar, Scopus, and journal submission accounts — most journals now ask for ORCID during submission",
            "Include your ORCID in your email signature, CV, and all paper submissions. Format: https://orcid.org/0000-0002-1234-5678",
            "To find experts: Search for researchers by name on orcid.org → Their profile shows all their verified publications, affiliations, and research areas",
        ],
        interpretOutput: [
            "Your ORCID profile becomes your verified academic identity across all platforms — it prevents confusion with other researchers who share your name",
            "Linked publications are automatically verified — no more name confusion. Example: 'Raj Kumar' might match 500 researchers, but ORCID 0000-0002-1234-5678 is uniquely you",
            "Many journals now require ORCID during submission — having one ready saves time and shows professionalism",
            "When searching for experts, ORCID profiles show verified affiliations and publication lists — more reliable than Google search results",
        ],
        researchTip: "Get your ORCID before your first publication. Include it in your email signature and all academic profiles. It's your permanent academic identity that follows you throughout your career.",
        dos: [
            "✅ DO: Register for ORCID immediately, even before your first publication. Example: You'll need it when submitting your first paper — better to have it ready",
            "✅ DO: Keep your ORCID profile updated with all publications, education, and employment. Example: Add your university affiliation and department",
            "✅ DO: Use ORCID to find and verify domain experts. Example: Search a researcher's name → Check their ORCID for verified publication list and current affiliation",
        ],
        donts: [
            "❌ DON'T: Create multiple ORCID accounts. Example: If you registered before and forgot, use the 'Forgot password' feature — duplicate accounts cause confusion",
            "❌ DON'T: Leave your ORCID profile empty. Example: An ORCID with no publications or affiliations looks unprofessional — add at least your education and research interests",
            "❌ DON'T: Forget to link ORCID to your journal accounts. Example: When submitting to IEEE or Springer, connect your ORCID so publications are automatically added to your profile",
        ],
    },

    "ResearchGate": {
        howToUse: [
            "Sign up at researchgate.net with your institutional email (.edu or university email preferred for verification)",
            "Complete your profile: Add your research interests (e.g., 'Deep Learning', 'Medical Image Analysis'), skills, and institution",
            "Upload your published papers and preprints — ResearchGate makes them discoverable to millions of researchers worldwide",
            "Follow researchers in your domain: Search for experts → Click 'Follow' → You'll see their new publications and activity in your feed",
            "Use the Q&A section: Ask research questions or answer others' questions to build your academic reputation. Example: 'What is the best loss function for imbalanced medical image datasets?'",
        ],
        interpretOutput: [
            "Your 'RG Score' increases with engagement (publications, answers, reads) — higher scores increase your visibility in search results",
            "Track 'Reads' and 'Citations' on your papers to measure impact. Example: If your paper gets 500 reads in the first month, it's gaining traction",
            "Researchers who view your profile are potential collaborators — check who's viewing and reach out if their research aligns with yours",
            "The 'Recommendations' feature suggests papers based on your interests and reading history — useful for discovering new work",
        ],
        researchTip: "Upload your paper to ResearchGate immediately after publication. It often gets more reads there than on the journal website. Also, follow the top 10 researchers in your field to stay updated.",
        dos: [
            "✅ DO: Complete your profile fully. Example: Add a profile photo, research interests, institution, and a brief bio — incomplete profiles get less engagement",
            "✅ DO: Engage with the community. Example: Answer questions in your area of expertise — this builds your reputation and attracts collaborators",
            "✅ DO: Use it to find and contact domain experts. Example: Find a professor whose work you admire → Send a polite message asking about potential collaboration or guidance",
        ],
        donts: [
            "❌ DON'T: Upload papers you don't have rights to share. Example: Some publishers restrict sharing on ResearchGate — check the copyright agreement first",
            "❌ DON'T: Spam researchers with collaboration requests. Example: Don't send generic messages to 50 professors — write personalized messages showing you've read their work",
            "❌ DON'T: Treat RG Score as a measure of research quality. Example: A high RG Score means high engagement, not necessarily high-quality research — focus on the work, not the score",
        ],
    },

    // ===== MODULE 10: WRITING TOOLS =====
    "Overleaf": {
        howToUse: [
            "Sign up free at overleaf.com → Click 'New Project' → Choose 'Upload Project' or search 'Templates' for your target journal/conference template",
            "Search templates by publisher: Type 'IEEE', 'ACM', 'Springer', or 'Elsevier' in the template gallery → Select the exact template for your target journal/conference",
            "Use Rich Text mode (click the toggle) if you're new to LaTeX — it shows formatted text like Word. Switch to Source mode for full LaTeX control as you get comfortable",
            "Share the project with co-authors: Click 'Share' → Enter their email → They can edit simultaneously in real-time (like Google Docs but for LaTeX)",
            "Use 'Track Changes' (available in paid plan, or use latexdiff for free) to manage revisions when responding to reviewer comments",
            "Compile your paper by clicking the green 'Recompile' button — the PDF preview on the right shows exactly how your paper will look when submitted",
        ],
        interpretOutput: [
            "Compilation errors (red markers) must be fixed — they usually mean missing brackets {}, undefined LaTeX commands, or missing packages. Example: 'Undefined control sequence \\textbf' means you might have a typo",
            "Warnings (yellow/orange) are usually non-critical but should be reviewed. Example: 'Overfull hbox' means text is extending beyond the margin — adjust wording or add line breaks",
            "The PDF preview shows exactly how your paper will look when submitted — check figures, tables, and references carefully in the preview",
            "Use the 'History' feature (clock icon) to revert to previous versions if something breaks — never lose work",
        ],
        researchTip: "Start writing in Overleaf from Day 1 using the target journal's template. This ensures formatting is never an issue at submission time. Write your methodology section first while the experiments are fresh in your mind.",
        dos: [
            "✅ DO: Use the journal's official template from Day 1. Example: If targeting IEEE Access, search 'IEEE Access' in Overleaf templates and start writing in that format immediately",
            "✅ DO: Use BibTeX for references. Example: Create a 'references.bib' file, paste BibTeX entries from Google Scholar, and use \\cite{key} in your text — Overleaf handles formatting automatically",
            "✅ DO: Compile frequently to catch errors early. Example: Compile after every paragraph to ensure no LaTeX syntax errors accumulate",
            "✅ DO: Use comments (% in LaTeX) to leave notes for yourself and co-authors. Example: '% TODO: Add results table here after experiments'",
        ],
        donts: [
            "❌ DON'T: Write in Word first and then convert to LaTeX. Example: Conversion tools lose formatting — write directly in Overleaf from the start",
            "❌ DON'T: Ignore compilation warnings. Example: 'Overfull hbox' warnings mean your text or figures extend beyond margins — journals may reject poorly formatted papers",
            "❌ DON'T: Manually format references. Example: Don't type '[1] Smith, J., 2023...' — use BibTeX and let LaTeX handle the formatting",
            "❌ DON'T: Share your Overleaf project link publicly. Example: Use email-based sharing with specific collaborators only — a public link means anyone can edit your paper",
        ],
    },

    "Writefull": {
        howToUse: [
            "Install from writefull.com — free tier available, also integrates directly with Overleaf (click 'Extensions' in Overleaf)",
            "It checks your text against patterns from millions of published academic papers — so suggestions are based on how real researchers write",
            "Review suggestions for academic phrasing, word choice, and sentence structure. Example: It might suggest changing 'We got good results' to 'We obtained promising results'",
            "Use the 'Paraphrase' feature to rephrase awkward sentences in academic style. Example: Paste a casual sentence → Get 3 academic alternatives",
            "Use the 'Language Check' for field-specific corrections that general grammar tools miss. Example: In CS papers, 'dataset' is one word, not 'data set'",
        ],
        interpretOutput: [
            "Suggestions are based on how published authors write — more reliable than generic grammar tools for academic text. Example: Writefull knows that 'significant' has a specific statistical meaning in research",
            "The 'Language Check' catches field-specific issues that Grammarly might miss. Example: It knows 'state-of-the-art' should be hyphenated when used as an adjective",
            "Accept suggestions that improve clarity; reject those that change your intended meaning. Example: If it suggests replacing a technical term with a simpler word, keep the technical term",
            "The confidence score shows how certain the tool is — prioritize high-confidence suggestions and review low-confidence ones carefully",
        ],
        researchTip: "Writefull is specifically trained on academic papers, making it more suitable than Grammarly for research writing. Use both: Grammarly for basic grammar, Writefull for academic style and phrasing.",
        dos: [
            "✅ DO: Use it for every section of your paper before submission. Example: Run your abstract through Writefull → Fix suggestions → Run introduction → Fix → Continue section by section",
            "✅ DO: Pay attention to its academic phrasing suggestions. Example: 'This paper shows' → 'This paper demonstrates' — small changes make your writing sound more professional",
            "✅ DO: Use the Overleaf integration for real-time suggestions while writing",
        ],
        donts: [
            "❌ DON'T: Accept every suggestion without thinking. Example: If it suggests changing 'CNN' to 'convolutional neural network' everywhere, keep the abbreviation after first use — that's standard practice",
            "❌ DON'T: Use it to generate new text. Example: Writefull improves YOUR writing — it's not meant to write FOR you",
            "❌ DON'T: Ignore its suggestions about hedging language. Example: In research, 'This proves...' should often be 'This suggests...' or 'The results indicate...' — Writefull catches these",
        ],
    },

    // ===== MODULE 10 continued: FORMATTING TOOLS =====
    "Tables Generator": {
        howToUse: [
            "Go to tablesgenerator.com — completely free, no account needed",
            "Choose your output format at the top: LaTeX (for Overleaf), HTML (for web), Markdown (for GitHub), or MediaWiki",
            "Enter your data in the visual editor (like a spreadsheet) or paste from Excel/Google Sheets using 'File → Paste table data'",
            "Customize borders, alignment, and formatting using the toolbar. For academic papers, use 'booktabs' style (click the checkbox) — it gives clean, professional tables",
            "Click 'Generate' → Copy the generated code → Paste directly into your Overleaf document or paper",
        ],
        interpretOutput: [
            "The generated code is ready to paste — but compile in Overleaf to verify it looks correct. Sometimes column widths need manual adjustment",
            "For LaTeX output, you may need to add \\usepackage{booktabs} in your document preamble for professional-looking tables with \\toprule, \\midrule, \\bottomrule",
            "If the auto-generated table is too wide for your paper's column width, reduce font size with \\small or \\footnotesize before the table",
        ],
        researchTip: "Use booktabs-style tables (no vertical lines, minimal horizontal lines) for a professional look. Most top journals (IEEE, ACM, Springer) prefer this clean style over grid-style tables.",
        dos: [
            "✅ DO: Use booktabs style for all academic tables. Example: Enable the 'booktabs' checkbox → Your table gets clean horizontal rules without vertical lines — this is the standard in top venues",
            "✅ DO: Paste data from your Google Sheets comparison matrix. Example: Copy your gap analysis matrix → Paste into Tables Generator → Generate LaTeX → Paste into Overleaf",
            "✅ DO: Include a descriptive caption above every table. Example: 'Table 1: Comparison of fall detection methods on UCI HAR dataset'",
        ],
        donts: [
            "❌ DON'T: Use grid-style tables with vertical lines. Example: Tables with borders around every cell look unprofessional in academic papers — use booktabs style instead",
            "❌ DON'T: Create tables with too many columns. Example: A table with 15 columns is unreadable — split into two tables or move some data to supplementary material",
            "❌ DON'T: Manually type LaTeX table code. Example: Hand-coding \\begin{tabular}{|c|c|c|} is error-prone — use Tables Generator and save time",
        ],
    },

    "draw.io (diagrams.net)": {
        howToUse: [
            "Go to app.diagrams.net — completely free, no account needed. Choose where to save: Google Drive, local device, or GitHub",
            "For methodology diagrams: Use flowchart shapes (rectangles for processes, diamonds for decisions, arrows for flow). Example: Input Data → Preprocessing → Feature Extraction → Model Training → Evaluation",
            "For system architecture: Use block diagram shapes. Example: Sensor Layer → Data Collection → Cloud Processing → AI Model → Dashboard",
            "Export as PNG (set 300 DPI in export settings for print quality) or SVG for scalable figures in your paper",
            "Save your .drawio file to Google Drive for future editing — you'll need to update diagrams during revisions",
        ],
        interpretOutput: [
            "Your diagram should be self-explanatory — if someone can't understand it without reading the text, simplify it. Show it to a friend and ask 'What does this diagram show?'",
            "Use consistent colors and shapes throughout your paper's figures. Example: Blue for data flow, green for processing, orange for output — maintain this across all figures",
            "Label every component clearly with readable font sizes (minimum 10pt for print). Tiny labels become unreadable when the paper is printed",
            "Include a figure caption that describes what the diagram shows. Example: 'Figure 2: Proposed system architecture for real-time fall detection using wearable IMU sensors'",
        ],
        researchTip: "Create your methodology diagram BEFORE writing the methodology section. The diagram forces you to think through your approach logically, and the writing flows naturally from the diagram.",
        dos: [
            "✅ DO: Create the methodology diagram first, then write the section. Example: Draw the pipeline → Each box becomes a paragraph in your methodology section",
            "✅ DO: Export at 300 DPI minimum for publication quality. Example: In export settings, set 'Zoom' to 300% and format to PNG for crisp figures",
            "✅ DO: Use consistent visual language. Example: If rectangles mean 'process' in Figure 1, use rectangles for processes in all figures",
        ],
        donts: [
            "❌ DON'T: Use screenshots of diagrams in your paper. Example: Screenshots are low resolution — always export as PNG (300 DPI) or SVG",
            "❌ DON'T: Make overly complex diagrams. Example: A diagram with 30 boxes and 50 arrows is confusing — simplify or split into sub-diagrams",
            "❌ DON'T: Use random colors without meaning. Example: Don't use red, blue, green randomly — assign meaning to each color and include a legend if needed",
        ],
    },

    "draw.io": {
        howToUse: [
            "Go to app.diagrams.net — completely free, no account needed",
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
        dos: [
            "✅ DO: Use consistent shapes and colors across all diagrams in your paper",
            "✅ DO: Export at 300 DPI for print-quality figures",
            "✅ DO: Save the editable .drawio file — you'll need it during revisions",
        ],
        donts: [
            "❌ DON'T: Use low-resolution screenshots instead of proper exports",
            "❌ DON'T: Create overly complex diagrams — simplify for readability",
            "❌ DON'T: Forget to add a descriptive figure caption in your paper",
        ],
    },

    "BioRender": {
        howToUse: [
            "Sign up at biorender.com — free for students with .edu email (limited exports on free tier)",
            "Browse the icon library for scientific illustrations — thousands of pre-made icons for biology, chemistry, medical devices, sensors, etc.",
            "Drag and drop components to create professional figures. Example: For a wearable sensor study, drag a human body icon, add sensor icons at wrist and ankle, draw data flow arrows to a cloud/server icon",
            "Export in publication-quality formats: PNG (300 DPI), SVG, or PDF. Free tier may add a watermark — check before submitting",
        ],
        interpretOutput: [
            "BioRender figures look professional but ensure they accurately represent your research — don't use a fancy diagram that misrepresents your actual method",
            "Add proper labels and legends to every figure. Example: Label each component, add a color legend, include measurement units where applicable",
            "Check the license — free tier may have usage restrictions for publications. Some journals require figures to be created with licensed tools",
        ],
        researchTip: "A single well-designed BioRender figure can replace paragraphs of text. Invest time in creating clear visual representations of your methodology — reviewers appreciate visual clarity.",
        dos: [
            "✅ DO: Use BioRender for graphical abstracts. Example: Many journals now accept/require a graphical abstract — BioRender makes creating one easy",
            "✅ DO: Ensure your figure accurately represents your method. Example: If your system has 3 stages, show exactly 3 stages — don't add extra boxes for aesthetics",
        ],
        donts: [
            "❌ DON'T: Use BioRender figures without checking the license. Example: Free tier figures may have watermarks or usage restrictions — verify before journal submission",
            "❌ DON'T: Create misleading figures. Example: Don't show a complex pipeline in your figure if your actual method is simpler — accuracy over aesthetics",
            "❌ DON'T: Use BioRender icons that don't match your actual equipment. Example: If you used a specific sensor model, don't use a generic sensor icon that looks different",
        ],
    },

    // ===== MODULE 11: JOURNAL SELECTION TOOLS =====
    "Journal Finder (Elsevier)": {
        howToUse: [
            "Go to journalfinder.elsevier.com — free, no account needed",
            "Paste your paper's title and abstract into the text boxes",
            "Click 'Find Journal' → Review the ranked list of matching Elsevier journals sorted by relevance",
            "For each suggested journal, check: Impact Factor, acceptance rate, average review time, and open access options",
            "Click 'Journal Homepage' to read the aims and scope — verify your paper actually fits before submitting",
        ],
        interpretOutput: [
            "Higher match percentage means better scope alignment — but always verify manually by reading the journal's aims and scope page",
            "Impact factor alone doesn't determine quality — consider the journal's reputation in your specific field. Example: A journal with IF 3.0 in your niche might be more respected than one with IF 5.0 in a different area",
            "Review time estimates help you plan your publication timeline. Example: If average review time is 6 months, plan accordingly for your thesis deadline",
            "Check if the journal is SCI/SCIE indexed — this matters for academic credit in many universities, especially in India",
        ],
        researchTip: "Use 3 different journal finders (Elsevier, Springer, JANE) and see which journals appear in multiple results — those are your best scope matches.",
        dos: [
            "✅ DO: Use multiple journal finders and compare results. Example: If 'Journal X' appears in Elsevier, Springer, AND JANE results, it's likely a great match for your paper",
            "✅ DO: Read the aims and scope of every suggested journal. Example: A journal might match your keywords but focus on a different application domain",
            "✅ DO: Check the journal's recent publications. Example: Browse the last 3 issues — if papers similar to yours are published there, it's a good sign",
        ],
        donts: [
            "❌ DON'T: Submit to the first journal suggested. Example: The top result might be a high-impact journal with <5% acceptance rate — be realistic about your paper's level",
            "❌ DON'T: Ignore acceptance rates. Example: A journal with 5% acceptance rate means 95 out of 100 papers are rejected — have backup options ready",
            "❌ DON'T: Choose a journal based only on impact factor. Example: A high-IF journal in the wrong field will desk-reject your paper immediately",
        ],
    },

    "Journal Suggester (Springer)": {
        howToUse: [
            "Go to journalsuggester.springer.com — free, no account needed",
            "Enter your manuscript title and abstract in the provided fields",
            "Review Springer Nature journal recommendations sorted by relevance score",
            "Check open access options and article processing charges (APCs) for each journal",
            "Click through to each journal's page to verify scope alignment",
        ],
        interpretOutput: [
            "Springer suggestions are limited to Springer Nature journals only — use alongside Elsevier and JANE finders for comprehensive coverage",
            "Open access journals have wider readership but may have publication fees (APCs). Example: Some APCs are $2000+ — check if your institution has agreements for waivers",
            "Check the 'Aims and Scope' of each suggested journal before submitting — keyword match doesn't guarantee scope match",
        ],
        researchTip: "If a journal appears in both Elsevier and Springer finders' results, it's likely a very good scope match for your paper. Cross-referencing multiple tools increases confidence in your choice.",
        dos: [
            "✅ DO: Check APC waiver options. Example: Many Springer journals offer waivers for researchers from developing countries — check the journal's APC policy page",
            "✅ DO: Compare with Elsevier and JANE results for cross-validation",
        ],
        donts: [
            "❌ DON'T: Limit your search to only Springer journals. Example: The best journal for your paper might be published by IEEE, ACM, or Elsevier",
            "❌ DON'T: Choose a journal just because it's open access. Example: Open access is great for visibility but the journal must also be reputable and indexed",
        ],
    },

    "JANE (Journal/Author Name Estimator)": {
        howToUse: [
            "Go to jane.biosemantics.org — completely free, no account needed",
            "Paste your abstract in the text box (the more text you provide, the better the matching)",
            "Click 'Find Journals' for venue suggestions, or 'Find Authors' for expert discovery (useful for Module 9 too)",
            "Review the confidence scores and click 'Articles' to see specific papers in that journal similar to yours",
        ],
        interpretOutput: [
            "Higher confidence scores indicate better content match between your abstract and the journal's published papers",
            "The 'Articles' tab shows specific papers in that journal similar to yours — if you see 5+ similar papers, it's a strong match",
            "JANE is particularly strong for biomedical and life science journals but works for other fields too",
            "Use the 'Find Authors' feature to discover potential reviewers or collaborators — it identifies researchers working on similar topics",
        ],
        researchTip: "JANE's 'Find Authors' feature is a hidden gem — it identifies researchers working on similar topics. Use it for both finding experts (Module 9) and identifying potential reviewers for your paper.",
        dos: [
            "✅ DO: Paste your full abstract for best results. Example: A 200-word abstract gives much better matches than just a title",
            "✅ DO: Use 'Find Authors' to discover experts in your field. Example: The top-matched authors are likely the most relevant experts for your research area",
        ],
        donts: [
            "❌ DON'T: Use only the title for matching. Example: 'Deep Learning for Healthcare' is too vague — paste the full abstract with specific methods and results",
            "❌ DON'T: Ignore low-ranked but relevant journals. Example: A journal ranked #10 might have faster review times and higher acceptance rates than #1",
        ],
    },

    // ===== MODULE 11 continued: JOURNAL QUALITY CHECK =====
    "Scimago Journal Rank (SJR)": {
        howToUse: [
            "Go to scimagojr.com → Click 'Journal Rankings' or use the search bar to find a specific journal",
            "Search for your target journal by name → Check the SJR indicator, H-index, and quartile ranking (Q1 = top 25%, Q2 = top 50%, Q3 = top 75%, Q4 = bottom 25%)",
            "Review the 'Subject Area' to confirm the journal covers your research topic",
            "Check the trend graph — is the journal's impact rising or falling over the past 5 years?",
            "Use the 'Compare' feature to evaluate multiple journals side by side",
        ],
        interpretOutput: [
            "Q1 journals are the top 25% in their category — aim for Q1 or Q2 for maximum academic impact and recognition",
            "A rising SJR trend indicates a journal gaining reputation — good to publish in a growing journal. A declining trend might mean the journal is losing relevance",
            "Compare multiple journals in the same subject area using the 'Compare' feature. Example: Compare 3 Q2 journals to find the one with the best acceptance rate and review time",
            "Check 'Total Documents' to see how many papers they publish per year — very high numbers (1000+) may indicate less selectivity",
        ],
        researchTip: "Always check SJR before submitting. A journal that looks legitimate but isn't indexed in Scimago is a red flag. Q1-Q2 journals are the target for impactful research.",
        dos: [
            "✅ DO: Check quartile ranking before submitting. Example: Verify your target journal is Q1 or Q2 in Scimago — this information goes in your CV and thesis",
            "✅ DO: Compare multiple journals in your subject area. Example: If 3 journals match your scope, compare their SJR scores, H-indices, and publication volumes",
            "✅ DO: Check the trend — a journal moving from Q2 to Q1 is a great choice",
        ],
        donts: [
            "❌ DON'T: Submit to a journal not indexed in Scimago without thorough investigation. Example: If a journal isn't in Scimago, check DOAJ and Beall's List before proceeding",
            "❌ DON'T: Chase only Q1 journals for your first paper. Example: A Q2 journal with 30% acceptance rate might be more realistic than a Q1 journal with 8% acceptance rate for your first publication",
            "❌ DON'T: Ignore the subject area classification. Example: A Q1 journal in 'Library Science' is not the same as Q1 in 'Computer Science' — check the specific category",
        ],
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
            "A journal not found in Scimago is likely not indexed — avoid submitting there without further verification",
        ],
        researchTip: "Include the target journal's SJR quartile in your cover letter — it shows you've done your homework on venue selection.",
        dos: [
            "✅ DO: Verify quartile ranking before every submission. Example: Journal rankings change yearly — a Q2 journal last year might be Q1 now",
            "✅ DO: Use the comparison feature for shortlisting. Example: Compare your top 3 journal choices side by side on SJR, H-index, and publication volume",
        ],
        donts: [
            "❌ DON'T: Assume a journal is good just because it has a website. Example: Predatory journals have professional-looking websites — always verify on Scimago",
            "❌ DON'T: Ignore declining SJR trends. Example: A journal dropping from Q1 to Q3 over 3 years might be losing credibility",
        ],
    },

    "Beall's List": {
        howToUse: [
            "Go to beallslist.net — this is a list of potentially predatory journals and publishers",
            "Search for the journal name or publisher name using Ctrl+F (browser search)",
            "If the journal or publisher is listed, it is potentially predatory — DO NOT submit your paper there",
            "Cross-reference with DOAJ (doaj.org) and Scimago (scimagojr.com) for confirmation before making a final decision",
        ],
        interpretOutput: [
            "Being on Beall's List is a strong warning sign — but verify with other sources too. Some legitimate journals may be incorrectly listed (rare but possible)",
            "If a journal aggressively emails you to submit (unsolicited emails saying 'Dear esteemed researcher, we invite you to submit...'), check Beall's List immediately — this is a common predatory journal tactic",
            "Some legitimate journals may be incorrectly listed — if in doubt, check DOAJ and Scimago as additional verification",
        ],
        researchTip: "Before paying any publication fee, check Beall's List + DOAJ + Scimago. If the journal fails any two of these three checks, don't submit. Predatory publications can permanently damage your academic reputation.",
        dos: [
            "✅ DO: Check Beall's List for every new journal you consider. Example: Before submitting to 'International Journal of Advanced Computing', search it on Beall's List first",
            "✅ DO: Cross-reference with DOAJ and Scimago. Example: A journal on Beall's List but also in DOAJ might be a false positive — investigate further",
            "✅ DO: Report suspicious journals to your advisor. Example: If you receive a predatory journal email, show it to your advisor as a learning example",
        ],
        donts: [
            "❌ DON'T: Submit to any journal on Beall's List without thorough investigation. Example: Even if the journal promises 'fast publication in 2 weeks', that speed is a red flag, not a feature",
            "❌ DON'T: Pay publication fees to unverified journals. Example: Legitimate journals either don't charge or have transparent, reasonable APCs listed on their official website",
            "❌ DON'T: Ignore warning signs. Example: Guaranteed acceptance, very fast review (1-2 weeks), aggressive email solicitation, and poor website quality are all red flags",
        ],
    },

    "DOAJ": {
        howToUse: [
            "Go to doaj.org → Search for the journal name in the search bar",
            "If the journal is listed in DOAJ, it has passed a quality review and meets standards for legitimate open access publishing",
            "Check the 'APC' (Article Processing Charge) information — DOAJ lists whether the journal charges fees and how much",
            "Verify the journal's review process (peer review type) and editorial board information",
        ],
        interpretOutput: [
            "DOAJ-listed journals have passed a rigorous quality review — they are legitimate open access venues. Being in DOAJ is a strong positive signal",
            "Not being in DOAJ doesn't automatically mean predatory — some good subscription-based journals aren't listed because DOAJ focuses on open access",
            "Check if your institution has agreements for APC waivers with DOAJ-listed publishers. Example: Many universities have deals with Springer, Elsevier, and MDPI for reduced or waived APCs",
        ],
        researchTip: "DOAJ is the gold standard for verifying open access journals. If a journal claims to be open access but isn't in DOAJ, investigate further before submitting.",
        dos: [
            "✅ DO: Verify every open access journal on DOAJ before submitting. Example: Search the journal name → If listed, it's legitimate open access",
            "✅ DO: Check APC information on DOAJ. Example: Know the publication fee before submitting — some journals charge $500, others $3000",
        ],
        donts: [
            "❌ DON'T: Assume all open access journals are in DOAJ. Example: New legitimate journals might not be listed yet — use Scimago and Beall's List as additional checks",
            "❌ DON'T: Pay APCs without checking if your institution has a waiver agreement. Example: Many universities cover APCs for DOAJ-listed journals — ask your library",
        ],
    },

    // ===== MODULE 12: SUBMISSION TOOLS =====
    "Paperpal": {
        howToUse: [
            "Go to paperpal.com → Create a free account → Upload your manuscript or paste text section by section",
            "Review language, grammar, and academic style suggestions — Paperpal is trained specifically on academic manuscripts, not general text",
            "Check the 'Consistency' report for formatting issues. Example: It catches inconsistent abbreviations (using both 'ML' and 'machine learning' after first definition), number formatting, and reference style",
            "Use the 'Pre-submission Check' feature before final submission — it runs through a checklist of common desk rejection reasons",
            "Review suggestions section by section: Abstract → Introduction → Methodology → Results → Discussion → Conclusion",
        ],
        interpretOutput: [
            "Paperpal is trained on academic manuscripts — its suggestions are field-appropriate, unlike general grammar tools. Example: It knows 'significant' has statistical meaning and won't suggest casual alternatives",
            "The consistency check catches issues like: using 'Fig.' in one place and 'Figure' in another, inconsistent decimal places in results, mixed citation styles",
            "Accept language suggestions that improve clarity; reject those that change technical meaning. Example: Don't let it simplify 'convolutional neural network' to 'neural network' — the specificity matters",
            "The pre-submission checklist helps avoid common desk rejection reasons: missing sections, incomplete references, figure quality issues, word count violations",
        ],
        researchTip: "Run Paperpal's pre-submission check as your final step before submitting. It catches formatting and consistency issues that cause desk rejection — the most frustrating type of rejection because it's entirely preventable.",
        dos: [
            "✅ DO: Run the pre-submission check before every submission. Example: It might catch that you forgot to include keywords, or that your abstract exceeds the word limit",
            "✅ DO: Use the consistency check. Example: If you defined 'CNN' in the introduction, Paperpal ensures you don't write 'Convolutional Neural Network' again in the methodology",
            "✅ DO: Process your paper section by section for thorough review",
        ],
        donts: [
            "❌ DON'T: Accept all suggestions without review. Example: Paperpal might suggest changing a field-specific term — keep technical terminology even if flagged",
            "❌ DON'T: Skip the consistency check. Example: Inconsistent formatting (Fig. vs Figure, Table vs Tab.) is a common desk rejection reason that's easy to fix",
            "❌ DON'T: Use Paperpal as a substitute for human proofreading. Example: Ask a colleague or advisor to read your paper too — AI catches grammar but misses logical flow issues",
        ],
    },

    "LaTeX Diff (latexdiff)": {
        howToUse: [
            "In Overleaf: Use the built-in 'History' feature → Select two versions → Click 'Compare' to see changes highlighted",
            "Alternatively, use the latexdiff command-line tool: Install with your LaTeX distribution → Run: latexdiff old.tex new.tex > diff.tex → Compile diff.tex",
            "The output PDF highlights additions in blue and deletions in red — making it easy for reviewers to see exactly what changed",
            "Include the diff document as supplementary material with your revision submission",
        ],
        interpretOutput: [
            "The diff document shows reviewers exactly what changed between versions — this saves them time and demonstrates thoroughness",
            "Blue/underlined text = additions, Red/strikethrough text = deletions. Reviewers can quickly verify you addressed their comments",
            "Make sure all changes are intentional — accidental formatting changes (like line breaks) will show up too and might confuse reviewers",
        ],
        researchTip: "Always submit a diff document with your revision. Reviewers appreciate being able to see changes at a glance — it often leads to faster acceptance because they can verify their comments were addressed.",
        dos: [
            "✅ DO: Submit a diff with every revision. Example: Upload 'manuscript_revised.pdf' AND 'manuscript_diff.pdf' — reviewers will check the diff first",
            "✅ DO: Review the diff yourself before submitting. Example: Make sure only intentional changes appear — remove any accidental whitespace or formatting changes",
        ],
        donts: [
            "❌ DON'T: Submit a revision without a diff document. Example: Reviewers have to re-read the entire paper to find changes — this frustrates them and delays your acceptance",
            "❌ DON'T: Make changes that aren't mentioned in your response letter. Example: If you changed the methodology but didn't explain why in your response, reviewers will be suspicious",
        ],
    },

    // ===== MODULE 13: REVIEWER RESPONSE TOOLS =====
    "LinkedIn": {
        howToUse: [
            "Create or update your LinkedIn profile with your research focus. Example: Headline: 'Undergraduate Researcher | AI in Healthcare | [University Name]'",
            "Share your publications with a brief summary of key findings. Example: Post: 'Excited to share our paper on fall detection using wearable sensors, published in [Journal]. Key finding: Our method improves accuracy by 5% over existing approaches. [Link]'",
            "Follow and connect with researchers, professors, and industry professionals in your field",
            "Join research groups and participate in discussions. Example: Join 'Machine Learning Research' or 'AI in Healthcare' groups",
        ],
        interpretOutput: [
            "Post engagement (likes, comments, shares) indicates interest in your research topic — high engagement means your work resonates with a broader audience",
            "Connection suggestions may reveal researchers you didn't know about — LinkedIn's algorithm connects people with similar interests",
            "Industry connections can provide real-world validation for your research. Example: A data scientist at a hospital commenting on your medical AI paper adds practical perspective",
        ],
        researchTip: "Write a LinkedIn post summarizing your paper in plain language when it's published. This reaches audiences beyond academia and can lead to industry collaborations, internships, and job opportunities.",
        dos: [
            "✅ DO: Share your research in plain language. Example: Instead of 'We propose a novel multi-modal fusion architecture...', write 'We built an AI system that helps detect when elderly people fall, using data from wrist-worn sensors'",
            "✅ DO: Engage with other researchers' posts. Example: Comment thoughtfully on papers shared by others — this builds your network",
            "✅ DO: Connect with researchers whose papers you've cited. Example: Send a connection request with a note: 'I cited your work on [topic] in my recent paper — would love to connect'",
        ],
        donts: [
            "❌ DON'T: Share unpublished results on LinkedIn. Example: Don't post your findings before the paper is accepted — someone might publish similar work before you",
            "❌ DON'T: Exaggerate your contributions. Example: Don't claim 'revolutionary breakthrough' for incremental improvements — be honest and specific",
            "❌ DON'T: Spam your network with every minor update. Example: Share major milestones (paper accepted, conference presentation) not daily progress updates",
        ],
    },

    "Twitter/X": {
        howToUse: [
            "Create an account and follow researchers using hashtags: #AcademicTwitter, #PhDLife, #MachineLearning, #AIResearch, or your field-specific hashtags",
            "Share your papers with a thread explaining key findings in simple language. Example: Thread: '🧵 New paper alert! We studied how AI can detect falls in elderly people. Here's what we found (1/5)...'",
            "Engage with other researchers' work through thoughtful comments and quote tweets",
            "Use hashtags relevant to your field for discoverability. Example: #ComputerVision #MedicalAI #DeepLearning #NeurIPS2024",
        ],
        interpretOutput: [
            "Retweets and likes indicate community interest in your topic — a viral thread can significantly boost paper downloads and citations",
            "Threads that get high engagement can lead to collaboration offers, conference invitations, and media coverage",
            "Follow conference hashtags to stay updated on the latest presentations. Example: During NeurIPS, follow #NeurIPS2024 for real-time paper discussions",
        ],
        researchTip: "A well-crafted Twitter thread about your paper can get more attention than the paper itself. Include a figure, the key finding, and a link. Many researchers discover papers through Twitter before Google Scholar.",
        dos: [
            "✅ DO: Create a paper thread with visuals. Example: Include your methodology diagram, a key results figure, and a link to the paper — visual threads get 3x more engagement",
            "✅ DO: Engage with the community. Example: Comment on papers you find interesting, ask questions, share insights — this builds your academic network",
        ],
        donts: [
            "❌ DON'T: Get into arguments on Twitter. Example: If someone criticizes your work, respond professionally with data, not emotions",
            "❌ DON'T: Share confidential or under-review work. Example: Don't tweet about your paper while it's under review — some journals consider this a violation",
        ],
    },

    // ===== MODULE 14: IMPACT TOOLS =====
    "Canva": {
        howToUse: [
            "Sign up free at canva.com — students get Canva Pro free with .edu email",
            "Search templates for 'Research Poster', 'Visual Abstract', 'Pitch Deck', or 'Infographic'",
            "Customize with your research data, figures, and findings. Example: For a visual abstract, include: research question, method diagram, key result, and conclusion in a single image",
            "Export as PDF (for posters) or PNG (for social media sharing and journal submission)",
        ],
        interpretOutput: [
            "Visual abstracts get 7x more engagement on social media than text-only posts — they're worth the 30-minute investment",
            "Keep the design clean — too many elements reduce readability. Follow the rule: one key message per visual section",
            "Use your institution's color scheme for a professional, branded look",
        ],
        researchTip: "Create a visual abstract for every paper you publish. Share it on ResearchGate, LinkedIn, and Twitter to maximize visibility. Many journals now accept visual abstracts as part of the submission.",
        dos: [
            "✅ DO: Create a visual abstract for every publication. Example: A single image showing Problem → Method → Result → Impact gets shared widely on social media",
            "✅ DO: Use consistent branding. Example: Use your university's colors and logo for a professional look across all your research visuals",
            "✅ DO: Keep it simple — one key message per visual element",
        ],
        donts: [
            "❌ DON'T: Overcrowd the visual with too much text. Example: A visual abstract with 500 words defeats the purpose — use icons, arrows, and minimal text",
            "❌ DON'T: Use copyrighted images from Google. Example: Use Canva's built-in icons and images, or your own figures from the paper",
            "❌ DON'T: Create misleading visuals. Example: Don't show a dramatic improvement in a bar chart by manipulating the y-axis scale",
        ],
    },

    "Loom": {
        howToUse: [
            "Sign up free at loom.com → Install the browser extension or desktop app",
            "Record a 3-5 minute video explaining your paper's key contribution. Example: Share your screen showing the paper, walk through the methodology diagram, and explain the key results",
            "Use screen sharing to walk through figures, tables, and results — point at specific parts as you explain them",
            "Share the video link on your paper's ResearchGate page, LinkedIn post, and in email signatures",
        ],
        interpretOutput: [
            "View count shows how many people watched your explanation — track this to measure interest in your work",
            "Comments may contain valuable feedback or collaboration offers from researchers who watched your video",
            "Videos under 5 minutes get the most complete views — keep it concise and focused on the key contribution",
        ],
        researchTip: "A video abstract makes your research accessible to non-experts and increases citations. Many conferences now accept video presentations — having one ready gives you a head start.",
        dos: [
            "✅ DO: Keep videos under 5 minutes. Example: Structure as: 30s problem, 1min method, 1min results, 30s conclusion, 1min demo (if applicable)",
            "✅ DO: Show your face alongside the screen share. Example: Videos with a face cam get more engagement — people connect with people, not just slides",
        ],
        donts: [
            "❌ DON'T: Read your paper verbatim in the video. Example: Explain in conversational language, not academic jargon — the video should complement the paper, not duplicate it",
            "❌ DON'T: Record without a script or outline. Example: Plan your 5 key points before recording — rambling videos lose viewers quickly",
        ],
    },

    "GitHub": {
        howToUse: [
            "Create a free account at github.com → Click 'New Repository' → Name it after your project (e.g., 'fall-detection-wearable-dl')",
            "Create a clear README.md file with: Project title, abstract, installation instructions, usage examples, dataset information, and citation",
            "Upload your code organized in folders: /src (source code), /data (sample data or data loading scripts), /models (trained models or training scripts), /results (output figures and tables)",
            "Add a LICENSE file — MIT or Apache 2.0 are standard for open research. This tells others how they can use your code",
            "Link the repository URL in your paper's 'Data Availability' or 'Code Availability' section",
        ],
        interpretOutput: [
            "Stars indicate community interest in your research code — more stars = more visibility. Example: A repository with 50+ stars is considered popular",
            "Issues filed by others show they're trying to use your code — respond promptly to build your reputation as a collaborative researcher",
            "Forks mean other researchers are building on your work — this often leads to citations of your paper",
            "A well-documented repository increases reproducibility and trust in your results — reviewers increasingly check if code is available",
        ],
        researchTip: "Papers with linked GitHub repositories get significantly more citations. Make your code reproducible with clear instructions, requirements.txt, and sample data. A reviewer who can run your code is more likely to accept your paper.",
        dos: [
            "✅ DO: Write a comprehensive README. Example: Include installation steps, a quick-start example, expected output, and how to reproduce your paper's results",
            "✅ DO: Include a requirements.txt or environment.yml. Example: 'pip install -r requirements.txt' should set up everything needed to run your code",
            "✅ DO: Add your paper's citation in BibTeX format in the README. Example: 'If you use this code, please cite: [BibTeX entry]'",
        ],
        donts: [
            "❌ DON'T: Upload code without documentation. Example: A repository with just Python files and no README is unusable — nobody will cite it",
            "❌ DON'T: Include sensitive data (API keys, passwords, personal data) in your repository. Example: Use .gitignore to exclude config files with credentials",
            "❌ DON'T: Upload large datasets directly to GitHub. Example: Use Git LFS for large files, or host data on Zenodo/Google Drive and link in README",
        ],
    },

    "Zenodo": {
        howToUse: [
            "Go to zenodo.org → Sign in with your GitHub or ORCID account (free)",
            "Click 'Upload' → Drag and drop your dataset, code archive, or supplementary materials",
            "Fill in metadata: Title, authors, description, keywords, and license. Be thorough — this metadata makes your data discoverable",
            "Click 'Publish' → Zenodo assigns a DOI (Digital Object Identifier) — making your data permanently citable with a unique identifier",
            "Link the DOI in your paper's references or data availability statement. Format: https://doi.org/10.5281/zenodo.XXXXXXX",
        ],
        interpretOutput: [
            "The DOI is permanent — once assigned, your data is archived forever and can always be found using that DOI, even if Zenodo's URL changes",
            "Download counts show how many researchers accessed your data — track this as a measure of your research's impact beyond citations",
            "Zenodo integrates with GitHub — you can auto-archive repository releases. Example: Every time you create a GitHub release, Zenodo automatically archives it with a new DOI",
        ],
        researchTip: "Archive your research data on Zenodo before paper submission. Include the DOI in your paper — reviewers increasingly expect data availability, and having a DOI shows professionalism.",
        dos: [
            "✅ DO: Archive your data before submitting your paper. Example: Upload dataset + code → Get DOI → Include DOI in your paper's 'Data Availability' section",
            "✅ DO: Use the GitHub-Zenodo integration. Example: Connect your GitHub repo to Zenodo → Every release gets automatically archived with a DOI",
            "✅ DO: Include comprehensive metadata. Example: Add keywords, description, and related publications so others can find your data",
        ],
        donts: [
            "❌ DON'T: Upload sensitive or personal data without anonymization. Example: If your dataset contains patient information, anonymize it completely before uploading",
            "❌ DON'T: Forget to choose an appropriate license. Example: CC-BY 4.0 is standard for research data — it allows reuse with attribution",
            "❌ DON'T: Upload without a README file explaining the data. Example: Include a data dictionary explaining each column/file in your dataset",
        ],
    },

    // ===== MODULE 15: PROPOSAL TOOLS =====
    "Gantt.io": {
        howToUse: [
            "Go to gantt.io → Create a free project → Name it after your research proposal",
            "Add your research milestones as tasks with start and end dates. Example: 'Literature Review: Jan 1 - Feb 28', 'Data Collection: Mar 1 - Apr 30', 'Model Development: May 1 - Jul 31'",
            "Set dependencies between tasks. Example: 'Data Collection' must finish before 'Model Training' can start — draw an arrow from one to the other",
            "Add buffer time between milestones for unexpected delays. Example: Add 2 weeks buffer after 'Data Collection' in case of delays",
            "Export the Gantt chart as an image (PNG or PDF) for your research proposal document",
        ],
        interpretOutput: [
            "The critical path (longest chain of dependent tasks) determines your minimum project duration. Example: If Literature Review → Data Collection → Training → Evaluation takes 10 months, that's your minimum timeline",
            "Tasks that can run in parallel should be identified to optimize your timeline. Example: 'Writing Literature Review' can happen in parallel with 'Data Collection'",
            "Buffer time between milestones accounts for unexpected delays — always add 10-20% buffer to each task",
            "The visual timeline helps funding agencies understand your project plan — a clear Gantt chart shows you've thought through the timeline realistically",
        ],
        researchTip: "Include a Gantt chart in every research proposal. It shows you've thought through the timeline realistically — a key factor in funding decisions. Reviewers can immediately see if your timeline is feasible.",
        dos: [
            "✅ DO: Include realistic time estimates. Example: 'Literature Review: 2 months' is realistic; 'Literature Review: 1 week' is not — reviewers will notice",
            "✅ DO: Show parallel tasks. Example: 'Writing paper' can overlap with 'Running final experiments' — this shows efficient planning",
            "✅ DO: Add milestones (diamond markers) for key deliverables. Example: 'Milestone: First draft complete', 'Milestone: Paper submitted'",
        ],
        donts: [
            "❌ DON'T: Create an overly optimistic timeline. Example: Don't show a complete research project in 3 months if it realistically takes 12 — reviewers will reject unrealistic proposals",
            "❌ DON'T: Forget dependencies. Example: You can't start 'Model Evaluation' before 'Model Training' is complete — show these dependencies clearly",
            "❌ DON'T: Skip buffer time. Example: Every task should have 10-20% buffer — research always takes longer than planned",
        ],
    },

    "Google Forms": {
        howToUse: [
            "Go to forms.google.com → Click 'Blank' to create a new form → Name it 'Research Validation Survey' or similar",
            "Design survey questions to validate your research idea or collect user feedback. Use a mix of question types for comprehensive data",
            "Question types to use: Multiple choice (for demographics), Likert scale 1-5 (for opinions), Short answer (for specific data), Long answer (for detailed feedback)",
            "Add a consent statement at the beginning: 'This survey is for academic research purposes. Your responses are anonymous. By proceeding, you consent to participate.'",
            "Share the link with your target audience. Example: Share in relevant WhatsApp groups, email lists, or social media with a brief explanation of your research",
            "Analyze results in the built-in 'Responses' tab or export to Google Sheets for detailed analysis",
        ],
        interpretOutput: [
            "Response rates below 10% may indicate poor survey design or wrong audience. Example: If you sent to 500 people and got 20 responses (4%), revise your survey or target audience",
            "Look for patterns in open-ended responses — recurring themes validate your research direction. Example: If 15 out of 50 respondents mention 'battery life' as a concern, that's a validated research problem",
            "Likert scale averages above 3.5/5 generally indicate positive reception of your research idea",
            "Include survey methodology and response rates in your paper's methodology section. Example: 'A survey of 100 healthcare workers (response rate: 45%) was conducted to validate the need for...'",
        ],
        researchTip: "A survey with 50+ responses provides preliminary validation for your research idea. Include the results as 'preliminary data' or 'needs assessment' in funding proposals — it shows your research addresses a real need.",
        dos: [
            "✅ DO: Get ethics approval before distributing surveys. Example: Even a simple Google Form survey needs IRB/ethics committee clearance at most universities",
            "✅ DO: Pilot test with 5-10 people first. Example: Ask friends to take the survey and give feedback on clarity before sending to your actual target audience",
            "✅ DO: Include demographic questions. Example: Age, profession, experience level — this helps you analyze responses by subgroup",
        ],
        donts: [
            "❌ DON'T: Ask leading questions. Example: 'Don't you think AI is useful for healthcare?' leads respondents to agree — instead ask 'How useful do you find AI tools in healthcare? (1-5)'",
            "❌ DON'T: Make the survey too long. Example: Surveys over 15 minutes have high dropout rates — keep it under 10 minutes (15-20 questions max)",
            "❌ DON'T: Distribute without ethics approval. Example: Using survey data collected without ethics approval can invalidate your entire research and lead to paper retraction",
        ],
    },

    // ===== MODULE 16: PROTOTYPING TOOLS =====
    "Google Colab": {
        howToUse: [
            "Go to colab.research.google.com → Sign in with your Google account → Click 'New Notebook' to start",
            "Select GPU runtime for deep learning: Click 'Runtime' menu → 'Change runtime type' → Select 'T4 GPU' (free tier) → Click 'Save'",
            "Write Python code in cells and press Shift+Enter to run. Results (text, graphs, images) appear directly below each cell",
            "Install libraries: In a code cell, type '!pip install torch torchvision' (add ! before pip commands). Common libraries: torch, tensorflow, sklearn, pandas, matplotlib",
            "Save notebooks to Google Drive: Click 'File' → 'Save a copy in Drive'. Share the notebook link for reproducibility — anyone with the link can run your code",
            "Mount Google Drive to access your data: Run 'from google.colab import drive; drive.mount(\"/content/drive\")' → Your Drive files are accessible at '/content/drive/MyDrive/'",
        ],
        interpretOutput: [
            "GPU sessions are limited to ~12 hours on free tier — save model checkpoints regularly. Example: Save after every epoch with 'torch.save(model.state_dict(), \"checkpoint.pth\")'",
            "If your session disconnects, you lose all variables — but saved files on Drive persist. Always save important outputs to Drive, not just the notebook",
            "Memory errors (OOM) mean your model or data is too large for the free GPU — reduce batch size, use smaller models, or use data generators that load data in chunks",
            "Share notebook links for reproducibility — anyone can run your code with one click. Include the Colab link in your paper's code availability section",
        ],
        researchTip: "Google Colab is sufficient for most undergraduate research experiments. Include the Colab notebook link in your paper for reproducibility — reviewers can verify your results with one click.",
        dos: [
            "✅ DO: Save checkpoints regularly. Example: Save model weights every 5 epochs to Google Drive — if the session crashes, you don't lose hours of training",
            "✅ DO: Document your notebook with markdown cells. Example: Add headers like '## Data Loading', '## Model Architecture', '## Training', '## Evaluation' for clarity",
            "✅ DO: Pin library versions. Example: '!pip install torch==2.0.1' ensures reproducibility — without version pinning, your code might break when libraries update",
        ],
        donts: [
            "❌ DON'T: Leave Colab running overnight for training. Example: Free sessions disconnect after ~90 minutes of inactivity — use checkpointing instead of relying on long sessions",
            "❌ DON'T: Store large datasets in the notebook. Example: Upload data to Google Drive and mount it — don't paste data directly in code cells",
            "❌ DON'T: Forget to set GPU runtime. Example: Training a deep learning model on CPU in Colab takes 10x longer — always select GPU runtime for neural network training",
        ],
    },

    "Kaggle": {
        howToUse: [
            "Sign up at kaggle.com → Complete your profile with your research interests",
            "Search 'Datasets' tab for data relevant to your research topic. Example: Search 'fall detection', 'medical images', 'sentiment analysis' to find ready-to-use datasets",
            "Use 'Notebooks' (formerly Kernels) to see how others analyzed similar data — these are complete, runnable code examples. Example: Search 'BERT text classification notebook' to see implementation examples",
            "Create your own notebook with 30 hours/week of free GPU (more than Colab). Click 'New Notebook' → Select GPU accelerator in Settings",
            "Enter competitions to benchmark your methods against others. Example: Join a relevant competition → Submit your model's predictions → See how you rank on the leaderboard",
        ],
        interpretOutput: [
            "Dataset descriptions include size, format, and license — check the license before using in research. Example: Some datasets are 'CC BY-NC' (non-commercial only) — fine for academic research",
            "Public notebooks show state-of-the-art approaches — learn from them but don't copy code without attribution. Example: If you use someone's data preprocessing code, cite their notebook",
            "Competition leaderboards show how your method compares to others — useful for your results section. Example: 'Our method ranked in the top 10% on the Kaggle [Competition] leaderboard'",
            "Cite the dataset properly using the citation provided on the dataset page — most Kaggle datasets have a suggested citation format",
        ],
        researchTip: "Kaggle datasets are great for benchmarking. Using a well-known Kaggle dataset makes your results comparable to other published work and increases reproducibility.",
        dos: [
            "✅ DO: Use Kaggle datasets for benchmarking. Example: If a well-known dataset exists for your task on Kaggle, use it — reviewers can compare your results with others who used the same data",
            "✅ DO: Study top-scoring notebooks in competitions. Example: The winning solutions often use clever techniques you can adapt for your research",
            "✅ DO: Cite datasets properly. Example: Include the dataset name, creator, year, and Kaggle URL in your references",
        ],
        donts: [
            "❌ DON'T: Copy competition code and claim it as your own. Example: Using a Kaggle winner's code without attribution is plagiarism — cite the notebook and explain what you modified",
            "❌ DON'T: Use datasets without checking the license. Example: Some datasets prohibit commercial use or require specific attribution — read the license before using",
            "❌ DON'T: Ignore dataset quality issues. Example: Some Kaggle datasets have errors, missing values, or biases — document any data cleaning you performed",
        ],
    },

    "Hugging Face": {
        howToUse: [
            "Go to huggingface.co → Explore the Model Hub (thousands of pre-trained AI models for NLP, Computer Vision, Audio, etc.)",
            "Search for pre-trained models relevant to your task. Example: Search 'bert-base-uncased' for text classification, 'resnet-50' for image classification, 'whisper' for speech recognition",
            "Use the 'Inference API' to test models without writing any code — just type input text or upload an image on the model page and see the output instantly",
            "Clone models to Google Colab for fine-tuning on your data. Example: 'from transformers import AutoModel; model = AutoModel.from_pretrained(\"bert-base-uncased\")'",
            "Deploy demos using Hugging Face Spaces (free). Example: Create a Gradio or Streamlit app that showcases your fine-tuned model — share the link in your paper",
        ],
        interpretOutput: [
            "Model cards describe capabilities, limitations, and intended use — read them before using any model. Example: BERT's model card explains it works best for English text and may have biases",
            "Benchmark scores on the model card show expected performance on standard tasks — compare with your fine-tuned results to measure improvement",
            "Community discussions (in the model's 'Community' tab) reveal known issues and best practices — check before spending time on a model that has known problems",
            "License information determines if you can use the model in your research. Example: Some models are 'apache-2.0' (fully open) while others have restrictions",
        ],
        researchTip: "Fine-tuning a pre-trained Hugging Face model on your specific dataset is often more effective than training from scratch — and it's a valid, publishable research contribution. Many top papers use this approach.",
        dos: [
            "✅ DO: Start with pre-trained models and fine-tune. Example: Fine-tuning BERT on your medical text dataset is faster and often better than training a model from scratch",
            "✅ DO: Read the model card before using any model. Example: Check the training data, known limitations, and intended use cases",
            "✅ DO: Deploy a demo on Hugging Face Spaces. Example: A live demo link in your paper lets reviewers interact with your model — very impressive",
        ],
        donts: [
            "❌ DON'T: Use a model without understanding its limitations. Example: A model trained on English text won't work well for Hindi — check the training data language",
            "❌ DON'T: Claim a pre-trained model as your own creation. Example: Say 'We fine-tuned BERT-base on our dataset' not 'We developed a language model' — be transparent about what's pre-trained vs. your contribution",
            "❌ DON'T: Ignore the license. Example: Some models (like LLaMA) have specific usage restrictions — violating them can cause legal issues",
        ],
    },

    "Streamlit": {
        howToUse: [
            "Install with: pip install streamlit (works in any Python environment)",
            "Create a Python file (e.g., app.py) with your demo interface using Streamlit widgets. Example: st.title('Fall Detection Demo'), st.file_uploader('Upload sensor data'), st.button('Predict')",
            "Run locally with: streamlit run app.py — it opens a web browser with your interactive demo",
            "Deploy free on Streamlit Cloud: Push your code to GitHub → Go to share.streamlit.io → Connect your GitHub repo → Click 'Deploy' — your demo gets a public URL",
        ],
        interpretOutput: [
            "User interactions with your demo provide qualitative validation of your research — if users find it useful, your research has practical impact",
            "Deploy the demo and share the link in your paper for interactive results. Example: 'A live demo is available at https://your-app.streamlit.app'",
            "Viewer analytics (available on Streamlit Cloud) show how many people tried your demo — include this as an impact metric",
        ],
        researchTip: "A live Streamlit demo of your research makes your paper stand out. Include the demo URL in your paper — reviewers love interactive results they can try themselves.",
        dos: [
            "✅ DO: Create a simple, focused demo. Example: Upload data → Show prediction → Display confidence score. Keep it to one main interaction",
            "✅ DO: Include the demo URL in your paper. Example: Add it to the abstract or introduction: 'A live demo is available at [URL]'",
            "✅ DO: Add error handling. Example: If a user uploads the wrong file type, show a helpful message instead of crashing",
        ],
        donts: [
            "❌ DON'T: Build an overly complex demo. Example: A demo with 20 options and 5 pages confuses users — keep it simple with one clear workflow",
            "❌ DON'T: Deploy without testing. Example: Test with different inputs, edge cases, and on different browsers before sharing the URL",
            "❌ DON'T: Forget to include requirements.txt in your GitHub repo. Example: Without it, Streamlit Cloud can't install your dependencies and the deployment fails",
        ],
    },

    "Figma": {
        howToUse: [
            "Sign up free at figma.com → Create a new design file → Choose a frame size (Desktop: 1440x900, Mobile: 375x812)",
            "Create wireframes and UI mockups for your research prototype. Example: Design the interface for your fall detection dashboard showing real-time sensor data, alerts, and history",
            "Use the prototyping feature (click 'Prototype' tab) to create clickable demos — link frames together so clicking a button navigates to the next screen",
            "Share the prototype link for user testing and feedback. Example: Click 'Share' → Copy prototype link → Send to potential users for feedback",
        ],
        interpretOutput: [
            "User feedback on prototypes validates your design before building the actual system — this saves weeks of development time",
            "If users struggle with your prototype, the design needs improvement. Example: If 3 out of 5 testers can't find the 'Start Detection' button, it needs to be more prominent",
            "Iterate on the design based on feedback before coding the final version — it's much cheaper to change a Figma design than to rewrite code",
        ],
        researchTip: "Design your prototype in Figma before coding. User testing on a Figma prototype is faster and cheaper than testing on a coded version. Include user testing results in your paper's evaluation section.",
        dos: [
            "✅ DO: Test your prototype with real users. Example: Ask 5 people from your target audience to complete a task using your prototype — observe where they struggle",
            "✅ DO: Include prototype screenshots in your paper. Example: 'Figure 5 shows the proposed dashboard interface designed in Figma and validated through user testing with 10 participants'",
        ],
        donts: [
            "❌ DON'T: Skip user testing. Example: A beautiful design that users can't navigate is useless — always test with real users before coding",
            "❌ DON'T: Over-design before validating the concept. Example: Don't spend weeks on pixel-perfect designs — start with low-fidelity wireframes and iterate based on feedback",
        ],
    },

    // ===== MODULE 17: STARTUP TOOLS =====
    "Lean Canvas (Leanstack)": {
        howToUse: [
            "Go to leanstack.com → Create a free account → Click 'New Canvas' to start a Lean Canvas",
            "Fill in the 9 blocks in this order: 1. Problem (from your research), 2. Customer Segments (who benefits), 3. Unique Value Proposition (what makes your solution special), 4. Solution (your research output), 5. Channels (how to reach customers), 6. Revenue Streams, 7. Cost Structure, 8. Key Metrics, 9. Unfair Advantage",
            "Start with 'Problem' and 'Customer Segments' — these come directly from your research. Example: Problem: 'Elderly fall detection systems have high false alarm rates' → Customer: 'Hospitals, elderly care homes, families of elderly'",
            "Iterate the canvas as you learn more from user validation — it's a living document, not a one-time exercise",
        ],
        interpretOutput: [
            "If you struggle to fill 'Unique Value Proposition', your research may not have clear commercial value yet — that's okay, not all research needs to be commercialized",
            "Empty 'Revenue Streams' means you need to think about monetization before seeking funding. Example: Will you sell software licenses, offer SaaS subscriptions, or license the technology?",
            "The canvas should fit on one page — if it doesn't, your idea needs simplification. A complex canvas usually means an unclear business model",
        ],
        researchTip: "Your research paper's 'Contribution' section maps directly to the Lean Canvas 'Unique Value Proposition'. Use the same language — this creates a clear bridge from research to startup.",
        dos: [
            "✅ DO: Start with the Problem block using your research findings. Example: 'Our research shows that existing methods fail for patients with hypertension — this is the problem we solve'",
            "✅ DO: Validate each block with real data. Example: Don't guess the market size — search for actual statistics on elderly care market in India",
            "✅ DO: Iterate based on feedback. Example: Show your canvas to mentors, potential customers, and incubator advisors — update based on their input",
        ],
        donts: [
            "❌ DON'T: Fill the canvas with assumptions. Example: Don't write 'Revenue: $1M/year' without any market research — use realistic, data-backed estimates",
            "❌ DON'T: Skip the 'Unfair Advantage' block. Example: Your unfair advantage might be your research expertise, published papers, or unique dataset — identify what competitors can't easily copy",
            "❌ DON'T: Treat the canvas as final. Example: Your first canvas will be wrong — that's normal. Update it every time you learn something new from the market",
        ],
    },

    "Indian Patent Search (IPIndia)": {
        howToUse: [
            "Go to ipindia.gov.in → Click 'Patent Search' or 'InPASS' (Indian Patent Advanced Search System)",
            "Search by keyword, applicant name, or patent number. Example: Search 'fall detection wearable sensor' to see existing patents in your domain",
            "Review existing patents to ensure your invention is novel — if a similar patent exists, you need a clear differentiator",
            "Check patent status: 'Granted' (active protection), 'Pending' (under review), 'Expired' (technology is now public domain), 'Abandoned' (applicant gave up)",
        ],
        interpretOutput: [
            "If similar patents exist, your invention needs a clear differentiator. Example: If a patent exists for 'fall detection using accelerometer', your patent could focus on 'fall detection using accelerometer + gyroscope + heart rate for hypertensive patients'",
            "Expired patents mean the technology is now in the public domain — you can use it freely but can't patent the same thing again",
            "Pending patents show active innovation in your area — both competition and validation that the field has commercial potential",
            "Note the 'Claims' section — this defines what the patent actually protects. Your invention must differ from these specific claims",
        ],
        researchTip: "Search patents BEFORE filing. If a similar patent exists, you'll need to clearly articulate how your invention differs in the claims. Your university's IP cell can help with the filing process.",
        dos: [
            "✅ DO: Search patents before filing. Example: A thorough prior art search saves the filing fee if a similar patent already exists",
            "✅ DO: Read the 'Claims' section of similar patents. Example: Claims define the exact scope of protection — your invention must differ from these specific claims",
            "✅ DO: Consult your university's IP cell. Example: Most universities have an Intellectual Property cell that helps students file patents — they handle the legal complexity",
        ],
        donts: [
            "❌ DON'T: Publish your invention before filing a patent. Example: Once you publish a paper describing your invention, it becomes 'prior art' and may not be patentable — file first, then publish",
            "❌ DON'T: File without a novelty search. Example: Filing a patent that already exists wastes money (filing fees) and time (months of review)",
            "❌ DON'T: Try to file without professional help. Example: Patent claims require specific legal language — work with your university's IP cell or a patent attorney",
        ],
    },

    "Startup India Portal": {
        howToUse: [
            "Go to startupindia.gov.in → Click 'Register' to create an account with your Aadhaar or PAN",
            "Explore available schemes: tax benefits (3-year tax holiday), funding (Fund of Funds), mentorship programs, and fast-track patent filing",
            "Apply for DPIIT (Department for Promotion of Industry and Internal Trade) recognition — this unlocks government benefits for your startup",
            "Browse the 'Learning Program' for free entrepreneurship courses — these cover business planning, funding, legal compliance, and marketing",
        ],
        interpretOutput: [
            "DPIIT recognition unlocks significant benefits: 3-year income tax exemption, easier compliance, access to government tenders, and fast-track patent examination",
            "The 'Fund of Funds' provides indirect funding through SEBI-registered venture capital funds — you apply to the VC funds, not directly to the government",
            "State-specific schemes may offer additional benefits — check your state's startup policy. Example: Karnataka, Telangana, and Maharashtra have generous startup policies",
        ],
        researchTip: "Register on Startup India even at the idea stage. The learning resources and networking opportunities are valuable long before you need funding. Many university incubators require Startup India registration.",
        dos: [
            "✅ DO: Register early, even at the idea stage. Example: Registration is free and gives you access to learning resources, mentorship, and networking events",
            "✅ DO: Apply for DPIIT recognition once you have a prototype. Example: DPIIT recognition gives you credibility when approaching investors and customers",
            "✅ DO: Check state-specific schemes. Example: Karnataka Startup Policy offers seed funding up to ₹50 lakhs — check if your state has similar programs",
        ],
        donts: [
            "❌ DON'T: Wait until you have a product to register. Example: The learning resources and mentorship are most valuable during the early ideation stage",
            "❌ DON'T: Ignore the legal requirements. Example: Even a student startup needs basic compliance — GST registration, company incorporation, etc. The portal guides you through these",
            "❌ DON'T: Apply for funding without a clear business plan. Example: VCs funded through Fund of Funds expect a solid pitch deck, market analysis, and financial projections",
        ],
    },
};

// Helper function to get instructions for a tool
export function getToolInstructions(toolName: string): ToolInstruction | null {
    return instructions[toolName] || null;
}

export default instructions;
