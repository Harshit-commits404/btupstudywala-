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

export const IsUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200 leading-relaxed">
      {/* Header */}
      <header className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 04
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Semester 5 • Information Security
          </span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
            BTEUP Syllabus Aligned
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Network Security Products &amp; Systems
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/50 pl-4 py-1">
          Modern enterprise IT networks ko external cyber threats se bachane ke liye deploy kiye jane wale specialized security appliances 
          jaise <strong>Firewall</strong>, <strong>IDS (Intrusion Detection System)</strong>, <strong>IPS (Intrusion Prevention System)</strong>, 
          <strong>VPN Concentrator</strong>, aur <strong>Content Screening Gateways</strong> ki working, placement aur architectures ka detailed study.
        </p>
      </header>

      {/* Intro Security Triangle */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-brand-50/30 dark:from-slate-900 dark:to-brand-950/20 border border-slate-200 dark:border-slate-800 mb-12">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Network Defense Strategy: Prevention vs Detection vs Response</h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Kisi bhi organization ki network security 3 complementary pillars par tikee hoti hai:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="p-3 bg-white dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">1. Prevention (Rokhtham)</strong>
            <span>Threats ko network perimeter ke andar ghusne se pehle hi block karna (e.g., Firewall, IPS, VPN).</span>
          </div>
          <div className="p-3 bg-white dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong className="text-blue-600 dark:text-blue-400 block mb-1">2. Detection (Khoj/Pehchan)</strong>
            <span>Perimeter breach hone par malicious patterns, unauthorized scanning ya malware activity ko spot karna (e.g., IDS, SIEM).</span>
          </div>
          <div className="p-3 bg-white dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong className="text-purple-600 dark:text-purple-400 block mb-1">3. Response (Pratikriya)</strong>
            <span>Alert aane par system ko isolate karna, connection drop karna aur security team dwara investigation karna.</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: FIREWALL */}
      {/* ========================================================================= */}
      <section id="firewall" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            1
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Firewall: Principles, Architecture &amp; Types
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Definition and Fundamental Role</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            Firewall ek dedicated hardware appliance ya software software module hota hai jo ek <strong>Trusted Internal Network</strong> (e.g., Company LAN) 
            aur ek <strong>Untrusted External Network</strong> (e.g., Public Internet) ke perimeter par barrier (suraksha deewar) ki tarah act karta hai.
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Working Concept:</strong> Yeh aane wale (Inbound) aur jaane wale (Outbound) network traffic ke har packet ko pre-defined security rules (Access Control Lists - ACLs) ke anusaar evaluate karta hai aur decide karta hai ki packet ko <strong>ALLOW (Pass)</strong> karna hai ya <strong>DENY / DROP (Block)</strong> karna hai.
          </div>
        </div>

        {/* Figure 4.1: Firewall Architecture */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Firewall.svg/800px-Firewall.svg.png"
          alt="Network Firewall Perimeter Architecture"
          caption="Untrusted Public Internet aur Trusted Internal LAN ke beech Firewall rule-base (ALLOW/DROP) apply karke authorized traffic ko aane deta hai aur malicious packets ko drop karta hai."
          credit="Wikimedia Commons (Open Educational Firewall Diagram)"
          badge="Figure 4.1: Firewall Traffic Filtering"
          fallbackSvg={
            <svg viewBox="0 0 780 200" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="50" width="140" height="90" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
              <text x="90" y="85" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Untrusted Network</text>
              <text x="90" y="105" textAnchor="middle" fill="#b91c1c" fontSize="10">Public Internet (Threats)</text>

              <path d="M 160 85 L 280 85" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="220" y="78" textAnchor="middle" fill="#15803d" fontSize="9">Allowed Packets</text>

              <path d="M 160 115 L 240 115" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 3" />
              <text x="200" y="130" textAnchor="middle" fill="#991b1b" fontSize="8">Blocked Attacks</text>

              <rect x="280" y="30" width="160" height="130" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="360" y="65" textAnchor="middle" fill="#b45309" fontSize="13" fontWeight="bold">FIREWALL</text>
              <text x="360" y="85" textAnchor="middle" fill="#92400e" fontSize="10">Security Rule Base</text>
              <rect x="300" y="100" width="120" height="40" rx="4" fill="#ffffff" stroke="#d97706" />
              <text x="360" y="117" textAnchor="middle" fill="#78350f" fontSize="9">Rule 1: ALLOW 80, 443</text>
              <text x="360" y="131" textAnchor="middle" fill="#dc2626" fontSize="9">Default: DROP ALL</text>

              <path d="M 440 95 L 560 95" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrow)" />

              <rect x="560" y="50" width="180" height="90" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <text x="650" y="85" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="bold">Trusted Internal LAN</text>
              <text x="650" y="105" textAnchor="middle" fill="#166534" fontSize="10">Corporate PCs &amp; Database</text>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Firewall Rule Base &amp; Default Policies</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4">
          Firewall mein rules top-to-bottom sequentially evaluate hote hain. Har rule mein nimnlikhit criteria match kiye jate hain:
        </p>
        <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto mb-6">
          <p className="text-slate-400">// Sample Firewall ACL Rule Table</p>
          <p className="text-emerald-400">RULE 1: IF [Src: Any, Dst: WebServer(192.168.1.10), Port: 443(HTTPS)] THEN -&gt; ALLOW</p>
          <p className="text-emerald-400">RULE 2: IF [Src: Internal_LAN, Dst: Any, Protocol: DNS(53)] THEN -&gt; ALLOW</p>
          <p className="text-rose-400">RULE 3: IF [Src: Any, Dst: Any, Port: 23(Telnet)] THEN -&gt; DROP (Insecure)</p>
          <p className="text-amber-400 font-bold">RULE 4 (DEFAULT DENY): IF [No rule matched] THEN -&gt; DROP ALL</p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Types of Firewalls (Polytechnic Syllabus Classification)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              1. Packet Filtering Firewall (Stateless)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Network layer (Layer 3) aur Transport layer (Layer 4) par operate karta hai. Har packet ko independently check karta hai (Source IP, Dest IP, Port number). 
              Fast hota hai lekin packet payload aur connection state ki jaankari nahi rakhta.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              2. Stateful Inspection Firewall
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Ek internal <strong>State Table</strong> maintain karta hai jo active connections (TCP handshake state, sequence numbers) ko track karta hai. 
              Agar internal user ne request bheji hai, toh sirf uska response packet aane deta hai; unsolicited external packets ko block kar deta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              3. Proxy / Application-Level Gateway (Layer 7)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Client aur Server ke beech intermediary ban jata hai. Direct connection allow nahi karta. Application data (HTTP, FTP commands) ko deeply inspect karta hai. 
              High security provide karta hai lekin processing slow ho sakti hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              4. Next-Generation Firewall (NGFW)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Modern enterprise firewall jo traditional stateful inspection ke sath-sath built-in <strong>IPS, Deep Packet Inspection (DPI), Application Awareness, aur SSL/TLS Decryption</strong> combine karta hai.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm mb-2">Advantages of Firewalls:</h4>
            <ul className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 space-y-1 list-disc pl-4">
              <li>Perimeter protection: Malicious external IP scanning aur unauthorized access block karta hai.</li>
              <li>Network segmentation aur DMZ (Demilitarized Zone) isolation support.</li>
              <li>Centralized traffic logging aur audit trail generation.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
            <h4 className="font-bold text-rose-900 dark:text-rose-200 text-sm mb-2">Limitations of Firewalls:</h4>
            <ul className="text-xs sm:text-sm text-rose-800 dark:text-rose-300 space-y-1 list-disc pl-4">
              <li>Internal threats (LAN ke andar se aane wale attacks) ko rok nahi pata.</li>
              <li>Agar port 443 (HTTPS) open hai, toh encrypted traffic ke andar chhupe malware ko traditional firewall inspect nahi kar pata.</li>
              <li>Social engineering aur phishing attacks ko prevent nahi kar sakta.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: IDS & IPS */}
      {/* ========================================================================= */}
      <section id="ids-ips" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            2
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            IDS (Intrusion Detection) &amp; IPS (Intrusion Prevention)
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Concept of Intrusion Detection &amp; Prevention</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            Firewall yeh dekhta hai ki kis darwaze (port) se aane ki permission hai, lekin wo packet ke andar chhupe zeher (exploit code) ko check nahi karta. 
            Iske liye <strong>IDS aur IPS</strong> ki zaroorat hoti hai.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong className="text-blue-600 dark:text-blue-400 text-sm block mb-1">IDS (Intrusion Detection System):</strong>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Passive monitoring appliance. Network traffic ki copy inspect karta hai. Attack detect hone par Security Admin ko <strong>Alert</strong> generate karta hai. Traffic ko direct rokta nahi hai.
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong className="text-emerald-600 dark:text-emerald-400 text-sm block mb-1">IPS (Intrusion Prevention System):</strong>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Active inline appliance. Real traffic ke seedhe raste mein baithta hai. Malicious packet detect hote hi usi second packet ko <strong>Drop</strong> kar deta hai aur connection terminate kar deta hai.
              </p>
            </div>
          </div>
        </div>

        {/* Figure 4.2: IDS vs IPS Network Placement */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Intrusion_detection_system_diagram.svg/800px-Intrusion_detection_system_diagram.svg.png"
          alt="IDS (Out-of-band) vs IPS (Inline) Placement"
          caption="IDS Switch ke SPAN/Mirror port se traffic copy lekar passive monitoring karta hai (Sends Alert); IPS inline traffic path par baithkar malicious packets ko instantly block/drop karta hai."
          credit="Wikimedia Commons (Open Educational Architecture)"
          badge="Figure 4.2: IDS vs IPS Placement"
          fallbackSvg={
            <svg viewBox="0 0 780 220" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="30" width="100" height="60" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
              <text x="70" y="65" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Internet / Router</text>

              <path d="M 120 60 L 220 60" stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrow)" />

              <g transform="translate(220, 20)">
                <rect x="0" y="0" width="140" height="80" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5" />
                <text x="70" y="35" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="bold">INLINE IPS</text>
                <text x="70" y="55" textAnchor="middle" fill="#166534" fontSize="9">Active Traffic Filter</text>
                <text x="70" y="70" textAnchor="middle" fill="#dc2626" fontSize="9">Drops Bad Packets [X]</text>
              </g>

              <path d="M 360 60 L 460 60" stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrow)" />

              <rect x="460" y="30" width="120" height="60" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="520" y="65" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="bold">Network Switch</text>

              <path d="M 520 90 L 520 140" stroke="#9333ea" strokeWidth="2" strokeDasharray="4 2" />
              <text x="530" y="115" textAnchor="start" fill="#7e22ce" fontSize="9">Traffic Mirror (SPAN)</text>

              <g transform="translate(450, 140)">
                <rect x="0" y="0" width="140" height="70" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
                <text x="70" y="30" textAnchor="middle" fill="#7e22ce" fontSize="11" fontWeight="bold">OUT-OF-BAND IDS</text>
                <text x="70" y="50" textAnchor="middle" fill="#6b21a8" fontSize="9">Passive Monitoring</text>
                <text x="70" y="62" textAnchor="middle" fill="#9333ea" fontSize="8">Generates Alerts [!]</text>
              </g>

              <path d="M 580 60 L 660 60" stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrow)" />

              <rect x="660" y="30" width="100" height="60" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
              <text x="710" y="65" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">LAN Devices</text>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Detection Techniques Used by IDS/IPS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              1. Signature-Based Detection (Knowledge-Based)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Antivirus ki tarah known attack signatures ka database maintain karta hai. Known attacks (jaise CVE vulnerabilities, buffer overflow patterns) ko 100% accuracy se detect karta hai.
              <br /><strong className="text-rose-500 text-xs">Limitation:</strong> Naye attacks (Zero-Day exploits) ko detect nahi kar pata.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              2. Anomaly-Based Detection (Behavior-Based)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Pehle network ka normal traffic behavior (Baseline) learn karta hai. Agar achanak 2:00 AM par abnormal high traffic ya high port scanning hoti hai, toh anomaly flag karta hai.
              <br /><strong className="text-emerald-500 text-xs">Advantage:</strong> Zero-day attacks detect kar leta hai, par False Positives (galat alerts) zyada aate hain.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Master Comparison: IDS vs IPS</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-bold">
                <th className="p-3 border border-slate-200 dark:border-slate-800">Feature</th>
                <th className="p-3 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400">IDS (Intrusion Detection System)</th>
                <th className="p-3 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">IPS (Intrusion Prevention System)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Primary Purpose</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Intrusions aur malicious activity ko <strong>Detect</strong> karna.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Intrusions ko network mein enter hone se <strong>Prevent/Block</strong> karna.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Network Placement</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>Out-of-band / TAP</strong> (Traffic path ke bahar, SPAN port se copy leta hai).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>In-Line</strong> (Direct traffic path par baithta hai, packets isse guzar kar jaate hain).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Action on Attack</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Passive: Alert send karta hai, log record karta hai (packet forward ho jata hai).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Active: Packet drop karta hai, TCP session reset karta hai, IP blacklist karta hai.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Impact on Latency</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>Zero Latency:</strong> Real network traffic flow ko slow nahi karta.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800"><strong>Slight Latency:</strong> Har packet ko inline inspect karta hai.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Risk of False Positive</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Low impact: Galat alert se sirf admin ka notification badhta hai, traffic chalta rehta hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">High impact: Galat alert hone par legitimate user ka real traffic block ho sakta hai.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-800">Popular Examples</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Snort (in detection mode), Zeek (Bro), Suricata.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800">Snort (inline mode), Cisco Firepower, Palo Alto Threat Prevention.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: VPN CONCENTRATOR */}
      {/* ========================================================================= */}
      <section id="vpn-concentrator" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            3
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            VPN Concentrator: Enterprise Scale Remote Access
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What is a VPN Concentrator?</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            Jab 5 ya 10 users VPN connect karte hain, to ek normal office router unhe handle kar leta hai. Lekin jab kisi enterprise mein <strong>5,000 se 50,000 remote employees, branch offices aur partners</strong> ek sath secure encrypted connection banate hain, to general router ka CPU crush ho jata hai.
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Definition:</strong> <strong>VPN Concentrator</strong> ek high-performance, specialized hardware appliance hai jisme dedicated cryptographic coprocessors (ASICs) lage hote hain, jo hazaron simultaneous VPN tunnels ko establish, encrypt, decrypt aur manage karne ke liye design kiya gaya hota hai.
          </div>
        </div>

        {/* Figure 4.3: VPN Concentrator Architecture */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/VPN_overview-en.svg/800px-VPN_overview-en.svg.png"
          alt="VPN Concentrator Aggregating Thousands of Remote User Tunnels"
          caption="Internet par hazaron remote users aur branch offices encrypted tunnels banate hain; VPN Concentrator unhe aggregate karke hardware speed par decrypt karta hai aur corporate network ko deta hai."
          credit="Wikimedia Commons (Open Educational VPN Diagram)"
          badge="Figure 4.3: VPN Concentrator Hub"
          fallbackSvg={
            <svg viewBox="0 0 780 220" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(30, 20)">
                <rect x="0" y="0" width="120" height="40" rx="6" fill="#e0f2fe" stroke="#0284c7" />
                <text x="60" y="25" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">Remote Laptop 1</text>

                <rect x="0" y="60" width="120" height="40" rx="6" fill="#e0f2fe" stroke="#0284c7" />
                <text x="60" y="85" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">Mobile Worker 2</text>

                <rect x="0" y="120" width="120" height="40" rx="6" fill="#e0f2fe" stroke="#0284c7" />
                <text x="60" y="145" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">Branch Office</text>
              </g>

              <path d="M 150 40 L 300 90" stroke="#9333ea" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M 150 100 L 300 100" stroke="#9333ea" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M 150 160 L 300 110" stroke="#9333ea" strokeWidth="2" strokeDasharray="4 2" />
              <text x="220" y="75" textAnchor="middle" fill="#7e22ce" fontSize="9">Encrypted IPSec/SSL Tunnels</text>

              <g transform="translate(300, 45)">
                <rect x="0" y="0" width="180" height="110" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
                <text x="90" y="35" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">VPN CONCENTRATOR</text>
                <text x="90" y="55" textAnchor="middle" fill="#92400e" fontSize="9">Hardware Crypto Engine</text>
                <text x="90" y="72" textAnchor="middle" fill="#78350f" fontSize="8">• Authenticates Users</text>
                <text x="90" y="86" textAnchor="middle" fill="#78350f" fontSize="8">• Assigns IP via DHCP</text>
                <text x="90" y="100" textAnchor="middle" fill="#78350f" fontSize="8">• High-Speed Bulk Decrypt</text>
              </g>

              <path d="M 480 100 L 600 100" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="540" y="90" textAnchor="middle" fill="#15803d" fontSize="9">Decrypted Fast LAN Traffic</text>

              <rect x="600" y="45" width="150" height="110" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <text x="675" y="80" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">Enterprise Datacenter</text>
              <text x="675" y="100" textAnchor="middle" fill="#166534" fontSize="9">Internal Intranet &amp; ERP</text>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Key Responsibilities of VPN Concentrator</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-8">
          <li><strong>High-Speed Hardware Encryption/Decryption:</strong> Dedicated Crypto chips (ASICs) high-throughput par AES-256 process karte hain bina network bottlenecks banaye.</li>
          <li><strong>User Authentication:</strong> RADIUS, TACACS+, LDAP ya Active Directory se integrate hokar verify karta hai ki VPN user legitimate employee hai ya nahi.</li>
          <li><strong>Dynamic IP Address Assignment:</strong> Har remote user ko corporate network ka internal private IP address allot karta hai.</li>
          <li><strong>Session Management &amp; Keepalive:</strong> Har user ke tunnel session, encryption keys (IKE/SA) ko renew aur monitor karta hai.</li>
        </ul>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CONTENT SCREENING GATEWAYS */}
      {/* ========================================================================= */}
      <section id="content-screening" className="scroll-mt-24 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-mono text-sm font-bold shadow-sm">
            4
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Content Screening Gateways (Web &amp; Email Filtering)
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Meaning and Concept of Content Screening</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
            Network firewall sirf IP addresses aur ports check karta hai, lekin agar koi employee company computer se phishing link khol le, adult/gambling site browse kare, ya email mein customer credit card data bahar bhej de, toh firewall use nahi rok pata.
          </p>
          <div className="p-3 bg-brand-50 dark:bg-brand-950/40 border-l-4 border-brand-500 rounded-r-lg text-sm text-slate-800 dark:text-slate-200 font-sans">
            <strong>Definition:</strong> <strong>Content Screening Gateways</strong> (jaise Secure Web Gateway - SWG aur Secure Email Gateway - SEG) specialized application-level appliances hote hain jo network mein aane wale aur jaane wale <em>Data Payload (Webpages, Emails, File Attachments)</em> ko deeply screen aur filter karte hain according to corporate policies.
          </div>
        </div>

        {/* Figure 4.4: Content Screening Gateway Workflow */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Email_Gateway_Architecture.svg/800px-Email_Gateway_Architecture.svg.png"
          alt="Content Screening Gateway Multi-Stage Inspection Pipeline"
          caption="Inbound/Outbound traffic Screening Gateway se gujarta hai: URL Reputation check, Anti-Malware Sandboxing, Email Spam Filtering aur Data Loss Prevention (DLP) inspection."
          credit="Wikimedia Commons (Open Educational Architecture)"
          badge="Figure 4.4: Content Screening Workflow"
          fallbackSvg={
            <svg viewBox="0 0 780 180" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="55" width="110" height="70" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
              <text x="75" y="85" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Raw Web/Email</text>
              <text x="75" y="105" textAnchor="middle" fill="#b91c1c" fontSize="9">Incoming/Outgoing</text>

              <path d="M 130 90 L 180 90" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow)" />

              <g transform="translate(180, 20)">
                <rect x="0" y="0" width="420" height="140" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                <text x="210" y="25" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">CONTENT SCREENING GATEWAY (SWG / SEG)</text>

                <rect x="15" y="45" width="90" height="75" rx="6" fill="#ffffff" stroke="#d97706" />
                <text x="60" y="70" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold">URL Filtering</text>
                <text x="60" y="85" textAnchor="middle" fill="#92400e" fontSize="8">Categorization</text>
                <text x="60" y="100" textAnchor="middle" fill="#92400e" fontSize="8">&amp; Blacklist</text>

                <rect x="115" y="45" width="90" height="75" rx="6" fill="#ffffff" stroke="#d97706" />
                <text x="160" y="70" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold">Anti-Spam</text>
                <text x="160" y="85" textAnchor="middle" fill="#92400e" fontSize="8">Phishing &amp;</text>
                <text x="160" y="100" textAnchor="middle" fill="#92400e" fontSize="8">DKIM/SPF</text>

                <rect x="215" y="45" width="90" height="75" rx="6" fill="#ffffff" stroke="#d97706" />
                <text x="260" y="70" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold">AV Sandbox</text>
                <text x="260" y="85" textAnchor="middle" fill="#92400e" fontSize="8">Dynamic Run</text>
                <text x="260" y="100" textAnchor="middle" fill="#92400e" fontSize="8">of Attachments</text>

                <rect x="315" y="45" width="90" height="75" rx="6" fill="#ffffff" stroke="#d97706" />
                <text x="360" y="70" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold">DLP Engine</text>
                <text x="360" y="85" textAnchor="middle" fill="#92400e" fontSize="8">Credit Cards &amp;</text>
                <text x="360" y="100" textAnchor="middle" fill="#92400e" fontSize="8">PII Leak Stop</text>
              </g>

              <path d="M 600 90 L 660 90" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrow)" />

              <rect x="660" y="55" width="100" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <text x="710" y="85" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">Clean Traffic</text>
              <text x="710" y="105" textAnchor="middle" fill="#166534" fontSize="9">Delivered Safely</text>
            </svg>
          }
        />

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Functions of Content Gateways</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              1. Web Content Filtering (URL Categorization)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Websites ko categories mein divide karta hai (Social Media, Adult, Gambling, Job Portals). Corporate policies ke anusaar work hours mein non-work sites ko block karta hai aur productivity boost karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              2. Email Spam &amp; Phishing Screening
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Email aane par SPF, DKIM aur DMARC protocols verify karta hai. 95%+ spam emails ko inbox mein aane se pehle hi drop ya quarantine folder mein daal deta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              3. Anti-Malware Sandboxing
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Unknown PDF ya EXE file attachment aane par gateway use ek isolated virtual environment (Sandbox) mein run karke dekhta hai. Agar file suspicious behavior kare toh real user tak nahi pahunchne deta.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              4. Data Loss Prevention (DLP)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Outbound traffic ko monitor karta hai. Agar koi employee sensitive data (Aadhaar number, credit card number, confidential source code) personal Gmail ya cloud storage par upload kare, toh gateway alert raise karke upload block kar deta hai.
            </p>
          </div>
        </div>

        {/* 10-Mark Exam Answer Blueprint */}
        <div className="rounded-xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-950/20 p-5 mt-10">
          <h3 className="text-base font-bold text-brand-700 dark:text-brand-300 mb-2 font-display">
            🎯 BTEUP Exam 10-Mark Answer Blueprint — Unit 4
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3">
            Agar exam mein question aaye: <strong>&quot;Describe Firewall with its types and differentiate between IDS and IPS with a neat diagram&quot;</strong>, to is sequence mein answer likhein:
          </p>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
            <li><strong>Firewall Definition &amp; Purpose:</strong> Trusted LAN aur Untrusted Internet ke beech boundary defense.</li>
            <li><strong>Firewall Diagram:</strong> Inbound/Outbound traffic filtering aur Rule base (Figure 4.1 draw karein).</li>
            <li><strong>Types of Firewalls:</strong> Packet filtering, Stateful inspection, Application proxy, Next-Gen (NGFW).</li>
            <li><strong>IDS vs IPS Concept:</strong> IDS is passive detection/alerting; IPS is active inline prevention/blocking.</li>
            <li><strong>IDS vs IPS Placement Diagram:</strong> Inline vs Out-of-band TAP/SPAN port (Figure 4.2 draw karein).</li>
            <li><strong>Comparison Table:</strong> Master Table (Purpose, Network Placement, Action, Latency, Examples).</li>
            <li><strong>Brief Note on VPN Concentrator &amp; Content Screening:</strong> High-scale encrypted connections aur application content filtering.</li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default IsUnit4Content;
