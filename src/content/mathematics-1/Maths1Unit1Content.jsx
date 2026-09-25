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

export const Maths1Unit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
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
            Trigonometry
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (त्रिकोणमिति)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Concept of Angles</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Allied Angles</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Sum & Difference</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Product Formulae</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Multiple Angles (2A)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Graphs</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Trigonometry engineering ka ek bahut important hissa hai jo right-angled triangles ke angles aur sides ke beech ka relation batata hai. Is unit mein hum angles ke measurement aur unpar based formulas (allied angles, sum/difference, multiple angles) ko padhenge.
        </p>
      </header>

      {/* 1.1 CONCEPT OF ANGLES */}
      <section id="sec-1-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Concept of Angles & Measurement
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Angle tab banta hai jab ek line (initial side) kisi fixed point (vertex) ke around rotate karke nayi position (terminal side) par aati hai. Anti-clockwise rotation ko positive aur clockwise rotation ko negative angle mana jata hai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Degree Measure (°)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Ek pure revolution (poora chakkar) ko 360 equal parts mein divide karte hain, jise Degree kehte hain.<br/>
              1 Revolution = 360°<br/>
              1 Degree (1°) = 60' (minutes)<br/>
              1 Minute (1') = 60" (seconds)
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Radian Measure (rad)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Circle ke center par ek aise arc (chaap) dwara banaya gaya angle jiski lambai (arc length) radius (r) ke barabar hoti hai, use 1 Radian kehte hain.<br/>
              Formula: <strong>Angle (θ) = Arc Length (s) / Radius (r)</strong>
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Conversion between Degree and Radian</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Since ek poore circle ka angle 360° hota hai, aur arc length 2πr hoti hai, toh radians mein angle 2π radians hota hai. Isliye:
          <strong> 360° = 2π radians  &rArr;  180° = π radians</strong>
        </p>
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-6 flex flex-col md:flex-row gap-4 justify-around">
          <div className="text-center">
            <span className="block font-bold text-emerald-800 dark:text-emerald-400 text-sm mb-1">Degree to Radian:</span>
            <span className="font-mono bg-white dark:bg-slate-800 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-700">Radian = Degree × (π / 180)</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-emerald-800 dark:text-emerald-400 text-sm mb-1">Radian to Degree:</span>
            <span className="font-mono bg-white dark:bg-slate-800 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-700">Degree = Radian × (180 / π)</span>
          </div>
        </div>
      </section>

      {/* 1.2 ALLIED ANGLES */}
      <section id="sec-1-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            T-Ratios of Allied Angles
          </h2>
          <p className="text-sm text-slate-500 mt-1">(Without proof as per syllabus)</p>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Allied angles wo angles hote hain jinhe 90° (π/2) ya uske multiples (like 180°, 270°, 360°) me add ya subtract karke banaya jata hai. Quadants ke anusar T-ratios ke signs (ASTC rule) change hote hain.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80">
                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold">Angle</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold">sin</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold">cos</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold">tan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 font-mono text-sm">
              <tr>
                <td className="p-4 font-bold font-sans">(-θ)</td>
                <td className="p-4 text-brand-600 dark:text-brand-400">- sin θ</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400">cos θ</td>
                <td className="p-4 text-brand-600 dark:text-brand-400">- tan θ</td>
              </tr>
              <tr>
                <td className="p-4 font-bold font-sans">(90° - θ)</td>
                <td className="p-4">cos θ</td>
                <td className="p-4">sin θ</td>
                <td className="p-4">cot θ</td>
              </tr>
              <tr>
                <td className="p-4 font-bold font-sans">(90° + θ)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400">cos θ</td>
                <td className="p-4 text-brand-600 dark:text-brand-400">- sin θ</td>
                <td className="p-4 text-brand-600 dark:text-brand-400">- cot θ</td>
              </tr>
              <tr>
                <td className="p-4 font-bold font-sans">(180° - θ)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400">sin θ</td>
                <td className="p-4 text-brand-600 dark:text-brand-400">- cos θ</td>
                <td className="p-4 text-brand-600 dark:text-brand-400">- tan θ</td>
              </tr>
              <tr>
                <td className="p-4 font-bold font-sans">(180° + θ)</td>
                <td className="p-4 text-brand-600 dark:text-brand-400">- sin θ</td>
                <td className="p-4 text-brand-600 dark:text-brand-400">- cos θ</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400">tan θ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 1.3 SUM AND DIFFERENCE FORMULAE */}
      <section id="sec-1-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Sum & Difference Formulae
          </h2>
          <p className="text-sm text-slate-500 mt-1">(Without proof as per syllabus)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Sum Formulae</h4>
            <ul className="space-y-2 font-mono text-brand-700 dark:text-brand-400 text-sm">
              <li>sin(A + B) = sin A cos B + cos A sin B</li>
              <li>cos(A + B) = cos A cos B - sin A sin B</li>
              <li>tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Difference Formulae</h4>
            <ul className="space-y-2 font-mono text-brand-700 dark:text-brand-400 text-sm">
              <li>sin(A - B) = sin A cos B - cos A sin B</li>
              <li>cos(A - B) = cos A cos B + sin A sin B</li>
              <li>tan(A - B) = (tan A - tan B) / (1 + tan A tan B)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 1.4 PRODUCT FORMULAE */}
      <section id="sec-1-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Product Formulae
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Product to Sum / Difference</span>
        </h3>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6">
          <ul className="space-y-2 font-mono text-brand-700 dark:text-brand-400 text-sm">
            <li>2 sin A cos B = sin(A + B) + sin(A - B)</li>
            <li>2 cos A sin B = sin(A + B) - sin(A - B)</li>
            <li>2 cos A cos B = cos(A + B) + cos(A - B)</li>
            <li>2 sin A sin B = cos(A - B) - cos(A + B)</li>
          </ul>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Sum / Difference to Product (C & D Formulas)</span>
        </h3>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6">
          <ul className="space-y-2 font-mono text-brand-700 dark:text-brand-400 text-sm">
            <li>sin C + sin D = 2 sin((C + D)/2) cos((C - D)/2)</li>
            <li>sin C - sin D = 2 cos((C + D)/2) sin((C - D)/2)</li>
            <li>cos C + cos D = 2 cos((C + D)/2) cos((C - D)/2)</li>
            <li>cos C - cos D = -2 sin((C + D)/2) sin((C - D)/2)</li>
          </ul>
        </div>
      </section>

      {/* 1.5 MULTIPLE ANGLES */}
      <section id="sec-1-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            T-Ratios of Multiple Angles (2A Only)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Yahan hum sirf angle 2A (double angle) ke trigonometric ratios padhenge, jo syllabus mein specifically mentioned hai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Formulas for sin 2A</h4>
            <ul className="space-y-2 font-mono text-brand-700 dark:text-brand-400 text-sm">
              <li>sin 2A = 2 sin A cos A</li>
              <li>sin 2A = (2 tan A) / (1 + tan² A)</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Formulas for tan 2A</h4>
            <ul className="space-y-2 font-mono text-brand-700 dark:text-brand-400 text-sm">
              <li>tan 2A = (2 tan A) / (1 - tan² A)</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm md:col-span-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Formulas for cos 2A</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 font-mono text-brand-700 dark:text-brand-400 text-sm">
              <li>cos 2A = cos² A - sin² A</li>
              <li>cos 2A = 2 cos² A - 1</li>
              <li>cos 2A = 1 - 2 sin² A</li>
              <li>cos 2A = (1 - tan² A) / (1 + tan² A)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 1.6 GRAPHS */}
      <section id="sec-1-6" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.6
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Graphs of Basic Functions
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">1. Graph of |x| (Modulus Function)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Modulus function f(x) = |x| hamesha positive value return karta hai. Graph 'V' shape ka hota hai jiska vertex origin (0,0) par hota hai.
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-brand-600 dark:text-brand-400">
              Domain: All real numbers (-∞, ∞)<br/>
              Range: All non-negative real numbers [0, ∞)
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">2. Graph of sin x</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Sine function ek periodic wave (tarang) hai jo origin (0,0) se guzarti hai aur 2π angle ke baad repeat hoti hai. Ye smooth wave hoti hai.
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-brand-600 dark:text-brand-400">
              Domain: All real numbers (-∞, ∞)<br/>
              Range: [-1, 1]
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">3. Graph of cos x</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Cosine function bhi ek periodic wave hai jo sin wave ki tarah hi hai par y-axis par x=0 hone par value 1 hoti hai (yaani ye sin wave se 90° shifted hoti hai).
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-brand-600 dark:text-brand-400">
              Domain: All real numbers (-∞, ∞)<br/>
              Range: [-1, 1]
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">4. Graph of eˣ (Exponential Function)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Exponential function tezi se grow karti hai. Ye graph point (0,1) se guzarta hai aur negative x-axis par value 0 (asymptote) ki taraf aati hai, par kabhi negative nahi hoti.
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-brand-600 dark:text-brand-400">
              Domain: All real numbers (-∞, ∞)<br/>
              Range: All positive real numbers (0, ∞)
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Maths1Unit1Content;
