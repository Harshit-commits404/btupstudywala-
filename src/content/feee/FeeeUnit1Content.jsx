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
  Cpu,
  Layers,
  Activity,
  ArrowRight,
  ShieldCheck,
  Minimize2,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const FeeeUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
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
            Overview of Electronic Components & Semiconductors
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Active vs Passive Components</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Resistor, Capacitor, Inductor</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Semiconductor Physics (Intrinsic vs Extrinsic)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">PN Junction Diode & V-I Curve</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">BJT (NPN & PNP) & Transistor Biasing</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Electronic circuits ka basic foundation: Active aur Passive components ka antar, Silicon/Germanium semiconductors ki physics, PN junction diode ka working mechanism, aur modern computing ke hero — Transistors (BJT) ka complete concept.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 1.1 Active and Passive Components */}
      {/* ========================================================= */}
      <section id="sec-1-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            1.1. Active and Passive Electronic Components
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
                Fundamental Difference: Active vs Passive Components
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Electronic circuits me use hone wale sabhi components ko unki energy delivering aur controlling ability ke aadhar par do categories me divide kiya jata hai: <strong>Active Components</strong> jo circuit me energy inject karte hain ya signal amplify kar sakte hain, aur <strong>Passive Components</strong> jo sirf energy consume ya store karte hain.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-base text-primary">Active Components</h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">Energy Source / Amplifier</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1 leading-relaxed">
              <li><strong>Function:</strong> Circuit me electric power deliver karte hain, electron flow ko actively control karte hain, aur weak signals ko amplify (gain create) kar sakte hain.</li>
              <li><strong>Requirement:</strong> Inhe kaam karne ke liye external DC power source (biasing) ki zaroorat hoti hai.</li>
              <li><strong>Examples:</strong> Transistors (BJT, MOSFET), Diodes, Operational Amplifiers (Op-Amps), Integrated Circuits (ICs), DC Voltage & Current sources.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-base text-emerald-600 dark:text-emerald-400">Passive Components</h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">Energy Consumer / Storage</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1 leading-relaxed">
              <li><strong>Function:</strong> Circuit me energy introduce nahi karte aur na hi power gain create kar sakte hain. Yeh electrical energy ko heat ke roop me dissipate karte hain ya electric/magnetic field me temporary store karte hain.</li>
              <li><strong>Requirement:</strong> Inhe operate karne ke liye kisi external DC bias voltage ki zaroorat nahi hoti.</li>
              <li><strong>Examples:</strong> Resistors, Capacitors, Inductors, Transformers.</li>
            </ul>
          </div>
        </div>

        {/* Detailed Breakdown of Passive R, L, C */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>The Big Three Passive Elements: Resistor, Capacitor, Inductor</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          {/* Resistor */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary">1. Resistor (R)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Electric current ke flow ka virodh (opposition) karta hai.
            </p>
            <div className="p-2 rounded bg-card border border-border font-mono text-xs text-primary font-bold">
              Formula: V = I · R<br />
              SI Unit: Ohm (Ω)
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Electrical energy ko heat ke roop me dissipate karta hai: $P = I^2 R$. Color code memory trick: <em>B B ROY Great Britain Very Good Wife</em>.
            </p>
          </div>

          {/* Capacitor */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400">2. Capacitor (C)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Do conductive plates ke beech dielectric medium me electrostatic field ke roop me charge store karta hai.
            </p>
            <div className="p-2 rounded bg-card border border-border font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
              Formula: Q = C · V<br />
              Energy: E = ½ C V² (Farads, F)
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              DC current ko block karta hai aur AC current ko pass hone deta hai. Voltage me sudden change ka virodh karta hai.
            </p>
          </div>

          {/* Inductor */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1.5">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-amber-500">3. Inductor (L)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Wire ki coil jo magnetic field me energy store karti hai jab current flow hota hai.
            </p>
            <div className="p-2 rounded bg-card border border-border font-mono text-xs text-amber-500 font-bold">
              Formula: V = L · (di/dt)<br />
              Energy: E = ½ L I² (Henry, H)
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              AC current ko block (reactance $X_L = 2\pi f L$) karta hai aur DC ko easily pass karta hai. Current me sudden change ka virodh karta hai.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.2 Semiconductors */}
      {/* ========================================================= */}
      <section id="sec-1-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            1.2. Semiconductor Physics: Energy Bands, Intrinsic & Extrinsic
          </h2>
        </div>

        {/* Energy Band Theory */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Energy Band Theory: Conductors vs Insulators vs Semiconductors</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Atoms me electrons ke allowed energy levels milkar continuous energy bands banate hain — <strong>Valence Band (VB)</strong> jisme valence electrons rehte hain, aur <strong>Conduction Band (CB)</strong> jisme free electrons current conduct karte hain. Dono ke beech ke gap ko <strong>Forbidden Energy Gap ($E_g$)</strong> kehte hain:
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">1. Conductors (Copper, Aluminium):</strong>
            Valence Band aur Conduction Band aapas me <strong>Overlap</strong> karte hain ($E_g \approx 0$). Room temperature par dher saare free electrons hote hain.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">2. Insulators (Glass, Rubber):</strong>
            Bohot bada forbidden gap hota hai ($E_g &gt; 5\text{ eV}$). Normal temperature par koi bhi electron jump karke CB me nahi ja sakta. Zero conductivity.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1 text-primary">3. Semiconductors (Si, Ge):</strong>
            Chhota energy gap hota hai: Silicon me $E_g = 1.1\text{ eV}$ aur Germanium me $E_g = 0.72\text{ eV}$. 0 Kelvin par insulator hote hain, lekin room temp par electrons jump karke conduction karte hain.
          </div>
        </div>

        {/* Intrinsic vs Extrinsic */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Intrinsic vs Extrinsic (N-Type & P-Type) Semiconductors</span>
        </h3>

        <div className="space-y-3 mb-6 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="font-bold text-slate-900 dark:text-white block text-sm mb-1">Intrinsic (Pure) Semiconductor:</strong>
            Pure Silicon ya Germanium crystal jisme koi impurity nahi hoti. Thermal excitation ke karan electron-hole pairs generate hote hain ($n_e = n_h$). Iski electrical conductivity bohot kam hoti hai.
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <strong className="font-bold text-slate-900 dark:text-white block text-sm">Extrinsic (Doped) Semiconductor:</strong>
            Conductivity badhane ke liye pure semiconductor me deliberately specific impurity atoms milaye jate hain — is process ko <strong>Doping</strong> kehte hain:
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                <strong className="text-blue-600 dark:text-blue-400 font-bold block mb-1">N-Type (Donor Impurity):</strong>
                Pure Silicon me <strong>Pentavalent</strong> impurity (Phosphorus, Arsenic, Antimony) milaane par banta hai. 4 valence electrons bond banate hain aur 5wa electron free ho jata hai.
                <br />• <strong>Majority Carriers:</strong> Free Electrons ($e^-$).
                <br />• <strong>Minority Carriers:</strong> Holes ($h^+$).
              </div>
              <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">P-Type (Acceptor Impurity):</strong>
                Pure Silicon me <strong>Trivalent</strong> impurity (Boron, Gallium, Indium) milaane par banta hai. Ek electron ki kami se ek khali jagah (vacancy) reh jati hai jise <strong>Hole</strong> kehte hain.
                <br />• <strong>Majority Carriers:</strong> Holes ($h^+$).
                <br />• <strong>Minority Carriers:</strong> Free Electrons ($e^-$).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.3 PN Junction Diode and Transistors */}
      {/* ========================================================= */}
      <section id="sec-1-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            1.3. PN Junction Diode & Bipolar Junction Transistor (BJT)
          </h2>
        </div>

        {/* PN Junction Working */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>PN Junction Diode: Formation & Biasing</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Jab P-type aur N-type semiconductors ko molecular level par join kiya jata hai, to boundary par electrons aur holes diffuse hokar recombine ho jate hain. Isse junction par immobile positive aur negative ions ki ek layer ban jati hai jise <strong>Depletion Layer</strong> kehte hain. Yeh ek internal electric field create karti hai jise <strong>Barrier Potential ($V_0$)</strong> kehte hain ($0.7\text{V}$ for Silicon, $0.3\text{V}$ for Germanium).
        </p>

        {/* Biasing Modes */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <strong className="text-emerald-600 dark:text-emerald-400 font-bold block text-sm">Forward Bias (Current Flows):</strong>
            P-region ko battery ke <strong>Positive (+)</strong> terminal se aur N-region ko <strong>Negative (-)</strong> terminal se connect kiya jata hai. External voltage barrier potential ($0.7\text{V}$) ko overcome karke depletion layer ko patla kar deta hai, aur heavy forward current (milliamperes me) flow hota hai.
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <strong className="text-rose-500 font-bold block text-sm">Reverse Bias (Current Blocked):</strong>
            P-region ko battery ke <strong>Negative (-)</strong> terminal se aur N-region ko <strong>Positive (+)</strong> se connect karte hain. External field depletion layer ko aur chouda (wide) kar deti hai. Sirf bohot chhota microampere reverse saturation current flow hota hai. Diode ek open switch ki tarah behave karta hai.
          </div>
        </div>

        {/* Embedded Figure: Diode Symbol & Pinout */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Diode_pinout_en.svg/640px-Diode_pinout_en.svg.png"
          alt="PN junction diode circuit symbol showing Anode and Cathode terminals with physical package marking band"
          caption="Figure 1.1: PN Junction Diode Circuit Symbol (Anode & Cathode) and Physical Diode Orientation"
          source="Wikimedia Commons"
          maxWidth="max-w-md"
          fallback={
            <div className="p-4 rounded-lg bg-card text-center text-xs font-mono border border-border">
              <div className="font-bold text-primary mb-2">Diode Schematic Symbol</div>
              <div>Anode (+) ──▶|── Cathode (-)</div>
            </div>
          }
        />

        {/* Transistors (BJT) */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Bipolar Junction Transistor (BJT: NPN & PNP)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          <strong>Transistor</strong> ek 3-terminal, 2-junction semiconductor device hai jo signals ko amplify karne aur ultra-fast electronic switch ki tarah kaam karne ke liye use hota hai. BJT me current electrons aur holes dono carriers ke karan flow hota hai (isliye "Bipolar"):
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">1. Emitter (E):</strong>
            Heavily doped section jo majority charge carriers (electrons in NPN) ko base me emit (inject) karta hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">2. Base (B):</strong>
            Center me located extremely thin ($&lt; 1\,\mu\text{m}$) aur lightly doped layer jo emitter se aane wale 95-98% carriers ko collector tak pass kar deta hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">3. Collector (C):</strong>
            Size me sabse bada (taaki heat dissipate kar sake) aur moderately doped section jo carriers ko collect karta hai.
          </div>
        </div>

        {/* Golden Rule of Transistor Biasing */}
        <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 text-xs sm:text-sm space-y-2 mb-6">
          <strong className="font-bold text-primary block text-sm">Golden Rule of BJT Biasing in Active Mode (Amplifier):</strong>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Emitter-Base Junction (EBJ):</strong> Hamesha <strong>Forward Biased</strong> hona chahiye.</li>
            <li><strong>Collector-Base Junction (CBJ):</strong> Hamesha <strong>Reverse Biased</strong> hona chahiye.</li>
            <li><strong>Current Equation:</strong> <span className="font-mono font-bold text-primary">$I_E = I_B + I_C$</span> (jahan Base current $I_B$ microamperes me hota hai aur Collector current $I_C$ milliamperes me hota hai).</li>
          </ul>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-amber-800 dark:text-amber-300">Exam Point (याद रखो):</strong>
            NPN transistor PNP transistor se superior kyon hota hai? <em>NPN me majority charge carriers free electrons hote hain, jinki mobility holes se lagbhag 2.5 times zyada hoti hai. Isliye NPN transistor high frequency par fast switching perform karta hai.</em>
          </div>
        </div>
      </section>
    </article>
  );
};

export default FeeeUnit1Content;
