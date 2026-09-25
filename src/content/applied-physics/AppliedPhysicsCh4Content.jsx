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

export const AppliedPhysicsCh4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>CHAPTER 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Applied Physics - 1 (Paper Code: 2001)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 6 Periods</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Circular Motion
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (वृत्तीय गति)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Circular Motion Definitions</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Angular Velocity & Accel.</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Linear vs Angular Relations</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Centripetal Force & Accel.</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Banking of Roads</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Circular motion hamari daily life aur engineering me har jagah hai – gaadi ke pahiye se lekar satellite ke orbit tak. Is chapter mein hum circular path par ghoomti objects ke variables (angular displacement, velocity, acceleration) aur centripetal forces ki study karenge.
        </p>
      </header>

      {/* 4.1 CIRCULAR MOTION */}
      <section id="sec-4-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Circular Motion
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Jab koi object ek point (center) ke charo taraf ek fixed distance (radius) par ghoomti hai, toh uski motion ko <strong>Circular Motion (वृत्तीय गति)</strong> kehte hain.
        </p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-3 mb-6">
          <li><strong>Uniform Circular Motion:</strong> Agar object constant speed se circular path par ghoomti hai, toh use uniform circular motion kehte hain. (Yahan speed constant hoti hai, par direction lagatar badalne se velocity change hoti rehti hai).</li>
          <li><strong>Non-uniform Circular Motion:</strong> Agar object ki speed circular path par ghoomte waqt lagatar badal rahi ho (increase ya decrease ho rahi ho), toh use non-uniform circular motion kehte hain.</li>
        </ul>
      </section>

      {/* 4.2 DEFINITIONS */}
      <section id="sec-4-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Angular Definitions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Angular Displacement (θ)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Circular path par chalte hue kisi object ka radius vector circle ke center par jitna angle (koun) banata hai, use angular displacement kehte hain. 
              <br/><strong>Unit:</strong> Radian (rad).
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Angular Velocity (ω)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Rate of change of angular displacement ko angular velocity kehte hain. 
              <br/><strong>ω = Δθ / Δt</strong>. 
              <br/><strong>Unit:</strong> Radian/second (rad/s).
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Angular Acceleration (α)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Rate of change of angular velocity ko angular acceleration kehte hain. 
              <br/><strong>α = Δω / Δt</strong>. 
              <br/><strong>Unit:</strong> Radian/s² (rad/s²).
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Frequency (n / f) & Time Period (T)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              <strong>Time Period (T):</strong> Ek complete revolution (chakkar) me lagne wala time. (Unit: second)<br/>
              <strong>Frequency (f):</strong> Ek second mein poore kiye gaye revolutions ki sankhya. (Unit: Hertz, Hz).<br/>
              <strong>Relation:</strong> f = 1 / T aur ω = 2πf
            </p>
          </div>
        </div>
      </section>

      {/* 4.3 RELATIONS */}
      <section id="sec-4-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Relations between Linear & Angular Quantities
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-brand-700 dark:text-brand-400 mb-2">Linear Velocity (v) & Angular Velocity (ω)</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                Linear velocity, angular velocity aur circular path ke radius (r) ka cross product hoti hai.
              </p>
              <div className="font-mono text-center bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-800 dark:text-slate-200">
                v = r ω
              </div>
            </div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-brand-700 dark:text-brand-400 mb-2">Linear Acceleration (a) & Angular Accel. (α)</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                Tangential linear acceleration, angular acceleration aur radius ke product ke barabar hota hai.
              </p>
              <div className="font-mono text-center bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-800 dark:text-slate-200">
                a = r α
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.4 & 4.5 CENTRIPETAL ACCEL & FORCE */}
      <section id="sec-4-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.4 & 4.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Centripetal Acceleration & Force
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Centripetal Acceleration (अभिकेन्द्रीय त्वरण)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Jab koi object uniform circular motion mein hoti hai, toh velocity ki direction continuously change hone ki wajah se ek acceleration center ki taraf act karta hai. Ise Centripetal Acceleration kehte hain.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          a_c = v² / r = r ω²
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Centripetal Force (अभिकेन्द्रीय बल)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Wo force jo kisi object ko circular path par banaye rakhne ke liye center ki taraf act karta hai, use Centripetal Force kehte hain. Bina is force ke circular motion possible nahi hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          F_c = (m v²) / r
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
          <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">Examples of Centripetal Force</h4>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 text-sm space-y-1">
            <li><strong>Banking of Roads:</strong> Highway ke mode (turns) par road ka outer edge thoda utha hua (elevated) banaya jata hai taaki vehicles ko zaroori centripetal force mil sake aur tyre friction par depend kam hona pade.</li>
            <li><strong>Bending of Cyclist:</strong> Turn lete samay cyclist ander ki taraf jhuk jata hai, taaki normal reaction ka ek component usko circle me ghoomne ke liye centripetal force pradan kar sake.</li>
          </ul>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Centrifugal Force (अपकेन्द्रीय बल)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ye ek pseudo (virtual) force hai jo circular frame of reference me baithi hui object dwara center se bahar ki taraf feel hota hai. Iska magnitude centripetal force ke barabar, lekin direction opposite (center se away) hoti hai.
        </p>
      </section>

    </article>
  );
};

export default AppliedPhysicsCh4Content;
