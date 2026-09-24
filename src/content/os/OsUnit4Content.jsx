import React from 'react';
import { 
  HardDrive, 
  Disc, 
  Server, 
  Layers, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Cpu,
  FileText
} from 'lucide-react';

const OsUnit4Content = () => {
  return (
    <article className="space-y-12">
      {/* Chapter Title & Header */}
      <div className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Unit 4 • 8 Periods
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          I/O System & Mass Storage
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Mass Storage Structure, Magnetic Disk Structure, Disk Attachment (Host-Attached, NAS, SAN), Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN), Swap Space Management aur RAID Types (0, 1, 5, 6) ka detailed exam-oriented study notes.
        </p>
      </div>

      {/* SECTION 1: Mass Storage Structure Overview */}
      <section id="mass-storage-overview" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">1</span>
          Mass Storage Structure Overview
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Main Memory (RAM) volatile hoti hai aur uski capacity limited hoti hai. Isliye programs aur massive data ko permanently store karne ke liye secondary storage devices ka use kiya jata hai, jinhe <strong>Mass Storage Structure</strong> kehte hain.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1">Magnetic Hard Disks (HDD)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Moving mechanical platters aur read/write head par based traditional storage. High capacity aur low cost per GB provide karta hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1">Solid-State Disks (SSD)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Semiconductor flash memory based storage. Koi moving parts nahi hote, isliye seek latency zero hoti hai aur speed bohot high hoti hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1">Magnetic Tape</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sequential access tertiary storage device, jo massive backup aur archiving purpose ke liye use hota hai.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Disk Structure */}
      <section id="disk-structure" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">2</span>
          Physical Disk Structure
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Traditional Magnetic Disk ek spindle par lage multiple circular flat platters se banti hai. Har platter par magnetic material ki coating hoti hai.
        </p>

        <div className="p-5 rounded-xl border border-border bg-card space-y-4">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Components of a Magnetic Disk</h4>
          
          <div className="grid md:grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div className="p-3 rounded-lg bg-muted/40 border border-border">
              <strong className="text-foreground text-sm block mb-1">Platters:</strong>
              Circular magnetic plates jo spindle ke charon taraf rotate karti hain (e.g. 5400 RPM ya 7200 RPM). Platter ke dono sides par data store ho sakta hai.
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border">
              <strong className="text-foreground text-sm block mb-1">Tracks:</strong>
              Har platter surface concentric circular rings me divided hoti hai jinhe <em>Tracks</em> kehte hain.
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border">
              <strong className="text-foreground text-sm block mb-1">Sectors:</strong>
              Har track chhote segments me divided hota hai jinhe <em>Sectors</em> kehte hain. Typically ek sector ka size 512 bytes ya 4096 bytes (4 KB) hota hai.
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border">
              <strong className="text-foreground text-sm block mb-1">Cylinder:</strong>
              Sabhi platters ke same track number ke group ko vertical cylinder kehte hain (e.g. Platter 1 ka Track 5 + Platter 2 ka Track 5).
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border md:col-span-2">
              <strong className="text-foreground text-sm block mb-1">Read/Write Heads & Actuator Arm:</strong>
              Har surface ke upar ek read/write head hota hai jo mechanical actuator arm se juda hota hai aur tracks ke beech move karta hai.
            </div>
          </div>
        </div>

        {/* Disk Access Latency Terms */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-2">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-primary">Key Disk Access Performance Factors (Formulas)</h4>
          <ul className="text-xs space-y-1.5 text-foreground list-disc list-inside">
            <li><strong>Seek Time:</strong> Read/Write head ko target track/cylinder tak pahunchne me laga samay (Dominating delay).</li>
            <li><strong>Rotational Latency:</strong> Platter ke ghum kar target sector ko read/write head ke neeche aane me laga samay. Average rotational latency = 1/2 of rotational period.</li>
            <li><strong>Transfer Time:</strong> Data ko disk se memory me transfer karne me laga samay (Data Size / Transfer Rate).</li>
          </ul>
          <div className="study-formula-block mt-2">
            <span className="font-bold text-foreground">Total Disk Access Time = Seek Time + Rotational Latency + Transfer Time</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: Disk Attachment */}
      <section id="disk-attachment" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">3</span>
          Disk Attachment Methods
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Computers mass storage ko access karne ke liye 3 main attachment methods ka use karte hain:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit"><HardDrive className="w-5 h-5" /></div>
            <h4 className="font-bold text-foreground text-base">1. Host-Attached Storage</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Storage direct computer ke local I/O bus (SATA, SCSI, SAS, NVMe) se physically connected hoti hai. Sirf local system hi ise access kar sakta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-500 w-fit"><Server className="w-5 h-5" /></div>
            <h4 className="font-bold text-foreground text-base">2. Network-Attached Storage (NAS)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ek dedicated storage device jo local network (LAN) par TCP/IP protocol ke through connect hota hai. Data <em>File-level</em> par access hota hai protocols jaise NFS (Linux) ya CIFS/SMB (Windows) dwara.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 w-fit"><Layers className="w-5 h-5" /></div>
            <h4 className="font-bold text-foreground text-base">3. Storage Area Network (SAN)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              High-speed dedicated private network (Fibre Channel ya iSCSI) jo multiple servers ko centralized storage arrays se connect karta hai. Data <em>Block-level</em> par directly access hota hai.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Disk Scheduling Algorithms */}
      <section id="disk-scheduling" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          Disk Scheduling Algorithms (With Solved Numericals)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Operating system multiple I/O requests ko serve karta hai. Disk scheduling ka main objective <strong>Seek Time (Total Head Movement) ko minimize karna</strong> aur throughput maximize karna hota hai.
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-blue-500">A. FCFS (First-Come, First-Served)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Jo track request queue me pehle aayi hai, read/write head pehle usi ko serve karega. Simple aur fair hai lekin total head movement bohot zyada (poor performance) ho sakta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-green-500">B. SSTF (Shortest Seek Time First)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Current head position se jo request <em>sabse pass</em> (minimum seek distance) hogi, use pehle serve kiya jata hai. Total head movement kafi kam hota hai, lekin <strong>Starvation</strong> ka risk hota hai agar pass ki requests lagatar aati rahein.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-purple-500">C. SCAN (Elevator Algorithm)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Disk arm elevator ki tarah ek direction me end tak move karta hai, raste me aane wali sabhi requests ko serve karta hai. End cylinder par pahunchne ke baad direction reverse karta hai aur wapas aate waqt requests ko serve karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-amber-500">D. C-SCAN (Circular SCAN)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              SCAN ki tarah ek direction me end tak serve karte hue jata hai, lekin wapas aate waqt kisi request ko serve nahi karta (directly opposite end par jump kar jata hai) aur fir se forward direction me serve karna shuru karta hai. Yeh uniform waiting time provide karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-rose-500">E. LOOK & C-LOOK</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              SCAN aur C-SCAN ke optimized versions hain. Head extreme physical ends (0 ya last track) tak nahi jata, balki us direction ki <em>aakhiri request</em> tak jakar hi direction reverse ya jump kar leta hai.
            </p>
          </div>
        </div>

        {/* NUMERICAL SOLVED EXAMPLE */}
        <div className="p-5 rounded-xl border border-primary/30 bg-primary/5 space-y-4">
          <h4 className="font-bold text-primary text-base flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Solved Numerical Example (BTEUP Exam Favorite)
          </h4>
          <p className="text-xs text-foreground">
            <strong>Problem:</strong> Disk queue me requests hain: <code className="bg-background px-1.5 py-0.5 rounded text-primary font-mono text-xs">98, 183, 37, 122, 14, 124, 65, 67</code>. Current Read/Write head position <code className="bg-background px-1.5 py-0.5 rounded text-amber-500 font-mono text-xs">53</code> par hai. Tracks 0 se 199 tak hain. FCFS aur SSTF ke liye Total Head Movement calculate kijiye.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-card border border-border space-y-2">
              <h5 className="font-bold text-xs text-blue-500">1. FCFS Head Movement:</h5>
              <div className="text-xs text-muted-foreground font-mono space-y-1">
                Order: 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67 <br />
                = |53 - 98| + |98 - 183| + |183 - 37| + |37 - 122| + |122 - 14| + |14 - 124| + |124 - 65| + |65 - 67| <br />
                = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 <br />
                = <strong className="text-foreground text-sm">640 Cylinders</strong>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-card border border-border space-y-2">
              <h5 className="font-bold text-xs text-green-500">2. SSTF Head Movement:</h5>
              <div className="text-xs text-muted-foreground font-mono space-y-1">
                From 53, closest is 65 (|53-65|=12) <br />
                From 65, closest is 67 (|65-67|=2) <br />
                From 67, closest is 37 (|67-37|=30) <br />
                From 37, closest is 14 (|37-14|=23) <br />
                From 14, closest is 98 (|14-98|=84) <br />
                From 98, closest is 122 → 124 → 183 <br />
                = (67 - 53) + (67 - 14) + (183 - 14) = 14 + 53 + 169 <br />
                = <strong className="text-foreground text-sm">236 Cylinders</strong>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            <strong>Conclusion:</strong> SSTF me total seek movement 640 se ghatkar sirf 236 cylinders reh gaya (63% improvement!).
          </p>
        </div>
      </section>

      {/* SECTION 5: Swap Space Management */}
      <section id="swap-space-management" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          Swap Space Management
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Virtual memory system me swapped-out processes aur pages ko hold karne ke liye disk par jo space reserve ki jati hai use <strong>Swap Space</strong> kehte hain.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm">Swap Space Implementation Methods</h4>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Within Normal File System:</strong> Ek normal large swap file banayi jati hai (e.g. Windows me <code className="text-primary">pagefile.sys</code>). Easy to add/remove, lekin file system lookup overhead ke karan slow hoti hai.</li>
              <li><strong>Raw Disk Partition:</strong> Disk ka ek alag dedicated unformatted partition create kiya jata hai (e.g. Linux <code className="text-primary">/dev/sda2 swap</code>). Koi file system overhead nahi hota, block allocation direct hota hai, isliye maximum performance milti hai.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm">Swap Map Data Structure</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              OS kernel ek array ya bit-map maintain karta hai jise <strong>Swap Map</strong> kehte hain. Har swap block ke liye ek counter hota hai: 0 ka matlab block free hai, &gt;0 ka matlab koi page swap space ke us block par stored hai.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: RAID Types */}
      <section id="raid-types" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">6</span>
          RAID Types (Redundant Array of Independent Disks)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>RAID</strong> ek aisi technology hai jisme multiple physical hard drives ko combine karke ek single logical drive banaya jata hai, jisse <em>Performance (Throughput)</em> aur <em>Reliability (Data Redundancy / Fault Tolerance)</em> dono improve hote hain.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">RAID Level</th>
                <th className="p-2 border border-border">Mechanism</th>
                <th className="p-2 border border-border">Fault Tolerance</th>
                <th className="p-2 border border-border">Min Disks</th>
                <th className="p-2 border border-border">Key Advantage / Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-primary border border-border">RAID 0</td>
                <td className="p-2 text-muted-foreground border border-border">Striping (Data blocks ko sabhi disks par divide karke parallel write kiya jata hai).</td>
                <td className="p-2 text-rose-500 font-semibold border border-border">None (Agar 1 bhi disk fail hui, sara data loss).</td>
                <td className="p-2 text-foreground font-mono border border-border">2</td>
                <td className="p-2 text-muted-foreground border border-border">Maximum speed and read/write performance. Gaming & video editing.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-green-500 border border-border">RAID 1</td>
                <td className="p-2 text-muted-foreground border border-border">Disk Mirroring (Same data ki 100% identical copy doosri disk par likhi jati hai).</td>
                <td className="p-2 text-green-500 font-semibold border border-border">High (1 disk fail hone par bhi zero data loss).</td>
                <td className="p-2 text-foreground font-mono border border-border">2</td>
                <td className="p-2 text-muted-foreground border border-border">High reliability, 50% capacity overhead. OS drive protection.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-purple-500 border border-border">RAID 5</td>
                <td className="p-2 text-muted-foreground border border-border">Block Striping with Distributed Parity (Parity information sabhi disks par bikhri hoti hai).</td>
                <td className="p-2 text-amber-500 font-semibold border border-border">Medium (Single disk failure tolerate kar sakta hai).</td>
                <td className="p-2 text-foreground font-mono border border-border">3</td>
                <td className="p-2 text-muted-foreground border border-border">Best balance of high speed, storage efficiency aur redundancy. Enterprise file servers.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-amber-500 border border-border">RAID 6</td>
                <td className="p-2 text-muted-foreground border border-border">Dual Distributed Parity (Do independent parity blocks store hote hain).</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Very High (Simultaneous 2 disk failure tolerate kar sakta hai).</td>
                <td className="p-2 text-foreground font-mono border border-border">4</td>
                <td className="p-2 text-muted-foreground border border-border">Mission critical data jahan downtime aur loss bilkul afford nahi ho sakta.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-blue-500 border border-border">RAID 10 (1+0)</td>
                <td className="p-2 text-muted-foreground border border-border">Striping + Mirroring combined.</td>
                <td className="p-2 text-green-500 font-semibold border border-border">Excellent (Mirrored pairs me se multiple disk failure tolerate).</td>
                <td className="p-2 text-foreground font-mono border border-border">4</td>
                <td className="p-2 text-muted-foreground border border-border">Database servers needing top performance + top safety.</td>
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
              <li>Seek Time kya hota hai?</li>
              <li>RAID 0 me fault tolerance hoti hai ya nahi? (Nahi)</li>
              <li>RAID 5 ke liye minimum kitni disks chahiye? (3 disks)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">2-3 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>NAS aur SAN me antar spasht kijiye.</li>
              <li>Magnetic disk ke tracks, sectors aur cylinders ko define kijiye.</li>
              <li>Swap space management kya hai? Raw partition vs file system swap.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">5 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Disk scheduling algorithms (FCFS, SSTF, SCAN) par numerical seek time calculation ke saath solve kijiye.</li>
              <li>Disk structure ka neat labeled diagram banakar sabhi parts ko explain kijiye.</li>
              <li>RAID technology kya hai? RAID 0, RAID 1 aur RAID 5 ko diagrams ke sath samjhaiye.</li>
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
          <li className="flex items-center gap-2">✓ <strong>Seek Time:</strong> Arm ko target track tak le jane ka samay (sabse bada delay).</li>
          <li className="flex items-center gap-2">✓ <strong>SSTF:</strong> Minimum seek time first, fast but starvation risk.</li>
          <li className="flex items-center gap-2">✓ <strong>SCAN (Elevator):</strong> End tak sweep karta hai aur raste me requests serve karta hai.</li>
          <li className="flex items-center gap-2">✓ <strong>RAID 0:</strong> Striping, high speed, zero redundancy.</li>
          <li className="flex items-center gap-2">✓ <strong>RAID 1:</strong> Mirroring, full redundancy, 50% storage loss.</li>
          <li className="flex items-center gap-2">✓ <strong>RAID 5:</strong> Distributed parity, single drive fault tolerance.</li>
        </ul>
      </section>
    </article>
  );
};

export default OsUnit4Content;
