import React from 'react';
import {
  Compass,
  Clock,
  BookOpen,
  Lightbulb,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Globe,
  Wifi,
  Radio,
  Server,
  Network,
  ArrowRight,
  Award,
  AlertCircle,
  CheckCircle2,
  Filter,
  Layers,
  Activity,
  Zap,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const IsUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER HERO TITLEPLATE */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Information Security
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 10 Periods</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 font-medium border border-purple-500/20">
            Semester 5 (BTEUP)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Network and Protocol Security
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (नेटवर्क एवं प्रोटोकॉल सुरक्षा: प्रोटोकॉल व डिवाइसेज की कमजोरियां, IPSec, HTTPS, VLAN, VPN एवं इनग्रेस फिल्टरिंग)
          </p>
        </div>

        {/* Syllabus Topics Chips Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Official Syllabus:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            IP, TCP & UDP Weaknesses
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            RIP & OSPF Weaknesses
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            HTTP & SMTP Weaknesses
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Hub, Switch, Router & Wi-Fi Weaknesses
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            IPSec (Transport & Tunnel)
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            HTTPS (TLS Handshake)
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            VLAN Segmentation
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            VPN Tunneling
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Ingress Filtering (BCP 38)
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/40 pl-4 py-1">
          Internet aur local computer networks ko shuruati daur me communication aur resource sharing ki suvidha ke liye design kiya gaya tha, suraksha (security) ke liye nahi. Parinaam-swaroop, classical networking protocols (IP, TCP, UDP, RIP, OSPF, HTTP, SMTP) aur basic networking devices (Hub, Switch, Router, Wi-Fi) me moolbhoot security kamiyan (inherent vulnerabilities) maujood hain. Is chapter mein hum in sabhi kamiyon ke technical karno, aur unke defensive samadhanon — jaise <strong>IPSec, HTTPS, VLAN, VPN, aur Ingress Filtering</strong> ko BTEUP Polytechnic examination ke 10-mark descriptive standards ke anusar deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* SECTION 1: PROTOCOL WEAKNESSES */}
      {/* ========================================================= */}
      <section id="protocol-weaknesses" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            1. Security Weaknesses in Networking Protocols
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (नेटवर्किंग प्रोटोकॉल्स में अंतर्निहित सुरक्षा खामियां: IP, TCP, UDP, RIP, OSPF, HTTP एवं SMTP)
          </div>
        </div>

        {/* 1.1 Why Legacy Protocols are Vulnerable */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          1.1 Why Classical Networking Protocols Have Security Weaknesses
        </h3>
        <p className="mb-4 leading-relaxed">
          Jab 1970s aur 1980s ke dashak me ARPANET aur TCP/IP protocol suite banaya gaya tha, tab internet sirf kuch vishwasniya (trusted) universities aur military research labs ke beech tha. Us samay <strong>"Open Communication, Speed, aur Interoperability"</strong> par dhyan diya gaya, encryption ya authentication par nahi. Data cleartext (sadharan text) me jata tha aur man liya jata tha ki har sender sach bol raha hai.
        </p>
        <p className="mb-4 leading-relaxed">
          Security me attack chain ka siddhant hota hai:
          <br />
          <code>Threat (खतरा) → Vulnerability (कमजोरी) → Attack (आक्रमण) → Impact (हानि)</code>
        </p>

        {/* Protocol Weaknesses Breakdown */}
        <div className="space-y-4 my-5">
          {/* 1. IP Weaknesses */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-base font-bold mb-1">
              1. IP (Internet Protocol) Security Weaknesses
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              IP Network Layer (Layer 3) ka connectionless aur best-effort delivery protocol hai:
            </p>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
              <li><strong>Lack of Source Authentication (IP Spoofing):</strong> IP header me Source IP address hota hai, lekin router yeh verify nahi karta ki kya packet sach me usi IP se aaya hai. Attacker asani se source IP ko badal kar kisi trusted server ya victim ka fake IP address daal sakta hai (<strong>IP Spoofing</strong>).</li>
              <li><strong>No Data Confidentiality or Integrity:</strong> IP packets bina kisi encryption ke travel karte hain, jisse raste me koi bhi unhe sniff (padh) sakta hai ya payload badal sakta hai.</li>
              <li><strong>IP Fragmentation Vulnerabilities:</strong> Bade packets ko tukdon me todte samay offset fields ka misuse karke DoS attack (e.g., Teardrop attack) kiya ja sakta hai.</li>
            </ul>
          </div>

          {/* 2. TCP Weaknesses */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-base font-bold mb-1">
              2. TCP (Transmission Control Protocol) Security Weaknesses
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              TCP Transport Layer (Layer 4) ka reliable connection-oriented protocol hai:
            </p>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
              <li><strong>SYN Flooding (Denial of Service - DoS):</strong> TCP 3-Way Handshake (SYN → SYN-ACK → ACK) par kaam karta hai. Attacker hazaron SYN packets bhejta hai lekin kabhi antim ACK nahi bhejta. Server ki connection table (backlog queue) half-open connections se bhar jati hai aur legitimate users ke liye server crash ho jata hai.</li>
              <li><strong>TCP Session Hijacking:</strong> Agar attacker Sequence Numbers (ISN) ko predict ya sniff kar le, to wo established TCP session ke beech me ghuskar fake packets inject kar sakta hai aur legitimate user ko disconnect (RST packet) kar sakta hai.</li>
            </ul>
          </div>

          {/* 3. UDP Weaknesses */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-base font-bold mb-1">
              3. UDP (User Datagram Protocol) Security Weaknesses
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              UDP connectionless aur stateless protocol hai jo video streaming aur DNS me use hota hai:
            </p>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
              <li><strong>Zero Handshake & Trivial Spoofing:</strong> Chuki isme koi connection establish nahi hota, isliye attacker fake source IP ke sath UDP packets bhejta hai aur receiver use accept kar leta hai.</li>
              <li><strong>UDP Amplification Attacks:</strong> Attacker spoofed source IP (victim ki IP) se DNS ya NTP servers ko chhota request packet bhejta hai, aur DNS server 50-100 guna bada response seedhe victim par bhej deta hai, jisse victim ka internet jam ho jata hai (DDoS).</li>
            </ul>
          </div>

          {/* 4. RIP & OSPF Weaknesses */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-base font-bold mb-1">
              4. Routing Protocols: RIP & OSPF Weaknesses
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              Routers internet par raasta (path) khojne ke liye RIP aur OSPF use karte hain:
            </p>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
              <li><strong>RIP (Routing Information Protocol) Weaknesses:</strong> RIPv1 bina kisi password ya authentication ke UDP port 520 par har 30 second me poori routing table broadcast karta hai. Attacker fake routing updates inject karke traffic ko apne server se pass karwa sakta hai (Route Hijacking) ya traffic ko drop kar sakta hai (Blackholing).</li>
              <li><strong>OSPF (Open Shortest Path First) Weaknesses:</strong> Agar OSPF me cryptographic MD5 authentication enable na ho, to rogue router banakar fake Link State Advertisements (LSAs) bhej kar network topology ko distort kiya ja sakta hai.</li>
            </ul>
          </div>

          {/* 5. HTTP & SMTP Weaknesses */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-base font-bold mb-1">
              5. Application Protocols: HTTP & SMTP Weaknesses
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              Application Layer ke mukhya web aur email protocols:
            </p>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
              <li><strong>HTTP (Cleartext Web):</strong> Port 80 par chalne wala HTTP data ko bilkul plain readable text me bhejta hai. Wi-Fi par baitha koi bhi hacker Wireshark se user ke passwords, bank details aur cookies chura sakta hai (Man-in-the-Middle eavesdropping).</li>
              <li><strong>SMTP (Simple Mail Transfer Protocol):</strong> Port 25 par email bhejne wala SMTP shuruat me sender ki identity check nahi karta tha. Is kami ke karan koi bhi vyakti `From: ceo@company.com` likhkar fake email bhej sakta hai (<strong>Email Spoofing / Phishing</strong>). Modern email me SPF, DKIM aur DMARC lagakar ise theek kiya jata hai.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: DEVICE WEAKNESSES */}
      {/* ========================================================= */}
      <section id="device-weaknesses" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            2. Security Weaknesses in Networking Devices
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (नेटवर्क डिवाइसेज की सुरक्षा खामियां: हब, स्विच, राउटर एवं वाई-फाई)
          </div>
        </div>

        {/* Device Weaknesses Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          {/* Hub */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-base font-bold mb-1 flex items-center gap-2">
              <Network className="w-4 h-4" /> 1. Hub (Layer 1 Physical Repeater)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              <strong>Role & Working:</strong> Hub ek dumb hardware device hai jisme koi intelligence ya memory nahi hoti. Jab kisi ek port par data packet aata hai, to Hub use <em>Broadcast</em> karke baaki sabhi ports par bhej deta hai.
            </p>
            <div className="text-xs text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/20 p-2.5 rounded border border-rose-200 dark:border-rose-900/50">
              <strong>Security Weakness (Zero Privacy):</strong> Network me juda koi bhi computer network card ko 'Promiscuous Mode' me daalkar baaki sabhi computers ka confidential data (passwords, emails) asani se sniff (capture) kar sakta hai. Modern networks me Hubs ko poori tarah ban kar diya gaya hai.
            </div>
          </div>

          {/* Switch */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-blue-600 dark:text-blue-400 block text-base font-bold mb-1 flex items-center gap-2">
              <Server className="w-4 h-4" /> 2. Switch (Layer 2 Data Link Device)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              <strong>Role & Working:</strong> Switch intelligent device hai jo MAC Address Table (CAM Table) maintain karta hai aur data ko sirf usi port par bhejta hai jahan destination device juda hai.
            </p>
            <div className="text-xs text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20 p-2.5 rounded border border-amber-200 dark:border-amber-900/50">
              <strong>Security Weaknesses:</strong><br />
              • <em>MAC Flooding:</em> Attacker hazaron fake MAC addresses bhejkar switch ki CAM memory bhar deta hai. Switch 'Fail-Open' hokar Hub ki tarah sabhi ports par broadcast karne lagta hai.<br />
              • <em>ARP Spoofing:</em> Attacker fake ARP replies bhejkar default gateway ban jata hai (Man-in-the-Middle).
            </div>
          </div>

          {/* Router */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-emerald-600 dark:text-emerald-400 block text-base font-bold mb-1 flex items-center gap-2">
              <Globe className="w-4 h-4" /> 3. Router (Layer 3 Network Gateway)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              <strong>Role & Working:</strong> Do alag-alag IP networks ke beech packets ko route karna aur access control rules apply karna.
            </p>
            <div className="text-xs text-purple-700 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-950/20 p-2.5 rounded border border-purple-200 dark:border-purple-900/50">
              <strong>Security Weaknesses:</strong><br />
              • <em>Default Credentials:</em> Router me default password (`admin/admin`) chhod dena.<br />
              • <em>Insecure Management:</em> Telnet ya HTTP ke zariye unencrypted management access dena.<br />
              • <em>Misconfigured ACLs:</em> Access Control Lists galat lagane se unauthorized traffic internal network me ghus jata hai.
            </div>
          </div>

          {/* Wi-Fi */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-purple-600 dark:text-purple-400 block text-base font-bold mb-1 flex items-center gap-2">
              <Wifi className="w-4 h-4" /> 4. Wi-Fi (Wireless LAN 802.11)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              <strong>Role & Working:</strong> Radio waves ke madhyam se hawa me bina physical wire ke data transmit karna.
            </p>
            <div className="text-xs text-rose-700 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/20 p-2.5 rounded border border-rose-200 dark:border-rose-900/50">
              <strong>Security Weaknesses:</strong><br />
              • <em>No Physical Boundary:</em> Wi-Fi signal diwaron ke paar sadak par bhi jata hai, jahan baitha koi bhi vyakti network intercept kar sakta hai.<br />
              • <em>Weak Encryption:</em> Purana WEP aur WPA kuch minutes me crack ho jata hai.<br />
              • <em>Rogue Access Points (Evil Twin):</em> Fake Wi-Fi hotspot banakar users ke login credentials churana.
            </div>
          </div>
        </div>

        {/* Master Comparison: Hub vs Switch vs Router */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-6 mb-2">
          Master Comparison: Hub vs Switch vs Router (तुलनात्मक तालिका)
        </h4>
        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs mb-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2.5 px-3 font-bold">Parameter</th>
                <th className="py-2.5 px-3 font-bold text-rose-600">Hub</th>
                <th className="py-2.5 px-3 font-bold text-amber-600">Switch</th>
                <th className="py-2.5 px-3 font-bold text-emerald-600">Router</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 px-3 font-semibold">OSI Layer</td>
                <td className="py-2 px-3 text-text-secondary">Layer 1 (Physical)</td>
                <td className="py-2 px-3 text-text-secondary">Layer 2 (Data Link)</td>
                <td className="py-2 px-3 text-text-secondary">Layer 3 (Network)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Data Forwarding</td>
                <td className="py-2 px-3 text-text-secondary">Broadcast to ALL ports</td>
                <td className="py-2 px-3 text-text-secondary">Unicast based on MAC Address</td>
                <td className="py-2 px-3 text-text-secondary">Routing based on IP Address</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Packet Sniffing Risk</td>
                <td className="py-2 px-3 text-text-secondary text-rose-600 font-bold">Extremely High (Trivial)</td>
                <td className="py-2 px-3 text-text-secondary">Low (Vulnerable to MAC flood)</td>
                <td className="py-2 px-3 text-text-secondary">Very Low (Boundary device)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Security Boundary</td>
                <td className="py-2 px-3 text-text-secondary">Zero boundary</td>
                <td className="py-2 px-3 text-text-secondary">Isolates collision domains</td>
                <td className="py-2 px-3 text-text-secondary">Isolates broadcast domains (ACLs)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: PROTOCOL SECURITY SOLUTIONS (IPSEC & HTTPS) */}
      {/* ========================================================= */}
      <section id="protocol-solutions" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            3. Protocol Security Solutions: IPSec & HTTPS
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (आईपी सुरक्षा [IPSec] के मोड्स व प्रोटोकॉल्स, एवं HTTPS का TLS हैंडशेक आर्किटेक्चर)
          </div>
        </div>

        {/* 3.1 IPSec in Detail */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          3.1 IPSec (Internet Protocol Security) in Detail (10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>IPSec</strong> (IP Security) IETF dwara viksit kiya gaya ek open standards framework hai jo Network Layer (Layer 3) par IP packets ko cryptographic encryption aur authentication pradan karta hai. Chuki IPSec Network Layer par kaam karta hai, isliye iske upar chalne wale sabhi applications (Web, Email, File Transfer) automatically secure ho jaate hain bina software me koi badlaav kiye.
        </p>

        {/* Core Protocols of IPSec */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          The Three Core Protocols of the IPSec Suite:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20">
            <strong className="text-blue-800 dark:text-blue-300 block text-sm font-mono font-bold mb-1">
              1. AH (Authentication Header - Protocol 51)
            </strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Data Integrity aur Origin Authentication pradan karta hai. Yeh poore IP packet ka digital hash banata hai taaki raaste me koi IP spoofing na kar sake. <strong>Lekin AH encryption provide nahi karta</strong> (data cleartext rehta hai).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20">
            <strong className="text-emerald-800 dark:text-emerald-300 block text-sm font-mono font-bold mb-1">
              2. ESP (Encapsulating Security Payload - Protocol 50)
            </strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              IPSec ka sabse mukhya protocol. Yeh <strong>Confidentiality (Encryption - AES)</strong>, Data Integrity, aur Authentication teeno pradan karta hai. Data payload ko poori tarah scramble kar deta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20">
            <strong className="text-purple-800 dark:text-purple-300 block text-sm font-mono font-bold mb-1">
              3. IKE (Internet Key Exchange - UDP 500)
            </strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Dono routers ya hosts ke beech automated tareeke se cryptographic keys ko negotiate aur establish karta hai (Security Association - SA management).
            </p>
          </div>
        </div>

        {/* The Two Operating Modes of IPSec */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          The Two Operating Modes of IPSec:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              1. Transport Mode (होस्ट-टू-होस्ट)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              Is mode me sirf IP packet ka <strong>Data Payload (TCP/UDP data)</strong> encrypt aur authenticate hota hai; mool IP Header waisa hi cleartext rehta hai.
            </p>
            <div className="text-[11px] font-mono bg-secondary/50 p-2 rounded border border-border">
              [Original IP Header] + [IPSec Header (ESP)] + [Encrypted Payload]
            </div>
            <p className="text-[11px] text-text-muted mt-2">
              Udaharan: Do computers ke beech direct end-to-end communication.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-blue-600 dark:text-blue-400 block text-sm font-bold mb-1">
              2. Tunnel Mode (गेटवे-टू-गेटवे / VPN)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              Is mode me poora ka poora mool IP packet (Header + Payload) encrypt ho jata hai aur uske upar ek naya <strong>Outer IP Header</strong> laga diya jata hai.
            </p>
            <div className="text-[11px] font-mono bg-secondary/50 p-2 rounded border border-border">
              [New IP Header] + [IPSec Header] + [Encrypted Original IP Packet]
            </div>
            <p className="text-[11px] text-text-muted mt-2">
              Udaharan: Company ke do branch offices ke beech <strong>Site-to-Site VPN Tunnel</strong> banana. Hacker ko asal source aur destination IP ka pata bhi nahi chalta!
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 2.1: IPSEC ARCHITECTURE */}
        <EducationalFigure
          caption="Figure 2.1: IPSec Packet Structure Comparison: Transport Mode vs Tunnel Mode Encapsulation"
          source="RFC 4301 / IETF Security Standards"
          license="Open Educational Diagram"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              IPSec Packet Structure • Transport vs Tunnel Mode
            </div>

            <div className="space-y-3 max-w-lg mx-auto font-mono text-xs">
              {/* Original */}
              <div className="p-2.5 rounded-lg bg-surface border border-border">
                <span className="text-[10px] text-text-muted block text-left">Original IP Packet:</span>
                <div className="flex gap-1 mt-1">
                  <div className="flex-1 bg-slate-200 dark:bg-slate-800 p-2 rounded font-bold">IP Header</div>
                  <div className="flex-2 bg-blue-500/20 text-blue-700 dark:text-blue-300 p-2 rounded font-bold">TCP / UDP Payload Data</div>
                </div>
              </div>

              {/* Transport */}
              <div className="p-2.5 rounded-lg bg-surface border border-border">
                <span className="text-[10px] text-text-muted block text-left">Transport Mode (Host-to-Host):</span>
                <div className="flex gap-1 mt-1">
                  <div className="flex-1 bg-slate-200 dark:bg-slate-800 p-2 rounded font-bold">IP Header</div>
                  <div className="bg-emerald-500/30 text-emerald-800 dark:text-emerald-300 p-2 rounded font-bold text-[10px]">ESP</div>
                  <div className="flex-2 bg-rose-500/20 text-rose-700 dark:text-rose-300 p-2 rounded font-bold">Encrypted Payload</div>
                </div>
              </div>

              {/* Tunnel */}
              <div className="p-2.5 rounded-lg bg-surface border border-border">
                <span className="text-[10px] text-text-muted block text-left">Tunnel Mode (VPN Gateways):</span>
                <div className="flex gap-1 mt-1">
                  <div className="bg-purple-500/30 text-purple-800 dark:text-purple-300 p-2 rounded font-bold text-[10px]">New IP Hdr</div>
                  <div className="bg-emerald-500/30 text-emerald-800 dark:text-emerald-300 p-2 rounded font-bold text-[10px]">ESP</div>
                  <div className="flex-3 bg-rose-500/20 text-rose-700 dark:text-rose-300 p-2 rounded font-bold">Encrypted [Orig IP Hdr + Data]</div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-text-muted mt-3">
              Tunnel mode hides internal private IP addresses completely over public internet routers.
            </p>
          </div>
        </EducationalFigure>

        {/* 3.2 HTTPS in Detail */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          3.2 HTTPS (HyperText Transfer Protocol Secure) in Detail (10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>HTTPS</strong> web communication ka secure standard hai jo Application Layer (HTTP) aur Transport Layer (TCP) ke beech me <strong>TLS (Transport Layer Security)</strong> protocol ko jod kar banta hai (Port 443).
        </p>

        {/* How HTTPS Works: TLS Handshake */}
        <div className="space-y-4 my-5">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              The 4-Step TLS Handshake Process:
            </strong>
            <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm text-text-secondary leading-relaxed mt-2">
              <li><strong>Client Hello:</strong> Browser web server ko hello kehta hai aur batata hai ki wo kaun-kaun se encryption algorithms (Cipher Suites) support karta hai.</li>
              <li><strong>Server Hello + Certificate:</strong> Web server apna <strong>Digital Certificate</strong> (jisme server ki Public Key hoti hai aur CA dwara signed hota hai) browser ko bhejta hai.</li>
              <li><strong>Authentication & Key Exchange:</strong> Browser certificate ko verify karta hai. Browser ek secret <em>Pre-Master Secret Key</em> generate karta hai aur server ki public key se encrypt karke server ko bhejta hai (jise sirf server apni Private key se decrypt kar sakta hai).</li>
              <li><strong>Symmetric Session Encryption:</strong> Ab dono ke paas ek common <strong>AES Session Key</strong> aa jati hai. Iske baad ka saara web traffic ultra-fast symmetric encryption se secure hota hai.</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20">
            <strong className="text-emerald-800 dark:text-emerald-300 block text-sm font-bold mb-1">
              Three Guarantees Provided by HTTPS:
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              1. <strong>Confidentiality:</strong> Credit card numbers aur passwords encrypted rehte hain; Wi-Fi hacker unhe padh nahi sakta.<br />
              2. <strong>Integrity:</strong> Raste me koi ad ya virus code inject nahi kiya ja sakta.<br />
              3. <strong>Authentication:</strong> Browser ko pata hota hai ki wo sach me `sbi.co.in` se baat kar raha hai, kisi fake phishing site se nahi.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: DEVICE & NETWORK SOLUTIONS (VLAN, VPN, INGRESS) */}
      {/* ========================================================= */}
      <section id="device-solutions" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4. Network Security Solutions: VLAN, VPN & Ingress Filtering
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (नेटवर्क सेगमेंटेशन [VLAN], एन्क्रिप्टेड टनल [VPN] एवं इनग्रेस पैकेट फिल्टरिंग)
          </div>
        </div>

        {/* 4.1 VLAN */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          4.1 VLAN (Virtual Local Area Network) in Detail
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>VLAN</strong> ek aisi network segmentation takneek hai jisme ek single physical switch ko software configuration (IEEE 802.1Q tagging) ke jariye multiple alag-alag logical networks me baant diya jata hai.
        </p>

        <div className="p-4 rounded-xl border border-border bg-surface my-4">
          <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">
            Security Role of VLAN (Network Isolation):
          </strong>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
            Agar company me sabhi computers ek hi LAN me hon, to ek guest Wi-Fi user internal finance server ko hack kar sakta hai. VLAN ke dwara:
          </p>
          <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
            <li><strong>Finance Department:</strong> VLAN 10 (Restricted).</li>
            <li><strong>HR Department:</strong> VLAN 20.</li>
            <li><strong>Guest Users:</strong> VLAN 30 (Sirf internet access, internal access ZERO).</li>
          </ul>
          <p className="text-xs text-text-secondary mt-2">
            VLAN 30 ka user kisi bhi tarah se VLAN 10 ke traffic ko sniff ya access nahi kar sakta jab tak ki beech me laga Firewall use permit na kare!
          </p>
        </div>

        {/* 4.2 VPN */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          4.2 VPN (Virtual Private Network) in Detail (10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>VPN</strong> ek aisi security technology hai jo public unsecure internet ke upar ek surakshit, encrypted aur private <strong>"Virtual Tunnel"</strong> banati hai. Isse lagta hai ki remote user company ke office ke andar baithkar hi LAN se juda hua hai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              1. Remote Access VPN (Client-to-Site)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Work From Home (WFH) ya safar kar rahe employees apne laptop me VPN software client (e.g. Cisco AnyConnect, OpenVPN) chalate hain aur internet ke madhyam se office network se surakshit judte hain.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-blue-600 dark:text-blue-400 block text-sm font-bold mb-1">
              2. Site-to-Site VPN (Router-to-Router)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Do alag-alag shahron me sthit branch offices ke routers ko internet ke zariye aapas me permanent IPSec tunnel se jodna. Users ko bina kisi client software ke dono offices ki files asani se milti hain.
            </p>
          </div>
        </div>

        {/* 4.3 Ingress Filtering */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          4.3 Ingress Filtering (इनग्रेस पैकेट फिल्टरिंग - BCP 38)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Ingress Filtering</strong> network edge routers aur Internet Service Providers (ISPs) par lagayi jane wali ek anivarya packet filtering takneek hai (RFC 2827 / BCP 38) jiska mukhya uddeshya <strong>IP Spoofing ko jad se khatam karna</strong> hai.
        </p>

        <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20 my-4">
          <strong className="text-purple-800 dark:text-purple-300 block text-sm font-bold mb-1">
            Working Principle: Source Address Validation
          </strong>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Router aane wale har packet ke <strong>Source IP Address</strong> ko check karta hai:
            <br />
            • Agar kisi customer network ka authorized IP block `203.0.113.0/24` hai, aur us customer ki taraf se aane wale packet par Source IP `10.0.0.1` ya Google ka `8.8.8.8` likha hai — to router turant pehchaan leta hai ki yeh spoofed/fake packet hai!
            <br />
            • Router us packet ko turant <strong>DROP</strong> kar deta hai aur aage internet par nahi jane deta.
            <br />
            Is prakar Ingress filtering DDoS amplification attacks ko paida hone se pehle hi rok deti hai.
          </p>
        </div>

        {/* 10-Mark Exam Blueprint Checklist for Unit 2 */}
        <div className="p-5 rounded-2xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-500/[0.04] my-8">
          <div className="flex items-center gap-2 text-brand-700 dark:text-brand-400 font-bold text-base mb-2">
            <Award className="w-5 h-5" />
            <span>Unit 2 Complete 10-Mark Answer Writing Checklist (BTEUP Exam Special)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">
            Exam room mein baithe samay Unit 2 se banne wale 4 potential 10-mark questions aur unke anivarya sub-headings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q1. Protocol Weaknesses: IP, TCP, UDP & Routing (10 Marks)</strong>
              <p className="text-text-secondary">• IP: No authentication, IP Spoofing<br />• TCP: SYN Flooding (3-way handshake) & Session Hijacking<br />• UDP: Stateless, Amplification DDoS attacks<br />• Routing: RIP plaintext updates vs OSPF MD5 auth<br />• Application: HTTP cleartext vs SMTP email spoofing</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q2. Network Device Weaknesses (Hub, Switch, Router, Wi-Fi) (10 Marks)</strong>
              <p className="text-text-secondary">• Hub: Physical broadcast & promiscuous mode packet sniffing<br />• Switch: MAC Flooding (CAM table overflow) & ARP poisoning<br />• Router: Default passwords, insecure Telnet, misconfigured ACLs<br />• Wi-Fi: Radiation outside premises, WEP cracked, Rogue APs<br />• Master Hub vs Switch vs Router Comparison Table</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q3. IPSec Protocol Suite & Operating Modes (10 Marks)</strong>
              <p className="text-text-secondary">• IPSec definition & Layer 3 placement<br />• 3 Protocols: AH (Auth/Integrity), ESP (Encryption/AES), IKE<br />• Transport Mode (Payload only encrypted, Host-to-Host)<br />• Tunnel Mode (Entire packet encrypted, Gateway VPN)<br />• Figure 2.1 Packet Structure Diagram</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q4. HTTPS, VLAN, VPN & Ingress Filtering (10 Marks)</strong>
              <p className="text-text-secondary">• HTTPS: 4-Step TLS Handshake & CA certificate validation<br />• VLAN: Logical switch segmentation & broadcast containment<br />• VPN: Encrypted tunneling (Remote Access vs Site-to-Site)<br />• Ingress Filtering: BCP 38 source IP validation against spoofing</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default IsUnit2Content;
