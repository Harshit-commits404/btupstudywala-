import React from 'react';
import {
  Compass,
  Clock,
  BookOpen,
  Lightbulb,
  Palette,
  Layers,
  Eye,
  Sparkles,
  Box,
  Workflow,
  PlayCircle,
  Film,
  AlertCircle,
  Award,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const MtUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER HERO TITLEPLATE */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
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
            Desktop Publishing and Multimedia Animation
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (डेस्कटॉप पब्लिशिंग एवं मल्टीमीडिया एनिमेशन: डीटीपी टूल्स, कोरलड्रॉ, फोटोशॉप, पेजमेकर, स्पेशल इफेक्ट्स, 2D/3D एनिमेशन एवं फ्लैश)
          </p>
        </div>

        {/* Syllabus Topics Chips Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Official Syllabus:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Desktop Publishing (DTP)
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            CorelDRAW
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Adobe Photoshop
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Adobe PageMaker
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Multimedia Animation
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Special Effects (VFX)
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            2D Animation
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            3D Animation Pipeline
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Adobe Flash
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/40 pl-4 py-1">
          Desktop Publishing (DTP) aur Multimedia Animation modern digital content creation ke do sabse shaktishali pillars hain. DTP ne kitabon, patrikaon aur marketing graphics ke publication ko aasan banaya, jabki computer animation ne still images me jeevan daalkar interactive entertainment, films aur simulations ko janm diya. Is chapter mein hum DTP ke core concepts, prastut software suites (CorelDRAW, Photoshop, PageMaker), animation ke vaigyanik siddhant (Persistence of Vision, Keyframing, Tweens), Visual Special Effects (VFX), 2D aur 3D animation pipelines, aur Adobe Flash ke interactive timeline architecture ko BTEUP Polytechnic examination ke 10-mark descriptive standards ke anusar deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* SECTION 1: DESKTOP PUBLISHING (DTP) TOOLS */}
      {/* ========================================================= */}
      <section id="dtp-tools" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            1. Desktop Publishing (DTP) Tools & Workflows
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेस्कटॉप पब्लिशिंग का अर्थ, 5-चरणीय कार्यप्रणाली, कोरलड्रॉ, फोटोशॉप, पेजमेकर एवं तुलनात्मक विश्लेषण)
          </div>
        </div>

        {/* 1.1 Desktop Publishing Fundamentals */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          1.1 Desktop Publishing (DTP) Fundamentals (डेस्कटॉप पब्लिशिंग की मूल अवधारणा)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Desktop Publishing (DTP)</strong> ek aisi computer takneek aur prakriya hai jisme ek personal computer, specialized page layout software, aur high-resolution digital printers ka upyog karke publication-grade documents (jaise kitabein, magazines, brochures, newspapers, flyers, posters aur digital PDFs) ko visually arrange aur print-ready format me design kiya jata hai.
        </p>

        {/* Formal Definition Box */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Formal Definition • Desktop Publishing (DTP)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "Desktop Publishing is the creation of documents using page layout software on a personal desktop computer, combining typographic text, raster photographs, and vector graphics into professional print and digital publications."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Pehle ke samay me akhbaar aur kitabein chhapne ke liye physical lead typesetters, chemical darkrooms aur manual cut-paste boards ka use hota tha jisme hafton lagte the. DTP ne computer screen par hi text likhne, photos daalne, font sajane aur turant print nikalne ki poori suvidha pradan karke publishing industry me kranti la di.
            </span>
          </div>
        </div>

        {/* 1.2 The 5-Stage DTP Workflow */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.2 The 5-Stage DTP Production Workflow (डीटीपी की 5-चरणीय कार्यप्रणाली)
        </h3>
        <p className="mb-4 leading-relaxed">
          Kisi bhi professional DTP publication (kitab, magazine, ya company brochure) ko shuru se lekar antim printing tak 5 anivarya charano se guzarna padta hai:
        </p>

        <div className="space-y-4 my-5">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 1: Content Creation & Acquisition (सामग्री संकलन एवं निर्माण)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Mool samagri taiyar karna: Text content ko word processor (MS Word) me likha jata hai, photographs ko high-resolution digital cameras se kheenchkar ya scanner se digitize kiya jata hai, aur corporate logos ko vector roop me draw kiya jata hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 2: Page Design & Layout (पेज डिजाइन एवं लेआउट संरचना)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              DTP software (PageMaker, InDesign, QuarkXPress) me page ka size (A4, Letter, Book trim), margins (top, bottom, inside gutter for binding), multi-column grid system (2-column ya 3-column), aur <strong>Master Pages</strong> (running headers, footers, page numbers) set kiye jaate hain.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 3: Editing & Image Pre-processing (इमेज एडिटिंग एवं सुधार)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Photographs ko <strong>Adobe Photoshop</strong> me retouch kiya jata hai: blemishes hatana, contrast aur levels adjust karna, RGB se <strong>CMYK (Cyan, Magenta, Yellow, Black)</strong> print color space me convert karna, aur image resolution ko standard <strong>300 DPI</strong> par set karna.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 4: Typography & Formatting (टाइपोग्राफी एवं टेक्स्ट फॉर्मेटिंग)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Layout ke andar text ko place karna: Heading, Subheading aur Body text ke font pairing (Serif vs Sans-serif), point size (10pt body text), <strong>Leading</strong> (line-spacing), <strong>Kerning</strong> (letter spacing), hyphenation rules, aur <strong>Text Wrap / Runaround</strong> (photo ke charo taraf text ghoomna) apply karna.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 5: Proofreading, Prepress & Publishing (प्रूफरीडिंग एवं प्रकाशन)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Grammar aur spelling proofing ke baad, high-resolution <strong>PDF/X (Prepress Standard)</strong> generate ki jaati hai. Offset printing press ke liye 4 separate color plates (C, M, Y, K) banti hain (Color Separation), ya fir digital e-book/web publishing ke liye interactive PDF export kiya jata hai.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 3.1: DTP WORKFLOW */}
        <EducationalFigure
          caption="Figure 3.1: End-to-End Desktop Publishing (DTP) Production Pipeline from Raw Content to Output"
          source="DTP Engineering Workflow Standards"
          license="Open Educational Diagram"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              DTP Production Pipeline • Content → Layout → Editing → Formatting → Output
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-mono max-w-xl mx-auto items-stretch">
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-blue-700 dark:text-blue-300 block text-xs">1. CONTENT</strong>
                  <p className="text-[10px] text-text-muted mt-0.5">Text & Photos</p>
                </div>
                <div className="text-[10px] text-text-secondary mt-2">Word, Camera</div>
              </div>

              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-purple-700 dark:text-purple-300 block text-xs">2. LAYOUT</strong>
                  <p className="text-[10px] text-text-muted mt-0.5">Grid & Margins</p>
                </div>
                <div className="text-[10px] text-text-secondary mt-2">PageMaker, Master</div>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-emerald-700 dark:text-emerald-300 block text-xs">3. EDITING</strong>
                  <p className="text-[10px] text-text-muted mt-0.5">Retouch & CMYK</p>
                </div>
                <div className="text-[10px] text-text-secondary mt-2">Photoshop, Corel</div>
              </div>

              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-amber-700 dark:text-amber-300 block text-xs">4. FORMATTING</strong>
                  <p className="text-[10px] text-text-muted mt-0.5">Typography & Wrap</p>
                </div>
                <div className="text-[10px] text-text-secondary mt-2">Kerning, Leading</div>
              </div>

              <div className="p-2.5 rounded-lg bg-rose-500/10 border-2 border-rose-500/50 flex flex-col justify-between shadow-sm">
                <div>
                  <strong className="text-rose-700 dark:text-rose-300 block text-xs">5. OUTPUT</strong>
                  <p className="text-[10px] text-text-muted mt-0.5">Press / PDF</p>
                </div>
                <div className="text-[10px] text-text-secondary mt-2">Offset, Digital</div>
              </div>
            </div>

            <p className="text-[11px] text-text-muted mt-4">
              All 5 stages ensure print accuracy, color fidelity (CMYK 300 DPI), and clean typographic hierarchy.
            </p>
          </div>
        </EducationalFigure>

        {/* 1.3 CorelDRAW */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          1.3 CorelDRAW in Detail (कोरलड्रॉ - वेक्टर ग्राफिक्स का पावरहाउस)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>CorelDRAW</strong> Corel Corporation (Canada) dwara 1989 me viksit kiya gaya duniya ka sabse lokpriya <strong>Vector Graphics Editor</strong> aur design software hai. Print media, advertising, printing press aur signage industry me iska upyog sarvadhik hota hai.
        </p>

        {/* Vector Graphics Concept */}
        <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 my-4">
          <strong className="text-blue-800 dark:text-blue-300 block text-sm font-bold mb-1 flex items-center gap-1.5">
            <Palette className="w-4 h-4 text-blue-600" /> Vector Graphics Concept (वेक्टर ग्राफिक्स का सिद्धांत)
          </strong>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            CorelDRAW images ko pixels (colored dots) ke roop me store nahi karta, balki <strong>Mathematical Formulas</strong>, Cartesian coordinates (X, Y points), lines, curves (Bézier curves), aur polygons ke roop me store karta hai.
            <br />
            <strong>Sabse Badi Visheshata: Resolution Independence!</strong>
            <br />
            Vector graphic ko chahe ek chote visiting card (2×3 inch) par print karein ya 50-foot ke highway billboard hoarding par scale karein, uske edges hamesha razor-sharp rehte hain aur quality me 0.01% ka bhi nuksaan (pixelation) nahi hota.
          </p>
        </div>

        {/* CorelDRAW Tool Palette */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">
          CorelDRAW Essential Tools & Features:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
          <div className="p-3 rounded-lg border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-0.5">• Pick Tool:</strong>
            <p className="text-text-secondary">Objects ko select karne, move karne, size badalne, aur 360-degree rotate karne ke liye primary tool.</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-0.5">• Shape Tool (F10):</strong>
            <p className="text-text-secondary">Vector lines ke Nodes aur control handles ko manipulate karke custom curve shapes banane ke liye.</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-0.5">• Freehand & Pen / Bézier Tool:</strong>
            <p className="text-text-secondary">Smooth mathematical curves, paths aur complex geometric outlines draw karne ke liye.</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-0.5">• Interactive Effects Tools:</strong>
            <p className="text-text-secondary">Blend Tool (do shapes ko aapas me morph karna), Contour Tool, Extrude Tool (2D shape ko 3D look dena), aur Drop Shadow.</p>
          </div>
        </div>
        <p className="text-xs text-text-secondary mt-2">
          <strong>Applications:</strong> Corporate logos, visiting cards, flex banners, signboards, product packaging boxes, brochure covers, aur vinyl laser cutter vector paths (.cdr, .eps, .svg formats).
        </p>

        {/* 1.4 Adobe Photoshop */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          1.4 Adobe Photoshop in Detail (फोटोशॉप - रास्टर इमेज एडिटिंग का लीडर)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Adobe Photoshop</strong> Thomas aur John Knoll dwara 1987 me banaya gaya aur Adobe Systems dwara 1990 me launch kiya gaya duniya ka sabse shaktishali aur standard <strong>Raster (Bitmap) Image Editing & Photo Manipulation</strong> software hai.
        </p>

        {/* Raster Image & The Layers Concept */}
        <div className="space-y-4 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-600" /> The Core Innovation: Layers Architecture (परतों की अवधारणा)
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              Photoshop ki sabse krantikari takneek <strong>Layers</strong> hai. Layers ko transparent glass sheets (paar-darshi kaanch ki sheet) ki tarah samjha ja sakta hai jo ek ke upar ek rakhi hoti hain:
            </p>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
              <li><strong>Non-Destructive Editing:</strong> Layer 3 par text likhne ya brush chalane se neeche wali Layer 1 ki background photo kharab nahi hoti. Kisi bhi layer ko alag se delete, hide ya move kiya ja sakta hai.</li>
              <li><strong>Layer Masks (मास्क):</strong> Black color layer ke hisse ko hide karta hai aur White color reveal karta hai, bina mool photo ko erase kiye.</li>
              <li><strong>Adjustment Layers:</strong> Levels, Curves, aur Color Balance ko bina original pixels ko damage kiye independently control karna.</li>
              <li><strong>Blending Modes:</strong> Layers ke aapas me mix hone ka tareeka (Multiply, Screen, Overlay, Soft Light).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Essential Photoshop Tool Categories
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-xs">
              <div className="p-2.5 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white mb-0.5">Selection Tools:</strong>
                <p className="text-text-secondary">Marquee, Magnetic Lasso, Magic Wand, Quick Selection, aur Pen Tool (clipping path ke liye).</p>
              </div>
              <div className="p-2.5 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white mb-0.5">Retouching Tools:</strong>
                <p className="text-text-secondary">Spot Healing Brush, Clone Stamp (Alt+Click clone sampling), Patch Tool, Content-Aware Fill.</p>
              </div>
              <div className="p-2.5 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white mb-0.5">Color & Filters:</strong>
                <p className="text-text-secondary">Curves (Ctrl+M), Levels (Ctrl+L), Gaussian Blur, Sharpening, Camera Raw Filter, Liquify.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 1.5 Adobe PageMaker */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          1.5 Adobe PageMaker in Detail (पेजमेकर - क्लासिक पेज लेआउट सॉफ्टवेयर)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Adobe PageMaker</strong> (mool roop se Aldus dwara 1985 me launch kiya gaya, baad me Adobe dwara 1994 me adhigrahit kiya gaya) duniya ka pehla commercial desktop publishing application tha. PageMaker + Apple Macintosh computer + Apple LaserWriter printer ne milkar 1980s ke dashak me <strong>"Desktop Publishing Revolution"</strong> ki shuruat ki thi.
        </p>

        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
              Core Purpose: Multi-Page Document Layout Assembly
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              CorelDRAW jahan drawing ke liye hai aur Photoshop photo edit karne ke liye, wahi PageMaker ka mukhya kaam <strong>hazaaron shabdon ke text aur darjanon images ko kitabon aur patrikaon ke roop me arrange (layout) karna</strong> hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
              Key Features of PageMaker:
            </strong>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4 mt-1">
              <li><strong>Master Pages (मास्टर पेजेज):</strong> Ek aisi common sheet jis par banaye gaye elements (page number, chapter title, header, footer, margin lines) poori 500-page ki kitab ke har page par automatically reflect hote hain.</li>
              <li><strong>Text Autoflow & Threading (टेक्स्ट थ्रेडिंग):</strong> Jab ek column me text zyada ho jata hai, to wo red arrow marker dikhata hai. Click karne par text agle column ya agle page par automatically flow (link) ho jata hai.</li>
              <li><strong>Text Wrap / Runaround:</strong> Kisi photo ke aane par text automatically photo ke borders ke charo taraf curve hokar arrange ho jata hai.</li>
              <li><strong>Story Editor:</strong> Ek built-in fast word processor jisme bina graphical layout ke seedhe text edit kiya ja sakta hai.</li>
            </ul>
          </div>
        </div>

        {/* 1.6 Master Comparison Table: CorelDRAW vs Photoshop vs PageMaker */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4">
          1.6 Master Comparison: CorelDRAW vs Photoshop vs PageMaker
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          BTEUP semester examinations mein aksar poocha jane wala 10-mark ka standard comparison:
        </p>

        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs my-5">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">Feature</th>
                <th className="py-2.5 px-3 font-bold text-blue-600 dark:text-blue-400">CorelDRAW</th>
                <th className="py-2.5 px-3 font-bold text-purple-600 dark:text-purple-400">Adobe Photoshop</th>
                <th className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">Adobe PageMaker</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">Primary Classification</td>
                <td className="py-2.5 px-3 text-text-secondary">Vector Graphics & Illustration Suite.</td>
                <td className="py-2.5 px-3 text-text-secondary">Raster Image Editing & Photo Manipulation.</td>
                <td className="py-2.5 px-3 text-text-secondary">Desktop Publishing (DTP) Page Layout.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">Underlying Graphic Type</td>
                <td className="py-2.5 px-3 text-text-secondary">Mathematical Vectors (Lines, Curves, Nodes).</td>
                <td className="py-2.5 px-3 text-text-secondary">Raster Bitmaps (Pixels grid, 300 DPI).</td>
                <td className="py-2.5 px-3 text-text-secondary">Hybrid (Vector text layout + Linked bitmaps).</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">Scalability (Zooming)</td>
                <td className="py-2.5 px-3 text-text-secondary">Infinite scaling with ZERO pixelation.</td>
                <td className="py-2.5 px-3 text-text-secondary">Zoom karne par pixelate (blur) ho jata hai.</td>
                <td className="py-2.5 px-3 text-text-secondary">Text razor-sharp rehta hai (PostScript).</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">Core Strength</td>
                <td className="py-2.5 px-3 text-text-secondary">Logos, hoarding flex, signboards, vector art.</td>
                <td className="py-2.5 px-3 text-text-secondary">Color grading, retouching, masking, layers.</td>
                <td className="py-2.5 px-3 text-text-secondary">Multi-page book layout, column formatting.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">Standard File Formats</td>
                <td className="py-2.5 px-3 text-text-secondary font-mono">.cdr, .ai, .eps, .svg</td>
                <td className="py-2.5 px-3 text-text-secondary font-mono">.psd, .tiff, .jpeg, .png</td>
                <td className="py-2.5 px-3 text-text-secondary font-mono">.pmd, .p65, .pdf</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">Example Output</td>
                <td className="py-2.5 px-3 text-text-secondary">Company logo, road banner, wedding card.</td>
                <td className="py-2.5 px-3 text-text-secondary">Model photo retouch, movie poster visual.</td>
                <td className="py-2.5 px-3 text-text-secondary">500-page engineering textbook, newspaper.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: MULTIMEDIA ANIMATION & SPECIAL EFFECTS */}
      {/* ========================================================= */}
      <section id="multimedia-animation" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.0 • ANIMATION SCIENCE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            2. Multimedia Animation Fundamentals & Special Effects
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (एनिमेशन का वैज्ञानिक आधार [दृष्टि-निर्बंध], फ्रेम्स, की-फ्रेम्स, ट्वीन्स एवं स्पेशल इफेक्ट्स [VFX])
          </div>
        </div>

        {/* 2.1 Animation Meaning and Scientific Basis */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          2.1 Meaning & Scientific Basis of Animation (एनिमेशन का वैज्ञानिक आधार)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Animation</strong> ek aisi takneek hai jisme sthir chitra (still images ya drawings) ke ek kram (sequence) ko itni tezi se ek ke baad ek display kiya jata hai ki insaan ki aankhon aur dimaag ko unme nirantar gati (continuous movement) ka aabhaas (illusion of motion) hone lagta hai.
        </p>

        {/* Scientific Basis Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20">
            <strong className="text-amber-800 dark:text-amber-300 block text-sm font-bold mb-1 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-amber-600" /> 1. Persistence of Vision (दृष्टि-निर्बंध)
            </strong>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Manushya ki retina (aankh ke parde) ki ek biological property hoti hai: Jab aankh kisi drishya ko dekhti hai aur wo drishya achanak hat jata hai, to bhi uska pratibimb lagbhag <strong>1/16th se 1/25th second (lagbhag 0.04 to 0.06 second)</strong> tak retina par bana rehta hai. Agar agla frame is samay-antar ke khatam hone se pehle hi dikha diya jaye, to dono frames aapas me ghul-milkar ek smooth motion banate hain.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20">
            <strong className="text-purple-800 dark:text-purple-300 block text-sm font-bold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600" /> 2. Phi Phenomenon (फाई परिघटना)
            </strong>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Yeh manushya ke dimaag (cognitive perception) ki prakriya hai. Jab do alag-alag sthanon par do light sources tezi se ek ke baad ek blink hoti hain, to dimaag do alag lights dekhne ke bajaye ek hi light ko ek jagah se doosri jagah move hota hua perceive karta hai. Animation isi manovaigyanik bhram par tikka hai.
            </p>
          </div>
        </div>

        {/* Core Concepts: Frames, Keyframes, Tweens */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          Core Animation Building Blocks:
        </h4>
        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              1. Frame & Frame Rate (FPS - Frames Per Second)
            </strong>
            <p className="text-xs text-text-secondary">
              Frame animation ka single still snapshot hota hai. 1 second me dikhaye jane wale frames ki sankhya ko Frame Rate (FPS) kehte hain:
              <br />
              • <strong>12 FPS:</strong> Traditional cartoon animation ("Shooting on twos").
              <br />
              • <strong>24 FPS:</strong> Worldwide Cinema / Film Standard (smooth cinematic movement).
              <br />
              • <strong>30 FPS / 60 FPS:</strong> NTSC digital video, modern smooth gaming, high-framerate action.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              2. Keyframes (की-फ्रेम्स - मुख्य स्थितियां)
            </strong>
            <p className="text-xs text-text-secondary">
              Kisi action ki shuruat (start), aakhiri bindu (end), aur mahatvapurna mod (extreme points of action) ko darshane wale frames ko Keyframes kehte hain. Traditional studios me senior master animator sirf keyframes banata tha.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              3. In-betweening / Tweens (इंटरपोलेशन)
            </strong>
            <p className="text-xs text-text-secondary">
              Do keyframes ke beech ke gap ko bharne ke liye jo madhyam frames generate kiye jaate hain, unhe "In-betweens" ya "Tweens" kehte hain. Computer software me animator sirf do keyframes banata hai (Frame 1 aur Frame 24), aur computer automatically beech ke 22 frames ko mathematically interpolate (calculate) kar leta hai.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 3.2: FRAME BASED ANIMATION */}
        <EducationalFigure
          caption="Figure 3.2: Principle of Persistence of Vision: Sequential Frames, Keyframes & In-Between Interpolation"
          source="Animation Principles • Persistence of Vision Standard"
          license="Open Educational Diagram"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              Frame Sequence • Keyframe 1 (Start) → Computer In-betweens (Tweens) → Keyframe 2 (End)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono max-w-xl mx-auto items-center">
              <div className="p-3 rounded-xl bg-blue-500/10 border-2 border-blue-500/50 shadow-sm">
                <span className="font-bold text-blue-700 dark:text-blue-300 block text-xs">FRAME 01</span>
                <span className="text-[10px] bg-blue-200 dark:bg-blue-900/60 px-1 py-0.5 rounded font-bold">KEYFRAME</span>
                <p className="text-[10px] text-text-muted mt-2">Ball at top left</p>
              </div>

              <div className="p-2.5 rounded-xl bg-secondary/60 border border-border">
                <span className="font-semibold block text-slate-600 dark:text-slate-400 text-xs">FRAME 02-07</span>
                <span className="text-[9px] text-text-muted">In-between 1</span>
                <p className="text-[10px] text-text-muted mt-2">Falling down</p>
              </div>

              <div className="p-2.5 rounded-xl bg-secondary/60 border border-border">
                <span className="font-semibold block text-slate-600 dark:text-slate-400 text-xs">FRAME 08-15</span>
                <span className="text-[9px] text-text-muted">In-between 2</span>
                <p className="text-[10px] text-text-muted mt-2">Squash & stretch</p>
              </div>

              <div className="p-2.5 rounded-xl bg-secondary/60 border border-border">
                <span className="font-semibold block text-slate-600 dark:text-slate-400 text-xs">FRAME 16-23</span>
                <span className="text-[9px] text-text-muted">In-between 3</span>
                <p className="text-[10px] text-text-muted mt-2">Bouncing back</p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/50 shadow-sm">
                <span className="font-bold text-emerald-700 dark:text-emerald-300 block text-xs">FRAME 24</span>
                <span className="text-[10px] bg-emerald-200 dark:bg-emerald-900/60 px-1 py-0.5 rounded font-bold">KEYFRAME</span>
                <p className="text-[10px] text-text-muted mt-2">Ball at top right</p>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-text-muted flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>24 Frames played in 1 Second create smooth continuous bouncing ball motion in human vision</span>
            </div>
          </div>
        </EducationalFigure>

        {/* 2.2 Special Effects (VFX) in Multimedia */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          2.2 Special Effects (VFX) in Multimedia (स्पेशल इफेक्ट्स)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Special Effects (SFX & VFX)</strong> aisi visual aur digital takneekein hain jinka upyog multimedia presentations, video games, aur filmon me aise drishya (scenes) banaye ya sajaye jane ke liye kiya jata hai jinhe aam camera shooting ke jariye vastavikta me shoot karna asambhav, atyadhik mehanga ya insani jaan ke liye khatarnak hota hai.
        </p>

        {/* Classification of Special Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
              1. Practical / Physical Special Effects (SFX)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Yeh shooting set par vastav me physically create kiye jaate hain:
              <br />
              • <strong>Miniatures:</strong> Shahar ya pulon ke chhote scale models banakar unhe crash karna.
              <br />
              • <strong>Pyrotechnics:</strong> Controlled aag aur explosions.
              <br />
              • <strong>Animatronics:</strong> Mechanical robotic creatures (jaise Jurassic Park me robotic dinosaur).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
              2. Digital Visual Effects (VFX)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Yeh shoot hone ke baad computer workstations par software (After Effects, Nuke) ke dwara post-production me banaye jaate hain:
              <br />
              • <strong>Chroma Keying (Green Screen):</strong> Actor ko hare background ke aage shoot karke background hata dena aur piche space ya jungle laga dena.
              <br />
              • <strong>CGI Integration:</strong> Computer-generated 3D monster ya spacecraft ko live video me jodna.
              <br />
              • <strong>Particle Systems:</strong> Barish, dhuwan, aag aur tufaano ko simulate karna.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: 2D ANIMATION, 3D ANIMATION & FLASH */}
      {/* ========================================================= */}
      <section id="2d-3d-flash" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.0 • PIPELINES & FLASH
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            3. 2D Animation, 3D Animation & Adobe Flash
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (2D एनिमेशन, 3D एनिमेशन की 6-चरणीय पाइपलाइन [मॉडलिंग से रेंडरिंग], 2D vs 3D तुलना एवं एडोब फ्लैश टाइमलाइन आर्किटेक्चर)
          </div>
        </div>

        {/* 3.1 2D Animation */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          3.1 2D Animation in Detail (2D एनिमेशन - द्विविमीय गति)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>2D Animation</strong> ek aisi animation takneek hai jisme characters, objects aur backgrounds ko ek flat two-dimensional surface (Cartesian Coordinate System) me banaya aur move kiya jata hai. Isme sirf do axes hote hain:
          <br />
          • <strong>X-Axis (Horizontal - Width):</strong> Chhodai
          <br />
          • <strong>Y-Axis (Vertical - Height):</strong> Oonchai
          <br />
          Isme koi vastavik gehraai (Depth - Z-axis) nahi hoti. Objects flat dikhte hain (jaise drawing book ka panna).
        </p>

        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              • Two Primary 2D Techniques:
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              1. <strong>Traditional Cel Animation:</strong> Har frame ko physical transparent celluloid sheet par haath se draw karke paint kiya jata tha (e.g. Classic Disney Movies, Tom & Jerry).
              <br />
              2. <strong>Digital 2D Vector / Cut-out Puppet Animation:</strong> Modern softwares (Adobe Animate, Toon Boom Harmony) me character ke haath, pair, gardan ko digital bones se jodkar puppets ki tarah move kiya jata hai.
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              • Applications of 2D Animation:
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Television cartoon shows (Chhota Bheem, Motu Patlu), Japanese Anime, website educational explainer videos, mobile apps ke micro-interactions, aur 2D mobile video games.
            </p>
          </div>
        </div>

        {/* 3.2 3D Animation & Its 6-Stage Pipeline */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          3.2 3D Animation & The 6-Stage Production Pipeline (10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>3D Animation</strong> me objects aur environments ko ek aabhaasi (virtual) 3-dimensional space me banaya jata hai jisme teen coordinate axes hote hain: <strong>X (Width), Y (Height), aur Z (Depth - गहराई)</strong>. Isme objects ko real-world solid sculptures ki tarah 360-degree ghumakar kisi bhi angle se dekha aur camera se shoot kiya ja sakta hai.
        </p>

        {/* The 6-Stage 3D Pipeline */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          The Comprehensive 6-Stage 3D Production Pipeline:
        </h4>
        <div className="space-y-4 my-5">
          {/* Stage 1 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 1: 3D Modeling (मॉडलिंग - वायरफ्रेम निर्माण)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Software (Blender, Autodesk Maya, 3ds Max) me 3D digital sculptures banana. Yeh aamtaur par <strong>Polygon Meshes</strong> se bante hain jo hazaaron chhote <em>Vertices (points), Edges (lines), aur Faces (surfaces)</em> se milkar bante hain. Yeh ek khokhla wireframe pinjra (cage) hota hai.
            </p>
          </div>

          {/* Stage 2 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 2: Texturing & Shading (टेक्सचरिंग एवं शेडिंग)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Khokhli gray wireframe model ko vastavik rang aur material dena:
              <br />
              • <strong>UV Unwrapping:</strong> 3D model ko 2D flat skin ki tarah kholna.
              <br />
              • <strong>Texture Mapping:</strong> Color textures, Bump/Normal Maps (khurdrapan), aur Roughness maps lagana taaki loha chamakdar lage, lakdi rough lage aur human skin realistic lage.
            </p>
          </div>

          {/* Stage 3 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 3: Rigging & Skinning (रिगिंग - कंकाल ढांचा बनाना)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              3D model ko hilane ke liye uske andar ek digital kankaal (Skeleton / Bones & Joints) fit kiya jata hai. Iske baad <strong>Skinning</strong> ke dwara 3D mesh ko un bones ke sath baandha jata hai, taaki jab haath ki haddi ghume to skin bhi swabhavik roop se mude. Isme <em>Inverse Kinematics (IK)</em> controllers lagaye jaate hain.
            </p>
          </div>

          {/* Stage 4 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 4: Animation (एनिमेशन - की-फ्रेमिंग एवं मोशन कैप्चर)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Rigs ko timeline par keyframe poses me set karna: chalta hua aadmi, uchhalta hua ball, ya udta hua vimaan. Modern filmon me <strong>Motion Capture (MoCap)</strong> suit pehne real actors ke motion sensors se seedhe data capture karke 3D rig par lagaya jata hai (jaise Avatar film me).
            </p>
          </div>

          {/* Stage 5 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 5: Lighting (लाइटिंग - प्रकाश व्यवस्था)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              3D scene me virtual roshni lagana: Directional Sun Light (suraj ki dhoop), Point Lights (bulb), Spotlights (car headlight), aur HDRI Environment maps. Lighting se hi 3D scene me gehraai, shadows (parchhaiyan) aur cinematic mood paida hota hai.
            </p>
          </div>

          {/* Stage 6 */}
          <div className="p-4 rounded-xl border-2 border-brand-500/40 bg-brand-50/20 dark:bg-brand-500/[0.04]">
            <strong className="text-brand-700 dark:text-brand-400 block text-sm font-bold mb-1">
              Stage 6: Rendering (रेंडरिंग - 2D फाइनल वीडियो जनरेशन)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Yeh 3D pipeline ka antim aur sabse heavy computational charan hai. Rendering engine (Arnold, V-Ray, Cycles, RenderMan) math formulas ke jariye roshni ki kiranon ke takrane (Ray Tracing), reflections, refractions aur shadows ko calculate karta hai aur har 3D frame ko <strong>2D final video frame (Full HD / 4K)</strong> me convert karke output deta hai. Ek complex film frame ko render karne me ghanton lag sakte hain!
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 3.3: 3D PIPELINE DIAGRAM */}
        <EducationalFigure
          caption="Figure 3.3: The Comprehensive 6-Stage 3D Computer Animation Production Pipeline"
          source="Wikimedia Commons • 3D Pipeline Standards"
          sourceUrl="https://commons.wikimedia.org/wiki/File:3D_Pipeline.svg"
          license="CC BY-SA 3.0"
          maxWidth="max-w-3xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              3D Animation Pipeline • Modeling → Texturing → Rigging → Animation → Lighting → Rendering
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono max-w-2xl mx-auto">
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <Box className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                <span className="font-bold block text-blue-700 dark:text-blue-300">1. Modeling</span>
                <p className="text-[10px] text-text-muted mt-0.5">Wireframe Mesh</p>
              </div>

              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <Palette className="w-4 h-4 mx-auto mb-1 text-purple-600" />
                <span className="font-bold block text-purple-700 dark:text-purple-300">2. Texturing</span>
                <p className="text-[10px] text-text-muted mt-0.5">UV Color & Normal</p>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <Workflow className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                <span className="font-bold block text-emerald-700 dark:text-emerald-300">3. Rigging</span>
                <p className="text-[10px] text-text-muted mt-0.5">Skeleton Bones</p>
              </div>

              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30">
                <PlayCircle className="w-4 h-4 mx-auto mb-1 text-amber-600" />
                <span className="font-bold block text-amber-700 dark:text-amber-300">4. Animation</span>
                <p className="text-[10px] text-text-muted mt-0.5">Poses & Keyframes</p>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                <Sparkles className="w-4 h-4 mx-auto mb-1 text-indigo-600" />
                <span className="font-bold block text-indigo-700 dark:text-indigo-300">5. Lighting</span>
                <p className="text-[10px] text-text-muted mt-0.5">Sun, Spot, Shadows</p>
              </div>

              <div className="p-2.5 rounded-lg bg-rose-500/10 border-2 border-rose-500/50 shadow-sm">
                <Film className="w-4 h-4 mx-auto mb-1 text-rose-600" />
                <span className="font-bold block text-rose-700 dark:text-rose-300">6. Rendering</span>
                <p className="text-[10px] text-rose-600 dark:text-rose-400 font-bold mt-0.5">Ray Tracing 2D</p>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-text-muted flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>Final Rendered frames composited with background & sound into production MP4 movie</span>
            </div>
          </div>
        </EducationalFigure>

        {/* 3.3 2D vs 3D Animation Comparison */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4">
          3.3 Master Comparison: 2D Animation vs 3D Animation
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          BTEUP Semester exams me 5 se 10 marks ka direct comparison:
        </p>

        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs my-5">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">Comparison Parameter</th>
                <th className="py-2.5 px-3 font-bold text-blue-600 dark:text-blue-400">2D Animation</th>
                <th className="py-2.5 px-3 font-bold text-purple-600 dark:text-purple-400">3D Animation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">1. Coordinate Space</td>
                <td className="py-2.5 px-3 text-text-secondary">2 Axes: X (Width) and Y (Height). Flat plane.</td>
                <td className="py-2.5 px-3 text-text-secondary">3 Axes: X (Width), Y (Height), and Z (Depth). 3D Volume.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">2. Object Nature</td>
                <td className="py-2.5 px-3 text-text-secondary">Flat drawings / vector silhouettes.</td>
                <td className="py-2.5 px-3 text-text-secondary">Solid volumetric 3D wireframe models with physical surfaces.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">3. Camera Movement</td>
                <td className="py-2.5 px-3 text-text-secondary">Simit (Sirf Pan left/right aur Zoom in/out).</td>
                <td className="py-2.5 px-3 text-text-secondary">Purna swatantrata (360-degree orbit, crane, aerial camera shots).</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">4. Lighting & Shadows</td>
                <td className="py-2.5 px-3 text-text-secondary">Haath se draw kiye gaye static shadows.</td>
                <td className="py-2.5 px-3 text-text-secondary">Mathematically calculated real-time dynamic light rays & shadows.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">5. Hardware Requirements</td>
                <td className="py-2.5 px-3 text-text-secondary">Normal / Standard computer par chal jata hai.</td>
                <td className="py-2.5 px-3 text-text-secondary">High-end multi-core CPU, dedicated GPU (RTX), aur Render farms zaroori.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">6. Software Used</td>
                <td className="py-2.5 px-3 text-text-secondary font-mono">Adobe Animate, Toon Boom Harmony, Moho.</td>
                <td className="py-2.5 px-3 text-text-secondary font-mono">Autodesk Maya, 3ds Max, Blender, Cinema 4D.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">7. Classic Examples</td>
                <td className="py-2.5 px-3 text-text-secondary">Tom & Jerry, The Lion King (1994), Motu Patlu.</td>
                <td className="py-2.5 px-3 text-text-secondary">Toy Story, Avatar, Frozen, GTA V, modern games.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3.4 Adobe Flash in Multimedia Animation */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          3.4 Adobe Flash in Multimedia Animation (एडोब फ्लैश की भूमिका एवं आर्किटेक्चर)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Adobe Flash</strong> (mool roop se <em>FutureSplash Animator</em>, baad me Macromedia Flash aur 2005 ke baad Adobe Flash) internet ke itihas ka sabse krantikari web animation aur interactive multimedia platform tha. 1990s aur 2000s ke dashak me internet par aane wali 90% web animations, browser games, aur interactive websites Flash par hi chalti thi.
        </p>

        {/* Core Architecture of Flash */}
        <div className="space-y-4 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Core Architectural Concepts of Adobe Flash:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs">
              <div className="p-2.5 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white mb-0.5">1. Timeline (टाइमलाइन):</strong>
                <p className="text-text-secondary">Frame-by-frame samay ka scale. Is par horizontal frames hote hain aur vertical stacked layers hoti hain.</p>
              </div>
              <div className="p-2.5 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white mb-0.5">2. Frames & Keyframes:</strong>
                <p className="text-text-secondary">Regular Frame (sthir content), Keyframe (jahan content me badlaav hota hai), Blank Keyframe (khali slot).</p>
              </div>
              <div className="p-2.5 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white mb-0.5">3. Symbols & Library:</strong>
                <p className="text-text-secondary">Graphic Symbols, Button Symbols (Up, Over, Down, Hit states), aur Movie Clip Symbols. Ek symbol ko baar-baar use karne se file size nahi badhta.</p>
              </div>
              <div className="p-2.5 rounded bg-secondary/50 border border-border">
                <strong className="block text-slate-900 dark:text-white mb-0.5">4. Motion Tween vs Shape Tween:</strong>
                <p className="text-text-secondary">Motion Tween kisi symbol ko ek path par ghumata hai; Shape Tween ek shape ko doosri shape me morph karta hai (jaise circle se star).</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
              • ActionScript & The SWF Format:
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Flash sirf animation nahi tha, isme <strong>ActionScript</strong> (ek ECMAScript-based programming language) thi jiske dwara buttons par click events, interactive quizzes, video streaming, aur complex web games banaye ja sakte the. Compiled output <strong>.swf (Shockwave Flash)</strong> format me nikalta tha jo vector hone ke karan slow dial-up modems par bhi instant download ho jata tha.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm mb-1">
              <AlertCircle className="w-4 h-4" />
              <span>Historical Context: Transition to HTML5 (फ्लैश का समापन):</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Mobile smartphones aane ke baad Flash battery bohot tezi se khata tha, security loopholes the, aur proprietary tha. Steve Jobs ke 2010 ke aitihaasik <em>"Thoughts on Flash"</em> ke baad duniya <strong>HTML5, CSS3, WebGL aur Canvas</strong> par shift ho gayi. Adobe ne Flash ko modernize karke <strong>Adobe Animate</strong> bana diya jo aaj bhi industry me 2D vector animation ke liye widely used hai.
            </p>
          </div>
        </div>

        {/* 10-Mark Exam Blueprint Checklist for Unit 3 */}
        <div className="p-5 rounded-2xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-500/[0.04] my-8">
          <div className="flex items-center gap-2 text-brand-700 dark:text-brand-400 font-bold text-base mb-2">
            <Award className="w-5 h-5" />
            <span>Unit 3 Complete 10-Mark Answer Writing Checklist (BTEUP Exam Special)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">
            Exam room mein baithe samay Unit 3 se banne wale 4 sambhavit 10-mark questions aur unke anivarya sub-headings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q1. Desktop Publishing (DTP) & Core Software Suite (10 Marks)</strong>
              <p className="text-text-secondary">• DTP Definition & Historical Significance<br />• 5-Stage DTP Production Workflow<br />• Figure 3.1 DTP Workflow Diagram<br />• CorelDRAW (Vector / Bézier curves / Scaling)<br />• Photoshop (Raster / Layers / Masks / 300 DPI)<br />• PageMaker (Master Pages, Text Autoflow)<br />• Master Comparison Table</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q2. Photoshop Layers & Editing Tools (10 Marks)</strong>
              <p className="text-text-secondary">• Raster image concept (pixel grid)<br />• Layers architecture & Non-destructive editing<br />• Layer Masks vs Adjustment Layers vs Blending modes<br />• Selection Tools (Marquee, Lasso, Pen Tool)<br />• Retouching (Clone Stamp, Healing Brush, Content-Aware)<br />• Color corrections (Levels, Curves, CMYK)</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q3. Multimedia Animation Principles & 3D Pipeline (10 Marks)</strong>
              <p className="text-text-secondary">• Persistence of Vision (1/16th sec) & Phi phenomenon<br />• Frames, FPS (12/24/30), Keyframes, Tweens<br />• Figure 3.2 Frame Interpolation Diagram<br />• 6-Stage 3D Pipeline: Modeling → Texturing → Rigging → Animation → Lighting → Rendering<br />• Figure 3.3 3D Pipeline Diagram<br />• 2D vs 3D Animation Comparison Table</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q4. Special Effects (VFX) & Adobe Flash (10 Marks)</strong>
              <p className="text-text-secondary">• Special effects definition & why needed<br />• Practical SFX vs Digital VFX (Chroma Key, CGI, Particles)<br />• Flash Timeline architecture (Frames, Keyframes, Layers)<br />• Symbols (Graphic, Button, Movie Clip) & Library<br />• Motion Tween vs Shape Tween<br />• ActionScript & Transition to HTML5</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MtUnit3Content;
