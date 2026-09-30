import React from 'react';
import {
  Award,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  Compass,
  Zap,
  RotateCw,
  ShieldAlert,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const FeeeUnit6Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 06</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Transformers and Electrical Machines
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">1-Phase Transformer</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">EMF Equation & K Ratio</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Transformer Losses & Efficiency</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Auto-Transformer</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">DC Generator & Motor</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Back EMF & Starters</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">3-Phase Induction Motor (RMF & Slip)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">1-Phase Motor Starting Principle</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Electrical engineering ka core foundation electromagnetic energy conversion par tika hai. Is unit me hum static power conversion (Transformers), direct current electro-mechanical devices (DC Machines), aur modern industrial workhorse (3-Phase & 1-Phase Induction Motors) ke deep theoretical aur practical aspects ko detailed Hinglish me cover karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 6.1 Single-Phase Transformer */}
      {/* ========================================================= */}
      <section id="sec-6-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 6.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Single-Phase Transformer
          </h2>
        </div>

        {/* Definition & Concept */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Zap className="w-5 h-5 text-brand-500" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Definition & Fundamental Nature</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong>Transformer ek static electrical machine hai</strong> jisme koi rotating part nahi hota. Yeh electromagnetic mutual induction ke principle par AC electrical power ko ek circuit (Primary) se doosre circuit (Secondary) me transfer karta hai, jisme <strong>frequency constant (f₁ = f₂)</strong> rehti hai jabki voltage aur current levels ko zaroorat ke anusaar step-up ya step-down kiya jaata hai.
              </p>
            </div>
          </div>
        </div>

        {/* Working Principle */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Working Principle: Mutual Induction (Faraday's Law)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Jab Primary Winding ko sinusoidal AC supply (V₁) se connect kiya jaata hai, to winding me ek alternating magnetizing current flow karta hai. Yeh current laminated silicon-steel core me ek time-varying magnetic flux (Φ = Φ_m · sin ωt) setup karta hai.
        </p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
          <li>
            <strong>Self Induction in Primary:</strong> Yeh alternating flux primary turns (N₁) ko cut karta hai jisse Faraday's Law ke mutabiq primary me Self-Induced EMF (E₁) induce hota hai jo Lenz's law ke anusaar supply voltage V₁ ka virodh karta hai.
          </li>
          <li>
            <strong>Mutual Induction in Secondary:</strong> Yeh common magnetic core flux secondary winding ke turns (N₂) ke sath link karta hai aur secondary terminals par Mutually-Induced EMF (E₂) paida karta hai [E₂ = -N₂ · (dΦ/dt)].
          </li>
          <li>
            <strong>Load Current:</strong> Jab secondary circuit me load connect kiya jaata hai, tab secondary current (I₂) flow karta hai aur power electrical energy ke roop me load ko deliver hoti hai bina kisi direct physical electrical connection ke (purely magnetic link).
          </li>
        </ul>

        {/* Educational Figure */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Transformer3d_col3.svg/640px-Transformer3d_col3.svg.png"
          alt="Single-Phase Transformer working principle showing magnetic core, primary winding, and secondary winding"
          caption="Figure 6.1: Single-Phase Transformer Core, Primary Winding, Secondary Winding, aur Common Magnetic Flux Linkage."
          source="Wikimedia Commons (CC BY-SA 3.0)"
          fallback={
            <div className="w-full py-8 px-4 flex flex-col items-center justify-center bg-slate-900 text-white rounded-lg font-mono text-xs">
              <div className="flex items-center gap-6 border-2 border-dashed border-brand-500/60 p-6 rounded-xl">
                <div className="text-center p-3 bg-blue-950/60 border border-blue-500/40 rounded">
                  <p className="text-blue-400 font-bold text-sm">Primary Coil (N₁)</p>
                  <p className="text-slate-400 mt-1">AC Voltage V₁</p>
                  <p className="text-slate-400">Current I₁</p>
                </div>
                <div className="text-center px-4 py-2 border-y-2 border-amber-400/80 text-amber-300">
                  <p className="font-bold">Laminated Core</p>
                  <p className="text-[11px] text-slate-300">Alternating Flux Φ</p>
                  <p className="text-brand-400 font-bold mt-1">Mutual Induction</p>
                </div>
                <div className="text-center p-3 bg-emerald-950/60 border border-emerald-500/40 rounded">
                  <p className="text-emerald-400 font-bold text-sm">Secondary Coil (N₂)</p>
                  <p className="text-slate-400 mt-1">Induced EMF E₂</p>
                  <p className="text-slate-400">Load Voltage V₂</p>
                </div>
              </div>
              <p className="text-slate-400 mt-3 text-center">Static Magnetic Coupling (Zero Frequency Change: f₁ = f₂)</p>
            </div>
          }
        />

        {/* Construction & Classification: Core Type vs Shell Type */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Constructional Classification: Core Type vs Shell Type</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Transformer core ko high permeability silicon steel (CRGO - Cold Rolled Grain Oriented) ki thin stampings/laminations (0.35 mm se 0.5 mm thickness) se banaya jaata hai jinki surface par insulating varnish coat hoti hai taaki Eddy Current losses minimize ho sakein.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Parameter</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Core-Type Transformer</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Shell-Type Transformer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Arrangement</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Windings core ke limbs ko surround karti hain (Windings encircle the core).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Core windings ko surround karta hai (Core encircles the windings).</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Magnetic Circuit</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Single magnetic circuit (poore core me ek hi flux loop).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Double magnetic circuit (Central limb ka flux Φ do outer limbs me Φ/2 divide hota hai).</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Winding Type</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Concentric cylindrical windings (LV winding core ke paas, HV winding bahar).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Sandwich / Pancake type windings central limb par rakhi jaati hain.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Cooling & Repair</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Natural heat dissipation aasan hai; dismantling aur repair aasan hota hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Windings enclosed hone ke kaaran cooling mushkil hai; repair complex hoti hai.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Common Application</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">High Voltage transmission & distribution systems me prefer kiya jaata hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Low Voltage, high current applications aur electronic appliances me use hota hai.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* EMF Equation Derivation */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Derivation of Transformer EMF Equation</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Suppose AC supply voltage sinusoidal hai: flux Φ = Φ_m · sin(2π f t).
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-lg font-mono text-sm leading-relaxed mb-6 space-y-3">
          <p className="text-amber-400 font-bold">// 1. Quarter cycle me flux change:</p>
          <p>Flux 0 se peak Φ_m tak t = T/4 = 1/(4f) seconds me pahunchta hai.</p>
          <p>Average rate of change of flux = (Φ_m - 0) / (1 / (4f)) = 4 · f · Φ_m (Webers/sec ya Volts per turn)</p>
          <p className="text-amber-400 font-bold">// 2. Sinusoidal wave ka Form Factor (k_f = RMS / Average = 1.11):</p>
          <p>RMS EMF induced per turn = 1.11 × 4 · f · Φ_m = 4.44 · f · Φ_m</p>
          <p className="text-emerald-400 font-bold">// 3. Primary aur Secondary RMS Induced EMF:</p>
          <p className="text-base text-yellow-300 font-extrabold">E₁ = 4.44 · f · N₁ · Φ_m = 4.44 · f · N₁ · B_m · A</p>
          <p className="text-base text-yellow-300 font-extrabold">E₂ = 4.44 · f · N₂ · Φ_m = 4.44 · f · N₂ · B_m · A</p>
          <p className="text-slate-400 text-xs mt-2">Yahan: f = supply frequency (Hz), N = number of turns, Φ_m = peak core flux (Webers), B_m = max flux density (Tesla), A = core cross-sectional area (m²).</p>
        </div>

        {/* Transformation Ratio K */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Transformation Ratio (K)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">
          Ideal transformer me no-load condition par induced EMF terminal voltage ke barabar hota hai (E₁ ≈ V₁, E₂ ≈ V₂). Voltage transformation ratio K ko aise define kiya jaata hai:
        </p>
        <div className="bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/30 rounded-lg p-4 font-mono text-center text-base sm:text-lg font-bold text-brand-700 dark:text-brand-300 mb-5">
          K = (V₂ / V₁) = (E₂ / E₁) = (N₂ / N₁) = (I₁ / I₂)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Step-Up Transformer (K &gt; 1)</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              N₂ &gt; N₁ aur V₂ &gt; V₁. Secondary voltage primary se zyada hota hai, lekin current kam ho jaati hai (I₂ &lt; I₁). Power plants par generation (11 kV) ko grid transmission (132 kV / 400 kV) ke liye step up karte hain taaki I²R transmission loss minimal ho.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-300 mb-1">Step-Down Transformer (K &lt; 1)</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              N₂ &lt; N₁ aur V₂ &lt; V₁. Secondary voltage kam aur secondary current zyada hoti hai (I₂ &gt; I₁). Local distribution substation par 11 kV ko 415 V (3-Phase) ya 230 V (1-Phase domestic) me convert karne ke liye use hota hai.
            </p>
          </div>
        </div>

        {/* Transformer Losses and Efficiency */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Transformer Losses & Efficiency</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Chunki transformer ek static machine hai, isme mechanical friction ya windage loss bilkul zero hote hain. Isliye iski efficiency normal rotating machines se kaafi high (95% - 99%) hoti hai. Transformer me mukhya do prakaar ke losses hote hain:
        </p>

        <ul className="list-disc list-outside space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
          <li>
            <strong>1. Core Loss / Iron Loss (P_i or P_c):</strong> Yeh core me magnetic flux ke alternating nature ke kaaran paida hota hai aur <strong>load current par depend nahi karta (Constant Loss)</strong>:
            <ul className="list-circle list-outside pl-5 mt-1 space-y-1 text-xs sm:text-sm">
              <li><em>Hysteresis Loss [P_h = η · (B_m)^1.6 · f · V]:</em> High-grade silicon steel use karke minimize kiya jaata hai.</li>
              <li><em>Eddy Current Loss [P_e = K_e · (B_m)² · f² · t² · V]:</em> Thin varnished laminations (t = 0.35 mm) use karke kam kiya jaata hai.</li>
            </ul>
          </li>
          <li>
            <strong>2. Copper Loss / Ohmic Loss (P_cu):</strong> Primary aur secondary winding ke internal electrical resistance ke kaaran I²R heat loss:
            <div className="font-mono text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded mt-1">
              P_cu = I₁² · R₁ + I₂² · R₂ = I₂² · R_02 (Variable Loss: load current ke square ke proportional)
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Agar load half (1/2) ho jaaye, to copper loss (1/2)² = 1/4 times ho jaata hai.</p>
          </li>
        </ul>

        {/* Condition for Maximum Efficiency */}
        <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 mb-6">
          <h4 className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 text-sm sm:text-base mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Condition for Maximum Efficiency</span>
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            Transformer ki efficiency tab maximum (η_max) hoti hai jab <strong>Variable Copper Loss exactly Constant Iron Loss ke barabar</strong> ho jaata hai:
          </p>
          <div className="font-mono font-bold text-sm text-center text-slate-900 dark:text-white my-2">
            P_cu = P_i   (yani: I₂² · R_02 = P_i)
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Full-load current par maximum efficiency laane ke bajaye distribution transformers ko aise design kiya jaata hai ki maximum efficiency 70% - 80% average load par mile kyunki distribution transformers 24 ghante full load par nahi chalte.
          </p>
        </div>

        {/* Auto-Transformer */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Auto-Transformer</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Auto-transformer ek special transformer hota hai jisme do alag-alag isolated windings hone ke bajaye <strong>ek hi continuous winding</strong> hoti hai jo laminated core par lipti hoti hai. Is single winding ka ek hissa primary aur secondary dono ke liye common hota hai.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Advantages of Auto-Transformer</span>
            </h4>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
              <li><strong>Copper Saving:</strong> Weight of copper required = (1 - K) × W_2-winding. Agar K lagbhag 1 ho to copper saving bahut high hoti hai.</li>
              <li><strong>Higher Efficiency:</strong> Copper volume aur resistance kam hone se ohmic loss kam hota hai.</li>
              <li><strong>Better Voltage Regulation:</strong> Leakage flux aur internal impedance kam hota hai.</li>
              <li><strong>Variable Output Voltage:</strong> Sliding carbon brush wiper laga kar smoothly continuously variable AC voltage (Variac) prapt kiya ja sakta hai.</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40">
            <h4 className="font-bold text-red-900 dark:text-red-300 text-sm mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span>Major Limitation & Safety Risk</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              <strong>No Electrical Isolation:</strong> Primary aur secondary directly conductive connection me judi hoti hain. Agar common portion break ho jaaye ya high voltage neutral float ho jaaye, to full primary high voltage secondary terminals par aa jaata hai jo operator ke liye fatal electric shock ho sakta hai. Isliye auto-transformer ko high-ratio isolation ke liye use nahi kiya ja sakta.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Applications:</strong> Electrical laboratory variac, 3-phase induction motor starting autotransformer starter, railway AC locomotive booster transformers.
            </p>
          </div>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-lg bg-brand-500/10 border-l-4 border-brand-500 mb-6">
          <h4 className="font-bold text-brand-900 dark:text-brand-300 text-sm mb-1 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-brand-500" />
            <span>Yaad Rakho / Exam Point</span>
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            1. Transformer DC supply par kaam nahi karta! Agar DC voltage connect karenge to flux time ke sath change nahi hoga (dΦ/dt = 0), jisse primary me koi opposing back EMF induce nahi hoga (E₁ = 0) aur high current ki wajah se primary winding jal jaayegi.<br />
            2. Transformer frequency change nahi karta (f₁ = f₂ = 50 Hz).
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6.2 DC Machines */}
      {/* ========================================================= */}
      <section id="sec-6-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 6.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            DC Machines (Generators and Motors)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          DC Machine ek electro-mechanical energy conversion device hai. Iski physical construction dono cases (Generator aur Motor) ke liye completely identical hoti hai. Agar hum shaft ko mechanical power denge to yeh DC electrical output deliver karegi (<strong>DC Generator</strong>); jabki agar hum electrical input denge to yeh rotating mechanical torque produce karegi (<strong>DC Motor</strong>).
        </p>

        {/* Construction of DC Machine */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Major Constructional Components of a DC Machine</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 text-brand-600 dark:text-brand-400">1. Yoke (Outer Frame)</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Cast iron ya cast steel ka bana outer cylinder. Yeh machine ke internal parts ko mechanical protection deta hai aur magnetic poles ke flux ke liye low-reluctance return path provide karta hai.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 text-brand-600 dark:text-brand-400">2. Field Poles & Pole Shoes</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Laminated steel stampings se bane hote hain. Field coils in par wound hoti hain. Pole shoes air gap me magnetic flux ko uniformly spread karte hain aur coils ko support karte hain.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 text-brand-600 dark:text-brand-400">3. Armature Core & Winding</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Armature rotating cylindrical drum hota hai jo slotted laminated silicon steel sheets se bana hota hai. Iske slots me insulated copper coils rakhi jaati hain jisme main working EMF induce hota hai.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 text-brand-600 dark:text-brand-400">4. Commutator & Carbon Brushes</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Wedge-shaped hard-drawn copper segments jo mica sheet se insulated hote hain. Generator me yeh rotating armature ke AC EMF ko DC me convert karta hai (Mechanical Rectifier). Carbon brushes commutator se current collect karte hain.
            </p>
          </div>
        </div>

        {/* Working Principle & Rules */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Generator Principle vs Motor Principle</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <Zap className="w-4 h-4" />
              <span>DC Generator (Faraday's Law)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
              Jab rotor conductors magnetic field me ghoomte hain, to magnetic flux cut hone par dynamic EMF induce hota hai (e = B · l · v · sin θ).
            </p>
            <div className="p-3 bg-blue-100/50 dark:bg-blue-950/40 rounded border border-blue-200 dark:border-blue-900 text-xs">
              <p className="font-bold text-blue-900 dark:text-blue-300">Fleming's Right-Hand Rule:</p>
              <p className="text-slate-700 dark:text-slate-300 mt-1">Thumb: Motion of conductor | Forefinger: Magnetic field (N to S) | Middle finger: Direction of Induced Current.</p>
            </div>
            <div className="font-mono text-xs font-bold text-slate-900 dark:text-white mt-3 p-2 bg-slate-200 dark:bg-slate-900 rounded text-center">
              Generated EMF: E_g = (Φ · Z · N · P) / (60 · A)  Volts
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <RotateCw className="w-4 h-4" />
              <span>DC Motor (Lorentz Force)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
              Jab magnetic field me rakhe armature conductors me current supply kiya jaata hai, to har conductor par ek mechanical force lagta hai (F = B · I · l). Opposing conductors par lagne wala force torque produce karta hai.
            </p>
            <div className="p-3 bg-emerald-100/50 dark:bg-emerald-950/40 rounded border border-emerald-200 dark:border-emerald-900 text-xs">
              <p className="font-bold text-emerald-900 dark:text-emerald-300">Fleming's Left-Hand Rule:</p>
              <p className="text-slate-700 dark:text-slate-300 mt-1">Thumb: Force/Motion | Forefinger: Magnetic field (N to S) | Middle finger: Current direction.</p>
            </div>
            <div className="font-mono text-xs font-bold text-slate-900 dark:text-white mt-3 p-2 bg-slate-200 dark:bg-slate-900 rounded text-center">
              Torque Relationship: T ∝ Φ · I_a   aur   Speed N ∝ (E_b / Φ)
            </div>
          </div>
        </div>

        {/* Back EMF & Significance */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Back EMF (E_b) and its Governing Role</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Jab DC motor ka armature magnetic field me ghoomta hai, to motor action ke sath-sath generator action bhi hota hai. Conductor magnetic flux cut karte hain jisse unme ek EMF induce hota hai jo Lenz's law ke anusaar applied terminal voltage V ka virodh karta hai. Is opposing voltage ko <strong>Back EMF (E_b)</strong> ya Counter EMF kehte hain:
        </p>

        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm mb-4 space-y-2">
          <p className="text-yellow-400 font-bold">V = E_b + I_a · R_a   ⟹   I_a = (V - E_b) / R_a</p>
          <p className="text-xs text-slate-400">Yahan: V = supply voltage, E_b = back EMF, I_a = armature current, R_a = armature resistance (typically 0.2 Ω - 0.5 Ω bahut low).</p>
        </div>

        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 mb-6">
          <h4 className="font-bold text-red-800 dark:text-red-300 text-sm mb-1 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-red-500" />
            <span>Why is a Starter Required for DC Motors?</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            At starting instant (t = 0), motor stationary hoti hai (N = 0). Isliye starting back EMF zero hota hai (E_b = 0).<br />
            Is samay starting armature current: I_astart = (V - 0) / R_a = (230 V) / (0.5 Ω) = 460 A! Yeh rated current ka 10 se 20 guna zyada hota hai, jo commutator par severe sparking karega aur winding ko turant jala dega. Isliye starting ke waqt external variable resistance add karke starting current ko limit karne ke liye <strong>3-Point ya 4-Point Starter</strong> mandatory hota hai.
          </p>
        </div>

        {/* Types of DC Motors and Applications */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Classification of DC Motors & Applications</span>
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Motor Type</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Winding Connection</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Speed-Torque Characteristic</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Industrial Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">DC Shunt Motor</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Field winding armature ke sath parallel (shunt) me judi hoti hai (thin wire, many turns).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Nearly constant speed motor (No-load se full-load speed me sirf 5-8% drop). Medium starting torque.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Lathe machines, centrifugal pumps, drill presses, machine tools jahan constant speed zaroori ho.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">DC Series Motor</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Field winding armature ke sath series me hoti hai (thick wire, few turns). I_a = I_se.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Very high starting torque (T ∝ I_a²). Lekin no-load par speed dangerously high (runaway speed) ho jaati hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Electric traction (trains, metro), cranes, hoists, trolley buses jahan heavy load par starting torque chahiye.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">DC Compound Motor</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Shunt aur series dono field windings present hoti hain (Cumulative vs Differential).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">High starting torque bina kisi runaway danger ke (safe no-load speed limit).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Rolling mills, heavy punch presses, elevators, shearing machines.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Warning Callout for Series Motor */}
        <div className="p-4 rounded-lg bg-amber-500/10 border-l-4 border-amber-500 mb-6">
          <h4 className="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <span>Vital Exam Point: Never Start a DC Series Motor on No-Load!</span>
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            DC Series motor me speed flux ke inversely proportional hoti hai [N ∝ (1/Φ)]. No-load condition par armature current I_a ≈ 0 hota hai, jisse series field flux Φ lagbhag zero ho jaata hai. As a result, motor ki speed infinite limit tak dangerously shoot kar jaati hai, jisse centrifugal force ke kaaran armature core aur commutator shatter ho sakte hain. Isliye DC series motor ko hamesha directly coupled mechanical load ke sath hi start kiya jaata hai (belt drives prohibited).
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6.3 Induction Motors */}
      {/* ========================================================= */}
      <section id="sec-6-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 6.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Induction Motors (3-Phase and 1-Phase)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Induction Motor ko industry ka <strong>"Workhorse"</strong> kaha jaata hai kyunki global industrial sector ki 80% - 85% mechanical drive power induction motors dwara deliver hoti hai. Yeh brushless, rugged, economical, aur highly reliable hoti hain. Iska rotor kisi external power supply se physically connected nahi hota; saari energy electromagnetic induction ke zariye transfer hoti hai.
        </p>

        {/* 3-Phase Induction Motor & RMF */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Principle of Rotating Magnetic Field (RMF)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Jab 3-phase stator windings (120° electrical space shift par placed) ko balanced 3-phase AC voltage supply se energize kiya jaata hai, to air gap me ek <strong>Rotating Magnetic Field (RMF)</strong> paida hota hai:
        </p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
          <li><strong>Constant Magnitude:</strong> RMF ki peak value har instant par constant rehti hai: Φ_R = 1.5 · Φ_m (single phase peak flux ka 1.5 times).</li>
          <li>
            <strong>Synchronous Speed (N_s):</strong> RMF constant synchronous speed par ghoomta hai:
            <div className="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded inline-block my-1 font-bold text-brand-600 dark:text-brand-400">
              N_s = (120 · f) / P  (RPM)
            </div>
            <span className="text-xs block text-slate-500">(Jaise 50 Hz supply aur 4 poles ke liye: N_s = (120 × 50) / 4 = 1500 RPM).</span>
          </li>
        </ul>

        {/* Working Principle & Slip */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Working Mechanism & Concept of Slip (s)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          RMF stationary rotor conductors ko cut karta hai, jisse Faraday's Law ke mutabiq unme EMF induce hota hai. Chunki rotor bars short-circuited hoti hain, isliye heavy rotor current flow hota hai. Lenz's law ke anusaar, rotor us cause ka virodh karta hai jisne use paida kiya (yani relative motion between RMF and rotor). Is relative motion ko khatam karne ke liye rotor RMF ki hi disha me rotate hona shuru kar deta hai.
        </p>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-lg font-mono text-sm mb-6 space-y-3">
          <p className="text-amber-400 font-bold">// Slip Definition and Formulas:</p>
          <p>Relative speed between RMF and Rotor = (N_s - N)</p>
          <p className="text-yellow-300 font-extrabold text-base">Fractional Slip: s = (N_s - N) / N_s</p>
          <p className="text-yellow-300 font-extrabold text-base">Percentage Slip: %s = [(N_s - N) / N_s] × 100%</p>
          <p className="text-emerald-400 font-bold">Rotor Actual Speed: N = N_s · (1 - s)</p>
          <p className="text-slate-400 text-xs">Standstill par (Starting): N = 0 ⟹ s = 1. Normal running par slip typically 2% se 5% (0.02 - 0.05) rehti hai.</p>
        </div>

        {/* Why Motor Never Runs at Synchronous Speed */}
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 mb-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-1">
            Why Can an Induction Motor Never Run at Synchronous Speed (N = N_s)?
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Agar rotor kisi tarah synchronous speed par chalne lage (N = N_s), to RMF aur rotor bars ke beech ka relative motion zero ho jaayega (N_s - N = 0). Conductor kisi flux ko cut nahi karenge ⟹ rotor me koi EMF induce nahi hoga ⟹ rotor current zero ho jaayega ⟹ mechanical torque zero ho jaayega! Torque zero hote hi rotor ki speed turant slip down ho kar N &lt; N_s ho jaayegi. Isliye induction motor ko hamesha <strong>Asynchronous Motor</strong> kaha jaata hai.
          </p>
        </div>

        {/* Squirrel Cage vs Slip Ring Rotor */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Squirrel Cage vs Slip-Ring (Phase Wound) Induction Motor</span>
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Feature</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Squirrel Cage Induction Motor (SCIM)</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Slip-Ring / Wound Rotor Motor (SRIM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Rotor Construction</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Heavy copper/aluminum bars permanently shorted with end rings (cage structure).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">3-phase distributed insulated winding jo 3 phosphor bronze slip rings se judi hoti hai.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Starting Torque</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Moderate (1.5 × full load torque). Rotor resistance internally fixed hoti hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">High starting torque (External rheostat resistance add karke torque maximize karte hain).</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Maintenance & Cost</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Low cost, highly rugged, zero brush/slip-ring wear (almost maintenance free).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Costly, regular brush maintenance aur slip-ring carbon cleaning zaroori hoti hai.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Typical Applications</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Fans, water pumps, blowers, lathes, conveyor belts, printing machines.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Heavy starting load: Lifts, cranes, hoists, mine winders, steel rolling mills.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Single Phase Induction Motor */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Single-Phase Induction Motor: Why Not Self-Starting?</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Single-phase AC supply stator winding ko dene par rotating field nahi balki ek <strong>Pulsating (Alternating) magnetic field</strong> banta hai.
        </p>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Double Revolving Field Theory (Ferraris Theorem):</h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
            Ek pulsating field ko do equal aur opposite rotating magnetic fields me resolve kiya ja sakta hai:
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-5 mb-3">
            <li><strong>Forward Field:</strong> Clockwise direction me +N_s speed par rotate karta hai (T_f torque).</li>
            <li><strong>Backward Field:</strong> Counter-clockwise direction me -N_s speed par rotate karta hai (T_b torque).</li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Standstill par (N = 0), forward torque aur backward torque exactly barabar aur opposite hote hain (T_f = T_b ⟹ T_net = 0). Isliye <strong>Single-Phase Induction Motor self-starting nahi hoti</strong>!
          </p>
        </div>

        {/* Phase Splitting and Capacitor Start */}
        <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Starting Methods (Phase Splitting Concept):</h4>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Motor ko start karne ke liye stator par Main Winding ke parallel me ek <strong>Auxiliary (Starting) Winding</strong> lagayi jaati hai jo 90° electrical space shift par hoti hai. Auxiliary winding ke series me ek <strong>Capacitor</strong> laga kar dono windings ke currents me lagbhag 90° ka phase difference create kiya jaata hai, jisse temporary rotating field ban jaata hai aur motor start ho jaati hai.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Capacitor Start Induction Run</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              High electrolytic capacitor starting ke liye use hota hai. Jaise hi motor 75% speed pakadti hai, Centrifugal Switch auxiliary winding aur capacitor ko disconnect kar deta hai. (Compressors, pumps).
            </p>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Permanent Split Capacitor (PSC)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Capacitor permanently circuit me connect rehta hai (no centrifugal switch). Quiet operation aur smooth running. (Ceiling fans, table fans, room coolers).
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Unit 6 Quick Revision Takeaway</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            • Transformer transfers power at constant frequency using mutual induction [E = 4.44 · f · N · Φ_m].<br />
            • Transformer maximum efficiency condition: P_cu = P_i.<br />
            • DC Machine uses Fleming's Right-Hand Rule for Generator (E_g) and Left-Hand Rule for Motor (F = B · I · l).<br />
            • Back EMF (E_b) acts as self-governor; starter limits dangerous initial current (I_a = V / R_a).<br />
            • 3-Phase Induction Motor runs on RMF at speed N = N_s · (1 - s); never reaches N_s.<br />
            • 1-Phase Induction Motor requires phase splitting (capacitor) to produce starting torque.
          </p>
        </div>
      </section>
    </article>
  );
};

export default FeeeUnit6Content;
