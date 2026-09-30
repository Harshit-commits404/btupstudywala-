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
  Zap,
  Activity,
  Layers,
  Magnet,
  RotateCw,
  GitBranch,
  ArrowRight,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const FeeeUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>12 Periods / Exam Weightage: 12-14 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Electric and Magnetic Circuits
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Ohm's Law & Limitations</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Kirchhoff's Laws (KCL & KVL)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Magnetic Circuits (MMF, Flux, Reluctance)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">B-H Hysteresis Curve</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Faraday's Laws & Lenz's Law</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Electrical Engineering ke do sabse fundamental pillars: Electric Circuits (Ohm's Law, KCL, KVL) aur Magnetic Circuits (Faraday's Induction, Reluctance aur B-H Hysteresis). Is unit me hum theoretical mathematical derivations aur unke practical implications ko deeply master karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 4.1 Ohm's Law and Basic Quantities */}
      {/* ========================================================= */}
      <section id="sec-4-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4.1. Fundamental Electrical Quantities & Ohm's Law
          </h2>
        </div>

        {/* Quantities Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-primary">1. Charge (Q)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Matter ka intrinsic property. SI Unit: <strong>Coulomb (C)</strong>. 1 C ≈ 6.25 × 10¹⁸ electrons.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-emerald-600 dark:text-emerald-400">2. Current (I)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Rate of flow of charge: <span className="font-mono font-bold">I = Q / t</span>. Unit: <strong>Ampere (A)</strong> = C/s.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-amber-500">3. Voltage (V)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Electric potential difference: <span className="font-mono font-bold">V = W / Q</span> (Work done per unit charge). Unit: <strong>Volt (V)</strong> = J/C.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-purple-500">4. Resistance (R)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Current ke flow ka opposition: <span className="font-mono font-bold">R = ρ · (L / A)</span>. Unit: <strong>Ohm (Ω)</strong>.</p>
          </div>
        </div>

        {/* Ohm's Law Explanation */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-3 mb-6">
          <div className="flex items-center gap-2 text-primary font-bold text-base">
            <Zap className="w-5 h-5" />
            <span>Ohm's Law: Statement & Mathematical Formula</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Statement:</strong> Agar kisi metallic conductor ki physical conditions (vishesh roop se <strong>Temperature</strong>, mechanical strain) constant rahein, to conductor ke dono ends ke beech lagaya gaya Potential Difference (V) usme flow hone wale Electric Current (I) ke directly proportional hota hai:
          </p>
          <div className="p-3 rounded-lg bg-card border border-border text-center font-mono text-base font-bold text-primary max-w-sm mx-auto shadow-xs">
            V ∝ I   ⟹   V = I · R
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Jahan R conductor ka <strong>Electrical Resistance</strong> hai. V-I graph origin (0,0) se pass hone wali ek straight line hoti hai jiska slope resistance R deta hai.
          </p>
        </div>

        {/* Limitations of Ohm's Law */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm space-y-1.5 mb-6">
          <strong className="font-bold text-amber-800 dark:text-amber-300 block text-sm">Ohm's Law ki Limitations (Non-Ohmic Devices):</strong>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Ohm's Law universal law nahi hai. Yeh <strong>Non-linear devices</strong> par lagu nahi hota:
            <br />• Semiconductor devices (PN Diodes, Transistors, Zener Diodes, Thyristors).
            <br />• Vacuum tubes, arc lamps, gas discharge tubes, aur electrolytes liquids.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.2 Kirchhoff's Laws */}
      {/* ========================================================= */}
      <section id="sec-4-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4.2. Kirchhoff's Laws for Complex Circuit Analysis (KCL & KVL)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          Jab electrical circuits me multiple loops, branches aur batteries judi hoti hain, to simple Ohm's Law se circuit solve nahi hota. Tab Gustav Kirchhoff ke do fundamental laws use hote hain:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* KCL */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base text-primary">1. Kirchhoff's Current Law (KCL / Junction Rule)</h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">Conservation of Charge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Statement:</strong> Kisi bhi electrical network ke kisi node ya junction par milne wale sabhi currents ka algebraic sum hamesha <strong>Zero</strong> hota hai:
            </p>
            <div className="p-2.5 rounded bg-primary/5 font-mono text-center font-bold text-primary text-base">
              Σ I = 0   ⟹   Σ I_incoming = Σ I_outgoing
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Junction par aane wale current ko positive (+) aur jane wale current ko negative (-) maana jata hai. Kyonki junction par charge ikattha (accumulate) nahi ho sakta.
            </p>
          </div>

          {/* KVL */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base text-emerald-600 dark:text-emerald-400">2. Kirchhoff's Voltage Law (KVL / Loop Rule)</h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">Conservation of Energy</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Statement:</strong> Kisi bhi closed electrical loop ya mesh me sabhi EMFs (E) aur sabhi potential drops (I · R) ka algebraic sum hamesha <strong>Zero</strong> hota hai:
            </p>
            <div className="p-2.5 rounded bg-emerald-500/5 font-mono text-center font-bold text-emerald-600 dark:text-emerald-400 text-base">
              Σ V = 0   ⟹   Σ E - Σ (I · R) = 0
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sign Convention: Loop me ghumte waqt battery ke negative terminal se positive par jane par $+E$, aur current ki direction me resistor par potential drop $-IR$ liya jata hai.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.3 Magnetic Circuits and B-H Curve */}
      {/* ========================================================= */}
      <section id="sec-4-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4.3. Magnetic Circuits & B-H Hysteresis Loop
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Magnetic Circuit</strong> magnetic lines of force (Magnetic Flux) ka closed closed path hota hai. Jaise electric circuit me voltage current chalata hai, waise hi magnetic circuit me MMF flux create karta hai:
        </p>

        {/* Analogy Table */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Analogy between Electric Circuit and Magnetic Circuit (Exam Gold)</span>
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Electric Circuit Parameter</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Corresponding Magnetic Circuit Parameter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 font-mono">
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">EMF (Electromotive Force) — E (Volts, V)</td>
                <td className="p-3 text-primary font-bold">MMF (Magnetomotive Force) — F = N · I (Ampere-Turns, AT)</td>
              </tr>
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">Current — I = E / R (Amperes, A)</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Magnetic Flux — Φ = MMF / S (Weber, Wb)</td>
              </tr>
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">Resistance — R = ρ · (l / A) = l / (σ · A) (Ω)</td>
                <td className="p-3 text-amber-500 font-bold">Reluctance — S = l / (μ₀ · μ_r · A) (AT/Wb)</td>
              </tr>
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">Current Density — J = I / A (A/m²)</td>
                <td className="p-3 text-purple-500 font-bold">Flux Density — B = Φ / A (Tesla, T = Wb/m²)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Embedded Figure: B-H Curve */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Hysteresis_curve.svg/640px-Hysteresis_curve.svg.png"
          alt="B-H Hysteresis loop showing Saturation, Retentivity on Y-axis, Coercivity on negative X-axis, and area representing Hysteresis Loss"
          caption="Figure 4.1: B-H Hysteresis Loop for Ferromagnetic Core Materials (Retentivity & Coercivity)"
          source="Wikimedia Commons"
          maxWidth="max-w-md"
          fallback={
            <div className="p-4 rounded-lg bg-card text-center text-xs font-mono border border-border">
              <div className="font-bold text-primary mb-2">B-H Hysteresis Curve</div>
              <div>B (Flux Density) vs H (Magnetizing Force) | Shows Retentivity Br & Coercivity Hc</div>
            </div>
          }
        />

        {/* B-H Curve Key Points */}
        <div className="space-y-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">1. Retentivity (Residual Magnetism):</strong>
            Jab magnetizing field $H$ ko ghatakar zero ($0$) kar diya jata hai, to core material ke andar bachi reh jane wali magnetic flux density $B_r$ ko <strong>Retentivity</strong> kehte hain.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">2. Coercivity (Coercive Force):</strong>
            Core material ke residual magnetism ko poora mitaakar zero ($0$) karne ke liye reverse direction me lagaye jane wale magnetic field $-H_c$ ko <strong>Coercivity</strong> kehte hain.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">3. Hysteresis Loss:</strong>
            AC cycle ke dauran magnetic dipoles ke baar-baar reverse hone se material me heat ke roop me energy waste hoti hai. <em>Hysteresis loop ka area jitna chhota hoga, transformer core me energy loss utna hi kam hoga</em> (isliye Silicon Steel use hota hai).
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.4 Electromagnetic Induction */}
      {/* ========================================================= */}
      <section id="sec-4-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4.4. Faraday's Laws of Electromagnetic Induction & Lenz's Law
          </h2>
        </div>

        {/* Faraday's Laws */}
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary">Faraday's First Law</h5>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Jab bhi kisi coil ya conductor se link hone wale <strong>Magnetic Flux me parivartan (change)</strong> hota hai, to conductor ke andar ek <strong>Induced EMF (Electromotive Force)</strong> set up ho jata hai. Agar circuit closed hai, to induced current flow hone lagta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400">Faraday's Second Law</h5>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Coil me induce hone wale EMF ka magnitude magnetic flux ke time ke sath badalne ki rate (Rate of change of flux linkage) ke directly proportional hota hai:
            </p>
            <div className="p-2 rounded bg-card border border-border font-mono text-center font-bold text-emerald-600 dark:text-emerald-400">
              e = -N · (dΦ/dt)
            </div>
          </div>
        </div>

        {/* Lenz's Law */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-xs sm:text-sm space-y-2 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <RotateCw className="w-4 h-4 text-amber-500" />
            Lenz's Law (Direction of Induced Current)
          </h4>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Statement:</strong> Induced current ki direction hamesha aisi hoti hai ki wo <em>usi cause (flux ke badlav) ka virodh (oppose) karti hai</em> jiske karan wo khud produce hui hai.
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Faraday ke formula e = -N · (dΦ/dt) me jo <strong>Minus sign (-)</strong> hai, wo Lenz's law ko represent karta hai. Lenz's law <strong>Law of Conservation of Energy</strong> par completely based hai.
          </p>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-primary">Exam Point (याद रखो):</strong>
            KCL vs KVL aur Electric vs Magnetic Circuit ka comparison table har semester exam me 5-marks me guaranteed aate hain. Reluctance ki unit AT/Wb aur Lenz's Law ka physical significance (Conservation of Energy) jarur likhein.
          </div>
        </div>
      </section>
    </article>
  );
};

export default FeeeUnit4Content;
