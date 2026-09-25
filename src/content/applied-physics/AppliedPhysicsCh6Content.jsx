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

export const AppliedPhysicsCh6Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>CHAPTER 06</span>
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
            Properties of Matter
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (पदार्थ के गुण)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Elasticity & Hooke's Law</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Pressure</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Surface Tension & Capillarity</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Viscosity & Stoke's Law</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Bernoulli's Theorem</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Matter (solid, liquid, aur gas) ke fundamental properties jese elasticity (lachilapan), surface tension (prishth tanaav) aur fluid dynamics ka adhyayan engineering materials aur fluid mechanics samajhne ke liye atyant aavashyak hai.
        </p>
      </header>

      {/* 6.1 ELASTICITY */}
      <section id="sec-6-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 6.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Elasticity (प्रत्यास्थता)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Material ki wo property jiske karan wo kisi external deforming force (virupak bal) ko hatane ke baad apne original shape aur size mein wapas aane ki koshish karta hai, Elasticity kehlata hai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Stress (प्रतिबल)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Jab kisi material par deforming force lagaya jata hai, toh uske andar force ka virodh karne ke liye ek internal restoring force develop hota hai. Restoring force per unit area ko Stress kehte hain.<br/>
              <strong>Formula:</strong> Stress = Force / Area (F/A)<br/>
              <strong>Unit:</strong> N/m²
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Strain (विकृति)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              External force lagne par body ki dimension mein hone wale change aur original dimension ke ratio ko Strain kehte hain.<br/>
              <strong>Formula:</strong> Strain = Change in dimension / Original dimension<br/>
              <strong>Unit:</strong> Unitless (Koi ikai nahi).
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Hooke's Law (Definition & Formula Only)</span>
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 mb-4 rounded-r-lg">
          <p className="text-emerald-900 dark:text-emerald-200">
            <strong>Definition:</strong> "Elastic limit (pratyasthata seema) ke andar, kisi material me utpann Stress usme utpann hone wale Strain ke directly proportional hota hai."
          </p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          E = Stress / Strain
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 text-center">
          (Jahan E = Modulus of Elasticity)
        </p>
      </section>

      {/* 6.2 PRESSURE */}
      <section id="sec-6-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 6.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Pressure (दाब)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          <strong>Definition:</strong> Kisi surface ke unit area par lagne wale perpendicular force (thrust) ko Pressure kehte hain.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex flex-col items-center mb-6">
          <div className="text-xl font-mono text-brand-700 dark:text-brand-400 mb-2">P = F / A</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <strong>SI Unit:</strong> Pascal (Pa) ya N/m²
          </div>
        </div>
      </section>

      {/* 6.3 SURFACE TENSION */}
      <section id="sec-6-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 6.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Surface Tension (पृष्ठ तनाव)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          <strong>Concept:</strong> Kisi liquid ke free surface ki wo property jiske karan wo ek stretched elastic membrane (jhilli) ki tarah behave karta hai aur apna surface area minimum rakhne ki koshish karta hai, use Surface Tension kehte hain.
          <br/><strong>Unit:</strong> N/m
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Cohesive Forces (ससंजक बल)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              <strong>Saman (same) material</strong> ke molecules ke beech lagne wala attraction force. Example: Pani ke do molecules ke beech ka force.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Adhesive Forces (आसंजक बल)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              <strong>Alag-alag (different) materials</strong> ke molecules ke beech lagne wala attraction force. Example: Pani aur glass tube ke molecules ke beech ka force.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Angle of Contact & Capillary Action</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          <strong>Angle of Contact (θ):</strong> Liquid aur solid ke contact point par, liquid surface aur solid surface ke andar ki taraf kheenchi gayi tangents ke beech ke angle ko kehte hain.<br/><br/>
          <strong>Capillary Action (केशिकत्व):</strong> Kisi bahut bareek (fine) tube (capillary) me liquid ke upar chadhne ya neeche girne ke event ko capillary action kehte hain.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
          <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2 text-center">Ascent Formula (Without Derivation)</h4>
          <div className="text-center font-mono text-lg text-brand-700 dark:text-brand-400">
            h = 2T cos(θ) / (r ρ g)
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-xs text-center mt-2">
            h = Height, T = Surface tension, θ = Angle of contact, r = Radius of tube, ρ = Density, g = Gravity
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Applications & Effect of Temperature</span>
        </h3>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
          <li>Rain drops hamesha spherical hoti hain kyunki surface tension surface area ko minimum (sphere) banane ki koshish karta hai.</li>
          <li>Kerosene oil diye (lamp) ki batti (wick) me capillary action ke through upar chadhta hai.</li>
          <li><strong>Effect of Temperature:</strong> Temperature badhane par liquid ka surface tension hamesha <strong>kam (decreases)</strong> hota hai. Garam paani mein kapde achhe se dhulte hain.</li>
        </ul>
      </section>

      {/* 6.4 VISCOUS FORCE */}
      <section id="sec-6-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 6.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Viscous Force & Stoke's Law
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Liquid ki layers ke beech relative motion ka virodh karne wale internal friction force ko <strong>Viscous force (श्यान बल)</strong> kehte hain. 
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Velocity Gradient (वेग प्रवणता)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Distance (z) ke respect mein liquid layers ki velocity (v) badalne ki rate ko velocity gradient kehte hain. (dv/dz).<br/>
          <strong>Unit:</strong> s⁻¹ (per second).
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Coefficient of Viscosity (η)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ek liquid ki do layers ke beech lagne wala viscous force (F) layer ke area (A) aur velocity gradient (dv/dz) par depend karta hai.
          F = -η A (dv/dz). Jahan η (eta) coefficient of viscosity hai.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Stoke's Law</span>
        </h3>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex flex-col items-center mb-4 text-xl font-mono text-brand-700 dark:text-brand-400">
          F = 6 π η r v
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm text-center">
          Jab ek spherical body (radius r) kisi viscous medium (viscosity η) mein velocity 'v' se girti hai, toh uspar lagne wala viscous drag force is formule se diya jata hai.
        </p>

        <p className="text-slate-700 dark:text-slate-300 mb-6 font-medium">
          <strong>Effect of Temperature on Viscosity:</strong> Liquids ka temperature badhane par unki viscosity (gadhapan) kam hoti hai, jabki gases ki viscosity badh jati hai.
        </p>
      </section>

      {/* 6.5 STREAMLINE FLOW & BERNOULLI'S THEOREM */}
      <section id="sec-6-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 6.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Fluid Motion & Bernoulli's Theorem
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Streamline Flow & Equation of Continuity</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          <strong>Streamline Flow:</strong> Jab koi liquid is tarah behta hai ki ek point se guzarne wala har particle usi path aur velocity ko follow karta hai jise uske aage wale particle ne kiya tha. Ye orderly flow hota hai.<br/><br/>
          <strong>Equation of Continuity:</strong> Incompressible aur non-viscous fluid (ideal fluid) jab kisi pipe me streamline flow karta hai, toh har point par tube ke cross-section area (A) aur liquid ki velocity (v) ka product constant rehta hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          A₁v₁ = A₂v₂ = Constant
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Bernoulli's Theorem (Without Derivation)</span>
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 mb-4 rounded-r-lg">
          <p className="text-emerald-900 dark:text-emerald-200">
            "Streamline flow me behte hue kisi ideal fluid (incompressible, non-viscous) ke liye, har point par uski Pressure energy, Kinetic energy aur Potential energy per unit volume ka sum constant rehta hai."
          </p>
          <div className="mt-3 font-mono text-center text-emerald-800 dark:text-emerald-400">
            P + ½ ρv² + ρgh = Constant
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Application: Torricelli's Formula</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Bernoulli's theorem ka ek application kisi tank ke hole (orifice) se nikalne wale paani ki velocity of efflux (bahirvahi veg) nikalne me hota hai. Agar liquid level se hole ki depth 'h' hai:
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          v = √(2gh)
        </div>
      </section>

    </article>
  );
};

export default AppliedPhysicsCh6Content;
