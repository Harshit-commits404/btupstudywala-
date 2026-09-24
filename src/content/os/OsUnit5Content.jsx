import React from 'react';
import { 
  FolderTree, 
  FileText, 
  ShieldCheck, 
  HardDrive, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Database,
  Layers
} from 'lucide-react';

const OsUnit5Content = () => {
  return (
    <article className="space-y-12">
      {/* Chapter Title & Header */}
      <div className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Unit 5 • 8 Periods
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          File Management
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          File Concepts, Access Methods, Directory Structures, File System Mounting, File Sharing & Protection, File System Structure & Inodes, Free-Space Management, Efficiency & Performance aur Different Types of File Systems (FAT, NTFS, EXT) ka complete exam-oriented study notes.
        </p>
      </div>

      {/* SECTION 1: Concept of a File */}
      <section id="file-concept" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">1</span>
          Concept of a File & Attributes
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Operating system me <strong>File</strong> secondary storage (hard disk, SSD) par related data ya information ka ek named collection hoti hai. User ke perspective se file storage ka basic logical unit hai.
        </p>

        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-2">
          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider text-primary">Definition: File</h4>
          <p className="text-foreground text-sm leading-relaxed">
            A <strong>file</strong> is a contiguous logical address space defined by the user and mapped onto physical devices by the operating system. Yeh program code, text documents, images, audio, video ya binary data ho sakti hai.
          </p>
        </div>

        {/* File Attributes & Operations */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-primary">Key File Attributes</h4>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Name:</strong> Human-readable file name (e.g. <code className="text-foreground">notes.txt</code>).</li>
              <li><strong>Identifier:</strong> Unique non-human number (tag) jo file system ke andar file ko identify karta hai (e.g. Inode number).</li>
              <li><strong>Type:</strong> File ka format (e.g. <code className="text-foreground">.c, .pdf, .docx, .png</code>).</li>
              <li><strong>Location:</strong> Storage device par file ka physical pointer.</li>
              <li><strong>Size:</strong> File ka current size in bytes, words ya blocks.</li>
              <li><strong>Protection:</strong> Read, write, execute permissions info.</li>
              <li><strong>Time, Date & User ID:</strong> Creation date, last modification time.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider text-amber-500">Basic File Operations</h4>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Creating a file:</strong> Space allocate karna aur directory me entry banana.</li>
              <li><strong>Writing a file:</strong> System call dwara write pointer par data append/overwrite karna.</li>
              <li><strong>Reading a file:</strong> Read pointer position se data read karna.</li>
              <li><strong>Repositioning (Seek):</strong> Read/write pointer ko file ke kisi naye offset par shift karna.</li>
              <li><strong>Deleting a file:</strong> Directory entry hatana aur allocated blocks ko free space list me return karna.</li>
              <li><strong>Truncating:</strong> File ke data ko delete karna lekin uske attributes ko preserve rakhna.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: Access Methods */}
      <section id="access-methods" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">2</span>
          File Access Methods
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          File me stored information ko read karne ke alag-alag tareeqon ko <strong>File Access Methods</strong> kehte hain:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-blue-500">1. Sequential Access</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Information ko ek sequence me order-by-order read kiya jata hai (ek record ke baad agla record). Pehle ke records ko skip karke aage jump nahi kiya ja sakta. <br />
              <strong>Example:</strong> Magnetic tape audio cassette, compilers reading source code.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-green-500">2. Direct / Relative Access</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              File ko fixed-length logical records me divide kiya jata hai. Program kisi bhi arbitrary block <code className="text-primary font-bold">n</code> ko direct read ya write kar sakta hai bina pehle ke blocks ko scan kiye. <br />
              <strong>Example:</strong> Databases (SQL queries) on hard disk.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-purple-500">3. Indexed Access</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Direct access ke upar ek <em>Index table</em> banayi jati hai jisme pointers hote hain. Record search karne ke liye pehle index dekha jata hai, fir direct target address par jump kiya jata hai. <br />
              <strong>Example:</strong> Book index, large database search systems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Directory Structure */}
      <section id="directory-structure" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">3</span>
          Directory Structure
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Directory ek table ya container hota hai jo files ke naam aur unke associated File Control Blocks (FCBs) ko store karta hai.
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-primary">1. Single-Level Directory</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sabhi users ki saari files ek hi single directory me hoti hain. <em>Disadvantage:</em> Unique naming collision (do user same naam ki file nahi bana sakte) aur file grouping possible nahi hoti.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-green-500">2. Two-Level Directory</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Har user ke liye ek alag User File Directory (UFD) hoti hai aur top par Master File Directory (MFD) hoti hai. Isse naming collision solve hota hai lekin user-to-user file sharing difficult hoti hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-purple-500">3. Tree-Structured Directory (Most Common - Windows/Linux)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Root directory se tree hierarchical pattern me sub-directories aur files banti hain. User apni marzi se folders create aur nest kar sakta hai. Path <em>Absolute Path</em> (e.g. <code className="text-foreground">/home/harshit/docs/note.txt</code>) ya <em>Relative Path</em> (current working directory se) ho sakta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-foreground text-sm mb-1 text-amber-500">4. Acyclic-Graph Directory</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Directories aur files ko share karne ki permission deta hai (multiple directories same sub-directory ya file ko point kar sakti hain through Aliasing / Symlinks). Isme loops (cycles) allow nahi hote.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: File System Mounting, Sharing & Protection */}
      <section id="mounting-protection" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">4</span>
          File System Mounting, Sharing & Protection
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-primary">File System Mounting</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Kisi external storage volume (jaise USB flash drive ya hard disk partition) ko system ke active directory tree ke kisi folder (jise <strong>Mount Point</strong> kehte hain) se attach karne ke process ko <em>Mounting</em> kehte hain. <br />
              <strong>Linux Command:</strong> <code className="bg-muted px-1 rounded text-primary font-mono">mount /dev/sdb1 /mnt/usb</code>
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-base text-green-500">File Sharing & Protection</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Multi-user operating system me files ko unauthorized access aur corruption se bachane ke liye protection mechanisms hote hain:
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
              <li><strong>Access Control List (ACL):</strong> Har user aur uske allowed permissions ki list.</li>
              <li><strong>Linux UNIX Permissions:</strong> User (u), Group (g), Others (o) ke liye Read (4), Write (2), Execute (1) bits. E.g. <code className="text-foreground">chmod 755 script.sh</code></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: File System Structure & Inodes */}
      <section id="file-system-structure" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">5</span>
          File System Structure & Inodes (FCB)
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          File system layered architecture me design hota hai. Storage par file metadata ko represent karne ke liye <strong>FCB (File Control Block)</strong> use hota hai, jise UNIX/Linux me <strong>Inode</strong> (Index Node) kehte hain.
        </p>

        {/* Inode Structure Box */}
        <div className="p-5 rounded-xl border border-border bg-muted/20 space-y-3">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">UNIX/Linux Inode Structure</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Ek Inode me file ka data nahi hota, balki metadata aur physical disk blocks ke pointers hote hain:
          </p>
          <div className="grid md:grid-cols-4 gap-2 text-xs font-mono text-center">
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-primary font-bold">12 Direct Blocks</span>
              <p className="text-[10px] text-muted-foreground mt-1">Directly points to data blocks (Fast for small files)</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-green-500 font-bold">1 Single Indirect</span>
              <p className="text-[10px] text-muted-foreground mt-1">Points to a block full of data pointers</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-amber-500 font-bold">1 Double Indirect</span>
              <p className="text-[10px] text-muted-foreground mt-1">Points to indirect pointer blocks</p>
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <span className="text-purple-500 font-bold">1 Triple Indirect</span>
              <p className="text-[10px] text-muted-foreground mt-1">Supports massive multi-terabyte files</p>
            </div>
          </div>
        </div>

        {/* Allocation Methods Comparison */}
        <h3 className="text-xl font-bold text-foreground pt-2">Disk Block Allocation Methods</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">Method</th>
                <th className="p-2 border border-border">Description</th>
                <th className="p-2 border border-border">Advantages</th>
                <th className="p-2 border border-border">Disadvantages</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-primary border border-border">Contiguous Allocation</td>
                <td className="p-2 text-muted-foreground border border-border">Har file ko disk par lagatar contiguous blocks allocate hote hain.</td>
                <td className="p-2 text-green-500 border border-border">Excellent sequential and direct access speed. Minimum seek time.</td>
                <td className="p-2 text-rose-500 border border-border">External fragmentation hoti hai. File size pehle se pata hona chahiye.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-green-500 border border-border">Linked Allocation</td>
                <td className="p-2 text-muted-foreground border border-border">Har block ke paas agle block ka pointer hota hai (Linked List).</td>
                <td className="p-2 text-green-500 border border-border">No external fragmentation. File dynamically grow kar sakti hai.</td>
                <td className="p-2 text-rose-500 border border-border">Slow random/direct access (traversal needed). Pointer overhead.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-purple-500 border border-border">Indexed Allocation</td>
                <td className="p-2 text-muted-foreground border border-border">Ek dedicated index block sabhi pointers ko ek jagah store karta hai.</td>
                <td className="p-2 text-green-500 border border-border">Fast direct access without fragmentation.</td>
                <td className="p-2 text-rose-500 border border-border">Index block overhead (chhote files ke liye bhi poora block waste).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: Free-Space Management */}
      <section id="free-space-management" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">6</span>
          Free-Space Management
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Disk par jo blocks khali hain, unka hisab rakhne ke liye OS <strong>Free-Space Management</strong> techniques use karta hai:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-primary">1. Bit Vector / Bitmap</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Har disk block ke liye ek bit use hoti hai: <code className="text-green-500 font-bold">1 = Free block</code> aur <code className="text-rose-500 font-bold">0 = Allocated block</code>. Yeh simple aur fast first-free block search allow karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-green-500">2. Linked Free List</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sabhi free disk blocks ko ek linked list me joda jata hai. Head pointer pehle free block ko point karta hai, jo agle free block ka address store karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-amber-500">3. Grouping</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Pehla free block agle <code className="text-foreground">n</code> free blocks ke addresses ko store karta hai. Aakhiri address agle group ke block ko point karta hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h4 className="font-bold text-foreground text-sm text-purple-500">4. Counting</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Pehle continuous free block ka disk address aur uske sath continuous blocks ka <em>Count</em> store kiya jata hai. Space bachta hai jab blocks contiguous free hote hain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: Different Types of File Systems */}
      <section id="types-of-file-systems" className="space-y-6 study-section-reveal">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm">7</span>
          Different Types of File Systems (Comparison)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-border bg-card">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="p-2 border border-border">File System</th>
                <th className="p-2 border border-border">Developed By / OS</th>
                <th className="p-2 border border-border">Key Features</th>
                <th className="p-2 border border-border">Max File Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-2 font-bold text-primary border border-border">FAT32</td>
                <td className="p-2 text-muted-foreground border border-border">Microsoft (Legacy Windows, USB drives)</td>
                <td className="p-2 text-muted-foreground border border-border">Universal compatibility with TV, Cars, Mac, Linux. No journaling, simple table.</td>
                <td className="p-2 text-rose-500 font-semibold border border-border">4 GB limit</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-green-500 border border-border">NTFS</td>
                <td className="p-2 text-muted-foreground border border-border">Microsoft (Modern Windows 10/11)</td>
                <td className="p-2 text-muted-foreground border border-border">Journaling support (crash recovery), security permissions (ACL), encryption (EFS), compression.</td>
                <td className="p-2 text-green-500 font-semibold border border-border">16 TB - 16 EB</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-purple-500 border border-border">EXT4</td>
                <td className="p-2 text-muted-foreground border border-border">Linux Community</td>
                <td className="p-2 text-muted-foreground border border-border">Default Linux file system, fast journaling, extents allocation, delayed allocation, backwards compatible with ext2/ext3.</td>
                <td className="p-2 text-green-500 font-semibold border border-border">16 TB</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-amber-500 border border-border">exFAT</td>
                <td className="p-2 text-muted-foreground border border-border">Microsoft (Flash Drives / SD Cards)</td>
                <td className="p-2 text-muted-foreground border border-border">FAT32 jaisi cross-platform compatibility bina 4GB file size limit ke.</td>
                <td className="p-2 text-green-500 font-semibold border border-border">16 EB</td>
              </tr>
            </tbody>
          </table>
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
              <li>FCB ka full form kya hai? (File Control Block)</li>
              <li>FAT32 me maximum file size kitni ho sakti hai? (4 GB)</li>
              <li>Linux me file metadata kis data structure me store hota hai? (Inode)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">2-3 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>Sequential aur Direct access methods me antar bataiye.</li>
              <li>File System Mounting kya hoti hai?</li>
              <li>Bitmap (Bit Vector) technique dwara free space kaise manage hoti hai?</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">5 Marks Questions</div>
            <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
              <li>File block allocation methods: Contiguous, Linked aur Indexed allocation ko diagrams ke sath samjhaiye.</li>
              <li>UNIX/Linux Inode structure ka diagram banakar direct aur indirect pointers ko explain kijiye.</li>
              <li>FAT32, NTFS aur EXT4 file systems me antar spasht kijiye.</li>
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
          <li className="flex items-center gap-2">✓ <strong>File:</strong> Logical contiguous address space on secondary storage.</li>
          <li className="flex items-center gap-2">✓ <strong>Tree Directory:</strong> Most popular, allows nested folders and absolute/relative paths.</li>
          <li className="flex items-center gap-2">✓ <strong>Contiguous Allocation:</strong> Fast speed, but suffers from external fragmentation.</li>
          <li className="flex items-center gap-2">✓ <strong>Inode:</strong> UNIX metadata record containing 12 direct, 1 single, 1 double, and 1 triple indirect pointers.</li>
          <li className="flex items-center gap-2">✓ <strong>NTFS:</strong> Journaling, security, large file support for modern Windows.</li>
          <li className="flex items-center gap-2">✓ <strong>Free Space Bitmap:</strong> 1 = Free, 0 = Allocated block.</li>
        </ul>
      </section>
    </article>
  );
};

export default OsUnit5Content;
