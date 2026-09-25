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

export const AppliedChemistryUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
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
            Chemistry of Fuels and Lubricants
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (ईंधन एवं स्नेहक का रसायन)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Fuels & Combustion</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Calorific Value</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Fuel Rating</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">LPG/CNG & Gases</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Lubrication Basics</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Properties of Lubricants</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Industry aur machines ko chalane ke liye energy (Fuel) aur smoothly run karne ke liye tel/grease (Lubricants) ki zarurat hoti hai. Is unit me hum in dono ki chemical properties aur unki rating padhenge.
        </p>
      </header>

      {/* 4.1 FUELS */}
      <section id="sec-4-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Fuels (ईंधन)
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          <strong>Fuel:</strong> Aisa koi bhi combustible (jalne wala) padarth jise hawa (oxygen) me jalane par badi matra me heat aur light (energy) milti hai, jiska use hum gharelu ya industrial kamo me kar sakte hain. <br/>
          <strong>Combustion:</strong> Fuel ka oxygen ke sath react karke jalna aur energy (exothermic reaction) nikalna.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Classification of Fuels</span>
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">Physical state (bhautik awastha) ke aadhar par fuels ko 3 bhago me banta gaya hai:</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-slate-700 dark:text-slate-300">
          <li className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded border border-slate-200 dark:border-slate-700">
            <strong>Solid Fuels:</strong> Wood, Coal (Koyla), Coke, Charcoal.
          </li>
          <li className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded border border-slate-200 dark:border-slate-700">
            <strong>Liquid Fuels:</strong> Petrol, Diesel, Kerosene (Mitti ka tel), Fuel oil.
          </li>
          <li className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded border border-slate-200 dark:border-slate-700">
            <strong>Gaseous Fuels:</strong> LPG, CNG, Biogas, Water gas, Producer gas.
          </li>
        </ul>
      </section>

      {/* 4.2 CALORIFIC VALUE */}
      <section id="sec-4-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Calorific Value (ऊष्मीय मान)
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Ek unit mass (1 kg ya 1 gram) fuel ko puri tarah jalane (complete combustion) par jitni heat energy nikalti hai, use fuel ki Calorific Value kehte hain. Iski unit kcal/kg ya kJ/kg hoti hai. Iske 2 types hain:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">HCV (Higher / Gross Calorific Value)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Jab fuel ko jalaya jata hai aur usme se nikli hui gas (water vapor) ko room temperature par thanda kiya jata hai, tab jo total heat milti hai. (Water vapor ke liquid banne par uski latent heat bhi count hoti hai).
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">LCV (Lower / Net Calorific Value)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Jab fuel ko jalane ke baad gases ko thanda nahi kiya jata, balke unhe as a vapor escape hone diya jata hai. Ye actual usable heat hoti hai.
            </p>
          </div>
        </div>

        <div className="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded text-brand-700 dark:text-brand-400 mb-6 text-center">
          Difference: LCV = HCV - (Latent heat of water vapor formed)
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Dulong's Formula (For calculating HCV and LCV)</span>
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-6">
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Agar kisi fuel me Carbon (C), Hydrogen (H), Oxygen (O) aur Sulphur (S) ka percentage (%) diya ho, toh Dulong's formula se calorific value nikali ja sakti hai:</p>
          <div className="font-mono text-sm bg-white dark:bg-slate-900 p-3 rounded border border-emerald-200 dark:border-emerald-800 space-y-2 text-emerald-800 dark:text-emerald-400 font-bold overflow-x-auto">
            <div>HCV = (1/100) × [ 8080(C) + 34500(H - O/8) + 2240(S) ] kcal/kg</div>
            <div>LCV = [ HCV - (9/100) × H × 587 ] kcal/kg</div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-5 rounded-lg">
          <h4 className="font-bold text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" /> Solved Numerical
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Q:</strong> Ek coal sample me C = 80%, H = 5%, O = 4% aur S = 2% hai. HCV calculate karein.</p>
          <div className="font-mono text-sm bg-white dark:bg-slate-800 p-3 rounded border border-amber-200 dark:border-amber-800 space-y-1">
            <div>Given: C=80, H=5, O=4, S=2</div>
            <div>Formula: HCV = 1/100 [ 8080×C + 34500(H - O/8) + 2240×S ]</div>
            <div>Substitution: HCV = 1/100 [ 8080(80) + 34500(5 - 4/8) + 2240(2) ]</div>
            <div>Calculation: = 1/100 [ 646400 + 34500(4.5) + 4480 ]</div>
            <div>= 1/100 [ 646400 + 155250 + 4480 ] = 1/100 [ 806130 ]</div>
            <div className="text-brand-600 dark:text-brand-400 font-bold">Final Answer: HCV = 8061.3 kcal/kg</div>
          </div>
        </div>
      </section>

      {/* 4.3 FUEL RATING */}
      <section id="sec-4-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Fuel Rating (Octane & Cetane Number)
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Jab engines me fuel time se pehle jalne lagta hai, toh engine ek ajeeb metallic aawaz (Knocking) nikalta hai, jo engine ke liye nuksan-dayak hai. Knocking se bachne ke liye acchi quality ka fuel chahiye, jiski rating in numbers se hoti hai:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">Octane Number (For Petrol)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Petrol ki anti-knocking quality measure karta hai. Iso-octane ko 100 aur n-heptane ko 0 rating di jati hai.<br/>
              <strong>Significance:</strong> Jitna high Octane Number, petrol utna accha aur knocking utni kam.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">Cetane Number (For Diesel)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Diesel ke ignition quality (jaldi jalne ki property) ko measure karta hai. Cetane ko 100 aur alpha-methyl naphthalene ko 0 rating di jati hai.<br/>
              <strong>Significance:</strong> Jitna high Cetane Number, diesel engine utna smooth chalega (Ignition delay kam hoga).
            </p>
          </div>
        </div>
      </section>

      {/* 4.4 IMPORTANT FUELS */}
      <section id="sec-4-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Important Gaseous Fuels
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px] text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80">
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Fuel</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Chemical Composition</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Calorific Value</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-bold">Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-800 dark:text-slate-200">LPG</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400">Butane & Iso-butane (Main) + Propane</td>
                <td className="p-3">~ 27000 kcal/m³</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Domestic cooking cylinder, vehicles.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-800 dark:text-slate-200">CNG</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400">Methane (CH₄) (85-90%)</td>
                <td className="p-3">~ 12500 kcal/m³</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Eco-friendly vehicle fuel (Autos, buses).</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-800 dark:text-slate-200">Water Gas</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400">CO + H₂ (Mixture)</td>
                <td className="p-3">~ 2800 kcal/m³</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Industrial fuel, H₂ gas production.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-800 dark:text-slate-200">Producer Gas</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400">CO + N₂ (N₂ acts as inert gas)</td>
                <td className="p-3">~ 1300 kcal/m³</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Heating furnaces (metallurgy) due to low cost.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-800 dark:text-slate-200">Coal Gas</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400">H₂, CH₄, CO</td>
                <td className="p-3">~ 5000 kcal/m³</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Illuminant, domestic and industrial fuel.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-800 dark:text-slate-200">Biogas</td>
                <td className="p-3 font-mono text-brand-600 dark:text-brand-400">Methane (50-60%) + CO₂ + H₂S</td>
                <td className="p-3">~ 4500 kcal/m³</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Village cooking, small-scale electricity.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4.5 & 4.6 & 4.7 LUBRICANTS */}
      <section id="sec-4-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTIONS 4.5, 4.6 & 4.7
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Lubricants (स्नेहक)
          </h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Machine ke do moving parts (jaise gears) ke beech friction (gharsan), wear and tear (ghisna) aur heat ko kam karne ke liye jo substances lagaye jate hain (jaise oil, grease), unhe <strong>Lubricants</strong> kehte hain. Is process ko <strong>Lubrication</strong> kehte hain.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Classification of Lubricants</span>
        </h3>
        <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 mb-6 space-y-1">
          <li><strong>Liquid Lubricants:</strong> Mineral oils, Vegetable oils, Synthetic oils.</li>
          <li><strong>Semi-solid Lubricants:</strong> Greases, Vaseline. (Jaha liquid oil beh jaye, waha grease use karte hain).</li>
          <li><strong>Solid Lubricants:</strong> Graphite, Molybdenum disulphide (MoS₂). (Heavy machinery aur high temperature ke liye).</li>
        </ul>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Physical Properties of Lubricants</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Viscosity (श्यानता)</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">Oil ke behne (flow) ki rukawat/gadhapan. Light machines me low viscosity oil, heavy me high.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Viscosity Index (VI)</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">Temperature badhne par viscosity kitni tezi se girti hai. High VI wala lubricant accha mana jata hai.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Flash Point & Fire Point</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              <strong>Flash pt:</strong> Wo low temp jaha oil ki vapor aag ki chingari pakad ke turant bujh jaye.<br/>
              <strong>Fire pt:</strong> Jaha oil ki vapor kam se kam 5 second tak jalti rahe. (Good oil ka flash point high hona chahiye).
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Cloud Point & Pour Point</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              <strong>Cloud pt:</strong> Wo temp jab oil thanda hokar cloudy (dhundhla) ho jaye.<br/>
              <strong>Pour pt:</strong> Wo temp jab oil behna (flow karna) band kar de. (Cold countries me low pour pt chahiye).
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Chemical Properties of Lubricants</span>
        </h3>
        <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <li className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded border border-slate-200 dark:border-slate-700">
            <strong>Total Acid Number (TAN):</strong> Oil me kitna free acid (gandagi) hai. 1g oil ko neutralize karne me jitna KOH (mg) lagta hai. High TAN matlab oil kharab hai aur machine ko corrode karega.
          </li>
          <li className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded border border-slate-200 dark:border-slate-700">
            <strong>Saponification Value:</strong> 1g oil (ester) ko sabun (saponify) banane ke liye kitna KOH (mg) chahiye. Mineral oils ka saponification zero hota hai. Ye mixing (adulteration) check karne kaam aata hai.
          </li>
          <li className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded border border-slate-200 dark:border-slate-700">
            <strong>Coke Number:</strong> Jab oil ko bina hawa ke high temp par jalaya jata hai, toh kitna carbon (coke) bachta hai. Low coke number wala oil accha hota hai.
          </li>
        </ul>
      </section>

    </article>
  );
};

export default AppliedChemistryUnit4Content;
