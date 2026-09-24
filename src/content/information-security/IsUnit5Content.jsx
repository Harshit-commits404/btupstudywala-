import React from 'react';

const IsUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 05
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Information Security
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Security Standards, Audit and Continuity
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Information security compliance, ISO 27001 standard, Indian IT Act, aur disaster ke samay business ko chalu rakhne (BCP & DR) ke management concepts.
        </p>
      </header>

      <section id="security-standards" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Security Standards & ISO 27001</h2>
        <p className="mb-4">
          Security standards rules aur guidelines ka ek set hote hain jo organizations ko unke data ko properly manage aur secure karne mein guide karte hain. Inme sabse famous hai <strong>ISO/IEC 27001</strong>.
        </p>
        <p className="mb-4">
          <strong>ISO 27001</strong> ek international standard hai jo <em>Information Security Management System (ISMS)</em> establish, implement, maintain, aur continually improve karne ka framework deta hai. Ye standard basically organizations ko ye trust dilata hai ki unka data safe aur managed hai.
        </p>
      </section>

      <section id="laws" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Indian IT Act & IPR Laws</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Indian IT Act, 2000 (amended in 2008)</h3>
        <p className="mb-4">
          India mein cybercrimes aur electronic commerce (e-commerce) ko regulate karne wala mukhya kanoon (law) hai. Isme digital signatures ko legal validity di gayi hai. Iske kuch important sections cybercrimes se deal karte hain, jaise:
          <br/>- Section 43/66: Hacking aur data chori ke liye saza.
          <br/>- Section 66C: Identity theft (kisi aur ki pehchan churana).
          <br/>- Section 66E: Privacy violation.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">IPR (Intellectual Property Rights) Laws</h3>
        <p className="mb-4">
          IPR un creations ko protect karta hai jo insaan ke dimaag (intellect) se aati hain (jaise inventions, software code, books). InfoSec mein software piracy rokne ke liye IPR zaruri hai.
          Isme mukhya roop se <em>Copyrights</em> (software/books ke liye) aur <em>Patents</em> (inventions/hardware ke liye) shamil hote hain.
        </p>
      </section>

      <section id="audit-policies" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Security Audit Procedures & Policies</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Security Policy</h3>
        <p className="mb-4">
          Security policy ek document hai jo company top management dwara banaya jata hai. Ye define karta hai ki IT assets ka use kaise hoga, passwords kaise hone chahiye, aur security breach hone par kya action liya jayega.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">Security Audit</h3>
        <p className="mb-4">
          Audit ek systematic evaluation hai jisme ye check kiya jata hai ki organization apni banayi hui Security Policy ko properly follow kar rahi hai ya nahi. Auditors system configuration, logs aur physical security ko thoroughly inspect karte hain.
        </p>
      </section>

      <section id="dr-bcp" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Disaster Recovery (DR) & Business Continuity Planning (BCP)</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Disaster Recovery (DR)</h3>
        <p className="mb-4">
          Disaster (jaise aag lagna, flood, ransomware attack) hone ke baad, IT systems, servers aur data ko wapas normal state mein lana Disaster Recovery kehlata hai. Isme data backups (Cloud/Tape) bahut zaroori hote hain.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">Business Continuity Planning (BCP)</h3>
        <p className="mb-4">
          BCP ek broader plan hai. Iska goal ye ensure karna hai ki kisi disaster ke dauran bhi company ka <strong>critical business operations</strong> chalta rahe. (Jaise agar ek branch mein aag lag jaye, to dusre branch ya work-from-home se kaam chalu rahe jab tak DR team servers ko theek na kar de).
        </p>
      </section>
    </article>
  );
};

export default IsUnit5Content;
