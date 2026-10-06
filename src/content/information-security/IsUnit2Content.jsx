import React from 'react';

const IsUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 02
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Information Security
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Networking Security
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Networking protocols (IP, TCP, HTTP) aur devices (Hub, Switch, Router) mein kya kamiyan hain, aur unhe IPSec, HTTPS, VPN aur VLAN dwara kaise secure kiya jata hai.
        </p>
      </header>

      <section id="protocol-weaknesses" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Security Weaknesses in Networking Protocols</h2>
        <p className="mb-4">Popular networking protocols shuru mein trust aur efficiency ke liye banaye gaye the, security ke liye nahi. Inme kai kamiyan hain:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>IP (Internet Protocol):</strong> Isme authentication nahi hoti, jisse 'IP Spoofing' (fake IP address se packet bhejna) aasan hai. Data cleartext mein jata hai.</li>
          <li><strong>TCP (Transmission Control Protocol):</strong> Session hijacking aur SYN Flooding (DoS attack) ka shikar ho sakta hai kyunki ye connection-oriented hai aur states maintain karta hai.</li>
          <li><strong>UDP (User Datagram Protocol):</strong> Connectionless hone ke karan isme spoofing aur amplification attacks easily kiye ja sakte hain.</li>
          <li><strong>RIP & OSPF (Routing Protocols):</strong> Agar authentication enable na ho, to attackers fake routing updates bhej kar traffic ko galat route (blackhole) par bhej sakte hain.</li>
          <li><strong>HTTP & SMTP:</strong> Ye dono plaintext protocols hain. Inme data (usernames, passwords, emails) bina encryption ke travel karta hai, jisse 'Man-in-the-Middle' attack dwara padha ja sakta hai.</li>
        </ul>
      </section>

      <section id="device-weaknesses" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Security Weaknesses in Networking Devices</h2>
        <p className="mb-4">Different networking devices ki security vulnerabilities (kamiyan):</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Hub:</strong> Hub ek dumb device hai jo aane wale data ko sabhi ports par broadcast kar deta hai. Isse network mein koi bhi 'packet sniffer' laga kar dusro ka data easily chura sakta hai.</li>
          <li><strong>Switch:</strong> Switch intelligently data bhejta hai, lekin 'MAC Flooding' attack dwara iski memory full ki ja sakti hai, jisse ye Hub ki tarah behave karne lagta hai aur data leak hone lagta hai.</li>
          <li><strong>Router:</strong> Agar router ke default passwords change na kiye jayein, ya uske ACLs (Access Control Lists) theek se configure na hon, to attacker network mein ghus sakta hai.</li>
          <li><strong>WiFi (Wireless):</strong> Wireless signals hawa mein travel karte hain. Agar WEP/WPA jaisi weak encryption use ho rahi ho, to koi bhi range mein aakar password crack kar sakta hai aur network intercept kar sakta hai.</li>
        </ul>
      </section>

      <section id="protocol-solutions" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Security Solutions for Protocols (IPSec & HTTPS)</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">IPSec (IP Security)</h3>
        <p className="mb-4">
          IPSec IP layer (Network layer) par security provide karta hai. Ye packets ko encrypt aur authenticate karta hai, jisse IP Spoofing aur eavesdropping nahi ho sakti. Iske do main modes hote hain: <em>Transport mode</em> (sirf payload encrypt hota hai) aur <em>Tunnel mode</em> (poora packet encrypt hota hai).
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">HTTPS (HTTP Secure)</h3>
        <p className="mb-4">
          HTTP ka secure version. Ye data ko transfer karne se pehle TLS/SSL protocols ka use karke encrypt karta hai. Isse website aur browser ke beech ka communication secure rehta hai aur 'Man-in-the-Middle' attack se bacha jata hai.
        </p>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs mt-4">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b">
                <th className="py-2 px-4">Feature</th>
                <th className="py-2 px-4">HTTP</th>
                <th className="py-2 px-4">HTTPS</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b">Port</td><td className="py-2 px-4 border-b">80</td><td className="py-2 px-4 border-b">443</td></tr>
              <tr><td className="py-2 px-4 border-b">Encryption</td><td className="py-2 px-4 border-b">Plain text</td><td className="py-2 px-4 border-b">Encrypted (TLS/SSL)</td></tr>
              <tr><td className="py-2 px-4">Security</td><td className="py-2 px-4">Insecure</td><td className="py-2 px-4">Secure</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="device-solutions" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Security Solutions for Devices (VLAN, VPN, Ingress Filtering)</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">VLAN (Virtual Local Area Network)</h3>
        <p className="mb-4">
          VLAN ek physical switch ko logically kai chhote networks mein divide kar deta hai. Isse broadcast domain chhota ho jata hai aur ek department ka user dusre department ke data ko nahi dekh sakta, jisse network internal security badhti hai.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">VPN (Virtual Private Network)</h3>
        <p className="mb-4">
          VPN public internet ke upar ek secure, encrypted 'tunnel' banata hai. Ye remote workers ko company ke internal network se safely connect karne mein madad karta hai. (Isme aksar IPSec ka use hota hai).
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">Ingress Filtering</h3>
        <p className="mb-4">
          Ye ek technique hai jisme router par policies (ACLs) set ki jati hain ki bahar se aane wala traffic (ingress) network ke andar tabhi aayega jab uski source IP address legitimate ho. Ye spoofed IP address wale packets (jaise DDoS attacks mein hote hain) ko block karne mein madadgar hai.
        </p>
      </section>
    </article>
  );
};

export default IsUnit2Content;
