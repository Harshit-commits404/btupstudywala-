import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LearningLayout } from '../components/learning/LearningLayout';
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

export const ChapterPage = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: 'Semesters', to: '/semesters' },
    { label: '1st Semester', to: '/semester/1' },
    { label: 'Applied Physics - 1', to: '/subject/applied-physics-1' },
    { label: 'Chapter 1: Units and Dimensions' },
  ];

  const sections = [
    { id: 'sec-1-1', title: '1.1 Need of Measurement & Units' },
    { id: 'sec-1-2', title: '1.2 Dimensions & Dimensional Formulae' },
    { id: 'sec-1-3', title: '1.3 Principle of Homogeneity' },
    { id: 'sec-1-4', title: '1.4 Dimensional Equations & Applications' },
    { id: 'sec-1-5', title: '1.5 Limitations of Dimensional Analysis' },
    { id: 'exam-focus', title: '★ Exam Focus (Important Questions)' },
    { id: 'quick-revision', title: '⚡ Last Minute Quick Revision' },
  ];

  const handleBackToSubject = () => {
    navigate('/subject/applied-physics-1');
  };

  return (
    <LearningLayout
      breadcrumbItems={breadcrumbItems}
      chapterNumber="01"
      chapterTitle="Units and Dimensions"
      subjectName="Applied Physics - 1"
      duration="6 Periods"
      sections={sections}
      onBackToSubject={handleBackToSubject}
    >
      <article className="study-section-reveal text-slate-800 dark:text-slate-200">
        {/* ========================================================= */}
        {/* CHAPTER TITLEPLATE / HERO HEADER */}
        {/* ========================================================= */}
        <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
          {/* Top Badges Meta Strip */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>CHAPTER 01</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
              Applied Physics - 1 (Paper Code: 2001)
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
              <Clock className="w-3.5 h-3.5" />
              <span>Syllabus: 6 Periods</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-medium border border-amber-500/20">
              <Award className="w-3.5 h-3.5" />
              <span>Weightage: 8–10 Marks</span>
            </span>
          </div>

          {/* Prominent Bilingual Chapter Title */}
          <div className="space-y-1 mb-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
              Units and Dimensions
            </h1>
            <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
              (इकाई एवं विमाएं)
            </p>
          </div>

          {/* Chapter Syllabus Topics Chip Bar */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Need of Measurement</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Fundamental & Derived Units</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">FPS, CGS & SI Systems</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Dimensions</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Principle of Homogeneity</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Applications & Limitations</span>
          </div>

          {/* Editorial Introduction */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
            Physics basically measurement ka science hai. Kisi bhi engineering branch (Mechanical, Civil, Electrical, CS, Electronics) mein machines ki designing, components ki manufacturing tolerances, electrical circuits aur structural load calculations ke liye accurate measurement aur units ka gyan sabse pehla basic requirement hota hai. Is chapter mein hum measurement ki zaroorat, units ke types, systems of units (FPS, CGS, SI), dimensions, Principle of Homogeneity aur dimensional analysis ke teen pramukh applications ko detail mein samjhenge.
          </p>
        </header>

        {/* ========================================================= */}
        {/* 1.1 NEED OF MEASUREMENT AND UNITS */}
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
              Need of Measurement in Engineering and Science
            </h2>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              (इंजीनियरिंग एवं विज्ञान में मापन की आवश्यकता)
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">
            Measurement ka simple meaning hai kisi anjaan physical quantity ko ek standard unit ke saath compare karna. Daily life se lekar heavy engineering industries tak, bina accurate measurement ke koi bhi calculation ya manufacturing sambhav nahi hai.
          </p>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
            <span>Need of Measurement in Engineering</span>
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">
            Engineering mein precision (shuddhata) sabse important hoti hai:
          </p>
          <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
            <li><strong>Component Fitting & Tolerances:</strong> Automobile engine ke piston aur cylinder ke beech micron-level ka clearance hota hai. Agar measurement galat ho jaye to engine jam ho jayega.</li>
            <li><strong>Structural Design:</strong> Civil engineering mein bridge ya building banate samay concrete aur steel ki load-bearing capacity ka exact quantitative measurement zaroori hota hai.</li>
            <li><strong>Electrical Standards:</strong> Circuit mein voltage, current aur resistance ko exact values ke saath measure karna padta hai taaki devices safely operate kar sakein.</li>
          </ul>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
            <span>Need of Measurement in Science</span>
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">
            Science tab tak scientific nahi ban sakti jab tak observations ko numbers mein measure na kiya jaye.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
            Famous physicist <strong>Lord Kelvin</strong> ne kaha tha: <em>"When you can measure what you are speaking about, and express it in numbers, you know something about it; but when you cannot measure it, your knowledge is of a meager and unsatisfactory kind."</em> Kisi bhi physical law ko formulate aur experimentally verify karne ke liye measurement zaroori hai.
          </p>

          {/* Physical Quantity Definition Placard */}
          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-2">
            Physical Quantity (भौतिक राशि)
          </h3>

          <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Definition • Physical Quantity</span>
            </div>
            <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
              "Any quantity that can be measured directly or indirectly, and in terms of which the laws of physics are expressed, is called a physical quantity."
            </blockquote>
            <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Aisi koi bhi rashi jise directly ya indirectly naapa ya tola ja sake aur jiske roop mein physics ke niyam express kiye ja sakein, use Physical Quantity kehte hain (jaise Length, Mass, Time, Force, Energy).
              </span>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
            Kisi bhi physical quantity ke measurement ko express karne ke liye do cheezon ki zaroorat hoti hai:
          </p>

          {/* DEDICATED FORMULA PRESENTATION */}
          <div className="study-formula-block">
            <div className="text-[11px] font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold mb-1">
              Fundamental Measurement Relation
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-widest my-2 select-all">
              Q = n × u
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Q : Physical Quantity</span>
              <span className="px-2 py-0.5 rounded bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">n : Numerical Value (संख्यात्मक मान)</span>
              <span className="px-2 py-0.5 rounded bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">u : Unit (मात्रक)</span>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
            Kyunki magnitude constant rehta hai, isliye <code>n₁u₁ = n₂u₂ = Constant</code>, yaani <code>n ∝ 1/u</code>. Badi unit use karne par numerical value choti aati hai, aur choti unit use karne par numerical value badi ho jaati hai (jaise <code>1 metre = 100 cm</code>).
          </p>

          {/* Unit Definition Placard */}
          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-2">
            Unit (मात्रक)
          </h3>

          <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Definition • Unit (मात्रक)</span>
            </div>
            <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
              "A standard reference chosen to measure a physical quantity is called a unit."
            </blockquote>
            <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Kisi physical quantity ko measure karne ke liye chuna gaya ek nishchit standard reference hi Unit kehlata hai.
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-2">
            Fundamental Units and Derived Units
          </h3>

          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">
            Physical quantities ke units ko do categories mein divide kiya jata hai:
          </p>

          <ol className="list-decimal list-outside space-y-2 text-slate-700 dark:text-slate-300 text-base mb-6 pl-5">
            <li>
              <strong>Fundamental Units (मूल मात्रक):</strong> Ve units jo ek doosre se poori tarah independent hoti hain aur jinhe kisi aur unit mein break nahi kiya ja sakta. SI system mein 7 fundamental quantities hain:
              <span className="block mt-1 pl-3 text-sm font-mono text-slate-600 dark:text-slate-400">
                Length (m), Mass (kg), Time (s), Electric Current (A), Temperature (K), Luminous Intensity (cd), Amount of Substance (mol).
              </span>
            </li>
            <li>
              <strong>Derived Units (व्युत्पन्न मात्रक):</strong> Ve units jo fundamental units ko multiply ya divide karke prapt ki jaati hain (jaise m/s, m/s², kg·m/s² yaani Newton, Joule, Watt).
            </li>
          </ol>

          {/* Academic Table: Fundamental vs Derived */}
          <div className="my-6">
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Table 1.1 • Fundamental vs Derived Units</span>
              <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
            </div>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
              <table className="w-full text-left border-collapse text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                    <th className="py-3 px-4">Parameter</th>
                    <th className="py-3 px-4">Fundamental Units</th>
                    <th className="py-3 px-4">Derived Units</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300">
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Dependency</td>
                    <td className="py-2.5 px-4">Independent hoti hain</td>
                    <td className="py-2.5 px-4">Fundamental units par depend karti hain</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Resolution</td>
                    <td className="py-2.5 px-4">Inhe further simple units mein toda nahi ja sakta</td>
                    <td className="py-2.5 px-4">Inhe fundamental units ke terms mein toda ja sakta hai</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Total Count</td>
                    <td className="py-2.5 px-4 font-semibold text-brand-600 dark:text-brand-400">Only 7 in SI (+ 2 Supplementary: Radian, Steradian)</td>
                    <td className="py-2.5 px-4">Asankhya (infinite/unlimited)</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Examples</td>
                    <td className="py-2.5 px-4 font-mono text-xs">Metre (m), Kilogram (kg), Second (s)</td>
                    <td className="py-2.5 px-4 font-mono text-xs">Newton (N), Joule (J), Watt (W), m/s²</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Systems of Units */}
          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
            Systems of Units: FPS, CGS and SI Units
          </h3>

          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
            Itihaas mein measurement ke teen sabse popular systems use kiye gaye hain:
          </p>

          <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-2">
            <li><strong>1. FPS System (Foot-Pound-Second):</strong> British engineering system jisme length ko Foot, mass ko Pound (lb), aur time ko Second mein maapa jata hai.</li>
            <li><strong>2. CGS System (Centimetre-Gram-Second):</strong> Metric system jisme length ko Centimetre (cm), mass ko Gram (g), aur time ko Second (s) mein maapa jata hai.</li>
            <li><strong>3. SI System (Système International):</strong> Internationally accepted standard system jo MKS (Metre-Kilogram-Second) system ka extended aur rationalized version hai.</li>
          </ul>

          {/* Academic Table: FPS vs CGS vs SI */}
          <div className="my-6">
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Table 1.2 • Comparison of Three Major Systems of Units</span>
              <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
            </div>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
              <table className="w-full text-left border-collapse text-sm min-w-[540px]">
                <thead>
                  <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                    <th className="py-3 px-4">Physical Quantity</th>
                    <th className="py-3 px-4">FPS System</th>
                    <th className="py-3 px-4">CGS System</th>
                    <th className="py-3 px-4 bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                      SI (MKS) System ★
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 font-mono text-xs sm:text-sm">
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-sans font-medium text-slate-900 dark:text-slate-100">Length</td>
                    <td className="py-2.5 px-4">Foot (ft)</td>
                    <td className="py-2.5 px-4">Centimetre (cm)</td>
                    <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400 bg-brand-500/[0.04]">Metre (m)</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-sans font-medium text-slate-900 dark:text-slate-100">Mass</td>
                    <td className="py-2.5 px-4">Pound (lb)</td>
                    <td className="py-2.5 px-4">Gram (g)</td>
                    <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400 bg-brand-500/[0.04]">Kilogram (kg)</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-sans font-medium text-slate-900 dark:text-slate-100">Time</td>
                    <td className="py-2.5 px-4">Second (s)</td>
                    <td className="py-2.5 px-4">Second (s)</td>
                    <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400 bg-brand-500/[0.04]">Second (s)</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-sans font-medium text-slate-900 dark:text-slate-100">Force</td>
                    <td className="py-2.5 px-4">Poundal / lbf</td>
                    <td className="py-2.5 px-4">Dyne</td>
                    <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400 bg-brand-500/[0.04]">Newton (N)</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-sans font-medium text-slate-900 dark:text-slate-100">Work / Energy</td>
                    <td className="py-2.5 px-4">Foot-pound (ft·lb)</td>
                    <td className="py-2.5 px-4">Erg</td>
                    <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400 bg-brand-500/[0.04]">Joule (J)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 1.2 DIMENSIONS AND DIMENSIONAL FORMULAE */}
        {/* ========================================================= */}
        <section id="sec-1-2" className="scroll-mt-24 pt-4 mb-16">
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                SECTION 1.2
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Dimensions and Dimensional Formulae
            </h2>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              (विमाएं एवं विमीय सूत्र)
            </div>
          </div>

          <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Definition • Dimensions (विमाएं)</span>
            </div>
            <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
              "The dimensions of a physical quantity are the powers (exponents) to which the fundamental base quantities must be raised to represent that quantity."
            </blockquote>
            <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Kisi derived quantity ko express karne ke liye fundamental quantities (Mass, Length, Time, etc.) par jo powers lagayi jaati hain, unhe us quantity ki Dimensions kehte hain.
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-2">
            Fundamental Symbols Used in Dimensional Analysis
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">
            Dimensional analysis mein base quantities ko square brackets ke andar specific symbols se likha jata hai:
          </p>

          {/* Academic Compact Symbols Row */}
          <div className="my-5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 flex flex-wrap items-center justify-around gap-4 text-sm font-mono">
            <div className="flex items-center gap-1.5"><span className="text-slate-500 font-sans text-xs">Mass:</span> <strong className="text-brand-600 dark:text-brand-400 font-bold">[M]</strong></div>
            <div className="flex items-center gap-1.5"><span className="text-slate-500 font-sans text-xs">Length:</span> <strong className="text-brand-600 dark:text-brand-400 font-bold">[L]</strong></div>
            <div className="flex items-center gap-1.5"><span className="text-slate-500 font-sans text-xs">Time:</span> <strong className="text-brand-600 dark:text-brand-400 font-bold">[T]</strong></div>
            <div className="flex items-center gap-1.5"><span className="text-slate-500 font-sans text-xs">Current:</span> <strong className="text-brand-600 dark:text-brand-400 font-bold">[A]</strong></div>
            <div className="flex items-center gap-1.5"><span className="text-slate-500 font-sans text-xs">Temperature:</span> <strong className="text-brand-600 dark:text-brand-400 font-bold">[K]</strong></div>
          </div>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-2">
            How to Write a Dimensional Formula
          </h3>

          <div className="my-5 pl-4 border-l-2 border-slate-300 dark:border-slate-700 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div><span className="font-bold text-slate-900 dark:text-white mr-2">Step 1:</span> Physical quantity ka basic definition ya formula likhein (e.g. Velocity = Displacement / Time).</div>
            <div><span className="font-bold text-slate-900 dark:text-white mr-2">Step 2:</span> Har factor ko fundamental quantities (Mass, Length, Time) mein express karein.</div>
            <div><span className="font-bold text-slate-900 dark:text-white mr-2">Step 3:</span> Unke standard symbols <code>[M]</code>, <code>[L]</code>, <code>[T]</code> substitute karein.</div>
            <div><span className="font-bold text-slate-900 dark:text-white mr-2">Step 4:</span> Powers ko simplify karke square bracket <code>[Mᵃ Lᵇ Tᶜ]</code> mein band karein.</div>
          </div>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            Derivations of Common Physical Quantities
          </h3>

          {/* Worked Textbook Derivations List */}
          <div className="divide-y divide-slate-200 dark:divide-slate-800 my-6">
            {/* Velocity */}
            <div className="py-4 first:pt-0">
              <div className="flex items-baseline justify-between mb-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  1. Velocity / Speed (वेग / चाल)
                </h4>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  [M⁰ L¹ T⁻¹]
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-3 border-l-2 border-slate-200 dark:border-slate-700">
                <div>Formula = Displacement / Time</div>
                <div>Dimensions = [L] / [T] = [L T⁻¹]</div>
                <div className="font-bold text-slate-800 dark:text-slate-200">Standard Form: [M⁰ L¹ T⁻¹]</div>
              </div>
            </div>

            {/* Acceleration */}
            <div className="py-4">
              <div className="flex items-baseline justify-between mb-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  2. Acceleration (त्वरण)
                </h4>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  [M⁰ L¹ T⁻²]
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-3 border-l-2 border-slate-200 dark:border-slate-700">
                <div>Formula = Change in Velocity / Time</div>
                <div>Dimensions = [L T⁻¹] / [T]</div>
                <div className="font-bold text-slate-800 dark:text-slate-200">Standard Form: [M⁰ L¹ T⁻²]</div>
              </div>
            </div>

            {/* Force */}
            <div className="py-4">
              <div className="flex items-baseline justify-between mb-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  3. Force (बल)
                </h4>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  [M¹ L¹ T⁻²]
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-3 border-l-2 border-slate-200 dark:border-slate-700">
                <div>Formula = Mass × Acceleration</div>
                <div>Dimensions = [M] × [L T⁻²]</div>
                <div className="font-bold text-slate-800 dark:text-slate-200">Standard Form: [M¹ L¹ T⁻²]</div>
              </div>
            </div>

            {/* Work */}
            <div className="py-4">
              <div className="flex items-baseline justify-between mb-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  4. Work / Energy (कार्य / ऊर्जा)
                </h4>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  [M¹ L² T⁻²]
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-3 border-l-2 border-slate-200 dark:border-slate-700">
                <div>Formula = Force × Displacement</div>
                <div>Dimensions = [M L T⁻²] × [L]</div>
                <div className="font-bold text-slate-800 dark:text-slate-200">Standard Form: [M¹ L² T⁻²]</div>
              </div>
            </div>

            {/* Power */}
            <div className="py-4">
              <div className="flex items-baseline justify-between mb-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  5. Power (शक्ति)
                </h4>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  [M¹ L² T⁻³]
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-3 border-l-2 border-slate-200 dark:border-slate-700">
                <div>Formula = Work / Time</div>
                <div>Dimensions = [M L² T⁻²] / [T]</div>
                <div className="font-bold text-slate-800 dark:text-slate-200">Standard Form: [M¹ L² T⁻³]</div>
              </div>
            </div>

            {/* Density */}
            <div className="py-4">
              <div className="flex items-baseline justify-between mb-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  6. Density (घनत्व)
                </h4>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  [M¹ L⁻³ T⁰]
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-3 border-l-2 border-slate-200 dark:border-slate-700">
                <div>Formula = Mass / Volume</div>
                <div>Dimensions = [M] / [L³]</div>
                <div className="font-bold text-slate-800 dark:text-slate-200">Standard Form: [M¹ L⁻³ T⁰]</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 1.3 PRINCIPLE OF HOMOGENEITY */}
        {/* ========================================================= */}
        <section id="sec-1-3" className="scroll-mt-24 pt-4 mb-16">
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                SECTION 1.3
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Principle of Homogeneity of Dimensions
            </h2>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              (विमाओं की समांगता का सिद्धांत)
            </div>
          </div>

          <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Principle Statement • Homogeneity</span>
            </div>
            <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
              "An equation is dimensionally homogeneous when the dimensions of all terms on both sides of the physical equation are the same."
            </blockquote>
            <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Kisi bhi physical equation ke sahi hone ke liye equation ke dono paksho (LHS aur RHS) ke har ek term ki dimensions bilkul barabar honi chahiye.
              </span>
            </div>
          </div>

          {/* Highlighted Important Point */}
          <div className="my-6 pl-4 border-l-[3.5px] border-amber-500 bg-amber-500/[0.06] py-3.5 pr-4 rounded-r-md text-sm sm:text-base">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>IMPORTANT • Addition & Subtraction Rule</span>
            </div>
            <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
              Aap keval unhi quantities ko add (+) ya subtract (-) kar sakte hain jinki dimensions bilkul saman hon. Jaise: <strong>Length + Length = Length</strong>. Lekin aap 5 kg Mass mein 3 metre Length ko kabhi add nahi kar sakte!
            </p>
          </div>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            Worked Homogeneity Verification Examples
          </h3>

          <div className="space-y-6">
            {/* Example 1: s = ut + 1/2 at^2 */}
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Example 01 • Equation Verification
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Valid Equation
                </span>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-base">
                Check the correctness of the equation: s = ut + ½ at²
              </p>
              <div className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 pl-3 border-l-2 border-brand-500/40">
                <div>• LHS = [s] = [L]</div>
                <div>• RHS Term 1 = [ut] = [L T⁻¹] × [T] = [L]</div>
                <div>• RHS Term 2 = [½ at²] = [1] × [L T⁻²] × [T²] = [L]  (½ is a dimensionless number)</div>
              </div>
              <div className="pt-2 text-xs sm:text-sm font-sans font-bold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>Conclusion:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">LHS = RHS Term 1 = RHS Term 2 = [L] (Homogeneous)</span>
              </div>
            </div>

            {/* Example 2: v = u + at */}
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Example 02 • Velocity Equation
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Valid Equation
                </span>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-base">
                Check the correctness of the equation: v = u + at
              </p>
              <div className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 pl-3 border-l-2 border-brand-500/40">
                <div>• LHS = [v] = [L T⁻¹]</div>
                <div>• RHS Term 1 = [u] = [L T⁻¹]</div>
                <div>• RHS Term 2 = [at] = [L T⁻²] × [T] = [L T⁻¹]</div>
              </div>
              <div className="pt-2 text-xs sm:text-sm font-sans font-bold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>Conclusion:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">[v] = [u] = [at] = [L T⁻¹] (Homogeneous)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 1.4 DIMENSIONAL EQUATIONS AND APPLICATIONS */}
        {/* ========================================================= */}
        <section id="sec-1-4" className="scroll-mt-24 pt-4 mb-16">
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                SECTION 1.4
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Dimensional Equations and Their Applications
            </h2>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              (विमीय समीकरण एवं उनके अनुप्रयोग)
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
            Jab kisi physical quantity ko uske dimensional formula ke barabar equate kiya jata hai (jaise <code>[F] = [M¹ L¹ T⁻²]</code>), to use <strong>Dimensional Equation</strong> kehte hain. Dimensional equations ke teen mukhya applications hote hain:
          </p>

          {/* APPLICATION 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                APPLICATION 1
              </span>
              <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100">
                Conversion of Numerical Values from One System of Units to Another
              </h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">
              Kyunki magnitude constant rehta hai: <code>n₁u₁ = n₂u₂</code>. Agar physical quantity ka dimensional formula <code>[Mᵃ Lᵇ Tᶜ]</code> ho, to numerical value convert karne ka general formula hai:
            </p>

            {/* DEDICATED CONVERSION FORMULA BLOCK */}
            <div className="study-formula-block">
              <div className="text-[11px] font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold mb-1">
                Unit Conversion Formula
              </div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white tracking-wider my-2 select-all">
                n₂ = n₁ × [M₁ / M₂]ᵃ × [L₁ / L₂]ᵇ × [T₁ / T₂]ᶜ
              </div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
                System 1 (SI / MKS) ⇄ System 2 (CGS / FPS)
              </div>
            </div>

            {/* Numerical 1: Newton to Dyne */}
            <div className="my-6 p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Worked Numerical 01 • BTEUP Repeated
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  1 N = 10⁵ Dyne
                </span>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-base">
                Convert 1 Newton (SI unit of force) into Dyne (CGS unit of force)
              </p>

              <div className="space-y-2 text-xs sm:text-sm pl-3 border-l-2 border-brand-500/40">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">1. Given:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">Force (F), [F] = [M¹ L¹ T⁻²]  ⇒  a = 1, b = 1, c = -2</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">2. System 1 (SI):</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">n₁ = 1, M₁ = 1 kg = 1000 g, L₁ = 1 m = 100 cm, T₁ = 1 s</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">3. System 2 (CGS):</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">n₂ = ?, M₂ = 1 g, L₂ = 1 cm, T₂ = 1 s</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">4. Formula:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono font-semibold">n₂ = n₁ × [M₁/M₂]ᵃ × [L₁/L₂]ᵇ × [T₁/T₂]ᶜ</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">5. Calculation:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">n₂ = 1 × [1000/1]¹ × [100/1]¹ × [1/1]⁻² = 1 × 10³ × 10² × 1 = 10⁵</span>
                </div>
              </div>

              <div className="pt-2 text-sm font-sans font-bold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>Final Answer:</span>
                <span className="font-mono text-brand-600 dark:text-brand-400 font-extrabold text-base">1 Newton = 10⁵ Dyne</span>
              </div>
            </div>

            {/* Numerical 2: Joule to Erg */}
            <div className="my-6 p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Worked Numerical 02 • Work / Energy
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  1 J = 10⁷ Erg
                </span>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-base">
                Convert 1 Joule (SI unit of work) into Erg (CGS unit of work)
              </p>

              <div className="space-y-2 text-xs sm:text-sm pl-3 border-l-2 border-brand-500/40">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">1. Given:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">Work (W), [W] = [M¹ L² T⁻²]  ⇒  a = 1, b = 2, c = -2</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">2. System 1 (SI):</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">n₁ = 1, M₁ = 1000 g, L₁ = 100 cm, T₁ = 1 s</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">3. System 2 (CGS):</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">n₂ = ?, M₂ = 1 g, L₂ = 1 cm, T₂ = 1 s</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">4. Formula:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono font-semibold">n₂ = n₁ × [M₁/M₂]¹ × [L₁/L₂]² × [T₁/T₂]⁻²</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold uppercase text-[11px] text-slate-400 shrink-0 w-28">5. Calculation:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">n₂ = 1 × [1000/1]¹ × [100/1]² × [1/1]⁻² = 10³ × 10⁴ = 10⁷</span>
                </div>
              </div>

              <div className="pt-2 text-sm font-sans font-bold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>Final Answer:</span>
                <span className="font-mono text-brand-600 dark:text-brand-400 font-extrabold text-base">1 Joule = 10⁷ Erg</span>
              </div>
            </div>
          </div>

          {/* APPLICATION 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                APPLICATION 2
              </span>
              <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100">
                Checking the Correctness of Physical Equations
              </h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
              Principle of Homogeneity ka upayog karke LHS aur RHS ke dimensions nikaale jaate hain. Agar LHS = RHS, to equation dimensionally correct hoti hai.
            </p>

            <div className="my-6 p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Worked Verification 03 • Simple Pendulum
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  LHS = RHS
                </span>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-base">
                Check the correctness of the simple pendulum formula: T = 2π √(l / g)
              </p>
              <div className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 pl-3 border-l-2 border-brand-500/40">
                <div>• LHS = [T] = [T¹] = [M⁰ L⁰ T¹]</div>
                <div>• RHS = [2π] × √( [l] / [g] )</div>
                <div className="pl-4">• 2π is a dimensionless constant = [1]</div>
                <div className="pl-4">• Length [l] = [L]</div>
                <div className="pl-4">• Acceleration due to gravity [g] = [L T⁻²]</div>
                <div>• RHS = √( [L] / [L T⁻²] ) = √( [T²] ) = [T¹] = [M⁰ L⁰ T¹]</div>
              </div>
              <div className="pt-2 text-sm font-sans font-bold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>Result:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">LHS = RHS = [T] (Dimensionally Correct)</span>
              </div>
            </div>
          </div>

          {/* APPLICATION 3 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                APPLICATION 3
              </span>
              <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100">
                Deriving Relations Among Various Physical Quantities
              </h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
              Agar humein pata ho ki koi physical quantity kin-kin factors par depend karti hai, to hum unki powers (a, b, c) mankar dimensional equations solve karke unka formula derive kar sakte hain.
            </p>

            <div className="my-6 p-5 rounded-xl border border-brand-500/30 bg-gradient-to-b from-brand-500/5 via-transparent to-transparent space-y-3.5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-500" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    Standard BTEUP 5-Mark Derivation
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-semibold border border-amber-500/20">
                  Repeated 2018, 2021, 2023
                </span>
              </div>

              <p className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Derive the expression for the Time Period (T) of a Simple Pendulum
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Let time period (T) depend on: (1) Mass of bob (m), (2) Effective length (l), and (3) Acceleration due to gravity (g).
              </p>

              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 pt-1">
                <div className="p-2.5 rounded bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 mr-2">Step 1:</span>
                  <span>Write proportionality equation: <code>T = k · mᵃ · lᵇ · gᶜ</code> (where k is dimensionless constant)</span>
                </div>
                <div className="p-2.5 rounded bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 mr-2">Step 2:</span>
                  <span>Substitute dimensional formulas on both sides:</span>
                  <div className="font-mono text-xs pl-6 mt-1 text-slate-700 dark:text-slate-300">
                    [M⁰ L⁰ T¹] = [M]ᵃ · [L]ᵇ · [L T⁻²]ᶜ = [Mᵃ · Lᵇ⁺ᶜ · T⁻²ᶜ]
                  </div>
                </div>
                <div className="p-2.5 rounded bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 mr-2">Step 3:</span>
                  <span>Equate powers of M, L, and T:</span>
                  <div className="font-mono text-xs pl-6 mt-1 text-slate-700 dark:text-slate-300 space-y-0.5">
                    <div>• Power of M: <strong>a = 0</strong> (Time period mass par depend nahi karta)</div>
                    <div>• Power of T: -2c = 1 ⇒ <strong>c = -1/2</strong></div>
                    <div>• Power of L: b + c = 0 ⇒ b = -c = <strong>1/2</strong></div>
                  </div>
                </div>
                <div className="p-2.5 rounded bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 mr-2">Step 4:</span>
                  <span>Substitute values of a, b, c back:</span>
                  <div className="font-mono text-xs pl-6 mt-1 text-slate-700 dark:text-slate-300">
                    T = k · m⁰ · l¹/² · g⁻¹/² = k √(l / g)
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-500/20 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-sans text-slate-500">Experimentally k = 2π:</span>
                <span className="font-serif font-bold text-lg text-brand-600 dark:text-brand-400">
                  T = 2π √(l / g)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 1.5 LIMITATIONS OF DIMENSIONAL ANALYSIS */}
        {/* ========================================================= */}
        <section id="sec-1-5" className="scroll-mt-24 pt-4 mb-16">
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                SECTION 1.5
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Limitations of Dimensional Analysis
            </h2>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              (विमीय विश्लेषण की सीमाएं)
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
            Dimensional analysis ke nimnalikhit mukhya seemayein (limitations) hain jo BTEUP exams mein puchi jaati hain:
          </p>

          <ol className="list-decimal list-outside pl-5 space-y-3.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-8">
            <li>
              <strong>Dimensionless constants ki value nahi batata:</strong> Proportionality constant <code>k</code> (jaise <code>2π, 1/2</code>) ki numerical value dimensional analysis se nikaali nahi ja sakti; ise experiment se hi determine karna padta hai.
            </li>
            <li>
              <strong>Trigonometric, Exponential aur Logarithmic functions par fail ho jata hai:</strong> Agar formula mein <code>sin θ, cos θ, eˣ, log x</code> jaisi terms hain, to unka relation derive nahi kiya ja sakta kyunki yeh sabhi dimensionless hoti hain.
            </li>
            <li>
              <strong>3 se zyada quantities par dependency hone par formula derive nahi ho sakta:</strong> Mechanics mein sirf teen base equations bante hain (M, L, T). Agar koi quantity 4 ya zyada quantities par depend kare, to unique relation derive nahi kiya ja sakta.
            </li>
            <li>
              <strong>Scalar aur Vector mein antar nahi batata:</strong> Dimensional formula yeh nahi bata sakta ki koi quantity scalar hai ya vector. Jaise Work aur Torque dono ka dimensional formula <code>[M¹ L² T⁻²]</code> hai, par Work scalar hai aur Torque vector.
            </li>
            <li>
              <strong>Multi-term addition/subtraction formulae derive nahi kar sakta:</strong> Formulae jaise <code>s = ut + ½ at²</code> ya <code>v² = u² + 2as</code> jisme plus ya minus ka sign hota hai, unhe is method se derive nahi kiya ja sakta.
            </li>
            <li>
              <strong>Dimensionally correct equation ka Physically correct hona zaroori nahi:</strong> Jaise equation <code>s = 2ut + 5at²</code> dimensionally to bilkul correct hai, par physically galat hai.
            </li>
          </ol>

          {/* Highlighted Important Point */}
          <div className="my-6 pl-4 border-l-[3.5px] border-amber-500 bg-amber-500/[0.06] py-3.5 pr-4 rounded-r-md text-sm sm:text-base">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>IMPORTANT • Exam Takeaway</span>
            </div>
            <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              Every physically correct equation is always dimensionally correct, but every dimensionally correct equation is NOT necessarily physically correct.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* EXAM FOCUS */}
        {/* ========================================================= */}
        <section id="exam-focus" className="scroll-mt-24 pt-4 mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                BOARD EXAM PREPARATION
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Exam Focus: Important Definitions & Questions
            </h2>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              (BTEUP बोर्ड परीक्षा के लिए अति महत्वपूर्ण प्रश्न)
            </div>
          </div>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
            Important Definitions from This Chapter
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-8">
            <li><strong>Physical Quantity:</strong> Any quantity that can be measured directly or indirectly and describes physical laws.</li>
            <li><strong>Fundamental Units:</strong> Independent base units that cannot be resolved further (e.g. Metre, Kilogram, Second).</li>
            <li><strong>Derived Units:</strong> Units expressed in terms of fundamental units (e.g. Newton, Joule, Watt).</li>
            <li><strong>Dimensions:</strong> The powers to which base quantities are raised to express a derived physical quantity.</li>
            <li><strong>Principle of Homogeneity:</strong> An equation is valid only when every single term on both sides has identical dimensions.</li>
          </ul>

          <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            BTEUP Board Exam Model Questions
          </h3>

          <div className="space-y-8">
            {/* 1 Mark Questions */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  1 MARK QUESTIONS
                </span>
                <span className="text-xs text-slate-400 font-mono">Very Short Answers</span>
              </div>
              <ol className="list-decimal list-outside pl-5 space-y-3.5 text-sm text-slate-800 dark:text-slate-200">
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">What is the dimensional formula of Force?</p>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: [M¹ L¹ T⁻²]</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Name a physical quantity that is dimensionless but has units.</p>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: Plane Angle (Radian) or Solid Angle (Steradian).</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">State the Principle of Homogeneity in one sentence.</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Ans: In any valid physical equation, the dimensions of every term on both sides must be identical.</p>
                </li>
              </ol>
            </div>

            {/* 2-3 Mark Questions */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  2–3 MARKS QUESTIONS
                </span>
                <span className="text-xs text-slate-400 font-mono">Short Answers</span>
              </div>
              <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between Fundamental and Derived units with examples.</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Fundamental units are independent base units (Metre, Kilogram, Second), whereas Derived units are formed by combining fundamental units (Newton, Joule, Watt).</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Convert 1 Newton into Dyne using dimensional analysis.</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mono mt-1">Ans: n₂ = 1 × [1000/1]¹ × [100/1]¹ × [1/1]⁻² = 10⁵ Dyne.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Write any three major limitations of dimensional analysis.</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: (1) Value of constant k cannot be determined, (2) Cannot be used for trigonometric/exponential functions, (3) Cannot distinguish between scalar and vector quantities.</p>
                </li>
              </ol>
            </div>

            {/* 5 Mark Questions */}
            <div className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.02] dark:bg-brand-500/[0.04]">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-500/20">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                  5 MARKS DERIVATIONS
                </span>
                <span className="text-xs text-slate-400 font-mono">Long Answers & Numericals</span>
              </div>
              <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">State the Principle of Homogeneity. Using this principle, check the correctness of T = 2π √(l/g).</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: LHS = [T], RHS = [(L)/(LT⁻²)]¹/² = [T²]¹/² = [T]. Since LHS = RHS, the equation is dimensionally correct.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Derive the formula for the time period of a simple pendulum using dimensional analysis.</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Let T = k mᵃ lᵇ gᶜ. Solving powers gives a = 0, b = 1/2, c = -1/2, yielding T = k √(l/g).</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* QUICK REVISION */}
        {/* ========================================================= */}
        <section id="quick-revision" className="scroll-mt-24 pt-4 mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                LAST MINUTE REVISION
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Last Minute Quick Revision Summary
            </h2>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              (परीक्षा से पहले 5 मिनट का त्वरित दोहराव)
            </div>
          </div>

          <div className="space-y-6 pt-1">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-3 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Core Takeaways & Rules</span>
              </h4>
              <ul className="list-disc list-outside pl-5 space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                <li><strong>Q = n × u:</strong> Magnitude constant rehta hai, n ∝ 1/u.</li>
                <li><strong>7 Base SI Units:</strong> Metre (m), Kilogram (kg), Second (s), Ampere (A), Kelvin (K), Candela (cd), Mole (mol).</li>
                <li><strong>Homogeneity Rule:</strong> Ek equation mein sabhi terms ki dimensions identical honi chahiye.</li>
                <li>Only physical quantities with identical dimensions can be added or subtracted.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-3 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-500" />
                <span>Essential Formulae & Conversion Values</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 pt-1">
                <div className="p-2.5 rounded bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="font-sans font-medium">1 Newton:</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">10⁵ Dyne</span>
                </div>
                <div className="p-2.5 rounded bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="font-sans font-medium">1 Joule:</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">10⁷ Erg</span>
                </div>
                <div className="p-2.5 rounded bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="font-sans font-medium">Force:</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">[M¹ L¹ T⁻²]</span>
                </div>
                <div className="p-2.5 rounded bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="font-sans font-medium">Work / Energy:</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">[M¹ L² T⁻²]</span>
                </div>
                <div className="p-2.5 rounded bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="font-sans font-medium">Power:</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">[M¹ L² T⁻³]</span>
                </div>
                <div className="p-2.5 rounded bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="font-sans font-medium">Frequency:</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">[M⁰ L⁰ T⁻¹]</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </LearningLayout>
  );
};

export default ChapterPage;
