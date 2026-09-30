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
  ShieldCheck,
  Lock,
  Eye,
  Key,
  Flame,
  Fingerprint,
  Scale,
  Bug,
  Server,
  AlertTriangle,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const ItaiUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Introduction to IT and AI (Semester 1)
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>8 Periods / Exam Weightage: 10 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Basics of Information Security & Cyber Laws
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">The CIA Triad (Confidentiality, Integrity, Availability)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Malware (Virus, Worm, Trojan, Ransomware)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Cyber Attacks (Phishing, DoS/DDoS, MitM)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Access Control & 2FA / Biometrics</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Indian IT Act 2000 & Cyber Crimes</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Internet par digital data aur assets ko unauthorized access, theft aur malicious tampering se protect karna Information Security ka core purpose hai. Is unit me hum CIA Triad, common digital threats, authentication systems aur Indian Cyber Laws ko deeply study karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 4.1 The CIA Triad */}
      {/* ========================================================= */}
      <section id="sec-4-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4.1. The CIA Triad: Core Security Model
          </h2>
        </div>

        {/* Definition Placard */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                CIA Triad kya hota hai?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong>CIA Triad</strong> Information Security ka benchmark model hai jo teen fundamental security goals par based hai: <strong>Confidentiality (गोपनीयता)</strong>, <strong>Integrity (अखंडता)</strong>, aur <strong>Availability (उपलब्धता)</strong>. Duniya ka koi bhi security policy ya system inhi 3 pillars ko protect karne ke liye banaya jata hai.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars of CIA */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {/* Confidentiality */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Lock className="w-4 h-4" />
              <span>1. Confidentiality (गोपनीयता)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Sensitive information sirf <strong>authorized persons</strong> ko hi readable honi chahiye; unauthorized access bilkul blocked honi chahiye.
            </p>
            <div className="p-2 rounded bg-primary/5 text-xs text-primary font-mono">
              <strong>Techniques:</strong> Cryptographic Encryption (AES, RSA), Passwords, Biometrics, Multi-Factor Authentication.
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <em>Example:</em> Bank account password ya UPI PIN sirf account owner ko pata hona chahiye, kisi hacker ko nahi.
            </p>
          </div>

          {/* Integrity */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>2. Integrity (सत्यनिष्ठा / शुद्धता)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Data transfer ke dauran ya storage me bina authorization ke modify, alter ya delete nahi hona chahiye. Data 100% original rehna chahiye.
            </p>
            <div className="p-2 rounded bg-emerald-500/5 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
              <strong>Techniques:</strong> Cryptographic Hash functions (SHA-256, MD5), Digital Signatures, Checksums.
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <em>Example:</em> Bank transfer me sender ne ₹500 bheja, to receiver ke paas exactly ₹500 hi pahuche, raste me koi hacker use badalkar ₹50,000 na kar sake.
            </p>
          </div>

          {/* Availability */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
              <Server className="w-4 h-4" />
              <span>3. Availability (उपलब्धता)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Authorized user jab bhi data ya service access karna chahe, system 24/7 bina kisi rukawat ke up aur running milna chahiye.
            </p>
            <div className="p-2 rounded bg-amber-500/5 text-xs text-amber-600 dark:text-amber-400 font-mono">
              <strong>Techniques:</strong> Redundant hardware (RAID), Disaster Recovery Backups, DDoS attack protection, Cloud failovers.
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <em>Example:</em> BTEUP result announce hone par server crash na ho aur sabhi students apna result check kar sakein.
            </p>
          </div>
        </div>

        {/* Embedded CIA Triad Visual Diagram */}
        <EducationalFigure
          maxWidth="max-w-md"
          caption="Figure 4.1: The CIA Triad (Confidentiality, Integrity, Availability) Security Model"
          source="Standard Information Security Architecture"
        >
          <div className="p-6 text-center font-mono text-xs w-full">
            <div className="max-w-xs mx-auto border-2 border-primary/40 rounded-xl p-4 bg-card shadow-sm space-y-3">
              <div className="p-2 rounded bg-primary/10 text-primary font-bold">
                🔒 CONFIDENTIALITY (Encryption, Access Control)
              </div>
              <div className="text-muted-foreground text-xs">▲ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ▲</div>
              <div className="flex justify-between gap-2">
                <div className="p-2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                  🛡️ INTEGRITY<br />(Hashes, Signatures)
                </div>
                <div className="p-2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[11px]">
                  ⚡ AVAILABILITY<br />(Redundancy, Backups)
                </div>
              </div>
            </div>
          </div>
        </EducationalFigure>
      </section>

      {/* ========================================================= */}
      {/* 4.2 Malware and Attacks */}
      {/* ========================================================= */}
      <section id="sec-4-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4.2. Malware and Common Cyber Attacks
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Malware (Malicious Software)</strong> kisi bhi aise program ya code ko kehte hain jo user ki permission ke bina computer system ko harm karne, data chori karne ya system ko compromise karne ke liye design kiya jata hai.
        </p>

        {/* Detailed Malware Classifications */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Major Categories of Malware (Exam Comparison Favorite)</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
          {/* Virus */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 dark:text-white font-bold text-sm text-red-500">1. Computer Virus</strong>
              <span className="text-[11px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded font-mono font-bold">Needs Host File</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Ek malicious program jo kisi legitimate host executable file (jaise <code>.exe</code> ya <code>.docx</code>) ke sath attach ho jata hai. Yeh tabhi spread hota hai jab user us infected file ko execute karta hai. Files corrupt karta hai aur system slow kar deta hai.
            </p>
          </div>

          {/* Worm */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 dark:text-white font-bold text-sm text-amber-500">2. Computer Worm</strong>
              <span className="text-[11px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded font-mono font-bold">Self-Replicating</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Worm ko failne ke liye kisi host file ya human action ki zaroorat nahi hoti. Yeh standalone program hota hai jo network security vulnerabilities ka fayda uthakar automatically ek computer se dusre computer me duplicate hokar network bandwidth choke kar deta hai (e.g. WannaCry, Conficker).
            </p>
          </div>

          {/* Trojan Horse */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 dark:text-white font-bold text-sm text-purple-500">3. Trojan Horse</strong>
              <span className="text-[11px] bg-purple-500/10 text-purple-500 px-2 py-0.5 rounded font-mono font-bold">Disguised Trap</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Yeh dekhne me bilkul harmless aur useful software lagta hai (jaise cracked game, video player utility). Lekin install hote hi background me hacker ke liye <strong>Backdoor</strong> open kar deta hai jisse attacker computer ka complete remote control le leta hai.
            </p>
          </div>

          {/* Ransomware */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 dark:text-white font-bold text-sm text-rose-500">4. Ransomware</strong>
              <span className="text-[11px] bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded font-mono font-bold">Extortion Weapon</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Yeh user ki sabhi photos, documents aur database ko strong encryption se lock kar deta hai aur screen par warning show karta hai ki files unlock karne ke liye Bitcoin me <strong>Ransom (firauti)</strong> do.
            </p>
          </div>
        </div>

        {/* Common Cyber Attacks */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Major Cyber Attack Techniques</span>
        </h3>

        <div className="space-y-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">1. Phishing:</strong>
            Fraudulent emails ya fake login pages (jaise fake SBI login page) banakar users ko panic create karna (e.g. <em>"Aapka account block ho gaya hai, turant password update karein"</em>) taaki user apna user ID, password aur OTP reveal kar de.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">2. Denial of Service (DoS & DDoS):</strong>
            Hacker hazaron infected zombie computers (Botnet) ka use karke kisi target website server par ek sath millions of fake requests send karta hai, jisse server ka bandwidth exhaust ho jata hai aur legitimate users ke liye website crash ho jati hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">3. Man-in-the-Middle (MitM) Attack:</strong>
            Public unsecured Wi-Fi hotspots par attacker sender aur receiver ke beech baithkar unke encrypted data stream ko intercept aur read karta hai.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.3 Access Control and Cyber Laws */}
      {/* ========================================================= */}
      <section id="sec-4-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4.3. Access Control, Firewalls, and Indian Cyber Laws (IT Act 2000)
          </h2>
        </div>

        {/* Access Control Mechanisms */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Access Control: Authentication & 2FA / Biometrics</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Access control yeh ensure karta hai ki sahi user ko hi system me enter hone diya jaye. Authentication 3 factors par based hota hai:
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">1. Something You Know</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Password, PIN, Security question answer.</p>
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">2. Something You Have</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Registered phone par aane wala OTP, Hardware security token (YubiKey), Smart Card.</p>
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">3. Something You Are (Biometrics)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">Fingerprint sensor, Iris retinal scan, Facial recognition geometry, Voice pattern.</p>
          </div>
        </div>

        {/* Firewall Explanation */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 mb-6 space-y-2">
          <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            Firewall kya hota hai?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Firewall</strong> ek network security barrier (hardware ya software) hai jo trusted private network aur untrusted public internet ke beech baithkar har aane aur jane wale data packet ko security rules ke set se filter karta hai. Unauthorized traffic ko instantly drop karta hai.
          </p>
        </div>

        {/* Indian IT Act 2000 */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Indian Cyber Laws: Information Technology Act, 2000 (IT Act)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          India me electronic commerce, digital transactions aur cyber crimes ko punish karne ke liye <strong>17 October 2000</strong> ko Indian IT Act 2000 lagu kiya gaya (amended in 2008). Iske important legal sections:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Section</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Cyber Crime Offence</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Prescribed Legal Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold font-mono text-primary">Section 43</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Unauthorized access, downloading or copying data without owner's permission</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Heavy monetary compensation to the victim up to ₹1 Crore</td>
              </tr>
              <tr>
                <td className="p-3 font-bold font-mono text-primary">Section 65</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Tampering with computer source code / documents</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Up to 3 years imprisonment or fine up to ₹2 Lakh, or both</td>
              </tr>
              <tr>
                <td className="p-3 font-bold font-mono text-primary">Section 66</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Computer hacking with intention to damage or destroy data</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Up to 3 years imprisonment or fine up to ₹5 Lakh, or both</td>
              </tr>
              <tr>
                <td className="p-3 font-bold font-mono text-primary">Section 66C & 66D</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Identity theft (stealing passwords) aur cheating by impersonation using computer</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Up to 3 years imprisonment and fine up to ₹1 Lakh</td>
              </tr>
              <tr>
                <td className="p-3 font-bold font-mono text-primary">Section 66E</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Violation of privacy (capturing/publishing private images without consent)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Up to 3 years imprisonment or fine up to ₹2 Lakh, or both</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-amber-800 dark:text-amber-300">Exam Point (याद रखो):</strong>
            Virus vs Worm ka difference aur IT Act Section 66 (Hacking) BTEUP semester me regular questions hain. Hamesha point-wise answer aur examples (WannaCry ransomware, Phishing emails) add karein.
          </div>
        </div>
      </section>
    </article>
  );
};

export default ItaiUnit4Content;
