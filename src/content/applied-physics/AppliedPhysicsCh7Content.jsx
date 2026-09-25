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

export const AppliedPhysicsCh7Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>CHAPTER 07</span>
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
            Heat and Thermometry
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (ऊष्मा एवं तापमिति)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Heat & Temp.</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Temp. Scales</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Modes of Heat Transfer</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Expansion of Solids</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Mercury Thermometer</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Heat engineering aur thermodynamics ka base hai. Is unit mein hum heat, temperature, unke naapne ke scales, heat transfer ke tarike aur temperature badhne par solids mein hone wale expansion ko padhenge.
        </p>
      </header>

      {/* 7.1 CONCEPT OF HEAT & TEMP */}
      <section id="sec-7-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 7.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Concept of Heat & Temperature
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Heat (ऊष्मा)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Heat energy ka ek form hai jo do bodies ke beech temperature difference ki wajah se high temperature se low temperature ki taraf flow karti hai. Ye microscopic particles (atoms/molecules) ki kinetic energy ka macro effect hai.<br/>
          <strong>Unit:</strong> Joule (J) or Calorie.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Temperature (तापमान)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Temperature kisi body ke 'hotness' ya 'coldness' ki degree (maap) hai. Ye batata hai ki heat flow kis direction mein hogi. Heat hamesha high temperature wali body se low temperature wali body ki taraf behti hai.<br/>
          <strong>SI Unit:</strong> Kelvin (K).
        </p>
      </section>

      {/* 7.2 SCALES OF TEMPERATURE */}
      <section id="sec-7-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 7.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Temperature Scales & Relationship
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Temperature ko naapne ke liye mainly teen scales use hote hain: <strong>Celsius (°C)</strong>, <strong>Fahrenheit (°F)</strong>, aur <strong>Kelvin (K)</strong>.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400 overflow-x-auto">
          C / 5 = (F - 32) / 9 = (K - 273.15) / 5
        </div>

        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
          <li><strong>Celsius (°C):</strong> Freezing point 0°C aur Boiling point 100°C.</li>
          <li><strong>Fahrenheit (°F):</strong> Freezing point 32°F aur Boiling point 212°F. Medical thermometers me common.</li>
          <li><strong>Kelvin (K):</strong> Absolute temperature scale. K = C + 273.15. Zero Kelvin (Absolute Zero) wo theoretical temp hai jahan particles ki thermal energy zero ho jati hai.</li>
        </ul>
      </section>

      {/* 7.3 MODES OF HEAT TRANSFER */}
      <section id="sec-7-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 7.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Modes of Transfer of Heat
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Heat transfer teen main tarikon se hota hai: Conduction, Convection, aur Radiation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <h4 className="font-bold text-brand-700 dark:text-brand-400 mb-2">1. Conduction (चालन)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3 flex-grow">
              Solids mein heat transfer jisme particles apni jagah par vibrate karte hue paas wale particles ko heat dete hain. Medium ki zarurat hoti hai, par particles move nahi karte.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-xs text-slate-600 dark:text-slate-400">
              <strong>Example:</strong> Garam chai mein rakhi chammach (spoon) ka garam hona.
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <h4 className="font-bold text-brand-700 dark:text-brand-400 mb-2">2. Convection (संवहन)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3 flex-grow">
              Fluids (Liquids and Gases) mein heat transfer jisme particles khud garm hokar halki density ke sath upar uthte hain aur thande particles niche aate hain.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-xs text-slate-600 dark:text-slate-400">
              <strong>Example:</strong> Paani ubalna, aur room me heater se hawa garm hona.
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <h4 className="font-bold text-brand-700 dark:text-brand-400 mb-2">3. Radiation (विकिरण)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3 flex-grow">
              Electromagnetic waves ke roop mein heat transfer. Iske liye kisi material medium ki zarurat nahi hoti (vacuum me bhi travel karta hai). Sabse fast method hai.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-xs text-slate-600 dark:text-slate-400">
              <strong>Example:</strong> Sun (Surya) se aati hui dhoop (heat) ka prithvi tak pahunchna.
            </div>
          </div>
        </div>
      </section>

      {/* 7.4 EXPANSION OF SOLIDS */}
      <section id="sec-7-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 7.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Thermal Expansion of Solids
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Heat dene par lagbhag sabhi solids phelte (expand hote) hain. Ise thermal expansion kehte hain. Ye teen tarah ka hota hai: Linear (Length), Superficial/Surface (Area), aur Cubical (Volume).
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">1. Coefficient of Linear Expansion (α)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Unit temperature badhane par solid ki unit length me hone wala expansion.</p>
            <div className="font-mono text-brand-700 dark:text-brand-400 text-sm text-center">ΔL = L₀ · α · ΔT</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">2. Coefficient of Surface Expansion (β)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Unit temperature badhane par solid ke unit area me hone wala expansion.</p>
            <div className="font-mono text-brand-700 dark:text-brand-400 text-sm text-center">ΔA = A₀ · β · ΔT</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">3. Coefficient of Cubical Expansion (γ)</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Unit temperature badhane par solid ke unit volume me hone wala expansion.</p>
            <div className="font-mono text-brand-700 dark:text-brand-400 text-sm text-center">ΔV = V₀ · γ · ΔT</div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Relation amongst α, β, and γ</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Isotropic (sabhi dishaon me saman gun wale) solids ke liye inke beech ek fixed ratio hota hai:
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          α : β : γ = 1 : 2 : 3
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-6 text-sm">
          Yani, β = 2α aur γ = 3α.
        </p>
      </section>

      {/* 7.5 MERCURY THERMOMETER */}
      <section id="sec-7-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 7.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Concept of Mercury Thermometer
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Mercury (पारा) ek liquid metal hai jiska istemal traditional thermometers mein temperature naapne ke liye kiya jata hai. Iska basic principle "Liquid ke thermal expansion" par aadharit hai.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-5 rounded-lg mb-6">
          <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-3">Kyun Mercury Use Hota Hai?</h4>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm">
            <li>Ye glass capillary tube ki deewaron (walls) par nahi chipakta (Angle of contact obtuse aur cohesive force strong hone ke karan).</li>
            <li>Iska expansion uniform (saman roop se) hota hai.</li>
            <li>Range achhi hoti hai (Freezing point -39°C aur Boiling point 357°C).</li>
            <li>Ye chamkila (shiny/opaque) hota hai, jisse reading aasani se dikhayi deti hai.</li>
            <li>Heat ka achha conductor hai, isliye turant temperature record karta hai.</li>
          </ul>
        </div>
      </section>

    </article>
  );
};

export default AppliedPhysicsCh7Content;
