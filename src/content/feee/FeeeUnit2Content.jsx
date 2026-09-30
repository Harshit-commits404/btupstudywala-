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
  Gauge,
  Sliders,
  Maximize2,
  Tv,
  ArrowRight,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const FeeeUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>8 Periods / Exam Weightage: 8-10 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Basic Measuring Instruments & CRO
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Ideal vs Practical Voltage/Current Sources</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">PMMC Galvanometer</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Ammeter (Shunt Extension)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Voltmeter (Multiplier Extension)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Electrodynamometer Wattmeter</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Cathode Ray Oscilloscope (CRO)</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Electrical parameters (Voltage, Current, Power, Frequency) aankhon se dikhai nahi dete; unhe measure karne ke liye specialized electromechanical meters aur Cathode Ray Oscilloscope (CRO) ka use hota hai. Is unit me hum unke working principles aur range extension formulas ko master karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 2.1 Voltage and Current Sources */}
      {/* ========================================================= */}
      <section id="sec-2-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            2.1. Voltage and Current Sources (Ideal vs Practical)
          </h2>
        </div>

        {/* Sources Explanation Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Voltage Source */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base text-primary">Voltage Sources</h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">Terminal Voltage (V)</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1.5 leading-relaxed">
              <li><strong>Ideal Voltage Source:</strong> Aisa source jiska terminal voltage load current par bilkul depend nahi karta - chahe load kitna bhi current draw kare, terminal voltage constant V_s bana rehta hai. Iska <strong>Internal Resistance R_in = 0 (Zero)</strong> hota hai.</li>
              <li><strong>Practical Voltage Source:</strong> Real life me har battery/generator ka kuch internal resistance R_in series me hota hai. Jaise-jaise load current I_L badhta hai, internal resistance me voltage drop (I_L * R_in) hone se terminal voltage ghat jata hai:
                <br /><span className="font-mono text-primary font-bold block mt-1">V_L = V_s - I_L * R_in</span>
              </li>
            </ul>
          </div>

          {/* Current Source */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base text-emerald-600 dark:text-emerald-400">Current Sources</h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">Constant Current (I)</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1.5 leading-relaxed">
              <li><strong>Ideal Current Source:</strong> Aisa source jo terminal voltage chahe kuch bhi ho, hamesha constant current I_s deliver karta hai. Iska <strong>Internal Resistance R_in = ∞ (Infinite)</strong> parallel me juda hota hai.</li>
              <li><strong>Practical Current Source:</strong> Real current source ke parallel me finite internal resistance R_in hota hai. Jaise-jaise load resistance badhta hai, kuch current internal branch me chala jata hai, jisse load current slight decrease ho jata hai:
                <br /><span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold block mt-1">I_L = I_s - (V_L / R_in)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Source Transformation Placard */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-xs sm:text-sm space-y-1.5">
          <strong className="font-bold text-slate-900 dark:text-white block text-sm">Source Transformation Rule:</strong>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Ek practical voltage source ($V_s$ in series with $R$) ko practical current source me convert kiya ja sakta hai jisme source current <span className="font-mono font-bold text-primary">$I_s = V_s / R$</span> aur wahi resistance $R$ parallel me jud jata hai.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.2 Basic Meters (Ammeter, Voltmeter, Wattmeter) */}
      {/* ========================================================= */}
      <section id="sec-2-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            2.2. Basic Electrical Meters: Ammeter, Voltmeter, and Wattmeter
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          Analog measuring meters ka core heart <strong>PMMC (Permanent Magnet Moving Coil) Galvanometer</strong> hota hai. Jab magnetic field me rakhi coil se current guzarta hai, to uspar deflecting torque lagta hai: <span className="font-mono font-bold text-primary">$T_d = N \cdot B \cdot I \cdot A$</span>. Scale linear hota hai aur yeh <strong>sirf DC</strong> measure karta hai.
        </p>

        {/* Ammeter vs Voltmeter Range Extension (High-Weightage Topic) */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Range Extension: Galvanometer to Ammeter and Voltmeter</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
          {/* Ammeter */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              Ammeter (Current Measurement)
            </h5>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Circuit me hamesha <strong>Series</strong> me connect hota hai taaki saara current meter se hokar guzre.
            </p>
            <div className="p-2.5 rounded bg-primary/5 border border-primary/20 space-y-1">
              <strong className="block text-primary">Range Extension Method:</strong>
              Galvanometer coil ke <strong>Parallel</strong> me ek bohot chhota resistance (jise <strong>Shunt Resistance, R_sh</strong> kehte hain) joda jata hai taaki maximum current bypass ho jaye.
              <div className="font-mono text-xs font-bold text-primary pt-1">
                R_sh = R_m / (m - 1)  [where m = I / I_m]
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Ideal Ammeter ka internal resistance <span className="font-bold text-primary">0 (Zero)</span> hota hai taaki circuit ka total current affect na ho.
            </p>
          </div>

          {/* Voltmeter */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Voltmeter (Voltage Measurement)
            </h5>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Circuit me hamesha do points ke beech <strong>Parallel</strong> me connect hota hai taaki potential difference measure kare.
            </p>
            <div className="p-2.5 rounded bg-emerald-500/5 border border-emerald-500/20 space-y-1">
              <strong className="block text-emerald-600 dark:text-emerald-400">Range Extension Method:</strong>
              Galvanometer coil ke <strong>Series</strong> me ek bohot bada resistance (jise <strong>Multiplier Resistance, R_se</strong> kehte hain) joda jata hai taaki meter jalne se bache.
              <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
                R_se = R_m · (m - 1)  [where m = V / V_m]
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Ideal Voltmeter ka internal resistance <span className="font-bold text-emerald-600 dark:text-emerald-400">$\infty$ (Infinite)</span> hota hai taaki meter circuit se zero current draw kare.
            </p>
          </div>
        </div>

        {/* Wattmeter */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-xs sm:text-sm space-y-2 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            Dynamometer Type Wattmeter (Power Measurement)
          </h4>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Wattmeter circuit me real active power ($P = V \cdot I \cdot \cos\phi$) measure karta hai. Isme do coils hoti hain:
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1">
            <li><strong>Current Coil (CC):</strong> Moti taar (thick wire) ke kam turns wali fixed coil jo load ke sath <em>Series</em> me lagti hai aur circuit current carry karti hai.</li>
            <li><strong>Pressure Coil (PC) / Voltage Coil:</strong> Patli taar (thin wire) ke bohot zyada turns wali moving coil jo load ke sath <em>Parallel</em> me lagti hai aur voltage measure karti hai.</li>
          </ul>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.3 Cathode Ray Oscilloscope (CRO) */}
      {/* ========================================================= */}
      <section id="sec-2-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            2.3. Cathode Ray Oscilloscope (CRO): Construction & Operation
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Cathode Ray Oscilloscope (CRO)</strong> electronic engineering ka sabse versatile visual measuring instrument hai jise <strong>"Eye of an Electrical Engineer"</strong> kaha jata hai. Yeh electrical input signal (Voltage) ko time ke respect me graphical waveform (Sine wave, Square wave) ke roop me screen par display karta hai.
        </p>

        {/* Embedded Figure: CRT Internal Structure */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cathode_ray_tube.svg/640px-Cathode_ray_tube.svg.png"
          alt="Cathode Ray Tube internal schematic showing Electron Gun, Focusing Anodes, Vertical and Horizontal Deflection Plates, and Phosphor Coated Display Screen"
          caption="Figure 2.1: Internal Construction of Cathode Ray Tube (CRT) in an Oscilloscope"
          source="Wikimedia Commons"
          maxWidth="max-w-xl"
          fallback={
            <div className="p-4 rounded-lg bg-card text-center text-xs font-mono border border-border">
              <div className="font-bold text-primary mb-2">CRO Block Architecture</div>
              <div>[ Electron Gun ] ──► [ Y-Plates (Vertical) ] ──► [ X-Plates (Horizontal) ] ──► [ Phosphor Screen ]</div>
            </div>
          }
        />

        {/* Main Subsystems of CRO */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Major Functional Blocks of CRO</span>
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-primary">1. Electron Gun</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Cathode ko heat karke electrons emit karta hai, Control Grid intensity control karti hai, aur Pre-accelerating & Focusing Anodes unhe ek sharp narrow beam banate hain.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-emerald-600 dark:text-emerald-400">2. Y-Deflection Plates</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Vertical deflection plates jahan unknown input test voltage lagaya jata hai. Yeh beam ko vertical direction me up-down deflect karti hain.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-amber-500">3. Time Base Generator</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Sawtooth waveform generate karke <strong>X-Plates</strong> ko deta hai, jisse electron beam left se right constant velocity ke sath sweep karti hai (Time axis create hota hai).
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-purple-500">4. Phosphor Screen</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Glass tube ke end par lagi phosphor coating. High-energy electrons takrate hi fluorescent green glow produce karte hain jisse wave visible hoti hai.
            </p>
          </div>
        </div>

        {/* Quantities Measured by CRO */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Key Parameters Measured using CRO</span>
        </h3>

        <div className="space-y-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">1. Peak-to-Peak Voltage (V_p-p):</strong>
            Screen par wave ki vertical height (number of divisions) ko vertical sensitivity knob (Volts/Div) se multiply karke nikalte hain:
            <br /><span className="font-mono text-primary font-bold">V_p-p = (Vertical Divisions) × (Volts/Div Knob Setting)</span>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">2. Time Period (T) and Frequency (f):</strong>
            Ek complete cycle ki horizontal width ko Time/Div knob setting se multiply karke Time Period T milta hai, jiska reciprocal frequency hoti hai:
            <br /><span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">T = (Horizontal Divisions) × (Time/Div),  f = 1 / T</span>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">3. Phase Difference (Lissajous Figures):</strong>
            Dono X aur Y plates par alag-alag sinusoidal voltages lagane par screen par geometric patterns (circle, ellipse, straight line) bante hain jise <strong>Lissajous Patterns</strong> kehte hain, jisse dono waves ka phase difference φ calculate hota hai.
          </div>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-primary">Exam Point (याद रखो):</strong>
            Ammeter aur Voltmeter ka conversion aur CRO ka block diagram har saal BTEUP exam me aate hain. Yaad rakhein: <em>Ammeter = Low resistance Shunt in Parallel</em>, jabki <em>Voltmeter = High resistance Multiplier in Series</em>.
          </div>
        </div>
      </section>
    </article>
  );
};

export default FeeeUnit2Content;
