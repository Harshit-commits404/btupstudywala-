import React from 'react';
import { 
  Layers, 
  Cpu, 
  HardDrive, 
  Zap, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Maximize2,
  RefreshCw,
  Server,
  FileText
} from 'lucide-react';

const OsUnit3Content = () => {
  return (
    <article className="space-y-12">
      {/* Chapter Title & Header */}
      <div className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Unit 3 • 10 Periods
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          Memory Management
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Memory Allocation (First Fit, Best Fit, Worst Fit), Swapping, Paging, Segmentation, Page Faults, Page Replacement Algorithms, Fragmentation, Compaction aur Virtual Memory ka detailed exam-oriented study notes.
        </p>
      </div>

      {/* SECTION 1: Introduction to Memory Allocation */}
      <section id="memory-allocation" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">1</span>
          Memory Allocation Concepts
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Operating system me jab bhi kisi process ko execute hona hota hai, use RAM (Main Memory) me space allocate karni padti hai. Is process ko <strong>Memory Allocation</strong> kehte hain. Memory management unit (MMU) yeh ensure karta hai ki processes ek doosre ki memory ko overwrite na karein aur memory ka optimal utilization ho sake.
        </p>

        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-2">
          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider text-primary">Definition: Memory Management</h4>
          <p className="text-foreground text-sm leading-relaxed">
            <strong>Memory Management</strong> OS ka woh component hai jo main memory (RAM) ka track rakhta hai ki kaun sa part free hai aur kaun sa part kis process ke dwara used hai. Yeh process ko memory allocate aur deallocate karta hai.
          </p>
        </div>

        {/* Allocation Types */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground mb-1 text-base">1. Contiguous Memory Allocation</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Isme har process ko memory me ek continuous block (single contiguous memory space) allocate kiya jata hai. Isme fixed partition ya dynamic partitioning use hoti hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground mb-1 text-base">2. Non-Contiguous Memory Allocation</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Isme process ka code memory me alag-alag scattered locations par store ho sakta hai. Example: <strong>Paging</strong> aur <strong>Segmentation</strong>.
            </p>
          </div>
        </div>

        {/* Dynamic Partitioning Strategies */}
        <h3 className="text-xl font-bold text-foreground pt-4">Partition Allocation Algorithms (First Fit, Best Fit, Worst Fit)</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Dynamic partitioning me jab memory me multiple free holes (free memory blocks) hote hain, tab incoming process ko kaun se hole me fit karna hai, iske liye 3 standard strategies use hoti hain:
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              A. First Fit Algorithm
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Kaise kaam karta hai:</strong> Memory ke starting se scan karta hai aur jo <em>sabse pehla free hole</em> milta hai jo process size ke barabar ya usse bada ho, process ko wahi allocate kar deta hai.
            </p>
            <p className="text-xs text-muted-foreground"><strong>Advantage:</strong> Yeh sabse fast hota hai kyunki poori memory scan nahi karni padti.</p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              B. Best Fit Algorithm
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Kaise kaam karta hai:</strong> Poori free memory list ko scan karta hai aur <em>sabse chota hole</em> jo process ke size ko accommodate kar sake, use allocate karta hai. (Hole size - Process size = Minimum leftover).
            </p>
            <p className="text-xs text-muted-foreground"><strong>Disadvantage:</strong> Isse chote-chote bohot saare useless holes (tiny fragments) ban jate hain jo kisi process ke kaam nahi aate.</p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              C. Worst Fit Algorithm
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Kaise kaam karta hai:</strong> Poori memory list ko scan karta hai aur <em>sabse bada available free hole</em> allocate karta hai, taaki allocation ke baad jo bacha hua hole ho woh bada ho aur doosre process ke kaam aa sake.
            </p>
            <p className="text-xs text-muted-foreground"><strong>Disadvantage:</strong> Poori memory list har baar search karni padti hai, jisse yeh slow hota hai.</p>
          </div>
        </div>

        {/* STEP BY STEP NUMERICAL EXAMPLE */}
        <div className="p-5 rounded-xl border border-primary/30 bg-primary/5 space-y-4">
          <h4 className="font-bold text-primary text-base flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Step-by-Step Numerical Example (Exam Favorite)
          </h4>
          <p className="text-sm text-foreground">
            <strong>Problem:</strong> Maan lijiye memory blocks ka size in order hai: <code className="bg-background px-1.5 py-0.5 rounded text-primary font-mono text-xs">100 KB, 500 KB, 200 KB, 300 KB, 600 KB</code>. Incoming process ka size hai <code className="bg-background px-1.5 py-0.5 rounded text-amber-500 font-mono text-xs">212 KB</code>. Is process ko First Fit, Best Fit aur Worst Fit me kahan space milegi?
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-border bg-card">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className="p-2 border border-border">Algorithm</th>
                  <th className="p-2 border border-border">Search Process</th>
                  <th className="p-2 border border-border">Allocated Block</th>
                  <th className="p-2 border border-border">Leftover Free Space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-2 font-bold text-primary border border-border">First Fit</td>
                  <td className="p-2 text-muted-foreground border border-border">100 KB (too small) → 500 KB (fit!)</td>
                  <td className="p-2 font-mono font-bold text-foreground border border-border">500 KB Block</td>
                  <td className="p-2 text-muted-foreground border border-border">500 - 212 = <strong>288 KB</strong></td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-green-500 border border-border">Best Fit</td>
                  <td className="p-2 text-muted-foreground border border-border">Suitable blocks: 500 KB, 300 KB, 600 KB. Minimum excess is in 300 KB.</td>
                  <td className="p-2 font-mono font-bold text-foreground border border-border">300 KB Block</td>
                  <td className="p-2 text-muted-foreground border border-border">300 - 212 = <strong>88 KB</strong></td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-amber-500 border border-border">Worst Fit</td>
                  <td className="p-2 text-muted-foreground border border-border">Largest available block is 600 KB.</td>
                  <td className="p-2 font-mono font-bold text-foreground border border-border">600 KB Block</td>
                  <td className="p-2 text-muted-foreground border border-border">600 - 212 = <strong>388 KB</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: Fragmentation & Compaction */}
      <section id="fragmentation" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">2</span>
          Fragmentation & Compaction
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Memory allocation aur deallocation ke dauran memory blocks waste ho jate hain, is issue ko <strong>Fragmentation</strong> kehte hain. Yeh do types ki hoti hai:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-rose-500">Internal Fragmentation</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Jab kisi process ko uske requirement se bada fixed memory partition allocate kar diya jata hai, to partition ke andar bachi hui unallocated space waste ho jati hai. Is bachi hui internal space ko <strong>Internal Fragmentation</strong> kehte hain.
            </p>
            <div className="p-2 rounded bg-muted/60 text-xs font-mono text-foreground">
              Block: 100 KB, Process: 80 KB → Internal Waste = 20 KB
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-amber-500">External Fragmentation</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Jab total free memory available hoti hai jo process ki requirement se badi hoti hai, lekin woh memory <em>non-contiguous</em> (chhote-chhote tukdon me bikhri hui) hoti hai, isliye process allocate nahi ho pata. Ise <strong>External Fragmentation</strong> kehte hain.
            </p>
            <div className="p-2 rounded bg-muted/60 text-xs font-mono text-foreground">
              Free: 50 KB + 60 KB = 110 KB. Process: 90 KB. But cannot allocate contiguously!
            </div>
          </div>
        </div>

        {/* Compaction */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-2">
          <h4 className="font-bold text-foreground text-base text-primary">Compaction Kya Hota Hai?</h4>
          <p className="text-sm text-foreground leading-relaxed">
            External Fragmentation ko dur karne ke technique ko <strong>Compaction</strong> (ya Defragmentation) kehte hain. Isme OS sabhi allocated memory blocks ko memory ke ek side shift kar deta hai, taaki saari free spaces milkar ek bada continuous single free memory block ban jayein.
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Note:</strong> Compaction tabhi possible hai jab dynamic relocation (base register based addressing) support ho, aur iska execution overhead kafi high hota hai.
          </p>
        </div>
      </section>

      {/* SECTION 3: Swapping */}
      <section id="swapping" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">3</span>
          Swapping
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>Swapping</strong> ek aisi technique hai jisme kisi temporarily idle ya waiting process ko Main Memory (RAM) se Secondary Storage (Backing Store / Swap Space) me move kar diya jata hai, taaki doosre active processes ke liye RAM free ho sake.
        </p>

        <div className="p-5 rounded-xl border border-border bg-card space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-muted/40 border border-border">
              <h5 className="font-bold text-sm text-foreground mb-1">Swap Out</h5>
              <p className="text-xs text-muted-foreground">Process ko Main Memory (RAM) se hard disk ke swap area me bhejna.</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border">
              <h5 className="font-bold text-sm text-foreground mb-1">Swap In</h5>
              <p className="text-xs text-muted-foreground">Jab CPU ready ho ya process ka I/O complete ho jaye, use disk se wapas RAM me load karna.</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-muted-foreground leading-relaxed">
            <strong>Degree of Multiprogramming:</strong> Swapping ki wajah se system ki multiprogramming badh jati hai kyunki RAM ki actual capacity se jyada processes system me exist kar sakte hain.
          </div>
        </div>
      </section>

      {/* SECTION 4: Paging & Address Translation */}
      <section id="paging" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          Paging & Address Translation
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>Paging</strong> ek non-contiguous memory allocation scheme hai jo external fragmentation ko poori tarah khatam kar deti hai. Isme physical memory aur logical memory ko fixed equal size blocks me baanta jata hai.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-primary">Frames (Physical Memory)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Main memory (RAM) ko fixed-sized blocks me divide kiya jata hai jinhe <strong>Frames</strong> kehte hain. (Frame size typical: 4 KB).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-amber-500">Pages (Logical Memory)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Process ke logical address space ko barabar size ke blocks me divide kiya jata hai jinhe <strong>Pages</strong> kehte hain. <br />
              <strong className="text-foreground">Important: Page Size = Frame Size hamesha equal hota hai.</strong>
            </p>
          </div>
        </div>

        {/* Address Translation Diagram */}
        <div className="p-5 rounded-xl border border-border bg-muted/20 space-y-4">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-center">
            Paging Hardware & Address Translation Architecture
          </h4>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-mono">
            <div className="border border-border bg-card p-3 rounded-lg text-center shadow-sm">
              <div className="font-bold text-foreground mb-1">CPU Generated Logical Address</div>
              <div className="flex border border-border rounded overflow-hidden">
                <div className="bg-primary/20 px-3 py-1 font-bold">Page Number (p)</div>
                <div className="bg-muted px-3 py-1 text-muted-foreground">Page Offset (d)</div>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 text-primary rotate-90 md:rotate-0" />

            <div className="border-2 border-primary/40 bg-card p-3 rounded-lg text-center shadow-sm">
              <div className="font-bold text-primary mb-1">Page Table</div>
              <div className="bg-muted/50 p-2 rounded text-[11px] space-y-1">
                <div>Page 0 → Frame 3</div>
                <div>Page 1 → Frame 7</div>
                <div>Page p → Frame f</div>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 text-primary rotate-90 md:rotate-0" />

            <div className="border border-border bg-card p-3 rounded-lg text-center shadow-sm">
              <div className="font-bold text-foreground mb-1">Physical Address (RAM)</div>
              <div className="flex border border-border rounded overflow-hidden">
                <div className="bg-green-500/20 px-3 py-1 font-bold text-green-500">Frame Number (f)</div>
                <div className="bg-muted px-3 py-1 text-muted-foreground">Offset (d)</div>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-2">
            Logical Address se physical address mapping MMU dwara Page Table ki madad se hoti hai. Offset (d) change nahi hota.
          </p>
        </div>

        {/* Formula block */}
        <div className="study-formula-block">
          <h4 className="font-bold text-primary text-sm mb-1">Formula & Calculation</h4>
          <p className="text-xs text-foreground mb-2">Agar Logical Address Space = 2<sup>m</sup> bytes hai aur Page Size = 2<sup>n</sup> bytes hai:</p>
          <div className="font-mono text-sm text-foreground bg-card p-2 rounded border border-border">
            Logical Address Bits = m bits <br />
            Offset Bits (d) = n bits <br />
            Page Number Bits (p) = m - n bits
          </div>
        </div>
      </section>

      {/* SECTION 5: Segmentation */}
      <section id="segmentation" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">5</span>
          Segmentation
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Paging user ke view ko consider nahi karta (fixed blocks me cut karta hai). Iske viparit, <strong>Segmentation</strong> memory management scheme user ke perspective se memory organize karta hai. Program ko logical units me divide kiya jata hai jinhe <strong>Segments</strong> kehte hain (jaise Main Program, Stack, Symbol Table, Subroutines).
        </p>

        <div className="p-4 rounded-xl border border-border bg-card space-y-3">
          <h4 className="font-bold text-foreground text-base">Segment Table & Address Translation</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            CPU logical address generate karta hai jisme do parts hote hain: <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">&lt;Segment Number (s), Offset (d)&gt;</code>. <br />
            Segment Table me do main columns hote hain:
          </p>
          <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
            <li><strong>Base Address:</strong> Main memory me us segment ka starting physical address.</li>
            <li><strong>Limit:</strong> Us segment ki total length (size). Agar offset <code className="text-primary">d &gt; limit</code> ho jata hai, to trap (segmentation violation error) generate hota hai.</li>
          </ul>
        </div>

        {/* Paging vs Segmentation Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Parameter</th>
                <th className="p-2 border border-border">Paging</th>
                <th className="p-2 border border-border">Segmentation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Block Size</td>
                <td className="p-2 text-muted-foreground border border-border">Fixed size (Pages & Frames).</td>
                <td className="p-2 text-muted-foreground border border-border">Variable size (har segment ka size alag hota hai).</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">User Visibility</td>
                <td className="p-2 text-muted-foreground border border-border">User ko invisible hota hai (OS level).</td>
                <td className="p-2 text-muted-foreground border border-border">User program ko segments me divide karta hai.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Fragmentation</td>
                <td className="p-2 text-muted-foreground border border-border">Internal fragmentation hoti hai, external nahi hoti.</td>
                <td className="p-2 text-muted-foreground border border-border">External fragmentation hoti hai, internal nahi hoti.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground border border-border">Address Structure</td>
                <td className="p-2 text-muted-foreground border border-border">Page number + Offset</td>
                <td className="p-2 text-muted-foreground border border-border">Segment number + Offset</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: Concept of Virtual Memory */}
      <section id="virtual-memory" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">6</span>
          Concept of Virtual Memory & Demand Paging
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          <strong>Virtual Memory</strong> ek aisi technique hai jo program ko execute karne ki permission deti hai chahe uska size physical RAM se bada hi kyon na ho. Isme Secondary Storage (Hard Disk) ke ek part ko RAM ki extension ki tarah use kiya jata hai.
        </p>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-border bg-card text-center">
            <div className="text-xl font-bold text-primary mb-1">Large Programs</div>
            <p className="text-xs text-muted-foreground">RAM se bade size ke heavy software (jaise games, IDEs) aasani se execute ho sakte hain.</p>
          </div>
          <div className="p-3 rounded-xl border border-border bg-card text-center">
            <div className="text-xl font-bold text-green-500 mb-1">More Multiprogramming</div>
            <p className="text-xs text-muted-foreground">Ek saath jyada processes run ho sakte hain kyunki sirf zaroori pages RAM me aate hain.</p>
          </div>
          <div className="p-3 rounded-xl border border-border bg-card text-center">
            <div className="text-xl font-bold text-amber-500 mb-1">Demand Paging</div>
            <p className="text-xs text-muted-foreground">"Lazy Swapper" concept: Kisi page ko RAM me tabhi laya jata hai jab CPU ko uski zaroorat padti hai.</p>
          </div>
        </div>

        {/* Page Faults */}
        <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2">
          <h4 className="font-bold text-rose-500 text-base flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Page Fault Kya Hota Hai? (Very Important)
          </h4>
          <p className="text-sm text-foreground leading-relaxed">
            Jab CPU kisi aise memory page ko access karne ki koshish karta hai jo currently Physical RAM me present nahi hota (woh hard disk ke virtual memory area me hota hai), to hardware ek trap generate karta hai jise <strong>Page Fault</strong> kehte hain.
          </p>
          <div className="text-xs text-muted-foreground space-y-1 pt-1">
            <strong>Page Fault Handling Steps:</strong>
            <ol className="list-decimal list-inside space-y-0.5">
              <li>CPU memory access karta hai, Page Table me valid/invalid bit <code className="text-rose-500">i</code> (invalid) milti hai.</li>
              <li>Trap to OS (Page fault interrupt generate hota hai).</li>
              <li>OS disk par target page ko dhundhta hai.</li>
              <li>Disk se page ko free frame me load kiya jata hai (I/O operation).</li>
              <li>Page table update ki jati hai (bit set to <code className="text-green-500">v</code> valid).</li>
              <li>Instruction ko restart kiya jata hai.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 7: Page Replacement Algorithms */}
      <section id="page-replacement" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">7</span>
          Page Replacement Algorithms (With Solved Numericals)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Jab Page Fault hota hai aur RAM me koi bhi free frame available nahi hota, to OS ko existing frames me se kisi ek page ko bahar (swap out) nikalna padta hai taaki naye page ko jagah mil sake. Is decision ke liye <strong>Page Replacement Algorithms</strong> use hote hain.
        </p>

        {/* Algorithm 1: FIFO */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-3">
          <h3 className="font-bold text-foreground text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            1. First-In First-Out (FIFO)
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Jo page sabse pehle RAM me enter hua tha, naya page aane par sabse pehle usi ko replace kiya jayega (Queue data structure based).
          </p>
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-500">
            <strong>Belady's Anomaly (Exam Question):</strong> Aamtaur par frame badhane se page faults kam hone chahiye, lekin FIFO me kabhi-kabhi frames badhane ke bavajood page faults badh jate hain! Is weird phenomenon ko <em>Belady's Anomaly</em> kehte hain.
          </div>
        </div>

        {/* Algorithm 2: Optimal */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-3">
          <h3 className="font-bold text-foreground text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            2. Optimal Page Replacement (OPT / MIN)
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Us page ko replace karo jo <em>future me sabse lambe samay tak use nahi hone wala hai</em> (longest time in the future).
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Theoretical Benchmark:</strong> Yeh lowest page fault rate deta hai, lekin practically implement karna impossible hai kyunki OS ko future references pehle se pata nahi hote.
          </p>
        </div>

        {/* Algorithm 3: LRU */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-3">
          <h3 className="font-bold text-foreground text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            3. Least Recently Used (LRU)
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Us page ko replace karo jo <em>past me sabse lambe samay se use nahi hua hai</em> (longest time in the past without reference). Yeh Optimal algorithm ka practical approximation hai.
          </p>
        </div>

        {/* SOLVED NUMERICAL ON PAGE REPLACEMENT */}
        <div className="p-5 rounded-xl border border-primary/30 bg-primary/5 space-y-4">
          <h4 className="font-bold text-primary text-base flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Solved Numerical Example: Reference String
          </h4>
          <p className="text-xs text-foreground">
            <strong>Reference String:</strong> <code className="bg-background px-1.5 py-0.5 rounded text-primary font-mono text-xs">7, 0, 1, 2, 0, 3, 0, 4, 2, 3</code> <br />
            <strong>Total Number of Frames = 3</strong>
          </p>

          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-card border border-border">
              <h5 className="font-bold text-xs text-blue-500 mb-1">FIFO Calculation:</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Step 1: 7 enters [7, -, -] (Fault 1) <br />
                Step 2: 0 enters [7, 0, -] (Fault 2) <br />
                Step 3: 1 enters [7, 0, 1] (Fault 3) <br />
                Step 4: 2 enters, replaces 7 (oldest) → [2, 0, 1] (Fault 4) <br />
                Step 5: 0 hits! [2, 0, 1] (Hit 1) <br />
                Step 6: 3 enters, replaces 0 (next oldest) → [2, 3, 1] (Fault 5) <br />
                Step 7: 0 enters, replaces 1 → [2, 3, 0] (Fault 6) <br />
                Step 8: 4 enters, replaces 2 → [4, 3, 0] (Fault 7) <br />
                Step 9: 2 enters, replaces 3 → [4, 2, 0] (Fault 8) <br />
                Step 10: 3 enters, replaces 0 → [4, 2, 3] (Fault 9) <br />
                <strong className="text-foreground">Total FIFO Faults = 9, Hits = 1 (Hit Ratio = 10%)</strong>
              </p>
            </div>

            <div className="p-3 rounded-lg bg-card border border-border">
              <h5 className="font-bold text-xs text-purple-500 mb-1">LRU Calculation:</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Initially fills 7, 0, 1 (3 Faults). <br />
                Page 2 replaces 7 (least recently used among 7, 0, 1) → [2, 0, 1] (Fault 4) <br />
                Page 0 hits (recently used updated to 0) → [2, 0, 1] (Hit 1) <br />
                Page 3 replaces 1 (since 0 and 2 were used more recently) → [2, 0, 3] (Fault 5) <br />
                Page 0 hits → [2, 0, 3] (Hit 2) <br />
                Page 4 replaces 2 (least recently used) → [4, 0, 3] (Fault 6) <br />
                Page 2 replaces 3 → [4, 0, 2] (Fault 7) <br />
                Page 3 replaces 0 → [4, 3, 2] (Fault 8) <br />
                <strong className="text-foreground">Total LRU Faults = 8, Hits = 2 (Hit Ratio = 20%)</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Exam Focus & Important Questions */}
      <section className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-primary" />
          Exam Focus & Important Questions (BTEUP)
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">1 Mark Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Paging me internal fragmentation hoti hai ya external? (Internal)</li>
              <li>Page size aur frame size me kya relation hai? (Equal)</li>
              <li>Belady's anomaly kis algorithm me dekhne ko milti hai? (FIFO)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">2-3 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Internal aur External Fragmentation me antar likhiye.</li>
              <li>Compaction kya hota hai aur ise kab use karte hain?</li>
              <li>Page fault handling mechanism ke steps explain kijiye.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">5 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>First Fit, Best Fit aur Worst Fit allocation algorithms ko numerical example ke sath samjhaiye.</li>
              <li>Paging ka concept address translation diagram ke sath explain kijiye.</li>
              <li>FIFO aur LRU page replacement algorithm par numerical solve kijiye.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 9: Quick Revision Points */}
      <section className="p-5 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Quick Revision Checklist
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">✓ <strong>First Fit:</strong> Fast, allocates first sufficient hole.</li>
          <li className="flex items-center gap-2">✓ <strong>Best Fit:</strong> Allocates smallest sufficient hole, leaves tiny fragments.</li>
          <li className="flex items-center gap-2">✓ <strong>Worst Fit:</strong> Allocates largest available hole.</li>
          <li className="flex items-center gap-2">✓ <strong>Paging:</strong> Fixed size blocks, removes external fragmentation.</li>
          <li className="flex items-center gap-2">✓ <strong>Segmentation:</strong> Variable size blocks, matches user's logical view.</li>
          <li className="flex items-center gap-2">✓ <strong>Virtual Memory:</strong> Allows execution of processes larger than physical RAM.</li>
        </ul>
      </section>
    </article>
  );
};

export default OsUnit3Content;
