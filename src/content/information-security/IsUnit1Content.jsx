import React from 'react';
import { BookOpen, AlertCircle, CheckCircle2, Shield, Key } from 'lucide-react';

const IsUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 01
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Information Security
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Introduction to Information Security
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Is unit mein hum Information Security ke fundamentals samjhenge, jaise PAIN principles (Privacy, Authenticity, Integrity, Non-repudiation) aur Operating System ki core security features (Authentication, Logs, Auditing).
        </p>
      </header>

      <section id="info-sec-intro" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction to InfoSec</h2>
        <p className="mb-4">
          Information Security (InfoSec) ka matlab hai sensitive data aur information systems ko unauthorized access, use, disclosure, disruption, modification, ya destruction se bachana. IT infrastructure mein data ek bahut valuable asset hota hai, isliye iski suraksha anivarya hai.
        </p>
      </section>

      <section id="pain-aspects" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Various Aspects of Information Security (PAIN)</h2>
        <p className="mb-4">Information security ke char mukhya aadhar/stambh (pillars) hote hain jise hum <strong>PAIN</strong> kehte hain:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Privacy (Confidentiality):</strong> Ensure karna ki data sirf authorized logo tak hi pahuche. Unauthorized logo se data ko hide karke rakhna.</li>
          <li><strong>Authenticity:</strong> Ye verify karna ki sender ya user wahi hai jo wo claim kar raha hai. Isme identity verification shaamil hota hai.</li>
          <li><strong>Integrity:</strong> Ensure karna ki data transmission ya storage ke dauran alter (change) na kiya gaya ho. Data bilkul waisa hi rahe jaisa create hua tha.</li>
          <li><strong>Non-repudiation:</strong> Iska matlab hai ki koi bhi party (sender ya receiver) message bhejne ya receive karne se baad mein mukar (deny) na sake.</li>
        </ul>
        
        <div className="study-formula-block">
          <div className="font-bold text-lg mb-2">PAIN Architecture</div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <span className="p-2 border rounded border-blue-500/30">Privacy (Confidentiality)</span>
            <span className="p-2 border rounded border-green-500/30">Authenticity</span>
            <span className="p-2 border rounded border-yellow-500/30">Integrity</span>
            <span className="p-2 border rounded border-purple-500/30">Non-repudiation</span>
          </div>
        </div>
      </section>

      <section id="os-security" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Security Features of Operating Systems</h2>
        <p className="mb-4">
          Ek Operating System (OS) system resources aur data ko manage karta hai. Security maintain karne ke liye OS kai features provide karta hai, jaise user privileges, authentication, aur file protection.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">User Privileges (User Rights)</h3>
        <p className="mb-4">
          OS mein har user ka ek account hota hai aur uske paas kuch specific rights (privileges) hote hain. Jaise 'Administrator/Root' user ke paas full control hota hai, jabki 'Guest' ya 'Standard User' ke paas limited access hota hai. Ye Principle of Least Privilege ko implement karne mein madad karta hai.
        </p>
      </section>

      <section id="auth-logs" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Authentication & Logs</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Authentication</h3>
        <p className="mb-4">
          System mein login karte samay user ki identity ko verify karne ki process Authentication kehlati hai. OS usually iske liye:
          <br/>1. Something you know (Password, PIN)
          <br/>2. Something you have (Smart card, Token)
          <br/>3. Something you are (Biometrics - Fingerprint) ka use karta hai.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">Logs (Log Files)</h3>
        <p className="mb-4">
          Log files ek record book ki tarah hoti hain jisme OS aur applications ki saari activities record hoti hain. System errors, user logins, aur file access sab kuch logs mein save hota hai, jisse baad mein kisi bhi security incident ki investigation ki ja sake.
        </p>
      </section>

      <section id="audit-file-protection" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Audit Features, File Protection & Anti-Virus</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Audit Features</h3>
        <p className="mb-4">
          Auditing ka matlab hai system logs ka review karna taaki kisi bhi suspicious activity ya policy violation ka pata chal sake. OS audit policies set karne ki suvidha deta hai (jaise failed login attempts ko record karna).
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">File System Protection</h3>
        <p className="mb-4">
          OS files aur directories ko unauthorized access se bachata hai. Windows mein NTFS permissions aur Linux mein rwx (read, write, execute) permissions hoti hain, jo decide karti hain ki kaun sa user kis file ko read, modify, ya execute kar sakta hai.
        </p>
        
        <h3 className="text-xl font-bold mt-4 mb-2">RAID & Anti-Virus</h3>
        <p className="mb-4">
          <strong>RAID (Redundant Array of Independent Disks):</strong> Data ko loss se bachane ke liye (availability), OS multiple hard drives ko ek logical unit banakar data mirror ya distribute kar sakta hai. <br/>
          <strong>Anti-Virus:</strong> Ye OS security feature ko complement karta hai by detecting and removing malicious software (malware, virus) jo system files ko damage kar sakte hain.
        </p>
      </section>
    </article>
  );
};

export default IsUnit1Content;
