import React from 'react';
import { 
  Radio, 
  Wifi, 
  Share2, 
  Layers, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Cpu, 
  Zap, 
  Cable,
  Network,
  Bluetooth
} from 'lucide-react';

const CnUnit2Content = () => {
  return (
    <article className="space-y-12">
      {/* Chapter Title & Header */}
      <div className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Unit 2 • 10 Periods
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          Data Communication & Methodologies
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Transmission Media (Wired & Wireless), Network Topologies, Data Link Layer Design Issues & Protocols (Ethernet, WLAN, Bluetooth), aur Switching Techniques (Circuit, Packet, Message) ka complete study notes.
        </p>
      </div>

      {/* SECTION 1: Transmission Media Principles & Issues */}
      <section id="transmission-media" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">1</span>
          Transmission Media: Principles & Transmission Impairments
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>Transmission Media</strong> woh physical pathway (communication channel) hai jiske through data sender se receiver tak electromagnetic ya optical signals ke roop me travel karta hai.
        </p>

        {/* Transmission Impairments */}
        <div className="p-4 rounded-xl border border-border bg-card space-y-3">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-primary">Transmission Impairments (Issues in Media)</h4>
          <div className="grid md:grid-cols-3 gap-3 text-xs text-muted-foreground">
            <div className="p-3 rounded-lg bg-muted/30 border border-border">
              <strong className="text-foreground text-sm block mb-1">1. Attenuation:</strong>
              Signal jab distance travel karta hai to medium ke resistance ke karan uski strength kamjor (decay) ho jati hai. Isko boost karne ke liye <em>Amplifiers</em> ya <em>Repeaters</em> lagane padte hain.
            </div>
            <div className="p-3 rounded-lg bg-muted/30 border border-border">
              <strong className="text-foreground text-sm block mb-1">2. Distortion:</strong>
              Signal jab alag-alag frequencies se milkar bana hota hai, to har frequency component alag speed se travel karta hai, jisse receiver par signal ka original shape bigad jata hai.
            </div>
            <div className="p-3 rounded-lg bg-muted/30 border border-border">
              <strong className="text-foreground text-sm block mb-1">3. Noise:</strong>
              External unwanted electrical signals jo cable ke sath mix ho jate hain (jaise Thermal noise, Induced noise, Cross-talk).
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Wired (Guided) Transmission Media */}
      <section id="wired-media" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">2</span>
          Wired (Guided) Media: Coaxial, UTP, STP & Fiber Optic
        </h2>

        <div className="space-y-4">
          {/* Coaxial Cable */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-primary">A. Coaxial Cable</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Isme ek solid copper central conductor hota hai, jo insulating plastic layer, metallic braided mesh (shield jo EMI noise block karta hai) aur outer protective plastic jacket se covered hota hai.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="p-2 rounded bg-muted/40"><strong>Baseband Coaxial (50 Ohm):</strong> Digital signaling ke liye use hota hai (e.g. 10Base2, 10Base5 Ethernet).</div>
              <div className="p-2 rounded bg-muted/40"><strong>Broadband Coaxial (75 Ohm):</strong> Analog signals aur multiple channels ke liye (e.g. Cable TV, Cable Internet).</div>
            </div>
          </div>

          {/* UTP vs STP */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border bg-card space-y-2">
              <h4 className="font-bold text-foreground text-sm text-green-500">B. UTP (Unshielded Twisted Pair)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                4 pairs of color-coded copper wires jo aapas me spiral twist ki hoti hain. Twisting ke karan cross-talk aur electromagnetic interference (EMI) cancel out ho jata hai. Isme koi extra metal foil shield nahi hoti.
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
                <li>Connector: <strong>RJ-45 Connector</strong></li>
                <li>Categories: Cat5e (100 Mbps - 1 Gbps), Cat6 (up to 10 Gbps)</li>
                <li>Advantage: Cheap, flexible, very easy to install in LANs.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card space-y-2">
              <h4 className="font-bold text-foreground text-sm text-blue-500">C. STP (Shielded Twisted Pair)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Twisted wire pairs ke charon taraf ek extra metal foil ya braided shield cover hota hai.
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
                <li>Advantage: Industrial environments aur noisy areas me EMI aur cross-talk se behtareen protection deta hai.</li>
                <li>Disadvantage: UTP se mehnga, mota aur install karne me hard hota hai. Proper grounding zaroori hai.</li>
              </ul>
            </div>
          </div>

          {/* Fiber Optic Cables */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-purple-500">D. Optical Fiber Cable (OFC)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Data electrical pulses ke roop me nahi, balki <strong>Light Pulses (Photons)</strong> ke roop me high-grade silica glass ya plastic fiber ke through travel karta hai.
            </p>
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-foreground space-y-1">
              <strong>Core Working Principle:</strong> <em>Total Internal Reflection (TIR)</em>. Core ka Refractive Index (<code className="font-mono">n1</code>) hamesha outer Cladding layer (<code className="font-mono">n2</code>) se zyada hota hai (<code className="font-mono">n1 &gt; n2</code>), aur angle of incidence critical angle se bada hota hai.
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground pt-1">
              <div className="p-2 rounded bg-muted/40"><strong>Single-Mode Fiber (SMF):</strong> Core diameter bohot patla (8-10 µm) hota hai. Laser light use hoti hai. Long distance (multi-kilometer) telecom backbone ke liye best.</div>
              <div className="p-2 rounded bg-muted/40"><strong>Multi-Mode Fiber (MMF):</strong> Bada core (50-62.5 µm). LED light use hoti hai. Multiple light rays bounce karti hain. Campus LAN ke liye suitable.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Wireless (Unguided) Media */}
      <section id="wireless-media" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">3</span>
          Wireless (Unguided) Media: HF, VHF, UHF, Microwave & Ku Band
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Unguided media electromagnetic waves ko air, atmosphere ya space ke through bina physical wire ke transmit karta hai:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Band / Wave</th>
                <th className="p-2 border border-border">Frequency Range</th>
                <th className="p-2 border border-border">Propagation Mechanism</th>
                <th className="p-2 border border-border">Key Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-primary border border-border">HF (High Frequency)</td>
                <td className="p-2 text-foreground font-mono border border-border">3 MHz – 30 MHz</td>
                <td className="p-2 text-muted-foreground border border-border">Sky-wave propagation (Ionosphere se reflect hokar wapas aati hai).</td>
                <td className="p-2 text-muted-foreground border border-border">Shortwave international radio broadcasting, amateur radio, ship-to-shore.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-green-500 border border-border">VHF (Very High Frequency)</td>
                <td className="p-2 text-foreground font-mono border border-border">30 MHz – 300 MHz</td>
                <td className="p-2 text-muted-foreground border border-border">Line-of-Sight (LOS) & Ground wave. Ionosphere penetrate kar jati hai.</td>
                <td className="p-2 text-muted-foreground border border-border">FM Radio broadcasting (88-108 MHz), VHF Television channels, aviation radar.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-purple-500 border border-border">UHF (Ultra High Frequency)</td>
                <td className="p-2 text-foreground font-mono border border-border">300 MHz – 3 GHz</td>
                <td className="p-2 text-muted-foreground border border-border">Strict Line-of-Sight. Small portable antenna se receive ho sakti hai.</td>
                <td className="p-2 text-muted-foreground border border-border">Cellular mobile networks (2G/3G/4G), Wi-Fi (2.4 GHz), Bluetooth, GPS.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-amber-500 border border-border">Terrestrial Microwave</td>
                <td className="p-2 text-foreground font-mono border border-border">1 GHz – 300 GHz</td>
                <td className="p-2 text-muted-foreground border border-border">Directional narrow beams using parabolic dish antennas. Line of sight.</td>
                <td className="p-2 text-muted-foreground border border-border">Telephone long-haul links, inter-building corporate LAN bridges (Towers needed every 30-50 km due to earth curvature).</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-rose-500 border border-border">Ku Band (Satellite)</td>
                <td className="p-2 text-foreground font-mono border border-border">12 GHz – 18 GHz</td>
                <td className="p-2 text-muted-foreground border border-border">Satellite uplink (14 GHz) & downlink (11-12 GHz). Geostationary satellite (36,000 km).</td>
                <td className="p-2 text-muted-foreground border border-border">Direct-To-Home (DTH) TV (Tata Play, Airtel Digital TV), VSAT for banking ATMs. Rain fade sensitivity.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: Network Topologies */}
      <section id="network-topologies" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          Network Topologies (With Structured Visual Diagrams)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Network ke computers, cables aur devices ke physical ya logical layout arrangement ko <strong>Topology</strong> kehte hain.
        </p>

        {/* Visual Box for Topologies */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Bus Topology */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-foreground text-sm text-primary">1. Bus Topology</h4>
              <span className="text-[11px] bg-muted px-2 py-0.5 rounded font-mono">Single Backbone Cable</span>
            </div>
            <div className="p-3 rounded-lg bg-muted/30 border border-border text-center font-mono text-xs space-y-2">
              <div className="border-t-2 border-primary relative my-4">
                <span className="absolute -top-3 left-2 bg-background px-1 text-[10px] text-muted-foreground">Terminator</span>
                <span className="absolute -top-3 right-2 bg-background px-1 text-[10px] text-muted-foreground">Terminator</span>
              </div>
              <div className="flex justify-around text-[11px]">
                <div className="border border-border bg-card p-1 rounded">Node A</div>
                <div className="border border-border bg-card p-1 rounded">Node B</div>
                <div className="border border-border bg-card p-1 rounded">Node C</div>
                <div className="border border-border bg-card p-1 rounded">Node D</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>Advantage:</strong> Minimum cable zaroorat, easy to install. <br />
              <strong>Disadvantage:</strong> Main backbone break hone par poora network down. Collision high.
            </p>
          </div>

          {/* Star Topology */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-foreground text-sm text-green-500">2. Star Topology (Most Popular)</h4>
              <span className="text-[11px] bg-muted px-2 py-0.5 rounded font-mono">Central Hub/Switch</span>
            </div>
            <div className="p-3 rounded-lg bg-muted/30 border border-border text-center font-mono text-xs flex flex-col items-center justify-center gap-2">
              <div className="border border-border bg-card p-1 rounded">Node 1</div>
              <div className="flex items-center gap-4">
                <div className="border border-border bg-card p-1 rounded">Node 4</div>
                <div className="border-2 border-green-500 bg-green-500/20 px-3 py-1.5 rounded font-bold text-foreground">HUB / SWITCH</div>
                <div className="border border-border bg-card p-1 rounded">Node 2</div>
              </div>
              <div className="border border-border bg-card p-1 rounded">Node 3</div>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>Advantage:</strong> Single cable cut hone par sirf ek computer disconnect hota hai, baaki chalta rehta hai. Easy fault detection. <br />
              <strong>Disadvantage:</strong> Central switch fail hua to poora network stop.
            </p>
          </div>

          {/* Ring Topology */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-foreground text-sm text-purple-500">3. Ring Topology</h4>
              <span className="text-[11px] bg-muted px-2 py-0.5 rounded font-mono">Circular Token Ring</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Har computer apne do adjacent computers se circular ring me juda hota hai. Data ek direction (unidirectional) me token ke sath travel karta hai.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Advantage:</strong> No collision because of token passing. <br />
              <strong>Disadvantage:</strong> Ek bhi node ya cable link fail hui to poori ring break ho jati hai.
            </p>
          </div>

          {/* Mesh Topology */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-foreground text-sm text-amber-500">4. Mesh Topology (Full Mesh)</h4>
              <span className="text-[11px] bg-muted px-2 py-0.5 rounded font-mono">Dedicated Point-to-Point</span>
            </div>
            <div className="study-formula-block text-xs">
              <strong>Formula for Links:</strong> <span className="font-mono text-primary font-bold">Total Links = n(n - 1) / 2</span>, Ports per device = <span className="font-mono font-bold">n - 1</span> (where n = number of nodes).
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>Advantage:</strong> Maximum reliability aur robust security (Dedicated channels). Zero traffic bottleneck. <br />
              <strong>Disadvantage:</strong> Bohot zyada cables aur ports ki zaroorat, installation cost extremely high.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Data Link Layer Design Issues & Protocols */}
      <section id="data-link-layer" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">5</span>
          Data Link Layer: Design Issues & Example Protocols
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Data Link Layer (DLL) physical layer ke raw transmission facility ko ek reliable, error-free link me transform karta hai.
        </p>

        {/* Design Issues */}
        <div className="p-4 rounded-xl border border-border bg-card space-y-2">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-primary">Major DLL Design Issues</h4>
          <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
            <li><strong>Framing:</strong> Bit stream ko alag-alag frames me break karna (Byte stuffing, Bit stuffing with flags <code className="text-foreground">01111110</code>).</li>
            <li><strong>Error Control:</strong> Frame transmission ke dauran bit errors detect karna (CRC - Cyclic Redundancy Check) aur retransmit karna (ARQ).</li>
            <li><strong>Flow Control:</strong> Fast sender ko slow receiver ko overwhelm karne se rokna (Stop & Wait, Sliding Window).</li>
            <li><strong>Medium Access Control (MAC):</strong> Shared medium me collision avoid karna.</li>
          </ul>
        </div>

        {/* Protocols */}
        <div className="grid md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 w-fit"><Network className="w-5 h-5" /></div>
            <h4 className="font-bold text-foreground text-sm">Ethernet (IEEE 802.3)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Wired LAN ka standard protocol. Medium access ke liye <strong>CSMA/CD (Carrier Sense Multiple Access with Collision Detection)</strong> use karta hai. Cable me collision detect hone par backoff algorithm chalta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-500 w-fit"><Wifi className="w-5 h-5" /></div>
            <h4 className="font-bold text-foreground text-sm">WLAN (IEEE 802.11 / Wi-Fi)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Wireless LAN protocol. Wireless medium me full-duplex sensing possible nahi hoti, isliye <strong>CSMA/CA (Collision Avoidance)</strong> use karta hai with RTS/CTS (Request to Send / Clear to Send) handshake.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 w-fit"><Bluetooth className="w-5 h-5" /></div>
            <h4 className="font-bold text-foreground text-sm">Bluetooth (IEEE 802.15.1)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Short-range (10m) Wireless Personal Area Network (WPAN). 2.4 GHz ISM band par Frequency Hopping Spread Spectrum (FHSS) use karta hai. <strong>Piconet</strong> (1 Master + up to 7 active Slaves) banata hai.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Switching Techniques */}
      <section id="switching-techniques" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">6</span>
          Switching Techniques: Circuit, Packet & Message Switching
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Bade networks me har do nodes ke beech dedicated point-to-point physical wire lagana impossible hota hai. Isliye intermediate switching nodes ke through data forward karne ko <strong>Switching</strong> kehte hain.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-primary">1. Circuit Switching</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Communication shuru hone se pehle sender aur receiver ke beech ek <em>Dedicated Physical Connection</em> establish hota hai. Yeh 3 phases me kaam karta hai:
            </p>
            <ol className="text-xs text-muted-foreground list-decimal list-inside space-y-0.5">
              <li>Circuit Setup</li>
              <li>Data Transfer</li>
              <li>Circuit Teardown / Disconnect</li>
            </ol>
            <p className="text-xs text-muted-foreground"><strong>Example:</strong> Traditional landline telephone system.</p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-green-500">2. Message Switching</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Isme koi dedicated path nahi banta. Poore message ko ek single unit ke roop me intermediate switches par <strong>Store and Forward</strong> kiya jata hai. Switch poora message pehle hard disk par store karta hai, fir agle switch ko bhejta hai.
            </p>
            <p className="text-xs text-muted-foreground"><strong>Disadvantage:</strong> Badi memory require hoti hai aur delay kafi unpredicted hota hai (obsolete today).</p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-purple-500">3. Packet Switching</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Message ko chhote fixed-size <strong>Packets</strong> me tod diya jata hai. Har packet me Source IP, Destination IP aur sequence number hota hai. Packets independent routes se destination tak pahunchte hain aur wahan reassemble ho jate hain.
            </p>
            <p className="text-xs text-muted-foreground"><strong>Example:</strong> The Internet (IP networks). Maximum link utilization.</p>
          </div>
        </div>

        {/* Switching Comparison Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Parameter</th>
                <th className="p-2 border border-border">Circuit Switching</th>
                <th className="p-2 border border-border">Packet Switching</th>
                <th className="p-2 border border-border">Message Switching</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Dedicated Path</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Yes (Required before transfer)</td>
                <td className="p-2 text-rose-500 font-semibold border border-border">No (Dynamic per-packet route)</td>
                <td className="p-2 text-rose-500 font-semibold border border-border">No (Hop-by-hop)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Bandwidth Utilization</td>
                <td className="p-2 text-muted-foreground border border-border">Low (Silent periods me link waste hota hai)</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Very High (Dynamic statistical multiplexing)</td>
                <td className="p-2 text-muted-foreground border border-border">Moderate</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Store & Forward</td>
                <td className="p-2 text-muted-foreground border border-border">No</td>
                <td className="p-2 text-muted-foreground border border-border">Yes (Small packets stored in RAM)</td>
                <td className="p-2 text-muted-foreground border border-border">Yes (Large messages stored on disk)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Best Suited For</td>
                <td className="p-2 text-muted-foreground border border-border">Real-time voice calls</td>
                <td className="p-2 text-muted-foreground border border-border">Bursty data, web browsing, emails</td>
                <td className="p-2 text-muted-foreground border border-border">Telegram, historical telex</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 7: Exam Focus & Important Questions */}
      <section className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-primary" />
          Exam Focus & Important Questions (BTEUP)
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">1 Mark Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Optical fiber kis principle par kaam karta hai? (Total Internal Reflection)</li>
              <li>Mesh topology me n nodes ke liye kitne links chahiye? (n*(n-1)/2)</li>
              <li>Ethernet kaun sa medium access protocol use karta hai? (CSMA/CD)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">2-3 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>UTP aur STP cables me antar spasht kijiye.</li>
              <li>Terrestrial microwave communication me repeaters kyon lagane padte hain?</li>
              <li>CSMA/CD aur CSMA/CA me kya difference hai?</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">5 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Network Topologies (Bus, Star, Ring, Mesh) ko diagrams ke sath define karke advantages aur disadvantages likhiye.</li>
              <li>Circuit Switching aur Packet Switching ke beech comparative study kijiye.</li>
              <li>Optical fiber cable ki internal structure ka diagram banakar TIR principle samjhaiye.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8: Quick Revision Points */}
      <section className="p-5 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Quick Revision Checklist
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">✓ <strong>Twisted Pair:</strong> Twisting cancels EMI & crosstalk; UTP is cheap LAN standard.</li>
          <li className="flex items-center gap-2">✓ <strong>Optical Fiber:</strong> Light pulses, Total Internal Reflection (TIR), highest bandwidth.</li>
          <li className="flex items-center gap-2">✓ <strong>Star Topology:</strong> Central switch; single cable failure doesn't affect network.</li>
          <li className="flex items-center gap-2">✓ <strong>Mesh Formula:</strong> Links = n(n-1)/2; highest fault tolerance.</li>
          <li className="flex items-center gap-2">✓ <strong>Circuit Switching:</strong> Dedicated path, 3 phases, ideal for voice calls.</li>
          <li className="flex items-center gap-2">✓ <strong>Packet Switching:</strong> Message split into independent packets; Internet backbone.</li>
        </ul>
      </section>
    </article>
  );
};

export default CnUnit2Content;
