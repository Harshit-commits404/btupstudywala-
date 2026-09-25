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

export const AppliedChemistryUnit5Content = () => {
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
            Applied Chemistry (Semester 1)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 09 Periods</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Electro Chemistry
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (विद्युत् रसायन)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Redox Reactions</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Faraday's Laws</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Electrolysis Apps</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Batteries/Cells</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Corrosion & Prevention</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Electrochemistry me hum Chemical energy aur Electrical energy ke conversion (ek dusre me badalne) ki study karte hain. Isme batteries ki working, metals par electroplating (polish), aur lohe par jang (corrosion) lagne ki chemistry aati hai.
        </p>
      </header>

      {/* 5.1 & 5.2 REDOX AND ELECTROLYTES */}
      <section id="sec-5-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTIONS 5.1 & 5.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Redox & Electrolytes
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Electronic Concept of Oxidation & Reduction</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-800 dark:text-red-400">Oxidation (ऑक्सीकरण)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">Atom ya ion dwara electrons ka khona (loss of electrons).</p>
            <div className="font-mono text-sm bg-white dark:bg-slate-900 p-2 mt-1 rounded text-slate-800 dark:text-slate-200">
              Na → Na⁺ + e⁻
            </div>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400">Reduction (अपचयन)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">Atom ya ion dwara electrons ka grahan karna (gain of electrons).</p>
            <div className="font-mono text-sm bg-white dark:bg-slate-900 p-2 mt-1 rounded text-slate-800 dark:text-slate-200">
              Cl₂ + 2e⁻ → 2Cl⁻
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
          <strong>Redox Reaction:</strong> Jisme oxidation aur reduction dono ek sath hote hain. (Eg. Zn + Cu²⁺ → Zn²⁺ + Cu).
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Electrolytes and Non-Electrolytes</span>
        </h3>
        <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 mb-6 space-y-1">
          <li><strong>Electrolytes (विद्युत अपघट्य):</strong> Wo chemicals jo pani me ghulne par ions me toot jate hain aur unme se bijli (electricity) pass ho sakti hai. (Ex: NaCl, HCl, NaOH).</li>
          <li><strong>Non-Electrolytes (विद्युत अनपघट्य):</strong> Wo chemicals jo pani me ions nahi banate aur bijli pass nahi hone dete. (Ex: Sugar, Urea, Pure water).</li>
        </ul>
      </section>

      {/* 5.3 FARADAY'S LAWS OF ELECTROLYSIS */}
      <section id="sec-5-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Faraday's Laws of Electrolysis
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">First Law</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
            Electrolysis ke dauran electrode par jama/mukt hone wale padarth ka weight (W), us solution me pass kiye gaye total charge/current (Q) ke directly proportional hota hai.
          </p>
          <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-brand-600 dark:text-brand-400 mb-2">
            W ∝ Q   →   W = Z × Q<br/>
            Since, Q = I × t<br/>
            So, <strong>W = Z × I × t</strong>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 grid grid-cols-2 gap-2">
            <div>W = Weight (g)</div>
            <div>Q = Charge in Coulombs (C)</div>
            <div>I = Current in Ampere (A)</div>
            <div>t = Time in seconds (s)</div>
            <div className="col-span-2">Z = Electrochemical Equivalent (ECE) of substance</div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">Second Law</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
            Jab same matra (Q) ka current series me jude alag-alag electrolytes me same time ke liye bheja jata hai, toh electrodes par jama weight unke Equivalent weight (E) ke proportional hota hai.
          </p>
          <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded text-sm text-brand-600 dark:text-brand-400">
            W₁ / W₂ = E₁ / E₂<br/>
            Or, Z₁ / Z₂ = E₁ / E₂
          </div>
          <p className="text-xs text-slate-500 mt-2">(Note: 1 Faraday = 96500 Coulombs = Charge of 1 mole electrons)</p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-5 rounded-lg">
          <h4 className="font-bold text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" /> Solved Numerical Example
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Q:</strong> Ek silver nitrate (AgNO₃) solution me 0.5 Ampere current 30 minutes tak bheja gaya. Cathode par kitna chandi (Silver) jama hoga? (Silver ka Z = 0.001118 g/C)</p>
          <div className="font-mono text-sm bg-white dark:bg-slate-800 p-3 rounded border border-amber-200 dark:border-amber-800 space-y-1">
            <div>Given:</div>
            <div>Current (I) = 0.5 A</div>
            <div>Time (t) = 30 mins = 30 × 60 = 1800 seconds</div>
            <div>ECE (Z) = 0.001118 g/C</div>
            <div>Formula: W = Z × I × t</div>
            <div>Substitution: W = 0.001118 × 0.5 × 1800</div>
            <div>Calculation: W = 0.001118 × 900 = 1.0062</div>
            <div className="text-brand-600 dark:text-brand-400 font-bold">Answer: 1.0062 g Silver jama hoga.</div>
          </div>
        </div>
      </section>

      {/* 5.4 & 5.5 APPLICATIONS & CELLS */}
      <section id="sec-5-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTIONS 5.4 & 5.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Applications & Electrochemical Cells
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Industrial Applications of Electrolysis</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 text-sm text-slate-700 dark:text-slate-300">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">1. Electrometallurgy:</strong> Electricity use karke metals ko unke fused ores se bahar nikalna. (e.g. Al, Na, K).
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">2. Electroplating:</strong> Ek saste metal par electricity dwara kisi expensive/good metal (jaise Gold, Silver, Nickel) ki patli parat (coating) chadhana. (Base metal cathode banta hai).
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">3. Electrolytic Refining:</strong> Impure metal ko anode aur pure metal ko cathode banakar electrolyte me current pass karna. Pure metal cathode par jama ho jata hai. (e.g. Copper refining).
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Electrochemical Cells (Batteries)</span>
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Chemical energy ko electrical energy me badalne wali devices jisme spontanous redox reaction hoti hai.</p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Primary Cell (e.g. Dry Cell)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">Ye non-rechargeable hote hain. Ek bar chemical khatam, toh cell bekar. <strong>Dry Cell (Leclanche Cell)</strong> me Zinc ka container Anode aur Carbon rod Cathode hota hai, jiske aas-paas MnO₂ + NH₄Cl ka paste bhara hota hai.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Secondary Cell (e.g. Lead Storage Battery)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">Ye rechargeable hote hain. Cars/inverters me use hote hain. Isme spongy Lead (Pb) Anode hota hai aur PbO₂ Cathode. Electrolyte 38% H₂SO₄ hota hai.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Fuel Cell & Solar Cell</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Fuel Cell (H₂-O₂ cell):</strong> Gases ko continuously bhejkar electricity generate ki jati hai (Used in space missions like Apollo). Pollution free hote hain.<br/>
              <strong>Solar Cell:</strong> Sunlight ko direct electricity me badalte hain (Silicon semiconductors ka use hota hai).
            </p>
          </div>
        </div>
      </section>

      {/* 5.6 & 5.7 CORROSION */}
      <section id="sec-5-6" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTIONS 5.6 & 5.7
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Corrosion & Its Prevention (संक्षारण)
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          <strong>Definition:</strong> Hawa (O₂) aur nami (moisture) ke reaction se metals ka dhire-dhire nikal kar destroy (oxide/sulphide banna) hona Corrosion kehlata hai. Example: Lohe par jang lagna (Rusting of iron).
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Types & Factors</span>
        </h3>
        <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 mb-6 space-y-1">
          <li><strong>Chemical (Dry) Corrosion:</strong> Direct atmospheric gases (O₂, Cl₂, H₂S) ke metal surface par direct attack se.</li>
          <li><strong>Electrochemical (Wet) Corrosion:</strong> Nami aur electrolytes ki presence me galvanic cells bante hain. (More reactive part Anode banta hai jo corrode hota hai, aur dusra part Cathode).</li>
          <li><strong>Factors:</strong> Moisture, Temp, Impurities in metal, Acids/Salts ki presence corrosion ko badhate hain.</li>
        </ul>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Corrosion Preventive Measures</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Internal (Metal ke andar)</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Purification:</strong> Pure metal me corrosion kam hota hai.</li>
              <li><strong>Alloying:</strong> Metal me dusre elements milana. (Eg. Iron me Cr, Ni milakar Stainless Steel banana jisme jang nahi lagta).</li>
              <li><strong>Heat Treatment:</strong> Quenching aur annealing se internal stress hatana.</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">External (Metal ke bahar)</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Metal Coatings:</strong><br/>
                <span className="text-xs text-brand-600 dark:text-brand-400">Anodic Coating (Galvanization):</span> Iron par Zinc (Zn) ki layer. Zn iron se zyada reactive hai isliye pehle khud corrode hota hai.<br/>
                <span className="text-xs text-brand-600 dark:text-brand-400">Cathodic Coating:</span> Iron par Tin (Sn) ki layer (Tin cans).
              </li>
              <li><strong>Organic Inhibitors:</strong> Paints, oils, grease aur kuch amines metal par layer banakar O₂/Moisture ko rokte hain.</li>
            </ul>
          </div>
        </div>
      </section>

    </article>
  );
};

export default AppliedChemistryUnit5Content;
