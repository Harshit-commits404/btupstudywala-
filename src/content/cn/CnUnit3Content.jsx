import React from 'react';
import { 
  Globe, 
  Compass, 
  MapPin, 
  GitFork, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Layers, 
  Cpu, 
  FileText
} from 'lucide-react';

const CnUnit3Content = () => {
  return (
    <article className="space-y-12">
      {/* Chapter Title & Header */}
      <div className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Unit 3 • 10 Periods
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          Network Layer, IP Addressing & Routing Protocols
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Network Layer Design Issues, IPv4 Datagram & Classes, IPv6 Architecture, Distance-Vector vs Link-State Routing Algorithms, aur RIP vs OSPF Protocols ka complete study notes.
        </p>
      </div>

      {/* SECTION 1: Network Layer Design Issues */}
      <section id="network-layer-design" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">1</span>
          Network Layer Design Issues
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Network Layer ka main task packets ko source host se destination host tak deliver karna hai, chahe dono ke beech hazaron routers aur different intermediate networks kyon na hon.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-primary">Key Responsibilities</h4>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Logical Addressing:</strong> Global identification ke liye IP address assign karna.</li>
              <li><strong>Routing:</strong> Best optimal path choose karna (Shortest Path determination).</li>
              <li><strong>Packet Switching:</strong> Store-and-forward mechanism se packets ko forward karna.</li>
              <li><strong>Congestion Control:</strong> Routers par traffic jam hone par packet drop aur throttling manage karna.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-amber-500">Service Types to Transport Layer</h4>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Connectionless Service (Datagram Network):</strong> Har packet independent route se travel karta hai bina kisi pre-established path ke (e.g. Internet IP).</li>
              <li><strong>Connection-Oriented Service (Virtual Circuit):</strong> Pehle ek predefined path banta hai, sabhi packets usi fixed path se order me travel karte hain (e.g. ATM, Frame Relay).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: IPv4 Protocol & Header Structure */}
      <section id="ipv4-protocol" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">2</span>
          IPv4 Protocol, Header Structure & Classful Addressing
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>IPv4 (Internet Protocol version 4)</strong> ek <strong>32-bit</strong> logical address system hai jo dotted-decimal notation me likha jata hai (e.g. <code className="text-primary font-mono font-bold">192.168.1.10</code>). Total address space = 2<sup>32</sup> (approx 4.3 billion addresses).
        </p>

        {/* IPv4 Header Box */}
        <div className="p-5 rounded-xl border border-border bg-muted/20 space-y-3">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">IPv4 Datagram Header (20 to 60 Bytes)</h4>
          <p className="text-xs text-muted-foreground">
            Default base header size hamesha <strong>20 Bytes</strong> hota hai. Iske main fields hain:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-center">
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-primary font-bold">VER (4 bits)</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">IP Version (4)</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-primary font-bold">IHL (4 bits)</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">Header Length in 32-bit words</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-green-500 font-bold">Type of Service</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">QoS priority</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-green-500 font-bold">Total Length (16b)</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">Header + Payload size</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-amber-500 font-bold">TTL (Time to Live)</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">Prevents infinite routing loops (decrements at each hop)</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-amber-500 font-bold">Protocol (8b)</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">6 for TCP, 17 for UDP, 1 for ICMP</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-purple-500 font-bold">Header Checksum</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">Error detection for header bits</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-rose-500 font-bold">Source & Dest IP</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">32-bit sender & receiver addresses</p>
            </div>
          </div>
        </div>

        {/* IPv4 Classful Addressing Table */}
        <h3 className="text-xl font-bold text-foreground pt-2">Classful IPv4 Addressing</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Class</th>
                <th className="p-2 border border-border">1st Octet Range</th>
                <th className="p-2 border border-border">Network / Host ID Bits</th>
                <th className="p-2 border border-border">Default Subnet Mask</th>
                <th className="p-2 border border-border">Intended Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono">
              <tr>
                <td className="p-2 font-bold text-primary border border-border">Class A</td>
                <td className="p-2 text-foreground border border-border">1 – 126</td>
                <td className="p-2 text-muted-foreground border border-border">8 Net / 24 Host</td>
                <td className="p-2 text-foreground border border-border">255.0.0.0</td>
                <td className="p-2 text-muted-foreground border border-border">Huge organizations with 16 million hosts</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-green-500 border border-border">Class B</td>
                <td className="p-2 text-foreground border border-border">128 – 191</td>
                <td className="p-2 text-muted-foreground border border-border">16 Net / 16 Host</td>
                <td className="p-2 text-foreground border border-border">255.255.0.0</td>
                <td className="p-2 text-muted-foreground border border-border">Medium enterprises & universities (65,534 hosts)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-purple-500 border border-border">Class C</td>
                <td className="p-2 text-foreground border border-border">192 – 223</td>
                <td className="p-2 text-muted-foreground border border-border">24 Net / 8 Host</td>
                <td className="p-2 text-foreground border border-border">255.255.255.0</td>
                <td className="p-2 text-muted-foreground border border-border">Small LANs (up to 254 hosts per network)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-amber-500 border border-border">Class D</td>
                <td className="p-2 text-foreground border border-border">224 – 239</td>
                <td className="p-2 text-muted-foreground border border-border">N/A</td>
                <td className="p-2 text-muted-foreground border border-border">No Subnet Mask</td>
                <td className="p-2 text-muted-foreground border border-border">Multicasting (Audio/Video streaming)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-rose-500 border border-border">Class E</td>
                <td className="p-2 text-foreground border border-border">240 – 255</td>
                <td className="p-2 text-muted-foreground border border-border">N/A</td>
                <td className="p-2 text-muted-foreground border border-border">No Subnet Mask</td>
                <td className="p-2 text-muted-foreground border border-border">Experimental & R&D purposes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> <code className="text-foreground">127.0.0.0 to 127.255.255.255</code> is reserved for Loopback / Localhost testing (e.g. 127.0.0.1).
        </p>
      </section>

      {/* SECTION 3: Concept of IPv6 */}
      <section id="ipv6-concept" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">3</span>
          Concept of IPv6 (Next Generation IP)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Smartphones, IoT devices aur cloud servers ke tezi se badhne ke karan 32-bit IPv4 addresses exhaust (khatam) ho gaye. Is problem ko solve karne ke liye <strong>IPv6 (Internet Protocol version 6)</strong> ko introduce kiya gaya.
        </p>

        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-2">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-primary">IPv6 Format</h4>
          <p className="text-xs text-foreground leading-relaxed">
            IPv6 address <strong>128-bit</strong> ka hota hai jo 16-bit ke 8 groups (hextets) me Hexadecimal notation me likha jata hai, jinhe colons (:) se separate kiya jata hai: <br />
            <code className="text-primary font-mono font-bold text-xs bg-card px-2 py-1 rounded inline-block mt-1">2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>
          </p>
        </div>

        {/* IPv4 vs IPv6 Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Feature</th>
                <th className="p-2 border border-border">IPv4</th>
                <th className="p-2 border border-border">IPv6</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Address Length</td>
                <td className="p-2 text-rose-500 font-mono font-bold border border-border">32 bits (4 Bytes)</td>
                <td className="p-2 text-green-500 font-mono font-bold border border-border">128 bits (16 Bytes)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Total Address Space</td>
                <td className="p-2 text-muted-foreground border border-border">2<sup>32</sup> ≈ 4.3 Billion</td>
                <td className="p-2 text-green-500 font-bold border border-border">2<sup>128</sup> ≈ 3.4 × 10<sup>38</sup> (Virtually unlimited)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Notation</td>
                <td className="p-2 text-muted-foreground border border-border">Dotted Decimal (192.168.1.1)</td>
                <td className="p-2 text-muted-foreground border border-border">Hexadecimal separated by Colons (2001:db8::1)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Base Header Size</td>
                <td className="p-2 text-muted-foreground border border-border">Variable (20 to 60 Bytes)</td>
                <td className="p-2 text-green-500 font-bold border border-border">Fixed 40 Bytes (Faster router processing)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Security</td>
                <td className="p-2 text-muted-foreground border border-border">Optional (IPsec add karna padta hai)</td>
                <td className="p-2 text-green-500 font-bold border border-border">Mandatory built-in IPsec support</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Broadcast Support</td>
                <td className="p-2 text-muted-foreground border border-border">Broadcast supported</td>
                <td className="p-2 text-muted-foreground border border-border">No broadcast (Replaced by Multicast & Anycast)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: Routing Principles & Algorithms */}
      <section id="routing-algorithms" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          Routing Principles & Algorithms: Distance-Vector vs Link-State
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>Routing</strong> woh process hai jiske dwara routers data packets ko destination tak pahunchane ke liye best aur shortest path determine karte hain. Routing algorithms do main categories me aate hain:
        </p>

        {/* Distance Vector vs Link State */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Distance Vector */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-blue-500">1. Distance-Vector Routing</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Yeh <strong>Bellman-Ford Algorithm</strong> par based hai. Har router periodic intervals par apna complete routing table (vector of distances) sirf apne <em>immediate neighbors (adjacent routers)</em> ke sath share karta hai.
            </p>
            <div className="p-2 rounded bg-muted/40 text-xs text-muted-foreground space-y-1">
              <div><strong>Core Principle:</strong> "Tell your neighbors about the whole world."</div>
              <div className="text-amber-500"><strong>Issue:</strong> Slow convergence aur <em>Count-to-Infinity problem</em> (solved by Split Horizon and Poison Reverse).</div>
            </div>
          </div>

          {/* Link State */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-green-500">2. Link-State Routing</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Yeh <strong>Dijkstra's Shortest Path First (SPF) Algorithm</strong> par based hai. Har router apne directly connected links ke status (Link State Advertisement - LSA) ko <em>poore network me flood</em> karta hai.
            </p>
            <div className="p-2 rounded bg-muted/40 text-xs text-muted-foreground space-y-1">
              <div><strong>Core Principle:</strong> "Tell the whole world about your direct neighbors."</div>
              <div className="text-green-500"><strong>Advantage:</strong> Fast convergence, complete global topology map, zero routing loops.</div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Parameter</th>
                <th className="p-2 border border-border">Distance-Vector</th>
                <th className="p-2 border border-border">Link-State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Algorithm</td>
                <td className="p-2 text-muted-foreground border border-border">Bellman-Ford Algorithm</td>
                <td className="p-2 text-muted-foreground border border-border">Dijkstra's SPF Algorithm</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Information Sent</td>
                <td className="p-2 text-muted-foreground border border-border">Complete routing table (distances to all nodes)</td>
                <td className="p-2 text-muted-foreground border border-border">Only state of directly connected links (LSA)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Information Sent To</td>
                <td className="p-2 text-muted-foreground border border-border">Only immediate neighbors</td>
                <td className="p-2 text-muted-foreground border border-border">Flooded to all routers in the network</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Convergence Speed</td>
                <td className="p-2 text-rose-500 font-semibold border border-border">Slow (prone to routing loops)</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Very Fast</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: Routing Protocols: RIP vs OSPF */}
      <section id="rip-vs-ospf" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">5</span>
          Routing Protocols: RIP vs OSPF (Exam Favorite)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Interior Gateway Protocols (IGP) autonomous system ke andar routing ke liye use hote hain:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-primary">RIP (Routing Information Protocol)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Distance-vector routing protocol. Metric ke roop me <strong>Hop Count</strong> (number of routers in path) use karta hai.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li>Maximum allowed hops = <strong>15</strong> (Hop 16 is considered unreachable/infinity).</li>
              <li>Updates har <strong>30 seconds</strong> me periodic broadcast/multicast hote hain.</li>
              <li>Sirf chhote networks ke liye suitable hai. Link speed (bandwidth) ko consider nahi karta.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-green-500">OSPF (Open Shortest Path First)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Link-state routing protocol. Metric ke roop me <strong>Cost</strong> (<code className="font-mono text-foreground">10^8 / Bandwidth</code>) use karta hai.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li>Koi hop count limit nahi hoti (bade enterprise networks ke liye ideal).</li>
              <li>Hierarchical structure banata hai: <strong>Areas</strong> (Backbone Area 0).</li>
              <li>Updates event-triggered hote hain (sirf link change hone par LSA bheja jata hai).</li>
            </ul>
          </div>
        </div>

        {/* RIP vs OSPF Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Feature</th>
                <th className="p-2 border border-border">RIP (Routing Information Protocol)</th>
                <th className="p-2 border border-border">OSPF (Open Shortest Path First)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Type</td>
                <td className="p-2 text-muted-foreground border border-border">Distance-Vector protocol</td>
                <td className="p-2 text-muted-foreground border border-border">Link-State protocol</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Metric</td>
                <td className="p-2 text-foreground font-mono border border-border">Hop Count (Max 15)</td>
                <td className="p-2 text-foreground font-mono border border-border">Cost based on Link Bandwidth</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Update Mechanism</td>
                <td className="p-2 text-muted-foreground border border-border">Periodic every 30 seconds</td>
                <td className="p-2 text-muted-foreground border border-border">Triggered only on topology changes</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Scalability</td>
                <td className="p-2 text-muted-foreground border border-border">Small networks only (&lt; 15 hops)</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Very Large Enterprise & ISP networks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: Exam Focus & Important Questions */}
      <section className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-primary" />
          Exam Focus & Important Questions (BTEUP)
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">1 Mark Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>IPv4 aur IPv6 kitne bits ke hote hain? (32-bit aur 128-bit)</li>
              <li>RIP me maximum hop count kitna hota hai? (15 hops)</li>
              <li>TTL field ka kya use hai? (Looping packets ko drop karna)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">2-3 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Class A, B, C ke IP range aur default subnet masks likhiye.</li>
              <li>IPv6 ki zaroorat kyon padi?</li>
              <li>Distance-vector routing me Count-to-Infinity problem kya hai?</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">5 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>IPv4 aur IPv6 ke beech tafseel se comparison kijiye.</li>
              <li>Distance-Vector Routing aur Link-State Routing algorithms me antar spasht kijiye.</li>
              <li>RIP aur OSPF routing protocols ke working principles aur differences ko explain kijiye.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7: Quick Revision Points */}
      <section className="p-5 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Quick Revision Checklist
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">✓ <strong>IPv4:</strong> 32 bits, dotted decimal, 4.3 billion addresses.</li>
          <li className="flex items-center gap-2">✓ <strong>IPv6:</strong> 128 bits, hexadecimal colon format, fixed 40-byte base header.</li>
          <li className="flex items-center gap-2">✓ <strong>Distance Vector:</strong> Bellman-Ford, shares full table with neighbors.</li>
          <li className="flex items-center gap-2">✓ <strong>Link State:</strong> Dijkstra SPF, floods link states to entire network.</li>
          <li className="flex items-center gap-2">✓ <strong>RIP:</strong> Hop count metric (max 15), 30-sec updates.</li>
          <li className="flex items-center gap-2">✓ <strong>OSPF:</strong> Bandwidth cost metric, hierarchical areas, event-triggered.</li>
        </ul>
      </section>
    </article>
  );
};

export default CnUnit3Content;
