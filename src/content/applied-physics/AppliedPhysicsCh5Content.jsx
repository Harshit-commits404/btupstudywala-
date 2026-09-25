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

export const AppliedPhysicsCh5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>CHAPTER 05</span>
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
            Rotational Motion of a Rigid Body
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (दृढ़ पिंड की घूर्णन गति)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Rigid Body & Torque</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Moment of Inertia</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Radius of Gyration</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Rotational K.E.</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Angular Momentum</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Mechanical machines mein shafts, gears aur flywheels ka rotation samajhne ke liye Rigid body mechanics bahot zaruri hai. Is chapter mein hum linear motion ke concepts (jaise force aur mass) ke rotational equivalents (torque aur moment of inertia) ko sikhenge.
        </p>
      </header>

      {/* 5.1 RIGID BODY & TORQUE */}
      <section id="sec-5-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Rigid Body and Torque
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Definition of Rigid Body (दृढ़ पिंड)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ek aisi body jiske upar bahar se force lagane par uske internal particles ke beech ki distance change nahi hoti hai (uski shape ya size nahi badalta), use Rigid Body kehte hain.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Rotational Motion (घूर्णन गति)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Jab koi rigid body kisi fixed line (Axis of Rotation) ke charo taraf is tarah ghoomti hai ki uska har particle ek circular path mein move karta hai jiska center us axis par hota hai, toh is motion ko Rotational Motion kehte hain.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Definition of Torque (बलाघूर्ण)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Kisi force ka rotational prabhav (turning effect) jo kisi body ko axis ke around ghumane ki koshish karta hai, use Torque (τ) kehte hain. Ye force aur uski line of action ki axis of rotation se perpendicular distance (r) ka product hota hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-4 text-xl font-mono text-brand-700 dark:text-brand-400">
          τ = F × r
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <strong>Examples of Torque:</strong>
          <ul className="list-disc list-inside mt-2 text-slate-700 dark:text-slate-300 text-sm">
            <li>Darwaza (door) kholne ke liye handle hamesha hinges (kabze) se door lagaya jata hai, taaki perpendicular distance 'r' jyada ho aur kam force mein asani se torque mil sake.</li>
            <li>Nut kholne ke liye lambe handle wala wrench (spanner) use karna.</li>
          </ul>
        </div>
      </section>

      {/* 5.2 MOMENT OF INERTIA */}
      <section id="sec-5-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Moment of Inertia & Radius of Gyration
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Moment of Inertia (जड़त्व आघूर्ण)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-2">
          Rotational motion mein, body ki wo property jo uske rotational state (ghoomne ki sthiti) mein kisi bhi change (badlaav) ka virodh karti hai, Moment of Inertia (I) kehlati hai. Ye linear motion ke 'mass' ke samanya (equivalent) hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-4 text-xl font-mono text-brand-700 dark:text-brand-400">
          I = Σ (m_i × r_i²)
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-6 text-sm">
          <strong>Physical Significance:</strong> Jis tarah mass translation motion mein inertia decide karta hai, waise hi Moment of Inertia rotational motion mein rotational inertia (ghoomne ka virodh) decide karta hai. Ye sirf mass par nahi, balki mass ki axis se distance par bhi depend karta hai.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Radius of Gyration (K)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-2">
          Ye axis of rotation se us point ki perpendicular distance hai jahan par body ka total mass concentrated mana ja sakta hai, taaki Moment of Inertia utna hi rahe jitna actual distribution me tha.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          I = M K²
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">Theorem of Parallel Axes (Statement)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              "Kisi body ka kisi axis ke around Moment of Inertia (I), uske center of mass se guzarne wali parallel axis ke around MOI (I_c) aur body ke mass (M) tatha dono axes ke beech ki perpendicular distance (h) ke square (h²) ke product ke sum ke barabar hota hai." <br/>
              <strong>I = I_c + M h²</strong>
            </p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2">Theorem of Perpendicular Axes (Statement)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              "Kisi plane lamina ka uske plane ke perpendicular axis (Z-axis) ke around Moment of Inertia (I_z), usi plane mein sthit do mutually perpendicular axes (X aur Y) ke around MOI ke sum ke barabar hota hai." <br/>
              <strong>I_z = I_x + I_y</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 5.3 MOI FORMULAE */}
      <section id="sec-5-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Moment of Inertia Formulas
          </h2>
          <p className="text-sm text-slate-500 mt-1">(Only formulas as per syllabus)</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80">
                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold">Body shape</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold">Axis of Rotation</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-center">Formula</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-4 font-medium">Uniform Rod (Length L)</td>
                <td className="p-4">Passing through center, perpendicular to length</td>
                <td className="p-4 text-center font-mono text-brand-600 dark:text-brand-400">ML² / 12</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Circular Disc (Radius R)</td>
                <td className="p-4">Passing through center, perpendicular to plane</td>
                <td className="p-4 text-center font-mono text-brand-600 dark:text-brand-400">MR² / 2</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Circular Ring (Radius R)</td>
                <td className="p-4">Passing through center, perpendicular to plane</td>
                <td className="p-4 text-center font-mono text-brand-600 dark:text-brand-400">MR²</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Solid Sphere (Radius R)</td>
                <td className="p-4">Along its diameter</td>
                <td className="p-4 text-center font-mono text-brand-600 dark:text-brand-400">2MR² / 5</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Hollow Sphere (Radius R)</td>
                <td className="p-4">Along its diameter</td>
                <td className="p-4 text-center font-mono text-brand-600 dark:text-brand-400">2MR² / 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5.4 ROTATIONAL KINETIC ENERGY */}
      <section id="sec-5-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Rotational Kinetic Energy
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Jab koi object rotational motion karti hai, tab uske ghoomne ki wajah se usme jo energy hoti hai, use Rotational Kinetic Energy kehte hain.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex flex-col items-center mb-6">
          <div className="text-xl font-mono text-brand-700 dark:text-brand-400 mb-2">K_rot = ½ I ω²</div>
          <div className="text-sm text-slate-600 dark:text-slate-400 text-center">
            I = Moment of Inertia<br/>
            ω = Angular Velocity
          </div>
        </div>
      </section>

      {/* 5.5 ANGULAR MOMENTUM */}
      <section id="sec-5-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Angular Momentum
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Angular Momentum (कोणीय संवेग) (L)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Linear momentum ka rotational equivalent Angular Momentum kehlata hai. Ye kisi rotating object ke Moment of Inertia (I) aur uski Angular Velocity (ω) ke product ke barabar hota hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex flex-col items-center mb-6">
          <div className="text-xl font-mono text-brand-700 dark:text-brand-400 mb-2">L = I ω</div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Conservation of Angular Momentum</span>
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 mb-4 rounded-r-lg">
          <p className="text-emerald-900 dark:text-emerald-200 font-medium">
            "Agar kisi ghoomti hui body ya system par lagne wala bahari Torque (external torque) zero ho (τ_ext = 0), toh us system ka total Angular Momentum (L) sarakshit (constant) rehta hai." (I₁ ω₁ = I₂ ω₂).
          </p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
          <h4 className="font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> Examples of Conservation
          </h4>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 text-sm space-y-2">
            <li><strong>Ice Skater / Dancer:</strong> Jab ek ice skater ghoomte (spin) hue apne haath paas le aata hai, toh uska moment of inertia (I) kam ho jata hai aur angular momentum constant rakhne ke liye uski angular velocity (ω) yani spin speed badh jati hai.</li>
            <li><strong>Diver:</strong> Pani me dive lagate waqt diver apni body ko fold kar leta hai, jisse uski spin badh jati hai.</li>
          </ul>
        </div>
      </section>

    </article>
  );
};

export default AppliedPhysicsCh5Content;
