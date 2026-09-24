import React from 'react';

const IsUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 04
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Information Security
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Network Security Products
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Enterprise network ko protect karne wale mukhya security products jaise Firewall, IDS, IPS, VPN Concentrator, aur Content Screening Gateways ki working aur placement.
        </p>
      </header>

      <section id="firewall" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Firewall</h2>
        <p className="mb-4">
          Firewall ek hardware ya software network security device hai, jo ek trusted internal network aur untrusted external network (Internet) ke beech ek barrier (deewar) ki tarah kaam karta hai.
        </p>
        <p className="mb-4">
          Ye pre-defined security rules ke aadhar par aane wale (incoming) aur jaane wale (outgoing) network traffic ko monitor karta hai aur permit ya block karta hai. Packet filtering firewalls sirf IP/Port check karte hain, jabki Modern Next-Gen Firewalls (NGFW) deep inspection bhi karte hain.
        </p>
      </section>

      <section id="ids-ips" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. IDS (Intrusion Detection System) & IPS (Intrusion Prevention System)</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">IDS (Intrusion Detection System)</h3>
        <p className="mb-4">
          Ye ek passive monitoring tool hai. Ye network traffic ko dekhta hai, aur agar koi suspicious activity (jaise port scanning ya malware attack) dikhai deti hai, to sirf administrator ko <strong>alert</strong> generate karke bhej deta hai. Ye attack ko khud block nahi karta. Ye aamtaur par network ke andar (out-of-band) lagaya jata hai.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">IPS (Intrusion Prevention System)</h3>
        <p className="mb-4">
          Ye ek active protection system hai. Ye na sirf malicious traffic ko detect karta hai, balki use network mein aane se pehle hi <strong>drop/block</strong> kar deta hai. Ye network ke raste ke beech mein (in-line) lagaya jata hai.
        </p>
      </section>

      <section id="vpn-concentrator" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. VPN Concentrator</h2>
        <p className="mb-4">
          Ek VPN Concentrator ek specialized hardware device hai jiska kaam badi matra mein VPN connections ko manage, establish aur encrypt/decrypt karna hota hai.
        </p>
        <p className="mb-4">
          Jab kisi company ke hazaro employees Work From Home kar rahe hote hain, to un sabke secure VPN connections ko handle karne ka heavy encryption load ek normal router utha nahi pata. VPN concentrator is dedicated load ko smoothly handle karta hai.
        </p>
      </section>

      <section id="content-screening" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Content Screening Gateways</h2>
        <p className="mb-4">
          Isko aam bhasha mein Secure Web Gateway ya Email Gateway bhi kehte hain. Ye devices company ke network me aane wale aur jaane wale content ko deeply filter karte hain.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Web Content Filtering:</strong> Employees ko adult, gambling, ya malicious websites kholne se rokna.</li>
          <li><strong>Email Screening:</strong> Spam aur phishing emails ko in-box mein aane se pehle rokna, aur attachments mein virus scan karna.</li>
          <li><strong>DLP (Data Loss Prevention):</strong> Ensure karna ki koi employee company ka sensitive data bahar upload/email na kar sake.</li>
        </ul>
      </section>
    </article>
  );
};

export default IsUnit4Content;
