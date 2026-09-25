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

export const Maths1Unit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Mathematics - 1 (Semester 1)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 08 Periods</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Partial Fractions
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (आंशिक भिन्न)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Polynomial Fraction</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Proper & Improper</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Partial Fractions Def.</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Resolution Methods</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Algebraic fractions ko chhote aur simple fractions (jinke denominators me linear ya quadratic factors hon) me todna Partial Fractions kehlata hai. Ye concept aage chalkar advanced calculus (integration) me bohot kaam aata hai.
        </p>
      </header>

      {/* 3.1 POLYNOMIAL FRACTION */}
      <section id="sec-3-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Polynomial Fraction
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ek aisi expression jise N(x) / D(x) ke form me likha jaye, jahan N(x) numerator (ansh) aur D(x) denominator (har) dono x ke polynomials (bahu-pad) hain, aur D(x) zero ke barabar nahi hai, use Polynomial Fraction kehte hain.
        </p>
      </section>

      {/* 3.2 PROPER AND IMPROPER FRACTIONS */}
      <section id="sec-3-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Proper and Improper Fractions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Proper Fraction (उचित भिन्न)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Agar numerator N(x) ki degree (highest power of x), denominator D(x) ki degree se <strong>kam (less)</strong> ho, toh use Proper Fraction kehte hain. Partial fraction sirf proper fractions ka hi direct nikalta hai.
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 px-3 py-2 rounded text-brand-600 dark:text-brand-400 text-sm">
              Example: (x + 1) / (x² + 3x + 2)
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Improper Fraction (विषम भिन्न)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Agar numerator N(x) ki degree, denominator D(x) ki degree ke <strong>barabar ya usse badi (equal or greater)</strong> ho, toh use Improper Fraction kehte hain.
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 px-3 py-2 rounded text-brand-600 dark:text-brand-400 text-sm">
              Example: (x³ + 2x) / (x² - 1)
            </div>
          </div>
        </div>
      </section>

      {/* 3.3 PARTIAL FRACTIONS */}
      <section id="sec-3-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Partial Fractions Definition
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Kisi complicated algebraic fraction ko ek se zyada simple fractions ke sum (jod) ya difference (ghataw) ke roop mein todne (resolve karne) ko "Resolution into Partial Fractions" kehte hain. Aur in simple fractions ko us main fraction ka "Partial Fractions" kehte hain.
        </p>
      </section>

      {/* 3.4 RESOLUTION INTO PARTIAL FRACTIONS */}
      <section id="sec-3-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Resolution into Partial Fractions
          </h2>
        </div>

        <div className="space-y-8">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">A. Proper fractions with non-repeated linear factors</h4>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900">
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                Jab denominator ke factors linear (degree 1) ho aur koi factor repeat na ho raha ho.
              </p>
              <div className="font-mono bg-slate-50 dark:bg-slate-800 p-3 rounded text-sm text-brand-700 dark:text-brand-400 mb-4">
                Form: f(x) / [(x-a)(x-b)] = A / (x-a) + B / (x-b)
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <strong>Steps:</strong>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                  <li>Form assume karo aur LCM lo.</li>
                  <li>Denominator cancel karke Numerators ko equate karo.</li>
                  <li>x ki appropriate values put karke (e.g., x=a, x=b) A aur B ki value nikalo.</li>
                  <li>Values ko form me put kardo.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">B. Improper fractions with non-repeated linear factors</h4>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900">
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                Preliminary Step: Agar fraction improper hai, toh pehle Numerator ko Denominator se Divide (Bhag) karte hain (Long division method).
              </p>
              <div className="font-mono bg-slate-50 dark:bg-slate-800 p-3 rounded text-sm text-brand-700 dark:text-brand-400 mb-4">
                Form: Improper Fraction = Quotient + [Remainder / Denominator]
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Yahan "Remainder / Denominator" ek Proper Fraction ban jata hai. Ab is proper fraction ko upar (A) wale method se solve karte hain.
              </p>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">C. Proper/Improper fractions with repeated linear factors</h4>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900">
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                Jab denominator me ek hi linear factor kai baar (repeated/square/cube) aata hai.
              </p>
              <div className="font-mono bg-slate-50 dark:bg-slate-800 p-3 rounded text-sm text-brand-700 dark:text-brand-400 mb-4">
                Form: f(x) / [(x-a)²(x-b)] = A / (x-a) + B / (x-a)² + C / (x-b)
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <strong>Steps:</strong>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                  <li>Upar wali form set karo aur LCM lo.</li>
                  <li>Numerators ko equate karo.</li>
                  <li>Constants (A, B, C) nikalne ke liye ya to x ki value substitute karo, ya <strong>x ki powers (x², x) ke coefficients ko compare (tulna) karo</strong> equations banakar.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Maths1Unit3Content;
