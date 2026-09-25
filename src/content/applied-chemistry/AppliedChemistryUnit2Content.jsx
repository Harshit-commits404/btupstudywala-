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

export const AppliedChemistryUnit2Content = () => {
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
            Applied Chemistry (Semester 1)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 08 Periods</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Water
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (जल)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Hard & Soft Water</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Water Hardness</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Boiler Problems</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Softening (Zeolite, Ion Exchange)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Municipal Treatment</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Industry me water ek bohot important solvent aur coolant hai (jaise boilers me). Is unit me hum water ki hardness, usse hone wali problems aur usko soft/treat karne ke industrial tarike padhenge.
        </p>
      </header>

      {/* 2.1 CLASSIFICATION OF WATER */}
      <section id="sec-2-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Classification of Water
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Soap (Sabun) ke sath reaction (lather/jhaag banane) ke aadhar par water ko do bhago me banta gaya hai:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2">1. Soft Water (मृदु जल)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Wo pani jo sabun (soap) ke sath aasani se aur bohot zyada jhaag (lather) banata hai. Isme calcium (Ca²⁺) aur magnesium (Mg²⁺) ke salts nahi hote (ya bohot kam hote hain).<br/><br/>
              <strong>Example:</strong> Rain water, distilled water.
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-lg border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-800 dark:text-red-400 mb-2">2. Hard Water (कठोर जल)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Wo pani jo sabun ke sath aasani se jhaag nahi banata balki safed thakka (white scum/precipitate) banata hai. Isme Ca²⁺ aur Mg²⁺ ke salts ghule hote hain.<br/><br/>
              <strong>Example:</strong> Sea water, tap water, well water.
            </p>
          </div>
        </div>
      </section>

      {/* 2.2 WATER HARDNESS */}
      <section id="sec-2-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Water Hardness
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Water ki hardness mukhya roop se <strong>Calcium (Ca)</strong> aur <strong>Magnesium (Mg)</strong> ke salts ke karan hoti hai.
        </p>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>Temporary Hardness (अस्थायी):</strong> Ca aur Mg ke Bicarbonates (HCO₃⁻) ke karan hoti hai. Ise pani ubaalkar (boiling) door kiya ja sakta hai.</li>
            <li><strong>Permanent Hardness (स्थायी):</strong> Ca aur Mg ke Chlorides (Cl⁻) aur Sulphates (SO₄²⁻) ke karan hoti hai. Ise sirf ubaalkar door nahi kiya ja sakta, special chemical processes lagte hain.</li>
          </ul>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Units of Hardness</span>
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Hardness ko hamesha <strong>CaCO₃ (Calcium Carbonate) equivalents</strong> me express kiya jata hai. Uski units hain:
        </p>
        <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1 mb-6">
          <li><strong>ppm (Parts per million):</strong> 10⁶ parts water me CaCO₃ ke kitne parts hain (mg/L bhi bolte hain).</li>
          <li><strong>Degree Clark (°Cl):</strong> 70,000 parts water me CaCO₃ ke parts.</li>
          <li><strong>Degree French (°Fr):</strong> 10⁵ parts water me CaCO₃ ke parts.</li>
        </ul>
        <div className="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded text-brand-700 dark:text-brand-400 mb-6 text-center">
          1 ppm = 1 mg/L = 0.07 °Cl = 0.1 °Fr
        </div>
      </section>

      {/* 2.3 HARD WATER AND SOAP */}
      <section id="sec-2-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Hard Water and Soap
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          <strong>Soap jhaag kyu nahi banata?</strong> Soap normally Sodium Stearate (C₁₇H₃₅COONa) hota hai jo water me soluble hai. Jab isse hard water (jisme Ca/Mg hain) me dala jata hai, toh ye reaction hoti hai:
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-200 mb-4 overflow-x-auto">
          2 C₁₇H₃₅COONa (Soap) + CaCl₂ (Hardness) → (C₁₇H₃₅COO)₂Ca ↓ (White Scum/Precipitate) + 2 NaCl
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Ye white scum insoluble (aghulansheel) hota hai aur kapdo par chipak jata hai. Jab tak sara Ca/Mg precipitate nahi ho jata, tab tak sabun ka jhaag nahi banta, jisse sabun waste hota hai.
        </p>
      </section>

      {/* 2.4 PROBLEMS CAUSED BY HARD WATER */}
      <section id="sec-2-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Problems Caused by Hard Water in Boilers
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Industries me steam banane ke liye boilers ka use hota hai. Agar boilers me hard water use kiya jaye, toh kai badi problems aati hain:
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">1. Scale aur Sludge</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Sludge:</strong> Loose, soft aur chipchipa precipitate (gandagi) jo boiler ke thande hisso me jama hota hai. (Caused by MgCO₃, MgCl₂).<br/>
              <strong>Scale:</strong> Hard aur kathor coating jo boiler ki andar ki deewaron par chipak jati hai. (Caused by CaSO₄, CaCO₃). Scale heat ka bad conductor hota hai, isliye fuel zyada lagta hai aur boiler phatne ka (explosion) dar rehta hai.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">2. Foaming and Priming</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Foaming:</strong> Boiler ke pani ke upar lagatar jhaag (foam) banna (due to oil/alkali).<br/>
              <strong>Priming:</strong> Steam ke sath pani ki boondo (water droplets) ka tezi se bahar aana, jisse steam gili ho jati hai aur machine ke parts kharab ho sakte hain.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">3. Boiler Corrosion</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Dissolved gases (O₂, CO₂) aur dissolved salts (MgCl₂) ki wajah se boiler ki metal deewarein dhire-dhire nikalne (corrode) lagti hain. MgCl₂ hydrolysis karke HCl acid banata hai jo lohe (Fe) ko kha jata hai.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 WATER SOFTENING TECHNIQUES */}
      <section id="sec-2-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Water Softening Techniques
          </h2>
        </div>

        <div className="space-y-6">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">A. Soda Lime Process</h4>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300">
              <p className="mb-2"><strong>Principle:</strong> Hard water me calculated matra me Lime [Ca(OH)₂] aur Soda [Na₂CO₃] dala jata hai. Ye Ca aur Mg ke soluble salts ko insoluble precipitates (CaCO₃ aur Mg(OH)₂) me badal dete hain, jinhe filter karke nikal liya jata hai.</p>
              <div className="font-mono bg-slate-50 dark:bg-slate-800 p-3 rounded text-brand-700 dark:text-brand-400 mb-2 overflow-x-auto text-xs">
                CaCl₂ + Na₂CO₃ (Soda) → CaCO₃↓ + 2NaCl<br/>
                MgCl₂ + Ca(OH)₂ (Lime) → Mg(OH)₂↓ + CaCl₂
              </div>
              <p><strong>Limitation:</strong> Pani puri tarah soft nahi hota (hardness 15-30 ppm bachi rehti hai).</p>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">B. Zeolite (Permutit) Process</h4>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300">
              <p className="mb-2"><strong>Principle:</strong> Zeolites hydrated sodium aluminosilicates (Na₂Ze) hote hain. Ye cation exchangers hote hain. Jab hard water isme se guzarta hai, toh ye apne Na⁺ ions ko pani ke Ca²⁺/Mg²⁺ ions se badal (exchange) lete hain.</p>
              <div className="font-mono bg-slate-50 dark:bg-slate-800 p-3 rounded text-brand-700 dark:text-brand-400 mb-2 overflow-x-auto text-xs">
                Na₂Ze + Ca(HCO₃)₂ → CaZe (Exhausted Zeolite) + 2NaHCO₃
              </div>
              <p className="mb-2"><strong>Regeneration:</strong> Jab pura zeolite CaZe/MgZe me badal jata hai, toh use dobara recharge (regenerate) karne ke liye 10% NaCl (brine) solution dala jata hai.</p>
              <div className="font-mono bg-slate-50 dark:bg-slate-800 p-3 rounded text-brand-700 dark:text-brand-400 overflow-x-auto text-xs">
                CaZe + 2NaCl → Na₂Ze (Regenerated) + CaCl₂ (Washed out)
              </div>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">C. Ion Exchange (De-ionization) Process</h4>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300">
              <p className="mb-2"><strong>Principle:</strong> Isme organic resins ka use hota hai. Pehla hota hai Cation Exchange Resin (R-H⁺) jo pani ke Ca²⁺/Mg²⁺/Na⁺ ko H⁺ se exchange karta hai. Dusra hota hai Anion Exchange Resin (R'-OH⁻) jo pani ke Cl⁻/SO₄²⁻ ko OH⁻ se exchange karta hai.</p>
              <div className="font-mono bg-slate-50 dark:bg-slate-800 p-3 rounded text-brand-700 dark:text-brand-400 mb-2 overflow-x-auto text-xs space-y-1">
                2R-H⁺ + Ca²⁺ → R₂Ca + 2H⁺ (Cation Exchange)<br/>
                R'-OH⁻ + Cl⁻ → R'Cl + OH⁻ (Anion Exchange)<br/>
                Final: H⁺ + OH⁻ → H₂O (Pure water)
              </div>
              <p>Is process se milne wala pani 100% pure (Demineralized water) hota hai. Ise boiler ke liye best mana jata hai. Resins ko wapas acid (HCl) aur base (NaOH) se regenerate kiya jata hai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.6 MUNICIPAL WATER TREATMENT */}
      <section id="sec-2-6" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.6
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Municipal Water Treatment
          </h2>
          <p className="text-sm text-slate-500 mt-1">(Brief overview as per syllabus)</p>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Nadiyo/taalabo ke pani ko peene layak (potable) banane ke liye nagar nigam (municipal) dwara treat kiya jata hai. Iske main stages ye hain:
        </p>

        {/* FLOWCHART */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-6 flex flex-col items-center">
          <div className="font-mono text-brand-700 dark:text-brand-400 font-bold bg-white dark:bg-slate-900 px-4 py-2 rounded-full border border-brand-200 dark:border-brand-800">Raw Water (नदी का पानी)</div>
          <div className="h-4 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
          <div className="font-mono text-xs p-1">↓</div>
          
          <div className="font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 px-4 py-2 rounded shadow-sm w-full max-w-xs text-center border border-slate-200 dark:border-slate-700">
            1. Sedimentation (अवसादन)<br/>
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Badi gandagi ko niche baithne dena.</span>
          </div>
          <div className="h-4 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
          <div className="font-mono text-xs p-1">↓</div>

          <div className="font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 px-4 py-2 rounded shadow-sm w-full max-w-xs text-center border border-slate-200 dark:border-slate-700">
            2. Coagulation (स्कंदन)<br/>
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Fitkari (Alum) dalkar barik mitti ko jama karna.</span>
          </div>
          <div className="h-4 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
          <div className="font-mono text-xs p-1">↓</div>

          <div className="font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 px-4 py-2 rounded shadow-sm w-full max-w-xs text-center border border-slate-200 dark:border-slate-700">
            3. Filtration (छानना)<br/>
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Sand filters se pani pass karke impurities hatana.</span>
          </div>
          <div className="h-4 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
          <div className="font-mono text-xs p-1">↓</div>

          <div className="font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 px-4 py-2 rounded shadow-sm w-full max-w-xs text-center border border-slate-200 dark:border-slate-700">
            4. Sterilization (कीटाणुनाशक)<br/>
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Chlorine (Cl₂) ya Bleaching powder dalkar bacteria marna.</span>
          </div>
          <div className="h-4 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
          <div className="font-mono text-xs p-1">↓</div>

          <div className="font-mono text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-800">Treated / Potable Water</div>
        </div>
      </section>

    </article>
  );
};

export default AppliedChemistryUnit2Content;
