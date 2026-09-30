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
  ArrowRight,
  Triangle,
  RotateCw,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const FeeeUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 05</span>
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
            Alternating Current (A.C.) Circuits & Polyphase Systems
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">AC Waveform Parameters</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">RMS, Average, Form & Peak Factors</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Pure R, L, C & Series RLC Resonance</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">AC Power Triangle & Power Factor</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">3-Phase Star vs Delta Systems</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Duniya bhar me electric power distribution ka standard: Alternating Current (AC). Is unit me hum sinusoidal wave ke parameters (RMS & Average value), pure components aur series RLC circuits ka impedance, power triangle, aur 3-phase polyphase systems ko deeply master karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 5.1 AC Fundamentals */}
      {/* ========================================================= */}
      <section id="sec-5-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5.1. A.C. Fundamentals & Mathematical Waveform Terms
          </h2>
        </div>

        {/* Definition Placard */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                Alternating Quantity kya hoti hai?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Ek aisi electrical quantity (Voltage ya Current) jiska <strong>Magnitude time ke sath continuously change</strong> hota hai aur jiska <strong>Direction regular fixed time intervals ke baad reverse (pratiloam)</strong> ho jata hai, use <strong>Alternating Current (AC)</strong> kehte hain:
              </p>
              <div className="p-2.5 rounded bg-card border border-border font-mono text-primary font-bold text-sm mt-2 inline-block">
                v(t) = V_m · sin(ωt) = V_m · sin(2π f t)
              </div>
            </div>
          </div>
        </div>

        {/* Core Waveform Terminology */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-primary">1. Peak Value ($V_m$ or $I_m$)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Waveform ke positive ya negative half-cycle me achieve hone wali maximum amplitude. Peak-to-Peak $V_{p-p} = 2V_m$.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-emerald-600 dark:text-emerald-400">2. Time Period ($T$)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Ek poora cycle (ek positive + ek negative half) complete karne me laga samay (Seconds me). $T = 1/f$.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-amber-500">3. Frequency ($f$)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Ek second me complete hone wale cycles ki sankhya. SI Unit: <strong>Hertz (Hz)</strong>. India me standard domestic frequency <strong>50 Hz</strong> hai.</p>
          </div>
        </div>

        {/* Average and RMS Value Derivations */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Average Value, RMS Value, Form Factor & Peak Factor</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
          {/* Average Value */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary">Average Value (V_avg)</h5>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Ek symmetrical sine wave ka full cycle par average value hamesha Zero (0) hota hai. Isliye average value hamesha <strong>Half-Cycle</strong> par nikali jati hai:
            </p>
            <div className="p-2.5 rounded bg-card border border-border font-mono text-center font-bold text-primary">
              V_avg = (2 / π) · V_m ≈ 0.637 · V_m
            </div>
          </div>

          {/* RMS Value */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400">RMS Value (V_rms / Effective Value)</h5>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              AC ka wo equivalent steady DC current jo same resistor me same time par <strong>wahi heating effect (I² · R · t)</strong> produce kare. Sabhi AC ammeters aur voltmeters RMS value read karte hain:
            </p>
            <div className="p-2.5 rounded bg-card border border-border font-mono text-center font-bold text-emerald-600 dark:text-emerald-400">
              V_rms = V_m / √2 ≈ 0.707 · V_m
            </div>
          </div>
        </div>

        {/* Factors Placard */}
        <div className="grid sm:grid-cols-2 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">Form Factor (K_f):</strong>
            RMS value aur Average value ka ratio:
            <br /><span className="font-mono text-primary font-bold">K_f = V_rms / V_avg = (0.707 V_m) / (0.637 V_m) = 1.11</span> (Sine wave ke liye fixed value).
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">Peak Factor / Crest Factor (K_p):</strong>
            Peak value aur RMS value ka ratio:
            <br /><span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">K_p = V_m / V_rms = V_m / (V_m / √2) = √2 ≈ 1.414</span>.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.2 AC Through Pure R, L, and C */}
      {/* ========================================================= */}
      <section id="sec-5-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5.2. AC Through Pure Components & Series R-L-C Resonance
          </h2>
        </div>

        {/* Pure Components Comparison */}
        <div className="grid md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          {/* Pure R */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary">Pure Resistor (R)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Current aur Voltage <strong>Same Phase</strong> me hote hain (φ = 0°).
            </p>
            <div className="p-2 rounded bg-primary/5 font-mono text-xs text-primary font-bold">
              v = V_m · sin ωt<br />
              i = I_m · sin ωt<br />
              Power Factor: cos φ = 1.0 (Unity)
            </div>
          </div>

          {/* Pure L */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400">Pure Inductor (L)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Current voltage se <strong>90° Lag</strong> karta hai (φ = -90°).
            </p>
            <div className="p-2 rounded bg-emerald-500/5 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
              i = I_m · sin(ωt - 90°)<br />
              Reactance: X_L = 2π f L<br />
              Power Factor: cos 90° = 0 (Lagging)
            </div>
          </div>

          {/* Pure C */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-amber-500">Pure Capacitor (C)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Current voltage se <strong>90° Lead</strong> karta hai (φ = +90°).
            </p>
            <div className="p-2 rounded bg-amber-500/5 font-mono text-xs text-amber-500 font-bold">
              i = I_m · sin(ωt + 90°)<br />
              Reactance: X_C = 1 / (2π f C)<br />
              Power Factor: cos 90° = 0 (Leading)
            </div>
          </div>
        </div>

        {/* Series RLC Circuit & Resonance */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-xs sm:text-sm space-y-3 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            Series R-L-C Circuit & Electrical Resonance
          </h4>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Jab Resistor, Inductor aur Capacitor teeno series me jude hon, to circuit ka total opposition <strong>Impedance (Z)</strong> kehlata hai:
          </p>
          <div className="p-2.5 rounded bg-card border border-border font-mono text-center font-bold text-primary max-w-sm mx-auto">
            Z = √[R² + (X_L - X_C)²]   (Ω)
          </div>
          <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 space-y-1">
            <strong className="text-emerald-700 dark:text-emerald-300 font-bold block text-sm">Resonance Condition (X_L = X_C):</strong>
            Jab inductive reactance capacitive reactance ke barabar ho jati hai [2π f L = 1 / (2π f C)], to net reactance zero ho jata hai. Circuit purely resistive ban jata hai (Z = R), impedance minimum aur current maximum ho jata hai (cos φ = 1).
            <br /><span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block pt-1">Resonant Frequency: f_r = 1 / (2π · √(L · C))</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.3 Power in AC Circuits */}
      {/* ========================================================= */}
      <section id="sec-5-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5.3. Power in AC Circuits, Power Triangle & Power Factor
          </h2>
        </div>

        {/* 3 Powers Breakdown */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>The Three Types of AC Power (The Power Triangle)</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-primary">1. Active Power (P)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">True/Real power jo actual useful mechanical work ya heat produce karti hai. Unit: <strong>Watts / kW</strong>.</p>
            <div className="font-mono text-xs font-bold text-primary">P = V · I · cos φ</div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-emerald-600 dark:text-emerald-400">2. Reactive Power (Q)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Inductor/Capacitor me magnetic field maintain karne ke liye source aur load ke beech oscillate karne wali power. Unit: <strong>VAR / kVAR</strong>.</p>
            <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">Q = V · I · sin φ</div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-amber-500">3. Apparent Power (S)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Supply voltage aur current ka total product. Unit: <strong>VA / kVA</strong>. Transformer rating isi me hoti hai.</p>
            <div className="font-mono text-xs font-bold text-amber-500">S = V · I = √(P² + Q²)</div>
          </div>
        </div>

        {/* Power Factor Explanation */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-xs sm:text-sm space-y-2 mb-6">
          <strong className="font-bold text-slate-900 dark:text-white block text-sm">Power Factor (cos φ):</strong>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Real Power (P) aur Apparent Power (S) ke ratio ko <strong>Power Factor</strong> kehte hain: <span className="font-mono font-bold text-primary">PF = cos φ = P / S = R / Z</span>.
          </p>
          <div className="text-xs text-slate-500 dark:text-slate-400 pt-1">
            • <strong>Disadvantages of Low Power Factor:</strong> Line current I = P / (V · cos φ) bohot badh jata hai, jisse transmission lines me I² · R heat loss high ho jata hai aur electricity bill me penalty lagti hai.
            <br />• <strong>Improvement Method:</strong> Inductive load ke parallel me <strong>Shunt Capacitor Bank</strong> connect karke power factor ko lagbhag 0.95 se 0.98 tak improve kiya jata hai.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.4 Polyphase Systems (3-Phase) */}
      {/* ========================================================= */}
      <section id="sec-5-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5.4. Polyphase (3-Phase) Systems: Star vs Delta Connections
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          Single phase AC me power har cycle me do baar zero hoti hai (pulsating power). Lekin <strong>3-Phase System</strong> me teen identical voltage windings hoti hain jo aapas me <strong>120° electrical phase shift</strong> par hoti hain, jisse output me continuous constant power aur uniform rotating magnetic field milta hai.
        </p>

        {/* Embedded Figure: 3-Phase Waveform */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/3_phase_AC_waveform.svg/640px-3_phase_AC_waveform.svg.png"
          alt="Three-phase AC sinusoidal waveforms showing Phase A, Phase B, and Phase C shifted by 120 degrees electrical"
          caption="Figure 5.1: Three-Phase AC Voltage Waveforms Separated by 120° Electrical Phase Displacement"
          source="Wikimedia Commons"
          maxWidth="max-w-xl"
          fallback={
            <div className="p-4 rounded-lg bg-card text-center text-xs font-mono border border-border">
              <div className="font-bold text-primary mb-2">3-Phase Waveform Model</div>
              <div>Phase R: Vm sin(ωt) | Phase Y: Vm sin(ωt - 120°) | Phase B: Vm sin(ωt - 240°)</div>
            </div>
          }
        />

        {/* Star vs Delta Deep Comparison Table */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Star (Y) vs Delta (Δ) Connection Relationships (Exam Favorite)</span>
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Parameter</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Star (Y) Connection</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Delta (Δ) Connection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 font-mono">
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">Connection Shape</td>
                <td className="p-3 text-primary font-bold">Teeno coils ke common junction point par <strong>Neutral Wire (N)</strong> nikalta hai (4-Wire)</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Coils series loop me judti hain, koi Neutral wire nahi hota (3-Wire)</td>
              </tr>
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">Voltage Relationship</td>
                <td className="p-3 text-primary font-bold">Line Voltage: V_L = √3 · V_ph</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Line Voltage = Phase Voltage: V_L = V_ph</td>
              </tr>
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">Current Relationship</td>
                <td className="p-3 text-primary font-bold">Line Current = Phase Current: I_L = I_ph</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Line Current: I_L = √3 · I_ph</td>
              </tr>
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">Total 3-Phase Power</td>
                <td className="p-3 text-primary font-bold">P = √3 · V_L · I_L · cos φ</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">P = √3 · V_L · I_L · cos φ (Same Formula)</td>
              </tr>
              <tr>
                <td className="p-3 text-slate-700 dark:text-slate-300">Application</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Domestic distribution (230V 1-phase + 415V 3-phase)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Industrial motors aur high voltage transmission</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-primary">Exam Point (याद रखो):</strong>
            Star connection me V_L = √3 · V_ph hota hai jabki Delta me I_L = √3 · I_ph hota hai! Dono me 3-phase total power ka formula hamesha same rehta hai: P = √3 · V_L · I_L · cos φ.
          </div>
        </div>
      </section>
    </article>
  );
};

export default FeeeUnit5Content;
