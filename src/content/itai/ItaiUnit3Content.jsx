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
  Globe,
  Network,
  Share2,
  Router,
  Layers,
  ArrowRight,
  ShieldCheck,
  Server,
  Radio,
  Wifi,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const ItaiUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Introduction to IT and AI (Semester 1)
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>10 Periods / Exam Weightage: 10-12 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Internet, Computer Networks & Protocols
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Network Types (PAN, LAN, MAN, WAN)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Network Topologies (Bus, Star, Ring, Mesh)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Devices (Hub, Switch, Router, Modem)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">IP Addressing (IPv4 vs IPv6)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Core Protocols (TCP/IP, HTTP, DNS, FTP)</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Computer networks modern connected duniya ki lifelines hain. Is unit me hum networks ke geographical classification (LAN se lekar global Internet tak), unki structural layouts (Topologies), data route karne wale devices, aur communication rules (Protocols) ko deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 3.1 Network Basics and Geographical Scope */}
      {/* ========================================================= */}
      <section id="sec-3-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            3.1. Network Basics and Geographical Scope: PAN, LAN, MAN, WAN
          </h2>
        </div>

        {/* Definition Placard */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                Computer Network kya hai aur kyon chahiye?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Jab do ya do se zyada autonomous computers kisi transmission media (cables ya wireless) ke dwara aapas me data, hardware resources (jaise printer, central storage), aur software applications share karne ke liye connect hote hain, to use <strong>Computer Network</strong> kehte hain.
              </p>
            </div>
          </div>
        </div>

        {/* Network Goals / Benefits */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">1. Resource Sharing:</strong>
            Har user ke liye alag printer khareedne ki bajaye pure floor ka ek central laser printer share kiya ja sakta hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">2. Cost Reduction:</strong>
            Software licenses aur expensive hardware share hone se operational budget kafi kam ho jata hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">3. High Reliability:</strong>
            Agar ek file server down ho jaye, to backup secondary server se instant recovery ho jati hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">4. Fast Communication:</strong>
            Email, instant messaging, cloud sync aur video conferencing se instant global interaction.
          </div>
        </div>

        {/* Classification by Geographical Area */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Geographical Scope Classification (PAN, LAN, MAN, WAN)</span>
        </h3>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary">1. PAN (Personal Area Network)</h5>
              <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">Range: &lt; 10 Meters</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Ek single person ke aas-paas ke personal devices ke beech bana chhota network.
              <br />• <strong>Technology:</strong> Bluetooth, Zigbee, Wi-Fi Direct, Mobile Hotspot.
              <br />• <strong>Example:</strong> Smartphone ko wireless earbuds, smartwatch, ya laptop se connect karna.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400">2. LAN (Local Area Network)</h5>
              <span className="text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">Range: Up to 1 Km</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Ek single room, laboratory, college campus ya office building me situated computers ka interconnected network.
              <br />• <strong>Technology:</strong> Twisted pair Ethernet cables (RJ-45), Wi-Fi (WLAN 802.11).
              <br />• <strong>Speed:</strong> Ultra-fast data speed (100 Mbps, 1 Gbps, up to 10 Gbps) with extremely low error rate. Privately owned.
              <br />• <strong>Example:</strong> Polytechnic college ki computer lab ke 50 systems ka network.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-amber-600 dark:text-amber-400">3. MAN (Metropolitan Area Network)</h5>
              <span className="text-xs font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded font-bold">Range: 5 – 50 Km (City-Wide)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Ek poore city ya metropolitan region me spread multiple LANs ko connect karne wala network.
              <br />• <strong>Technology:</strong> Optical fiber cables (OFC), microwave links, high-speed radio.
              <br />• <strong>Example:</strong> City ka Cable TV network, city traffic CCTV surveillance system, ya ek bank ki city ke andar saari 15 branches ka internal network.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-purple-600 dark:text-purple-400">4. WAN (Wide Area Network)</h5>
              <span className="text-xs font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded font-bold">Range: Country / Continental / Global</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Bohot bade geographical area (countries, continents ya poori duniya) me spread network.
              <br />• <strong>Technology:</strong> Undersea submarine fiber optic cables, satellite communication links, telecom leased lines.
              <br />• <strong>Example:</strong> <strong>The Internet (Network of Networks)</strong>, Indian Railways National Reservation Network.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Feature</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">LAN</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">MAN</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">WAN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Coverage Area</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Small (Room, Building, Campus)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Moderate (An entire city)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Very Large (Country, World)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Data Speed</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Highest (100 Mbps – 10 Gbps)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Moderate (44 – 155 Mbps)</td>
                <td className="p-3 text-amber-600 dark:text-amber-400 font-bold">Lower (variable over distances)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Error Rate & Propagation Delay</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Lowest (minimal noise/delay)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Moderate</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Highest (due to satellite/repeater hops)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Ownership</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Private (Individual, College, Office)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Private or Public Consortium</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Not owned by single entity (distributed)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.2 Network Topologies */}
      {/* ========================================================= */}
      <section id="sec-3-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            3.2. Network Topologies: Geometric Layouts of Interconnection
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Network Topology</strong> kisi network me computers, cables aur devices ke physical ya logical layout arrangement ko kehte hain. Yeh determine karta hai ki data kis raste se travel karega aur ek link tootne par network par kya effect padega.
        </p>

        {/* Embedded Figure: Topologies */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/9/97/NetworkTopologies.svg"
          alt="Visual comparison of common network topologies: Bus, Star, Ring, Mesh, Tree, and Fully Connected"
          caption="Figure 3.1: Common Network Topologies: Bus, Star, Ring, Mesh, Tree, and Hybrid Structures"
          source="Wikimedia Commons"
          maxWidth="max-w-xl"
          fallback={
            <div className="p-4 rounded-lg bg-card text-center text-xs font-mono border border-border">
              <div className="font-bold text-primary mb-2">Network Topologies Model</div>
              <div>Bus (Single Backbone) | Star (Central Hub) | Ring (Circular Loop) | Mesh (All-to-All)</div>
            </div>
          }
        />

        {/* Detailed Topologies Breakdown */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* Bus Topology */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-blue-500">1. Bus Topology</h5>
              <span className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono">Single Backbone Cable</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Ek single linear continuous cable (backbone) hoti hai jisse sabhi computers Drop lines aur T-connectors dwara jude hote hain. Dono ends par <strong>Terminators</strong> lage hote hain jo signal reflection ko absorb karte hain.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-0.5">
              <li><strong>Advantage:</strong> Cable ki requirement sabse kam hoti hai, installation sasta aur easy.</li>
              <li><strong>Disadvantage:</strong> Agar main backbone cable beech se kahin bhi break hui, to <em>poora network dead</em> ho jata hai. Traffic badhne par collision hota hai.</li>
            </ul>
          </div>

          {/* Star Topology */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-500">2. Star Topology (Most Popular)</h5>
              <span className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono">Central Hub / Switch</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Har computer dedicated cable ke through ek central device (<strong>Hub ya Switch</strong>) se juda hota hai. Modern labs aur offices me 95% yahi use hoti hai.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-0.5">
              <li><strong>Advantage:</strong> Agar koi ek computer ya uski cable kharab ho jaye, to baki network par <em>koi fark nahi padta</em>. New node add karna bohot easy.</li>
              <li><strong>Disadvantage:</strong> Central switch fail hote hi sabhi devices ka communication ruk jata hai. Cable cost bus topology se zyada hoti hai.</li>
            </ul>
          </div>

          {/* Ring Topology */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-purple-500">3. Ring Topology</h5>
              <span className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono">Circular Token Loop</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Har device apne adjacent do devices se circular closed loop me judi hoti hai. Data ek specific direction (unidirectional) me special <strong>Token</strong> ke sath travel karta hai.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-0.5">
              <li><strong>Advantage:</strong> Token passing ke karan data collision nahi hota. Equal access opportunity.</li>
              <li><strong>Disadvantage:</strong> Ek bhi computer ya cable break hone par poori ring ka loop toot jata hai. Troubleshooting mushkil hai.</li>
            </ul>
          </div>

          {/* Mesh Topology */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm text-amber-500">4. Mesh Topology (Full Mesh)</h5>
              <span className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono">Point-to-Point Redundancy</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Har computer network ke har dusre computer se directly dedicated point-to-point physical cable se juda hota hai.
            </p>
            <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-xs font-mono">
              <strong>Formula for Links:</strong> Total Links = <span className="text-primary font-bold">n(n - 1) / 2</span>, Ports per device = <span className="font-bold">n - 1</span> (where n = number of nodes).
            </div>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-0.5">
              <li><strong>Advantage:</strong> Maximum reliability, robust security (dedicated line), zero traffic bottleneck.</li>
              <li><strong>Disadvantage:</strong> Boht zyada cables aur I/O ports ki zaroorat hoti hai; extremely expensive and complex installation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.3 Networking Devices & Protocols */}
      {/* ========================================================= */}
      <section id="sec-3-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            3.3. Networking Hardware Devices and Core Internet Protocols
          </h2>
        </div>

        {/* Hardware Devices Grid */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Essential Networking Hardware Devices</span>
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold">1. Hub (Unintelligent)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Physical layer multi-port device. Ek port par aane wale data signals ko <strong>Broadcast</strong> karke sabhi connected computers ko bhej deta hai (chahe target koi ek hi ho). Collision chances high.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-emerald-600 dark:text-emerald-400">2. Switch (Intelligent)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Data Link layer device. Yeh connected devices ke <strong>MAC Addresses</strong> learn karta hai aur data frame ko sirf aur sirf uske destination port par forward karta hai (<strong>Unicast</strong>). Zero collision.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-primary">3. Router</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Network layer device jo do alag-alag networks (jaise ghar ke LAN aur global Internet WAN) ko connect karta hai. IP addresses read karke data packet ko shortest/best path se route karta hai.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-amber-500">4. Modem (Modulator-Demodulator)</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Computer ke Digital signals ko transmission line (telephone/cable) ke Analog signals me convert karta hai (<strong>Modulation</strong>), aur aane wale analog signals ko wapas digital me badalta hai (<strong>Demodulation</strong>).
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-purple-500">5. Gateway</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Do bilkul alag architecture aur protocols par chalne wale networks ke beech protocol conversion aur translation ka kaam karta hai.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold text-blue-500">6. Repeater</strong>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Long distances travel karne par weak (attenuated) hue signals ko amplify/regenerate karke original strength me aage forward karta hai.
            </p>
          </div>
        </div>

        {/* IP Addressing: IPv4 vs IPv6 */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>IP Addressing: IPv4 vs IPv6</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Internet par connect hone wale har device ko identify karne ke liye ek unique logical number assign kiya jata hai jise <strong>IP Address</strong> kehte hain:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-primary">IPv4 (Internet Protocol Version 4)</h5>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>Size:</strong> <strong>32 bits</strong> (4 bytes).</li>
              <li><strong>Format:</strong> 4 decimal numbers separated by dots (e.g. <code>192.168.1.1</code>).</li>
              <li><strong>Total Addresses:</strong> 2³² ≈ 4.3 billion addresses (jo aaj duniya bhar me lagbhag exhaust ho chuke hain).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm text-emerald-600 dark:text-emerald-400">IPv6 (Internet Protocol Version 6)</h5>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>Size:</strong> <strong>128 bits</strong> (16 bytes).</li>
              <li><strong>Format:</strong> 8 hexadecimal groups separated by colons (e.g. <code>2001:0db8:85a3::8a2e:0370:7334</code>).</li>
              <li><strong>Total Addresses:</strong> 2¹²⁸ ≈ 3.4 × 10³⁸ addresses (virtually inexhaustible, built-in IPsec security).</li>
            </ul>
          </div>
        </div>

        {/* Core Internet Protocols */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Core Internet Protocols & Their Functions</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">TCP (Transmission Control Protocol):</strong>
            Connection-oriented reliable protocol jo data ko packets me todta hai, sequence number deta hai aur 3-way handshake se ensure karta hai ki koi packet drop na ho.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">HTTP vs HTTPS (Port 80 vs 443):</strong>
            Web browser aur web server ke beech web pages transfer karne ka protocol. HTTPS me SSL/TLS encryption jud jata hai jisse passwords aur banking data secure rehta hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">DNS (Domain Name System):</strong>
            Internet ka <strong>Phonebook</strong>. Insaan <code>bteup.ac.in</code> jaise names yaad rakhta hai jabki routers IP address (<code>115.240.12.5</code>) samajhte hain. DNS domain name ko IP me translate karta hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">FTP (File Transfer Protocol):</strong>
            Client aur server ke beech large files (software installers, website backups) ko download ya upload karne ke liye use hone wala standard protocol (Port 20 & 21).
          </div>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/20 text-xs sm:text-sm text-purple-900 dark:text-purple-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-purple-800 dark:text-purple-300">Exam Point (याद रखो):</strong>
            Hub aur Switch ke beech difference har semester exam me 5-marks me pucha jata hai: <em>Hub passive broadcast karta hai (saare ports par), jabki Switch MAC table banakar dedicated unicast karta hai</em>.
          </div>
        </div>
      </section>
    </article>
  );
};

export default ItaiUnit3Content;
