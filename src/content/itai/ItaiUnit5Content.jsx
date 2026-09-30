import React from 'react';
import {
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  Clock,
  Compass,
  Cpu,
  Brain,
  Bot,
  Zap,
  Layers,
  Search,
  Sliders,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const ItaiUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 05</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Introduction to IT and AI (Semester 1)
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>12 Periods / Exam Weightage: 12-14 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Fundamentals and Applications of AI
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">AI Definition & Types (ANI, AGI, ASI)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">AI vs Machine Learning vs Deep Learning</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Generative AI (ChatGPT, Gemini)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Prompt Engineering Principles</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Search Algorithms (BFS, DFS, A*) & Ethics</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          21st Century ka sabse transformative domain: Artificial Intelligence. Is unit me hum AI ke basic concepts, Machine Learning ke working principles, modern Generative AI (LLMs), effective prompt engineering techniques, aur real-world applications ko examine karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 5.1 Definition, Scope and Types of AI */}
      {/* ========================================================= */}
      <section id="sec-5-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5.1. Definition, Scope and Types of Artificial Intelligence
          </h2>
        </div>

        {/* Definition Placard */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                Artificial Intelligence (AI) kya hai?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong>Artificial Intelligence (कृत्रिम बुद्धिमत्ता)</strong> Computer Science ki wo branch hai jisme computers ya machines ko is tarah train kiya jata hai ki wo human intelligence ke tasks — jaise <strong>Learning (सीखना)</strong>, <strong>Reasoning (तर्क करना)</strong>, <strong>Problem Solving</strong>, aur <strong>Perception (देखकर समझना)</strong> — ko autonomously perform kar sakein.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                Father of AI: <strong>John McCarthy</strong> (Unhone 1956 me Dartmouth Conference me "Artificial Intelligence" term invent kiya tha).
              </p>
            </div>
          </div>
        </div>

        {/* Types based on Capability */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Classification of AI: Based on Capability (ANI vs AGI vs ASI)</span>
        </h3>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary">1. Artificial Narrow Intelligence (ANI / Weak AI)</h5>
              <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">Current Reality</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Wo AI jo sirf <strong>ek specific task</strong> me train kiya gaya ho aur usi me expert ho. Yeh apne domain se bahar koi kaam nahi kar sakti.
              <br />• <strong>Real Examples:</strong> Apple Siri, Google Translate, Chess engine (Stockfish), Tesla Autopilot lane detection, Netflix video recommendation. Aaj duniya me maujood <em>saari AI systems ANI hain</em>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-amber-500">2. Artificial General Intelligence (AGI / Strong AI)</h5>
              <span className="text-xs font-mono bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded font-bold">Research Stage</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Wo AI jo human brain ke barabar har field (science, arts, coding, philosophy) me autonomous tarike se naye skills seekh sake aur decision le sake. Yeh abhi exist nahi karti; OpenAI aur Google DeepMind is par active research kar rahe hain.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-purple-500">3. Artificial Super Intelligence (ASI)</h5>
              <span className="text-xs font-mono bg-purple-500/10 text-purple-500 px-2 py-0.5 rounded font-bold">Hypothetical Future</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Hypothetical concept jisme AI sabhi humans ke combined intellect se hazaron guna zyada smart ho jayegi. Sci-fi movies (Terminator, Matrix) me dikhaya jane wala concept.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.2 AI vs ML vs DL */}
      {/* ========================================================= */}
      <section id="sec-5-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5.2. Relationship: AI vs Machine Learning vs Deep Learning
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          Aksar students in teeno terms ko same samajh lete hain, jabki yeh <strong>Concentric Circles (एक के अंदर एक समाहित)</strong> hierarchy model follow karte hain:
        </p>

        {/* Concentric Circle Visual Representation */}
        <EducationalFigure
          maxWidth="max-w-lg"
          caption="Figure 5.1: Concentric Circle Model: Artificial Intelligence ⊃ Machine Learning ⊃ Deep Learning"
          source="Standard Computer Science Classification"
        >
          <div className="p-6 text-center font-mono text-xs w-full">
            <div className="p-4 rounded-2xl bg-primary/10 border-2 border-primary/30 max-w-md mx-auto space-y-3">
              <div className="font-bold text-primary text-sm">ARTIFICIAL INTELLIGENCE (Broad Umbrella)</div>
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                <div className="font-bold text-emerald-600 dark:text-emerald-400">MACHINE LEARNING (Learning from Data)</div>
                <div className="p-3 rounded-lg bg-amber-500/15 border border-amber-500/40">
                  <div className="font-bold text-amber-600 dark:text-amber-400">DEEP LEARNING (Multi-layer Neural Networks)</div>
                </div>
              </div>
            </div>
          </div>
        </EducationalFigure>

        {/* Traditional Programming vs Machine Learning */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Paradigm Shift: Traditional Programming vs Machine Learning</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-blue-500">Traditional Programming (Rule-Based)</h5>
            <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs">
              Data + Rules (Code by Human) ──► Computer ──► Output
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Human programmer har possible situation ke liye manually <code>if-else</code> conditions aur formulas likhta hai. Agar situation naye pattern ki ho, to program fail ho jata hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400">Machine Learning (Data-Driven)</h5>
            <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs">
              Data + Outputs (Examples) ──► Computer ──► Learned Rules (Model)
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Computer ko hazaron purane examples (data + result) dikhaye jate hain. Algorithm khud mathematical patterns aur rules detect karke ek <strong>Model</strong> bana leta hai jo unseen new data par accurate prediction karta hai.
            </p>
          </div>
        </div>

        {/* 3 Core Types of ML */}
        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">
          Three Main Types of Machine Learning
        </h4>
        <div className="grid md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-primary">1. Supervised Learning</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Labeled data par train hota hai (Input $X$ ke sath answer $Y$ diya hota hai).
              <br />• <strong>Classification:</strong> Email Spam vs Not Spam.
              <br />• <strong>Regression:</strong> House price prediction.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-emerald-600 dark:text-emerald-400">2. Unsupervised Learning</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Unlabeled data se hidden patterns aur groups discover karta hai.
              <br />• <strong>Clustering:</strong> E-commerce par similar buying behavior wale customers ke segments banana.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-amber-500">3. Reinforcement Learning</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Agent environment me trial and error se seekhta hai. Achhe action par <strong>Reward</strong> aur galti par <strong>Penalty</strong> milti hai (e.g. Self-driving cars, Chess bots).
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.3 Generative AI and Prompt Engineering */}
      {/* ========================================================= */}
      <section id="sec-5-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5.3. Generative AI, Large Language Models (LLMs) & Prompt Engineering
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          Traditional AI sirf existing data ko classify ya predict karti thi. Lekin <strong>Generative AI (GenAI)</strong> bilkul naya original content (human-like essays, computer code, high-resolution realistic images, music) generate kar sakti hai.
        </p>

        {/* GenAI Examples Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Bot className="w-4 h-4" />
              <span>LLMs: Large Language Models</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Arbon words ke internet corpus par trained deep neural networks jo natural language me conversation karte hain.
              <br />• <strong>Examples:</strong> OpenAI ChatGPT (GPT-4), Google Gemini, Anthropic Claude.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Diffusion Image & Code Generators</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Text description (prompt) se realistic artwork aur source code generate karne wale models.
              <br />• <strong>Examples:</strong> Midjourney, DALL-E 3, GitHub Copilot (coding assistant).
            </p>
          </div>
        </div>

        {/* Prompt Engineering */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Prompt Engineering: The Science of Effective AI Interaction</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          <strong>Prompt</strong> wo text instruction hai jo user AI ko deta hai. AI model se accurate, high-quality aur desired output nikalwane ke liye prompt ko strategically frame karne ki technique ko <strong>Prompt Engineering</strong> kehte hain.
        </p>

        {/* 4 Pillars of a Great Prompt */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 mb-6 space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider text-primary">
            4 Core Elements of a Perfect Engineering Prompt (C-R-T-F Framework)
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <strong className="block text-primary font-bold mb-1">1. Role (भूमिका)</strong>
              "Act as an expert BTEUP Computer Engineering professor..."
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <strong className="block text-emerald-600 dark:text-emerald-400 font-bold mb-1">2. Context (संदर्भ)</strong>
              "I am a 1st-year student preparing for upcoming final exams..."
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <strong className="block text-amber-500 font-bold mb-1">3. Task (कार्य)</strong>
              "Explain the difference between Compiler and Interpreter in simple Hinglish..."
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <strong className="block text-purple-500 font-bold mb-1">4. Format (प्रारूप)</strong>
              "Give the answer in a clean 4-row markdown comparison table."
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.4 Search Algorithms and Applications */}
      {/* ========================================================= */}
      <section id="sec-5-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5.4. Search Algorithms, Real-World Applications & Ethical Considerations
          </h2>
        </div>

        {/* AI Search Algorithms */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Basic Search Algorithms in AI (BFS vs DFS vs A*)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          AI agent kisi problem (jaise Maze puzzle ya GPS map navigation) me initial state se goal state tak pahuche ke liye <strong>Search Algorithms</strong> use karta hai:
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-primary">BFS (Breadth-First Search)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Graph ya tree me level-by-level horizontally search karta hai (Queue data structure). Shortest path ki guarantee deta hai, lekin memory bohot zyada consume karta hai.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-emerald-600 dark:text-emerald-400">DFS (Depth-First Search)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Pehle ek path par gehrai (depth) me end tak jata hai, fir backtrack karta hai (Stack data structure). Memory kafi kam lagti hai, lekin shortest path ki guarantee nahi hoti.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-amber-500">A* Search (Informed Heuristic)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Formula: $f(n) = g(n) + h(n)$, jahan $g(n)$ actual distance hai aur $h(n)$ heuristic estimate. <strong>Google Maps</strong> me do cities ke beech shortest driving route nikalne me A* search algorithm use hota hai.
            </p>
          </div>
        </div>

        {/* Real World Applications */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Real-World Engineering Applications of AI</span>
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">1. Healthcare:</strong>
            X-ray aur MRI scans me cancer/tumors detect karna, robotic surgeries, early disease forecasting.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">2. Transportation:</strong>
            Tesla self-driving cars, traffic light timing optimization, smart delivery drones.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">3. Agriculture:</strong>
            Drones se fasalon me pest aur bimari pehchanna, smart automated drip irrigation.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">4. Banking & Retail:</strong>
            Credit card online fraud detection, personalized shopping feeds, automated chatbots.
          </div>
        </div>

        {/* Ethical Considerations & Limitations */}
        <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20 text-xs sm:text-sm text-rose-950 dark:text-rose-200 space-y-2 mb-6">
          <div className="flex items-center gap-2 font-bold text-sm text-rose-700 dark:text-rose-300">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span>Ethical Challenges & Limitations of AI</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-rose-900 dark:text-rose-300">
            <li><strong>AI Hallucination:</strong> AI models kabhi-kabhi confidently galat ya fake facts fabricate kar dete hain.</li>
            <li><strong>Algorithmic Bias:</strong> Agar training data me discrimination ya bias tha, to AI model bhi unfair decisions lega.</li>
            <li><strong>Deepfakes & Misinformation:</strong> Kisi ka bhi fake audio/video banakar cyber crime aur defamation kiya ja sakta hai.</li>
            <li><strong>Job Displacement:</strong> Repetitive clerical jobs ka automation hona, jisse modern workforce ko upskilling karni padegi.</li>
          </ul>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-primary">Exam Point (याद रखो):</strong>
            AI vs ML vs DL ka comparison aur Generative AI (LLMs) ke concept par short notes BTEUP syllabus ka modern high-scoring question hai. Concentric circle diagram aur real examples (ChatGPT, Tesla) jarur mention karein.
          </div>
        </div>
      </section>
    </article>
  );
};

export default ItaiUnit5Content;
