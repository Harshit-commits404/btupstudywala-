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
} from 'lucide-react';

export const Maths1Unit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Mathematics - 1 (Semester 1)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 10 Periods</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Differential Calculus
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (अवकलन गणित)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Functions</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Limits</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Standard Limits</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Differentiation by Definition</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Diff. Rules</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Types of Diff.</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Differential calculus ek aisa mathematical tool hai jo change ki rate ko naapta hai. Engineering mein speeds, growth rates, aur slopes nikalne ke liye iska bahut bada role hai. Is unit mein hum functions, unki limits, aur differentiation nikalne ke tareeke seekhenge.
        </p>
      </header>

      {/* 2.1 FUNCTION */}
      <section id="sec-2-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Definition of Function
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ek relation ko Function (फलन) tab kaha jata hai jab set A (Domain) ke har ek element ka set B (Codomain) mein sirf ek aur unique image (output) ho. Ise mathematical form mein y = f(x) se darshate hain, jahan x independent variable hai aur y dependent variable hai.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <strong>Basic Examples:</strong>
          <ul className="list-disc list-inside mt-2 text-slate-700 dark:text-slate-300 text-sm space-y-1">
            <li>f(x) = 2x + 3 (Linear Function)</li>
            <li>f(x) = x² (Quadratic Function)</li>
            <li>f(x) = sin(x) (Trigonometric Function)</li>
          </ul>
        </div>
      </section>

      {/* 2.2 LIMITS */}
      <section id="sec-2-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Concept of Limits
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Limit us value ko kehte hain jahan function approach (pahuchne ki koshish) karta hai jab independent variable kisi point ke kareeb jata hai. Jab f(x) exactly ek value (jaise a) par defined na ho (example 0/0 form), toh hum limit nikal kar uski tendency pta karte hain.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6 text-center text-lg font-mono text-brand-700 dark:text-brand-400">
          lim(x→a) f(x) = L
        </div>
      </section>

      {/* 2.3 STANDARD LIMITS */}
      <section id="sec-2-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Four Standard Limits
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ye standard limits numerical problems solve karne mein direct use kiye jate hain (Exam me bahut aate hain):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <h4 className="font-bold text-slate-500 dark:text-slate-400 text-xs mb-2 uppercase tracking-wider">Standard Limit 1</h4>
            <div className="font-mono text-brand-600 dark:text-brand-400 text-lg">
              lim(x→a) [ (xⁿ - aⁿ) / (x - a) ] = n aⁿ⁻¹
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <h4 className="font-bold text-slate-500 dark:text-slate-400 text-xs mb-2 uppercase tracking-wider">Standard Limit 2</h4>
            <div className="font-mono text-brand-600 dark:text-brand-400 text-lg">
              lim(x→0) [ (sin x) / x ] = 1
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <h4 className="font-bold text-slate-500 dark:text-slate-400 text-xs mb-2 uppercase tracking-wider">Standard Limit 3</h4>
            <div className="font-mono text-brand-600 dark:text-brand-400 text-lg">
              lim(x→0) [ (aˣ - 1) / x ] = logₑ a
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <h4 className="font-bold text-slate-500 dark:text-slate-400 text-xs mb-2 uppercase tracking-wider">Standard Limit 4</h4>
            <div className="font-mono text-brand-600 dark:text-brand-400 text-lg">
              lim(x→0) [ (1 + x)^(1/x) ] = e
            </div>
          </div>
        </div>
      </section>

      {/* 2.4 DIFFERENTIATION BY DEFINITION */}
      <section id="sec-2-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Differentiation by Definition (First Principle)
          </h2>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
          <p className="text-blue-900 dark:text-blue-300 font-mono text-center">
            f'(x) = lim(h→0) [ f(x+h) - f(x) ] / h
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm text-center mt-2">
            Ise "First Principle of Differentiation" ya "Differentiation from First Principles" kehte hain.
          </p>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4 font-bold">Standard Derivatives (Derived by First Principle):</p>
        <ul className="list-none space-y-2 font-mono text-sm text-slate-800 dark:text-slate-200">
          <li className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-200 dark:border-slate-700 flex justify-between">
            <span>d/dx (xⁿ)</span> 
            <span className="text-brand-600 dark:text-brand-400 font-bold">n xⁿ⁻¹</span>
          </li>
          <li className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-200 dark:border-slate-700 flex justify-between">
            <span>d/dx (sin x)</span> 
            <span className="text-brand-600 dark:text-brand-400 font-bold">cos x</span>
          </li>
          <li className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-200 dark:border-slate-700 flex justify-between">
            <span>d/dx (cos x)</span> 
            <span className="text-brand-600 dark:text-brand-400 font-bold">-sin x</span>
          </li>
          <li className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-200 dark:border-slate-700 flex justify-between">
            <span>d/dx (tan x)</span> 
            <span className="text-brand-600 dark:text-brand-400 font-bold">sec² x</span>
          </li>
          <li className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-200 dark:border-slate-700 flex justify-between">
            <span>d/dx (eˣ)</span> 
            <span className="text-brand-600 dark:text-brand-400 font-bold">eˣ</span>
          </li>
          <li className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-200 dark:border-slate-700 flex justify-between">
            <span>d/dx (logₑ x)</span> 
            <span className="text-brand-600 dark:text-brand-400 font-bold">1 / x</span>
          </li>
        </ul>
      </section>

      {/* 2.5 DIFFERENTIATION RULES */}
      <section id="sec-2-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Differentiation Rules
          </h2>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">1. Sum/Difference Rule</h4>
            <div className="font-mono text-brand-700 dark:text-brand-400 text-sm">
              d/dx [ u(x) ± v(x) ] = d/dx [u(x)] ± d/dx [v(x)]
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">2. Product Rule (U.V Rule)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs mb-2">Pehla function waise hi × dusre ka differentiation + dusra function waise hi × pehle ka differentiation.</p>
            <div className="font-mono text-brand-700 dark:text-brand-400 text-sm">
              d/dx [ u·v ] = u · (dv/dx) + v · (du/dx)
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">3. Quotient Rule (U/V Rule)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs mb-2">Numerator(Ansh) aur Denominator(Har) ka rule.</p>
            <div className="font-mono text-brand-700 dark:text-brand-400 text-sm">
              d/dx [ u/v ] = [ v·(du/dx) - u·(dv/dx) ] / v²
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">4. Chain Rule (Function of a function)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs mb-2">Agar y, u ka function hai aur u, x ka function hai.</p>
            <div className="font-mono text-brand-700 dark:text-brand-400 text-sm">
              dy/dx = (dy/du) × (du/dx)
            </div>
          </div>
        </div>
      </section>

      {/* 2.6 TYPES OF DIFFERENTIATION */}
      <section id="sec-2-6" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.6
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Types of Differentiation
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Trigonometric Functions</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">Isme chain rule ka bahut use hota hai. Example: d/dx (sin 3x) nikalna.</p>
            <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-slate-800 dark:text-slate-200 space-y-1">
              <div>Given: y = sin(3x)</div>
              <div>Rule (Chain Rule): dy/dx = cos(3x) · d/dx(3x)</div>
              <div>Final Answer: dy/dx = 3 cos(3x)</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Logarithmic Differentiation</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">Jab function ki power mein function ho (like y = xˣ), toh hum dono taraf log lete hain aur phir differentiate karte hain.</p>
            <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-slate-800 dark:text-slate-200 space-y-1">
              <div>Given: y = xˣ</div>
              <div>Take log: log y = x log x</div>
              <div>Differentiate: (1/y) (dy/dx) = x(1/x) + (log x)(1)</div>
              <div>(1/y) (dy/dx) = 1 + log x</div>
              <div>Final Answer: dy/dx = xˣ(1 + log x)</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Exponential Functions</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">e ke powers wale functions.</p>
            <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-slate-800 dark:text-slate-200 space-y-1">
              <div>Given: y = e^(2x)</div>
              <div>Rule: dy/dx = e^(2x) · d/dx(2x)</div>
              <div>Final Answer: dy/dx = 2e^(2x)</div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Maths1Unit2Content;
