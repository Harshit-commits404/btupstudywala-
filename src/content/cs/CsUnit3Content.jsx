import React from 'react';
import {
  BookOpen,
  Award,
  Lightbulb,
  Compass,
  FileSearch,
  BookMarked,
  Languages,
} from 'lucide-react';

export const CsUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Reading Comprehension: Unseen Passages
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Skimming vs Scanning</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Main Idea & Tone</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Solved Technical Sample Passage</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Prefixes & Suffixes (Affixation)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">High-Yield Technical Synonyms & Antonyms</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Homophones & Confusing Words</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          BTEUP semester examinations me Reading Comprehension ek high-scoring section hota hai. Isme student ki text decoding, vocabulary intuition aur contextual inference ability test ki jaati hai. Is unit me hum speed-reading methodologies, solved model technical passages, word-building (affixation), aur 30+ high-frequency engineering exam words ko detail me master karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 3.1 Reading Comprehension Basics */}
      {/* ========================================================= */}
      <section id="sec-3-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Reading Comprehension: Techniques and Problem Solving
          </h2>
        </div>

        {/* What is Reading Comprehension? */}
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          <strong>Reading Comprehension</strong> sirf shabdon ko aawaaz me bolna ya aankhon se scan karna nahi hai; yeh text ke symbolic meaning ko actively decode karna, central theme pehchanna, author ke viewpoint ko analyze karna aur puche gaye questions ke concise answers frame karne ki mental capability hai.
        </p>

        {/* 4 Reading Techniques */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Core Speed-Reading Strategies</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-sm mb-1 flex items-center gap-1.5">
              <FileSearch className="w-4 h-4" />
              <span>1. Skimming (Getting the Gist)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Passage ko bahut fast speed (300-400 words per minute) me glance karna taaki poore paragraph ka main idea (gist), tone aur general theme samajh aa sake.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Tip:</strong> Har paragraph ka first sentence (topic sentence) aur last concluding sentence dhyan se padhein.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-sm mb-1 flex items-center gap-1.5">
              <BookMarked className="w-4 h-4" />
              <span>2. Scanning (Finding Specific Data)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Poora passage na padh kar sirf kisi targeted keyword, date, percentage, scientist name ya scientific formula ko dhoondhne ke liye aankhein daudana.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Tip:</strong> Question me pucha gaya date ya capital letters (Names/Places) dhoondhne ke liye scanning best hai.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>3. Intensive Reading</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Ek specific paragraph ya complex technical sentence ko deep focus ke sath word-by-word padhna taaki uske deep logic, hidden inference ya hidden cause-and-effect relationship ko decode kiya ja sake.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1 flex items-center gap-1.5">
              <Languages className="w-4 h-4" />
              <span>4. Contextual Guessing</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Agar passage me koi aisa tough English word aa jaye jiska exact dictionary meaning aapko nahi pata, to ghabrayein nahi. Uske aage-peeche ke 2 sentences padh kar andaza lagayein ki woh positive sense me use ho raha hai ya negative.
            </p>
          </div>
        </div>

        {/* Exam Winning Strategy: The Reverse Method */}
        <div className="p-4 rounded-lg bg-amber-500/10 border-l-4 border-amber-500 mb-6">
          <h4 className="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>The Reverse Exam Strategy: Read Questions First!</span>
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            Exam hall me pehle 5 minute passage padhne me waste mat karein! Pehle <strong>niche puche gaye 4-5 questions ko jaldi se padhein</strong> aur unke keywords (jaise <em>"solar efficiency"</em>, <em>"battery degradation"</em>, <em>"in the year 2021"</em>) ko dimag me lock kar lein. Jab aap passage padhenge, to aapka brain un keywords ko instant radar ki tarah detect karke answer underline kar lega!
          </p>
        </div>

        {/* Solved Model Technical Passage */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Solved Model Unseen Passage (Technical Engineering Theme)</span>
        </h3>

        <div className="p-5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 mb-6 space-y-3 font-serif text-sm leading-relaxed text-slate-800 dark:text-slate-200">
          <p className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 not-italic">
            [SAMPLE PASSAGE FOR PRACTICE]
          </p>
          <p>
            "Artificial Intelligence and automated robotics are revolutionizing modern manufacturing industries at an unprecedented velocity. Traditional assembly lines, which heavily relied on manual labor and repetitive human intervention, are being progressively phased out in favor of intelligent cyber-physical systems. These intelligent systems leverage machine vision, deep learning predictive algorithms, and high-precision robotic actuators to minimize dimensional tolerances and eliminate human fatigue-induced defects. In high-precision automotive and semiconductor fabrication plants, a microscopic alignment error of even a single micrometer can compromise the structural integrity of an entire integrated circuit batch."
          </p>
          <p>
            "However, this technological paradigm shift does not render human engineers obsolete; rather, it fundamentally redefines their professional responsibility. While repetitive physical assembling is automated, the demand for multidisciplinary engineers proficient in supervisory control, predictive maintenance, algorithmic troubleshooting, and industrial cybersecurity has surged exponentially. The modern diploma technician is no longer just a wrench-wielder, but a sophisticated systems operator capable of diagnosing telemetric anomalies and collaborating harmoniously with intelligent machines."
          </p>
        </div>

        {/* Sample Questions & Answers */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
              Q1. Why are traditional assembly lines being replaced by cyber-physical systems?
            </p>
            <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-sans">
              <strong>Answer:</strong> Traditional assembly lines relied heavily on repetitive manual labor that was prone to human fatigue. Intelligent cyber-physical systems are replacing them to minimize dimensional errors, eliminate defects, and operate with high micrometer precision using machine vision and predictive algorithms.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
              Q2. Does industrial automation make human engineers obsolete? Explain author's view.
            </p>
            <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-sans">
              <strong>Answer:</strong> No, industrial automation does not make human engineers obsolete. Instead, it elevates their role from repetitive manual labor to sophisticated systems operators specializing in predictive maintenance, supervisory control, cybersecurity, and troubleshooting telemetric anomalies.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
              Q3. Find words from the passage which mean: (i) Speed, (ii) Outdated/no longer useful.
            </p>
            <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-sans font-mono">
              <strong>Answer:</strong> (i) Speed = <em>Velocity</em> | (ii) Outdated = <em>Obsolete</em>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.2 Prefix and Suffix */}
      {/* ========================================================= */}
      <section id="sec-3-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Word Formation: Prefixes and Suffixes (Affixation)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          English vocabulary me words root words (mool shabd) se bante hain. Kisi root word ke aage ya peeche letters add karke naye words banane ki grammatical technique ko <strong>Affixation</strong> kehte hain:
        </p>

        {/* Prefixes Table */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Prefix (Shabd ke aage judne wale shabdaansh)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
          Prefix root word ke aage lag kar uska meaning change kar deta hai (aksar opposite, time, size ya position darshata hai):
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Prefix</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Core Meaning</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">General English Example</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Engineering & Technical Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">semi-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Half / Partial</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Semicircle, Semi-final</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Semiconductor</strong>, Semi-automatic machine</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">micro-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Extremely small (10⁻⁶)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Microscope, Microorganism</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Microcontroller</strong>, Microprocessor, Micrometer</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">trans-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Across / Change</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Transport, Translate</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Transformer</strong>, Transmission line, Transducer</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">inter-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Between / Mutual</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">International, Interview</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Internet</strong>, Interconnection, Interfacing</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">un- / dis- / in-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Not / Opposite (Negative)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Unhappy, Disconnect</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Insulator</strong>, Discharging battery, Unstable system</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">auto-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Self / Automatic</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Autobiography, Autograph</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Automation</strong>, Auto-transformer, Automobile</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Suffixes Table */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Suffix (Shabd ke peeche jud kar Part of Speech badalne wale shabdaansh)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
          Suffix root word ke end me lag kar verb ko noun me, ya noun ko adjective me convert karta hai:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Suffix</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Grammatical Function</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Root Word</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Resulting Formed Word</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">-tion / -sion</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Forms Noun (Action or state)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Generate (Verb), Transform (Verb)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Generation</strong>, Transformation, Precision</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">-ance / -ence</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Forms Noun (Property/Quality)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Resist (Verb), Impede (Verb)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Resistance</strong>, Impedance, Capacitance</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">-able / -ible</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Forms Adjective (Capable of)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Renew (Verb), Reverse (Verb)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Renewable</strong> energy, Reversible process</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">-ize / -ise</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Forms Verb (To make / cause)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Standard (Noun), Magnet (Noun)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Standardize</strong>, Magnetize, Synchronize</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">-ly</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Forms Adverb (Manner)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Periodic (Adj), Smooth (Adj)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><strong>Periodically</strong>, Smoothly, Accurately</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.3 Synonyms and Antonyms */}
      {/* ========================================================= */}
      <section id="sec-3-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            High-Yield Synonyms, Antonyms, and Homophones
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          <strong>Synonyms</strong> woh shabd hote hain jinka meaning samaan (similar) hota hai. <strong>Antonyms</strong> woh shabd hote hain jinka meaning viparit (opposite) hota hai. BTEUP exams aur placement aptitude test me aane wale top 20 technical words:
        </p>

        {/* 20 High Yield Words Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Word</th>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Hindi Meaning</th>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400">Synonym (Samaanarthak)</th>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700 text-red-600 dark:text-red-400">Antonym (Vilom Shabd)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Accelerate</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Gati badhana</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Hasten, Expedite, Quicken</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Decelerate, Retard, Slow down</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Accurate</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Bilkul sahi (Shuddh)</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Precise, Correct, Exact</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Inaccurate, Erroneous, Flawed</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Amplify</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Signal ko badhana</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Boost, Magnify, Enhance</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Attenuate, Diminish, Reduce</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Autonomous</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Swatantra / Self-acting</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Independent, Self-governing</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Dependent, Controlled, Subordinate</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Defective</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Kharab / Dosh-purna</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Faulty, Flawed, Broken</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Flawless, Perfect, Intact</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Durable</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Tikau / Mazboot</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Long-lasting, Sturdy, Robust</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Fragile, Brittle, Weak</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Efficient</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Kushal / Kam loss wala</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Productive, Competent, Optimal</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Inefficient, Wasteful, Incompetent</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Feasible</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Sambhav / Practical</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Practicable, Viable, Workable</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Impracticable, Impossible, Unviable</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Flexible</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Lachila / Badal-yogya</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Adaptable, Pliable, Elastic</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Rigid, Inflexible, Stiff</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Hazardous</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Khatarnak</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Dangerous, Risky, Perilous</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Safe, Harmless, Secure</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Mandatory</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Anivarya (Zaroori)</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Compulsory, Obligatory, Required</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Optional, Voluntary, Discretionary</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700">Obsolete</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Purana / Aprachalit</td>
                <td className="p-2.5 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">Outdated, Antiquated, Archaic</td>
                <td className="p-2.5 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Modern, Contemporary, Up-to-date</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Homophones: Watch Out for Confusing Words */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Homophones: Awaaz Ek Jaisi, Par Meaning aur Spelling Alag!</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">Principal vs Principle</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Principal:</strong> College ke head master ya main loan amount (e.g., <em>"The Principal addressed the students."</em>)<br />
              <strong>Principle:</strong> Niyam ya scientific law (e.g., <em>"Transformer works on the principle of mutual induction."</em>)
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">Stationary vs Stationery</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Stationary (with 'a'):</strong> Ruka hua / immovable (e.g., <em>"The stator remains stationary."</em>)<br />
              <strong>Stationery (with 'e'):</strong> Pen, pencil, paper items (e.g., <em>"Buy exam stationery."</em>)
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">Brake vs Break</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Brake:</strong> Gaadi rokne ka device (e.g., <em>"Apply pneumatic brakes."</em>)<br />
              <strong>Break:</strong> Tootna ya chhutti (e.g., <em>"Do not break the glass tube."</em>)
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">Current vs Currant</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Current:</strong> Flow of electric charge ya present time (e.g., <em>"Electric current is 5 Amperes."</em>)<br />
              <strong>Currant:</strong> Ek dry fruit (kishmish jaisa berry).
            </p>
          </div>
        </div>

        {/* Quick Revision Card */}
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Unit 3 Quick Revision Takeaway</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            • Reading Comprehension tests Skimming (Gist), Scanning (Specific Facts), and Contextual inference.<br />
            • Reverse method saves exam time: Read questions and note keywords before reading the passage.<br />
            • Prefix is added to the beginning (semi-, micro-, trans-); Suffix is added to the end (-tion, -able, -ize).<br />
            • Master engineering homophones: Principal vs Principle, Stationary vs Stationery.
          </p>
        </div>
      </section>
    </article>
  );
};

export default CsUnit3Content;
