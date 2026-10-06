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

export const IsUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200 leading-relaxed">
      {/* Header */}
      <header className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 03
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Semester 5 • Information Security
          </span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
            BTEUP Syllabus Aligned
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Cryptography & Secure Software Development
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/50 pl-4 py-1">
          Ye unit data ko unreadable cipher mein convert karne ki mathematical art (<strong>Cryptography</strong>), 
          internet par digital identities ko trust provide karne wale infrastructure (<strong>Public Key Infrastructure - PKI</strong>), 
          aur software coding ke dauran vulnerabilities ko shuruat se hi eliminate karne ke <strong>Secure Software Development Life Cycle (S-SDLC)</strong> principles ko deeply cover karta hai.
        </p>
      </header>

      {/* ========================================================================= */}
      {/* SECTION 1: BASICS OF CRYPTOGRAPHY */}
      {/* ========================================================================= */}
      <section id="crypto-basics" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            1
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Basics of Cryptography & Cryptographic Model
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Meaning and Definition of Cryptography</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            <strong>Cryptography</strong> Greek words <em>&quot;Kryptos&quot;</em> (Secret ya Hidden) aur <em>&quot;Graphein&quot;</em> (Writing) se milkar bana hai. 
            Iska arth hota hai <strong>Secret Writing</strong>.
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Academic Definition (BTEUP 10-Mark):</strong> Cryptography ek aisi science aur mathematical technique hai jisme ordinary readable information (Plaintext) ko ek unreadable, scrambled format (Ciphertext) mein convert kiya jata hai, taaki untrusted communication channel par transmit hote samay unauthorized third party (Attacker/Eavesdropper) use interpret na kar sake.
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Terminologies of Cryptography</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4">
          Cryptography ko samajhne ke liye 5 fundamental components ko samajhna anivarya hai:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
            <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 mb-2">
              1. Plaintext (P)
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Original readable message ya unencrypted data jo human ya computer directly read aur interpret kar sakta hai (e.g., &quot;Transfer Rs 5000 to Account B&quot;).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
            <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 mb-2">
              2. Ciphertext (C)
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Encryption algorithm aur key apply karne ke baad create hua unreadable, gibberish ya scrambled output jo attacker ke liye meaningless noise jaisa dikhta hai (e.g., &quot;%9x$kQ@91!zL&quot;).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
            <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 mb-2">
              3. Encryption (E)
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Mathematical algorithm aur secret key ki madad se Plaintext ko Ciphertext mein convert karne ka process:
              <br /><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded mt-1 inline-block">C = E(K_e, P)</code>
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
            <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 mb-2">
              4. Decryption (D)
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Ciphertext ko valid decryption key ki sahayata se wapas original readable Plaintext mein transform karne ka reverse process:
              <br /><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded mt-1 inline-block">P = D(K_d, C)</code>
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm md:col-span-2">
            <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 mb-2">
              5. Key (K) - The Heart of Security
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Binary bits (numbers/strings) ka ek secret parameter jo cryptographic algorithm ke output ko control karta hai. 
              <strong>Kerckhoffs&apos;s Principle:</strong> Modern security mein algorithm public ho sakta hai (jaise AES ya RSA), lekin poori security key ki secrecy par depend karti hai. Agar key leak ho jaye to pura cipher compromised ho jata hai.
            </p>
          </div>
        </div>

        {/* Figure 3.1: Cryptographic Communication Model */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Encryption_and_decryption_process.svg/1000px-Encryption_and_decryption_process.svg.png"
          alt="Cryptographic Communication Model"
          caption="Sender dwara Plaintext par Encryption Key apply karke Ciphertext banaya jata hai; untrusted medium se travel karke Receiver Decryption Key se original message restore karta hai."
          credit="Wikimedia Commons (Open Educational / Public Domain)"
          badge="Figure 3.1: Cryptographic Model"
          fallbackSvg={
            <svg viewBox="0 0 780 200" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="60" width="110" height="70" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="75" y="95" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="bold">Sender (Alice)</text>
              <text x="75" y="115" textAnchor="middle" fill="#0284c7" fontSize="11">Plaintext (P)</text>

              <path d="M 130 95 L 180 95" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="180" y="50" width="120" height="90" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
              <text x="240" y="85" textAnchor="middle" fill="#7e22ce" fontSize="12" fontWeight="bold">Encryption (E)</text>
              <text x="240" y="105" textAnchor="middle" fill="#6b21a8" fontSize="10">Algorithm</text>
              <text x="240" y="125" textAnchor="middle" fill="#9333ea" fontSize="10">Key K1 [↑]</text>

              <path d="M 300 95 L 360 95" stroke="#9333ea" strokeWidth="2" />

              <rect x="360" y="65" width="120" height="60" rx="6" fill="#ffe4e6" stroke="#e11d48" strokeWidth="2" strokeDasharray="4 2" />
              <text x="420" y="92" textAnchor="middle" fill="#be123c" fontSize="11" fontWeight="bold">Ciphertext (C)</text>
              <text x="420" y="110" textAnchor="middle" fill="#9f1239" fontSize="9">Untrusted Channel</text>

              <path d="M 480 95 L 540 95" stroke="#9333ea" strokeWidth="2" />

              <rect x="540" y="50" width="120" height="90" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
              <text x="600" y="85" textAnchor="middle" fill="#7e22ce" fontSize="12" fontWeight="bold">Decryption (D)</text>
              <text x="600" y="105" textAnchor="middle" fill="#6b21a8" fontSize="10">Algorithm</text>
              <text x="600" y="125" textAnchor="middle" fill="#9333ea" fontSize="10">Key K2 [↑]</text>

              <path d="M 660 95 L 700 95" stroke="#0284c7" strokeWidth="2" />

              <rect x="700" y="60" width="110" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <text x="755" y="95" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="bold">Receiver (Bob)</text>
              <text x="755" y="115" textAnchor="middle" fill="#16a34a" fontSize="11">Plaintext (P)</text>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Four Fundamental Goals of Cryptography</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4">
          Exam mein pucha jata hai: <em>&quot;What are the security objectives achieved by Cryptography?&quot;</em> Yeh 4 primary goals provide karta hai:
        </p>

        <div className="space-y-3 mb-8">
          <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
            <div>
              <strong className="text-slate-900 dark:text-white text-sm">1. Confidentiality (Gopniyata):</strong>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Ensure karta hai ki unauthorized user transmission ya storage ke dauran data ke contents ko understand na kar sake.
              </p>
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
            <div>
              <strong className="text-slate-900 dark:text-white text-sm">2. Data Integrity (Akhandata):</strong>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Yeh guarantee karta hai ki data transmission ke dauran intentionally ya accidentally alter, modify, delete ya manipulate nahi hua hai (Hash functions &amp; MACs dwara).
              </p>
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 mt-2 shrink-0"></span>
            <div>
              <strong className="text-slate-900 dark:text-white text-sm">3. Authentication (Pehchan Satypan):</strong>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Receiver ko yeh mathematically prove karta hai ki message usi claimed sender dwara originate hua hai jiska dawa kiya ja raha hai.
              </p>
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
            <div>
              <strong className="text-slate-900 dark:text-white text-sm">4. Non-Repudiation (Inkar na karna):</strong>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Digital Signatures ki madad se sender baad mein message bhejne ya agreement approve karne se inkar nahi kar sakta, kyunki sender ki Private Key sirf usi ke paas thi.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Symmetric vs Asymmetric Cryptography</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4">
          Cryptography ko mathematical keys ke arrangement ke basis par 2 fundamental broad categories mein divide kiya jata hai:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-bold">
                <th className="p-3 border border-slate-200 dark:border-slate-800">Feature</th>
                <th className="p-3 border border-slate-200 dark:border-slate-800 text-brand-600 dark:text-brand-400">Symmetric Cryptography (Secret Key)</th>
                <th className="p-3 border border-slate-200 dark:border-slate-800 text-purple-600 dark:text-purple-400">Asymmetric Cryptography (Public Key)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Key Usage</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Dono ends par ek hi <strong>Single Shared Secret Key</strong> use hoti hai (K1 = K2).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Do mathematically linked keys use hoti hain: <strong>Public Key</strong> (sabko pata) aur <strong>Private Key</strong> (secret).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Execution Speed</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>Extremely Fast</strong> (bulk data transfer aur file encryption ke liye ideal).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>Slow</strong> (heavy modular arithmetic ki wajah se 1000x slower hoti hai).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Key Distribution Problem</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>High Risk:</strong> Secret key ko sender se receiver tak secretly transmit karna sabse bada challenge hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>No Key Exchange Risk:</strong> Public key ko openly share kiya ja sakta hai; private key kabhi share nahi hoti.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Scalability (N Users)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Poor: N users ke beech secure link ke liye <code>N(N-1)/2</code> unique keys chahiye.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Excellent: N users ke liye sirf <code>2N</code> keys chahiye (har user ke 1 pair).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Primary Applications</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Hard drive encryption (BitLocker), database encryption, active VPN data tunnels.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Digital Signatures, SSL/TLS handshake key exchange, SSH authentication.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Standard Algorithms</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>AES</strong> (128/256-bit), DES, 3DES, Blowfish, ChaCha20.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>RSA</strong> (2048/4096-bit), ECC (Elliptic Curve Cryptography), Diffie-Hellman, DSA.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 mb-8">
          <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1">
            Exam Point &amp; Hybrid Cryptography:
          </h4>
          <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">
            Real world internet systems (jaise HTTPS) na toh pure symmetric use karte hain na pure asymmetric. 
            Wo <strong>Hybrid Cryptosystem</strong> use karte hain: Asymmetric crypto (RSA/ECC) ka use sirf ek temporary &quot;Session Key&quot; ko safely exchange karne ke liye kiya jata hai, 
            aur fir actual heavy web content ko fast Symmetric crypto (AES-256) se encrypt kiya jata hai!
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: PUBLIC KEY INFRASTRUCTURE (PKI) */}
      {/* ========================================================================= */}
      <section id="pki" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            2
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Public Key Infrastructure (PKI) &amp; Digital Certificates
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What is PKI and Why is it Needed?</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            Agar koi vyakti aapse kahe: <em>&quot;Ye lo meri Public Key, mujhe paisa transfer kar do&quot;</em> — to aapko kaise pata chalega ki wo key sach mein State Bank of India ki hai ya kisi hacker ki jo bank banke baat kar raha hai (Man-in-the-Middle attack)?
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Definition:</strong> <strong>Public Key Infrastructure (PKI)</strong> hardware, software, policies, processes, aur third-party trust authorities ka ek comprehensive framework hai jo <strong>Digital Identity</strong> ko verify karta hai aur <strong>Public Keys ko unke valid owners ke sath bind (tie)</strong> karta hai via <strong>Digital Certificates</strong>.
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Components of PKI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Certificate Authority (CA)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              PKI ka central trusted anchor (e.g., DigiCert, Let&apos;s Encrypt, VeriSign). CA user ya website ki identity verify karta hai aur apne private key se digitally sign karke certificate issue karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Registration Authority (RA)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              CA ka assistant ya verifier. Jab koi nayi entity certificate ke liye apply karti hai, toh RA unke identity documents (domain ownership, business license) ko physically/electronically verify karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Digital Certificate (X.509 Standard)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Ek standardized electronic credential (jaise digital passport). Isme subject ka naam, public key, validity period, issuing CA ka signature, aur serial number hota hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Certificate Revocation List (CRL) &amp; OCSP
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Agar kisi website ki private key leak ho jaye ya certificate expiry se pehle cancel karna pade, toh CA use CRL blacklist mein daalta hai ya OCSP (Online Certificate Status Protocol) responder dwara browser ko real-time status batata hai.
            </p>
          </div>
        </div>

        {/* Figure 3.2: PKI Architecture */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Public-Key-Infrastructure.svg/800px-Public-Key-Infrastructure.svg.png"
          alt="PKI Architecture and Certificate Issuance Flow"
          caption="User CSR generate karta hai -> RA identity verify karta hai -> CA digitally sign karke X.509 Certificate issue karta hai -> Relying party (Browser) trusted Root CA se verify karta hai."
          credit="Wikimedia Commons (Open Educational Architecture Diagram)"
          badge="Figure 3.2: PKI Architecture"
          fallbackSvg={
            <svg viewBox="0 0 780 240" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="30" width="130" height="80" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="95" y="65" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="bold">Subject / Server</text>
              <text x="95" y="85" textAnchor="middle" fill="#0284c7" fontSize="10">Generates Key Pair</text>

              <path d="M 160 70 L 250 70" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="205" y="62" textAnchor="middle" fill="#0369a1" fontSize="9">1. CSR Request</text>

              <rect x="250" y="30" width="130" height="80" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
              <text x="315" y="65" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">RA (Registration)</text>
              <text x="315" y="85" textAnchor="middle" fill="#92400e" fontSize="10">Identity Verification</text>

              <path d="M 380 70 L 470 70" stroke="#d97706" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="425" y="62" textAnchor="middle" fill="#b45309" fontSize="9">2. Approved</text>

              <rect x="470" y="30" width="140" height="80" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <text x="540" y="65" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="bold">CA (Cert Authority)</text>
              <text x="540" y="85" textAnchor="middle" fill="#166534" fontSize="10">Signs with Private Key</text>

              <path d="M 540 110 L 540 160 L 160 160" stroke="#16a34a" strokeWidth="2" fill="none" />
              <text x="350" y="152" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="bold">3. X.509 Digital Certificate Delivered</text>

              <rect x="30" y="140" width="130" height="70" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
              <text x="95" y="170" textAnchor="middle" fill="#7e22ce" fontSize="11" fontWeight="bold">Relying Party</text>
              <text x="95" y="190" textAnchor="middle" fill="#6b21a8" fontSize="9">Client / Web Browser</text>

              <path d="M 95 110 L 95 140" stroke="#7e22ce" strokeWidth="2" strokeDasharray="3 3" />
              <text x="135" y="130" textAnchor="start" fill="#6b21a8" fontSize="8">4. Validates Cert via Root CA</text>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Relationship: Public/Private Keys &amp; Digital Certificate</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4">
          Ek common confusion hota hai ki <em>&quot;Certificate aur Key mein kya difference hai?&quot;</em>
        </p>
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 mb-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <p>
            • <strong>Public Key:</strong> Sirf raw numbers ka ek set hota hai. Isme yeh nahi likha hota ki ye key kiski hai.
          </p>
          <p>
            • <strong>Digital Certificate:</strong> Yeh Public Key ko owner ke naam (Domain, Company, Country) ke sath bind karta hai aur iske upar trusted authority (CA) ka digital seal (signature) laga hota hai.
          </p>
          <p>
            • <strong>Private Key:</strong> Kabhi certificate ke andar nahi hoti! Server apni Private Key ko apne secure hardware (HSM) ya safe filesystem mein hidden rakhta hai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm mb-2">Advantages of PKI:</h4>
            <ul className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 space-y-1 list-disc pl-4">
              <li>Global scalable trust model for billions of internet websites.</li>
              <li>Eliminates pre-shared secret key distribution risk.</li>
              <li>Strong Non-repudiation with legally recognized digital signatures.</li>
              <li>Centralized certificate revocation management (CRL/OCSP).</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
            <h4 className="font-bold text-rose-900 dark:text-rose-200 text-sm mb-2">Limitations of PKI:</h4>
            <ul className="text-xs sm:text-sm text-rose-800 dark:text-rose-300 space-y-1 list-disc pl-4">
              <li>Single Point of Failure: Agar Root CA compromise ho jaye, to sabhi signed certificates invalid ho jaenge.</li>
              <li>Heavy infrastructure cost aur certificate renewal management overhead.</li>
              <li>Expired certificates website outages aur user warning popups cause karte hain.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SECURE SOFTWARE DEVELOPMENT */}
      {/* ========================================================================= */}
      <section id="secure-software" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            3
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Security Considerations in Software Development (S-SDLC)
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Why Secure Software Development?</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            Industry reports ke anusaar <strong>90% se zyada cyber breaches software application layer ki coding kamiyon (bugs &amp; vulnerabilities) ki wajah se hote hain</strong>. 
            Agar software banne ke baad usme security add ki jaye, toh bug fix karna 30 guna zyada mehnga aur complicated hota hai.
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Secure SDLC Concept:</strong> Software Development Life Cycle ke har ek phase (Requirements se lekar Deployment aur Maintenance tak) security controls ko actively integrate karna Secure SDLC (S-SDLC) ya <strong>DevSecOps</strong> kehlata hai.
          </div>
        </div>

        {/* Figure 3.3: S-SDLC Lifecycle Diagram */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Secure_Software_Development_Lifecycle.svg/800px-Secure_Software_Development_Lifecycle.svg.png"
          alt="Secure Software Development Life Cycle Phases"
          caption="Har development phase par dedicated security control: Requirements (Abuse Cases) -> Design (Threat Modeling) -> Coding (Static Analysis) -> Testing (Pen-testing) -> Deployment (Hardening)."
          credit="Wikimedia Commons (Open Educational S-SDLC Model)"
          badge="Figure 3.3: S-SDLC Lifecycle"
          fallbackSvg={
            <svg viewBox="0 0 780 180" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(15, 20)">
                <rect x="0" y="20" width="115" height="90" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                <text x="57" y="55" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="bold">Requirements</text>
                <text x="57" y="75" textAnchor="middle" fill="#0284c7" fontSize="9">Security Req.</text>
                <text x="57" y="90" textAnchor="middle" fill="#0369a1" fontSize="9">&amp; Risk Analysis</text>

                <path d="M 115 65 L 145 65" stroke="#0284c7" strokeWidth="2" />

                <rect x="145" y="20" width="115" height="90" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                <text x="202" y="55" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="bold">Design</text>
                <text x="202" y="75" textAnchor="middle" fill="#92400e" fontSize="9">Threat Modeling</text>
                <text x="202" y="90" textAnchor="middle" fill="#b45309" fontSize="9">&amp; Architecture</text>

                <path d="M 260 65 L 290 65" stroke="#d97706" strokeWidth="2" />

                <rect x="290" y="20" width="115" height="90" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
                <text x="347" y="55" textAnchor="middle" fill="#7e22ce" fontSize="11" fontWeight="bold">Coding</text>
                <text x="347" y="75" textAnchor="middle" fill="#6b21a8" fontSize="9">Input Validation</text>
                <text x="347" y="90" textAnchor="middle" fill="#7e22ce" fontSize="9">Code Review (SAST)</text>

                <path d="M 405 65 L 435 65" stroke="#9333ea" strokeWidth="2" />

                <rect x="435" y="20" width="115" height="90" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                <text x="492" y="55" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">Testing</text>
                <text x="492" y="75" textAnchor="middle" fill="#166534" fontSize="9">Penetration Test</text>
                <text x="492" y="90" textAnchor="middle" fill="#15803d" fontSize="9">DAST &amp; Fuzzing</text>

                <path d="M 550 65 L 580 65" stroke="#16a34a" strokeWidth="2" />

                <rect x="580" y="20" width="115" height="90" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                <text x="637" y="55" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Deployment</text>
                <text x="637" y="75" textAnchor="middle" fill="#b91c1c" fontSize="9">Config Hardening</text>
                <text x="637" y="90" textAnchor="middle" fill="#991b1b" fontSize="9">Patch &amp; Monitor</text>
              </g>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Crucial Security Considerations During Coding &amp; Architecture</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6">
          BTEUP ke 10-mark question ke liye software developer ko nimnlikhit core guidelines follow karni chahiye:
        </p>

        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="text-base font-bold text-brand-600 dark:text-brand-400 mb-1">
              1. Input Validation &amp; Sanitization (Never Trust User Input)
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Web form fields ya API parameters se aane wala data hamesha malicious ho sakta hai. Agar data ko validate na kiya jaye, toh <strong>SQL Injection (SQLi)</strong> aur <strong>Cross-Site Scripting (XSS)</strong> attacks hote hain.
              <br /><span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1 inline-block">Best Practice: Parameterized Queries (Prepared Statements) aur strict Whitelisting Regex use karein.</span>
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="text-base font-bold text-brand-600 dark:text-brand-400 mb-1">
              2. Robust Authentication &amp; Session Management
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              User identity verify karne ke liye multi-factor authentication (MFA) use karein. Session IDs ko cryptographically random generate karein aur logout ke baad invalidate karein.
              <br /><span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1 inline-block">Best Practice: Cookies par &apos;HttpOnly&apos;, &apos;Secure&apos;, aur &apos;SameSite=Strict&apos; flags mandatory set karein.</span>
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="text-base font-bold text-brand-600 dark:text-brand-400 mb-1">
              3. Principle of Least Privilege (PoLP) in Code &amp; Database Access
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Web application ko kabhi database ke &apos;root&apos; ya &apos;sa&apos; superuser credentials se connect na karein. Application ko sirf wahi table read/write permissions di jayein jo specific module ke liye zaroori hain.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="text-base font-bold text-brand-600 dark:text-brand-400 mb-1">
              4. Safe Error Handling &amp; Logging
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Jab software mein koi runtime exception aye, toh screen par kabhi detailed database schema, SQL error ya code stack trace print na karein (Information Disclosure risk). End user ko hamesha generic friendly message dikhayein (e.g., &quot;An error occurred. Please try later.&quot;) aur internal secure log file mein detail record karein.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="text-base font-bold text-brand-600 dark:text-brand-400 mb-1">
              5. Secure Data Storage (Hashing &amp; Secrets Management)
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Sensitive data (passwords, PIN) ko kabhi plaintext mein store na karein. Passwords ke liye salted, one-way slow hashing algorithms (<strong>bcrypt, Argon2, PBKDF2</strong>) use karein. API keys aur database passwords ko hardcoded source code mein na rakhein, balki environment variables ya secret vaults mein rakhein.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="text-base font-bold text-brand-600 dark:text-brand-400 mb-1">
              6. Third-Party Dependency &amp; Patch Management
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Modern applications open-source libraries (npm, pip, maven) par heavily rely karti hain. Agar dependency mein vulnerability ho (jaise Log4j exploit), toh poora system hack ho sakta hai. Regularly Automated Vulnerability Scanners (jaise Snyk, OWASP Dependency-Check) run karein aur security patches apply karein.
            </p>
          </div>
        </div>

        {/* 10-Mark Exam Answer Blueprint */}
        <div className="rounded-xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-950/20 p-5 mt-10">
          <h3 className="text-base font-bold text-brand-700 dark:text-brand-300 mb-2 font-display">
            🎯 BTEUP Exam 10-Mark Answer Blueprint — Unit 3
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3">
            Agar exam mein question aaye: <strong>&quot;Explain Public Key Infrastructure (PKI) and differentiate between Symmetric and Asymmetric Cryptography with neat diagrams&quot;</strong>, to is structure mein answer likhein:
          </p>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
            <li><strong>Introduction &amp; Definition:</strong> Cryptography ka meaning (Plaintext $\to$ Ciphertext $\to$ Plaintext).</li>
            <li><strong>Cryptographic Model Diagram:</strong> Sender, Key, Encryption algorithm, Insecure channel, Decryption algorithm, Receiver (Figure 3.1 draw karein).</li>
            <li><strong>Comparison Table:</strong> Symmetric vs Asymmetric (Keys, Speed, Scalability, Algorithms).</li>
            <li><strong>PKI Concept:</strong> Why PKI is needed (Man-in-the-Middle problem solve karne ke liye).</li>
            <li><strong>Core Components of PKI:</strong> CA, RA, Digital Certificate (X.509 format), CRL/OCSP.</li>
            <li><strong>PKI Workflow Diagram:</strong> CSR generation, CA signature, Certificate distribution (Figure 3.2 draw karein).</li>
            <li><strong>Real-World Applications:</strong> HTTPS web banking, digital signatures, software code signing.</li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default IsUnit3Content;
