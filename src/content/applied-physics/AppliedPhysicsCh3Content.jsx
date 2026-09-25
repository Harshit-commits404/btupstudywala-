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

export const AppliedPhysicsCh3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>CHAPTER 03</span>
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
            Work, Power and Energy
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (कार्य, शक्ति एवं ऊर्जा)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Work & its types</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Friction Concepts</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Kinetic & Potential Energy</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Work-Energy Theorem</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Power & Calculation</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Mechanical systems mein engines, motors aur machines ki efficiency samajhne ke liye Work, Energy aur Power ke fundamental concepts zaroori hote hain. Is chapter mein hum work-energy equivalence aur friction jaise important properties ko padhenge.
        </p>
      </header>

      {/* 3.1 WORK AND ITS UNITS */}
      <section id="sec-3-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Work and its Units
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Jab kisi object par force lagta hai aur us force ki direction mein (ya ek component ki direction mein) object displace (visthapit) hota hai, tab kaha jata hai ki <strong>Work (कार्य)</strong> kiya gaya hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex flex-col items-center mb-6">
          <div className="text-xl font-mono text-brand-700 dark:text-brand-400 mb-2">W = F · s = F s cos(θ)</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            F = Force, s = Displacement, θ = Angle between F and s.<br/>
            <strong>SI Unit:</strong> Joule (J) or N·m.
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-1">1. Positive Work</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Jab force aur displacement ke beech ka angle θ &lt; 90° hota hai (cos θ positive). <br/>
              <strong>Example:</strong> Gravity dwara work jab ek ball niche girti hai (Gravity and motion same direction).
            </p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-lg border border-rose-200 dark:border-rose-800">
            <h4 className="font-bold text-rose-800 dark:text-rose-400 mb-1">2. Negative Work</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Jab force aur displacement ke beech ka angle 90° &lt; θ ≤ 180° hota hai (cos θ negative). <br/>
              <strong>Example:</strong> Friction force dwara kiya gaya work (Motion ke opposite direction).
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">3. Zero Work</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Jab force aur displacement perpendicular hote hain (θ = 90°, cos 90° = 0) ya jab displacement zero ho. <br/>
              <strong>Example:</strong> Ek porter (coolie) apne sir par bojh rakh kar horizontal platform par chalta hai, gravity ke dwara zero work kiya jata hai.
            </p>
          </div>
        </div>
      </section>

      {/* 3.2 FRICTION */}
      <section id="sec-3-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Friction (घर्षण)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Friction wo opposing force hai jo do surfaces ke beech relative motion ko rokta ya kam karta hai jab wo direct contact mein hote hain.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Modern Concept of Friction</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Modern theory ke anusar, friction dono surfaces ke atoms/molecules ke beech intermolecular (electrostatic) forces aur microscopic irregularities (khurdurapan) ki wajah se hota hai.
        </p>

        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-3 mb-6">
          <li><strong>Static Friction:</strong> Wo friction force jo tab act karta hai jab body rest par hoti hai aur uspar force lagaya ja raha ho. Ye self-adjusting hota hai.</li>
          <li><strong>Limiting Friction:</strong> Static friction ki maximum value jab body theek chalne ki sthiti (verge of motion) mein hoti hai.</li>
          <li><strong>Dynamic (Kinetic) Friction:</strong> Wo friction jo tab act karta hai jab body actual mein surface par move/slide kar rahi ho. Ye limiting friction se thoda kam hota hai.</li>
        </ul>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Coefficient of Friction (μ)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Limiting friction force (F) aur normal reaction (R) ke ratio ko Coefficient of Friction kehte hain. Ye unitless aur dimensionless quantity hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6 flex justify-center text-xl font-mono text-brand-700 dark:text-brand-400">
          μ = F / R
        </div>
      </section>

      {/* 3.3 ENERGY AND ITS UNITS */}
      <section id="sec-3-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Energy and its Units
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Kisi body dwara work karne ki capacity ko <strong>Energy (ऊर्जा)</strong> kehte hain. Iski unit wahi hoti hai jo Work ki hai (Joule, J).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-brand-700 dark:text-brand-400 mb-2">Kinetic Energy (K.E.)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Kisi body mein uski motion (gati) ki wajah se jo energy hoti hai.
            </p>
            <div className="font-mono bg-slate-50 dark:bg-slate-900 px-3 py-2 rounded text-center text-brand-600 dark:text-brand-400">
              K = ½ m v²
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-brand-700 dark:text-brand-400 mb-2">Potential Energy (P.E.)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
              Kisi body mein uski position ya configuration ki wajah se store energy. Gravitational PE ka formula:
            </p>
            <div className="font-mono bg-slate-50 dark:bg-slate-900 px-3 py-2 rounded text-center text-brand-600 dark:text-brand-400">
              U = m g h
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Mechanical Energy</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Kinetic Energy aur Potential Energy ke sum (jod) ko Total Mechanical Energy (E) kehte hain. (E = K + U).
        </p>
      </section>

      {/* 3.4 WORK-ENERGY THEOREM */}
      <section id="sec-3-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Work-Energy Theorem & Conservation
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Work-Energy Theorem (Statement Only)</span>
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
          <p className="text-emerald-900 dark:text-emerald-200">
            "Work-Energy Theorem ke anusar, kisi object par net force dwara kiya gaya Work us object ki Kinetic Energy mein change (parivartan) ke barabar hota hai."
            <br/><br/>
            <strong>W = ΔK = K_final - K_initial</strong>
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Conservation of Mechanical Energy (Freely falling body)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Jab koi body sirf gravity (conservative force) ke under freely fall karti hai (air resistance negligible ho), toh uski total mechanical energy (K.E. + P.E.) har point par constant rehti hai. Jab body neeche girti hai, PE ghat-ti hai aur utni hi KE badh jati hai.
        </p>
      </section>

      {/* 3.5 POWER */}
      <section id="sec-3-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Power (शक्ति)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Work karne ki rate (dar) ko <strong>Power</strong> kehte hain. Yaani kitne time mein kitna work kiya gaya. Isse kisi engine ya motor ki kshamata ka pata chalta hai.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex flex-col items-center mb-6">
          <div className="text-xl font-mono text-brand-700 dark:text-brand-400 mb-2">P = W / t</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            W = Work done, t = Time taken<br/>
            <strong>SI Unit:</strong> Watt (W) = 1 Joule/second
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
          <h4 className="font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> Power Calculations in Numerical Problems
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            Numericals mein aksar power nikalne ke liye yeh formula bhi use hota hai: <br/>
            <strong>P = F · v</strong> (Jahan F = constant force, v = uniform velocity).<br/>
            Industrial applications mein power ko aksar <strong>Horse Power (H.P.)</strong> mein naapa jata hai. <br/>
            <strong>1 H.P. = 746 Watts</strong>
          </p>
        </div>
      </section>

    </article>
  );
};

export default AppliedPhysicsCh3Content;
