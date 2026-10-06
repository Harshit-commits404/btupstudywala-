import React from 'react';
import {
  Compass,
  Clock,
  BookOpen,
  Lightbulb,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Key,
  Users,
  HardDrive,
  FileText,
  Activity,
  Award,
  AlertCircle,
  CheckCircle2,
  Database,
  Terminal,
  Cpu,
  Layers,
  FileCheck,
  Search,
  Zap,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const IsUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER HERO TITLEPLATE */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Information Security
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 8 Periods</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 font-medium border border-purple-500/20">
            Semester 5 (BTEUP)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Introduction to Information Security
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (सूचना सुरक्षा का परिचय: मूल सिद्धांत, PAIN मॉडल, एवं ऑपरेटिंग सिस्टम के सुरक्षा फीचर्स)
          </p>
        </div>

        {/* Syllabus Topics Chips Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Official Syllabus:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            InfoSec Fundamentals
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            PAIN Aspects
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            OS Security Features
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Authentication
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            System Logs & Audit
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            File System Protection
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Privileges (PoLP)
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            RAID Redundancy
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Antivirus Protection
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/40 pl-4 py-1">
          Modern digital yug me information kisi bhi sanstha (organization) ya vyakti ki sabse keemti asset (sampatti) ban chuki hai. Bank balances, medical records, corporate trade secrets, aur e-governance databases sabhi digitally store aur transmit hote hain. Is unit mein hum Information Security ke core concepts, Threat-Vulnerability-Risk relationship, syllabus-defined <strong>PAIN</strong> security aspects (Privacy, Authenticity, Integrity, Non-repudiation), aur Operating System ke anivarya security features (Authentication, Logs, Audits, File Permissions, Privileges, RAID, Antivirus) ko BTEUP Polytechnic ke 10-mark descriptive standards ke anusar deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* SECTION 1: INFOSEC FUNDAMENTALS & CONCEPTS */}
      {/* ========================================================= */}
      <section id="info-sec-intro" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            1. Introduction to Information Security Fundamentals
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (सूचना सुरक्षा का अर्थ, परिभाषा, आवश्यकता, संपत्तियां, एवं खतरा-कमजोरी-जोखिम का संबंध)
          </div>
        </div>

        {/* 1.1 What is Information Security */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          1.1 Meaning & Formal Definition of Information Security (InfoSec)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Information Security (InfoSec)</strong> un sabhi policies, practices, security controls, aur mathematical algorithms ka ek integrated framework hai jiska mukhya uddeshya kisi sanstha ke digital data, physical information, aur computing infrastructure ko kisi bhi prakar ke <strong>Unauthorized Access (anadhikrit pravesh), Use, Disclosure (ujagar karna), Disruption (rukawat), Modification (chhedchhad), Inspection, ya Destruction (vinash)</strong> se surakshit rakhna hai.
        </p>

        {/* Formal Definition Box */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Formal Definition • Information Security</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "Information security is the practice of protecting information and information systems from unauthorized access, use, disclosure, disruption, modification, or destruction in order to provide confidentiality, integrity, availability, authenticity, and accountability."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Computer aur internet par maujood data ko choron, hackers, viruses aur system failures se is tarah bacha kar rakhna ki sirf sahi vyakti hi use padh ya badal sake, aur zaroorat padne par data hamesha uplabdh mile — use Information Security kehte hain.
            </span>
          </div>
        </div>

        {/* 1.2 Need for InfoSec in Modern IT Infrastructure */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.2 Need & Importance of Information Security in Modern IT Systems
        </h3>
        <p className="mb-4 leading-relaxed">
          Pehle ke daur me company ka data physical paper files, tijoriyon (safes) aur band kamron me rehta tha. Lekin modern IT systems cloud computing, high-speed internet, aur remote mobile devices par aadharit hain. InfoSec ki anivarya aavashyakta nimnlikhit mukhya karno se hoti hai:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-brand-600 mb-1 font-bold text-sm">
              <ShieldAlert className="w-4 h-4" /> 1. Protection of Assets
            </div>
            <p className="text-xs text-text-secondary">
              Bank accounts, proprietary source code, patient records, aur military blueprints ko chori hone se bachana.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-blue-600 mb-1 font-bold text-sm">
              <Zap className="w-4 h-4" /> 2. Business Continuity
            </div>
            <p className="text-xs text-text-secondary">
              Ransomware ya DoS attack ke samay company ke business operations (ATM, UPI payments, e-commerce) ko thapp hone se bachana.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-emerald-600 mb-1 font-bold text-sm">
              <FileCheck className="w-4 h-4" /> 3. Legal Compliance
            </div>
            <p className="text-xs text-text-secondary">
              Indian IT Act, 2000 aur global standards (ISO 27001, GDPR) ke anuroop jurmane (heavy penalties) aur kanooni karwayi se bachna.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 text-purple-600 mb-1 font-bold text-sm">
              <Users className="w-4 h-4" /> 4. Customer Trust
            </div>
            <p className="text-xs text-text-secondary">
              Agar kisi bank ka data ek baar leak ho jaye, to log apna paisa nikal kar dusre bank chale jaate hain. Brand reputation surakshit rakhna.
            </p>
          </div>
        </div>

        {/* 1.3 Threat, Vulnerability, and Risk */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          1.3 The Core Triad: Threat, Vulnerability & Risk (खतरा, कमजोरी एवं जोखिम)
        </h3>
        <p className="mb-4 leading-relaxed">
          Information Security ki samajh in teen buniyadi shabdon ke antar par tikki hai. Students aksar in teeno ko ek hi samajh lete hain, jo exam me galat hota hai:
        </p>

        <div className="space-y-4 my-5">
          {/* Threat */}
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20">
            <strong className="text-rose-800 dark:text-rose-300 block text-sm font-bold mb-1 font-mono flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" /> 1. Threat (खतरा - The "Who / What can cause harm")
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Koi bhi aisi ghatna, paristhiti, vyakti ya software jo kisi system ke data ko nuksaan pahunchane ki kshamata rakhta hai. Threat bahari bhi ho sakta hai aur aantarik bhi.
              <br />
              • <em>Udaharan:</em> Malicious hackers, Ransomware malware, Phishing emails, Disgruntled employee (naraz karmachari), ya flood/aag.
            </p>
          </div>

          {/* Vulnerability */}
          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20">
            <strong className="text-amber-800 dark:text-amber-300 block text-sm font-bold mb-1 font-mono flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" /> 2. Vulnerability (कमजोरी / सुभेद्यता - The Flaw)
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Kisi system, network, operating system, software code, ya physically office premises me maujood aisi kami (loophole/weakness) jiska fayda uthakar koi threat system me ghus sakta hai.
              <br />
              • <em>Udaharan:</em> Default password `admin123` chhod dena, OS me unpatched security bugs, open Wi-Fi network, employee ko security awareness na hona.
            </p>
          </div>

          {/* Risk */}
          <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20">
            <strong className="text-purple-800 dark:text-purple-300 block text-sm font-bold mb-1 font-mono flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-600" /> 3. Risk (जोखिम - The Probability of Loss)
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Is baat ki sambhavna (likelihood) ki koi Threat kisi maujood Vulnerability ka fayda uthakar company ke assets ko kitna bada aarthik ya operational nuksaan pahunchayegi:
            </p>
            <div className="p-2.5 rounded bg-surface border border-border font-mono text-xs text-center font-bold text-slate-900 dark:text-white">
              Risk = Threat (खतरा) × Vulnerability (कमजोरी) × Impact (प्रभाव)
            </div>
            <p className="text-[11px] text-text-muted mt-2">
              <em>Real-life Analogy:</em> Barsaat ek Threat hai; chhat me chhed (leakage) ek Vulnerability hai; kamre me rakha computer bheeg kar kharab hona ek Risk hai. Agar chhed ko plaster karke theek kar diya jaye (Vulnerability = 0), to barsaat hone ke bawajood Risk = 0 ho jata hai!
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 1.1: THREAT VULNERABILITY RISK */}
        <EducationalFigure
          caption="Figure 1.1: Conceptual Interaction Model of Threat, Vulnerability, Attack, and Resultant Business Risk"
          source="NIST SP 800-30 Information Security Risk Assessment Standards"
          license="Open Educational Diagram"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              Security Risk Cycle • Threat exploits Vulnerability leading to Impact
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono max-w-xl mx-auto items-stretch">
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-rose-700 dark:text-rose-300 block text-xs">THREAT</strong>
                  <p className="text-[10px] text-text-muted mt-1">Attacker / Malware</p>
                </div>
                <div className="text-[10px] text-rose-600 font-bold mt-2">Active Danger</div>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-amber-700 dark:text-amber-300 block text-xs">VULNERABILITY</strong>
                  <p className="text-[10px] text-text-muted mt-1">Unpatched Bug / Weak PW</p>
                </div>
                <div className="text-[10px] text-amber-600 font-bold mt-2">Internal Flaw</div>
              </div>

              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-purple-700 dark:text-purple-300 block text-xs">EXPLOIT / ATTACK</strong>
                  <p className="text-[10px] text-text-muted mt-1">Breach Action</p>
                </div>
                <div className="text-[10px] text-purple-600 font-bold mt-2">Security Breach</div>
              </div>

              <div className="p-3 rounded-xl bg-blue-500/10 border-2 border-blue-500/50 flex flex-col justify-between shadow-sm">
                <div>
                  <strong className="text-blue-700 dark:text-blue-300 block text-xs">RISK & IMPACT</strong>
                  <p className="text-[10px] text-text-muted mt-1">Data Stolen / Outage</p>
                </div>
                <div className="text-[10px] text-blue-600 font-bold mt-2">Financial Loss</div>
              </div>
            </div>

            <p className="text-[11px] text-text-muted mt-4">
              Security controls (Firewall, Patching, Encryption) target vulnerabilities to nullify risk.
            </p>
          </div>
        </EducationalFigure>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: ASPECTS OF INFORMATION SECURITY — PAIN */}
      {/* ========================================================= */}
      <section id="pain-aspects" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            2. Aspects of Information Security: The PAIN Model
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (सूचना सुरक्षा के 4 मुख्य पहलू: Privacy/Confidentiality, Authenticity, Integrity एवं Non-repudiation)
          </div>
        </div>

        {/* 2.1 Introduction to PAIN */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          2.1 The PAIN Security Framework (PAIN मॉडल का विस्तृत अध्ययन)
        </h3>
        <p className="mb-4 leading-relaxed">
          BTEUP Information Security syllabus ke anusar, information security ke chaar (4) sarvopari aadhar-stambh (fundamental pillars) hote hain jinhe sankshep me <strong>PAIN</strong> kaha jata hai:
        </p>

        {/* The 4 Pillars */}
        <div className="space-y-4 my-6">
          {/* P - Privacy */}
          <div className="p-4 sm:p-5 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold font-mono text-sm">
                P
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Privacy / Confidentiality (गोपनीयता)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 ml-auto">
                No Unauthorized Reading
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              <strong>Meaning & Definition:</strong> Yeh sunishchit karna ki sensitive data sirf aur sirf unhi vyaktiyon ya processes ko dikhe jinke paas use padhne ka legitimate adhikar (authorization) hai. Kisi bhi anadhikrit vyakti (unauthorized third-party) se data ko gupt (secret) rakhna Privacy ya Confidentiality kehlata hai.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-surface p-3 rounded-lg border border-border">
              <p><strong>Primary Technology:</strong> Cryptographic Encryption (AES-256), Access Control Lists, Password protection.</p>
              <p><strong>Scenario / Example:</strong> Aapke bank account ka balance ya ATM PIN sirf aapko dikhna chahiye, kisi doosre customer ko nahi.</p>
              <p><strong>Threat Addressed:</strong> Eavesdropping, packet sniffing, data leakage, unauthorized disclosure.</p>
            </div>
          </div>

          {/* A - Authenticity */}
          <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold font-mono text-sm">
                A
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Authenticity / Authentication (प्रामाणिकता)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 ml-auto">
                Identity Verification
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              <strong>Meaning & Definition:</strong> Yeh satyapit (verify) karna ki message bhejne wala (sender) ya system me login karne wala user vastav me wahi vyakti hai jo wo hone ka dava (claim) kar raha hai. Koi doosra vyakti kisi aur ki fake identity banakar system ko dhoka na de sake.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-surface p-3 rounded-lg border border-border">
              <p><strong>Primary Technology:</strong> Multi-Factor Authentication (MFA), Passwords, Biometrics, Digital Certificates (PKI).</p>
              <p><strong>Scenario / Example:</strong> NetBanking me login karte samay user id ke sath password aur phone par aaya OTP verify hona.</p>
              <p><strong>Threat Addressed:</strong> Spoofing, impersonation (bahu-roopiya banna), credential stuffing attacks.</p>
            </div>
          </div>

          {/* I - Integrity */}
          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold font-mono text-sm">
                I
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Integrity (अखंडता / सत्यता)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 ml-auto">
                No Tampering
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              <strong>Meaning & Definition:</strong> Yeh guarantee dena ki data transmission ke dauran ya storage me rakhe hone par kisi bhi unauthorized vyakti, software bug ya network noise dwara badla (alter), mitaya (delete) ya chhedchhad (tamper) nahi kiya gaya hai. Data bilkul waisa hi shuddh rahe jaisa create hua tha.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-surface p-3 rounded-lg border border-border">
              <p><strong>Primary Technology:</strong> Cryptographic Hash Functions (SHA-256, MD5), HMAC (Hash Message Authentication Code), Checksums.</p>
              <p><strong>Scenario / Example:</strong> Agar aapne ₹1,000 transfer kiye, to raaste me hacker packet intercept karke use ₹10,000 na bana sake.</p>
              <p><strong>Threat Addressed:</strong> Man-in-the-Middle (MitM) modification, bit-flipping, unauthorized record tampering.</p>
            </div>
          </div>

          {/* N - Non-repudiation */}
          <div className="p-4 sm:p-5 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/40 dark:bg-purple-950/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold font-mono text-sm">
                N
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Non-repudiation (अस्वीकरण-अक्षमता / मुकरने से रोकना)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 ml-auto">
                Irrefutable Proof
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              <strong>Meaning & Definition:</strong> Yeh aisi vidhi hai jo kanooni aur takneeki roop se yeh saabit karti hai ki kisi sandesh ko kisne bheja tha ya kisi transaction ko kisne authorize kiya tha, taaki baad mein sender ya receiver us ghatna se <em>mukar (deny / refuse)</em> na sake.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-surface p-3 rounded-lg border border-border">
              <p><strong>Primary Technology:</strong> Asymmetric Digital Signatures (Private key signature), Centralized Cryptographic Audit Logs.</p>
              <p><strong>Scenario / Example:</strong> Share market me share bechne ke baad investor yeh nahi keh sakta ki "Maine to bechne ka order hi nahi diya tha", kyunki transaction uski digital key se sign hua tha.</p>
              <p><strong>Threat Addressed:</strong> Fraudulent denial of transactions, disputed electronic contracts, false repudiation.</p>
            </div>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 1.2: PAIN ARCHITECTURE */}
        <EducationalFigure
          caption="Figure 1.2: The Four Pillars of the PAIN Information Security Framework (Privacy, Authenticity, Integrity, Non-repudiation)"
          source="BTEUP Curriculum Standards • Information Security Model"
          license="Open Educational Diagram"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="inline-block p-3 rounded-xl bg-brand-600 text-white font-bold text-sm sm:text-base shadow-md uppercase tracking-wider mb-6">
              PAIN Security Architecture
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono max-w-xl mx-auto">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-300">
                <Lock className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <strong>PRIVACY</strong>
                <p className="text-[10px] text-text-muted mt-1">Confidentiality via AES Encryption</p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                <Key className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                <strong>AUTHENTICITY</strong>
                <p className="text-[10px] text-text-muted mt-1">Identity Verification via MFA / PKI</p>
              </div>

              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
                <CheckCircle2 className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <strong>INTEGRITY</strong>
                <p className="text-[10px] text-text-muted mt-1">No Tampering via SHA-256 Hashes</p>
              </div>

              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
                <FileCheck className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                <strong>NON-REPUDIATION</strong>
                <p className="text-[10px] text-text-muted mt-1">Cannot Deny via Digital Signatures</p>
              </div>
            </div>

            <p className="text-[11px] text-text-muted mt-4">
              Together, PAIN establishes trust and legal validity in electronic transactions.
            </p>
          </div>
        </EducationalFigure>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: OPERATING SYSTEM SECURITY FEATURES & PRIVILEGES */}
      {/* ========================================================= */}
      <section id="os-security" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.0 • OS DEFENSE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            3. Operating System Security Features & Privileges
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (ऑपरेटिंग सिस्टम की सुरक्षा, संसाधनों का संरक्षण, यूजर प्रिविलेजेस एवं अल्प-अधिकार का सिद्धांत [PoLP])
          </div>
        </div>

        {/* 3.1 Why OS Security is Critical */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          3.1 Why OS Security is Fundamental (ऑपरेटिंग सिस्टम सुरक्षा की अनिवार्यता)
        </h3>
        <p className="mb-4 leading-relaxed">
          Operating System (OS) computer hardware aur software applications ke beech ka master controller hota hai. Hardware resources (CPU, RAM, Storage, Network Card) ko OS hi control karta hai. Agar OS ka security mechanism fail ho jaye, to uske upar chalne wali koi bhi web application ya database surakshit nahi reh sakti.
        </p>

        <p className="mb-4 leading-relaxed">
          Ek modern secure Operating System (jaise Linux ya Windows Server) nimnlikhit cheezon ko suraksha pradan karta hai:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-xs sm:text-sm text-text-secondary leading-relaxed">
          <li><strong>Memory Protection:</strong> Ek process ko doosre process ke memory space me jhaankne ya data overwrite karne se rokna (Virtual Memory Isolation).</li>
          <li><strong>CPU Mode Separation:</strong> CPU ko do modes me chalana — <em>User Mode</em> (jahan normal apps chalti hain) aur <em>Kernel Mode</em> (jahan sirf trusted OS core execute hota hai).</li>
          <li><strong>File System Protection:</strong> Files aur folders ko permissions ke dwara unauthorized tampering se bachana.</li>
          <li><strong>Device Access Control:</strong> USB drives, webcam, aur network card ke unauthorized use ko block karna.</li>
        </ul>

        {/* 3.2 Privileges and Principle of Least Privilege */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          3.2 Privileges & Principle of Least Privilege (PoLP - 10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Privileges (अधिकार / विशेषाधिकार)</strong> OS ke andar kisi user account ya program ko di gayi specific permissions hoti hain jo yeh tay karti hain ki wo system me kya-kya action perform kar sakta hai (jaise software install karna, system clock badalna, services stop karna, ya network configuration badalna).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
              1. Administrator / Root Privileges (Superuser)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Windows me 'Administrator' aur Linux me 'Root' account ke paas unrestricted full control hota hai. Root user kisi bhi file ko delete kar sakta hai, passwords reset kar sakta hai, aur kernel modules modify kar sakta hai. Agar koi hacker root account pa le, to poora system uske kabze me aa jata hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
              2. Standard / Normal User Privileges
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Normal user sirf apne personal folder me files create/edit kar sakta hai aur pehle se installed software use kar sakta hai. Wo system files (C:\Windows ya /etc) ko chhed nahi sakta aur naya software install nahi kar sakta.
            </p>
          </div>
        </div>

        {/* Principle of Least Privilege Box */}
        <div className="p-4 rounded-xl border-2 border-brand-500/40 bg-brand-50/20 dark:bg-brand-500/[0.04] my-4">
          <strong className="text-brand-700 dark:text-brand-400 block text-sm font-bold mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4" /> Principle of Least Privilege (PoLP - अल्प-अधिकार का सिद्धांत)
          </strong>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Information security ka sabse golden rule hai:
            <br />
            <strong>"Kisi bhi user account, process, ya software program ko sirf aur sirf utne hi niyamit privileges diye jane chahiye jo uske kaam ko poora karne ke liye anivarya hon — usse 1 bit bhi zyada nahi!"</strong>
            <br />
            Iska sabse bada labh yeh hai ki agar koi employee malware download kar bhi le, to wo malware system files ko infect nahi kar payega kyunki employee ke paas admin rights hi nahi hain. Linux me administrative kaam ke liye har samay root banne ke bajaye temporary <code>sudo</code> command ka upyog PoLP ka live example hai.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: AUTHENTICATION & LOGS */}
      {/* ========================================================= */}
      <section id="auth-logs" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4. Authentication Mechanisms & System Logs
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रमाणीकरण के 3 कारक [MFA], ऑथराइजेशन से अंतर, एवं सिस्टम लॉग्स का सुरक्षा निगरानी में महत्व)
          </div>
        </div>

        {/* 4.1 Authentication in Detail */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          4.1 Authentication in Detail (प्रमाणीकरण - 10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Authentication</strong> ek aisi process hai jiske dwara system yeh verify karta hai ki kisi user ne jo identity pesh ki hai (jaise username), wo vastav me sahi hai ya nahi. Yeh computer security ka pehla darwaza (first line of defense) hota hai.
        </p>

        {/* The Three Factors of Authentication */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          The Three Classical Factors of Authentication:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20">
            <strong className="text-blue-800 dark:text-blue-300 block text-sm font-bold mb-1">
              1. Something You Know (ज्ञान कारक)
            </strong>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Aisi information jo sirf user ke dimaag me yaad hoti hai.
            </p>
            <div className="text-[11px] text-text-muted space-y-0.5 bg-surface p-2 rounded border border-border">
              <p>• Passwords</p>
              <p>• PIN (Personal Identification Number)</p>
              <p>• Security Questions</p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20">
            <strong className="text-emerald-800 dark:text-emerald-300 block text-sm font-bold mb-1">
              2. Something You Have (स्वामित्व कारक)
            </strong>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Physical vastu ya token jo user ke paas maujood hoti hai.
            </p>
            <div className="text-[11px] text-text-muted space-y-0.5 bg-surface p-2 rounded border border-border">
              <p>• Smart Card / RFID badge</p>
              <p>• Mobile Phone (SMS OTP)</p>
              <p>• Hardware Token (YubiKey)</p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20">
            <strong className="text-purple-800 dark:text-purple-300 block text-sm font-bold mb-1">
              3. Something You Are (जैविक कारक)
            </strong>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Insaan ke sharir ke anokhe biological lakshan (Biometrics).
            </p>
            <div className="text-[11px] text-text-muted space-y-0.5 bg-surface p-2 rounded border border-border">
              <p>• Fingerprint sensor</p>
              <p>• Retina / Iris scanner</p>
              <p>• Facial Recognition</p>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
          <strong>Multi-Factor Authentication (MFA / 2FA):</strong> Jab system me login karne ke liye upar diye gaye 3 alag-alag categories me se do ya zyada factors ka ek sath upyog kiya jata hai (jaise Password + Phone OTP), to use Multi-Factor Authentication kehte hain. Isse agar password leak bhi ho jaye, to bina phone ke hacker login nahi kar sakta.
        </p>

        {/* Master Comparison: Authentication vs Authorization */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-6 mb-2">
          Crucial Difference: Authentication vs Authorization (अति-महत्वपूर्ण अंतर)
        </h4>
        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs mb-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2.5 px-3 font-bold">Parameter</th>
                <th className="py-2.5 px-3 font-bold text-blue-600">Authentication (प्रमाणीकरण)</th>
                <th className="py-2.5 px-3 font-bold text-purple-600">Authorization (अधिकार निर्धारण)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 px-3 font-semibold">Core Question</td>
                <td className="py-2 px-3 text-text-secondary">"Who are you?" (Aap kaun hain?)</td>
                <td className="py-2 px-3 text-text-secondary">"What are you allowed to do?" (Aapko kya karne ki aazadi hai?)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Purpose</td>
                <td className="py-2 px-3 text-text-secondary">Identity ko verify karna.</td>
                <td className="py-2 px-3 text-text-secondary">Permissions aur access rights check karna.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Execution Order</td>
                <td className="py-2 px-3 text-text-secondary">Hamesha pehle hoti hai (Step 1).</td>
                <td className="py-2 px-3 text-text-secondary">Authentication safal hone ke baad hoti hai (Step 2).</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Real-world Example</td>
                <td className="py-2 px-3 text-text-secondary">College gate par apna ID card dikhana.</td>
                <td className="py-2 px-3 text-text-secondary">Library me enter hone ke baad Principal ke cabin me na ja sakna.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4.2 Logs and System Logging */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          4.2 System Logs in Detail (सिस्टम लॉग्स - डिजिटल रिकॉर्ड बुक)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>System Logs</strong> OS, servers aur applications dwara maintain kiye jane wale chronological (samay ke kram me) timestamped electronic record files hote hain. Jab bhi computer par koi chhota ya bada event ghatit hota hai, to OS chupchap us event ko ek log file me likh deta hai.
        </p>

        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              1. Events Recorded in System Logs:
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              • <strong>Security / Auth Events:</strong> Successful logins, failed login attempts (password mismatch), password changes, privilege escalation (sudo access).
              <br />
              • <strong>System Events:</strong> System startup, shutdown, driver crash, kernel panic, disk errors.
              <br />
              • <strong>Application Events:</strong> Database crashes, web server 404/500 errors, service start/stop.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              2. Security Monitoring & Incident Investigation (Forensics):
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Agar kisi company ka data leak ho jaye, to cybersecurity forensic team sabse pehle <strong>Log Files</strong> ki jaanch karti hai. Logs se pata chalta hai:
              <br />
              • Kis IP address se attack hua tha?
              <br />
              • Kis samay attacker ne login kiya tha?
              <br />
              • Kaun-kaun si files download ya modify ki gayi thi?
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              3. Log Protection (WORM Storage):
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Smart attackers sabse pehle logs ko delete ya modify karne ki koshish karte hain taaki unke nishan mit jayein. Isliye modern enterprises <strong>Centralized Log Servers (SIEM)</strong> use karte hain aur logs ko <em>Append-Only</em> storage par rakhte hain jahan naya data likha to ja sakta hai lekin purana data erase nahi kiya ja sakta.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: AUDIT, FILE PROTECTION, RAID & ANTIVIRUS */}
      {/* ========================================================= */}
      <section id="audit-file-protection" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.0 • STORAGE & ENDPOINT
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            5. Audit Features, File Protection, RAID & Antivirus
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (ऑडिटिंग, फाइल सिस्टम अनुमतियां [rwx/NTFS], RAID डेटा उपलब्धता एवं एंटीवायरस की कार्यप्रणाली)
          </div>
        </div>

        {/* 5.1 System & Security Audit */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          5.1 System & Security Audit (सिस्टम एवं सुरक्षा ऑडिट)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Security Audit</strong> ek aisi prakriya hai jisme log files aur system activities ki niyamit jaanch (review/inspection) karke yeh dekha jata hai ki kya system company ki security policy aur compliance niyamawali ke anusar kaam kar raha hai ya nahi.
        </p>

        <div className="p-4 rounded-xl border border-border bg-surface my-4">
          <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
            Logs vs Audit: The Vital Difference
          </strong>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            • <strong>Logs:</strong> Sirf raw data collection hai (events ka likha jana). Yeh passive hota hai.
            <br />
            • <strong>Audit:</strong> Un logs ka vishleshan (analysis) aur evaluation hai. Yeh active hota hai.
            <br />
            <em>Udaharan:</em> CCTV camera me recording hona "Logging" hai; us CCTV footage ko baithkar check karna ki kaun chori karke gaya tha "Auditing" hai.
          </p>
        </div>

        {/* 5.2 File System Protection */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          5.2 File System Protection (फाइल सिस्टम सुरक्षा - 10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          File System Protection OS ka wo hissa hai jo hard drive par store files aur directories ko unauthorized reading, modifying ya deleting se bachata hai. Iske liye <strong>Access Control Lists (ACLs)</strong> aur <strong>File Permissions</strong> ka upyog kiya jata hai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          {/* Linux Permissions */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-mono font-bold mb-1">
              1. Linux / Unix Permissions (rwx Model)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              Linux me har file ke paas 3 user categories aur 3 basic permissions hoti hain:
            </p>
            <div className="text-xs text-text-secondary space-y-1 font-mono bg-secondary/50 p-2.5 rounded border border-border">
              <p>• <strong>r (Read = 4):</strong> File padhne ki chhoot.</p>
              <p>• <strong>w (Write = 2):</strong> File badalne ya delete karne ki chhoot.</p>
              <p>• <strong>x (Execute = 1):</strong> Program/script run karne ki chhoot.</p>
              <p className="text-brand-600 font-bold mt-1">Categories: User (Owner), Group, Others (Public).</p>
            </div>
            <p className="text-[11px] text-text-muted mt-2">
              Udaharan: <code>chmod 755 script.sh</code> (Owner ko full control 4+2+1=7; Group aur Others ko read & execute 4+0+1=5). Sensitive file <code>/etc/shadow</code> ko <code>600</code> (sirf root ko read/write) rakha jata hai.
            </p>
          </div>

          {/* Windows NTFS Permissions */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-blue-600 dark:text-blue-400 block text-sm font-mono font-bold mb-1">
              2. Windows NTFS Permissions
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              Windows NT File System (NTFS) me har file aur folder ke sath ek Access Control List (ACL) judi hoti hai jisme Access Control Entries (ACEs) hoti hain:
            </p>
            <div className="text-xs text-text-secondary space-y-1 font-mono bg-secondary/50 p-2.5 rounded border border-border">
              <p>• <strong>Full Control:</strong> Read, write, execute, permissions badalna.</p>
              <p>• <strong>Modify:</strong> Content badalna aur delete karna.</p>
              <p>• <strong>Read & Execute:</strong> Files dekhna aur programs run karna.</p>
              <p>• <strong>Deny Permission:</strong> Explicit Deny hamesha Allow se zyada powerful hota hai.</p>
            </div>
          </div>
        </div>

        {/* 5.3 RAID */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          5.3 RAID (Redundant Array of Independent Disks)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>RAID</strong> (Redundant Array of Independent Disks) ek aisi data storage virtualization takneek hai jisme multiple physical hard drives ko aapas me jodkar ek single logical drive banaya jata hai.
        </p>

        <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 my-4">
          <strong className="text-emerald-800 dark:text-emerald-300 block text-sm font-bold mb-1">
            RAID's Role in Information Security: DATA AVAILABILITY!
          </strong>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            CIA Triad me 'A' ka matlab <strong>Availability</strong> hota hai. Agar server ki hard drive mechanical failure ke karan jal jaye ya crash ho jaye, to bina RAID ke poora data nast ho jayega aur server band ho jayega. RAID redundancy ke jariye yeh sunishchit karta hai ki ek hard drive kharab hone par bhi bina server band hue data doosri drive se turant chalta rahe (Fault Tolerance).
          </p>
        </div>

        {/* Important RAID Levels */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">
          Key RAID Levels at Polytechnic Level:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
          <div className="p-3 rounded-lg border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-0.5">• RAID 0 (Striping):</strong>
            <p className="text-text-secondary">Data do drives par aadha-aadha baant diya jata hai. Speed double ho jati hai, lekin <strong>Zero Redundancy</strong> hoti hai. Ek bhi drive kharab hone par poora data khatam!</p>
          </div>

          <div className="p-3 rounded-lg border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-0.5">• RAID 1 (Mirroring):</strong>
            <p className="text-text-secondary">Data ki exact duplicate copy doosri drive par likhi jati hai (100% clone). Ek drive fail hone par doosri se turant chalta hai. Safe, lekin 50% storage capacity kharch hoti hai.</p>
          </div>

          <div className="p-3 rounded-lg border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-0.5">• RAID 5 (Striping with Parity):</strong>
            <p className="text-text-secondary">Minimum 3 drives chahiye. Data aur mathematical <strong>Parity bits</strong> sabhi drives par failaye jaate hain. Ek drive fail hone par parity se data wapas recover ho jata hai. Best balance of speed, cost, and safety.</p>
          </div>
        </div>

        {/* 5.4 Antivirus Software */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          5.4 Antivirus Software in OS Security
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Antivirus (AV)</strong> software ek dedicated security utility program hai jiska mukhya kaam computer system ko <strong>Malware (Malicious Software)</strong> jaise viruses, worms, trojans, ransomware, spyware aur rootkits se protect karna, unhe detect karna, quarantine karna, aur unhe system se safalta-purvak remove karna hai.
        </p>

        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              1. Signature-Based Detection (हस्ताक्षर-आधारित पहचान):
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Antivirus ke paas pehle se pata sabhi virus ke unique binary code patterns (Signatures / Hashes) ki ek badi database hoti hai. Jab bhi koi nayi file kholi ya download ki jati hai, AV file ke hash ko database se match karta hai. Agar match milta hai, to use virus ghoshit kar deta hai.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              2. Heuristic & Behavioral Analysis (व्यवहार-आधारित पहचान):
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Naye viruses (Zero-day malware) jinki signature abhi database me nahi hai, unhe unke suspicious behavior se pakadna: Jaise koi program chupke se Master Boot Record ko overwrite karne ki koshish kare ya background me hazaaron files ko tezi se encrypt kare (Ransomware behavior).
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              3. Quarantine vs Removal:
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              • <strong>Quarantine (एकांतवास):</strong> Infected file ko ek safe encrypted folder me band kar dena taaki wo execute na ho sake aur system ko nuksaan na pahunchaye.
              <br />
              • <strong>Removal / Clean:</strong> File ke andar se malicious payload nikal dena ya file ko poori tarah delete kar dena.
            </p>
          </div>
        </div>

        {/* 10-Mark Exam Blueprint Checklist for Unit 1 */}
        <div className="p-5 rounded-2xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-500/[0.04] my-8">
          <div className="flex items-center gap-2 text-brand-700 dark:text-brand-400 font-bold text-base mb-2">
            <Award className="w-5 h-5" />
            <span>Unit 1 Complete 10-Mark Answer Writing Checklist (BTEUP Exam Special)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">
            Exam room mein baithe samay Unit 1 se banne wale 4 potential 10-mark questions aur unke anivarya sub-headings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q1. InfoSec Definition, Need & Threat-Vulnerability-Risk (10 Marks)</strong>
              <p className="text-text-secondary">• Formal Definition of Information Security<br />• 4 Reasons for Need (Assets, Continuity, Compliance, Trust)<br />• Threat vs Vulnerability vs Risk definitions<br />• Mathematical Formula: Risk = Threat × Vulnerability × Impact<br />• Figure 1.1 Risk Cycle Diagram</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q2. The PAIN Security Framework in Detail (10 Marks)</strong>
              <p className="text-text-secondary">• Privacy / Confidentiality (AES encryption, access controls)<br />• Authenticity (Identity verification, MFA)<br />• Integrity (SHA-256 hashes, no tampering)<br />• Non-repudiation (Digital signatures, cannot deny)<br />• Real-world banking scenarios for each aspect<br />• Figure 1.2 PAIN Architecture Diagram</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q3. Authentication Factors & System Logs (10 Marks)</strong>
              <p className="text-text-secondary">• Authentication formal definition & importance<br />• 3 Classical Factors (Know, Have, Are) & MFA<br />• Authentication vs Authorization Comparison Table<br />• System Logs definition & 3 categories of events<br />• Forensic importance & WORM log protection</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q4. OS File Protection, PoLP, RAID & Antivirus (10 Marks)</strong>
              <p className="text-text-secondary">• User Privileges & Principle of Least Privilege (PoLP)<br />• File Protection: Linux rwx (chmod 755/600) vs Windows NTFS ACLs<br />• RAID for Data Availability: RAID 0, RAID 1, RAID 5<br />• Antivirus: Signature-based vs Heuristic scanning, Quarantine</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default IsUnit1Content;
