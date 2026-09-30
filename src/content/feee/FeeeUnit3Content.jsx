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
  Binary,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const FeeeUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>8 Periods / Exam Weightage: 8-10 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Overview of Digital Electronics & Logic Gates
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Analog vs Digital Signals</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Number Systems (Binary, Hex, Octal)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">1's and 2's Complement</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Logic Gates (AND, OR, NOT, XOR)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Universal Gates (NAND, NOR) & De Morgan's Laws</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Modern computing aur microprocessors ka core building block: Binary logic. Is unit me hum analog aur digital systems ka contrast, number systems ke conversion methods, logic gates ki truth tables aur Boolean algebra ke fundamental laws ko examine karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 3.1 Analog vs Digital Electronics */}
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
            3.1. Analog vs Digital Electronics
          </h2>
        </div>

        {/* Definition Placard */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                Signal Representation: Continuous vs Discrete
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Nature me paaye jane wale lagbhag sabhi real-world physical phenomena (sound, temperature, light, pressure) <strong>Analog</strong> hote hain jo time ke sath continuously change hote hain. Lekin computers aur processors in signals ko store aur process karne ke liye unhe discrete binary levels (0s aur 1s) me badalte hain jise <strong>Digital Signal</strong> kehte hain.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Feature</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Analog Electronics</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Digital Electronics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Signal Nature</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Continuous values over continuous time (Smooth curves)</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Discrete two binary levels: Logic 0 ($0\text{V}$) & Logic 1 ($5\text{V}$ / $3.3\text{V}$)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Noise Immunity</td>
                <td className="p-3 text-red-500 font-bold">Low (noise easily distorts original analog signal)</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">High (thoda voltage fluctuate hone par bhi logic state change nahi hoti)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Storage & Processing</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Magnetic cassette tapes par decay hota hai</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Semiconductor memory / SSDs me 100% accurate lossless storage</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Examples</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Radio AM/FM, Old landline telephone, Thermometer</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Microprocessors, Smart TVs, Digital watches, Smartphones</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.2 Number Systems */}
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
            3.2. Digital Number Systems and Binary Arithmetic
          </h2>
        </div>

        {/* 4 Number Systems */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-primary">1. Decimal (Base 10)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Normal human day-to-day mathematics.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-emerald-600 dark:text-emerald-400">2. Binary (Base 2)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Bits: 0 aur 1. Computer hardware ke electronic switches ki On/Off states.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-amber-500">3. Octal (Base 8)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Digits: 0 to 7. Har octal digit exactly 3 binary bits ($2^3 = 8$) represent karta hai.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-purple-500">4. Hexadecimal (Base 16)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">0-9 aur A=10, B=11, C=12, D=13, E=14, F=15. Har hex digit 4 binary bits ($2^4 = 16$) represent karta hai.</p>
          </div>
        </div>

        {/* 1's and 2's Complement */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Signed Binary Numbers: 1's Complement & 2's Complement</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1.5">
            <strong className="text-slate-900 dark:text-white font-bold block text-sm text-primary">1's Complement Method:</strong>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Diye gaye binary number ke sabhi 0s ko 1 aur sabhi 1s ko 0 me invert kar do (NOT operation).
              <br /><span className="font-mono font-bold block mt-1">Example: (101100)₂ ka 1's complement = (010011)₂</span>
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1.5">
            <strong className="text-slate-900 dark:text-white font-bold block text-sm text-emerald-600 dark:text-emerald-400">2's Complement Method (Used in CPUs):</strong>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Pehle binary number ka 1's complement nikalo, fir uske Least Significant Bit (LSB) me 1 add kar do:
              <br /><span className="font-mono font-bold block mt-1">Formula: 2's Complement = 1's Complement + 1</span>
              <span className="font-mono text-xs block text-slate-500 dark:text-slate-400">Example: (101100)₂ ──► 010011 + 1 = (010100)₂</span>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.3 Logic Gates and Truth Tables */}
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
            3.3. Logic Gates, Truth Tables, Universal Gates & De Morgan's Theorems
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Logic Gate</strong> ek electronic circuit hai jisme ek ya ek se zyada binary inputs hote hain lekin sirf <strong>ek single output</strong> hota hai. Output Boolean logic rules ke hisab se determine hota hai:
        </p>

        {/* Master Gates Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Gate Name</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Category</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Boolean Expression</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Truth Table Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold text-primary">AND Gate</td>
                <td className="p-3 text-slate-500">Basic</td>
                <td className="p-3 font-mono font-bold">Y = A · B</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Output 1 tabhi hoga jab <em>dono inputs 1</em> hon</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-primary">OR Gate</td>
                <td className="p-3 text-slate-500">Basic</td>
                <td className="p-3 font-mono font-bold">Y = A + B</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Output 1 hoga agar <em>koi bhi ek input 1</em> ho</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-primary">NOT Gate (Inverter)</td>
                <td className="p-3 text-slate-500">Basic</td>
                <td className="p-3 font-mono font-bold">Y = A' (A-bar)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Input ko invert kar deta hai (0 → 1 aur 1 → 0)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">NAND Gate</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Universal</td>
                <td className="p-3 font-mono font-bold">Y = (A · B)'</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">AND ka ulta; output 0 sirf tab hoga jab dono inputs 1 hon</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">NOR Gate</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Universal</td>
                <td className="p-3 font-mono font-bold">Y = (A + B)'</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">OR ka ulta; output 1 tabhi hoga jab dono inputs 0 hon</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-purple-600 dark:text-purple-400">XOR Gate</td>
                <td className="p-3 text-slate-500">Special</td>
                <td className="p-3 font-mono font-bold">Y = A ⊕ B = A'B + AB'</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Output 1 tabhi hoga jab dono inputs <em>alag-alag (different)</em> hon</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Universal Gates Concept */}
        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs sm:text-sm space-y-2 mb-6">
          <strong className="font-bold text-emerald-800 dark:text-emerald-300 block text-sm">
            NAND aur NOR ko Universal Gates kyon kehte hain?
          </strong>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Kyonki sirf NAND gates ya sirf NOR gates ka use karke duniya ka koi bhi digital gate (AND, OR, NOT, XOR) aur koi bhi complex circuit (Adders, Flip-Flops, ALUs) bina kisi dusre gate ki madad ke successfully fabricate kiya ja sakta hai.
          </p>
        </div>

        {/* De Morgan's Theorems */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>De Morgan's Theorems (Boolean Simplification Laws)</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary">De Morgan's First Theorem</h5>
            <div className="p-2.5 rounded bg-primary/5 font-mono text-sm text-primary font-bold text-center">
              (A + B)' = A' · B'
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <em>Statement:</em> Do variables ke sum ka complement (NOR operation) unke individual complements ke product (Bubbled AND) ke barabar hota hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400">De Morgan's Second Theorem</h5>
            <div className="p-2.5 rounded bg-emerald-500/5 font-mono text-sm text-emerald-600 dark:text-emerald-400 font-bold text-center">
              (A · B)' = A' + B'
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <em>Statement:</em> Do variables ke product ka complement (NAND operation) unke individual complements ke sum (Bubbled OR) ke barabar hota hai.
            </p>
          </div>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-primary">Exam Point (याद रखो):</strong>
            BTEUP digital electronics section me: <em>1. NAND gate se AND, OR aur NOT gate banana</em>, aur <em>2. De Morgan ke dono laws ka statement aur truth table proof</em> 100% regular questions hain. Hamesha neat logic gate diagram banayein.
          </div>
        </div>
      </section>
    </article>
  );
};

export default FeeeUnit3Content;
