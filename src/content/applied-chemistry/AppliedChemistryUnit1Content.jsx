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

export const AppliedChemistryUnit1Content = () => {
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
            Applied Chemistry (Semester 1)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 08 Periods</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Atomic Structure, Chemical Bonding and Solutions
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (परमाणु संरचना, रासायनिक आबंधन एवं विलयन)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Atomic Structure</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Chemical Bonding</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Hybridization</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Hydrogen/Metallic Bonding</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Solutions</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Ye unit chemistry ka foundation hai. Isme hum padhenge ki atom ke andar kya hota hai, atoms aapas me judkar molecules (bonds) kaise banate hain, aur industrial chemicals/solutions ki concentration ko kaise naapa jata hai.
        </p>
      </header>

      {/* 1.1 ATOMIC STRUCTURE */}
      <section id="sec-1-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Atomic Structure
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Rutherford's Model of Atom</h4>
            <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>Atom ka zyada tar hissa khali hota hai.</li>
              <li>Atom ke center me ek chhota, heavy aur positively charged hissa hota hai jise <strong>Nucleus (नाभिक)</strong> kehte hain.</li>
              <li>Electrons nucleus ke chaaron taraf circular paths (orbits) me ghoomte hain.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Bohr's Theory</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Rutherford model ki kamiyon ko door karne ke liye Niels Bohr ne nayi theory di:</p>
            <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1 mb-2">
              <li>Electrons sirf kuch fixed (discrete) circular orbits me hi ghoom sakte hain, jinhe stationary orbits/energy levels (K, L, M, N...) kehte hain.</li>
              <li>Jab electron in fixed orbits me ghoomta hai, tab wo energy emit (radiate) <strong>nahi</strong> karta.</li>
              <li>Electron ki angular momentum (mvr) hamesha h/2π ka integral multiple hota hai (mvr = nh/2π).</li>
            </ul>
            <p className="text-xs text-slate-500 italic mt-2">(Note: Derivations of energy and radius are omitted as per syllabus)</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Heisenberg Uncertainty Principle</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Kisi moving microscopic particle (jaise electron) ki exact <strong>position (स्थिति)</strong> aur exact <strong>momentum (संवेग)</strong> dono ek hi time par 100% accuracy se napna asambhav (impossible) hai.
            </p>
            <div className="font-mono bg-slate-50 dark:bg-slate-900 p-2 rounded mt-2 text-brand-600 dark:text-brand-400 text-sm">
              Δx · Δp ≥ h / (4π)
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">Quantum Numbers</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Atom ke andar electron ki exact location aur energy level batane wale 4 numbers ka set:</p>
            <ol className="list-decimal list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>Principal Q.N. (n):</strong> Main shell ya orbit (K, L, M...) ko batata hai. (n = 1, 2, 3...)</li>
              <li><strong>Azimuthal Q.N. (l):</strong> Subshell (s, p, d, f) aur shape ko batata hai. (l = 0 to n-1)</li>
              <li><strong>Magnetic Q.N. (m):</strong> Orbitals ke spatial orientation ko batata hai. (m = -l to +l)</li>
              <li><strong>Spin Q.N. (s):</strong> Electron ki apni axis par spinning (clockwise +½ or anti-clockwise -½) batata hai.</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Shapes of Orbitals</h4>
            <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>s-orbital:</strong> Spherical (gol) shape. Ek shell me sirf 1 hota hai.</li>
              <li><strong>p-orbital:</strong> Dumb-bell (डंबल) shape. Ye 3 hote hain (px, py, pz).</li>
              <li><strong>d-orbital:</strong> Double dumb-bell shape (except dz²). Ye 5 hote hain.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Rules for Filling Electrons</h4>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li><strong>Pauli's Exclusion Principle:</strong> Kisi atom me 2 electrons ke liye charon quantum numbers same nahi ho sakte. Yani ek orbital me max 2 electrons aayenge, aur unki spin opposite hogi.</li>
              <li><strong>Hund's Rule of Maximum Multiplicity:</strong> Degenerate orbitals (saman energy wale orbitals like px, py, pz) me pairing tab tak start nahi hoti jab tak har orbital me ek-ek (single) electron na bhar jaye.</li>
              <li><strong>Aufbau Rule:</strong> Electrons orbitals me unki energy ke increasing order (badhte kram) me bhare jate hain. (Subse pehle kam energy wala, fir zyada wala).<br/>Order: 1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d ...</li>
            </ul>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2">Electronic Configuration (up to Z=30)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Aufbau rule ka use karke electrons bharna:</p>
            <ul className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1 ml-2">
              <li>Na (Z=11): 1s² 2s² 2p⁶ 3s¹</li>
              <li>Ca (Z=20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²</li>
              <li className="text-brand-600 dark:text-brand-400">Cr (Z=24) [Exception]: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵ (Half-filled stability)</li>
              <li className="text-brand-600 dark:text-brand-400">Cu (Z=29) [Exception]: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰ (Full-filled stability)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 1.2 CHEMICAL BONDING */}
      <section id="sec-1-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Chemical Bonding
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Why do atoms form bonds?</span>
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Har atom apna outermost shell (valence shell) pura karna chahta hai, yaani 8 electrons (Octet) ya 2 electrons (Duplet for Hydrogen/Helium) achieve karke Noble gas jaisi stable configuration pana chahta hai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">1. Ionic Bond (Electrovalent)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Electrons ke <strong>complete transfer</strong> (ek atom se dusre me jane) se banta hai. Ek cation (+) aur dusra anion (-) banta hai, jinke beech strong electrostatic force hota hai.
            </p>
            <p className="text-xs font-mono text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-900 p-2 rounded">
              Example: NaCl (Na → Na⁺ + e⁻, Cl + e⁻ → Cl⁻)
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">2. Covalent Bond</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Electrons ki <strong>mutual sharing</strong> (barabar ki saajhedari) se banta hai. Dono atoms ko electron chahiye hote hain.
            </p>
            <p className="text-xs font-mono text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-900 p-2 rounded">
              Examples: H₂ (H-H), F₂ (F-F), HF (H-F)
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">3. Coordination Bond (Dative)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Ek special covalent bond jisme shared pair of electrons sirf <strong>ek hi atom (donor)</strong> provide karta hai, par share dono karte hain. Ise (→) arrow se dikhate hain.
            </p>
            <p className="text-xs font-mono text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-900 p-2 rounded">
              Example: NH₄⁺ (NH₃ donor hai H⁺ acceptor)
            </p>
          </div>
        </div>
      </section>

      {/* 1.3 HYBRIDIZATION */}
      <section id="sec-1-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Hybridization (संकरण)
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Lagbhag saman energy wale atomic orbitals ka aapas me mix hokar nayi same energy aur same shape wale orbitals (hybrid orbitals) banane ki process ko Hybridization kehte hain.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-sm">
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Molecule</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Hybridization</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Geometry</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Bond Angle</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-sm font-sans">
              <tr>
                <td className="p-3 font-mono font-bold">BeCl₂</td>
                <td className="p-3">sp</td>
                <td className="p-3">Linear (रेखीय)</td>
                <td className="p-3">180°</td>
                <td className="p-3">No lone pair</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold">BF₃</td>
                <td className="p-3">sp²</td>
                <td className="p-3">Trigonal Planar</td>
                <td className="p-3">120°</td>
                <td className="p-3">No lone pair</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold">CH₄</td>
                <td className="p-3">sp³</td>
                <td className="p-3">Tetrahedral</td>
                <td className="p-3">109°28'</td>
                <td className="p-3">No lone pair</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold">NH₃</td>
                <td className="p-3">sp³</td>
                <td className="p-3">Trigonal Pyramidal</td>
                <td className="p-3">107°</td>
                <td className="p-3 text-brand-600 dark:text-brand-400">1 Lone Pair (repulsion causes angle decrease)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold">H₂O</td>
                <td className="p-3">sp³</td>
                <td className="p-3">V-shape / Bent</td>
                <td className="p-3">104.5°</td>
                <td className="p-3 text-brand-600 dark:text-brand-400">2 Lone Pairs (more repulsion)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 1.4 HYDROGEN BONDING */}
      <section id="sec-1-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Hydrogen Bonding
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Jab Hydrogen atom kisi highly electronegative atom (F, O, N) se covalently juda hota hai, toh bond polar ho jata hai. H par partial positive charge aa jata hai aur ye dusre molecule ke (F,O,N) ko attract karta hai. Is weak attraction force ko Hydrogen bond kehte hain.
        </p>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Anomalous (Abnormal) Properties due to H-Bonding:</h4>
          <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>H₂O liquid hai par H₂S gas hai:</strong> Oxygen H-bond banata hai, Sulfur nahi. Isliye H₂O molecules aapas me judkar liquid form me rehte hain.</li>
            <li><strong>High Boiling Point of NH₃ & H₂O:</strong> H-bonds ko todne ke liye extra heat energy lagti hai, isliye inke boiling points abnormaly high hote hain.</li>
            <li><strong>Ice floats on water:</strong> Solid ice me H-bonding ke karan cage-like (pinjre jaisa) structure banta hai jisme empty space hota hai. Isse ice ki density liquid water se kam ho jati hai.</li>
          </ul>
        </div>
      </section>

      {/* 1.5 METALLIC BONDING */}
      <section id="sec-1-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Metallic Bonding
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          <strong>Electron Sea Model:</strong> Metals ke valence electrons nucleus se loosely bound hote hain (free electrons). Nucleus (positive kernels) in free electrons ke "samundar" (sea) me doobe rehte hain. Positive kernels aur free electrons ke beech ka strong attraction force hi Metallic Bond kehlata hai.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Relation to Metallic Properties</span>
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
          <li className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm border border-slate-200 dark:border-slate-700">
            <strong>Conductivity:</strong> Free moving electrons ke karan metals heat aur electricity ke good conductors hote hain.
          </li>
          <li className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm border border-slate-200 dark:border-slate-700">
            <strong>Malleability & Ductility:</strong> Layers of positive kernels ek dusre par slip kar sakti hain bina bonds tode, isliye inki sheets aur wires banaye ja sakte hain.
          </li>
          <li className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm border border-slate-200 dark:border-slate-700">
            <strong>Hardness & High M.P.:</strong> Strong metallic bonds ke karan metals hard hote hain aur inka melting point high hota hai.
          </li>
          <li className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm border border-slate-200 dark:border-slate-700">
            <strong>Magnetic/Lustre Properties:</strong> Free electrons light energy absorb karke excite hote hain aur wapas aate samay light emit karte hain jisse chamak (lustre) aati hai.
          </li>
        </ul>
      </section>

      {/* 1.6 SOLUTIONS */}
      <section id="sec-1-6" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.6
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Solutions & Concentration
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          <strong>Solution:</strong> Solute aur solvent ka homogeneous (saman) mixture. <br/>
          <strong>Solute:</strong> Jo kam matra me hota hai (jise ghola jata hai).<br/>
          <strong>Solvent:</strong> Jo zyada matra me hota hai (jisme ghola jata hai).
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Methods of Expressing Concentration</span>
        </h3>

        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-700 dark:text-brand-400">1. Molarity (M) [Very Important]</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">1 litre solution me ghule hue solute ke <strong>moles</strong> ki sankhya.</p>
            <div className="font-mono bg-white dark:bg-slate-900 p-2 mt-2 rounded text-sm text-slate-800 dark:text-slate-200">
              M = (Moles of solute) / (Volume of solution in Litres)<br/>
              M = (Mass in g / Molar mass) / (Vol in mL / 1000)
            </div>
            <p className="text-xs text-slate-500 mt-1">Unit: mol/L ya M. Ye temperature par depend karti hai.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-700 dark:text-brand-400">2. Molality (m)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">1 kg (1000 g) <strong>solvent</strong> me ghule hue solute ke moles ki sankhya.</p>
            <div className="font-mono bg-white dark:bg-slate-900 p-2 mt-2 rounded text-sm text-slate-800 dark:text-slate-200">
              m = Moles of solute / Mass of solvent in Kg
            </div>
            <p className="text-xs text-slate-500 mt-1">Unit: mol/kg ya m. Temperature se independent hai.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-700 dark:text-brand-400">3. Normality (N)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">1 litre solution me ghule hue solute ke <strong>gram equivalent (तुल्यांकी भार)</strong> ki sankhya.</p>
            <div className="font-mono bg-white dark:bg-slate-900 p-2 mt-2 rounded text-sm text-slate-800 dark:text-slate-200">
              N = (Mass / Equivalent weight) / Vol in Litres
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-brand-700 dark:text-brand-400 text-sm">4. ppm (Parts per million)</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">Bohot dilute solutions ke liye.</p>
              <div className="font-mono bg-white dark:bg-slate-900 p-2 mt-2 rounded text-xs text-slate-800 dark:text-slate-200">
                ppm = (Mass of solute / Total mass) × 10⁶
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-brand-700 dark:text-brand-400 text-sm">5. Mass / Volume Percentage</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">100g ya 100mL solution me solute ka hissa.</p>
              <div className="font-mono bg-white dark:bg-slate-900 p-2 mt-2 rounded text-xs text-slate-800 dark:text-slate-200">
                Mass % = (Mass solute / Mass sol) × 100
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-700 dark:text-brand-400 text-sm">6. Mole Fraction (x)</h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">Kisi component ke moles aur total moles ka ratio.</p>
            <div className="font-mono bg-white dark:bg-slate-900 p-2 mt-2 rounded text-xs text-slate-800 dark:text-slate-200">
              x_solute = Moles of solute / (Moles solute + Moles solvent)
            </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-5 rounded-lg">
          <h4 className="font-bold text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" /> Solved Numerical Example (Molarity)
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Q:</strong> 4g NaOH ko water me dissolve karke 250 ml solution banaya gaya. Molarity nikalein.</p>
          <div className="font-mono text-sm bg-white dark:bg-slate-800 p-3 rounded border border-amber-200 dark:border-amber-800 space-y-1">
            <div>Given: Mass (w) = 4g, Vol (V) = 250 ml.</div>
            <div>Molar mass of NaOH (M') = Na(23) + O(16) + H(1) = 40 g/mol</div>
            <div>Formula: M = (w × 1000) / (M' × V(ml))</div>
            <div>Substitution: M = (4 × 1000) / (40 × 250)</div>
            <div>Calculation: M = 4000 / 10000 = 0.4</div>
            <div className="text-brand-600 dark:text-brand-400 font-bold">Answer: 0.4 mol/L or 0.4 M</div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default AppliedChemistryUnit1Content;
