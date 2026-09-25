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

export const Maths1Unit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 05</span>
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
            Complex Numbers
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (समिश्र संख्याएँ)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Real & Imaginary</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Cartesian & Polar Forms</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Conjugate</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Modulus & Amplitude</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Arithmetic Ops.</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">De Moivre's Theorem</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Jab real numbers system negative numbers ka square root (jaise √-1) nikalne me nakamyab raha, tab "Imaginary numbers" (i) ka concept aaya. Real aur imaginary numbers ke combination ko Complex Numbers kehte hain. Electrical engineering (AC circuits) mein iska bahut zyada use hota hai.
        </p>
      </header>

      {/* 5.1 DEFINITION */}
      <section id="sec-5-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Definition & Parts
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ek number jise <strong>z = a + ib</strong> ke form mein likha ja sake (jahan 'a' aur 'b' real numbers hain aur <strong>i = √-1</strong> hai), use Complex Number kehte hain. 'i' ko "iota" padhte hain (i² = -1).
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-4 justify-around mb-6 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <strong className="text-slate-900 dark:text-slate-100">Real Part (वास्तविक भाग):</strong><br/>
            Re(z) = a (Jisme 'i' nahi hai)
          </div>
          <div>
            <strong className="text-slate-900 dark:text-slate-100">Imaginary Part (काल्पनिक भाग):</strong><br/>
            Im(z) = b (Jo 'i' ke sath multiplied hai)
          </div>
        </div>
      </section>

      {/* 5.2 FORMS OF COMPLEX NUMBERS */}
      <section id="sec-5-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Forms of Complex Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Cartesian Representation</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Standard (x,y) graph par. Yahan x-axis "Real axis" aur y-axis "Imaginary axis" hoti hai. Complex number <strong>z = x + iy</strong> ek point P(x, y) darshata hai complex plane (Argand plane) mein.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Polar Representation</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Isme point P ki position origin se distance 'r' (modulus) aur positive real axis se banaye gaye angle 'θ' (amplitude) se darshayi jati hai.
            </p>
            <div className="font-mono bg-slate-50 dark:bg-slate-900 px-3 py-2 rounded text-brand-600 dark:text-brand-400 text-sm text-center">
              z = r(cos θ + i sin θ)
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Conversion formulas</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
          Polar se Cartesian me jana: <strong>x = r cos θ</strong> aur <strong>y = r sin θ</strong><br/>
          Cartesian se Polar me jana: <strong>r = √(x² + y²)</strong> aur <strong>θ = tan⁻¹(y/x)</strong>
        </p>
      </section>

      {/* 5.3 CONJUGATE */}
      <section id="sec-5-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Conjugate of a Complex Number
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Agar z = a + ib ek complex number hai, toh uska Conjugate (संयुग्मी) nikalne ke liye imaginary part ka sign change kar dete hain. Ise z̄ (z bar) se darshate hain.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          z̄ = a - ib
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          <strong>Example:</strong> Agar z = 3 + 4i, toh z̄ = 3 - 4i.<br/>Agar z = -2 - 5i, toh z̄ = -2 + 5i. (Real part ka sign change nahi karna).
        </p>
      </section>

      {/* 5.4 MODULUS AND AMPLITUDE */}
      <section id="sec-5-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Modulus and Amplitude (Argument)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Modulus (मापांक)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Origin (0,0) se point P(a, b) ki seedhi distance ko Modulus kehte hain. Ise |z| ya 'r' se likhte hain. Ye hamesha positive hota hai.
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 px-3 py-2 rounded text-brand-600 dark:text-brand-400 text-sm text-center">
              |z| = √(a² + b²)
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Amplitude / Argument (कोणांक)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Origin ko point se milane wali line jo angle positive real (x) axis ke sath banati hai, use Amplitude kehte hain.
            </p>
            <div className="font-mono bg-white dark:bg-slate-900 px-3 py-2 rounded text-brand-600 dark:text-brand-400 text-sm text-center">
              θ = tan⁻¹(b / a)
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
          <h4 className="font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> Exam Point: Quadrant Rule
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            Amplitude (θ) nikalte samay pehle quadrant check karna padta hai ki point kis chaturthansh (quadrant) me hai, fir principal argument nikala jata hai:
            <ul className="list-disc list-inside mt-1">
              <li>Quad I (a+, b+): θ = α</li>
              <li>Quad II (a-, b+): θ = π - α</li>
              <li>Quad III (a-, b-): θ = - (π - α)</li>
              <li>Quad IV (a+, b-): θ = - α</li>
            </ul>
            (jahan α = tan⁻¹(|b/a|))
          </p>
        </div>
      </section>

      {/* 5.5 ARITHMETIC OPERATIONS */}
      <section id="sec-5-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Arithmetic Operations
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Agar do complex numbers z₁ = a + ib aur z₂ = c + id hain, toh:
        </p>

        <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <li className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">Addition:</strong> Real parts aur imaginary parts ko alag-alag joda jata hai. <br/>
            <span className="font-mono">z₁ + z₂ = (a + c) + i(b + d)</span>
          </li>
          <li className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">Subtraction:</strong> Same tarike se ghataya jata hai.<br/>
            <span className="font-mono">z₁ - z₂ = (a - c) + i(b - d)</span>
          </li>
          <li className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">Multiplication:</strong> Normal brackets multiply ki tarah karte hain aur (i² = -1) use karte hain.<br/>
            <span className="font-mono">z₁ z₂ = (ac - bd) + i(ad + bc)</span>
          </li>
          <li className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">Division (z₁ / z₂):</strong> Denominator (neeche wale) ke conjugate se upar-neeche multiply aur divide (rationalization jaisa) karte hain.
          </li>
        </ul>
      </section>

      {/* 5.6 DE MOIVRE'S THEOREM */}
      <section id="sec-5-6" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.6
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            De Moivre's Theorem
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Statement & Formula</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Agar 'n' koi integer (positive ya negative) ya fraction ho, toh (cos θ + i sin θ)ⁿ ki ek value hamesha (cos nθ + i sin nθ) hoti hai.
        </p>
        <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
          <div className="font-mono text-center text-lg text-emerald-800 dark:text-emerald-400 font-bold">
            (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Simple Applications</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
          De Moivre's theorem ka main istemal complex numbers ki badi powers (jaise z⁸) nikalne me ya roots nikalne me hota hai. Hum pehle number ko polar form me badalte hain, fir theorem lagate hain.
        </p>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Important deduction:</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm font-mono">
            1 / (cos θ + i sin θ) = (cos θ + i sin θ)⁻¹ = cos(-θ) + i sin(-θ) = cos θ - i sin θ
          </p>
        </div>
      </section>

    </article>
  );
};

export default Maths1Unit5Content;
