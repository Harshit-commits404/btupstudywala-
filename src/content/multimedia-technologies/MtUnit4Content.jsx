import React from 'react';

const MtUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 04
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Multimedia Technologies
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Introduction to Digital Imaging
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Graphic design ke basics, digital images ki definition aur multimedia environment mein digital imaging ke uses.
        </p>
      </header>

      <section id="graphic-design" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Basics of Graphic Design</h2>
        <p className="mb-4">
          Graphic design ek visual communication (drishya sanchar) ki kala hai. Isme typography (text/fonts), photography, aur illustration ka use karke ideas aur messages ko effectively logo tak pahunchaya jata hai.
        </p>
        <p className="mb-4">
          <strong>Basic Elements of Design:</strong>
          <br/>- Line, Shape, Color, Texture, aur Space.
          <br/><strong>Basic Principles of Design:</strong>
          <br/>- Balance, Contrast, Emphasis, aur Alignment.
        </p>
      </section>

      <section id="digital-images" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Definition of Digital Images & Technology</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Definition of Digital Images</h3>
        <p className="mb-4">
          Digital Image ek real-world scene (image) ka numeric representation (aamtaur par binary 0s aur 1s mein) hota hai, jise computer screen par display kiya ja sakta hai.
        </p>
        <p className="mb-4">Mukhya roop se digital images 2 types ki hoti hain:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Raster (Bitmap) Images:</strong> Ye chhote-chhote colored dots se milkar banti hain jinhe <em>Pixels</em> kehte hain (jaise JPEG, PNG). Zoom karne par ye blur (pixelate) ho jati hain.</li>
          <li><strong>Vector Images:</strong> Ye mathematical formulas, lines aur curves (paths) se banti hain (jaise SVG, CorelDRAW files). Inhe kitna bhi zoom karein, quality kam nahi hoti.</li>
        </ul>

        <h3 className="text-xl font-bold mt-4 mb-2">Use of Digital Technology</h3>
        <p className="mb-4">
          Digital technology ne graphic design ko puri tarah badal diya hai. Pehle jahan manual drawing board, paints aur stencils use hote the, wahi aaj pen tablets, stylus aur powerful softwares (Adobe Creative Cloud) ka use hota hai. Digital files ko easily undo, save, copy aur duniya bhar me instantly share kiya ja sakta hai.
        </p>
      </section>

      <section id="imaging-in-multimedia" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Digital Imaging in Multimedia</h2>
        <p className="mb-4">
          Kisi bhi multimedia project (chahe wo website ho, video game ho, ya presentation) mein Digital Imaging ka ek central role hota hai:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Visual Appeal:</strong> Images text ke mukable jaldi samajh me aati hain aur user ka dhyan akarshit karti hain.</li>
          <li><strong>User Interface (UI):</strong> Buttons, icons aur backgrounds digital images hi hote hain jo navigation ko aasan banate hain.</li>
          <li><strong>Data Representation:</strong> Complex data ko infographics ya charts (jo digital images hain) ke roop me easily present kiya ja sakta hai.</li>
          <li><strong>Animation/Video Foundation:</strong> Har video aur animation actually sequence of digital images (frames) hi hota hai.</li>
        </ul>
      </section>
    </article>
  );
};

export default MtUnit4Content;
