import React from 'react';
import { 
  Cpu, 
  Layers, 
  Wifi, 
  Server, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Share2,
  Activity,
  FileText
} from 'lucide-react';

const CnUnit5Content = () => {
  return (
    <article className="space-y-12">
      {/* Chapter Title & Header */}
      <div className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Unit 5 • 8 Periods
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          Network Devices & Network Management System (SNMP)
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Network Devices ki functioning (NIC, Hub, Bridge, Switch, Router, WiFi Devices), Collision vs Broadcast Domains, NMS (FCAPS Model) aur SNMP Protocol Architecture ka complete study notes.
        </p>
      </div>

      {/* SECTION 1: Network Devices Overview & Functioning */}
      <section id="network-devices" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">1</span>
          Functioning of Network Devices
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Computer networks me data ko transmit, amplify, filter aur route karne ke liye specialized hardware devices use hote hain. Har device OSI model ke ek specific layer par operate karta hai:
        </p>

        <div className="space-y-4">
          {/* NIC */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              1. NIC (Network Interface Card / LAN Adapter)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Layer:</strong> Physical Layer aur Data Link Layer. <br />
              <strong>Function:</strong> Computer motherboard par laga hardware component jo computer ko physical transmission medium (Ethernet cable ya Wi-Fi signals) se connect karta hai. Har NIC ke paas manufacturer dwara hardcoded globally unique <strong>48-bit MAC Address</strong> (Physical address) hota hai.
            </p>
          </div>

          {/* Hub */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              2. Hub (Multiport Repeater)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Layer:</strong> Physical Layer (Layer 1). <br />
              <strong>Function:</strong> Ek dumb (non-intelligent) device hai. Kisi ek port par aane wale electrical signal ko amplify karke <em>baaki sabhi ports par broadcast</em> kar deta hai. Isko MAC ya IP address ki koi samajh nahi hoti.
            </p>
            <div className="p-2 rounded bg-muted/40 text-xs text-muted-foreground">
              <strong>Drawback:</strong> Sabhi connected devices ek hi single Collision Domain aur Broadcast Domain share karte hain, jisse traffic heavy hone par collisions badh jate hain.
            </div>
          </div>

          {/* Bridge */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              3. Bridge
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Layer:</strong> Data Link Layer (Layer 2). <br />
              <strong>Function:</strong> Do similar LAN segments ko jodne ke kaam aata hai. Yeh incoming frames ke <strong>Destination MAC Address</strong> ko padhta hai aur MAC table ke hisab se frame ko filter ya forward karta hai.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Advantage:</strong> Yeh network ko 2 separate Collision Domains me divide kar deta hai, jisse network traffic kam hota hai.
            </p>
          </div>

          {/* Switch */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              4. Switch (Multi-port Bridge)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Layer:</strong> Data Link Layer (Layer 2). <br />
              <strong>Function:</strong> Ek highly intelligent device jo hardware chip (ASIC) ki madad se dynamic <strong>MAC Address Table (CAM Table)</strong> maintain karta hai. Jab frame aata hai, to switch use sabhi ko broadcast nahi karta, balki sirf target destination port par direct <em>Unicast</em> karta hai.
            </p>
            <div className="p-2 rounded bg-green-500/10 border border-green-500/20 text-xs text-green-500">
              <strong>Key Feature:</strong> Switch ka har port apna ek independent <strong>Dedicated Collision Domain</strong> hota hai aur Full-Duplex communication support karta hai (Zero collisions!).
            </div>
          </div>

          {/* Router */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              5. Router (Internetworking Device)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Layer:</strong> Network Layer (Layer 3). <br />
              <strong>Function:</strong> Do ya do se zyada alag-alag networks (jaise local LAN aur global Internet WAN) ko aapas me connect karta hai. Yeh <strong>Logical IP Addresses</strong> par operate karta hai aur Routing Table ke hisab se packets ke liye shortest best path select karta hai.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Major Benefit:</strong> Router Collision Domains aur Broadcast Domains <em>dono ko break karta hai</em> (Broadcast packets ko block karta hai).
            </p>
          </div>

          {/* WiFi Devices */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
              6. WiFi Devices (WAP, Wireless Routers, Extenders)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>WAP (Wireless Access Point):</strong> Radio frequency signals (2.4 GHz / 5 GHz) ke through wireless laptops aur smartphones ko wired Ethernet network se connect karta hai (IEEE 802.11 to 802.3 bridge). <br />
              <strong>Wi-Fi Router:</strong> Modern home router ek single box me Router + Switch + WAP + DHCP Server + NAT Firewall combine karta hai.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Network Devices Comparison Table */}
      <section id="devices-comparison" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">2</span>
          Comparative Summary of Network Devices (Exam Favorite)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Device</th>
                <th className="p-2 border border-border">OSI Layer</th>
                <th className="p-2 border border-border">Addressing Used</th>
                <th className="p-2 border border-border">Collision Domain</th>
                <th className="p-2 border border-border">Broadcast Domain</th>
                <th className="p-2 border border-border">Intelligence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Hub</td>
                <td className="p-2 text-muted-foreground border border-border">Layer 1 (Physical)</td>
                <td className="p-2 text-muted-foreground border border-border">None (Electrical bits)</td>
                <td className="p-2 text-rose-500 font-semibold border border-border">Single (All ports)</td>
                <td className="p-2 text-muted-foreground border border-border">Single</td>
                <td className="p-2 text-rose-500 border border-border">Dumb device</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Bridge</td>
                <td className="p-2 text-muted-foreground border border-border">Layer 2 (Data Link)</td>
                <td className="p-2 text-muted-foreground border border-border">MAC Address</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Divided into 2</td>
                <td className="p-2 text-muted-foreground border border-border">Single</td>
                <td className="p-2 text-green-500 border border-border">Software-based smart</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Switch</td>
                <td className="p-2 text-muted-foreground border border-border">Layer 2 (Data Link)</td>
                <td className="p-2 text-muted-foreground border border-border">MAC Address</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Each port is separate</td>
                <td className="p-2 text-muted-foreground border border-border">Single (VLAN separates)</td>
                <td className="p-2 text-green-500 border border-border">Hardware ASIC smart</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Router</td>
                <td className="p-2 text-primary font-bold border border-border">Layer 3 (Network)</td>
                <td className="p-2 text-foreground font-mono border border-border">IP Address</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Each port is separate</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Each port is separate (Breaks broadcast)</td>
                <td className="p-2 text-primary font-bold border border-border">Highly Intelligent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: Network Management System (NMS) */}
      <section id="nms-system" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">3</span>
          Network Management System (NMS)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>NMS (Network Management System)</strong> hardware aur software tools ka ek comprehensive suite hai jiska use network administrators enterprise network ke sabhi components (switches, routers, servers, firewalls) ko monitor, configure, diagnose aur optimize karne ke liye karte hain.
        </p>

        {/* FCAPS Model */}
        <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 space-y-3">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">ISO FCAPS Management Model (Exam Favorite)</h4>
          <div className="grid md:grid-cols-5 gap-2 text-xs">
            <div className="p-2.5 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">F - Fault</strong>
              <p className="text-muted-foreground text-[11px]">Network problems aur cable cuts ko detect, isolate aur fix karna.</p>
            </div>
            <div className="p-2.5 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">C - Configuration</strong>
              <p className="text-muted-foreground text-[11px]">Device settings, IP routing tables aur firmware updates manage karna.</p>
            </div>
            <div className="p-2.5 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">A - Accounting</strong>
              <p className="text-muted-foreground text-[11px]">Bandwidth utilization aur user quotas ka hisab rakhna.</p>
            </div>
            <div className="p-2.5 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">P - Performance</strong>
              <p className="text-muted-foreground text-[11px]">Throughput, packet loss, latency aur CPU load analyze karna.</p>
            </div>
            <div className="p-2.5 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">S - Security</strong>
              <p className="text-muted-foreground text-[11px]">Firewalls, unauthorized access alerts aur encryption manage karna.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SNMP Protocol Architecture */}
      <section id="snmp-protocol" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          SNMP: Simple Network Management Protocol Architecture
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>SNMP</strong> Application Layer protocol hai jo IP network par managed devices ke beech network management information exchange karne ke liye use hota hai. Yeh <strong>UDP Port 161</strong> (Requests) aur <strong>UDP Port 162</strong> (Traps) par operate karta hai.
        </p>

        {/* SNMP Architecture Diagram Box */}
        <div className="p-5 rounded-xl border border-border bg-muted/20 space-y-4">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-center">
            SNMP Architecture Components
          </h4>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-mono">
            <div className="border-2 border-primary/40 bg-card p-3 rounded-lg text-center shadow-sm">
              <div className="font-bold text-primary mb-1">NMS (Manager)</div>
              <div className="text-[11px] text-muted-foreground">Admin Console System</div>
            </div>

            <div className="flex flex-col items-center gap-1 text-[11px] text-muted-foreground">
              <span>── Get / Set (UDP 161) ──►</span>
              <span>◄── Trap Alarms (UDP 162) ──</span>
            </div>

            <div className="border border-border bg-card p-3 rounded-lg text-center shadow-sm">
              <div className="font-bold text-foreground mb-1">Managed Device (Router / Switch)</div>
              <div className="bg-muted p-1.5 rounded text-[11px] space-y-1">
                <div className="text-green-500 font-bold">SNMP Agent (Software)</div>
                <div className="text-amber-500">MIB Database (Variables)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Components Explained */}
        <div className="grid md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-primary">1. SNMP Manager (NMS)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Central computer console jahan se administrator commands send karta hai aur alerts receive karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-green-500">2. SNMP Agent</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Managed device (router, server) ke andar run hone wala ek background software module jo device ke health status aur metrics ko collect karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-amber-500">3. MIB (Management Information Base)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Hierarchical tree-structured database jisme managed objects (parameters jaise interface status, bytes sent, CPU temperature) store hote hain.
            </p>
          </div>
        </div>

        {/* Basic SNMP Operations */}
        <div className="p-4 rounded-xl border border-border bg-card space-y-2">
          <h4 className="font-bold text-foreground text-sm">Key SNMP Operations / Messages</h4>
          <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
            <li><strong>GetRequest:</strong> Manager agent se kisi variable ki specific value mangwata hai.</li>
            <li><strong>GetNextRequest:</strong> MIB tree me agle variable ki value retrieve karne ke liye table scan karta hai.</li>
            <li><strong>SetRequest:</strong> Manager device ki kisi configuration setting ko remote change karta hai.</li>
            <li><strong>Trap (Very Important):</strong> Agent dwara unsolicited emergency message jo kisi critical event (jaise link down, overheating, power failure) hone par turant manager ko bina pooche bheja jata hai (UDP 162).</li>
          </ul>
        </div>
      </section>

      {/* SECTION 5: Exam Focus & Important Questions */}
      <section className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-primary" />
          Exam Focus & Important Questions (BTEUP)
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">1 Mark Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Hub aur Switch me se kaun sa device intelligent hota hai? (Switch)</li>
              <li>Router kis OSI layer par kaam karta hai? (Layer 3 - Network Layer)</li>
              <li>SNMP Trap kis port par bheja jata hai? (UDP Port 162)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">2-3 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Collision Domain aur Broadcast Domain me kya difference hai?</li>
              <li>NMS me FCAPS model ka kya matlab hai?</li>
              <li>SNMP me MIB kya hota hai aur iska kya role hai?</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">5 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Hub, Switch aur Router ke functioning aur architecture me antar tafseel se samjhaiye.</li>
              <li>SNMP protocol ki working aur architecture ka diagram banakar samjhaiye.</li>
              <li>Network Interface Card (NIC) aur WiFi devices ke functioning ko explain kijiye.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6: Quick Revision Points */}
      <section className="p-5 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Quick Revision Checklist
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">✓ <strong>Hub:</strong> Layer 1, dumb, single collision domain, broadcasts everything.</li>
          <li className="flex items-center gap-2">✓ <strong>Switch:</strong> Layer 2, intelligent, CAM MAC table, per-port dedicated collision domain.</li>
          <li className="flex items-center gap-2">✓ <strong>Router:</strong> Layer 3, IP based routing, breaks both collision & broadcast domains.</li>
          <li className="flex items-center gap-2">✓ <strong>FCAPS:</strong> Fault, Configuration, Accounting, Performance, Security management.</li>
          <li className="flex items-center gap-2">✓ <strong>SNMP:</strong> Manager, Agent, and MIB database; Trap sends unsolicited alarms (Port 162).</li>
        </ul>
      </section>
    </article>
  );
};

export default CnUnit5Content;
