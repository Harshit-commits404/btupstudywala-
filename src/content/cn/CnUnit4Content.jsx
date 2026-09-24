import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Globe, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle, 
  Server, 
  Layers, 
  FileText
} from 'lucide-react';

const CnUnit4Content = () => {
  return (
    <article className="space-y-12">
      {/* Chapter Title & Header */}
      <div className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Unit 4 • 8 Periods
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          Transport Layer & Application Layer Protocols
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Transport Layer Design Issues, TCP (3-Way Handshake) vs UDP, Socket Addressing, SMTP (Email Architecture) aur DNS (Domain Name Resolution) ka detailed exam-oriented study notes.
        </p>
      </div>

      {/* SECTION 1: Transport Layer Design Issues */}
      <section id="transport-design" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">1</span>
          Transport Layer Design Issues
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Network Layer sirf ek host machine se doosri host machine tak packets deliver karta hai. Lekin host ke andar hazaron programs (processes) chal rahe hote hain. Source computer ke specific process se destination ke specific process tak reliable communication karwana <strong>Transport Layer (Process-to-Process Delivery)</strong> ki zimmedari hai.
        </p>

        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-2">
          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider text-primary">Concept of Socket Address</h4>
          <p className="text-foreground text-sm leading-relaxed">
            Kisi specific process ko unique identify karne ke liye IP Address ke sath <strong>Port Number</strong> ko joda jata hai:
          </p>
          <div className="study-formula-block mt-1 font-mono text-sm">
            Socket Address = IP Address + Port Number (e.g. 192.168.1.15:80)
          </div>
        </div>

        {/* Major Design Issues */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-primary">Multiplexing & Demultiplexing</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Multiplexing (Sender Side):</strong> Alag-alag applications ke data me port number add karke network layer ke single IP channel par send karna. <br />
              <strong>Demultiplexing (Receiver Side):</strong> Network layer se aane wale packets ke port number ko check karke unhe unke correct target application (browser, mail client) tak deliver karna.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-green-500">Reliability & Flow Control</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Sequence Numbers & ACKs:</strong> Har byte ko sequence number milta hai aur receiver acknowledgment bhejta hai. <br />
              <strong>Sliding Window:</strong> Sender window size receiver ke buffer capacity ke hisab se dynamically adjust hoti hai taaki buffer overflow na ho.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: TCP (Transmission Control Protocol) */}
      <section id="tcp-protocol" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">2</span>
          TCP: Transmission Control Protocol & 3-Way Handshake
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>TCP</strong> ek connection-oriented, highly reliable, full-duplex protocol hai. Data send karne se pehle sender aur receiver ke beech connection establish hota hai.
        </p>

        {/* 3-Way Handshake Diagram */}
        <div className="p-5 rounded-xl border border-border bg-muted/20 space-y-4">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-center">
            TCP 3-Way Handshake (Connection Establishment)
          </h4>

          <div className="max-w-md mx-auto space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between p-2.5 rounded bg-card border border-border">
              <span className="font-bold text-primary">Client</span>
              <span className="text-muted-foreground">─────── SYN (seq = x) ───────►</span>
              <span className="font-bold text-foreground">Server</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-card border border-border">
              <span className="font-bold text-primary">Client</span>
              <span className="text-muted-foreground">◄──── SYN + ACK (seq = y, ack = x+1) ────</span>
              <span className="font-bold text-foreground">Server</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-card border border-border">
              <span className="font-bold text-primary">Client</span>
              <span className="text-muted-foreground">─────── ACK (ack = y+1) ───────►</span>
              <span className="font-bold text-foreground">Server</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Handshake poora hote hi connection <strong>ESTABLISHED</strong> state me chala jata hai aur reliable data transfer shuru hota hai.
          </p>
        </div>

        {/* TCP Header Summary */}
        <div className="p-4 rounded-xl border border-border bg-card space-y-2">
          <h4 className="font-bold text-foreground text-sm">TCP Segment Header (20 to 60 Bytes)</h4>
          <p className="text-xs text-muted-foreground">
            Default base size <strong>20 Bytes</strong> hota hai. Isme Source Port (16b), Destination Port (16b), Sequence Number (32b), Ack Number (32b), Control Flags (URG, ACK, PSH, RST, SYN, FIN), Window Size (16b for flow control), aur Checksum shamil hote hain.
          </p>
        </div>
      </section>

      {/* SECTION 3: UDP (User Datagram Protocol) */}
      <section id="udp-protocol" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">3</span>
          UDP: User Datagram Protocol
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>UDP</strong> ek connectionless, unreliable ("best-effort delivery") transport protocol hai. Isme na to koi handshake hota hai, na acknowledgment hoti hai, aur na hi lost packets ka retransmission hota hai.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-green-500">Kyon Use Karte Hain UDP?</h4>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Zero Connection Delay:</strong> Bina kisi 3-way handshake delay ke instant data send hota hai.</li>
              <li><strong>Ultra-Low Overhead:</strong> Header sirf <strong>8 Bytes</strong> ka hota hai (jabki TCP 20 bytes ka hota hai).</li>
              <li><strong>Real-time Performance:</strong> Live streaming, online multiplayer gaming aur VoIP calls me thoda packet drop afford ho sakta hai lekin delay bilkul nahi.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-primary">UDP Header Format (Only 8 Bytes)</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-center pt-2">
              <div className="p-2 rounded bg-muted/40 border border-border">Source Port (16 bits)</div>
              <div className="p-2 rounded bg-muted/40 border border-border">Destination Port (16 bits)</div>
              <div className="p-2 rounded bg-muted/40 border border-border">Total Length (16 bits)</div>
              <div className="p-2 rounded bg-muted/40 border border-border">Checksum (16 bits)</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TCP vs UDP Comparison Table */}
      <section id="tcp-vs-udp" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          Detailed Comparison: TCP vs UDP (Exam Favorite)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2.5 border border-border">Basis / Parameter</th>
                <th className="p-2.5 border border-border">TCP (Transmission Control Protocol)</th>
                <th className="p-2.5 border border-border">UDP (User Datagram Protocol)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Connection Type</td>
                <td className="p-2.5 text-primary font-bold border border-border">Connection-Oriented (Requires 3-way handshake)</td>
                <td className="p-2.5 text-green-500 font-bold border border-border">Connectionless (Direct send without handshake)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Reliability</td>
                <td className="p-2.5 text-green-500 font-bold border border-border">Guaranteed Delivery (Retransmission on packet loss)</td>
                <td className="p-2.5 text-rose-500 font-bold border border-border">Unreliable (Best-effort; dropped packets are lost)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Header Size</td>
                <td className="p-2.5 text-muted-foreground border border-border">20 to 60 Bytes</td>
                <td className="p-2.5 text-green-500 font-bold border border-border">Fixed 8 Bytes only</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Speed & Latency</td>
                <td className="p-2.5 text-muted-foreground border border-border">Slower (Due to ACKs, flow & congestion overhead)</td>
                <td className="p-2.5 text-green-500 font-bold border border-border">Extremely Fast and lightweight</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Data Transfer Type</td>
                <td className="p-2.5 text-muted-foreground border border-border">Byte-Stream</td>
                <td className="p-2.5 text-muted-foreground border border-border">Datagram / Message-oriented</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Flow & Error Control</td>
                <td className="p-2.5 text-muted-foreground border border-border">Yes (Sliding Window, Checksum, Sequence IDs)</td>
                <td className="p-2.5 text-muted-foreground border border-border">No flow control; basic optional Checksum only</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-foreground border border-border">Real-world Protocols</td>
                <td className="p-2.5 text-muted-foreground border border-border">HTTP, HTTPS, FTP, SMTP, SSH</td>
                <td className="p-2.5 text-muted-foreground border border-border">DNS, DHCP, VoIP, Video Streaming, Online Games</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: Application Layer Protocols: SMTP & DNS */}
      <section id="application-protocols" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">5</span>
          Application Layer Protocols: SMTP & DNS
        </h2>

        {/* SMTP */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-3">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground text-base">1. SMTP (Simple Mail Transfer Protocol)</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>SMTP</strong> Internet par electronic mail (e-mail) send karne ka standard application protocol hai. Yeh ek <strong>Push Protocol</strong> hai jiska use mail client se mail server tak, aur ek mail server se doosre mail server tak email transfer karne me hota hai.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded bg-muted/40 border border-border">
              <strong>Transport Protocol:</strong> TCP Port <strong>25</strong> (Plaintext) ya Port <strong>587 / 465</strong> (Encrypted SSL/TLS).
            </div>
            <div className="p-2.5 rounded bg-muted/40 border border-border">
              <strong>Key Commands:</strong> <code className="text-primary font-mono">HELO, MAIL FROM, RCPT TO, DATA, QUIT</code>.
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            <em>Important Note:</em> Email receive karne ke liye SMTP use nahi hota; uske liye <strong>POP3 (Port 110)</strong> ya <strong>IMAP (Port 143)</strong> pull protocols use hote hain.
          </p>
        </div>

        {/* DNS */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-3">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-green-500" />
            <h3 className="font-bold text-foreground text-base">2. DNS (Domain Name System)</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>DNS</strong> ko "Internet ki Phonebook" kaha jata hai. Humans ke liye numeric IP addresses (jaise <code className="text-foreground">142.250.190.46</code>) yaad rakhna mushkil hota hai, jabki domain names (jaise <code className="text-primary font-bold">google.com</code>) yaad rakhna aasan hota hai. DNS domain names ko unke corresponding IP addresses me translate karta hai.
          </p>
          
          <div className="p-3 rounded-lg bg-muted/40 border border-border text-xs space-y-2">
            <strong className="text-foreground">DNS Hierarchical Namespace:</strong>
            <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
              <li><strong>Root Domain (.):</strong> Hierarchy ke top par 13 logical root server clusters hote hain.</li>
              <li><strong>Top-Level Domain (TLD):</strong> Generic TLDs (.com, .org, .edu) aur country code TLDs (.in, .uk).</li>
              <li><strong>Second-Level Domain:</strong> Registered company names (e.g. <code className="text-foreground">bteup</code> in bteup.ac.in).</li>
            </ul>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <strong>Port & Transport Protocol:</strong> DNS queries ke liye <strong>UDP Port 53</strong> use karta hai (fast response). Badi zone transfers ke liye <strong>TCP Port 53</strong> use hota hai.
          </div>
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
              <li>Socket address ka formula kya hai? (IP + Port)</li>
              <li>UDP header ka size kitna hota hai? (8 Bytes)</li>
              <li>DNS kaun se default port number par operate karta hai? (Port 53)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">2-3 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>TCP me 3-Way Handshake mechanism ko diagram ke sath draw kijiye.</li>
              <li>SMTP kaisa protocol hai aur yeh POP3 se kaise alag hai?</li>
              <li>DNS domain name resolution process kaise kaam karta hai?</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">5 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>TCP aur UDP ke beech kam se kam 6 points par detailed comparison table banaiye.</li>
              <li>Transport Layer ke design issues: Addressing, Multiplexing, Flow Control aur Error Control ko samjhaiye.</li>
              <li>Application Layer ke do main protocols (SMTP aur DNS) ka architectural overview dijiye.</li>
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
          <li className="flex items-center gap-2">✓ <strong>Transport Layer:</strong> Process-to-process delivery using Port numbers.</li>
          <li className="flex items-center gap-2">✓ <strong>TCP:</strong> Connection-oriented, 3-way handshake, reliable, heavy header (20B).</li>
          <li className="flex items-center gap-2">✓ <strong>UDP:</strong> Connectionless, no handshake, best-effort, lightweight header (8B).</li>
          <li className="flex items-center gap-2">✓ <strong>SMTP:</strong> Push protocol for sending emails on Port 25.</li>
          <li className="flex items-center gap-2">✓ <strong>DNS:</strong> Resolves domain names to IP addresses on UDP Port 53.</li>
        </ul>
      </section>
    </article>
  );
};

export default CnUnit4Content;
