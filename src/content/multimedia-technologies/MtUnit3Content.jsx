import React from 'react';

const MtUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 03
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Multimedia Technologies
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Content Development and Distribution
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Desktop Publishing (DTP) softwares jaise Photoshop, PageMaker, CorelDRAW aur Animation (2D/3D) kaise create aur distribute kiye jate hain.
        </p>
      </header>

      <section id="dtp-tools" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Desktop Publishing (DTP) Tools</h2>
        <p className="mb-4">
          Desktop Publishing ka matlab computer aur specific software ka use karke high-quality documents (books, magazines, brochures) ko design karna hai.
        </p>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li><strong>PageMaker:</strong> Adobe dwara banaya gaya ye ek classic DTP software hai (ab InDesign iski jagah le chuka hai). Iska mukhya kaam text aur images ko ek page par professionally arrange (page layout) karna tha.</li>
          <li><strong>CorelDRAW:</strong> Ye ek vector graphics editor hai. Vector graphics ko kitna bhi zoom kiya jaye, unki quality kharab nahi hoti. Ye logos, flex boards, aur illustrations banane ke liye use hota hai.</li>
          <li><strong>Photoshop:</strong> Adobe Photoshop duniya ka sabse popular raster (pixel-based) image editor hai. Ye photo retouching, color correction, aur digital painting ke liye standard hai.</li>
        </ul>
      </section>

      <section id="multimedia-animation" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Multimedia Animation & Effects</h2>
        <p className="mb-4">
          Animation ka arth hai still (rooki hui) images ya objects ko aisi speed mein sequentially (ek ke baad ek) display karna jisse movement ka illusion (bhram) paida ho.
        </p>
        <p className="mb-4">
          <strong>Special Effects (VFX):</strong> Iska use un scenes ko create ya enhance karne ke liye hota hai jo real-life mein shoot karna asambhav, khatarnak, ya bahut mehanga hota hai (jaise explosions ya alien worlds).
        </p>
      </section>

      <section id="2d-3d-flash" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. 2D/3D Animation & Flash</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">2D Animation</h3>
        <p className="mb-4">
          Isme objects aur characters ko two-dimensional space (X aur Y axis, yani width aur height) mein banaya aur move kiya jata hai. Purane cartoons (jaise Tom and Jerry) 2D animation ka classic example hain. Aajkal ye computer softwares se kiya jata hai.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">3D Animation</h3>
        <p className="mb-4">
          Isme objects ko three-dimensional space (X, Y, aur Z axis, yani depth bhi) mein banaya (modeling) aur move kiya jata hai. Ye objects real-world physics ko follow karte hain aur camera angles change kiye ja sakte hain. (Jaise Toy Story ya modern games).
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">Flash</h3>
        <p className="mb-4">
          Adobe Flash ek historically bahut important software tha jiska use web-based vector animations, browser games aur Rich Internet Applications banane ke liye hota tha. Internet ke early phase mein web par multimedia distribute karne ka ye mukhya madhyam tha. (Hala ki 2020 mein ise HTML5 ne replace kar diya).
        </p>
      </section>
    </article>
  );
};

export default MtUnit3Content;
