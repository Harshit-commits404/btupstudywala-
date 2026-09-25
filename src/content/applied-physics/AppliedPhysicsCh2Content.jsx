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

export const AppliedPhysicsCh2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* CHAPTER TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>CHAPTER 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Applied Physics - 1 (Paper Code: 2001)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 6 Periods</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Force and Motion
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (बल एवं गति)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Scalars & Vectors</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Vector Addition</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Resolution</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Force & Momentum</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Gravitational Force</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Is chapter mein hum quantities (scalar and vector), unke operations, force, momentum aur gravity ka detail mein adhyayan karenge. Yeh engineering mechanics ka sabse fundamental base hai, jisse structures aur machines ke motion aur forces ko samajhne mein madad milti hai.
        </p>
      </header>

      {/* 2.1 SCALAR AND VECTOR QUANTITIES */}
      <section id="sec-2-1" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Scalar and Vector Quantities
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Scalar Quantities (अदिश राशियाँ)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Wo physical quantities jinhe completely define karne ke liye sirf <strong>magnitude (परिमाण)</strong> ki zaroorat hoti hai aur direction (दिशा) ki nahi, unhe Scalar quantities kehte hain.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <strong>Examples:</strong> Mass (m), Length (l), Time (t), Work (W), Power (P), Energy (E), Temperature (T).
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Vector Quantities (सदिश राशियाँ)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Wo physical quantities jinhe completely define karne ke liye <strong>magnitude aur direction dono</strong> ki zaroorat hoti hai, aur jo vector addition laws ko follow karti hain, unhe Vector quantities kehte hain.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <strong>Examples:</strong> Displacement (s), Velocity (v), Acceleration (a), Force (F), Momentum (p).
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Representation of Vector</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ek vector ko ek directed line segment (arrow) se represent kiya jata hai. Arrow ki <strong>length</strong> magnitude batati hai, aur arrow ka <strong>head</strong> uski direction darshata hai. Ise mathematically ek letter ke upar arrow banakar likhte hain (e.g., A⃗).
        </p>
      </section>

      {/* 2.2 ADDITION AND SUBTRACTION OF VECTORS */}
      <section id="sec-2-2" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.2
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Addition & Subtraction of Vectors
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Vectors ko simple algebra se add nahi kiya ja sakta, inke addition ke liye special laws hote hain.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Triangle Law of Vector Addition (Statement Only)</span>
        </h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
          <p className="text-blue-900 dark:text-blue-200">
            "Agar do vectors ko magnitude aur direction mein ek triangle ki do continuous sides se represent kiya jaye, toh unka resultant (parinaami) magnitude aur direction mein triangle ki teesri (closing) side se, reverse order mein, represent hota hai."
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Parallelogram Law of Vector Addition (Statement Only)</span>
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
          <p className="text-emerald-900 dark:text-emerald-200">
            "Agar do vectors ko kisi parallelogram ki do adjacent (saath wali) sides se magnitude aur direction mein darshaya jaye, toh unka resultant magnitude aur direction mein us parallelogram ke diagonal (vikarn) dwara darshaya jata hai jo un dono vectors ke intersection point se start hota hai."
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Scalar (Dot) Product</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Do vectors A⃗ aur B⃗ ka scalar product ek scalar quantity hota hai, jo dono vectors ke magnitudes aur unke beech ke angle (θ) ke cosine ke product ke barabar hota hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          A⃗ · B⃗ = AB cos(θ)
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Vector (Cross) Product</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Do vectors A⃗ aur B⃗ ka vector product ek nayi vector quantity hoti hai, jiska magnitude unke beech ke angle ke sine (sin) aur dono magnitudes ke product ke barabar hota hai, aur direction dono vectors ke plane ke perpendicular hoti hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          A⃗ × B⃗ = AB sin(θ) n̂
        </div>
      </section>

      {/* 2.3 RESOLUTION OF VECTORS */}
      <section id="sec-2-3" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.3
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Resolution of Vectors
          </h2>
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Ek vector ko uske rectangular (perpendicular) components mein todne ke process ko Resolution of Vectors kehte hain. Agar ek vector <strong>A⃗</strong> x-axis ke sath angle <strong>θ</strong> banata hai, toh uske do components honge:
        </p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
          <li><strong>Horizontal Component (X-axis ke along):</strong> Ax = A cos(θ)</li>
          <li><strong>Vertical Component (Y-axis ke along):</strong> Ay = A sin(θ)</li>
        </ul>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          A = √(Ax² + Ay²)
        </div>
      </section>

      {/* 2.4 FORCE AND MOMENTUM */}
      <section id="sec-2-4" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Force and Momentum
          </h2>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Force (बल)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Force ek push ya pull hai jo kisi object ki state of rest ya state of uniform motion ko badalta hai, ya badalne ka prayas karta hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6 flex flex-col items-center">
          <div className="text-xl font-mono text-brand-700 dark:text-brand-400 mb-2">F = m a</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            m = Mass, a = Acceleration<br/>
            <strong>SI Unit:</strong> Newton (N)
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Momentum (संवेग)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Kisi body ke mass aur uski velocity ke product ko Linear Momentum kehte hain. Ye motion ka quantity measure karta hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6 flex flex-col items-center">
          <div className="text-xl font-mono text-brand-700 dark:text-brand-400 mb-2">p = m v</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            m = Mass, v = Velocity<br/>
            <strong>SI Unit:</strong> kg m/s
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Conservation of Linear Momentum (Statement)</span>
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 mb-4 rounded-r-lg">
          <p className="text-emerald-900 dark:text-emerald-200 font-medium">
            "Agar kisi system par koi external net force act nahi kar raha hai, toh us system ka total linear momentum constant (sarakshit) rehta hai." (F_ext = 0 implies dp/dt = 0).
          </p>
        </div>

        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Applications: Recoil of Gun</h4>
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Jab bullet fire ki jati hai, toh bullet aage ki taraf momentum gain karti hai. Momentum conservation ke karan, gun piche ki taraf ek velocity se dhakka (recoil) deti hai. Total momentum shoot karne se pehle aur baad mein zero hota hai.
        </p>
      </section>

      {/* 2.5 GRAVITATIONAL FORCE */}
      <section id="sec-2-5" className="scroll-mt-24 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.5
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Gravitational Force & Acceleration due to Gravity
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Brahmand (Universe) mein har mass wali object dusri object ko attract karti hai. Is force ko Gravitational Force kehte hain.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Acceleration due to Gravity (g)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Prithvi (Earth) dwara lagaye gaye gravitational pull ke karan freely fall karti hui body mein jo acceleration produce hota hai, use "g" se darshate hain. Earth ki surface par iski average value <strong>9.8 m/s²</strong> hoti hai.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          g = GM / R²
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Variation of 'g' with Height</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-2">
          Earth ki surface se upar (height 'h' par) jane par 'g' ki value <strong>ghat-ti (decreases)</strong> hai. Formula (for small height h &lt;&lt; R):
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          g' = g (1 - 2h/R)
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Variation of 'g' with Depth</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-2">
          Earth ki surface se neeche (depth 'd' par) jane par bhi 'g' ki value <strong>ghat-ti (decreases)</strong> hai. Earth ke center par 'g' zero ho jata hai. Formula:
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex justify-center mb-6 text-xl font-mono text-brand-700 dark:text-brand-400">
          g' = g (1 - d/R)
        </div>
      </section>

    </article>
  );
};

export default AppliedPhysicsCh2Content;
