import React from 'react';
import {
  Compass,
  Clock,
  BookOpen,
  Lightbulb,
  Scale,
  Contrast,
  Grid,
  Layers,
  Maximize,
  RefreshCw,
  Camera,
  HardDrive,
  Crop,
  Sliders,
  FileText,
  Tv,
  Award,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const MtUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER HERO TITLEPLATE */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Multimedia Technologies
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 10 Periods</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 font-medium border border-purple-500/20">
            Semester 5 (BTEUP)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Graphic Design and Digital Imaging
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (ग्राफिक डिजाइन एवं डिजिटल इमेजिंग: डिजाइन के मूल तत्व व सिद्धांत, डिजिटल तकनीक का उपयोग, डिजिटल इमेज की संरचना, पिक्सेल, रेजोल्यूशन एवं इमेजिंग पाइपलाइन)
          </p>
        </div>

        {/* Syllabus Topics Chips Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Official Syllabus:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Basics of Graphic Design
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Elements of Design
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Principles of Design
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Use of Digital Technology
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Digital Image (Pixels & Resolution)
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Bit Depth & Color Representation
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Raster vs Vector Images
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Digital Imaging in Multimedia Pipeline
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/40 pl-4 py-1">
          Graphic Design aur Digital Imaging kisi bhi multimedia pranaali (multimedia system) ka drishya aadhar (visual foundation) hain. Manushya lagbhag 80% information apni aankhon ke jariye grahan karta hai. Is chapter mein hum Graphic Design ke mool siddhanton aur tatvon (Line, Shape, Color, Typography, Space, Balance, Contrast, Alignment, Hierarchy), modern digital technology ke upyog, Digital Image ki ganitiya sanrachna (Pixels, Resolution, Bit Depth, True Color, Raster vs Vector), aur multimedia me Digital Imaging ki sampoorn 6-charaniya karya-pranali (Capture se lekar Multimedia Integration tak) ko BTEUP Polytechnic examination ke 10-mark descriptive standards ke anusar deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* SECTION 1: BASICS OF GRAPHIC DESIGN */}
      {/* ========================================================= */}
      <section id="graphic-design" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            1. Basics of Graphic Design: Elements & Principles
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (ग्राफिक डिजाइन का अर्थ, उद्देश्य, डिजाइन के 7 मूल तत्व [Elements] एवं 7 संरचनात्मक सिद्धांत [Principles])
          </div>
        </div>

        {/* 1.1 Graphic Design Meaning and Purpose */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          1.1 Meaning & Formal Definition of Graphic Design (ग्राफिक डिजाइन क्या है?)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Graphic Design</strong> ek aisi vyavaharik kala (applied art) aur drishya sanchar (visual communication) ki vidha hai jisme Typography (aksharon ki rachna), Photography (tasveerein), Illustration (chitra), aur Colors (rangon) ka soojh-boojh ke sath sanyojan (combination) karke kisi vichar (idea), sandesh (message) ya samasya ka prabhavshali drishya samadhan (visual solution) prastut kiya jata hai.
        </p>

        {/* Formal Definition Box */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Formal Definition • Graphic Design</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content, combining elements like typography, shape, color, and imagery according to fundamental design principles to communicate a specific message to a target audience."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Graphic design sirf "chitra sajane" ka naam nahi hai; yeh drishyon (visuals) ke madhyam se baatcheet karne ki takneek hai. Jaise sadak par laga 'Stop' sign bina ek lafz bole turant driver ko gaadi rokne ka sandesh deta hai, wahi graphic design ki shakti hai.
            </span>
          </div>
        </div>

        {/* 1.2 The Seven Core Elements of Design */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.2 The Seven Core Elements of Graphic Design (डिजाइन के 7 मूल तत्व)
        </h3>
        <p className="mb-4 leading-relaxed">
          Elements of design ko hum design ki <strong>"Building Blocks" (eentein / samagri)</strong> keh sakte hain. Inhi saat tatvon se milkar duniya ka har chhota ya bada visual banta hai:
        </p>

        <div className="space-y-4 my-5">
          {/* Element 1: Line */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-blue-500/10 text-blue-600 font-mono text-xs font-bold">01</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Line (रेखा - बुनियादी मार्गदर्शक)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Do binduon (points) ko jodne wala marg Line kehlata hai. Rekhayein seedhi (straight), teedi (curved), zigzag ya dotted ho sakti hain.
              <br />
              • <em>Horizontal lines:</em> Shanti, sthirta aur aaram darshati hain.
              <br />
              • <em>Vertical lines:</em> Shakti, oonchai aur adhikar darshati hain.
              <br />
              • <em>Diagonal lines:</em> Gati (motion), dynamic urja aur tezi darshati hain.
              <br />
              <strong>Role:</strong> Content ko vibhajit karna (separators) aur user ki aankh ko kisi mukhya bindu ki taraf le jana (leading lines).
            </p>
          </div>

          {/* Element 2: Shape */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-emerald-500/10 text-emerald-600 font-mono text-xs font-bold">02</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Shape (आकार - परिबद्ध क्षेत्र)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Jab rekhayein aapas me milkar ek 2-dimensional kshetra ko gher leti hain, to Shape banti hai:
              <br />
              • <strong>Geometric Shapes:</strong> Vritt (Circle), Varg (Square), Tribhuj (Triangle) — yeh niyamit, ganitiya aur anushasit hoti hain.
              <br />
              • <strong>Organic Shapes:</strong> Patti, phool, badal, paani ki boondein — yeh prakritik, asaman aur komal hoti hain.
              <br />
              • <strong>Abstract Shapes:</strong> Stylized icons (jaise Wi-Fi symbol, location pin, shopping cart).
            </p>
          </div>

          {/* Element 3: Color */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-amber-500/10 text-amber-600 font-mono text-xs font-bold">03</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Color (रंग - भावनात्मक प्रभाव)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Design ka sabse shaktishali tatva jo dhyan aakarshit karta hai aur manovaigyanik bhavnaon ko jagata hai:
              <br />
              • <strong>Hue:</strong> Rang ka mool naam (Red, Blue, Yellow).
              <br />
              • <strong>Saturation:</strong> Rang ki shuddhata ya teevrata (Vibrant vs Dull).
              <br />
              • <strong>Value / Brightness:</strong> Rang ka halkapan ya gehraapan (Tints & Shades).
              <br />
              • <strong>Color Psychology:</strong> Red = Khatra/Utsah, Blue = Vishwas/Suraksha, Green = Prakriti/Swasthya. Screen ke liye <strong>RGB</strong> aur printing ke liye <strong>CMYK</strong> mode use hota hai.
            </p>
          </div>

          {/* Element 4: Typography */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-purple-500/10 text-purple-600 font-mono text-xs font-bold">04</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Typography (टाइपोग्राफी - अक्षरों की कला)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Shabdon aur aksharon ko padhne yogya aur sundar banane ki kala:
              <br />
              • <strong>Serif Fonts:</strong> Aksharon ke kinaron par chhoti lines (feet) hoti hain (e.g. Times New Roman) — print me padhne me aasan.
              <br />
              • <strong>Sans-serif Fonts:</strong> Bina kinaron wali saaf modern fonts (e.g. Arial, Inter, Roboto) — digital screens par sarvottam.
              <br />
              • <strong>Typographic Hierarchy:</strong> Headline (badi font) → Subheading (madhyam) → Body Text (chhoti font).
            </p>
          </div>

          {/* Element 5: Space / Negative Space */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-teal-500/10 text-teal-600 font-mono text-xs font-bold">05</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Space / Negative Space (खाली स्थान / व्हाइट स्पेस)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Design elements ke beech aur charo taraf bacha hua khali sthan Negative Space ya White Space kehlata hai. Yeh "barbad jagah" nahi hai, balki design ko saans lene (breathing room) ki aazadi deta hai, visual kachre (clutter) ko rokta hai, aur viewer ka dhyan mukhya sandesh par kendrit karta hai (e.g. Apple ke minimal clean ads).
            </p>
          </div>

          {/* Element 6: Texture */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-rose-500/10 text-rose-600 font-mono text-xs font-bold">06</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Texture (बनावट / टेक्सचर - दृश्य सतह गुण)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Kisi satah (surface) ka drishya aabhaas jo sparsh (touch) ki anubhuti karata hai: jaise khurdura kagaaz (rough paper), chamakdar kaanch (glossy glass), lakdi ka fiber (wood grain), ya metal ki chamak. Yeh 2D digital screen par bhi gehraai (depth) ka aabhaas paida karta hai.
            </p>
          </div>

          {/* Element 7: Form */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-indigo-500/10 text-indigo-600 font-mono text-xs font-bold">07</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Form (त्रिविमीय रूप / 3D स्वरूप)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Shape jab 3-dimensional roop le leti hai (jisme length, width aur depth teeno hon), to use Form kehte hain (jaise Circle se Sphere, ya Square se Cube ban jana). Graphic design me roshni (highlights) aur parchhaiyon (shadows) ke dwara 2D screen par 3D form ka bhram paida kiya jata hai.
            </p>
          </div>
        </div>

        {/* 1.3 The Seven Core Principles of Design */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          1.3 The Seven Core Principles of Graphic Design (डिजाइन के 7 मूल सिद्धांत)
        </h3>
        <p className="mb-4 leading-relaxed">
          Agar Elements "eentein" hain, to Principles of Design wo <strong>"Niyam aur Architecture"</strong> hain jinka palan karke un elements ko ek sundar aur prabhavshali layout me vyavasthit (arrange) kiya jata hai:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-5">
          {/* Principle 1 */}
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-brand-600 font-bold text-sm mb-1">
              <Scale className="w-4 h-4" /> 1. Balance (संतुलन)
            </div>
            <p className="text-xs text-text-secondary">
              Composition me drishya bhaar (visual weight) ka barabar batwara:
              <br />
              • <em>Symmetrical:</em> Dono taraf mirrored barabar layout (formal, shant).
              <br />
              • <em>Asymmetrical:</em> Alag-alag size aur colors ka modern santulan (dynamic).
            </p>
          </div>

          {/* Principle 2 */}
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-blue-600 font-bold text-sm mb-1">
              <Contrast className="w-4 h-4" /> 2. Contrast (विषमता)
            </div>
            <p className="text-xs text-text-secondary">
              Do vipreet tatvon ko aamne-saamne rakhna: Kaale background par safed text, bade headline ke neeche chhota text. Contrast se mukhya element ubhar kar samne aata hai.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm mb-1">
              <Grid className="w-4 h-4" /> 3. Alignment (संरेखण)
            </div>
            <p className="text-xs text-text-secondary">
              Elements ko ek adrishya seedhi line ya grid par vyavasthit karna (Left-align, Center-align). Bina alignment ke design bikhra hua aur anari lagta hai.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-purple-600 font-bold text-sm mb-1">
              <Layers className="w-4 h-4" /> 4. Visual Hierarchy (पदानुक्रम)
            </div>
            <p className="text-xs text-text-secondary">
              Viewer ki aankh ko mahatva ke kram me guide karna: Pehle bada title dekhein, fir subtitle, fir baareek details. Sabse zaroori cheez sabse pehle dikhni chahiye.
            </p>
          </div>

          {/* Principle 5 */}
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-amber-600 font-bold text-sm mb-1">
              <Maximize className="w-4 h-4" /> 5. Proportion & Scale (अनुपात)
            </div>
            <p className="text-xs text-text-secondary">
              Elements ke aakar ke beech ka sapeksh sambandh. Golden Ratio (1:1.618) ya Rule of Thirds ka use karke drishyon me prakritik aakarshak anupaat banana.
            </p>
          </div>

          {/* Principle 6 */}
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-teal-600 font-bold text-sm mb-1">
              <RefreshCw className="w-4 h-4" /> 6. Repetition (दोहराव)
            </div>
            <p className="text-xs text-text-secondary">
              Ek hi brand color, font style ya icon shape ko bar-bar repeat karna, jisse poori website ya brochure me ek-roopta (consistency) aur pehchan bane.
            </p>
          </div>
        </div>

        {/* Principle 7: Unity */}
        <div className="p-4 rounded-xl border border-border bg-surface my-4">
          <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
            7. Unity & Harmony (एकता एवं सामंजस्य - अंतिम लक्ष्य)
          </strong>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Unity ka arth yeh hai ki design ke sabhi 6 tatva aur niyam milkar ek aisi samashti (cohesive whole) banayein jisse viewer ko lage ki har element ek doosre ke sath perfect match karta hai aur ek hi sandesh ko mazboot karta hai.
          </p>
        </div>

        {/* EDUCATIONAL FIGURE 4.1: DESIGN ELEMENTS & PRINCIPLES */}
        <EducationalFigure
          caption="Figure 4.1: Graphic Design Framework: Fundamental Elements (Building Blocks) structured by Core Principles"
          source="Visual Design Theory • Graphic Design Engineering Standards"
          license="Open Educational Diagram"
          maxWidth="max-w-3xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              Graphic Design Architecture • 7 Elements (Materials) + 7 Principles (Rules) = Compelling Visuals
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left text-xs font-mono">
              {/* Elements Column */}
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-sm text-center">
                  DESIGN ELEMENTS (The "What")
                </strong>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-xs">
                  <li>• <strong>Line:</strong> Direction, dividers, margins</li>
                  <li>• <strong>Shape:</strong> Geometric, organic, icons</li>
                  <li>• <strong>Color:</strong> Hue, saturation, RGB/CMYK</li>
                  <li>• <strong>Typography:</strong> Typefaces, readability</li>
                  <li>• <strong>Space:</strong> Negative/white space balance</li>
                  <li>• <strong>Texture:</strong> Visual tactile surfaces</li>
                  <li>• <strong>Form:</strong> 3D illusion with light & shade</li>
                </ul>
              </div>

              {/* Principles Column */}
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                <strong className="text-purple-700 dark:text-purple-300 block mb-2 text-sm text-center">
                  DESIGN PRINCIPLES (The "How")
                </strong>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-xs">
                  <li>• <strong>Balance:</strong> Symmetrical & asymmetrical weight</li>
                  <li>• <strong>Contrast:</strong> Dark/light, big/small focal points</li>
                  <li>• <strong>Alignment:</strong> Clean grid-based order</li>
                  <li>• <strong>Hierarchy:</strong> Primary → Secondary flow</li>
                  <li>• <strong>Proportion:</strong> Golden ratio, scale harmony</li>
                  <li>• <strong>Repetition:</strong> Consistency & brand unity</li>
                  <li>• <strong>Unity:</strong> Cohesive holistic message</li>
                </ul>
              </div>
            </div>

            <p className="text-[11px] text-text-muted mt-4">
              Applied across all multimedia disciplines: Web UI, Print Media, Mobile Applications & Motion Graphics.
            </p>
          </div>
        </EducationalFigure>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: DIGITAL IMAGES & TECHNOLOGY */}
      {/* ========================================================= */}
      <section id="digital-images" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            2. Digital Images & The Role of Digital Technology
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डिजिटल इमेज की परिभाषा, पिक्सेल, रेजोल्यूशन, बिट डेप्थ, ट्रू कलर, रास्टर बनाम वेक्टर एवं आधुनिक डिजिटल टूल्स)
          </div>
        </div>

        {/* 2.1 Definition of Digital Image */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          2.1 Definition & Mathematical Concept of a Digital Image (10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Digital Image</strong> vastavik duniya ke kisi prakritik drishya ya aakriti ka ek do-vimiye (2-dimensional) sankhyikiya (numeric binary) pratinidhitwa hota hai, jise computer screen par display karne aur digital memory me store karne ke liye ek niyamit rectangular matrix (grid) me sample aur quantize kiya gaya hota hai.
        </p>

        {/* Mathematical Representation */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mathematical Representation • 2D Function f(x, y)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A digital image is mathematically represented as a two-dimensional matrix or function f(x, y), where x and y are spatial coordinate positions (row and column index), and the value of f(x, y) at any coordinate represents the brightness (intensity) or color vector of the pixel at that point."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Computer ke liye tasveer koi painting nahi hai, balki sankhyaon (numbers 0 se 255) ki ek vishal Excel sheet (Rows and Columns matrix) hai, jahan har chhota dabba ek <strong>Pixel</strong> hai.
            </span>
          </div>
        </div>

        {/* Pixel, Resolution, Dimensions and Bit Depth */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          Four Fundamental Parameters of a Digital Image:
        </h4>
        <div className="space-y-4 my-5">
          {/* 1. Pixels */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              1. Pixel (Picture Element - चित्र का सबसे छोटा घटक)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              <strong>Pixel</strong> (Picture + Element ka sankshep) kisi digital image ka sabse chhota swatantra aur address karne yogya (addressable) bindu hota hai. Har pixel ke paas apni nishchit sthiti <code>(x, y)</code> aur ek nishchit color value (jaise Red=255, Green=0, Blue=0 pure red ke liye) hoti hai. Hazaaron ya lakhon pixels jab aapas me satakar rakhe jaate hain, to insaan ki aankh unhe ek smooth photograph ke roop me dekhti hai.
            </p>
          </div>

          {/* 2. Resolution & Dimensions */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              2. Dimensions & Spatial Resolution (इमेज का आकार एवं रेजोल्यूशन)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              • <strong>Pixel Dimensions:</strong> Image me kul pixels ki sankhya, jise <code>Width × Height</code> ke roop me likha jata hai (e.g. Full HD = 1920×1080 = 2,073,600 pixels ≈ <strong>2.07 MegaPixels</strong>).
              <br />
              • <strong>Spatial Resolution:</strong> Prati inch lambai me kitne pixels ya dots maujood hain:
              <br />
              &nbsp;&nbsp;- <strong>PPI (Pixels Per Inch):</strong> Computer aur mobile screen ke display density ke liye (Standard web = 72-96 PPI, Retina mobile = 300-450 PPI).
              <br />
              &nbsp;&nbsp;- <strong>DPI (Dots Per Inch):</strong> Physical printing press ke liye ink dots ki density (Professional print standard = <strong>300 DPI</strong>).
            </p>
          </div>

          {/* 3. Bit Depth / Color Depth */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              3. Bit Depth / Color Depth (बिट डेप्थ - रंगों की क्षमता)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              Ek single pixel ke color ko store karne ke liye kitne binary bits (0s aur 1s) kharch kiye jaate hain, use Bit Depth kehte hain:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-mono">
              <div className="p-2 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white">1-bit Monochrome:</strong>
                <p className="text-text-muted mt-0.5">2^1 = 2 colors (Pure Black ya White).</p>
              </div>
              <div className="p-2 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white">8-bit Grayscale:</strong>
                <p className="text-text-muted mt-0.5">2^8 = 256 gray shades (0 = black, 255 = white).</p>
              </div>
              <div className="p-2 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white">16-bit High Color:</strong>
                <p className="text-text-muted mt-0.5">2^16 = 65,536 colors (RGB 5:6:5).</p>
              </div>
              <div className="p-2 rounded bg-brand-500/10 border border-brand-500/30">
                <strong className="block text-brand-600 dark:text-brand-400 font-bold">24-bit True Color:</strong>
                <p className="text-text-muted mt-0.5">16.78 Million Colors (8-bit R + 8-bit G + 8-bit B).</p>
              </div>
            </div>
            <p className="text-xs text-text-secondary mt-2">
              • <strong>32-bit Deep Color:</strong> 24-bit True Color + 8-bit <em>Alpha Channel</em> (transparency aur opacity mask ke liye).
            </p>
          </div>

          {/* 4. Raster vs Vector */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              4. Raster (Bitmap) vs Vector Representation
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              • <strong>Raster Images:</strong> Pixels ki rectangular grid se banti hain (JPEG, PNG, BMP, GIF). Realistic photography aur natural textures ke liye best, lekin zoom karne par <em>Pixelation (dhundhlapan)</em> aata hai.
              <br />
              • <strong>Vector Images:</strong> Mathematical formulas aur Bézier curves se banti hain (SVG, CDR, AI). Kitna bhi zoom karein, razor-sharp rehti hain, lekin natural photographic skin tones capture nahi kar sakti.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 4.2: PIXEL MATRIX DIAGRAM */}
        <EducationalFigure
          caption="Figure 4.2: Digital Image Matrix Structure: 2D Spatial Pixel Grid f(x, y) with Discrete 24-bit RGB Byte Values"
          source="Wikimedia Commons • Pixel Matrix Architecture"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Pixel-example.svg"
          license="CC BY-SA 3.0"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">
              Discrete Digital Pixel Matrix • Rows (y) × Columns (x) Grid
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border max-w-md mx-auto font-mono text-xs shadow-inner">
              <div className="grid grid-cols-4 gap-1.5 text-center">
                <div className="p-2 rounded bg-red-500/20 border border-red-500/40 text-[10px]">
                  (0, 0)<br /><strong className="text-red-700 dark:text-red-300">R:255,G:0,B:0</strong>
                </div>
                <div className="p-2 rounded bg-green-500/20 border border-green-500/40 text-[10px]">
                  (0, 1)<br /><strong className="text-green-700 dark:text-green-300">R:0,G:255,B:0</strong>
                </div>
                <div className="p-2 rounded bg-blue-500/20 border border-blue-500/40 text-[10px]">
                  (0, 2)<br /><strong className="text-blue-700 dark:text-blue-300">R:0,G:0,B:255</strong>
                </div>
                <div className="p-2 rounded bg-amber-500/20 border border-amber-500/40 text-[10px]">
                  (0, 3)<br /><strong className="text-amber-700 dark:text-amber-300">R:255,G:200,B:0</strong>
                </div>

                <div className="p-2 rounded bg-purple-500/20 border border-purple-500/40 text-[10px]">
                  (1, 0)<br /><strong className="text-purple-700 dark:text-purple-300">R:128,G:0,B:128</strong>
                </div>
                <div className="p-2 rounded bg-slate-900/10 dark:bg-slate-100/10 border border-border text-[10px]">
                  (1, 1)<br /><strong className="text-slate-800 dark:text-slate-200">R:50,G:50,B:50</strong>
                </div>
                <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-border text-[10px]">
                  (1, 2)<br /><strong className="text-slate-600 dark:text-slate-300">R:200,G:200,B:200</strong>
                </div>
                <div className="p-2 rounded bg-teal-500/20 border border-teal-500/40 text-[10px]">
                  (1, 3)<br /><strong className="text-teal-700 dark:text-teal-300">R:0,G:255,B:255</strong>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-text-muted mt-3">
              Each coordinate (x, y) stores numerical color intensity. Zooming into any raster image reveals this underlying square pixel lattice.
            </p>
          </div>
        </EducationalFigure>

        {/* 2.2 Use of Digital Technology in Graphic Design */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          2.2 Use of Digital Technology in Graphic Design & Multimedia (डिजिटल तकनीक का प्रभाव)
        </h3>
        <p className="mb-4 leading-relaxed">
          Digital technology ke aane se pehle graphic design ka kaam manual drafting tables, T-squares, Rapidograph ink pens, physical paste-up boards, darkroom chemical photographic processing, aur lead typesetting ke zariye hota tha. Ek chhota sa spelling mistake hone par poora poster dobara banana padta tha. Digital technology ne is kshetra me krantikari badlaav kiye hain:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              1. Non-Destructive Editing & Unlimited Undo
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Photoshop aur CorelDRAW me <code>Ctrl+Z</code> (Undo) aur Layers architecture ki wajah se artist bina kisi dar ke hazaaron naye experiments kar sakta hai. Mool artwork hamesha safe rehti hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-blue-600 dark:text-blue-400 block text-sm font-bold mb-1">
              2. Digital Input Devices (Stylus & Tablets)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Wacom graphic tablets aur iPad Pro Apple Pencil ke jariye 8192 levels of pressure sensitivity milti hai, jisse digital brush chalane par bilkul asli physical canvas jaisa feel aur control milta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-600 dark:border-emerald-400 block border bg-surface">
            <strong className="text-emerald-700 dark:text-emerald-300 block text-sm font-bold mb-1">
              3. Color Calibration & Precision (ICC Profiles)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Hardware colorimeter aur digital color management systems (Pantone Digital Libraries) ensure karte hain ki jo rang designer ki IPS monitor screen par dikh raha hai, wahi exact rang printing press se chhap kar bahar nikle.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-600 dark:border-purple-400 block border bg-surface">
            <strong className="text-purple-700 dark:text-purple-300 block text-sm font-bold mb-1">
              4. Global Cloud Collaboration & Instant Export
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Figma, Adobe Creative Cloud aur Canva ke dwara duniya ke kisi bhi kone me baithe teams real-time me ek hi visual par kaam kar sakti hain aur click karte hi web, mobile aur print formats me export kar sakti hain.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: DIGITAL IMAGING IN MULTIMEDIA */}
      {/* ========================================================= */}
      <section id="imaging-in-multimedia" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.0 • PIPELINE & APPLICATIONS
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            3. Digital Imaging in Multimedia Pipeline & Applications
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (मल्टीमीडिया में डिजिटल इमेजिंग: 6-चरणीय इमेजिंग पाइपलाइन, कैप्चर से लेकर इंटीग्रेशन तक एवं विविध अनुप्रयोग)
          </div>
        </div>

        {/* 3.1 Digital Imaging Meaning & Role */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          3.1 Digital Imaging in Multimedia (मल्टीमीडिया में डिजिटल इमेजिंग का महत्व)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Digital Imaging</strong> ek aisi vyapak (comprehensive) multidisciplinary takneek hai jisme digital images ko <strong>Capture (prapt karna)</strong>, <strong>Process & Edit (sudharna)</strong>, <strong>Enhance (gunvatta badhana)</strong>, <strong>Compress & Store (surakshit rakhna)</strong>, aur antim roop se kisi <strong>Multimedia System (websites, video games, mobile apps, e-learning)</strong> me integrate karne ki poori jeevan-chakra (lifecycle) shamil hoti hai.
        </p>

        {/* The 6-Stage Digital Imaging Pipeline */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          The 6-Stage Digital Imaging Pipeline (डिजिटल इमेजिंग की 6-चरणीय कार्यप्रणाली):
        </h4>
        <div className="space-y-4 my-5">
          {/* Stage 1 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 1: Image Acquisition / Capture (इमेज अधिग्रहण एवं कैप्चर)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Vastavik drishya ki physical light waves ko digital data me badalna:
              <br />
              • <strong>Digital Cameras & Smartphones:</strong> CMOS ya CCD image sensors analog light ko capture karke built-in Analog-to-Digital Converter (ADC) se binary data me convert karte hain.
              <br />
              • <strong>Optical Flatbed Scanners:</strong> Physical photos aur purane documents ko 1200 se 4800 DPI par scan karke digital banana.
              <br />
              • <strong>Frame Grabbers:</strong> Live analog video feed se individual static frames extract karna.
            </p>
          </div>

          {/* Stage 2 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 2: Image Transfer & Ingestion (डेटा ट्रांसफर एवं स्टोरेज)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Captured uncompressed ya RAW images ko high-speed transmission channels (USB 3.2, Thunderbolt, Wi-Fi 6, SD Express cards) ke dwara computer workstation ki high-speed NVMe SSD par transfer karna aur EXIF metadata (camera settings, shutter speed, date) ko index karna.
            </p>
          </div>

          {/* Stage 3 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 3: Image Editing & Pre-processing (इमेज एडिटिंग एवं क्रॉपिंग)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Photoshop ya GIMP me image ki basic geometry theek karna:
              <br />
              • Unnecessary background hisson ko <strong>Crop</strong> karna aur perspective distortion ko seedha karna.
              <br />
              • Blemishes, dust spots aur red-eye effect ko Healing Brush se hatana.
              <br />
              • Subject ko background se alag karke transparent PNG layer banana (Clipping Path / Masking).
            </p>
          </div>

          {/* Stage 4 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 4: Image Enhancement & Filtering (इमेज सुधार एवं एन्हांसमेंट)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Digital image processing algorithms ke dwara visual quality ko behtar banana:
              <br />
              • <strong>Histogram Equalization & Contrast Stretching:</strong> Andheri photos me details ko ubharna.
              <br />
              • <strong>Sharpening (Unsharp Mask):</strong> Blurry edges ko crisp aur teekha banana.
              <br />
              • <strong>Noise Reduction:</strong> Low-light digital grain (noise) ko smooth karna.
              <br />
              • <strong>Color Grading:</strong> White balance aur saturation adjust karke visual appeal badhana.
            </p>
          </div>

          {/* Stage 5 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 5: Image Compression & Archiving (कम्प्रेशन एवं ऑप्टिमाइजेशन)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Target multimedia platform ke anusar appropriate format chunna:
              <br />
              • Web photos ke liye: <strong>JPEG / WebP</strong> (Lossy compression jisse file size 25 MB se ghatkar 250 KB ho jata hai).
              <br />
              • Logos aur icons ke liye: <strong>PNG / SVG</strong> (Lossless compression with transparency).
              <br />
              • High-quality archival master ke liye: <strong>TIFF</strong> (Uncompressed / Lossless LZW).
            </p>
          </div>

          {/* Stage 6 */}
          <div className="p-4 rounded-xl border-2 border-brand-500/40 bg-brand-50/20 dark:bg-brand-500/[0.04]">
            <strong className="text-brand-700 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 6: Integration into Multimedia Systems (मल्टीमीडिया इंटीग्रेशन)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Antim charan me optimized image ko target interactive system me fit kiya jata hai:
              <br />
              • Web pages me responsive <code>&lt;picture&gt;</code> aur <code>srcset</code> tags ke jariye embed karna.
              <br />
              • Video editing software (Premiere Pro) ke video timeline me still photo overlays aur titles lagana.
              <br />
              • 3D video game engine (Unity / Unreal Engine) me 3D models ke upar <em>Diffuse Texture</em> ke roop me map karna.
              <br />
              • E-learning interactive quizzes aur medical simulations me clickable hot-spots lagana.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 4.3: DIGITAL IMAGING PIPELINE */}
        <EducationalFigure
          caption="Figure 4.3: The End-to-End Digital Imaging Lifecycle Pipeline in Modern Interactive Multimedia Systems"
          source="Digital Imaging Engineering Standards • Multimedia System Lifecycle"
          license="Open Educational Diagram"
          maxWidth="max-w-3xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              Digital Imaging Pipeline • Capture → Transfer → Edit → Enhance → Compress → Integrate
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono max-w-2xl mx-auto">
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <Camera className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                <span className="font-bold block text-blue-700 dark:text-blue-300">1. Capture</span>
                <p className="text-[10px] text-text-muted mt-0.5">CCD/CMOS Sensor</p>
              </div>

              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <HardDrive className="w-4 h-4 mx-auto mb-1 text-purple-600" />
                <span className="font-bold block text-purple-700 dark:text-purple-300">2. Transfer</span>
                <p className="text-[10px] text-text-muted mt-0.5">USB / NVMe SSD</p>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <Crop className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                <span className="font-bold block text-emerald-700 dark:text-emerald-300">3. Edit</span>
                <p className="text-[10px] text-text-muted mt-0.5">Crop & Masking</p>
              </div>

              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30">
                <Sliders className="w-4 h-4 mx-auto mb-1 text-amber-600" />
                <span className="font-bold block text-amber-700 dark:text-amber-300">4. Enhance</span>
                <p className="text-[10px] text-text-muted mt-0.5">Contrast & Sharpen</p>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                <FileText className="w-4 h-4 mx-auto mb-1 text-indigo-600" />
                <span className="font-bold block text-indigo-700 dark:text-indigo-300">5. Compress</span>
                <p className="text-[10px] text-text-muted mt-0.5">JPEG / WebP / PNG</p>
              </div>

              <div className="p-2.5 rounded-lg bg-rose-500/10 border-2 border-rose-500/50 shadow-sm">
                <Tv className="w-4 h-4 mx-auto mb-1 text-rose-600" />
                <span className="font-bold block text-rose-700 dark:text-rose-300">6. Integrate</span>
                <p className="text-[10px] text-rose-600 dark:text-rose-400 font-bold mt-0.5">Web, Game, VR</p>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-text-muted flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>Transforms raw optical photons into interactive digital visual media across all end-user screens</span>
            </div>
          </div>
        </EducationalFigure>

        {/* 3.3 Diverse Applications of Digital Imaging */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          3.3 Real-World Applications of Digital Imaging in Multimedia
        </h3>
        <p className="mb-4 leading-relaxed">
          Digital imaging multimedia ke pratyek kshetra me rehed ki haddi (backbone) ki tarah kaam karti hai:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-4">
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              • E-Learning & Digital Education
            </strong>
            <p className="text-xs text-text-secondary">
              Medical surgery ki high-resolution 3D anatomical images, interactive science diagrams, aur engineering schematics jisse students complex phenomena aasani se samajhte hain.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <strong className="text-blue-600 dark:text-blue-400 block text-sm font-bold mb-1">
              • Websites & User Interface (UI/UX)
            </strong>
            <p className="text-xs text-text-secondary">
              Responsive hero banners, product thumbnails, SVG icons, aur navigation buttons jo websites ko aakarshak aur intuitive banate hain.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-emerald-600 dark:border-emerald-400 block border bg-surface">
            <strong className="text-emerald-700 dark:text-emerald-300 block text-sm font-bold mb-1">
              • Video Games & Virtual Reality
            </strong>
            <p className="text-xs text-text-secondary">
              Photorealistic character textures, 360-degree environment skyboxes, terrain normal maps, aur 2D sprite sheets jo gaming me realism laate hain.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-purple-600 dark:border-purple-400 block border bg-surface">
            <strong className="text-purple-700 dark:text-purple-300 block text-sm font-bold mb-1">
              • Digital Advertising & Marketing
            </strong>
            <p className="text-xs text-text-secondary">
              E-commerce product catalogs (Amazon), social media promotional creatives (Instagram banners), aur digital hoardings.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-600 dark:border-amber-400 block border bg-surface">
            <strong className="text-amber-700 dark:text-amber-300 block text-sm font-bold mb-1">
              • Medical Diagnostics & Science
            </strong>
            <p className="text-xs text-text-secondary">
              Digital X-Ray, MRI, CT Scans, aur satellite remote sensing images jinhe doctor aur scientist enhanced contrast me analyze karte hain.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-teal-600 dark:border-teal-400 block border bg-surface">
            <strong className="text-teal-700 dark:text-teal-300 block text-sm font-bold mb-1">
              • Digital Archives & Museums
            </strong>
            <p className="text-xs text-text-secondary">
              Sadiyon purane hastashilp (manuscripts) aur aitihasik dharohar ki ultra-high-resolution digital scanning karke cloud par hamesha ke liye preserve karna.
            </p>
          </div>
        </div>

        {/* 10-Mark Exam Blueprint Checklist for Unit 4 */}
        <div className="p-5 rounded-2xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-500/[0.04] my-8">
          <div className="flex items-center gap-2 text-brand-700 dark:text-brand-400 font-bold text-base mb-2">
            <Award className="w-5 h-5" />
            <span>Unit 4 Complete 10-Mark Answer Writing Checklist (BTEUP Exam Special)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">
            Exam room mein baithe samay Unit 4 se banne wale 4 sambhavit 10-mark questions aur unke anivarya sub-headings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q1. Basics of Graphic Design: Elements & Principles (10 Marks)</strong>
              <p className="text-text-secondary">• Graphic Design formal definition & purpose<br />• 7 Elements: Line, Shape, Color, Typography, Space, Texture, Form<br />• 7 Principles: Balance, Contrast, Alignment, Hierarchy, Proportion, Repetition, Unity<br />• Figure 4.1 Framework Diagram<br />• Real-world multimedia examples</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q2. Digital Image Definition, Pixels & Bit Depth (10 Marks)</strong>
              <p className="text-text-secondary">• 2D Mathematical Matrix f(x, y) definition<br />• Pixel definition (smallest addressable unit)<br />• Dimensions & Resolution (PPI vs DPI 300 print)<br />• Bit Depth: 1-bit, 8-bit, 16-bit, 24-bit True Color (16.7M), 32-bit Alpha<br />• Figure 4.2 Pixel Matrix Diagram<br />• Raster vs Vector Image Comparison</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q3. Use of Digital Technology in Graphic Design (10 Marks)</strong>
              <p className="text-text-secondary">• Shift from manual drafting boards to digital creative suites<br />• Digital Hardware: Graphics Tablets (Stylus 8192 levels), Calibrated Monitors<br />• Software Suites: CorelDRAW, Photoshop, InDesign, Blender<br />• Core Advantages: Non-destructive layers, Undo/Redo, Vector precision, ICC color management</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q4. Digital Imaging in Multimedia Pipeline (10 Marks)</strong>
              <p className="text-text-secondary">• Digital Imaging definition & visual dominance in human perception<br />• Complete 6-Stage Pipeline: Capture → Transfer → Edit → Enhance → Compress → Integrate<br />• Figure 4.3 Pipeline Diagram<br />• Applications across 6 domains (E-Learning, UI/UX, Games, Ads, Medical, Archives)</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MtUnit4Content;
