import React from 'react';
import { 
  Network, 
  Layers, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Server,
  FileText
} from 'lucide-react';

const CnUnit1Content = () => {
  return (
    <article className="space-y-12">
      {/* Chapter Title & Header */}
      <div className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Unit 1 • 6 Periods
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          Introduction to Computer Networks & Network Models
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Computer Networks ka Parichay, OSI Reference Model ke 7 layers, TCP/IP Model ke 4 layers, Layer Diagrams aur OSI vs TCP/IP ka complete detailed comparison.
        </p>
      </div>

      {/* SECTION 1: Introduction to Computer Networks */}
      <section id="network-intro" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">1</span>
          Introduction to Computer Networks
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Jab do ya do se zyada independent computers ya computing devices aapas me data, hardware resources (jaise printer, storage) aur services ko share karne ke liye kisi transmission medium ke dwara jude hote hain, to use <strong>Computer Network</strong> kehte hain.
        </p>

        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-2">
          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider text-primary">Definition: Computer Network</h4>
          <p className="text-foreground text-sm leading-relaxed">
            A <strong>Computer Network</strong> is an interconnected collection of autonomous computers that can communicate with each other and share resources, software, and hardware over wired or wireless media.
          </p>
        </div>

        {/* Goals & Advantages */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-primary">Main Goals & Benefits</h4>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Resource Sharing:</strong> Expensive hardware (printers, scanners) aur storage ko sabhi users share kar sakte hain.</li>
              <li><strong>High Reliability:</strong> Agar network ka ek computer kharab ho jaye, to doosre computers backup se kaam jari rakh sakte hain.</li>
              <li><strong>Cost Efficiency:</strong> Centralized databases aur cloud services se hardware cost kafi kam ho jati hai.</li>
              <li><strong>Fast Communication:</strong> E-mail, video conferencing aur instant messaging dwara instant data transfer.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-amber-500">Network Scale Categories</h4>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>PAN (Personal Area Network):</strong> 10 meters range (Bluetooth, Hotspot).</li>
              <li><strong>LAN (Local Area Network):</strong> Single room, office ya college campus (Ethernet, Wi-Fi).</li>
              <li><strong>MAN (Metropolitan Area Network):</strong> Poore city me spread network (Cable TV network).</li>
              <li><strong>WAN (Wide Area Network):</strong> Global / Worldwide network (The Internet).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: Layered Architecture Concept */}
      <section id="layered-architecture" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">2</span>
          Need for Layered Network Architecture
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Network communication ek bohot complex process hai jisme hardware, electric signals, software drivers, IP routing aur encryption shamil hote hain. Is complexity ko manage karne ke liye network design ko <strong>Layers (Hierarchical Layers)</strong> me divide kiya jata hai. Har layer ek specific task perform karti hai aur apne adjacent layers ko services provide karti hai.
        </p>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-border bg-card text-center">
            <div className="font-bold text-sm text-primary mb-1">Modularity</div>
            <p className="text-xs text-muted-foreground">Kisi ek layer ke protocol me change karne par baaki layers affect nahi hoti hain.</p>
          </div>
          <div className="p-3 rounded-xl border border-border bg-card text-center">
            <div className="font-bold text-sm text-green-500 mb-1">Simplicity</div>
            <p className="text-xs text-muted-foreground">Complex communication chote-chote manageable steps me divide ho jata hai.</p>
          </div>
          <div className="p-3 rounded-xl border border-border bg-card text-center">
            <div className="font-bold text-sm text-purple-500 mb-1">Standardization</div>
            <p className="text-xs text-muted-foreground">Alag-alag hardware vendors (HP, Cisco, Dell) aapas me seamlessly communicate kar sakte hain.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: OSI Reference Model */}
      <section id="osi-model" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">3</span>
          OSI Reference Model (Open Systems Interconnection)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>OSI Model</strong> ko International Organization for Standardization (ISO) dwara 1984 me develop kiya gaya tha. Yeh ek theoretical 7-layer framework hai jo yeh explain karta hai ki computer systems network ke over aapas me data kaise exchange karte hain.
        </p>

        {/* 7 Layer Diagram Box */}
        <div className="p-5 rounded-xl border border-border bg-muted/20 space-y-4">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-center">
            OSI 7 Layers Architecture & Protocol Data Units (PDU)
          </h4>

          <div className="max-w-xl mx-auto space-y-2 text-xs font-mono">
            {/* Layer 7 */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500">
              <span className="font-bold">Layer 7: Application Layer</span>
              <span className="bg-background px-2 py-0.5 rounded text-[11px] text-foreground">Data (HTTP, DNS)</span>
            </div>
            {/* Layer 6 */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-500">
              <span className="font-bold">Layer 6: Presentation Layer</span>
              <span className="bg-background px-2 py-0.5 rounded text-[11px] text-foreground">Data (SSL, JPEG)</span>
            </div>
            {/* Layer 5 */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-500">
              <span className="font-bold">Layer 5: Session Layer</span>
              <span className="bg-background px-2 py-0.5 rounded text-[11px] text-foreground">Data (Sockets, RPC)</span>
            </div>
            {/* Layer 4 */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-500">
              <span className="font-bold">Layer 4: Transport Layer (Heart of OSI)</span>
              <span className="bg-background px-2 py-0.5 rounded text-[11px] text-foreground">Segment (TCP, UDP)</span>
            </div>
            {/* Layer 3 */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
              <span className="font-bold">Layer 3: Network Layer</span>
              <span className="bg-background px-2 py-0.5 rounded text-[11px] text-foreground">Packet (IP, ICMP)</span>
            </div>
            {/* Layer 2 */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
              <span className="font-bold">Layer 2: Data Link Layer</span>
              <span className="bg-background px-2 py-0.5 rounded text-[11px] text-foreground">Frame (MAC, Switch)</span>
            </div>
            {/* Layer 1 */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-500">
              <span className="font-bold">Layer 1: Physical Layer</span>
              <span className="bg-background px-2 py-0.5 rounded text-[11px] text-foreground">Bits (Cables, Hub)</span>
            </div>
          </div>

          <div className="text-center text-xs text-muted-foreground pt-1">
            <strong>Memory Trick:</strong> <em>"All People Seem To Need Data Processing"</em> (Top to Bottom) ya <em>"Please Do Not Throw Sausage Pizza Away"</em> (Bottom to Top).
          </div>
        </div>

        {/* Detailed 7 Layers Explanation */}
        <div className="space-y-4 pt-2">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              1. Physical Layer (Hardware & Signals)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Function:</strong> Raw bits (0s aur 1s) ko transmission medium ke through electrical, optical ya radio signals me convert karke physically transmit karta hai.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Transmission Mode:</strong> Simplex (one-way), Half-Duplex (two-way one-at-a-time), Full-Duplex (simultaneous two-way).</li>
              <li><strong>Physical Topologies:</strong> Bus, Star, Ring, Mesh.</li>
              <li><strong>Devices:</strong> Cables, Repeaters, Hubs, Connectors (RJ-45).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              2. Data Link Layer (DLL - Node-to-Node Delivery)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Function:</strong> Raw bit stream ko error-free <strong>Frames</strong> me organize karta hai aur directly connected adjacent devices (hop-to-hop) ke beech reliable transmission karta hai.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Framing:</strong> Data stream ko headers aur trailers laga kar frames me pack karna.</li>
              <li><strong>Physical Addressing (MAC Address):</strong> 48-bit hardware address (NIC card) add karta hai.</li>
              <li><strong>Flow Control & Error Control:</strong> Sender aur receiver ke speed mismatch ko handle karta hai (Stop-and-Wait, Sliding Window) aur CRC/Checksum se error detect karta hai.</li>
              <li><strong>Sub-layers:</strong> LLC (Logical Link Control) aur MAC (Media Access Control).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
              3. Network Layer (Host-to-Host Delivery & Routing)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Function:</strong> Source computer se Destination computer tak data <strong>Packets</strong> ki delivery ensure karta hai chahe woh alag-alag networks par kyon na hon.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Logical Addressing:</strong> IP Address (IPv4: 32-bit, IPv6: 128-bit) assign karta hai.</li>
              <li><strong>Routing:</strong> Multiple paths me se best optimal route select karta hai (using Dijkstra, RIP, OSPF).</li>
              <li><strong>Devices:</strong> Routers, Layer 3 Switches.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              4. Transport Layer (End-to-End / Process-to-Process Delivery)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Function:</strong> Source ke specific software process (jaise Chrome browser) se destination ke specific process (jaise Web Server) tak complete reliable data delivery karta hai. Ise <em>Heart of OSI</em> kaha jata hai.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Service-Point (Port) Addressing:</strong> Correct application ko data deliver karne ke liye Port Number (e.g. HTTP = 80) add karta hai.</li>
              <li><strong>Segmentation & Reassembly:</strong> Badi files ko chote <em>Segments</em> me break karta hai aur destination par sequence numbers ki madad se reassemble karta hai.</li>
              <li><strong>Connection Types:</strong> Connection-oriented (TCP - Reliable with 3-way handshake) aur Connectionless (UDP - Fast but unreliable).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              5. Session Layer (Dialog Management)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Function:</strong> Communicating computers ke beech connection (session) ko <em>Establish, Maintain aur Terminate</em> karta hai.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Dialog Control:</strong> Faisla karta hai ki kab kaun sa device transmit karega (half-duplex ya full-duplex).</li>
              <li><strong>Synchronization (Checkpoints):</strong> Badi file transfer me checkpoints insert karta hai taaki connection drop hone par transfer shuru se na karna pade.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
              6. Presentation Layer (Syntax & Semantics)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Function:</strong> Data ke format, translation, encryption aur compression ko handle karta hai taaki dono systems data ko understand kar sakein.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Translation:</strong> EBCDIC to ASCII character code translation.</li>
              <li><strong>Encryption & Decryption:</strong> Data privacy ke liye plaintext ko ciphertext me badalna (SSL/TLS).</li>
              <li><strong>Compression:</strong> Data bits ko compress karke size reduce karna (JPEG, MP3, ZIP).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              7. Application Layer (User Interface to Network)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Function:</strong> User ke software applications ko network access aur services provide karta hai. Yeh directly end user ke interface ke sath interact karta hai.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Protocols:</strong> HTTP/HTTPS (Web browsing), FTP (File transfer), SMTP (Email sending), DNS (Domain resolution), Telnet/SSH.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: TCP/IP Reference Model */}
      <section id="tcp-ip-model" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          TCP/IP Reference Model (DoD Model)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>TCP/IP Model</strong> ko US Department of Defense (DoD) ne ARPANET ke liye develop kiya tha. Yeh practically use hone wala architecture hai jise poora modern Internet use karta hai. Isme <strong>4 Layers</strong> hoti hain:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-rose-500">1. Application Layer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              OSI ke top three layers (Application, Presentation, Session) ke functions ko combine karta hai. Sabhi high-level protocols jaise HTTP, FTP, SMTP, DNS, SNMP yahan execute hote hain.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-blue-500">2. Transport Layer (Host-to-Host)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              End-to-end communication provide karta hai. Is layer ke do prominent protocols hain:
              <br />• <strong>TCP (Transmission Control Protocol):</strong> Reliable, connection-oriented, flow & error control supported.
              <br />• <strong>UDP (User Datagram Protocol):</strong> Connectionless, unreliable, fast lightweight transfer (live video, DNS).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-cyan-500">3. Internet Layer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              OSI ke Network Layer ke equivalent hai. Main protocol <strong>IP (Internet Protocol)</strong> hai jo packets ko logically address karta hai aur source se destination tak route karta hai. Supporting protocols: <strong>ICMP</strong> (ping/error messages) aur <strong>ARP</strong> (IP to MAC mapping).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-amber-500">4. Network Access Layer (Host-to-Network)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              OSI ke Data Link aur Physical Layers ko combine karta hai. Physical cables, optical fibers, network interface cards (NIC), hardware frames aur electrical signaling ko handle karta hai (Ethernet, Wi-Fi 802.11).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: OSI vs TCP/IP Comparison */}
      <section id="comparison-table" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">5</span>
          Detailed Comparison: OSI vs TCP/IP Model (Exam Favorite)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2.5 border border-border">Feature / Basis</th>
                <th className="p-2.5 border border-border">OSI Reference Model</th>
                <th className="p-2.5 border border-border">TCP/IP Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Number of Layers</td>
                <td className="p-2.5 text-primary font-bold border border-border">7 Layers</td>
                <td className="p-2.5 text-green-500 font-bold border border-border">4 Layers (sometimes 5 in modern textbooks)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Development Approach</td>
                <td className="p-2.5 text-muted-foreground border border-border">Theoretical framework (Protocols develop hone se pehle model bana).</td>
                <td className="p-2.5 text-muted-foreground border border-border">Practical implementation (Protocols pehle bane, model baad me bana).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Real-world Usage</td>
                <td className="p-2.5 text-muted-foreground border border-border">Pure reference model (actual internet ispar run nahi karta).</td>
                <td className="p-2.5 text-muted-foreground border border-border">Industry standard (har real-world network ispar operate karta hai).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Separation of Concerns</td>
                <td className="p-2.5 text-muted-foreground border border-border">Services, Interfaces aur Protocols ke beech strict clear boundary hai.</td>
                <td className="p-2.5 text-muted-foreground border border-border">Services, Interfaces aur Protocols tightly coupled hain.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Network Layer Connection</td>
                <td className="p-2.5 text-muted-foreground border border-border">Connection-oriented aur Connectionless dono support karta hai.</td>
                <td className="p-2.5 text-muted-foreground border border-border">Sirf Connectionless service (IP) provide karta hai.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Session & Presentation</td>
                <td className="p-2.5 text-muted-foreground border border-border">Alag-alag dedicated layers hain.</td>
                <td className="p-2.5 text-muted-foreground border border-border">Application Layer ke andar hi merged hain.</td>
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
              <li>OSI model kis standard body dwara develop kiya gaya? (ISO, 1984)</li>
              <li>Network layer ka PDU (Protocol Data Unit) kya hota hai? (Packet)</li>
              <li>TCP/IP me kitni layers hoti hain? (4 layers)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">2-3 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Data Link Layer ke main functions kya hain?</li>
              <li>Transport Layer ko Heart of OSI kyon kaha jata hai?</li>
              <li>Connection-oriented aur Connectionless service me kya antar hai?</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">5 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>OSI Reference Model ke sabhi 7 layers ko neat labeled diagram ke sath vistar se samjhaiye.</li>
              <li>OSI Model aur TCP/IP Model ke beech table banakar antar spasht kijiye.</li>
              <li>TCP/IP model ke sabhi 4 layers aur unke protocols ko explain kijiye.</li>
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
          <li className="flex items-center gap-2">✓ <strong>Physical Layer:</strong> Raw bits transmission, cables & hardware signals.</li>
          <li className="flex items-center gap-2">✓ <strong>Data Link Layer:</strong> Frames, MAC address, hop-to-hop error free delivery.</li>
          <li className="flex items-center gap-2">✓ <strong>Network Layer:</strong> Packets, IP addressing, best path routing.</li>
          <li className="flex items-center gap-2">✓ <strong>Transport Layer:</strong> Segments, port numbers, end-to-end process delivery.</li>
          <li className="flex items-center gap-2">✓ <strong>Session / Presentation:</strong> Dialog control, encryption, compression.</li>
          <li className="flex items-center gap-2">✓ <strong>TCP/IP:</strong> 4 Layers (Application, Transport, Internet, Network Access).</li>
        </ul>
      </section>
    </article>
  );
};

export default CnUnit1Content;
