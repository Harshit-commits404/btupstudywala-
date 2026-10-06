import React from 'react';

// Reusable Educational Figure Component with SVG Fallback
const EducationalFigure = ({ src, alt, caption, credit, badge = "Educational Diagram", fallbackSvg }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <figure className="my-8 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-gradient-to-b from-slate-50/60 to-white dark:from-slate-900/60 dark:to-slate-950 p-4 sm:p-6 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/60 dark:border-slate-800/60 text-xs font-mono text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600 dark:text-brand-400">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          {badge}
        </span>
        {credit && <span className="text-[11px] truncate max-w-[220px] sm:max-w-none">Source: {credit}</span>}
      </div>

      <div className="flex items-center justify-center min-h-[180px] sm:min-h-[240px] overflow-x-auto py-2">
        {!imageError && src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setImageError(true)}
            className="max-h-80 w-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.01]"
          />
        ) : (
          <div className="w-full flex items-center justify-center p-2">
            {fallbackSvg}
          </div>
        )}
      </div>

      <figcaption className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-xs sm:text-sm text-center text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
        <strong className="text-slate-900 dark:text-slate-200 font-semibold">{alt}:</strong> {caption}
      </figcaption>
    </figure>
  );
};

export const IsUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200 leading-relaxed">
      {/* Header */}
      <header className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 05
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Semester 5 • Information Security
          </span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
            BTEUP Syllabus Aligned
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Security Standards, Laws, Audit &amp; Continuity
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/50 pl-4 py-1">
          Information security sirf technical tools (firewalls/antivirus) ka naam nahi hai; yeh organizational governance, 
          international standards (<strong>ISO 27001</strong>), cyber kanoon (<strong>Indian IT Act &amp; IPR</strong>), 
          systematic <strong>Security Audits</strong>, aur emergencies ke waqt business ko alive rakhne ke <strong>Disaster Recovery (DR) &amp; Business Continuity Planning (BCP)</strong> ka ek complete discipline hai.
        </p>
      </header>

      {/* Intro Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-brand-50/30 dark:from-slate-900 dark:to-brand-950/20 border border-slate-200 dark:border-slate-800 mb-12">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Why Organizations Need Standards, Laws, Audits &amp; Continuity?
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
          Koi bhi company chahe kitna bhi mehanga firewall khareed le, agar employees ke liye strict password policy nahi hai, 
          data backup ka koi schedule nahi hai, ya cybercrime hone par legal recourse ki jankari nahi hai, to wo organization survive nahi kar sakti:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
          <div className="p-3 bg-white dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">1. Standards (ISO 27001)</strong>
            <span>Global benchmark provide karte hain taaki clients aur partners company par trust kar sakein.</span>
          </div>
          <div className="p-3 bg-white dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong className="text-purple-600 dark:text-purple-400 block mb-1">2. Laws (IT Act &amp; IPR)</strong>
            <span>Cybercrime ke khilaf legal protection dete hain aur software piracy par kanooni karwahi ensure karte hain.</span>
          </div>
          <div className="p-3 bg-white dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong className="text-blue-600 dark:text-blue-400 block mb-1">3. Security Audits</strong>
            <span>Check karte hain ki banaye gaye rules aur policies sach mein follow ho rahe hain ya sirf kagaz par hain.</span>
          </div>
          <div className="p-3 bg-white dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">4. DR &amp; BCP</strong>
            <span>Disaster (aag, bhukamp, ransomware) hone ke baad company ko band hone se bachate hain.</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: SECURITY STANDARDS & ISO 27001 */}
      {/* ========================================================================= */}
      <section id="security-standards" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            1
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Security Standards &amp; ISO/IEC 27001 (ISMS)
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What is ISO 27001?</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            <strong>ISO/IEC 27001</strong> International Organization for Standardization (ISO) aur International Electrotechnical Commission (IEC) dwara banaya gaya world ka sabse well-known international security standard hai.
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Core Concept — ISMS:</strong> Yeh standard ek <strong>Information Security Management System (ISMS)</strong> ko establish, implement, operate, monitor, review, maintain aur continually improve karne ke liye specification provide karta hai. ISMS ka core focus <strong>Risk-Based Security Management</strong> hota hai.
          </div>
        </div>

        {/* Figure 5.1: ISMS PDCA Cycle */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/PDCA_Cycle.svg/800px-PDCA_Cycle.svg.png"
          alt="ISO 27001 ISMS Plan-Do-Check-Act (PDCA) Continuous Improvement Cycle"
          caption="ISO 27001 Deming Cycle (Plan-Do-Check-Act) par based hota hai: Security policies plan karein, controls implement karein, audit karke monitor karein, aur continuous improvement act karein."
          credit="Wikimedia Commons (Open Educational Management Framework)"
          badge="Figure 5.1: ISMS PDCA Cycle"
          fallbackSvg={
            <svg viewBox="0 0 780 220" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(60, 20)">
                <rect x="20" y="20" width="140" height="70" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                <text x="90" y="48" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="bold">PLAN</text>
                <text x="90" y="66" textAnchor="middle" fill="#0284c7" fontSize="9">Risk Assessment &amp;</text>
                <text x="90" y="78" textAnchor="middle" fill="#0284c7" fontSize="9">Policy Formulation</text>

                <path d="M 160 55 L 230 55" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

                <rect x="230" y="20" width="140" height="70" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                <text x="300" y="48" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">DO</text>
                <text x="300" y="66" textAnchor="middle" fill="#92400e" fontSize="9">Implement Security</text>
                <text x="300" y="78" textAnchor="middle" fill="#92400e" fontSize="9">Controls &amp; Training</text>

                <path d="M 370 55 L 410 55 L 410 135 L 370 135" stroke="#d97706" strokeWidth="2" fill="none" />

                <rect x="230" y="100" width="140" height="70" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
                <text x="300" y="128" textAnchor="middle" fill="#7e22ce" fontSize="12" fontWeight="bold">CHECK</text>
                <text x="300" y="146" textAnchor="middle" fill="#6b21a8" fontSize="9">Audits, Reviews &amp;</text>
                <text x="300" y="158" textAnchor="middle" fill="#6b21a8" fontSize="9">Metric Monitoring</text>

                <path d="M 230 135 L 160 135" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow)" />

                <rect x="20" y="100" width="140" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                <text x="90" y="128" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="bold">ACT</text>
                <text x="90" y="146" textAnchor="middle" fill="#166534" fontSize="9">Corrective Action &amp;</text>
                <text x="90" y="158" textAnchor="middle" fill="#166534" fontSize="9">Continuous Betterment</text>

                <path d="M 20 135 L 5 135 L 5 55 L 20 55" stroke="#16a34a" strokeWidth="2" fill="none" />
              </g>

              <g transform="translate(540, 40)">
                <rect x="0" y="0" width="180" height="130" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
                <text x="90" y="30" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="bold">ISMS Scope</text>
                <text x="90" y="55" textAnchor="middle" fill="#64748b" fontSize="9">• People (HR &amp; Staff)</text>
                <text x="90" y="75" textAnchor="middle" fill="#64748b" fontSize="9">• Processes (Policies)</text>
                <text x="90" y="95" textAnchor="middle" fill="#64748b" fontSize="9">• Technology (IT Systems)</text>
                <text x="90" y="115" textAnchor="middle" fill="#64748b" fontSize="9">• Physical Security (Offices)</text>
              </g>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Benefits of ISO 27001 Certification</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">1. Customer &amp; Partner Trust</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              International clients (jaise US/Europe ke banks) sirf un IT vendors ko contracts dete hain jo certified ISO 27001 compliant hote hain.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">2. Regulatory Compliance</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              GDPR, Indian DPDP Act, aur RBI cyber security guidelines ko easily satisfy karne mein help karta hai, jisse bhaari kanooni fines se bacha ja sakta hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">3. Systematic Risk Management</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Security ad-hoc ya andaze se nahi chalti; har asset ki risk value calculate karke targeted cost-effective controls lagaye jaate hain.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">4. Reduced Security Incidents</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Clear procedures aur regular audits ki wajah se breaches aur human errors mein 70%+ ki kami aati hai.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: INDIAN IT ACT & IPR LAWS */}
      {/* ========================================================================= */}
      <section id="laws" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            2
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Indian Information Technology (IT) Act &amp; IPR Laws
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Indian IT Act, 2000 (Amended 2008)</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            Information Technology Act, 2000 (IT Act) Bharat ka primary cyber law hai jo electronic commerce, digital contracts, aur cybercrimes ko regulate karne ke liye 17 October 2000 ko lagu kiya gaya tha. Isme 2008 mein bada amendment (IT Amendment Act 2008) kiya gaya.
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Key Legal Objectives:</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Electronic records aur digital signatures ko court mein legal recognition dena (jaise paper documents ko milti hai).</li>
              <li>E-Governance ko facilitate karna (government forms aur records electronically accept karna).</li>
              <li>Cybercrimes (hacking, identity theft, data theft, cyber terrorism) ko define karke unke liye strict civil penalties aur jail term establish karna.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Major Cyber Offence Sections (BTEUP Syllabus Focus)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-bold">
                <th className="p-3 border border-slate-200 dark:border-slate-800">Section</th>
                <th className="p-3 border border-slate-200 dark:border-slate-800">Cyber Crime / Subject</th>
                <th className="p-3 border border-slate-200 dark:border-slate-800">Legal Provision &amp; Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-800">Section 43</td>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Damage to Computer System without permission</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Data download, unauthorized access, virus introduce karna ya denial of service karna. Victim ko compensation pay karna hota hai.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-800">Section 66</td>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Computer Related Offences (Hacking)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Dishonestly ya fraudulently Section 43 ka koi act karne par 3 saal tak ki jail aur ₹5 lakh tak ka jurmana.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-800">Section 66C</td>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Identity Theft</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Kisi aur vyakti ka electronic signature, password ya unique identification code churakar use karna (Jail up to 3 years + Fine).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-800">Section 66D</td>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Cheating by Personation (Phishing/Scams)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Computer resource ka use karke kisi aur ka roop dhar kar dhokha dena ya paise thagna (Jail up to 3 years + Fine).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-800">Section 66E</td>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Privacy Violation</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Kisi vyakti ki private images consent ke bina capture, transmit ya publish karna (Jail up to 3 years + Fine).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-800">Section 66F</td>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Cyber Terrorism</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Bharat ki ekta, akhandata ya suraksha ko computer dwara threaten karna (Umarqaid / Life Imprisonment).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-800">Section 43A</td>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Reasonable Security Practices for Corporate Data</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Corporate body sensitive personal data handle karte waqt security maintain karne mein careless rahe toh victim ko unlimited compensation.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 mb-8 text-xs sm:text-sm text-blue-900 dark:text-blue-200">
          <strong>Educational Legal Context (Section 66A Note):</strong> BTEUP students ko dhyan rakhna chahiye ki purane textbooks mein shamil Section 66A ko Bharat ke Supreme Court ne 2015 ke landmark <em>Shreya Singhal vs. Union of India</em> case mein unconstitutional declare karke strike down kar diya tha, kyunki wo freedom of speech ka violation karta tha.
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Intellectual Property Rights (IPR) in IT</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4">
          <strong>Intellectual Property Rights (IPR)</strong> insani dimagh (mind) ke aavishkaro aur intellectual creations (jaise software source code, proprietary algorithms, books, multimedia designs) ko kanooni suraksha provide karte hain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 text-purple-600 dark:text-purple-400">
              1. Copyrights in IT
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Software source code, object code, user manuals aur website multimedia designs ko Copyright Act ke tehat Literary/Artistic work maana jata hai. 
              Yeh unauthorized code copying, crack banana, ya software piracy ko illegal banata hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 text-emerald-600 dark:text-emerald-400">
              2. Patents in IT
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Kisi novel, non-obvious aur industrially useful technical hardware invention ya technical process (jaise specialized cryptographic chip architecture) ko exclusive rights deta hai (usually 20 years ke liye).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 text-blue-600 dark:text-blue-400">
              3. Trademarks in IT
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Brand names, logos, slogans aur domain names (jaise Microsoft, Google, Infosys logo) ko protect karta hai taaki koi dusra person nakli brand banakar users ko mislead na kar sake.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 text-amber-600 dark:text-amber-400">
              4. Trade Secrets
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Confidential internal algorithms aur business processes (jaise Google search ranking algorithm ya Coca-Cola formula) jinhe Non-Disclosure Agreements (NDA) dwara protect kiya jata hai.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SECURITY AUDIT & POLICIES */}
      {/* ========================================================================= */}
      <section id="audit-policies" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            3
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Security Audit Procedures &amp; Information Security Policies
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What is a Security Audit?</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            <strong>Security Audit</strong> ek independent aur systematic evaluation hoti hai jo yeh assess karti hai ki organization ka IT infrastructure, network devices, operating systems, aur human practices established security policies aur industry standards ke compliant hain ya nahi.
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Audit vs Penetration Testing:</strong> Audit compliance aur checklists (Policies, Configurations, Logs) ko evaluate karta hai; jabki Pen-testing hackers ki tarah vulnerabilities ko physically exploit karne ki koshish karta hai.
          </div>
        </div>

        {/* Figure 5.2: 7-Stage Audit Workflow */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Audit_process.svg/800px-Audit_process.svg.png"
          alt="Standard 7-Stage Security Audit Procedure Workflow"
          caption="Security Audit Workflow: Planning & Scope -> Information Gathering -> Control Assessment -> Gap Analysis & Findings -> Audit Report -> Corrective Action Plan -> Follow-up Review."
          credit="Wikimedia Commons (Open Educational Audit Flowchart)"
          badge="Figure 5.2: Security Audit Workflow"
          fallbackSvg={
            <svg viewBox="0 0 780 160" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(10, 20)">
                <rect x="0" y="20" width="95" height="70" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                <text x="47" y="48" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">1. Planning</text>
                <text x="47" y="65" textAnchor="middle" fill="#0284c7" fontSize="8">&amp; Scope Define</text>

                <path d="M 95 55 L 110 55" stroke="#0284c7" strokeWidth="2" />

                <rect x="110" y="20" width="95" height="70" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                <text x="157" y="48" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold">2. Info Gather</text>
                <text x="157" y="65" textAnchor="middle" fill="#92400e" fontSize="8">Evidence, Logs</text>

                <path d="M 205 55 L 220 55" stroke="#d97706" strokeWidth="2" />

                <rect x="220" y="20" width="95" height="70" rx="6" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
                <text x="267" y="48" textAnchor="middle" fill="#7e22ce" fontSize="10" fontWeight="bold">3. Assessment</text>
                <text x="267" y="65" textAnchor="middle" fill="#6b21a8" fontSize="8">Control Check</text>

                <path d="M 315 55 L 330 55" stroke="#9333ea" strokeWidth="2" />

                <rect x="330" y="20" width="95" height="70" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                <text x="377" y="48" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">4. Findings</text>
                <text x="377" y="65" textAnchor="middle" fill="#b91c1c" fontSize="8">Gap Analysis</text>

                <path d="M 425 55 L 440 55" stroke="#dc2626" strokeWidth="2" />

                <rect x="440" y="20" width="95" height="70" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                <text x="487" y="48" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="bold">5. Reporting</text>
                <text x="487" y="65" textAnchor="middle" fill="#166534" fontSize="8">Formal Report</text>

                <path d="M 535 55 L 550 55" stroke="#16a34a" strokeWidth="2" />

                <rect x="550" y="20" width="95" height="70" rx="6" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
                <text x="597" y="48" textAnchor="middle" fill="#3730a3" fontSize="10" fontWeight="bold">6. Corrective</text>
                <text x="597" y="65" textAnchor="middle" fill="#4338ca" fontSize="8">Fix Flaws</text>

                <path d="M 645 55 L 660 55" stroke="#4f46e5" strokeWidth="2" />

                <rect x="660" y="20" width="95" height="70" rx="6" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
                <text x="707" y="48" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">7. Follow-up</text>
                <text x="707" y="65" textAnchor="middle" fill="#334155" fontSize="8">Re-verify</text>
              </g>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Security Policies: Organizational Foundation</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4">
          <strong>Security Policy</strong> management dwara formally approve kiya gaya high-level formal document hota hai jo define karta hai ki organization ke assets ko kaise protect karna hai aur users ki responsibilities kya hain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              1. Acceptable Use Policy (AUP)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Define karta hai ki company ke computers, internet aur email ko kya-kya karne ke liye use kiya ja sakta hai (strictly business use, no torrenting, no personal file sharing).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              2. Password &amp; Credential Policy
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Passwords ki minimum length (12+ characters), complexity (uppercase, numbers, symbols), expiry frequency (90 days), aur prohibition on password sharing specify karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              3. Access Control Policy
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Rule of Least Privilege aur Need-to-Know basis par decide karta hai ki kis role ke employee ko kis database ya network folder ka access milega.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              4. Incident Response Policy
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Cyber attack ya data leak hone par sabse pehle kisko call karna hai, affected server ko cable khinch kar isolate kaise karna hai, aur forensic team ko kab handover karna hai.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: DISASTER RECOVERY & BCP */}
      {/* ========================================================================= */}
      <section id="dr-bcp" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            4
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Disaster Recovery (DR) &amp; Business Continuity Planning (BCP)
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Disaster Recovery (DR) vs Business Continuity (BC)</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            Kisi bhukamp (Earthquake), aag lagne (Fire), Datacenter flood, ya massive Ransomware attack ke samay organization ko do alag-alag challenges handle karne hote hain:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong className="text-blue-600 dark:text-blue-400 text-sm block mb-1">Disaster Recovery (DR) — IT-Centric:</strong>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Disaster ke baad technical IT systems, databases, applications, aur network switches ko unke backups se wapas restore karke active karne ka process.
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong className="text-emerald-600 dark:text-emerald-400 text-sm block mb-1">Business Continuity Planning (BCP) — Organization-Wide:</strong>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Poori company ka broader survival plan. Yeh ensure karta hai ki disaster ke dauran bhi critical business operations (customer support, billing, logistics, payroll) bina ruke chalti rahein.
              </p>
            </div>
          </div>
        </div>

        {/* Figure 5.3: Disaster Recovery Timeline & Metrics */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/RTO_and_RPO.svg/800px-RTO_and_RPO.svg.png"
          alt="Disaster Recovery Timeline: Recovery Point Objective (RPO) vs Recovery Time Objective (RTO)"
          caption="Disaster Recovery Metrics: RPO maximum acceptable data loss window back in time batata hai; RTO maximum acceptable system downtime forward in time batata hai."
          credit="Wikimedia Commons (Open Educational Business Continuity Concept)"
          badge="Figure 5.3: DR Timeline & RPO/RTO"
          fallbackSvg={
            <svg viewBox="0 0 780 200" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <line x1="50" y1="100" x2="720" y2="100" stroke="#64748b" strokeWidth="4" />

              <circle cx="150" cy="100" r="8" fill="#16a34a" />
              <text x="150" y="80" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">Last Valid Backup</text>
              <text x="150" y="130" textAnchor="middle" fill="#64748b" fontSize="9">Time T-1</text>

              <line x1="380" y1="30" x2="380" y2="170" stroke="#dc2626" strokeWidth="3" strokeDasharray="4 2" />
              <circle cx="380" cy="100" r="10" fill="#dc2626" />
              <text x="380" y="25" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">⚡ DISASTER OCCURS!</text>
              <text x="380" y="125" textAnchor="middle" fill="#991b1b" fontSize="10">System Crash (T0)</text>

              <circle cx="620" cy="100" r="8" fill="#0284c7" />
              <text x="620" y="80" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="bold">Systems Restored</text>
              <text x="620" y="130" textAnchor="middle" fill="#64748b" fontSize="9">Normal Operation (T+1)</text>

              <rect x="160" y="45" width="210" height="30" rx="4" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
              <text x="265" y="65" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">← RPO (Data Loss Window) →</text>

              <rect x="390" y="45" width="220" height="30" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
              <text x="500" y="65" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">← RTO (Downtime Duration) →</text>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Metrics: RPO and RTO</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 mb-2">
              RPO (Recovery Point Objective)
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Data Loss Metric:</strong> Disaster hone se pehle ka wo maximum time duration jiska data loss company afford kar sakti hai. 
              (e.g., Agar RPO 2 ghante hai, toh company har 2 ghante mein backup legi; agar disaster hua to maximum pichhle 2 ghante ka data hi jayega).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 mb-2">
              RTO (Recovery Time Objective)
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Downtime Metric:</strong> Disaster ke baad systems ko wapas live karne mein lagne wala maximum acceptable time duration.
              (e.g., Agar RTO 4 ghante hai, to IT team ko disaster ke 4 ghante ke andar-andar alternate site par servers start karke operation chalu karna padega).
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Types of Alternate Recovery Sites</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 text-blue-600 dark:text-blue-400">1. Cold Site</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Sirf ek empty building jisme power aur air-conditioning hoti hai, par koi pre-installed computer hardware ya data nahi hota. Sasta hota hai, par restore karne mein kai din/hafte lag jaate hain (High RTO).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 text-amber-600 dark:text-amber-400">2. Warm Site</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Building ke andar servers aur network switches pehle se configured hote hain, lekin latest live data nahi hota. Backups ko manually load karna padta hai (Restore time: Few hours to 1-2 days).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 text-emerald-600 dark:text-emerald-400">3. Hot Site</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Primary datacenter ki exact mirror copy (replica). 24x7 synchronous data replication chalta rehta hai. Primary datacenter down hote hi seconds ya minutes mein automatic failover ho jata hai (Zero or Near-Zero RTO/RPO; highest cost).
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Master Comparison: Disaster Recovery (DR) vs Business Continuity (BCP)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-bold">
                <th className="p-3 border border-slate-200 dark:border-slate-800">Comparison Dimension</th>
                <th className="p-3 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400">Disaster Recovery (DR)</th>
                <th className="p-3 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">Business Continuity (BCP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Primary Focus</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">IT Systems, Datacenters, Database Backups, Networks.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Overall Business Operations, Employees, Customers, Facilities.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Timing of Execution</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Disaster aane ke <strong>Baad</strong> (Reactive technical restoration).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Disaster aane ke <strong>Dauran aur Baad</strong> (Proactive continuous running).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Key Responsible Team</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">IT Department, Database Administrators, Network Engineers.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Executive Board, HR, Legal, Operations, Business Unit Heads.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Target Goal</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Servers aur data ko normal state mein recover karna.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Business band na ho; revenue generation aur client support chalu rahe.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Relationship</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">DR is actually a technical subset / component of BCP.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">BCP is the master umbrella plan jisme DR shamil hota hai.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 10-Mark Exam Answer Blueprint */}
        <div className="rounded-xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-950/20 p-5 mt-10">
          <h3 className="text-base font-bold text-brand-700 dark:text-brand-300 mb-2 font-display">
            🎯 BTEUP Exam 10-Mark Answer Blueprint — Unit 5
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3">
            Agar exam mein question aaye: <strong>&quot;Explain ISO 27001 standard and distinguish between Disaster Recovery (DR) and Business Continuity Planning (BCP) with key metrics&quot;</strong>, to is sequence mein answer likhein:
          </p>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
            <li><strong>Introduction to ISO 27001:</strong> International benchmark for Information Security Management System (ISMS).</li>
            <li><strong>ISMS Deming PDCA Cycle:</strong> Plan, Do, Check, Act phases (Figure 5.1 draw karein).</li>
            <li><strong>Indian IT Act &amp; Cyber Offences:</strong> Section 43/66 (Hacking), 66C (Identity theft), 66D (Cheating/Phishing), 66E (Privacy).</li>
            <li><strong>Security Audit Procedures:</strong> 7-stage workflow diagram (Figure 5.2 draw karein).</li>
            <li><strong>Disaster Recovery vs Business Continuity:</strong> Meaning, Definition and Differences.</li>
            <li><strong>Key Metrics (RPO vs RTO):</strong> Data loss vs Downtime definition aur timeline diagram (Figure 5.3 draw karein).</li>
            <li><strong>Alternate Sites:</strong> Cold site, Warm site, Hot site comparison.</li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default IsUnit5Content;
