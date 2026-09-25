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

export const AppliedChemistryUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
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
            Engineering Materials
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (इंजीनियरिंग पदार्थ)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Metallurgy Basics</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Aluminium Extraction</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Alloys</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Portland Cement</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Polymers & Plastics</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Rubber</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Engineering me structures aur machines banane ke liye metals, alloys, cement, aur plastics jaise materials use hote hain. Is unit me hum in materials ki basic chemistry, banaye jane ke tarike aur properties padhenge.
        </p>
      </header>

      {/* 3.1 & 3.2 METALLURGY */}
      <section id="sec-3-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.1 & 3.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Occurrence of Metals & Metallurgy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Minerals (खनिज)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">Dharti ke andar paye jane wale natural chemical compounds jisme metals present hote hain.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Ores (अयस्क)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">Wo minerals jinse metal aasani se aur kam kharche (profitably) me nikala ja sake. <em>(Sare ores minerals hote hain, par sare minerals ores nahi hote).</em></p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Gangue / Matrix</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">Ore (अयस्क) me mili hui mitti, ret (sand), aur patthar jaisi asuddhiya (impurities).</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Flux & Slag</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Flux:</strong> Gangue ko hatane ke liye milaya gaya chemical (e.g. CaO).<br/>
              <strong>Slag (धातुमल):</strong> Flux aur gangue milkar jo fusible (pigla hua) compound banate hain. (Flux + Gangue → Slag)
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Important Ores</span>
        </h3>
        <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 mb-6 space-y-1">
          <li><strong>Iron (Fe):</strong> Haematite (Fe₂O₃), Magnetite (Fe₃O₄).</li>
          <li><strong>Aluminium (Al):</strong> Bauxite (Al₂O₃·2H₂O), Cryolite (Na₃AlF₆).</li>
          <li><strong>Copper (Cu):</strong> Copper Pyrite (CuFeS₂), Cuprite (Cu₂O).</li>
        </ul>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>General Principles of Metallurgy</span>
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300">Ore se pure metal nikalne ki process ko Metallurgy kehte hain. Iske main steps hain: <strong>1. Crushing/Grinding</strong> (Peensna) → <strong>2. Concentration</strong> (Gangue hatana) → <strong>3. Reduction</strong> (Metal oxide ko metal me badalna) → <strong>4. Refining</strong> (Pure karna).</p>
      </section>

      {/* 3.3 EXTRACTION OF ALUMINIUM */}
      <section id="sec-3-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Extraction of Aluminium (from Bauxite)
          </h2>
        </div>

        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <p>Aluminium ko Bauxite (Al₂O₃·2H₂O) ore se nikala jata hai. Is process ke main 3 steps hote hain:</p>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-700 dark:text-brand-400">Step 1: Purification of Bauxite (Baeyer's Process)</h4>
            <p className="mb-1">Bauxite ko NaOH ke sath garam karke pure Alumina (Al₂O₃) nikala jata hai. Fe₂O₃ jaisi impurities alag ho jati hain.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-700 dark:text-brand-400">Step 2: Electrolytic Reduction of Alumina (Hall-Heroult Process)</h4>
            <p className="mb-1">Pure Alumina ka melting point bahut high (2050°C) hota hai. Isliye isme <strong>Cryolite (Na₃AlF₆)</strong> aur <strong>Fluorspar (CaF₂)</strong> milaya jata hai, jisse melting point kam (~900°C) ho jata hai aur conductivity badh jati hai.</p>
            <p>Ise carbon (graphite) electrodes ke sath electolyse karte hain, aur Aluminium cathode par jama ho jata hai.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-700 dark:text-brand-400">Step 3: Refining of Aluminium (Hoope's Process)</h4>
            <p className="mb-1">Impure Al ko Hoope's cell me electrolytic refining se 99.9% pure kiya jata hai.</p>
          </div>
        </div>
      </section>

      {/* 3.4 ALLOYS */}
      <section id="sec-3-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Alloys (मिश्र धातु)
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          <strong>Definition:</strong> Do ya do se zyada metals (ya metal aur non-metal) ke homogeneous mixture ko Alloy kehte hain. <br/>
          <strong>Purpose:</strong> Hardness badhane, corrosion (jang) rokne, aur melting point ko kam/zyada karne ke liye alloy banaye jate hain (Example: Iron me Carbon milakar Steel banate hain).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px] text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80">
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Type</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Definition</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Examples</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-800 dark:text-slate-200">Ferrous Alloys</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Jinme main constituent (base) <strong>Iron (Fe)</strong> hota hai. Inme magnetic property hoti hai.</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400">Stainless Steel (Fe+Cr+Ni+C), Invar</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Bartan, surgical instruments, machines, bridges.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-800 dark:text-slate-200">Non-Ferrous Alloys</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Jinme Iron nahi hota (base metal Cu, Al, Pb etc. hota hai). Rusting nahi hoti.</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400">Brass (Cu+Zn), Bronze (Cu+Sn), Duralumin</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Wires, coins, aircraft parts, statues.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3.5 PORTLAND CEMENT */}
      <section id="sec-3-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Portland Cement
          </h2>
          <p className="text-sm text-slate-500 mt-1">(Elementary idea as per syllabus)</p>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Cement ek binding material hai. Ise calcerous (Calcium wale jaise limestone) aur argillaceous (silica wale jaise clay) materials ko high temperature par burn karke banaya jata hai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Chemical Composition</h4>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>CaO (Lime): ~60-67% (Main strength giver)</li>
              <li>SiO₂ (Silica): ~17-25%</li>
              <li>Al₂O₃ (Alumina): ~3-8% (Quick setting)</li>
              <li>Fe₂O₃ (Iron oxide): ~0.5-6% (Provides color)</li>
              <li>CaSO₄ (Gypsum): ~2-3% (Setting time badhane ke liye)</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Hardening of Cement</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Jab cement me pani milaya jata hai, toh uske compounds ka Hydration (jal-yojan) hota hai aur ek colloidal gel banta hai. Ye gel dheere-dheere sukh kar pathar jaisa kathor (hard) ho jata hai. Gypsum milane se cement turant hard nahi hota, mistri ko kaam karne ka time mil jata hai.
            </p>
          </div>
        </div>
      </section>

      {/* 3.6 COMPOSITES */}
      <section id="sec-3-6" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.6
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Composite Materials
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Jab do ya do se zyada materials (jininki properties alag hain) ko physically mix kiya jata hai taaki ek naya material bane jiski properties dono se behtar ho, use Composite kehte hain.
        </p>

        <ul className="list-none space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <li className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">1. Wood (Natural Composite):</strong> Cellulose fibers (jo strength dete hain) Lignin matrix (jo fibers ko bandhe rakhta hai) me dase (embedded) hote hain. Ye lightweight aur strong hota hai.
          </li>
          <li className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <strong className="text-brand-700 dark:text-brand-400">2. Glass Fibre Reinforced Composites (FRP/GFRP):</strong> Polymer (plastic resin) ke matrix me glass ke baarik dhage (fibers) dale jate hain. Ye bahut majboot, light-weight, aur corrosion-resistant hote hain. <em>Applications:</em> Car bodies, helmets, water tanks, boats.
          </li>
        </ul>
      </section>

      {/* 3.7 POLYMERS AND PLASTICS */}
      <section id="sec-3-7" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.7
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Polymers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
          <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded">
            <strong>Monomer:</strong> Chhota molecule jo bar-bar judkar polymer banata hai (e.g. Ethene).
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded">
            <strong>Polymer:</strong> Bade molecules (macromolecules) jo monomers ki chain se bante hain (e.g. Polythene).
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded">
            <strong>Homopolymer:</strong> Sirf ek type ke monomer se bane polymer (e.g. PVC).
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded">
            <strong>Copolymer:</strong> Do ya zyada alag types ke monomer se bane polymer (e.g. Nylon-6,6).
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Thermoplastics vs Thermosetting Plastics</span>
        </h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse min-w-[600px] text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80">
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold w-1/2">Thermoplastics (ताप सुनम्य)</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold w-1/2">Thermosetting Plastics (ताप दृढ़)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 text-slate-600 dark:text-slate-400">Garam karne par soft aur thanda karne par hard ho jate hain. Ise bar-bar pighlakar naya shape diya ja sakta hai (Recyclable).</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Ek baar set hone (garam karke shape dene) ke baad inko dubara pighlaya nahi ja sakta (Non-recyclable). Garam karne par jal jate hain.</td>
              </tr>
              <tr>
                <td className="p-3 text-slate-600 dark:text-slate-400">Long straight chains hoti hain jinme intermolecular forces weak hote hain.</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Chains ke beech strong 3D cross-linking hoti hai.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400 text-xs">Ex: PVC, Polystyrene (PS), PTFE (Teflon), Nylon</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400 text-xs">Ex: Bakelite, Melamine</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Important Polymers (Monomer & Use)</h4>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
            <li><strong>PVC (Polyvinyl Chloride):</strong> Monomer - Vinyl Chloride. Use - Pipes, wire insulation, raincoats.</li>
            <li><strong>PS (Polystyrene):</strong> Monomer - Styrene. Use - TV cabinets, packing material (Thermocol).</li>
            <li><strong>PTFE (Teflon):</strong> Monomer - Tetrafluoroethylene. Use - Non-stick cookware, valves.</li>
            <li><strong>Nylon-6,6:</strong> Monomers - Hexamethylene diamine + Adipic acid. Use - Ropes, bristles of brush, textile.</li>
            <li><strong>Bakelite:</strong> Monomers - Phenol + Formaldehyde. Use - Electric switches, handles of utensils (Kyunki ye heat aur electricity ka insulator aur thermosetting hai).</li>
          </ul>
        </div>
      </section>

      {/* 3.8 RUBBER */}
      <section id="sec-3-8" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.8
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Rubber
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Natural rubber ped (Hevea brasiliensis) ke latex se milta hai. Iska chemical name <strong>Polyisoprene</strong> hai. Lekin natural rubber soft hota hai, elasticity kam hoti hai, aur temperature badhne par chipchipa (sticky) ho jata hai.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">Vulcanization of Rubber</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Raw rubber ki properties (strength, elasticity) ko theek karne ke liye usme 3-5% <strong>Sulphur (S)</strong> milakar garam kiya jata hai. Is process ko Vulcanization kehte hain. Sulphur atoms rubber ki chains ke beech cross-links bana dete hain jisse rubber hard, elastic, aur non-sticky ho jata hai. <br/><br/>
            <strong>Applications:</strong> Car tyres, conveyor belts, shoe soles (Tyres me hardness ke liye Carbon black bhi milate hain).
          </p>
        </div>
      </section>

    </article>
  );
};

export default AppliedChemistryUnit3Content;
