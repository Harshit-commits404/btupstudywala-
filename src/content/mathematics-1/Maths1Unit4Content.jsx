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

export const Maths1Unit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Mathematics - 1 (Semester 1)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 06 Periods</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Binomial Theorem
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (द्विपद प्रमेय)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Permutations (nPr)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Combinations (nCr)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Binomial Expansion</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">General Term</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Middle Term</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Bade algebraic expressions jinki power bohot zyada hoti hai, unhe asani se expand (phailana) karne ke liye Binomial Theorem ka istemal kiya jata hai. Isme Permutations aur Combinations ka basic concept use hota hai.
        </p>
      </header>

      {/* 4.1 PERMUTATIONS AND COMBINATIONS */}
      <section id="sec-4-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Permutations and Combinations
          </h2>
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 mb-4 font-bold">
          Factorial (!): n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1. (0! = 1)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Permutation (nPr)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              'n' alag-alag cheezon mein se ek baar mein 'r' cheezon ko lekar kitne <strong>arrangements</strong> banaye ja sakte hain. Yahan order matter karta hai.
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 px-3 py-2 rounded text-brand-600 dark:text-brand-400 text-sm text-center">
              nPr = n! / (n - r)!
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Combination (nCr)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              'n' alag-alag cheezon mein se ek baar mein 'r' cheezon ke kitne <strong>selections (groups)</strong> banaye ja sakte hain. Yahan order matter <em>nahi</em> karta. (Ye Binomial mein use hoga)
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 px-3 py-2 rounded text-brand-600 dark:text-brand-400 text-sm text-center">
              nCr = n! / [r! (n - r)!]
            </div>
          </div>
        </div>
      </section>

      {/* 4.2 BINOMIAL THEOREM */}
      <section id="sec-4-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Binomial Theorem (Positive Integral Index)
          </h2>
          <p className="text-sm text-slate-500 mt-1">(Without proof as per syllabus)</p>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Agar n ek positive integer ho, toh kisi bhi binomial (a + x)ⁿ ki expansion niche diye gaye formula se hoti hai:
        </p>

        <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg mb-6 overflow-x-auto">
          <div className="font-mono text-brand-700 dark:text-brand-400 text-lg min-w-max">
            (x + a)ⁿ = ⁿC₀ xⁿ a⁰ + ⁿC₁ xⁿ⁻¹ a¹ + ⁿC₂ xⁿ⁻² a² + ... + ⁿCᵣ xⁿ⁻ʳ aʳ + ... + ⁿCₙ x⁰ aⁿ
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-6">
          <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2">Important Properties:</h4>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 text-sm space-y-1">
            <li>Total number of terms expansion me hamesha <strong>(n + 1)</strong> hote hain.</li>
            <li>Har term mein 'x' aur 'a' ki powers ka sum hamesha 'n' ke barabar hota hai.</li>
            <li>Start se aur end se equidistant (saman doori par) terms ke binomial coefficients (ⁿCr) barabar hote hain (Kyunki ⁿCr = ⁿCₙ₋ᵣ).</li>
          </ul>
        </div>
      </section>

      {/* 4.3 APPLICATIONS OF BINOMIAL THEOREM */}
      <section id="sec-4-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Applications of Binomial Theorem
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">1. General Term (व्यापक पद)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Expansion (x + a)ⁿ me kisi bhi term ko T_r+1 (jahan r = term number - 1) se darshate hain. Ye formulae sabse important hai kyu ki baki applications isi par based hain.
            </p>
            <div className="font-mono bg-slate-50 dark:bg-slate-900 p-3 rounded text-sm text-brand-600 dark:text-brand-400 text-center">
              T_{r+1} = ⁿCᵣ xⁿ⁻ʳ aʳ
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">2. Middle Term (मध्य पद)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Expansion ke beecho-beech wala term. Isme do cases bante hain:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-brand-600 dark:text-brand-400">Case 1: Agar 'n' Even (सम) ho</strong><br/>
                Total terms (n+1) odd honge. Toh ek hi middle term hoga.<br/>
                <strong>Middle term = ((n/2) + 1)th term.</strong>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-brand-600 dark:text-brand-400">Case 2: Agar 'n' Odd (विषम) ho</strong><br/>
                Total terms (n+1) even honge. Toh do middle terms honge.<br/>
                <strong>Middle terms = ((n+1)/2)th aur ((n+3)/2)th terms.</strong>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">3. Independent Term (Term independent of x)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Aisa term jisme 'x' na ho, yani x ki power zero (x⁰) ho.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded text-sm text-slate-700 dark:text-slate-300">
              <strong>Steps to solve:</strong>
              <ol className="list-decimal list-inside mt-1 space-y-1">
                <li>Sabse pehle General term (T_r+1) nikalo.</li>
                <li>Sare 'x' ki powers ko ekathta karo (combine karo).</li>
                <li>'x' ki net power ko 0 ke barabar rakhkar 'r' ki value nikalo.</li>
                <li>Wapas us 'r' ki value ko General term me put kardo, wahi answer hoga.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Maths1Unit4Content;
