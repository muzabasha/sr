export interface QuizQuestion {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
}

export interface DoAndDont {
    do: string[];
    dont: string[];
}

export interface AITool {
    name: string;
    url: string;
    description: string;
    category: string;
    freeTag: string;
    howToUse?: string[];
    interpretOutput?: string[];
    researchTip?: string;
}

export interface CaseStudyItem {
    title: string;
    type: "success" | "failure";
    story: string;
    lesson: string;
}

export interface Module {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
    color: string;
    analogy: string;
    overview: string;
    slides: Slide[];
    quiz: QuizQuestion[];
    doAndDont: DoAndDont;
    caseStudy: string;
    caseStudies?: CaseStudyItem[];
    ethicsCheckpoint: string;
    aiTools: AITool[];
}

export interface Slide {
    title: string;
    content: string;
    type: "text" | "interactive" | "comparison" | "diagram" | "activity";
    bulletPoints?: string[];
    tableData?: { headers: string[]; rows: string[][] };
    interactiveType?: string;
}

export const modules: Module[] = [
    {
        id: 1,
        title: "Research Mindset Development",
        subtitle: "From Curiosity to Researcher Mindset",
        icon: "🧠",
        color: "from-purple-500 to-indigo-600",
        analogy: "Research is like a Scientific Adventure — you start with curiosity as your compass, questions as your map, and methodology as your vehicle.",
        overview: "Transform your natural curiosity into a structured research mindset. Learn to think like a researcher by identifying your strengths, interests, and potential domains.",
        slides: [
            {
                title: "What is a Research Mindset?",
                content: "A research mindset is the ability to approach problems systematically, question assumptions, and seek evidence-based answers. It transforms everyday curiosity into structured inquiry.",
                type: "text",
                bulletPoints: [
                    "Curiosity → Asking 'Why?' and 'How?'",
                    "Critical Thinking → Evaluating evidence objectively",
                    "Persistence → Embracing failure as learning",
                    "Ethical Awareness → Conducting research responsibly"
                ]
            },
            {
                title: "Hard Work vs Smart Work in Research",
                content: "Understanding the difference between working hard and working smart is crucial for research success.",
                type: "comparison",
                tableData: {
                    headers: ["Dimension", "Hard Work (Traditional)", "Smart Work (AI-Assisted)"],
                    rows: [
                        ["Literature Search", "Manually reading 100+ papers", "AI-powered summarization + targeted reading"],
                        ["Data Analysis", "Manual calculations in spreadsheets", "Automated analysis with validation"],
                        ["Writing", "Writing everything from scratch", "AI grammar check + original thinking"],
                        ["Thinking Style", "Reactive — solving problems as they come", "Proactive — anticipating research gaps"]
                    ]
                }
            },
            {
                title: "Self-Assessment: Discover Your Research DNA",
                content: "Take this quick assessment to discover your research strengths and potential domains.",
                type: "interactive",
                interactiveType: "selfAssessment"
            },
            {
                title: "Your Research Domain Map",
                content: "Based on your interests, here are potential research domains you could explore.",
                type: "diagram",
                bulletPoints: [
                    "AI & Machine Learning — Pattern recognition, prediction, automation",
                    "Healthcare Technology — Wearables, diagnostics, telemedicine",
                    "Cybersecurity — Threat detection, privacy, encryption",
                    "Data Science — Analytics, visualization, big data",
                    "IoT & Smart Systems — Connected devices, smart cities, automation"
                ]
            }
        ],
        quiz: [
            {
                question: "What is the first step in developing a research mindset?",
                options: ["Memorizing research papers", "Developing curiosity and asking questions", "Learning programming", "Getting a PhD"],
                correct: 1,
                explanation: "Research begins with curiosity — the ability to ask meaningful questions about the world around you."
            },
            {
                question: "Which approach represents 'Smart Work' in research?",
                options: ["Reading every paper manually", "Using AI to summarize papers then reading key ones critically", "Copying AI-generated content", "Avoiding technology completely"],
                correct: 1,
                explanation: "Smart work means using AI tools responsibly to enhance efficiency while maintaining critical thinking."
            },
            {
                question: "What distinguishes a proactive researcher from a reactive one?",
                options: ["Proactive researchers only use AI tools", "Proactive researchers anticipate gaps and plan ahead", "Reactive researchers are always better", "There is no difference"],
                correct: 1,
                explanation: "Proactive researchers anticipate research gaps and plan their approach, rather than just responding to problems."
            }
        ],
        doAndDont: {
            do: [
                "Cultivate genuine curiosity about your field",
                "Question assumptions and seek evidence",
                "Use AI tools to enhance understanding",
                "Maintain a research journal of ideas"
            ],
            dont: [
                "Blindly accept information without verification",
                "Rush into research without proper planning",
                "Rely solely on AI for generating ideas",
                "Ignore ethical considerations from the start"
            ]
        },
        caseStudy: "Ravi, a 2nd-year undergraduate, was curious about why his grandmother's blood pressure monitor sometimes gave inaccurate readings. Instead of just complaining, he started researching wearable health sensors. This curiosity led him to publish a paper on 'Improving Blood Pressure Monitoring Accuracy using Multi-Sensor Fusion' in an IEEE conference.",
        caseStudies: [
            { title: "Ravi's Curiosity Became a Published Paper", type: "success", story: "Ravi, a 2nd-year undergraduate, noticed his grandmother's blood pressure monitor gave inaccurate readings. Instead of ignoring it, he asked 'Why does this happen?' He started reading about wearable health sensors, found that single-sensor devices have accuracy issues, and proposed a multi-sensor fusion approach. He published his findings at an IEEE conference and won the Best Student Paper award.", lesson: "Every great research journey starts with a simple 'Why?' question from daily life. Ravi didn't need a lab or funding to start — just curiosity and Google Scholar." },
            { title: "Neha Chose a Trendy Topic She Didn't Care About", type: "failure", story: "Neha picked 'Blockchain in Supply Chain' because it was trending on LinkedIn. She had zero interest in blockchain or supply chains. After 3 months, she couldn't motivate herself to read papers, her literature review was shallow, and her advisor noticed her lack of depth. She eventually abandoned the topic and lost 3 months.", lesson: "Never choose a research topic just because it's trendy. Genuine curiosity sustains you through the hard months of research. Pick something YOU care about." },
            { title: "Arun's Gaming Hobby Became AI Research", type: "success", story: "Arun loved playing video games and was told 'gaming is a waste of time.' He channeled his passion into researching AI for game design — specifically, procedural content generation using reinforcement learning. His unique perspective as a gamer gave him insights that pure CS researchers missed. His paper was accepted at a top game AI workshop.", lesson: "Your hobbies and interests are not distractions — they're potential research domains. The intersection of your passion and technology is where original research happens." }
        ],
        ethicsCheckpoint: "Before starting your research journey, commit to the Research Integrity Pledge: I will conduct research honestly, give proper credit, use AI tools responsibly, and never fabricate or plagiarize data.",
        aiTools: [
            { name: "ChatGPT (Free)", url: "https://chat.openai.com", description: "Brainstorm research interests, explore domains, and get explanations of unfamiliar fields", category: "Brainstorming", freeTag: "Free tier available" },
            { name: "Google Gemini", url: "https://gemini.google.com", description: "Explore research areas, get domain overviews, and discover trending topics", category: "Brainstorming", freeTag: "Free" },
            { name: "Perplexity AI", url: "https://www.perplexity.ai", description: "Ask questions about research fields with cited sources for verification", category: "Research Discovery", freeTag: "Free tier available" },
            { name: "MindMeister", url: "https://www.mindmeister.com", description: "Create mind maps to visually organize your research interests and ideas", category: "Mind Mapping", freeTag: "Free tier (3 maps)" },
            { name: "Coggle", url: "https://coggle.it", description: "Collaborative mind mapping tool to brainstorm research directions", category: "Mind Mapping", freeTag: "Free tier available" },
        ]
    },
    {
        id: 2,
        title: "Identifying Research Domain",
        subtitle: "Converting Curiosity into Research Topics",
        icon: "🔍",
        color: "from-blue-500 to-cyan-600",
        analogy: "Finding your research domain is like choosing your adventure path in a game — each path leads to unique discoveries, but you must pick the one that excites you most.",
        overview: "Learn to transform everyday observations and curiosity into well-defined research topics and domains.",
        slides: [
            {
                title: "From Curiosity to Research Topic",
                content: "Every great research paper started with a simple question. The key is learning to transform that question into a structured research topic.",
                type: "text",
                bulletPoints: [
                    "Step 1: Identify what fascinates you (Curiosity)",
                    "Step 2: Narrow it to a specific domain (Focus)",
                    "Step 3: Find the problem within that domain (Problem)",
                    "Step 4: Frame it as a research question (Research Topic)"
                ]
            },
            {
                title: "The Curiosity-to-Topic Pipeline",
                content: "See how everyday observations become research topics.",
                type: "diagram",
                bulletPoints: [
                    "Curiosity: 'Why do elderly people fall frequently?'",
                    "Domain: Healthcare AI / Wearable Technology",
                    "Problem: Existing fall detection systems have limited accuracy",
                    "Research Topic: Fall Detection using Wearable Sensors with ML"
                ]
            },
            {
                title: "Generate Your Research Topic",
                content: "Enter your area of interest and explore possible research topics.",
                type: "interactive",
                interactiveType: "topicGenerator"
            },
            {
                title: "Research Domain Explorer",
                content: "Explore trending research domains and find your fit.",
                type: "comparison",
                tableData: {
                    headers: ["Domain", "Hot Topics", "Tools Used", "Impact Area"],
                    rows: [
                        ["AI/ML", "LLMs, Computer Vision, NLP", "Python, TensorFlow, PyTorch", "Automation, Healthcare, Education"],
                        ["Cybersecurity", "Zero Trust, AI Threats, Privacy", "Wireshark, Metasploit, Python", "Banking, Government, Defense"],
                        ["IoT", "Smart Health, Agriculture, Cities", "Arduino, Raspberry Pi, MQTT", "Agriculture, Healthcare, Urban"],
                        ["Data Science", "Big Data, Predictive Analytics", "R, Python, Spark, Tableau", "Business, Research, Policy"],
                        ["Healthcare Tech", "Telemedicine, Wearables, Genomics", "MATLAB, Python, Sensors", "Patient Care, Diagnostics"]
                    ]
                }
            }
        ],
        quiz: [
            {
                question: "What is the correct order for converting curiosity to a research topic?",
                options: ["Topic → Domain → Curiosity → Problem", "Curiosity → Domain → Problem → Research Topic", "Problem → Curiosity → Domain → Topic", "Domain → Topic → Problem → Curiosity"],
                correct: 1,
                explanation: "The natural flow is: Curiosity leads to identifying a Domain, finding a Problem within it, and framing a Research Topic."
            },
            {
                question: "Which is a well-formed research topic?",
                options: ["I like AI", "AI is interesting", "Fall Detection using Wearable Sensors with Machine Learning", "Something about healthcare"],
                correct: 2,
                explanation: "A good research topic is specific, mentions the method, and clearly defines the problem area."
            }
        ],
        doAndDont: {
            do: ["Start from personal interests and observations", "Narrow down broad topics to specific problems", "Explore multiple domains before committing", "Use AI to explore trending topics in your area"],
            dont: ["Choose a topic just because it sounds impressive", "Pick an overly broad or vague topic", "Ignore your genuine interests", "Let AI choose your research topic for you"]
        },
        caseStudy: "Priya noticed her farmer father struggling with crop diseases. Her curiosity about 'Why can't we detect plant diseases early?' led her to the domain of Agricultural AI. She developed a mobile app using CNN-based image classification for early detection of tomato leaf diseases, which won a national hackathon.",
        caseStudies: [
            { title: "Priya's Farm Problem Became a National Award", type: "success", story: "Priya noticed her farmer father struggling to identify crop diseases early. Her curiosity — 'Why can't we detect plant diseases early using a phone camera?' — led her to Agricultural AI. She built a CNN-based mobile app for tomato leaf disease detection using a Kaggle dataset. The app won a national hackathon, got incubated at her university, and is now used by 500+ farmers in Karnataka.", lesson: "The best research topics come from real problems you've personally witnessed. Priya didn't need a fancy lab — she needed a phone camera, a dataset, and genuine motivation." },
            { title: "Suresh Picked 'AI in Healthcare' Without Narrowing Down", type: "failure", story: "Suresh chose 'Artificial Intelligence in Healthcare' as his research topic. When his advisor asked 'Which disease? Which AI method? Which data?', he had no answers. He spent 4 months reading hundreds of papers across cancer, diabetes, mental health, and radiology without focus. He never published because he couldn't narrow down to a specific, achievable research question.", lesson: "'AI in Healthcare' is a field, not a research topic. Always narrow down: Which disease? Which AI technique? Which type of data? Which patient population? Specificity is the key to achievable research." },
            { title: "Kavya Connected Two Unrelated Interests", type: "success", story: "Kavya loved music and was studying Computer Science. She combined both by researching 'AI-based Raga Recognition in Indian Classical Music.' Nobody in her department had worked on this, but she found 15 papers on music information retrieval. Her unique angle — applying deep learning to a culturally specific music system — got published in a Springer journal.", lesson: "Don't limit yourself to 'standard' research topics. Combining two seemingly unrelated interests often creates the most original and publishable research." }
        ],
        ethicsCheckpoint: "When using AI to explore research topics, always verify the suggestions against real-world problems. AI can suggest topics, but the genuine interest and validation must come from you.",
        aiTools: [
            { name: "Semantic Scholar", url: "https://www.semanticscholar.org", description: "AI-powered academic search engine to discover trending research topics and papers", category: "Topic Discovery", freeTag: "Free" },
            { name: "Connected Papers", url: "https://www.connectedpapers.com", description: "Visual tool to explore related papers and find research clusters in your interest area", category: "Topic Discovery", freeTag: "Free (5 graphs/month)" },
            { name: "Research Rabbit", url: "https://www.researchrabbit.ai", description: "Discover papers and research topics through AI-powered recommendations", category: "Topic Discovery", freeTag: "Free" },
            { name: "Litmaps", url: "https://www.litmaps.com", description: "Visualize research landscapes and discover new topics through citation mapping", category: "Visualization", freeTag: "Free tier available" },
            { name: "Elicit", url: "https://elicit.com", description: "AI research assistant that helps find relevant papers and extract key findings for topic exploration", category: "Research Assistant", freeTag: "Free tier available" },
            { name: "Google Trends", url: "https://trends.google.com", description: "Explore trending search topics to identify areas of growing public and research interest", category: "Trend Analysis", freeTag: "Free" },
        ]
    },
    {
        id: 3,
        title: "Ethical Use of AI Tools",
        subtitle: "Responsible AI in Research",
        icon: "⚖️",
        color: "from-emerald-500 to-teal-600",
        analogy: "AI in research is like a GPS navigator — it can guide you efficiently, but you must still drive the car. Blindly following it can lead you off a cliff.",
        overview: "Understand where AI can help responsibly in research and where it crosses ethical boundaries.",
        slides: [
            {
                title: "Where AI Can Help Responsibly",
                content: "AI tools can be powerful allies in research when used ethically.",
                type: "comparison",
                tableData: {
                    headers: ["Research Stage", "Ethical AI Usage", "What AI Should NOT Do"],
                    rows: [
                        ["Literature Search", "Summarizing papers, finding related work", "Generating fake references"],
                        ["Reading", "Explaining complex concepts, translating", "Replacing critical reading"],
                        ["Writing", "Grammar improvement, structure suggestions", "Writing entire sections for you"],
                        ["Coding", "Code debugging, syntax help", "Generating code you don't understand"],
                        ["Analysis", "Data visualization, pattern finding", "Fabricating or manipulating data"]
                    ]
                }
            },
            {
                title: "The Red Lines of AI in Research",
                content: "These are absolute violations of research ethics that can end your academic career.",
                type: "text",
                bulletPoints: [
                    "❌ Generate fake references or citations",
                    "❌ Copy AI-generated text directly as your own",
                    "❌ Submit AI-generated papers as original research",
                    "❌ Use AI to fabricate experimental data",
                    "❌ Hide AI usage from reviewers and advisors",
                    "✅ Always disclose AI tool usage in your methodology"
                ]
            },
            {
                title: "AI Ethics Decision Simulator",
                content: "Test your ethical judgment with real-world scenarios.",
                type: "interactive",
                interactiveType: "ethicsSimulator"
            },
            {
                title: "Ethical AI Guidelines for Researchers",
                content: "Follow these guidelines to use AI responsibly in your research.",
                type: "text",
                bulletPoints: [
                    "Transparency: Always disclose AI tool usage",
                    "Verification: Cross-check all AI-generated content",
                    "Attribution: Credit AI tools in your methodology",
                    "Understanding: Never use AI output you don't understand",
                    "Originality: Your ideas and analysis must be your own",
                    "Integrity: Never let AI replace your critical thinking"
                ]
            }
        ],
        quiz: [
            {
                question: "Which of the following is an ethical use of AI in research?",
                options: ["Generating fake citations", "Using AI to improve grammar in your paper", "Submitting AI-written text as your own", "Using AI to fabricate data"],
                correct: 1,
                explanation: "Using AI for grammar improvement is ethical as long as the ideas and content are originally yours."
            },
            {
                question: "What should you always do when using AI tools in research?",
                options: ["Hide it from your advisor", "Disclose AI usage in your methodology", "Use it for everything", "Never use it at all"],
                correct: 1,
                explanation: "Transparency is key — always disclose how and where you used AI tools in your research."
            },
            {
                question: "A student uses ChatGPT to generate an entire literature review. Is this ethical?",
                options: ["Yes, AI is a tool", "Yes, if they cite ChatGPT", "No, the review must reflect their own understanding", "No, but only if they get caught"],
                correct: 2,
                explanation: "A literature review must demonstrate YOUR understanding of the field. AI can help you understand papers, but the synthesis must be yours."
            }
        ],
        doAndDont: {
            do: ["Use AI to understand complex concepts", "Disclose AI usage transparently", "Verify all AI-generated information", "Use AI as a learning aid, not a replacement"],
            dont: ["Generate fake references using AI", "Copy AI text directly into your paper", "Submit AI-generated work as original", "Use AI to fabricate or manipulate data"]
        },
        caseStudy: "A PhD student used ChatGPT to generate references for their thesis. The examiner discovered that 40% of the cited papers didn't exist. The student's degree was revoked, and they were banned from the university. This could have been avoided by simply verifying each reference.",
        caseStudies: [
            { title: "PhD Student's Degree Revoked for Fake AI References", type: "failure", story: "A PhD student used ChatGPT to generate 30 references for their thesis literature review. They didn't verify any of them. During the viva voce, the examiner searched for 5 random references — 3 didn't exist at all (ChatGPT had hallucinated them). The university revoked the degree, banned the student, and the case was reported to the national academic integrity board.", lesson: "NEVER trust AI-generated references without verification. Every single reference must be verified on Google Scholar or the publisher's website. Fake references = academic fraud = career destruction." },
            { title: "Anita Used AI Ethically and Got Published Faster", type: "success", story: "Anita used ChatGPT to brainstorm research directions and understand complex concepts. She always verified AI suggestions against real papers, wrote everything in her own words, and added a transparency statement: 'ChatGPT was used for initial brainstorming. All content was independently verified and written by the authors.' Her paper was accepted at an IEEE conference, and the reviewer specifically praised her ethical AI disclosure.", lesson: "Using AI tools is not wrong — using them without transparency is. Disclose your AI usage, verify everything, and write in your own words. Ethical AI use can actually speed up your research." },
            { title: "Student Submitted AI-Generated Abstract and Got Caught", type: "failure", story: "Rohan asked ChatGPT to write his paper's abstract. He submitted it without changes. The journal used an AI detection tool (GPTZero) and flagged the abstract as 95% AI-generated. The paper was desk-rejected with a note: 'Suspected AI-generated content.' Rohan's name was flagged in the journal's system, making future submissions harder.", lesson: "Journals are increasingly using AI detection tools. Even if the content is factually correct, submitting AI-written text as your own is plagiarism. Use AI to understand and brainstorm, then write everything yourself." }
        ],
        ethicsCheckpoint: "Before using any AI tool in your research, ask yourself: 'Am I using this to enhance my understanding, or to replace my thinking?' If it's the latter, stop.",
        aiTools: [
            { name: "Grammarly", url: "https://www.grammarly.com", description: "AI-powered grammar and clarity checker — ethical for polishing your own writing", category: "Writing Aid", freeTag: "Free tier available" },
            { name: "QuillBot", url: "https://quillbot.com", description: "Paraphrasing tool to help rephrase your own ideas more clearly (use ethically!)", category: "Writing Aid", freeTag: "Free tier available" },
            { name: "Turnitin (via institution)", url: "https://www.turnitin.com", description: "Plagiarism detection tool to check your work before submission", category: "Integrity Check", freeTag: "Free via most universities" },
            { name: "Duplichecker", url: "https://www.duplichecker.com", description: "Free plagiarism checker to verify originality of your writing", category: "Integrity Check", freeTag: "Free" },
            { name: "ChatGPT (Free)", url: "https://chat.openai.com", description: "Use to understand complex concepts — never to generate text for submission", category: "Learning Aid", freeTag: "Free tier available" },
            { name: "AI Ethics Guidelines (UNESCO)", url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics", description: "Reference guide for ethical AI use in research and education", category: "Ethics Reference", freeTag: "Free" },
        ]
    },
    {
        id: 4,
        title: "Searching Research Papers",
        subtitle: "Finding the Right Literature",
        icon: "📚",
        color: "from-orange-500 to-red-500",
        analogy: "Searching for research papers is like mining for gold — you need the right tools, the right location, and patience to find the valuable nuggets.",
        overview: "Master the art of finding relevant research papers using academic databases and citation networks.",
        slides: [
            {
                title: "Academic Search Engines",
                content: "Know your tools for finding research papers.",
                type: "comparison",
                tableData: {
                    headers: ["Platform", "Best For", "Access", "Key Feature"],
                    rows: [
                        ["Google Scholar", "Broad search across all fields", "Free", "Citation tracking, related papers"],
                        ["Scopus", "High-quality indexed journals", "Institutional", "Author profiles, analytics"],
                        ["IEEE Xplore", "Engineering & CS papers", "Institutional/Paid", "Conference proceedings"],
                        ["PubMed", "Biomedical & life sciences", "Free", "MEDLINE database"],
                        ["arXiv", "Preprints in STEM fields", "Free", "Latest research, open access"]
                    ]
                }
            },
            {
                title: "Citation Networks",
                content: "Understanding citation networks helps you trace the evolution of ideas and find seminal papers.",
                type: "diagram",
                bulletPoints: [
                    "Forward Citations: Who cited this paper? (Find newer work)",
                    "Backward Citations: Who did this paper cite? (Find foundational work)",
                    "Co-citation: Papers frequently cited together (Find related work)",
                    "Author Networks: Follow prolific researchers in your domain"
                ]
            },
            {
                title: "Search Strategy Builder",
                content: "Build effective search queries using Boolean operators and keywords.",
                type: "interactive",
                interactiveType: "searchBuilder"
            },
            {
                title: "Following Research Lineage",
                content: "Track the evolution of research by following author groups and their publication history.",
                type: "text",
                bulletPoints: [
                    "Find a key paper in your area",
                    "Check the author's other publications",
                    "Look at their research group's work",
                    "Trace the citation chain forward and backward",
                    "Identify the research trajectory and gaps"
                ]
            }
        ],
        quiz: [
            {
                question: "Which platform is best for finding biomedical research papers?",
                options: ["IEEE Xplore", "PubMed", "Stack Overflow", "Wikipedia"],
                correct: 1,
                explanation: "PubMed is the premier database for biomedical and life sciences literature."
            },
            {
                question: "What does 'forward citation' mean?",
                options: ["Papers this paper cited", "Papers that cited this paper", "Papers by the same author", "Papers in the same journal"],
                correct: 1,
                explanation: "Forward citations are newer papers that have cited the paper you're reading — they show how the research evolved."
            }
        ],
        doAndDont: {
            do: ["Use multiple databases for comprehensive search", "Follow citation networks to find related work", "Use Boolean operators for precise searches", "Track prolific authors in your domain"],
            dont: ["Rely only on Google for academic search", "Ignore citation networks", "Use only the first page of results", "Skip reading abstracts before downloading"]
        },
        caseStudy: "Amit was researching 'sentiment analysis' but found thousands of irrelevant papers. By using Boolean search ('sentiment analysis' AND 'social media' AND 'deep learning' NOT 'product reviews') on Scopus, he narrowed results to 47 highly relevant papers and completed his literature review in 2 weeks instead of 2 months.",
        caseStudies: [
            { title: "Amit Mastered Boolean Search and Saved 6 Weeks", type: "success", story: "Amit was drowning in 3,000+ results for 'sentiment analysis' on Google Scholar. His advisor taught him Boolean operators. He searched: ('sentiment analysis' AND 'social media' AND 'deep learning' NOT 'product reviews') on Scopus. Results dropped to 47 highly relevant papers. He completed his literature review in 2 weeks instead of the 2 months he'd been struggling.", lesson: "Learning Boolean search operators (AND, OR, NOT, quotes) is the single most time-saving skill in research. 10 minutes learning these operators saves weeks of reading irrelevant papers." },
            { title: "Deepa Only Used Google (Not Google Scholar)", type: "failure", story: "Deepa searched her research topic on regular Google instead of Google Scholar. She found blog posts, Wikipedia articles, and news stories. She cited 3 blog posts and a Wikipedia page in her paper. The reviewer rejected it immediately, writing: 'The literature review cites non-academic sources. This is unacceptable for a research paper.'", lesson: "Regular Google is NOT a research database. Always use Google Scholar, Scopus, IEEE Xplore, or PubMed for academic papers. Blog posts and Wikipedia are for understanding, not for citing." },
            { title: "Farhan Used Citation Tracking to Find His Entire Literature", type: "success", story: "Farhan found one excellent 2020 paper on his topic. He clicked 'Cited by' on Google Scholar and found 85 papers that cited it. He then checked the references of those papers (backward citation). In 3 days, he had a complete map of 40 key papers spanning 2018-2024, organized by method, dataset, and results.", lesson: "The 'Cited by' feature is the most powerful tool in Google Scholar. Start with one good paper, go forward (who cited it?) and backward (what did it cite?), and you'll find your entire literature." }
        ],
        ethicsCheckpoint: "When using AI to search for papers, always verify that the papers actually exist. AI tools sometimes hallucinate paper titles and authors.",
        aiTools: [
            { name: "Google Scholar", url: "https://scholar.google.com", description: "The most widely used free academic search engine with citation tracking", category: "Paper Search", freeTag: "Free" },
            { name: "Semantic Scholar", url: "https://www.semanticscholar.org", description: "AI-powered search with TLDR summaries, citation context, and influence scores", category: "Paper Search", freeTag: "Free" },
            { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov", description: "Free database for biomedical and life sciences literature", category: "Paper Search", freeTag: "Free" },
            { name: "arXiv", url: "https://arxiv.org", description: "Open-access preprint repository for STEM fields — latest research before journal publication", category: "Paper Search", freeTag: "Free" },
            { name: "CORE", url: "https://core.ac.uk", description: "Aggregator of open-access research papers from repositories worldwide", category: "Open Access", freeTag: "Free" },
            { name: "Connected Papers", url: "https://www.connectedpapers.com", description: "Build visual citation graphs to discover related papers and trace research lineage", category: "Citation Network", freeTag: "Free (5 graphs/month)" },
            { name: "Inciteful", url: "https://inciteful.xyz", description: "Build citation networks from a seed paper to find the most important related work", category: "Citation Network", freeTag: "Free" },
        ]
    },
    {
        id: 5,
        title: "Shortlisting Research Papers",
        subtitle: "The Golden Paper Selection Strategy",
        icon: "⭐",
        color: "from-yellow-500 to-amber-600",
        analogy: "Shortlisting papers is like assembling a dream team — you need different players with different strengths to cover all aspects of your research.",
        overview: "Learn the Golden Research Paper Selection Strategy to build a strong foundation for your literature review.",
        slides: [
            {
                title: "The Golden Selection Strategy",
                content: "Select 5 key papers that form the backbone of your research understanding.",
                type: "text",
                bulletPoints: [
                    "1 Tutorial/Survey Paper — Gives you the big picture of the field",
                    "1 Recent Literature Review (SCI Journal) — Shows current state of the art",
                    "3 Experimental Research Papers — Provide methodology and results to compare",
                    "Total: 5 papers that cover breadth and depth of your topic"
                ]
            },
            {
                title: "Paper Classification Guide",
                content: "Learn to identify different types of research papers.",
                type: "comparison",
                tableData: {
                    headers: ["Paper Type", "Characteristics", "Where to Find", "Purpose"],
                    rows: [
                        ["Tutorial/Survey", "Comprehensive overview, 50+ references", "IEEE, ACM Surveys", "Understand the field"],
                        ["Literature Review", "Systematic analysis, recent (< 3 years)", "SCI Journals", "Know current state"],
                        ["Experimental", "Novel method, datasets, results", "Conferences, Journals", "Learn methodologies"],
                        ["Position Paper", "Opinion, future directions", "Workshops, Symposiums", "Understand trends"],
                        ["Short Paper", "Preliminary results, 4-6 pages", "Conferences", "Quick insights"]
                    ]
                }
            },
            {
                title: "Paper Classification Activity",
                content: "Drag and drop papers into the correct categories.",
                type: "interactive",
                interactiveType: "paperClassification"
            }
        ],
        quiz: [
            {
                question: "How many papers does the Golden Selection Strategy recommend?",
                options: ["3", "5", "10", "20"],
                correct: 1,
                explanation: "The strategy recommends 5 key papers: 1 tutorial, 1 literature review, and 3 experimental papers."
            },
            {
                question: "Why include a tutorial/survey paper?",
                options: ["It's easy to read", "It gives a comprehensive overview of the field", "It has the most citations", "It's the newest paper"],
                correct: 1,
                explanation: "Tutorial/survey papers provide a broad understanding of the field, its history, and key concepts."
            }
        ],
        doAndDont: {
            do: ["Follow the 5-paper golden strategy", "Include papers from different years", "Prioritize SCI/Scopus indexed papers", "Read abstracts before shortlisting"],
            dont: ["Select papers randomly", "Only choose papers that support your hypothesis", "Ignore older foundational papers", "Select papers only from one source"]
        },
        caseStudy: "Sneha was overwhelmed by 200+ papers on 'object detection.' Using the Golden Strategy, she selected 1 YOLO survey paper, 1 recent review from a Q1 journal, and 3 experimental papers (YOLO v5, EfficientDet, DETR). This gave her a complete picture in just 5 papers.",
        ethicsCheckpoint: "When shortlisting papers, ensure you're not cherry-picking only papers that support your hypothesis. Good research considers all perspectives, including contradictory findings.",
        aiTools: [
            { name: "Elicit", url: "https://elicit.com", description: "AI assistant that extracts key findings, methods, and results from papers for quick comparison", category: "Paper Analysis", freeTag: "Free tier available" },
            { name: "Research Rabbit", url: "https://www.researchrabbit.ai", description: "Get AI-recommended papers based on your collection — great for finding the right 5 papers", category: "Recommendation", freeTag: "Free" },
            { name: "Scite.ai", url: "https://scite.ai", description: "See how papers have been cited — supporting, contrasting, or mentioning — to assess quality", category: "Citation Analysis", freeTag: "Free tier available" },
            { name: "Litmaps", url: "https://www.litmaps.com", description: "Create visual literature maps to identify survey papers, reviews, and key experimental work", category: "Visualization", freeTag: "Free tier available" },
            { name: "Zotero", url: "https://www.zotero.org", description: "Free reference manager to organize, tag, and categorize your shortlisted papers", category: "Reference Manager", freeTag: "Free" },
            { name: "Mendeley", url: "https://www.mendeley.com", description: "Reference manager with PDF annotation and paper organization features", category: "Reference Manager", freeTag: "Free" },
        ]
    },
    {
        id: 6,
        title: "Critical Reading of Papers",
        subtitle: "Anatomy of a Research Paper",
        icon: "📖",
        color: "from-pink-500 to-rose-600",
        analogy: "Reading a research paper is like exploring a building — the abstract is the entrance, the introduction is the lobby, methodology is the blueprint, and results are the rooms you came to see.",
        overview: "Master the structure of research papers and learn to read them critically and efficiently.",
        slides: [
            {
                title: "Anatomy of a Research Paper",
                content: "Every research paper follows a standard structure. Understanding it helps you read efficiently.",
                type: "text",
                bulletPoints: [
                    "1. Abstract — Summary of the entire paper (read first!)",
                    "2. Introduction — Background, motivation, and objectives",
                    "3. Literature Review — What others have done",
                    "4. Methodology — How the research was conducted",
                    "5. Experiments — Setup, datasets, parameters",
                    "6. Results — Findings and data",
                    "7. Discussion — Interpretation and implications",
                    "8. Conclusion — Summary and future work"
                ]
            },
            {
                title: "The 3-Pass Reading Strategy",
                content: "Don't try to understand everything in one read. Use the 3-pass strategy.",
                type: "comparison",
                tableData: {
                    headers: ["Pass", "Focus", "Time", "Goal"],
                    rows: [
                        ["1st Pass", "Title, Abstract, Headings, Figures", "5-10 min", "Should I read this paper?"],
                        ["2nd Pass", "Introduction, Results, Conclusion", "30-60 min", "What did they find?"],
                        ["3rd Pass", "Full paper with methodology details", "2-4 hours", "Can I reproduce this?"]
                    ]
                }
            },
            {
                title: "Paper Analysis Exercise",
                content: "Analyze a sample research paper by identifying its key sections and contributions.",
                type: "interactive",
                interactiveType: "paperAnalysis"
            }
        ],
        quiz: [
            {
                question: "What should you read first in a research paper?",
                options: ["Methodology", "Abstract", "References", "Conclusion"],
                correct: 1,
                explanation: "The abstract gives you a quick summary to decide if the paper is relevant to your research."
            },
            {
                question: "In the 3-pass reading strategy, what is the goal of the first pass?",
                options: ["Understand the methodology", "Decide if the paper is worth reading", "Reproduce the results", "Write a summary"],
                correct: 1,
                explanation: "The first pass (5-10 minutes) helps you decide whether the paper is relevant enough to invest more time."
            }
        ],
        doAndDont: {
            do: ["Use the 3-pass reading strategy", "Take notes while reading", "Highlight key findings and methods", "Compare findings across papers"],
            dont: ["Try to understand everything in one read", "Skip the methodology section", "Ignore figures and tables", "Read without taking notes"]
        },
        caseStudy: "Karthik spent 3 weeks reading 20 papers word-by-word and still felt confused. His mentor taught him the 3-pass strategy. In the next 2 weeks, he effectively reviewed 40 papers, identified key themes, and found his research gap.",
        ethicsCheckpoint: "When using AI to summarize papers, always read the original paper yourself. AI summaries can miss nuances, misinterpret findings, or hallucinate details.",
        aiTools: [
            { name: "SciSpace (Typeset)", url: "https://typeset.io", description: "AI copilot that explains complex papers, highlights key sections, and answers questions about any PDF", category: "Paper Reading", freeTag: "Free tier available" },
            { name: "Explainpaper", url: "https://www.explainpaper.com", description: "Upload a paper and highlight confusing text — AI explains it in simple language", category: "Paper Reading", freeTag: "Free" },
            { name: "ChatPDF", url: "https://www.chatpdf.com", description: "Upload a research PDF and ask questions about its content interactively", category: "Paper Reading", freeTag: "Free (2 PDFs/day)" },
            { name: "Scholarcy", url: "https://www.scholarcy.com", description: "Generates summary flashcards from research papers highlighting key findings and methods", category: "Summarization", freeTag: "Free tier available" },
            { name: "Hypothesis", url: "https://web.hypothes.is", description: "Open-source web annotation tool to highlight and annotate papers collaboratively", category: "Annotation", freeTag: "Free" },
            { name: "Notion", url: "https://www.notion.so", description: "Organize your paper reading notes with templates for the 3-pass reading strategy", category: "Note Taking", freeTag: "Free for students" },
        ]
    },
    {
        id: 7,
        title: "Identifying Research Gap",
        subtitle: "Finding What's Missing",
        icon: "🔬",
        color: "from-violet-500 to-purple-600",
        analogy: "Finding a research gap is like finding a missing piece in a jigsaw puzzle — you need to see the whole picture first to know what's missing.",
        overview: "Learn systematic methods to identify research gaps by comparing existing literature.",
        slides: [
            {
                title: "What is a Research Gap?",
                content: "A research gap is an area where existing studies are insufficient, contradictory, or missing entirely.",
                type: "text",
                bulletPoints: [
                    "Knowledge Gap — Topic not yet studied",
                    "Methodological Gap — Better methods possible",
                    "Population Gap — Not tested on specific groups",
                    "Data Gap — Insufficient or outdated data",
                    "Theoretical Gap — Existing theories don't explain findings"
                ]
            },
            {
                title: "Research Gap Comparison Matrix",
                content: "Use a comparison matrix to systematically identify gaps.",
                type: "comparison",
                tableData: {
                    headers: ["Paper", "Method", "Dataset", "Accuracy", "Limitation"],
                    rows: [
                        ["Paper A (2021)", "CNN", "ImageNet", "92%", "Only RGB images"],
                        ["Paper B (2022)", "ResNet", "CIFAR-100", "94%", "High computation"],
                        ["Paper C (2023)", "ViT", "Custom", "96%", "Small dataset"],
                        ["Your Research", "Hybrid CNN-ViT", "Large multi-modal", "Target: 97%+", "Address all above"]
                    ]
                }
            },
            {
                title: "Gap Identification Exercise",
                content: "Analyze papers and identify the missing research problem.",
                type: "interactive",
                interactiveType: "gapIdentification"
            }
        ],
        quiz: [
            {
                question: "What is a methodological gap?",
                options: ["A topic not yet studied", "When better methods could be applied", "When data is missing", "When theories conflict"],
                correct: 1,
                explanation: "A methodological gap exists when current methods have limitations that could be addressed with better approaches."
            },
            {
                question: "What tool helps systematically identify research gaps?",
                options: ["Random reading", "Comparison matrix", "AI chatbot", "Wikipedia"],
                correct: 1,
                explanation: "A comparison matrix helps you systematically compare papers across methods, datasets, results, and limitations."
            }
        ],
        doAndDont: {
            do: ["Create a comparison matrix of existing papers", "Look for limitations mentioned in papers", "Identify patterns across multiple studies", "Validate your gap with your advisor"],
            dont: ["Claim a gap without evidence", "Ignore recent publications", "Assume your idea is completely new without checking", "Rely on AI to identify gaps for you"]
        },
        caseStudy: "Meera compared 15 papers on diabetic retinopathy detection. She noticed all used single-modality imaging (fundus photos). She proposed a multi-modal approach combining fundus + OCT images, which improved detection accuracy by 8% and got published in a Q1 journal.",
        ethicsCheckpoint: "When identifying research gaps, be honest about what truly hasn't been done versus what you haven't found yet. Thorough literature search is essential before claiming novelty.",
        aiTools: [
            { name: "Elicit", url: "https://elicit.com", description: "Extract methods, datasets, and results from multiple papers to build comparison matrices", category: "Gap Analysis", freeTag: "Free tier available" },
            { name: "Consensus", url: "https://consensus.app", description: "AI search engine that finds and synthesizes scientific consensus — spot where consensus is missing", category: "Gap Analysis", freeTag: "Free tier available" },
            { name: "Connected Papers", url: "https://www.connectedpapers.com", description: "Visualize paper clusters to identify under-explored areas between research groups", category: "Visualization", freeTag: "Free (5 graphs/month)" },
            { name: "Scite.ai", url: "https://scite.ai", description: "Find contradicting citations and disputed findings — these often indicate research gaps", category: "Citation Analysis", freeTag: "Free tier available" },
            { name: "Google Sheets", url: "https://sheets.google.com", description: "Create your research gap comparison matrix (Paper vs Method vs Dataset vs Accuracy vs Limitation)", category: "Organization", freeTag: "Free" },
            { name: "ChatGPT (Free)", url: "https://chat.openai.com", description: "Discuss potential gaps after reading papers — use as a thinking partner, not a gap finder", category: "Brainstorming", freeTag: "Free tier available" },
        ]
    },
    {
        id: 8,
        title: "Constructing Problem Statement",
        subtitle: "Defining Your Research Problem",
        icon: "🎯",
        color: "from-red-500 to-orange-600",
        analogy: "A problem statement is like a GPS destination — without it, you'll drive around aimlessly. It tells everyone exactly where your research is headed.",
        overview: "Learn to construct clear, concise, and impactful problem statements that define your research direction.",
        slides: [
            {
                title: "Structure of a Problem Statement",
                content: "A strong problem statement has three components.",
                type: "text",
                bulletPoints: [
                    "1. Problem Context — What is the broader area?",
                    "2. Limitation — What's wrong with current solutions?",
                    "3. Research Objective — What will you do about it?",
                    "",
                    "Example: 'Existing fall detection systems (context) have low accuracy in hypertensive patients due to limited physiological data integration (limitation). This research proposes a multi-sensor fusion approach to improve detection accuracy (objective).'"
                ]
            },
            {
                title: "Good vs Bad Problem Statements",
                content: "Compare well-crafted and poorly-crafted problem statements.",
                type: "comparison",
                tableData: {
                    headers: ["Aspect", "Good Problem Statement", "Bad Problem Statement"],
                    rows: [
                        ["Specificity", "Clearly defines the problem scope", "Vague and too broad"],
                        ["Measurability", "Has measurable objectives", "No clear metrics"],
                        ["Relevance", "Addresses a real-world need", "Solves a non-existent problem"],
                        ["Feasibility", "Achievable within constraints", "Too ambitious or unrealistic"]
                    ]
                }
            },
            {
                title: "Problem Statement Builder",
                content: "Construct your own problem statement step by step.",
                type: "interactive",
                interactiveType: "problemStatementBuilder"
            }
        ],
        quiz: [
            {
                question: "What are the three components of a problem statement?",
                options: ["Title, Abstract, Conclusion", "Context, Limitation, Objective", "Introduction, Method, Result", "Hypothesis, Experiment, Analysis"],
                correct: 1,
                explanation: "A problem statement consists of Context (what area), Limitation (what's wrong), and Objective (what you'll do)."
            }
        ],
        doAndDont: {
            do: ["Be specific and measurable", "Ground it in existing literature", "Make it achievable", "Connect it to real-world impact"],
            dont: ["Be vague or overly broad", "Make unsupported claims", "Ignore existing solutions", "Promise unrealistic outcomes"]
        },
        caseStudy: "Arjun initially wrote: 'AI in healthcare needs improvement.' His mentor helped him refine it to: 'Current AI-based skin cancer detection systems achieve only 85% accuracy on dark skin tones due to training data bias, limiting their clinical applicability in diverse populations.' This specific statement led to a focused and impactful study.",
        ethicsCheckpoint: "Ensure your problem statement doesn't exaggerate the limitations of existing work. Be fair and accurate when describing what others have done.",
        aiTools: [
            { name: "ChatGPT (Free)", url: "https://chat.openai.com", description: "Refine and sharpen your problem statement draft — use it to critique, not to generate", category: "Writing Aid", freeTag: "Free tier available" },
            { name: "Google Gemini", url: "https://gemini.google.com", description: "Get feedback on problem statement clarity, specificity, and structure", category: "Writing Aid", freeTag: "Free" },
            { name: "Grammarly", url: "https://www.grammarly.com", description: "Ensure your problem statement is grammatically clear and professionally written", category: "Writing Aid", freeTag: "Free tier available" },
            { name: "Hemingway Editor", url: "https://hemingwayapp.com", description: "Check readability and simplify complex sentences in your problem statement", category: "Readability", freeTag: "Free (web version)" },
            { name: "Semantic Scholar", url: "https://www.semanticscholar.org", description: "Verify that the limitations you cite in your problem statement are backed by real papers", category: "Verification", freeTag: "Free" },
        ]
    },
    {
        id: 9,
        title: "Identifying Domain Experts",
        subtitle: "Finding Your Research Community",
        icon: "👨‍🔬",
        color: "from-teal-500 to-green-600",
        analogy: "Finding domain experts is like finding mentors in a new city — they know the shortcuts, the pitfalls, and can guide you to success faster.",
        overview: "Learn to identify and connect with leading researchers in your domain using academic platforms.",
        slides: [
            {
                title: "Where to Find Domain Experts",
                content: "Use these platforms to discover leading researchers in your field.",
                type: "comparison",
                tableData: {
                    headers: ["Platform", "What You'll Find", "How to Use It"],
                    rows: [
                        ["Google Scholar", "Citation count, h-index, publications", "Search topic → check top-cited authors"],
                        ["ResearchGate", "Full profiles, Q&A, collaborations", "Follow researchers, ask questions"],
                        ["ORCID", "Verified researcher identity", "Find complete publication list"],
                        ["University Websites", "Lab pages, current projects", "Find potential advisors"],
                        ["LinkedIn", "Professional connections", "Network with researchers"]
                    ]
                }
            },
            {
                title: "Expert Finder Tool",
                content: "Enter your research domain to discover top researchers.",
                type: "interactive",
                interactiveType: "expertFinder"
            },
            {
                title: "Building Your Research Network",
                content: "Strategies for connecting with domain experts.",
                type: "text",
                bulletPoints: [
                    "Attend conferences and workshops in your domain",
                    "Follow researchers on Google Scholar and ResearchGate",
                    "Read and cite their work properly",
                    "Send thoughtful emails showing you've read their work",
                    "Collaborate on open-source projects in your field"
                ]
            }
        ],
        quiz: [
            {
                question: "Which platform provides verified researcher identities?",
                options: ["Facebook", "ORCID", "Twitter", "Instagram"],
                correct: 1,
                explanation: "ORCID provides unique, persistent identifiers for researchers, ensuring accurate attribution."
            }
        ],
        doAndDont: {
            do: ["Research experts before reaching out", "Show genuine interest in their work", "Be professional in communications", "Cite their work properly"],
            dont: ["Send generic mass emails", "Ask experts to do your work", "Ignore junior researchers who might help", "Stalk researchers on social media"]
        },
        caseStudy: "Divya found Prof. Kumar's work on NLP through Google Scholar. She read 5 of his papers, then sent a thoughtful email discussing a specific finding. Prof. Kumar was impressed and offered her a remote research internship, which led to a co-authored publication.",
        ethicsCheckpoint: "When reaching out to experts, be honest about your level of experience. Don't misrepresent yourself or your research stage.",
        aiTools: [
            { name: "Google Scholar Profiles", url: "https://scholar.google.com", description: "Find top researchers by citation count, h-index, and publication list in your domain", category: "Expert Discovery", freeTag: "Free" },
            { name: "ResearchGate", url: "https://www.researchgate.net", description: "Academic social network to find experts, follow their work, and ask questions", category: "Networking", freeTag: "Free" },
            { name: "ORCID", url: "https://orcid.org", description: "Find verified researcher profiles with complete publication records", category: "Expert Discovery", freeTag: "Free" },
            { name: "Semantic Scholar Author Pages", url: "https://www.semanticscholar.org", description: "Explore author profiles with AI-generated research summaries and influence metrics", category: "Expert Discovery", freeTag: "Free" },
            { name: "LinkedIn", url: "https://www.linkedin.com", description: "Professional networking to connect with researchers and find collaboration opportunities", category: "Networking", freeTag: "Free tier available" },
            { name: "Twitter/X", url: "https://twitter.com", description: "Many researchers share findings and engage in discussions — follow #AcademicTwitter", category: "Networking", freeTag: "Free" },
        ]
    },
    {
        id: 10,
        title: "Drafting Research Paper",
        subtitle: "Writing Your First Paper",
        icon: "✍️",
        color: "from-indigo-500 to-blue-600",
        analogy: "Writing a research paper is like building a house — you need a solid foundation (methodology), strong walls (results), and a good roof (conclusion) before you decorate (polish the writing).",
        overview: "Learn the step-by-step process of drafting each section of a research paper.",
        slides: [
            {
                title: "Paper Writing Roadmap",
                content: "Write sections in this recommended order (not the order they appear in the paper!).",
                type: "text",
                bulletPoints: [
                    "Step 1: Methodology — What you did (write first!)",
                    "Step 2: Results — What you found",
                    "Step 3: Discussion — What it means",
                    "Step 4: Introduction — Why it matters",
                    "Step 5: Literature Review — What others did",
                    "Step 6: Conclusion — Summary and future work",
                    "Step 7: Abstract — Write this LAST"
                ]
            },
            {
                title: "Section-by-Section Guide",
                content: "Key elements each section must contain.",
                type: "comparison",
                tableData: {
                    headers: ["Section", "Must Include", "Common Mistakes"],
                    rows: [
                        ["Abstract", "Problem, Method, Key Result, Impact", "Too long, missing results"],
                        ["Introduction", "Background, Gap, Objective, Contribution", "Too broad, no clear gap"],
                        ["Methodology", "Approach, Tools, Parameters, Justification", "Insufficient detail"],
                        ["Results", "Tables, Figures, Statistical Analysis", "No comparison with baselines"],
                        ["Conclusion", "Summary, Limitations, Future Work", "Introducing new information"]
                    ]
                }
            },
            {
                title: "Paper Drafting Template",
                content: "Use this interactive template to start drafting your paper.",
                type: "interactive",
                interactiveType: "paperDraftingTemplate"
            }
        ],
        quiz: [
            {
                question: "Which section should you write FIRST?",
                options: ["Abstract", "Introduction", "Methodology", "Conclusion"],
                correct: 2,
                explanation: "Start with Methodology because it's the most concrete section — you know exactly what you did."
            },
            {
                question: "Which section should you write LAST?",
                options: ["Conclusion", "Abstract", "Results", "Introduction"],
                correct: 1,
                explanation: "The Abstract summarizes the entire paper, so it should be written after all other sections are complete."
            }
        ],
        doAndDont: {
            do: ["Follow the recommended writing order", "Use clear and concise language", "Include figures and tables", "Have peers review your draft"],
            dont: ["Write the abstract first", "Use overly complex language", "Skip the discussion section", "Submit without proofreading"]
        },
        caseStudy: "Rahul tried writing his paper from abstract to conclusion sequentially and got stuck at the introduction for 3 weeks. His mentor suggested starting with methodology and results. He completed his first draft in 10 days using this approach.",
        ethicsCheckpoint: "When using AI for writing assistance, use it only for grammar and clarity improvements. The ideas, analysis, and conclusions must be entirely your own.",
        aiTools: [
            { name: "Overleaf", url: "https://www.overleaf.com", description: "Free online LaTeX editor with journal templates — the standard for academic paper writing", category: "Writing Platform", freeTag: "Free" },
            { name: "Grammarly", url: "https://www.grammarly.com", description: "AI grammar and style checker to polish your manuscript professionally", category: "Writing Aid", freeTag: "Free tier available" },
            { name: "Writefull", url: "https://www.writefull.com", description: "AI writing assistant specifically designed for academic and scientific writing", category: "Academic Writing", freeTag: "Free tier available" },
            { name: "Zotero", url: "https://www.zotero.org", description: "Generate citations and bibliographies automatically in any journal format", category: "Reference Manager", freeTag: "Free" },
            { name: "Tables Generator", url: "https://www.tablesgenerator.com", description: "Create LaTeX, HTML, and Markdown tables for your research paper easily", category: "Formatting", freeTag: "Free" },
            { name: "draw.io (diagrams.net)", url: "https://app.diagrams.net", description: "Create research methodology diagrams, flowcharts, and architecture figures", category: "Diagrams", freeTag: "Free" },
            { name: "BioRender", url: "https://www.biorender.com", description: "Create professional scientific figures and illustrations for your paper", category: "Figures", freeTag: "Free for students" },
        ]
    },
    {
        id: 11,
        title: "Selecting Publication Venue",
        subtitle: "Where to Publish Your Research",
        icon: "🏛️",
        color: "from-cyan-500 to-blue-500",
        analogy: "Choosing a publication venue is like choosing the right stage for your performance — a concert hall for an orchestra, a club for jazz. Match your research to the right audience.",
        overview: "Learn to choose the right publication venue based on your research type and goals.",
        slides: [
            {
                title: "Publication Venue Options",
                content: "Different types of research outputs suit different venues.",
                type: "comparison",
                tableData: {
                    headers: ["Venue", "Best For", "Timeline", "Prestige"],
                    rows: [
                        ["Journal (SCI/Scopus)", "Complete, mature research", "6-18 months", "Highest"],
                        ["Conference", "Novel ideas, preliminary results", "3-6 months", "High"],
                        ["Patent", "Novel inventions, products", "1-3 years", "High (Industry)"],
                        ["Book Chapter", "Comprehensive reviews", "6-12 months", "Medium"],
                        ["Poster", "Early-stage research", "1-3 months", "Entry-level"],
                        ["Technical Magazine", "Practical applications", "2-4 months", "Medium"],
                        ["Hackathon", "Prototypes, demos", "1-2 days", "Networking"]
                    ]
                }
            },
            {
                title: "Venue Selection Decision Tree",
                content: "Answer questions to find the right venue for your research.",
                type: "interactive",
                interactiveType: "venueDecisionTree"
            },
            {
                title: "Journal Quality Indicators",
                content: "How to assess journal quality and avoid predatory journals.",
                type: "text",
                bulletPoints: [
                    "Impact Factor — Higher means more citations (check JCR)",
                    "SCI/SCIE/Scopus Indexing — Ensures quality standards",
                    "H-index of Journal — Overall journal influence",
                    "Acceptance Rate — Very low (<10%) or very high (>80%) are red flags",
                    "Predatory Journal Signs: No peer review, guaranteed acceptance, high fees"
                ]
            }
        ],
        quiz: [
            {
                question: "Which venue is best for preliminary research results?",
                options: ["SCI Journal", "Conference", "Patent", "Book"],
                correct: 1,
                explanation: "Conferences are ideal for presenting preliminary or novel results and getting early feedback."
            },
            {
                question: "What is a sign of a predatory journal?",
                options: ["High impact factor", "Rigorous peer review", "Guaranteed acceptance with fees", "Long review timeline"],
                correct: 2,
                explanation: "Predatory journals often guarantee acceptance in exchange for publication fees, without proper peer review."
            }
        ],
        doAndDont: {
            do: ["Check journal indexing (SCI/Scopus)", "Read recent papers in the target venue", "Match your paper scope to the venue", "Verify journal legitimacy on official databases"],
            dont: ["Submit to predatory journals", "Choose venues only by acceptance rate", "Submit the same paper to multiple journals simultaneously", "Ignore the venue's scope and audience"]
        },
        caseStudy: "Lakshmi submitted her excellent ML paper to a predatory journal that promised '7-day review.' She paid ₹50,000 but the publication had no indexing. Her work was essentially wasted. She later resubmitted to a legitimate Scopus journal and got published after proper peer review.",
        ethicsCheckpoint: "Never submit the same paper to multiple journals simultaneously. This is a serious ethical violation called 'simultaneous submission' and can result in blacklisting.",
        aiTools: [
            { name: "Journal Finder (Elsevier)", url: "https://journalfinder.elsevier.com", description: "Enter your abstract and get matched with suitable Elsevier journals", category: "Journal Selection", freeTag: "Free" },
            { name: "Journal Suggester (Springer)", url: "https://journalsuggester.springer.com", description: "AI-powered journal recommendation based on your manuscript title and abstract", category: "Journal Selection", freeTag: "Free" },
            { name: "JANE (Journal/Author Name Estimator)", url: "https://jane.biosemantics.org", description: "Find the best matching journals for your paper based on content analysis", category: "Journal Selection", freeTag: "Free" },
            { name: "Scimago Journal Rank (SJR)", url: "https://www.scimagojr.com", description: "Check journal rankings, impact metrics, and quartile ratings (Q1-Q4)", category: "Journal Quality", freeTag: "Free" },
            { name: "Beall's List", url: "https://beallslist.net", description: "Check if a journal is potentially predatory — essential before submitting", category: "Predatory Check", freeTag: "Free" },
            { name: "DOAJ", url: "https://doaj.org", description: "Directory of Open Access Journals — verify legitimate open-access journals", category: "Journal Quality", freeTag: "Free" },
        ]
    },
    {
        id: 12,
        title: "Avoiding Desk Rejection",
        subtitle: "Getting Past the Editor's Desk",
        icon: "🚫",
        color: "from-red-600 to-pink-600",
        analogy: "Desk rejection is like being turned away at a restaurant door — you didn't even get to show what you can cook. Avoid it by dressing appropriately for the venue.",
        overview: "Learn common reasons for desk rejection and how to avoid them.",
        slides: [
            {
                title: "Top Reasons for Desk Rejection",
                content: "Editors reject papers before peer review for these common reasons.",
                type: "text",
                bulletPoints: [
                    "Poor Novelty — The contribution isn't significant enough",
                    "Out of Scope — Paper doesn't match the journal's focus",
                    "Poor English — Language quality below acceptable standards",
                    "Weak Methodology — Research design has fundamental flaws",
                    "Formatting Issues — Doesn't follow journal template",
                    "Incomplete Submission — Missing sections or supplementary materials",
                    "Ethical Concerns — Plagiarism detected or missing ethics approval"
                ]
            },
            {
                title: "Desk Rejection Prevention Checklist",
                content: "Use this checklist before submitting your paper.",
                type: "comparison",
                tableData: {
                    headers: ["Check", "What to Verify", "How to Fix"],
                    rows: [
                        ["Scope", "Does paper match journal's aims?", "Read journal's scope statement"],
                        ["Novelty", "Is contribution clearly stated?", "Highlight unique contributions"],
                        ["Language", "Is English clear and professional?", "Use grammar tools, get proofreading"],
                        ["Format", "Follows journal template?", "Download and use official template"],
                        ["References", "Recent and relevant citations?", "Include papers from target journal"]
                    ]
                }
            },
            {
                title: "Submission Simulator",
                content: "Submit a paper and see if it passes the editor's desk.",
                type: "interactive",
                interactiveType: "submissionSimulator"
            }
        ],
        quiz: [
            {
                question: "What is the most common reason for desk rejection?",
                options: ["Paper is too long", "Poor novelty or out of scope", "Too many authors", "Using color figures"],
                correct: 1,
                explanation: "Poor novelty and scope mismatch are the top reasons editors reject papers before peer review."
            }
        ],
        doAndDont: {
            do: ["Read the journal's scope before submitting", "Use the journal's official template", "Have your paper proofread", "Include a strong cover letter"],
            dont: ["Submit without checking scope", "Ignore formatting guidelines", "Submit with grammatical errors", "Skip the cover letter"]
        },
        caseStudy: "Vikram's paper was desk-rejected 3 times from different journals. Each time, the reason was 'out of scope.' He finally read the journal's aims carefully, found a perfect match, and got accepted after peer review. Lesson: 10 minutes reading the scope saves months of waiting.",
        ethicsCheckpoint: "Never manipulate your paper's content to fit a journal's scope artificially. If your paper doesn't genuinely fit, find a more appropriate venue.",
        aiTools: [
            { name: "Grammarly", url: "https://www.grammarly.com", description: "Fix grammar and language issues that commonly cause desk rejection", category: "Language Check", freeTag: "Free tier available" },
            { name: "Writefull", url: "https://www.writefull.com", description: "Academic language checker trained on published papers — catches field-specific issues", category: "Academic Writing", freeTag: "Free tier available" },
            { name: "Turnitin (via institution)", url: "https://www.turnitin.com", description: "Check plagiarism score before submission — most journals use this", category: "Plagiarism Check", freeTag: "Free via university" },
            { name: "Paperpal", url: "https://paperpal.com", description: "AI writing assistant for academic manuscripts — checks language, structure, and consistency", category: "Manuscript Check", freeTag: "Free tier available" },
            { name: "Scimago Journal Rank", url: "https://www.scimagojr.com", description: "Verify journal scope and aims match your paper before submitting", category: "Scope Check", freeTag: "Free" },
        ]
    },
    {
        id: 13,
        title: "Handling Reviewer Comments",
        subtitle: "Responding to Peer Review",
        icon: "💬",
        color: "from-green-500 to-emerald-600",
        analogy: "Reviewer comments are like a coach's feedback — it might sting, but it makes you better. The best researchers welcome criticism as an opportunity to improve.",
        overview: "Learn to interpret and respond to reviewer comments professionally and effectively.",
        slides: [
            {
                title: "Types of Review Decisions",
                content: "Understanding what each decision means and how to respond.",
                type: "comparison",
                tableData: {
                    headers: ["Decision", "Meaning", "Your Response", "Timeline"],
                    rows: [
                        ["Accept", "Paper accepted as-is (rare!)", "Celebrate and prepare camera-ready", "1-2 weeks"],
                        ["Minor Revision", "Small changes needed", "Address all comments carefully", "2-4 weeks"],
                        ["Major Revision", "Significant changes required", "Revise thoroughly, may need new experiments", "2-3 months"],
                        ["Reject & Resubmit", "Paper needs fundamental changes", "Major rewrite, consider as new submission", "3-6 months"],
                        ["Reject", "Paper not suitable", "Learn from feedback, try another venue", "Start over"]
                    ]
                }
            },
            {
                title: "How to Respond to Reviewers",
                content: "The art of writing effective response letters.",
                type: "text",
                bulletPoints: [
                    "Be respectful and thankful, even for harsh criticism",
                    "Address EVERY comment — don't skip any",
                    "Use point-by-point response format",
                    "Clearly show what changed and where (page/line numbers)",
                    "If you disagree, provide evidence-based justification",
                    "Highlight changes in the revised manuscript"
                ]
            },
            {
                title: "Reviewer Response Roleplay",
                content: "Practice responding to real reviewer comments.",
                type: "interactive",
                interactiveType: "reviewerRoleplay"
            }
        ],
        quiz: [
            {
                question: "What should you do if you disagree with a reviewer's comment?",
                options: ["Ignore it", "Argue aggressively", "Provide evidence-based justification respectfully", "Complain to the editor"],
                correct: 2,
                explanation: "If you disagree, provide clear evidence and reasoning while remaining respectful and professional."
            },
            {
                question: "What does 'Major Revision' mean?",
                options: ["Paper is rejected", "Minor typos to fix", "Significant changes needed but paper has potential", "Paper is accepted"],
                correct: 2,
                explanation: "Major revision means the paper has merit but needs significant improvements before it can be accepted."
            }
        ],
        doAndDont: {
            do: ["Address every reviewer comment", "Be respectful and professional", "Show exactly what changed", "Thank reviewers for their time"],
            dont: ["Ignore any comments", "Respond emotionally or defensively", "Make changes without explaining them", "Rush the revision process"]
        },
        caseStudy: "Ananya received harsh reviews with 47 comments on her first paper. Instead of giving up, she spent 6 weeks addressing each comment systematically. Her response letter was 15 pages long. The paper was accepted in the next round, and one reviewer praised her 'thorough and professional response.'",
        ethicsCheckpoint: "Never fabricate results or data to satisfy reviewer demands. If a reviewer asks for experiments you can't do, explain honestly and suggest alternatives.",
        aiTools: [
            { name: "ChatGPT (Free)", url: "https://chat.openai.com", description: "Draft point-by-point response letters — use as a template, then personalize with specifics", category: "Response Drafting", freeTag: "Free tier available" },
            { name: "Grammarly", url: "https://www.grammarly.com", description: "Ensure your response letter is professional, polite, and grammatically perfect", category: "Writing Aid", freeTag: "Free tier available" },
            { name: "Writefull", url: "https://www.writefull.com", description: "Academic writing assistant to help phrase responses in scholarly tone", category: "Academic Writing", freeTag: "Free tier available" },
            { name: "Overleaf", url: "https://www.overleaf.com", description: "Track changes and create diff documents to highlight revisions for reviewers", category: "Revision Tracking", freeTag: "Free" },
            { name: "LaTeX Diff (latexdiff)", url: "https://www.overleaf.com/learn/latex/Articles/How_to_use_latexdiff_on_Overleaf", description: "Generate visual diff between original and revised manuscript versions", category: "Revision Tracking", freeTag: "Free" },
        ]
    },
    {
        id: 14,
        title: "Increasing Research Impact",
        subtitle: "Making Your Research Visible",
        icon: "📈",
        color: "from-amber-500 to-yellow-600",
        analogy: "Research impact is like planting a tree — the paper is the seed, but citations, presentations, and networking are the water and sunlight that help it grow.",
        overview: "Learn strategies to increase the visibility and impact of your published research.",
        slides: [
            {
                title: "Research Impact Metrics",
                content: "Understanding how research impact is measured.",
                type: "comparison",
                tableData: {
                    headers: ["Metric", "What It Measures", "How to Improve"],
                    rows: [
                        ["Citations", "How often your paper is referenced", "Publish in high-visibility venues"],
                        ["H-index", "Productivity and citation impact", "Consistent quality publications"],
                        ["i10-index", "Papers with 10+ citations", "Focus on impactful research"],
                        ["Altmetrics", "Social media, news mentions", "Share research on social platforms"],
                        ["Downloads", "How often paper is accessed", "Open access, good titles"]
                    ]
                }
            },
            {
                title: "Strategies for Visibility",
                content: "Practical ways to increase your research visibility.",
                type: "text",
                bulletPoints: [
                    "Present at conferences and workshops",
                    "Share papers on ResearchGate and Academia.edu",
                    "Write blog posts explaining your research simply",
                    "Collaborate with researchers from other institutions",
                    "Make your code and data open source",
                    "Engage on academic Twitter/LinkedIn",
                    "Create video abstracts of your papers"
                ]
            },
            {
                title: "Impact Strategy Planner",
                content: "Plan your research visibility strategy.",
                type: "interactive",
                interactiveType: "impactPlanner"
            }
        ],
        quiz: [
            {
                question: "What does the H-index measure?",
                options: ["Number of papers published", "Productivity and citation impact combined", "Journal impact factor", "Number of co-authors"],
                correct: 1,
                explanation: "H-index measures both productivity (number of papers) and impact (citations). An h-index of 10 means 10 papers with at least 10 citations each."
            }
        ],
        doAndDont: {
            do: ["Share your research on academic platforms", "Present at conferences", "Collaborate internationally", "Make research accessible (open access)"],
            dont: ["Self-cite excessively", "Buy citations or use citation rings", "Ignore social media for research", "Publish only for quantity over quality"]
        },
        caseStudy: "Prof. Sharma had 50 publications but low citations. She started sharing her work on ResearchGate, creating video abstracts, and presenting at international conferences. In 2 years, her citations tripled and she received 3 international collaboration offers.",
        ethicsCheckpoint: "Never engage in citation manipulation — self-citing excessively, citation rings, or buying citations. These are serious ethical violations that can lead to retraction and career damage.",
        aiTools: [
            { name: "ResearchGate", url: "https://www.researchgate.net", description: "Share papers, track reads and citations, and connect with researchers globally", category: "Visibility", freeTag: "Free" },
            { name: "Google Scholar Profile", url: "https://scholar.google.com", description: "Create your researcher profile to track citations, h-index, and make work discoverable", category: "Visibility", freeTag: "Free" },
            { name: "ORCID", url: "https://orcid.org", description: "Get a unique researcher ID that links all your publications across platforms", category: "Identity", freeTag: "Free" },
            { name: "Canva", url: "https://www.canva.com", description: "Create visual abstracts, research posters, and social media graphics for your papers", category: "Visual Content", freeTag: "Free tier available" },
            { name: "Loom", url: "https://www.loom.com", description: "Record video abstracts of your papers to increase engagement and accessibility", category: "Video", freeTag: "Free tier available" },
            { name: "GitHub", url: "https://github.com", description: "Share your research code and datasets openly to increase reproducibility and citations", category: "Open Source", freeTag: "Free" },
            { name: "Zenodo", url: "https://zenodo.org", description: "Archive datasets and code with DOI — makes your research citable and discoverable", category: "Data Sharing", freeTag: "Free" },
        ]
    },
    {
        id: 15,
        title: "Writing Funded Research Proposal",
        subtitle: "Securing Research Funding",
        icon: "💰",
        color: "from-green-600 to-teal-500",
        analogy: "A research proposal is like a business pitch — you need to convince investors (funding agencies) that your idea is worth their money by showing the problem, your solution, and the expected impact.",
        overview: "Learn to write compelling research proposals that secure funding from agencies and institutions.",
        slides: [
            {
                title: "Anatomy of a Research Proposal",
                content: "Key sections every funded proposal must include.",
                type: "text",
                bulletPoints: [
                    "Title — Clear, specific, and compelling",
                    "Objectives — What you aim to achieve (SMART goals)",
                    "Literature Review — Why this research is needed",
                    "Methodology — How you'll conduct the research",
                    "Budget — Detailed cost breakdown with justification",
                    "Timeline — Milestones and deliverables (Gantt chart)",
                    "Risk Analysis — Potential challenges and mitigation",
                    "Collaborators — Team expertise and roles",
                    "Expected Outcomes — Publications, patents, prototypes"
                ]
            },
            {
                title: "Funding Sources in India",
                content: "Major funding agencies and their focus areas.",
                type: "comparison",
                tableData: {
                    headers: ["Agency", "Focus Area", "Typical Grant Size", "Duration"],
                    rows: [
                        ["DST-SERB", "Science & Engineering", "₹20-50 Lakhs", "3 years"],
                        ["CSIR", "Industrial research", "₹10-30 Lakhs", "2-3 years"],
                        ["DBT", "Biotechnology", "₹20-100 Lakhs", "3-5 years"],
                        ["AICTE", "Technical education", "₹5-20 Lakhs", "2 years"],
                        ["UGC", "University research", "₹5-15 Lakhs", "2-3 years"]
                    ]
                }
            },
            {
                title: "Proposal Writing Workshop",
                content: "Draft key sections of a research proposal.",
                type: "interactive",
                interactiveType: "proposalWorkshop"
            }
        ],
        quiz: [
            {
                question: "What does SMART stand for in research objectives?",
                options: ["Simple, Measurable, Achievable, Relevant, Timely", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strategic, Managed, Assessed, Reviewed, Tested", "Scientific, Methodical, Accurate, Reliable, Thorough"],
                correct: 1,
                explanation: "SMART objectives are Specific, Measurable, Achievable, Relevant, and Time-bound."
            }
        ],
        doAndDont: {
            do: ["Align proposal with agency's priorities", "Include detailed budget justification", "Show preliminary results if available", "Highlight team expertise"],
            dont: ["Submit generic proposals to all agencies", "Underestimate or overestimate budget", "Ignore the evaluation criteria", "Promise unrealistic outcomes"]
        },
        caseStudy: "Dr. Patel's first 3 proposals were rejected because they lacked preliminary data. For his 4th attempt, he included pilot study results showing 15% improvement. The proposal was funded for ₹35 Lakhs by DST-SERB.",
        ethicsCheckpoint: "Never inflate your qualifications, fabricate preliminary results, or plagiarize from other proposals. Funding fraud is a career-ending offense.",
        aiTools: [
            { name: "ChatGPT (Free)", url: "https://chat.openai.com", description: "Brainstorm proposal structure, refine objectives, and get feedback on clarity", category: "Proposal Drafting", freeTag: "Free tier available" },
            { name: "Overleaf", url: "https://www.overleaf.com", description: "LaTeX templates for research proposals from major funding agencies", category: "Templates", freeTag: "Free" },
            { name: "Gantt.io", url: "https://www.gantt.io", description: "Create professional Gantt charts for your project timeline and milestones", category: "Project Planning", freeTag: "Free tier available" },
            { name: "Google Sheets", url: "https://sheets.google.com", description: "Create detailed budget breakdowns with justification for your proposal", category: "Budget Planning", freeTag: "Free" },
            { name: "Notion", url: "https://www.notion.so", description: "Organize proposal sections, track deadlines, and collaborate with team members", category: "Project Management", freeTag: "Free for students" },
            { name: "Grammarly", url: "https://www.grammarly.com", description: "Polish proposal language to meet professional standards expected by funding agencies", category: "Writing Aid", freeTag: "Free tier available" },
        ]
    },
    {
        id: 16,
        title: "Understanding TRL Levels",
        subtitle: "Technology Readiness Levels",
        icon: "🚀",
        color: "from-blue-600 to-indigo-500",
        analogy: "TRL levels are like a video game progression — you start at Level 1 (just an idea) and must complete each level before reaching Level 9 (market-ready product).",
        overview: "Understand the Technology Readiness Level framework and where your research fits in the innovation pipeline.",
        slides: [
            {
                title: "The TRL Ladder",
                content: "Technology Readiness Levels from idea to market.",
                type: "text",
                bulletPoints: [
                    "TRL 1 — Basic principles observed (Idea stage)",
                    "TRL 2 — Technology concept formulated",
                    "TRL 3 — Experimental proof of concept",
                    "TRL 4 — Technology validated in lab",
                    "TRL 5 — Technology validated in relevant environment",
                    "TRL 6 — Technology demonstrated in relevant environment",
                    "TRL 7 — System prototype demonstration",
                    "TRL 8 — System complete and qualified",
                    "TRL 9 — Actual system proven in operational environment (Market ready)"
                ]
            },
            {
                title: "TRL in Academic Research",
                content: "Where different research outputs fall on the TRL scale.",
                type: "comparison",
                tableData: {
                    headers: ["TRL", "Research Output", "Typical Venue", "Next Step"],
                    rows: [
                        ["TRL 1-2", "Literature review, hypothesis", "Workshop paper", "Proof of concept"],
                        ["TRL 3-4", "Algorithm, simulation results", "Conference paper", "Real-world testing"],
                        ["TRL 5-6", "Prototype, field testing", "Journal paper", "System integration"],
                        ["TRL 7-8", "Working system, user testing", "Patent, demo", "Commercialization"],
                        ["TRL 9", "Market-ready product", "Startup, license", "Scale and grow"]
                    ]
                }
            },
            {
                title: "TRL Assessment Tool",
                content: "Assess the TRL level of your current research.",
                type: "interactive",
                interactiveType: "trlAssessment"
            }
        ],
        quiz: [
            {
                question: "At which TRL level is a technology considered market-ready?",
                options: ["TRL 5", "TRL 7", "TRL 9", "TRL 3"],
                correct: 2,
                explanation: "TRL 9 means the technology has been proven in an operational environment and is ready for the market."
            },
            {
                question: "A conference paper with simulation results typically falls at which TRL?",
                options: ["TRL 1", "TRL 3-4", "TRL 7", "TRL 9"],
                correct: 1,
                explanation: "Simulation results represent experimental proof of concept (TRL 3) to lab validation (TRL 4)."
            }
        ],
        doAndDont: {
            do: ["Assess your current TRL honestly", "Plan progression to next TRL level", "Document each TRL milestone", "Seek appropriate funding for each TRL stage"],
            dont: ["Claim higher TRL than justified", "Skip TRL levels", "Ignore validation requirements", "Confuse lab results with market readiness"]
        },
        caseStudy: "A team developed an AI-based crop disease detection app (TRL 4 in lab). They applied for DST funding to reach TRL 6 (field testing). After successful field trials with 500 farmers, they filed a patent (TRL 7) and are now incubated at IIT Madras to reach TRL 9.",
        ethicsCheckpoint: "Be honest about your technology's readiness level. Overstating TRL to secure funding or investment is a form of research fraud.",
        aiTools: [
            { name: "Google Colab", url: "https://colab.research.google.com", description: "Free cloud-based Python notebooks with GPU — prototype and validate your research code", category: "Prototyping", freeTag: "Free" },
            { name: "Kaggle", url: "https://www.kaggle.com", description: "Free datasets, notebooks, and GPU compute to build and test your research models", category: "Prototyping", freeTag: "Free" },
            { name: "Hugging Face", url: "https://huggingface.co", description: "Access pre-trained AI models and deploy demos to validate your research approach", category: "Model Hub", freeTag: "Free tier available" },
            { name: "Streamlit", url: "https://streamlit.io", description: "Build and deploy interactive demos of your research prototype quickly", category: "Demo Building", freeTag: "Free" },
            { name: "GitHub", url: "https://github.com", description: "Version control your research code and make it reproducible for TRL validation", category: "Code Management", freeTag: "Free" },
            { name: "draw.io", url: "https://app.diagrams.net", description: "Create TRL progression diagrams and system architecture visuals", category: "Diagrams", freeTag: "Free" },
        ]
    },
    {
        id: 17,
        title: "From Research to Startup",
        subtitle: "A Student's Complete Guide to Building a Startup from Scratch — Even from 10th Standard",
        icon: "🚀",
        color: "from-purple-600 to-pink-500",
        analogy: "Starting a startup is like planting a mango tree — you start with a tiny seed (idea), nurture it with water and sunlight (effort and mentorship), protect it from pests (avoid wasteful spending), and eventually it gives fruit (revenue). The key is patience, smart care, and not spending money on things the tree doesn't need yet.",
        overview: "This module teaches you how to turn your research idea into a real startup — step by step, with almost zero cost. You will learn how to get free help from NGOs, government schemes, and incubators. You will understand how to keep costs low, track every rupee, conduct annual audits, and maximize your return on investment (ROI). Written for students as young as 10th standard — no business degree needed.",
        slides: [
            {
                title: "The Research-to-Startup Pipeline",
                content: "Steps to convert your research into a viable startup.",
                type: "text",
                bulletPoints: [
                    "1. Idea Validation — Is there a real market need?",
                    "2. Prototype Development — Build a working demo",
                    "3. Patent Filing — Protect your intellectual property",
                    "4. Incubation — Join a university/government incubator",
                    "5. Funding — Seed funding, angel investors, government grants",
                    "6. MVP Launch — Minimum Viable Product for early users",
                    "7. Scale — Grow the business"
                ]
            },
            {
                title: "Indian Startup Ecosystem for Researchers",
                content: "Support systems available for research-based startups in India.",
                type: "comparison",
                tableData: {
                    headers: ["Support", "Provider", "What You Get", "Stage"],
                    rows: [
                        ["Incubation", "IIT/IIM/University Incubators", "Mentoring, space, networking", "Idea to Prototype"],
                        ["Seed Funding", "DST-NIDHI, BIRAC", "₹10-25 Lakhs", "Prototype"],
                        ["Angel Investment", "Indian Angel Network, LetsVenture", "₹25 Lakhs - 2 Crore", "MVP"],
                        ["Government Grants", "Startup India, MSME", "Tax benefits, funding", "All stages"],
                        ["Accelerators", "T-Hub, NASSCOM, Atal Innovation", "Mentoring, funding, market access", "Growth"]
                    ]
                }
            },
            {
                title: "Startup Readiness Assessment",
                content: "Evaluate if your research is ready for commercialization.",
                type: "interactive",
                interactiveType: "startupReadiness"
            },
            {
                title: "Narrative Flow: Idea to Startup",
                content: "A step-by-step procedure to build your startup with minimum cost and maximum ROI.",
                type: "interactive",
                interactiveType: "startupMindmap"
            }
        ],
        quiz: [
            {
                question: "What is the first step in converting research to a startup?",
                options: ["Get funding", "File a patent", "Validate the idea with market need", "Build a team"],
                correct: 2,
                explanation: "Before anything else, validate that there's a real market need for your research solution."
            },
            {
                question: "What does MVP stand for?",
                options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Value Proposition", "Market Validation Process"],
                correct: 1,
                explanation: "MVP (Minimum Viable Product) is the simplest version of your product that can be tested with real users."
            }
        ],
        doAndDont: {
            do: ["Validate market need before building", "Protect IP through patents", "Join an incubator for mentoring", "Start with a simple MVP"],
            dont: ["Skip market validation", "Ignore intellectual property protection", "Try to build everything alone", "Seek funding before having a prototype"]
        },
        caseStudy: "Three IIT students developed an AI-based language translation tool during their research project. They validated the need with 100 potential users, filed a patent, joined their university incubator, received ₹20 Lakhs from DST-NIDHI, and now serve 10,000+ users across rural India.",
        ethicsCheckpoint: "When commercializing research, ensure proper attribution to your university, co-researchers, and funding agencies. Respect IP agreements and licensing terms.",
        aiTools: [
            { name: "Lean Canvas (Leanstack)", url: "https://leanstack.com", description: "Create a one-page business model canvas for your research-based startup idea", category: "Business Planning", freeTag: "Free tier available" },
            { name: "Canva", url: "https://www.canva.com", description: "Design pitch decks, investor presentations, and startup branding materials", category: "Pitch Deck", freeTag: "Free tier available" },
            { name: "Google Forms", url: "https://forms.google.com", description: "Create surveys to validate market need and collect user feedback for your MVP", category: "Market Validation", freeTag: "Free" },
            { name: "Figma", url: "https://www.figma.com", description: "Design UI/UX prototypes for your product before building — validate with users", category: "Prototyping", freeTag: "Free tier available" },
            { name: "Indian Patent Search (IPIndia)", url: "https://ipindia.gov.in", description: "Search existing patents in India before filing your own to ensure novelty", category: "IP Research", freeTag: "Free" },
            { name: "Startup India Portal", url: "https://www.startupindia.gov.in", description: "Register your startup, access government schemes, tax benefits, and funding opportunities", category: "Startup Support", freeTag: "Free" },
            { name: "GitHub", url: "https://github.com", description: "Open-source your research code to build community and attract collaborators", category: "Open Source", freeTag: "Free" },
        ]
    }
];
