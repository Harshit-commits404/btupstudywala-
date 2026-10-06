import React from 'react';
import {
  Compass,
  Clock,
  BookOpen,
  Lightbulb,
  Binary,
  Gauge,
  Image,
  Music,
  Film,
  HardDrive,
  Wifi,
  Zap,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Award,
  Volume2,
  Layers,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const MtUnit2Content = () => {
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
            Multimedia Technologies
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 12 Periods</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 font-medium border border-purple-500/20">
            Semester 5 (BTEUP)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Multimedia Compression
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (मल्टीमीडिया कम्प्रेशन: लॉसलेस एवं लॉसी कम्प्रेशन, हफमैन कोडिंग, RLE, JPEG, MPEG, MP3, MP4 एवं आधुनिक कोडेक्स)
          </p>
        </div>

        {/* Syllabus Topics Chips Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Official Syllabus:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Lossy & Lossless Compression
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Huffman Coding
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Run Length Encoding (RLE)
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            JPEG & MPEG
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            MP3 & MP4
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            LZMA, FLAC & ALAC
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            ITU G.722, H.261 & H.265
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/40 pl-4 py-1">
          Multimedia applications jaise streaming video, digital audio, high-resolution photography aur telecommunication me uncompressed data ka aakar (size) itna vishal hota hai ki use bina compression ke na to kisi hard drive par store kiya ja sakta hai aur na hi internet par stream kiya ja sakta hai. Is chapter mein hum Multimedia Compression ke moolbhoot siddhanton, Lossy aur Lossless compression ke antar, entropy algorithms (Huffman, RLE, LZMA), standard image/video frameworks (JPEG, MPEG, H.261, H.265), aur high-fidelity audio codecs (MP3, MP4, FLAC, ALAC, ITU G.722) ko BTEUP Polytechnic ke 10-mark descriptive standards ke anusar deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* SECTION 1: COMPRESSION TECHNIQUES INTRO & LOSSY VS LOSSLESS */}
      {/* ========================================================= */}
      <section id="compression-intro" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.0 • 10-MARK CORE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            1. Multimedia Compression Fundamentals & Techniques
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटा कम्प्रेशन का अर्थ, आवश्यकता, स्टोरेज व बैंडविड्थ चुनौतियां, लॉसी एवं लॉसलेस कम्प्रेशन का विस्तृत अध्ययन)
          </div>
        </div>

        {/* 1.1 What is Data Compression */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          1.1 What is Data Compression? (डेटा कम्प्रेशन क्या है?)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Data Compression</strong> ek aisi computer engineering process aur mathematical takneek hai jisme kisi digital file, image, audio ya video ke mool aakar (original bit size) ko kam (reduce) kiya jata hai, taaki use kam disk storage space par store kiya ja sake aur transmission networks (internet, Wi-Fi, satellite) par kam bandwidth kharch karke tezi se bheja ja sake.
        </p>

        {/* Formal Definition Box */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Formal Definition • Data Compression</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "Data compression is the process of encoding information using fewer bits than the original representation by identifying and eliminating statistical, spatial, temporal, and psycho-perceptual redundancies present within the data."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Kisi bhi digital data mein jo baatein baar-baar repeat ho rahi hain ya jo information insaan ki aankhon aur kaanon ke liye zaroori nahi hai, use pehchan kar hata dena aur file ko kam bits mein pack karna hi Data Compression kehlata hai.
            </span>
          </div>
        </div>

        {/* Compression Metrics: Ratio and Redundancy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-1 font-mono flex items-center gap-2">
              <Binary className="w-4 h-4" /> 1. Compression Ratio (CR)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Original uncompressed file ke size aur compressed file ke size ke anupaat ko Compression Ratio kehte hain:
            </p>
            <div className="p-2.5 rounded-lg bg-surface border border-border font-mono text-xs text-center font-bold text-slate-900 dark:text-white">
              Compression Ratio (CR) = Size of Original Data / Size of Compressed Data
            </div>
            <p className="text-[11px] text-text-muted mt-2">
              Udaharan: Agar 100 MB ki video file compress hokar 10 MB ki ban jaye, to CR = 100/10 = 10:1 hota hai.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20">
            <h4 className="font-bold text-purple-800 dark:text-purple-300 text-sm mb-1 font-mono flex items-center gap-2">
              <Gauge className="w-4 h-4" /> 2. Relative Data Redundancy (RD)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              File mein kitna percent faltu (redundant) data maujood tha jise compression ne safalta-purvak nikal diya:
            </p>
            <div className="p-2.5 rounded-lg bg-surface border border-border font-mono text-xs text-center font-bold text-slate-900 dark:text-white">
              Relative Redundancy (RD) = 1 - (1 / CR)
            </div>
            <p className="text-[11px] text-text-muted mt-2">
              Agar CR = 10:1 ho, to RD = 1 - 0.1 = 0.9 yaani 90% faltu data successfully remove kar diya gaya.
            </p>
          </div>
        </div>

        {/* 1.2 Why Multimedia Data Requires Compression */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.2 Why Multimedia Data Requires Compression (मल्टीमीडिया डेटा को कम्प्रेशन की आवश्यकता क्यों है?)
        </h3>
        <p className="mb-4 leading-relaxed">
          Sadharan computer text files (jaise notepad txt file ya source code) ka aakar kuch kilobytes (KB) me hota hai. Iske vipreet, uncompressed multimedia files (images, audio, high-definition video) ka size itna vishal hota hai ki modern supercomputers bhi unhe bina compression ke practical life me manage nahi kar sakte:
        </p>

        {/* Mathematical Proof of Huge File Sizes */}
        <div className="space-y-4 my-6">
          {/* Card 1: Uncompressed Image */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Image className="w-4 h-4" />
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Case 1: Uncompressed 4K High-Resolution Still Image
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 ml-auto">
                24.88 MB Per Single Photo
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Ek standard 4K Ultra-HD photo ka resolution 3840×2160 pixels hota hai. Har pixel 24-bit True Color (3 bytes: Red, Green, Blue) store karta hai:
            </p>
            <div className="p-3 bg-secondary/50 rounded-lg font-mono text-xs text-text-secondary border border-border">
              Total Pixels = 3840 × 2160 = 8,294,400 pixels<br />
              Total Bytes = 8,294,400 × 3 Bytes = 24,883,200 Bytes ≈ <strong>24.88 MegaBytes (MB)</strong><br />
              Nateeja: Bina compression ke sirf 40 photos lene par 1 GB memory card poora bhar jayega!
            </div>
          </div>

          {/* Card 2: Uncompressed Audio */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <Music className="w-4 h-4" />
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Case 2: Uncompressed CD-Quality Audio Track (44.1 kHz, 16-bit Stereo)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 ml-auto">
                10.58 MB Per Minute
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Standard CD audio sampling rate 44,100 samples/sec (44.1 kHz), 16 bits (2 bytes) per sample, aur 2 channels (Stereo - Left & Right) par record hota hai:
            </p>
            <div className="p-3 bg-secondary/50 rounded-lg font-mono text-xs text-text-secondary border border-border">
              Bitrate = 44,100 samples × 16 bits × 2 channels = 1,411,200 bits/sec (1.411 Mbps)<br />
              Per Second Data = 1,411,200 / 8 = 176,400 Bytes/sec ≈ 176.4 KB/s<br />
              1 Minute Song = 176.4 KB × 60 seconds ≈ <strong>10.58 MB per minute</strong><br />
              Nateeja: Ek 5-minute ka gaana lagbhag 53 MB ka hoga. 100 gaane store karne me 5.3 GB space khatam ho jayega!
            </div>
          </div>

          {/* Card 3: Uncompressed Video */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Film className="w-4 h-4" />
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Case 3: Uncompressed Full HD Video (1920×1080 @ 30 FPS)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 ml-auto">
                11.20 GB Per Minute!
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Full HD video 1920×1080 resolution par prati second 30 full-color frames render karti hai:
            </p>
            <div className="p-3 bg-secondary/50 rounded-lg font-mono text-xs text-text-secondary border border-border">
              Single Frame = 1920 × 1080 × 3 Bytes = 6,220,800 Bytes ≈ 6.22 MB<br />
              Per Second (30 FPS) = 6.22 MB × 30 = <strong>186.6 MB / second</strong><br />
              1 Minute Video = 186.6 MB × 60 = <strong>11.20 GigaBytes (GB)</strong><br />
              2 Hour Movie = 11.20 GB × 120 = <strong>1,344 GB (1.34 TeraBytes!)</strong><br />
              Bandwidth Requirement = 186.6 MB/s × 8 = <strong>1.49 Gbps continuous speed!</strong>
            </div>
          </div>
        </div>

        {/* The 4 Major Demands of Compression */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          Core Factors Driving Compression in Multimedia Systems:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 text-brand-600 mb-1 font-bold text-sm">
              <HardDrive className="w-4 h-4" /> 1. Storage Constraints
            </div>
            <p className="text-xs text-text-secondary">
              Bina compression ke 1 movie ke liye 1.3 TB SSD chahiye hoti. Compression ke baad wahi movie 1.5 GB me fit ho jaati hai.
            </p>
          </div>
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 text-blue-600 mb-1 font-bold text-sm">
              <Wifi className="w-4 h-4" /> 2. Bandwidth Bottleneck
            </div>
            <p className="text-xs text-text-secondary">
              Aam user ka internet connection 20-100 Mbps hota hai, jabki raw video ko 1500 Mbps chahiye. Compression ise 5 Mbps tak le aata hai.
            </p>
          </div>
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 text-emerald-600 mb-1 font-bold text-sm">
              <Zap className="w-4 h-4" /> 3. Real-Time Streaming
            </div>
            <p className="text-xs text-text-secondary">
              YouTube, Netflix, Zoom aur WhatsApp video calls compression ke bina zero buffer aur real-time live telecast kar hi nahi sakte.
            </p>
          </div>
          <div className="p-3.5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 text-purple-600 mb-1 font-bold text-sm">
              <Cpu className="w-4 h-4" /> 4. Bus & Memory Bandwidth
            </div>
            <p className="text-xs text-text-secondary">
              Computer motherboard buses aur RAM uncompressed video ke continuous gigabytes ko bina choke hue display card tak nahi pahuncha sakti.
            </p>
          </div>
        </div>

        {/* 1.3 Types of Redundancy in Multimedia */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.3 Types of Redundancies Exploited by Compression (डेटा में फालतूपन के प्रकार)
        </h3>
        <p className="mb-4 leading-relaxed">
          Compression koi jaadu (magic) nahi hai; yeh digital data ke andar maujood <strong>Redundancy (अनावश्यक दोहराव)</strong> ko khojkar use remove karne ka ganit hai. Multimedia data mein mukhya roop se 4 prakar ki redundancy hoti hai:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-sm sm:text-base leading-relaxed">
          <li>
            <strong>1. Coding Redundancy (कोडिंग रिडंडेंसी):</strong> Jab sabhi symbols (characters/pixels) ko ek saman fixed-length bits (jaise standard 8-bit ASCII) di jaati hain, chahe koi symbol hazaron baar aaye aur koi ek baar. Isko Huffman Coding jaise variable-length coding se theek kiya jata hai.
          </li>
          <li>
            <strong>2. Spatial / Inter-pixel Redundancy (स्थानिक रिडंडेंसी):</strong> Ek hi image ya frame ke andar aas-paas ke padosi pixels (neighbouring pixels) ka color aur brightness lagbhag ek jaisa hota hai (jaise neela aasmaan ya safed deewar). Inhe bar-bar store karne ke bajaye RLE aur DCT (Discrete Cosine Transform) se compress kiya jata hai.
          </li>
          <li>
            <strong>3. Temporal / Inter-frame Redundancy (सामयिक रिडंडेंसी):</strong> Video ke do lagatar aane wale frames (Frame 1 aur Frame 2) mein 95% background bilkul wahi rehta hai, sirf ek character ka haath ya chehra thoda hilta hai. Poore frame ko dobara store karne ke bajaye sirf dono frames ke beech ka antar (difference / motion vector) store kiya jata hai (MPEG ka siddhant).
          </li>
          <li>
            <strong>4. Psycho-visual & Psycho-acoustic Redundancy (मानव इंद्रिय रिडंडेंसी):</strong> Insaan ki aankhein brightness (roshni) ke badlaav ko bahut baareeki se dekh sakti hain lekin color (chrominance) ke baareek badlaav ko nahi pehchaan sakti. Isi tarah insaan ke kaan tez aawaz ke peeche aane wali halki aawaz ko nahi sun paate. Is information ko bina kisi dhyan dene yogya quality loss ke permanent hata diya jata hai (Lossy compression ka aadhar).
          </li>
        </ul>

        {/* 1.4 End-to-End Compression Architecture Flowchart */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.4 End-to-End Compression-Decompression Architecture
        </h3>
        <p className="mb-4 leading-relaxed">
          Kisi bhi multimedia compression system ka basic workflow do prateek bhagon me vibhajit hota hai: <strong>Encoder (कम्प्रेशन प्रक्रिया)</strong> aur <strong>Decoder (डिकम्प्रेशन प्रक्रिया)</strong>:
        </p>

        {/* EDUCATIONAL FIGURE 2.1: GENERAL COMPRESSION PIPELINE */}
        <EducationalFigure
          caption="Figure 2.1: Architectural Block Diagram of Generalized Multimedia Compression & Decompression Pipeline"
          source="ISO/IEC Data Compression Standards Architecture"
          license="Open Educational Diagram"
          maxWidth="max-w-3xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              End-to-End Compression Pipeline • Original Data → Encoding → Storage/Channel → Decoding → Reconstructed Data
            </div>

            {/* Pipeline Stage Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-xs font-mono max-w-2xl mx-auto items-center">
              {/* Box 1 */}
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-300">
                <strong className="block text-sm">ORIGINAL DATA</strong>
                <p className="text-[10px] text-text-muted mt-1">Raw Audio/Video/Image</p>
                <span className="text-[10px] bg-blue-200 dark:bg-blue-900/60 px-1.5 py-0.5 rounded mt-2 inline-block font-bold">Large Size</span>
              </div>

              {/* Arrow */}
              <div className="text-text-muted hidden md:flex justify-center">
                <ArrowRight className="w-5 h-5 text-brand-500" />
              </div>

              {/* Box 2: Encoder */}
              <div className="p-3 rounded-xl bg-purple-500/10 border-2 border-purple-500/50 text-purple-700 dark:text-purple-300 shadow-sm">
                <strong className="block text-sm">ENCODER</strong>
                <p className="text-[10px] text-text-muted mt-1">Transform → Quantize → Entropy Coding</p>
                <span className="text-[10px] bg-purple-200 dark:bg-purple-900/60 px-1.5 py-0.5 rounded mt-2 inline-block font-bold">Compressor</span>
              </div>

              {/* Arrow */}
              <div className="text-text-muted hidden md:flex justify-center">
                <ArrowRight className="w-5 h-5 text-brand-500" />
              </div>

              {/* Box 3: Compressed Storage */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                <strong className="block text-sm">COMPRESSED BITS</strong>
                <p className="text-[10px] text-text-muted mt-1">SSD Disk / Wi-Fi Network</p>
                <span className="text-[10px] bg-emerald-200 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded mt-2 inline-block font-bold">Compact Size</span>
              </div>
            </div>

            <div className="my-3 flex items-center justify-center gap-2 text-xs text-text-muted">
              <span>↓ Transmission Over Internet / Playback from Disk ↓</span>
            </div>

            {/* Decoder to Output */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-xs font-mono max-w-2xl mx-auto items-center">
              {/* Box 3 again */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                <strong className="block text-sm">COMPRESSED BITS</strong>
                <p className="text-[10px] text-text-muted mt-1">Input to Player</p>
              </div>

              {/* Arrow */}
              <div className="text-text-muted hidden md:flex justify-center">
                <ArrowRight className="w-5 h-5 text-brand-500" />
              </div>

              {/* Box 4: Decoder */}
              <div className="p-3 rounded-xl bg-amber-500/10 border-2 border-amber-500/50 text-amber-700 dark:text-amber-300 shadow-sm">
                <strong className="block text-sm">DECODER</strong>
                <p className="text-[10px] text-text-muted mt-1">Entropy Decode → Inverse Transform</p>
                <span className="text-[10px] bg-amber-200 dark:bg-amber-900/60 px-1.5 py-0.5 rounded mt-2 inline-block font-bold">Decompressor</span>
              </div>

              {/* Arrow */}
              <div className="text-text-muted hidden md:flex justify-center">
                <ArrowRight className="w-5 h-5 text-brand-500" />
              </div>

              {/* Box 5: Recovered Data */}
              <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300">
                <strong className="block text-sm">RECOVERED DATA</strong>
                <p className="text-[10px] text-text-muted mt-1">Exact (Lossless) OR Approx (Lossy)</p>
                <span className="text-[10px] bg-teal-200 dark:bg-teal-900/60 px-1.5 py-0.5 rounded mt-2 inline-block font-bold">Screen / Speaker</span>
              </div>
            </div>
          </div>
        </EducationalFigure>

        {/* 1.5 Lossy Compression in Detail */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          1.5 Lossy Compression in Detail (लॉसी कम्प्रेशन का विस्तृत अध्ययन)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Lossy Compression</strong> ek aisi compression takneek hai jisme data size ko dramatically kam karne ke liye un baareek details aur information ko permanently delete (discard) kar diya jata hai jinka insaan ke dekhne ya sunne par koi khas asar nahi padta. Decompression ke baad prapt hua data mool data ke bilkul 100% saman nahi hota, balki uska ek <em>close approximation (nikat-tam anumaan)</em> hota hai.
        </p>

        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Working Mechanism of Lossy Compression
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Lossy compression mukhya roop se <strong>Quantization</strong> ke siddhant par kaam karta hai. Pehle signal ko Mathematical Transforms (jaise DCT - Discrete Cosine Transform ya Wavelet) ke dwara frequency components me tod diya jata hai. Fir high-frequency details (jinhe insaan ki aankhein ya kaan kam notice karte hain) ko round-off ya zero kar diya jata hai. Zero banne ke baad entropy coding se size 10 se 50 guna tak kam ho jata hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Why Information is Removed (Psycho-Perceptual Filtering)
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Human Visual System (HVS) brightness (luminance) ke prati atyadhik sensitive hai lekin color nuances (chrominance) ke prati insensitive hai. Usi tarah Human Auditory System (HAS) 20 Hz se 20,000 Hz ke beech kaam karta hai aur tez sound ke bagal me aane wali faint sound ko mask kar deta hai. Lossy algorithms isi biological limitation ka faayda uthakar data eliminate karte hain.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Quality vs Compression Ratio Tradeoff
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Lossy compression me user khud tay kar sakta hai ki use kitna compression chahiye (Quality Slider 1 to 100). Higher compression ratio (e.g. 50:1) chunne par file size bahut chota ho jayega lekin visual artefacts (blocking, blurriness, ringing) dikhai dene lagenge. Moderate ratio (10:1 se 20:1) par insaan ki aankh quality difference pehchaan hi nahi paati (Perceptually Lossless).
            </p>
          </div>
        </div>

        {/* When to use and when to avoid Lossy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20">
            <strong className="text-emerald-800 dark:text-emerald-300 block text-sm font-bold mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> When to Use Lossy Compression (उपयोग कहाँ करें?)
            </strong>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
              <li>Internet streaming video (YouTube, Netflix, Prime Video - MP4/H.264/H.265).</li>
              <li>Everyday digital photography & social media (Instagram, WhatsApp - JPEG, WebP).</li>
              <li>Music streaming aur podcasts (Spotify, Apple Music - MP3, AAC).</li>
              <li>Live real-time teleconferencing (Zoom, Teams - H.264/Opus).</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20">
            <strong className="text-rose-800 dark:text-rose-300 block text-sm font-bold mb-1.5 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600" /> When to Strictly Avoid Lossy (कहाँ उपयोग नहीं करना चाहिए?)
            </strong>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
              <li>Medical Diagnostic Imaging (X-Ray, MRI, CT Scan - ek pixel ka loss galat report bana sakta hai!).</li>
              <li>Text files, program source code, executables (.exe, .c, .py - 1 bit loss se crash ho jayega).</li>
              <li>Forensic and Legal evidence audio/video recordings.</li>
              <li>Master archival copies in film studios (jahan bar-bar re-editing honi ho).</li>
            </ul>
          </div>
        </div>

        {/* 1.6 Lossless Compression in Detail */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          1.6 Lossless Compression in Detail (लॉसलेस कम्प्रेशन का विस्तृत अध्ययन)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Lossless Compression</strong> ek aisi mathematical reversible compression takneek hai jisme data ko compress karne ke baad jab decompress kiya jata hai, to original data <strong>exact bit-for-bit (100% shuddh)</strong> wapas recover ho jata hai. Isme mool file ka ek bhi bit ya information nast (destroy) nahi hoti.
        </p>

        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Working Mechanism of Lossless Compression
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Lossless compression sirf <strong>Statistical Redundancy</strong> aur <strong>Coding Redundancy</strong> ko target karta hai. Yeh file me aane wale repeated sequences ko pehchan kar unhe chote codes ya dictionary pointers se replace karta hai (jaise Huffman Coding, RLE, LZMA, LZW). Chuki koi information feki nahi jati, isliye decompressor inhi pointers aur tables ko reverse karke 100% exact mool data wapas bana deta hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Compression Ratio Limits (Shannon's Entropy Theorem)
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Claude Shannon ke Information Theory ke anusar, kisi bhi data ko uski <em>Entropy (minimum information content)</em> se zyada compress nahi kiya ja sakta bina information gawaye. Isliye Lossless compression ka compression ratio aamtaur par <strong>1.5:1 se 3:1</strong> ke beech hi rehta hai (50% se 65% size reduction). Isse zyada reduction bina lossy techniques ke sambhav nahi hota.
            </p>
          </div>
        </div>

        {/* 1.7 Master Comparison Table: Lossy vs Lossless */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4">
          1.7 Master Comparison: Lossy vs Lossless Compression (तुलनात्मक तालिका)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          BTEUP semester examinations mein aksar poocha jane wala 5 se 10-mark ka standard comparison:
        </p>

        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs my-5">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2.5 px-3.5 font-bold text-slate-900 dark:text-white">Comparison Parameter</th>
                <th className="py-2.5 px-3.5 font-bold text-amber-600 dark:text-amber-400">Lossy Compression</th>
                <th className="py-2.5 px-3.5 font-bold text-emerald-600 dark:text-emerald-400">Lossless Compression</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">1. Data Loss (डेटा की हानि)</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Haan, kuch baareek un-noticeable information hamesha ke liye discard ho jati hai.</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Nahi, ek bhi bit ka loss nahi hota. Zero data loss.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">2. Data Recovery (मूल डेटा की पुनर्प्राप्ति)</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Original data 100% exact wapas nahi milta (sirf approximation milta hai).</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Decompression par 100% exact bit-for-bit identical original data recover hota hai.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">3. Compression Ratio (कम्प्रेशन अनुपात)</td>
                <td className="py-2.5 px-3.5 text-text-secondary font-mono">Bahut high (10:1 se lekar 100:1 tak aam hai).</td>
                <td className="py-2.5 px-3.5 text-text-secondary font-mono">Moderate / Low (1.5:1 se lekar 3:1 tak simit).</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">4. Final File Size (अंतिम साइज)</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Atyadhik chota (original ka sirf 1% se 10%).</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Moderate (original ka 40% se 65%).</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">5. Redundancy Targeted</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Psycho-visual aur Psycho-acoustic redundancy (Human perception).</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Coding redundancy aur Statistical repetitive patterns.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">6. Quality Degradation</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Har baar re-encode karne par quality thodi gir sakti hai (Generation Loss).</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Lakhon baar compress-decompress karne par bhi zero quality loss.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">7. Standard Formats & Algorithms</td>
                <td className="py-2.5 px-3.5 text-text-secondary font-mono">JPEG, MPEG, MP3, MP4, H.261, H.264, H.265.</td>
                <td className="py-2.5 px-3.5 text-text-secondary font-mono">Huffman, RLE, LZMA, FLAC, ALAC, PNG, ZIP, GIF.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">8. Ideal Applications</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Consumer video streaming, web photos, online gaming, video calls.</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Medical imaging (X-Ray/MRI), software binaries, text files, studio master tracks.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Exam Point Box */}
        <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 my-6">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm mb-1">
            <Award className="w-4 h-4" />
            <span>Exam Point • 10-Mark Question Strategy:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Agar exam mein question aaye: <em>"Define Multimedia Compression. Explain why compression is essential in multimedia systems and differentiate between Lossy and Lossless compression with examples (10 Marks)"</em>, to sabse pehle Formal Definition likhein, Compression Ratio aur Redundancy ka formula likhein, uncompressed video/audio/image ki calculation (11 GB per min video) dekar need samjhayein, Figure 2.1 ka pipeline banayein, aur upar di gayi 8-point comparison table likhkar answer samapt karein.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: LOSSLESS METHODS (HUFFMAN, RLE, LZMA) */}
      {/* ========================================================= */}
      <section id="lossless-methods" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.0 • ALGORITHMS
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            2. Lossless Methods: Huffman Coding, RLE & LZMA
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (हफमैन कोडिंग, रन लेंथ एन्कोडिंग [RLE] एवं LZMA डिक्शनरी कम्प्रेशन: सिद्धांत, वर्किंग, उदाहरण एवं ट्री डायग्राम)
          </div>
        </div>

        {/* 2.1 Huffman Coding */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          2.1 Huffman Coding in Detail (हफमैन कोडिंग - 10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Huffman Coding</strong> ek prasiddh lossless entropy encoding algorithm hai jise 1952 me <strong>David A. Huffman</strong> dwara viksit kiya gaya tha. Yeh statistical data compression ka aadhar hai aur widely used formats jaise JPEG, MP3, GZIP aur ZIP ke antim stage par entropy coding ke roop me kaam karta hai.
        </p>

        {/* Core Principle of Huffman */}
        <div className="my-4 p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-1 font-mono flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> Core Idea: Variable-Length Coding (परिवर्तनशील लम्बाई कोड)
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Traditional computing me har character ko fixed 8 bits (1 byte) di jaati hain, chahe wo character file me kitni bhi baar aaye. Huffman coding ka mul mantar yeh hai:
            <br />
            <strong>"Jo symbol sabse zyada baar repeat hota hai (Highest Frequency), use sabse CHHOTA binary code (kam bits) diya jata hai; aur jo symbol sabse kam baar aata hai (Lowest Frequency), use BADA binary code (zyada bits) diya jata hai."</strong>
            <br />
            Is prakar average code length drastically ghat jaati hai aur file size kam ho jata hai.
          </p>
        </div>

        {/* Prefix Property */}
        <div className="p-4 rounded-xl border border-border bg-surface my-4">
          <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-1">
            The Prefix-Free Property (प्रीफिक्स-फ्री गुण)
          </strong>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Huffman Code ki sabse badi visheshata yeh hai ki yeh ek <strong>Prefix Code</strong> hota hai. Iska arth yeh hai ki <em>kisi bhi symbol ka binary code kisi doosre symbol ke code ka starting part (prefix) nahi ho sakta</em>. Udaharan ke liye, agar 'A' ka code '0' hai, to kisi bhi anya symbol ka code '0' se shuru nahi hoga (jaise '01' ya '001' allowed nahi hoga). Is property ke karan decompressor bina kisi comma ya space separator ke continuous bitstream ko bina kisi confusion ke perfect decode kar leta hai.
          </p>
        </div>

        {/* Step-by-Step Algorithm */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          Step-by-Step Huffman Tree Construction Algorithm:
        </h4>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-xs sm:text-sm leading-relaxed text-text-secondary">
          <li><strong>Step 1 (Frequency Calculation):</strong> Data stream me maujood sabhi symbols ki aavriti (frequencies / count) calculate karein.</li>
          <li><strong>Step 2 (Node Creation):</strong> Pratyek symbol ke liye ek leaf node banayein jisme symbol aur uski frequency likhi ho, aur sabhi nodes ko frequency ke ascending order (chote se bade) me arrange karein.</li>
          <li><strong>Step 3 (Merge Two Smallest):</strong> List me se sabse kam frequency wale do nodes ko uthayein. Ek naya internal parent node banayein jiski frequency in dono ke yog (sum) ke barabar ho.</li>
          <li><strong>Step 4 (Branch Assignment):</strong> Left branch ko binary bit <strong>'0'</strong> aur Right branch ko binary bit <strong>'1'</strong> assign karein.</li>
          <li><strong>Step 5 (Repeat):</strong> Is naye parent node ko wapas list me dalein aur Step 3 ko tab tak repeat karein jab tak ki sirf ek aakhiri root node na bach jaye.</li>
          <li><strong>Step 6 (Code Generation):</strong> Root node se lekar pratyek leaf node tak travel karke raste ke 0s aur 1s ko jodkar final binary code prapt karein.</li>
        </ol>

        {/* Worked Example */}
        <div className="p-5 rounded-2xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-500/[0.04] my-6">
          <h4 className="font-bold text-brand-700 dark:text-brand-400 text-sm sm:text-base mb-2 font-mono flex items-center gap-2">
            <Award className="w-4 h-4" /> Worked Numerical Example (BTEUP Exam Format)
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3">
            Maan lijiye hamare paas 100 characters ka ek chhota message hai jisme 5 symbols (A, B, C, D, E) hain:
          </p>
          <div className="overflow-x-auto my-3">
            <table className="w-full text-xs font-mono bg-surface rounded-lg border border-border">
              <thead>
                <tr className="bg-secondary/60 border-b border-border">
                  <th className="p-2 text-left">Symbol</th>
                  <th className="p-2 text-center">Frequency (Count)</th>
                  <th className="p-2 text-center">Huffman Assigned Code</th>
                  <th className="p-2 text-center">Code Length (Bits)</th>
                  <th className="p-2 text-center">Total Bits (Freq × Length)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-2 font-bold text-blue-600">A</td>
                  <td className="p-2 text-center">45 (Highest)</td>
                  <td className="p-2 text-center font-bold text-emerald-600">0</td>
                  <td className="p-2 text-center">1 bit</td>
                  <td className="p-2 text-center">45 × 1 = 45 bits</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-blue-600">B</td>
                  <td className="p-2 text-center">25</td>
                  <td className="p-2 text-center font-bold text-emerald-600">10</td>
                  <td className="p-2 text-center">2 bits</td>
                  <td className="p-2 text-center">25 × 2 = 50 bits</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-blue-600">C</td>
                  <td className="p-2 text-center">15</td>
                  <td className="p-2 text-center font-bold text-emerald-600">110</td>
                  <td className="p-2 text-center">3 bits</td>
                  <td className="p-2 text-center">15 × 3 = 45 bits</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-blue-600">D</td>
                  <td className="p-2 text-center">10</td>
                  <td className="p-2 text-center font-bold text-emerald-600">1110</td>
                  <td className="p-2 text-center">4 bits</td>
                  <td className="p-2 text-center">10 × 4 = 40 bits</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-blue-600">E</td>
                  <td className="p-2 text-center">5 (Lowest)</td>
                  <td className="p-2 text-center font-bold text-emerald-600">1111</td>
                  <td className="p-2 text-center">4 bits</td>
                  <td className="p-2 text-center">5 × 4 = 20 bits</td>
                </tr>
                <tr className="bg-secondary/40 font-bold">
                  <td className="p-2" colSpan={4}>Total Bits Required with Huffman Coding:</td>
                  <td className="p-2 text-center text-brand-600 font-extrabold">200 Bits</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1 bg-surface p-3 rounded-lg border border-border mt-3">
            <p><strong>Fixed-Length Comparison:</strong> Agar hum standard 3-bit fixed length code use karte ($2^3 = 8 \ge 5$ symbols), to 100 characters ko encode karne ke liye $100 \times 3 =$ <strong>300 Bits</strong> lagte.</p>
            <p><strong>Space Savings:</strong> $(300 - 200) / 300 = $ <strong>33.33% Bandwidth & Storage Saved!</strong></p>
            <p><strong>Average Bit Length:</strong> $200 / 100 = $ <strong>2.0 bits per character</strong> (fixed 3-bit ke mukable 33% kam).</p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 2.2: HUFFMAN TREE DIAGRAM */}
        <EducationalFigure
          caption="Figure 2.2: Huffman Binary Coding Tree Constructed by Iteratively Merging Minimum Frequency Nodes"
          source="Wikimedia Commons • Huffman Coding Tree"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Huffman_tree_2.svg"
          license="CC BY-SA 3.0"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">
              Huffman Tree Hierarchy • Root (100) down to Variable Length Leaves
            </div>

            {/* Tree SVG Visualization */}
            <svg viewBox="0 0 500 240" className="w-full max-w-lg mx-auto overflow-visible text-xs font-mono">
              {/* Root */}
              <circle cx="250" cy="25" r="18" className="fill-purple-500/20 stroke-purple-600 stroke-2" />
              <text x="250" y="29" textAnchor="middle" className="font-bold fill-purple-900 dark:fill-purple-200 text-[11px]">100</text>

              {/* Branch Left to A (bit 0) */}
              <line x1="235" y1="35" x2="130" y2="85" className="stroke-slate-400 stroke-2" />
              <text x="175" y="55" className="fill-emerald-600 font-bold text-xs">bit '0'</text>
              <rect x="100" y="85" width="60" height="34" rx="8" className="fill-blue-500/20 stroke-blue-600 stroke-2" />
              <text x="130" y="100" textAnchor="middle" className="font-bold fill-blue-900 dark:fill-blue-200">A (45)</text>
              <text x="130" y="113" textAnchor="middle" className="text-[10px] fill-emerald-600 font-bold">Code: '0'</text>

              {/* Branch Right to Node 55 (bit 1) */}
              <line x1="265" y1="35" x2="350" y2="85" className="stroke-slate-400 stroke-2" />
              <text x="315" y="55" className="fill-emerald-600 font-bold text-xs">bit '1'</text>
              <circle cx="350" cy="95" r="16" className="fill-purple-500/20 stroke-purple-600 stroke-2" />
              <text x="350" y="99" textAnchor="middle" className="font-bold fill-purple-900 dark:fill-purple-200 text-[10px]">55</text>

              {/* Node 55 Left to B (bit 0) */}
              <line x1="337" y1="105" x2="270" y2="150" className="stroke-slate-400 stroke-2" />
              <text x="295" y="125" className="fill-emerald-600 font-bold text-[10px]">0</text>
              <rect x="240" y="150" width="60" height="34" rx="8" className="fill-blue-500/20 stroke-blue-600 stroke-2" />
              <text x="270" y="165" textAnchor="middle" className="font-bold fill-blue-900 dark:fill-blue-200">B (25)</text>
              <text x="270" y="178" textAnchor="middle" className="text-[10px] fill-emerald-600 font-bold">Code: '10'</text>

              {/* Node 55 Right to Node 30 (bit 1) */}
              <line x1="363" y1="105" x2="420" y2="150" className="stroke-slate-400 stroke-2" />
              <text x="395" y="125" className="fill-emerald-600 font-bold text-[10px]">1</text>
              <circle cx="420" cy="155" r="14" className="fill-purple-500/20 stroke-purple-600 stroke-2" />
              <text x="420" y="159" textAnchor="middle" className="font-bold fill-purple-900 dark:fill-purple-200 text-[10px]">30</text>

              {/* Node 30 Left to C (bit 0) */}
              <line x1="410" y1="165" x2="365" y2="195" className="stroke-slate-400 stroke-2" />
              <text x="380" y="180" className="fill-emerald-600 font-bold text-[9px]">0</text>
              <rect x="335" y="195" width="55" height="30" rx="6" className="fill-blue-500/20 stroke-blue-600 stroke-2" />
              <text x="362" y="209" textAnchor="middle" className="font-bold fill-blue-900 dark:fill-blue-200 text-[10px]">C (15)</text>
              <text x="362" y="220" textAnchor="middle" className="text-[9px] fill-emerald-600 font-bold">'110'</text>

              {/* Node 30 Right to Node 15 (bit 1) */}
              <line x1="430" y1="165" x2="465" y2="195" className="stroke-slate-400 stroke-2" />
              <text x="450" y="180" className="fill-emerald-600 font-bold text-[9px]">1</text>
              <circle cx="465" cy="205" r="12" className="fill-purple-500/20 stroke-purple-600 stroke-2" />
              <text x="465" y="209" textAnchor="middle" className="font-bold fill-purple-900 dark:fill-purple-200 text-[9px]">15</text>
            </svg>
            <p className="text-[11px] text-text-muted mt-2">
              Leaves D (10, Code: '1110') and E (5, Code: '1111') split below Node 15. Frequent symbols remain near root for shortest bitpaths.
            </p>
          </div>
        </EducationalFigure>

        {/* Advantages and Limitations of Huffman */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">Advantages of Huffman Coding:</strong>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
              <li>Mathematically optimal code length for a given set of character probabilities.</li>
              <li>Prefix property guarantees deterministic decoding without ambiguity.</li>
              <li>100% Lossless — original message exact bit-perfect recover hota hai.</li>
              <li>JPEG aur MP3 jaise international standards ke final stage par entropy encoder ke roop me globally used.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">Limitations of Huffman Coding:</strong>
            <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
              <li>Two-Pass overhead: Encoder ko pehle poori file padhkar frequency calculate karni padti hai, fir doosre pass me encode karna hota hai.</li>
              <li>Huffman Tree (Codebook) ko compressed file ke header me saath bhejna padta hai, jisse bahut chhoti files ka size kam hone ke bajaye badh sakta hai.</li>
            </ul>
          </div>
        </div>

        {/* 2.2 Run Length Encoding (RLE) */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          2.2 Run Length Encoding (RLE) in Detail (रन लेंथ एन्कोडिंग - 10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Run Length Encoding (RLE)</strong> data compression ka sabse saral aur tezi se execute hone wala lossless algorithm hai. Iska basic siddhant continuous repeated data (lagatar aane wale ek saman symbols) ko unke count (lambai) aur symbol value se replace karna hai.
        </p>

        {/* Basic Concept and Working */}
        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Definition of a "Run"
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Kisi data sequence mein ek hi character ya value jab bina kisi rukawat ke lagatar kai baar aati hai, to us repeated block ko <strong>"Run"</strong> kaha jata hai. Run mein aane wale elements ki sankhya ko <strong>"Run Length"</strong> kehte hain.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • The Encoding Format
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              RLE mein har run ko do cheezon ke pair se darshaya jata hai: <code>(Count, Value)</code> ya <code>(Value, Count)</code>.
            </p>
          </div>
        </div>

        {/* Worked Examples of RLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-mono font-bold mb-2">
              Example 1: Text String Encoding
            </strong>
            <p className="text-xs text-text-secondary mb-2">Maan lijiye input string hai:</p>
            <div className="p-2.5 rounded bg-secondary/70 font-mono text-xs font-bold text-slate-900 dark:text-white mb-2">
              Input: A A A A A A B B B C C (11 characters = 11 Bytes)
            </div>
            <p className="text-xs text-text-secondary mb-1">RLE Analysis:</p>
            <div className="text-xs text-text-secondary space-y-0.5 font-mono bg-surface p-2 rounded border border-border">
              • 6 baar 'A' aane par: A6 (ya 6A)<br />
              • 3 baar 'B' aane par: B3 (ya 3B)<br />
              • 2 baar 'C' aane par: C2 (ya 2C)
            </div>
            <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold mt-2">
              Output: A6B3C2 (6 characters = 6 Bytes) → ~45% Size Reduced!
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-purple-600 dark:text-purple-400 block text-sm font-mono font-bold mb-2">
              Example 2: Binary Bitmap Graphic / Fax Scan
            </strong>
            <p className="text-xs text-text-secondary mb-2">Monochrome scanner se aane wali 16-pixel binary line:</p>
            <div className="p-2.5 rounded bg-secondary/70 font-mono text-xs font-bold text-slate-900 dark:text-white mb-2">
              Input: 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 (16 bits)
            </div>
            <p className="text-xs text-text-secondary mb-1">Run Length Calculation:</p>
            <div className="text-xs text-text-secondary space-y-0.5 font-mono bg-surface p-2 rounded border border-border">
              • 8 continuous black pixels (0s): (0, 8)<br />
              • 5 continuous white pixels (1s): (1, 5)<br />
              • 3 continuous black pixels (0s): (0, 3)
            </div>
            <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold mt-2">
              Output: (0, 8), (1, 5), (0, 3) → CCITT Fax Group 3 Standard!
            </div>
          </div>
        </div>

        {/* When RLE Works vs When It Fails */}
        <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 my-4">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm mb-1">
            <AlertCircle className="w-4 h-4" />
            <span>Critical Concept: RLE Worst-Case Data Expansion (डेटा का आकार दोगुना होना):</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            RLE sirf tabhi safal hota hai jab data me lambe repetitive runs ho (jaise white backgrounds, line art, simple logos).
            <br />
            <strong>Lekin agar data me repetition bilkul na ho (e.g. string "ABCDEF"):</strong>
            <br />
            Input: <code>A B C D E F</code> (6 Bytes)
            <br />
            RLE Output: <code>A1 B1 C1 D1 E1 F1</code> (12 Bytes)!
            <br />
            Yahan file ka aakar kam hone ke bajaye <strong>100% badh gaya (Negative Compression)</strong>! Isliye natural photographic images par seedhe RLE nahi lagaya jata; JPEG me pehle DCT quantization se consecutive zero runs banaye jate hain, fir un zeros par RLE lagaya jata hai.
          </p>
        </div>

        {/* 2.3 LZMA (Lempel-Ziv-Markov chain Algorithm) */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          2.3 LZMA (Lempel-Ziv-Markov chain Algorithm)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>LZMA</strong> (Lempel-Ziv-Markov chain Algorithm) ek highly advanced lossless dictionary-based compression algorithm hai jise 1998 me <strong>Igor Pavlov</strong> dwara 7-Zip archiver ke liye viksit kiya gaya tha. Yeh modern era ka sabse shaktishali general-purpose lossless algorithm mana jata hai.
        </p>

        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Working Mechanism (Dictionary + Range Coder + Markov Chains)
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              LZMA purane LZ77 algorithm ka ek highly optimized roop hai. Yeh ek vishal <strong>Sliding Dictionary (up to 4 GB window size)</strong> ka upyog karta hai. Jab bhi koi duplicate data block milta hai, LZMA use pehle aane wale block ke relative offset aur length se replace kar deta hai. Iske baad, prapt codes ko <strong>Range Encoder</strong> (ek advance entropy coder jo fractional bit precision par kaam karta hai) aur <strong>Markov Chain</strong> probability models ke dwara compress kiya jata hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Advantages of LZMA
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Standard ZIP/GZIP (DEFLATE algorithm) ke mukable LZMA lagbhag <strong>30% se 50% behtar compression ratio</strong> pradan karta hai. Sath hi, iski decompression speed bahut tez hoti hai, jisse client machine par file turant khul jaati hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              • Limitations & Real-World Applications
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Iski mukhya seema yeh hai ki compression phase ke dauran yeh bahut zyada CPU calculation aur RAM (up to several GBs) consume karta hai aur compression me samay lagata hai. Iska upyog <strong>7-Zip (.7z archives)</strong>, Linux kernel packages (<code>.tar.xz</code>), modern video game asset distribution, aur embedded system firmware me hota hai.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: IMAGE & VIDEO FORMATS (JPEG, MPEG, H.261, H.265) */}
      {/* ========================================================= */}
      <section id="image-video" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.0 • MULTIMEDIA STANDARDS
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            3. Image & Video Formats: JPEG, MPEG, H.261 & H.265
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डिजिटल इमेज व वीडियो कम्प्रेशन स्टैंडर्ड्स: जेपेग की 6-चरणीय पाइपलाइन, एमपीईजी I/P/B फ्रेम्स, H.261 एवं H.265 HEVC)
          </div>
        </div>

        {/* 3.1 JPEG Image Compression Standard */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          3.1 JPEG (Joint Photographic Experts Group) in Detail (10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>JPEG</strong> (Joint Photographic Experts Group) digital still photography ke liye duniya ka sabse lokpriya aur prabhavshali lossy image compression international standard (ISO/IEC 10918-1) hai. Ise 1992 me standardize kiya gaya tha. Iska mukhya uddeshya continuous-tone photographic images (prakritik tasveerein) ke file size ko 10x se 25x tak kam karna hai bina kisi noticeable visual quality loss ke.
        </p>

        {/* The 6-Stage JPEG Workflow */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          The 6-Stage JPEG Compression Workflow (जेपेग कम्प्रेशन के 6 मुख्य चरण):
        </h4>
        <div className="space-y-4 my-5">
          {/* Step 1 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Step 1: Color Space Conversion (RGB se YCbCr)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Computer screens images ko Red, Green, Blue (RGB) format me display karti hain. Lekin human eye brightness (roshni) ke prati bahut sensitive hai aur color ke prati kam. Isliye JPEG pehle image ko <strong>YCbCr color space</strong> me convert karta hai:
              <br />
              • <strong>Y (Luminance):</strong> Brightness / Grayscale information (Sabse zaroori).
              <br />
              • <strong>Cb (Chrominance Blue):</strong> Blue color difference information.
              <br />
              • <strong>Cr (Chrominance Red):</strong> Red color difference information.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Step 2: Chroma Downsampling (रंगों का सब-सैंपलिंग)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Insaan ki aankhein color details me chote badlaav pehchaan nahi paati. Isliye Cb aur Cr channels ke resolution ko aadha (4:2:2) ya chauthai (4:2:0) kar diya jata hai. Is akele step se image ka 50% data bina kisi visible quality loss ke kam ho jata hai! Y channel ko poora retain kiya jata hai.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Step 3: 8×8 Block Partitioning (ब्लॉक्स में विभाजन)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Poori image ko ek saath calculate karna mathematically bahut mushkil hota hai. Isliye har color channel ko chhote-chhote <strong>8×8 pixel blocks</strong> (total 64 pixels per block) me tod diya jata hai. Agar pixel values 0 se 255 hain, to unme se 128 ghata kar unhe zero-centered (-128 to +127) bana diya jata hai.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Step 4: Discrete Cosine Transform (DCT - गणितीय रूपांतरण)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Har 8×8 block par 2D-DCT formula lagaya jata hai. DCT spatial domain (pixels) ko <strong>Frequency Domain</strong> me badalta hai. Nateeje ke roop me 64 coefficients milte hain:
              <br />
              • <strong>1 DC Coefficient:</strong> Block ka top-left corner jo poore 8×8 block ki average brightness/color ko darshata hai.
              <br />
              • <strong>63 AC Coefficients:</strong> Baki 63 values jo block ke andar low se high spatial frequencies (baareek patterns aur edges) ko darshati hain.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-4 rounded-xl border-2 border-brand-500/40 bg-brand-50/20 dark:bg-brand-500/[0.04]">
            <strong className="text-brand-700 dark:text-brand-400 block text-sm font-bold mb-1">
              Step 5: Quantization (क्वांटाइजेशन - The Core Lossy Step!)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Yeh JPEG ka sabse mukhya charan hai jahan vastavik compression hota hai. Har 8×8 DCT coefficient ko ek standard <strong>Quantization Matrix (Q-Matrix)</strong> ki sankhya se divide (bhaag) kiya jata hai aur nearest integer me round-off kiya jata hai:
              <br />
              <code>Quantized_Value = Round(DCT_Value / Q_Value)</code>
              <br />
              Chuki Q-Matrix me high frequencies ke divisors bade hote hain, isliye lagbhag 50 se 55 high-frequency AC coefficients <strong>ZERO (0)</strong> ban jaate hain! Yahan round-off hone ke karan halka sa loss hota hai jo irreversible hai.
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block text-sm font-bold mb-1">
              Step 6: Zig-Zag Scanning & Entropy Encoding (हफमैन एवं RLE)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Quantized 8×8 block ko top-left se bottom-right ki taraf <strong>Zig-Zag path</strong> me scan kiya jata hai. Isse sabhi non-zero values shuru me aa jaati hain aur baki ke lambe zeros ke pichle hisse par <strong>Run Length Encoding (RLE)</strong> lagakar <em>End of Block (EOB)</em> marker laga diya jata hai. Aakhiri stage par <strong>Huffman Coding</strong> lagakar ultra-compact binary bitstream banakar file save kar di jaati hai.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 2.3: JPEG PIPELINE DIAGRAM */}
        <EducationalFigure
          caption="Figure 2.3: Comprehensive 6-Stage Forward Encoding Pipeline of the JPEG Lossy Compression Standard"
          source="Wikimedia Commons • JPEG DCT Workflow"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Jpegdct.svg"
          license="CC BY-SA 3.0"
          maxWidth="max-w-3xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
              Forward JPEG Pipeline • RGB → YCbCr → Subsample → 8x8 Blocks → DCT → Quantize → Entropy
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono max-w-2xl mx-auto">
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <span className="font-bold block text-blue-700 dark:text-blue-300">1. YCbCr</span>
                <p className="text-[10px] text-text-muted mt-1">RGB to Color Split</p>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <span className="font-bold block text-emerald-700 dark:text-emerald-300">2. Subsample</span>
                <p className="text-[10px] text-text-muted mt-1">4:2:0 Chroma Drop</p>
              </div>
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30">
                <span className="font-bold block text-amber-700 dark:text-amber-300">3. 8×8 Blocks</span>
                <p className="text-[10px] text-text-muted mt-1">64 Pixels Matrix</p>
              </div>
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <span className="font-bold block text-purple-700 dark:text-purple-300">4. DCT</span>
                <p className="text-[10px] text-text-muted mt-1">Spatial to Frequency</p>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-500/10 border-2 border-rose-500/50 shadow-sm">
                <span className="font-bold block text-rose-700 dark:text-rose-300">5. Quantize</span>
                <p className="text-[10px] text-rose-600 dark:text-rose-400 font-bold mt-1">Lossy Division</p>
              </div>
              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                <span className="font-bold block text-indigo-700 dark:text-indigo-300">6. Entropy</span>
                <p className="text-[10px] text-text-muted mt-1">Zig-Zag + Huffman</p>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-text-muted flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>Decoder executes exact inverse steps: Entropy Decode → Dequantize → IDCT → YCbCr to RGB</span>
            </div>
          </div>
        </EducationalFigure>

        {/* 3.2 MPEG Video Compression Standard */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          3.2 MPEG (Moving Picture Experts Group) in Detail (10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>MPEG</strong> (Moving Picture Experts Group) ISO aur IEC dwara sthapit ek international working group hai jisne digital audio aur video compression standards (MPEG-1, MPEG-2, MPEG-4) ka nirmaan kiya.
        </p>
        <p className="mb-4 leading-relaxed">
          Video vastav mein tezi se chalne wali still images (frames) ka ek continuous sequence hota hai. Agar hum har frame ko alag-alag JPEG ki tarah compress karein (ise Motion JPEG kehte hain), to bhi file size bahut bada rehta hai. MPEG video ke andar maujood do mukhya redundancies ko khatam karta hai:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-xs sm:text-sm text-text-secondary leading-relaxed">
          <li><strong>Spatial Redundancy (Intra-frame):</strong> Ek hi frame ke andar maujood padosi pixels ka aapas me milna (isko DCT se compress kiya jata hai).</li>
          <li><strong>Temporal Redundancy (Inter-frame):</strong> Lagatar aane wale frames ke beech ka samay-aadhrit aakarshak dohraav (motion compensation se compress kiya jata hai).</li>
        </ul>

        {/* The Three Frame Types: I, P, B Frames */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          The Three Core MPEG Frame Types (I-Frame, P-Frame, B-Frame):
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          {/* I-Frame */}
          <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20">
            <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-300 font-bold text-base mb-1">
              <Film className="w-4 h-4" />
              <span>1. I-Frame (Intra-coded / Keyframe)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Yeh poori tarah swatantra (self-contained) frame hota hai. Ise decode karne ke liye kisi aage ya peeche ke frame ki zaroorat nahi hoti (bilkul JPEG image ki tarah).
            </p>
            <div className="text-[11px] text-text-muted space-y-1 bg-surface p-2.5 rounded border border-border">
              <p>• <strong>Compression:</strong> Sabse kam (~7:1 se 10:1 ratio).</p>
              <p>• <strong>Role:</strong> Video me aage-peeche seek karne (fast-forward) aur error recovery ke liye essential.</p>
              <p>• <strong>Size:</strong> Teeno frames me sabse BADA size.</p>
            </div>
          </div>

          {/* P-Frame */}
          <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20">
            <div className="flex items-center gap-1.5 text-purple-700 dark:text-purple-300 font-bold text-base mb-1">
              <Film className="w-4 h-4" />
              <span>2. P-Frame (Predicted Frame)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Yeh frame apne se pichle wale I-Frame ya P-Frame se <em>Forward Prediction</em> karke banta hai. Yeh poora frame store nahi karta, sirf motion vectors aur antar (residual difference) store karta hai.
            </p>
            <div className="text-[11px] text-text-muted space-y-1 bg-surface p-2.5 rounded border border-border">
              <p>• <strong>Compression:</strong> Madhyam (~20:1 ratio).</p>
              <p>• <strong>Role:</strong> Frame-to-frame movement ko capture karna.</p>
              <p>• <strong>Size:</strong> I-Frame se lagbhag aadha (50% smaller).</p>
            </div>
          </div>

          {/* B-Frame */}
          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20">
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-bold text-base mb-1">
              <Film className="w-4 h-4" />
              <span>3. B-Frame (Bi-directional Predicted)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Yeh dono taraf se predict hota hai — pichle frame (Past) aur aane wale frame (Future) dono se reference leta hai. Isme motion estimation dono dishaon me hoti hai.
            </p>
            <div className="text-[11px] text-text-muted space-y-1 bg-surface p-2.5 rounded border border-border">
              <p>• <strong>Compression:</strong> Sabse zyada (~50:1 ratio).</p>
              <p>• <strong>Role:</strong> Maximum bandwidth bachana.</p>
              <p>• <strong>Size:</strong> Sabse CHHOTA size (tiny bit footprint).</p>
            </div>
          </div>
        </div>

        {/* Group of Pictures (GOP) */}
        <div className="p-4 rounded-xl border border-border bg-surface my-4">
          <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-1">
            Group of Pictures (GOP Structure):
          </strong>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
            MPEG video me frames ka ek nishchit sequence hota hai jise GOP kehte hain. Udaharan ke liye ek typical 12-frame GOP pattern:
          </p>
          <div className="p-2.5 rounded bg-secondary/60 font-mono text-xs text-center font-bold text-brand-600 dark:text-brand-400 border border-border">
            I  B  B  P  B  B  P  B  B  P  B  B  → [Next I-Frame]
          </div>
          <p className="text-[11px] text-text-muted mt-2">
            Har 0.5 second (12-15 frames) me ek I-Frame repeat hota hai taaki agar network par packet drop ho jaye, to agle I-Frame par video turant theek ho sake.
          </p>
        </div>

        {/* 3.3 H.261 Video Coding Standard */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          3.3 ITU-T H.261 Video Coding Standard
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>H.261</strong> ITU-T (International Telecommunication Union) dwara 1988/1990 me viksit kiya gaya digital video compression ka aitihaasik <strong>Pioneer Standard</strong> hai. Yeh duniya ka pehla digital video codec tha jiska upyog ISDN (Integrated Services Digital Network) telephone lines par real-time Video Conferencing ke liye kiya gaya tha.
        </p>
        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              1. Bitrate Architecture (p × 64 kbps)
            </strong>
            <p className="text-xs text-text-secondary">
              H.261 ko <code>p × 64 kbit/s</code> data rates ke liye design kiya gaya tha (jahan p = 1 se lekar 30 tak hota hai, yaani 64 kbps se 2 Mbps tak). Is karan ise shuruat me "px64" codec bhi kaha jata tha.
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              2. Supported Resolutions
            </strong>
            <p className="text-xs text-text-secondary">
              H.261 ne do standard resolutions define kiye: <strong>CIF</strong> (Common Intermediate Format: 352×288 pixels) aur <strong>QCIF</strong> (Quarter CIF: 176×144 pixels) at 4:2:0 YCbCr.
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              3. Legacy & Importance in Syllabus
            </strong>
            <p className="text-xs text-text-secondary">
              H.261 ne hi sabse pehle <em>Macroblock (16×16 pixels) + Motion Compensation + 8×8 DCT</em> ka hybrid model banaya tha. Aaj ke sabhi modern codecs (MPEG-1, MPEG-2, H.264, H.265) H.261 ke isi mool architecture par aadharit hain!
            </p>
          </div>
        </div>

        {/* 3.4 H.265 (HEVC - High Efficiency Video Coding) */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          3.4 H.265 (HEVC - High Efficiency Video Coding)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>H.265</strong>, jise <strong>HEVC (High Efficiency Video Coding)</strong> ya MPEG-H Part 2 bhi kaha jata hai, ITU-T aur ISO/IEC dwara 2013 me banaya gaya modern ultra-high-definition video compression standard hai. Yeh widely used H.264/AVC standard ka agla successor hai.
        </p>

        <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 my-4">
          <strong className="text-emerald-800 dark:text-emerald-300 block text-sm font-bold mb-1">
            The Golden Achievement: 50% Bitrate Reduction!
          </strong>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            H.265 ka sabse bada chamatkar yeh hai ki yeh <strong>H.264 ke mukable 50% kam data rate (bitrate) par bilkul saman video quality</strong> pradan karta hai. Yaani agar ek 4K video H.264 me 20 Mbps maangti thi, to H.265 me wahi video sirf 10 Mbps me bilkul crystal-clear chal jaati hai!
          </p>
        </div>

        {/* Core Innovations of H.265 */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">
          Key Technological Innovations in H.265:
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-xs sm:text-sm text-text-secondary leading-relaxed">
          <li>
            <strong>Coding Tree Units (CTUs):</strong> H.264 me rigid 16×16 pixel macroblocks hote the. H.265 unhe dynamic quadtree CTUs se replace karta hai jo 4×4 se lekar <strong>64×64 pixels</strong> tak flexible scale ho sakte hain (aasmaan jaise bade uniform areas me 64×64 block laga kar massive bits bachata hai).
          </li>
          <li>
            <strong>35 Intra-Prediction Modes:</strong> H.264 me sirf 9 directional intra-prediction modes the, jabki H.265 me 33 angular + planar + DC = total 35 modes hain, jisse curve aur edge prediction bahut accurate ho jaati hai.
          </li>
          <li>
            <strong>Sample Adaptive Offset (SAO):</strong> Naya in-loop filter jo compression ke baad aane wali banding aur ringing artefacts ko smooth karta hai.
          </li>
          <li>
            <strong>Applications:</strong> 4K Ultra-HD streaming (Netflix 4K, YouTube 4K), 8K broadcasting, mobile iPhone 4K/60fps video capture, aur DVB-T2 television.
          </li>
        </ul>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: AUDIO FORMATS (MP3, MP4, FLAC, ALAC, ITU G.722) */}
      {/* ========================================================= */}
      <section id="audio-formats" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.0 • AUDIO & CONTAINERS
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            4. Audio Formats & Codecs: MP3, MP4, FLAC, ALAC & ITU G.722
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (ऑडियो कम्प्रेशन: एमपी3 एवं साइकोएकाउस्टिक्स, एमपी4 कंटेनर, लॉसलेस FLAC/ALAC एवं वॉयस कोडिंग ITU G.722)
          </div>
        </div>

        {/* 4.1 MP3 (MPEG-1 Audio Layer III) */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          4.1 MP3 (MPEG Audio Layer III) in Detail (10-Mark Core)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>MP3</strong> (MPEG-1 Audio Layer III) digital audio ke liye duniya ka sabse krantikari lossy audio compression standard hai, jise Germany ke <strong>Fraunhofer Institute</strong> dwara viksit kiya gaya aur 1993 me MPEG standard me include kiya gaya. MP3 ne digital music industry aur internet audio distribution ko poori tarah badal diya.
        </p>

        {/* How MP3 Works: Psychoacoustics */}
        <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 my-4">
          <strong className="text-rose-800 dark:text-rose-300 block text-sm font-bold mb-1 flex items-center gap-1.5">
            <Volume2 className="w-4 h-4 text-rose-600" /> Working Principle: Perceptual Audio Coding & Psychoacoustics
          </strong>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
            MP3 koi random compression nahi karta, balki yeh insaan ke kaan aur dimaag ke sunne ki prakriya (<strong>Psychoacoustics</strong>) par kaam karta hai:
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
            <li>
              <strong>Threshold of Hearing:</strong> Insaan ka kaan 20 Hz se 20 kHz tak sun sakta hai, lekin har frequency par sensitivity barabar nahi hoti. 2 kHz se 5 kHz ke beech kaan sabse tez sunte hain, jabki ultra-low aur ultra-high frequencies par kaan behre jaise hote hain. MP3 in un-inaudible frequencies ko remove kar deta hai.
            </li>
            <li>
              <strong>Frequency Masking (आवृत्ति मास्किंग):</strong> Jab ek tez aawaz (jaise drum beat ya guitar riff) bajti hai, to uske nikat aane wali halki aawaz (jaise soft flute) ko insaan ka kaan sun hi nahi pata. MP3 is dabi hui (masked) halki aawaz ke bits ko delete kar deta hai.
            </li>
            <li>
              <strong>Temporal Masking (सामयिक मास्किंग):</strong> Kisi tez aawaz ke turant pehle (5 ms) aur turant baad (100 ms) aane wali bohot halki aawazon ko bhi kaan notice nahi kar pata. Unhe bhi hata diya jata hai.
            </li>
          </ul>
        </div>

        {/* MP3 Compression Ratio and Bitrates */}
        <div className="p-4 rounded-xl border border-border bg-surface my-4">
          <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-1">
            Compression Ratio & Standard Bitrates:
          </strong>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
            CD audio 1411.2 kbps hota hai. MP3 ise compress karke standard <strong>128 kbps (11:1 ratio)</strong>, <strong>192 kbps</strong>, ya near-CD quality <strong>320 kbps (4.5:1 ratio)</strong> me convert kar deta hai. Ek 50 MB ka uncompressed gaana sirf <strong>4 MB se 5 MB</strong> ka ban jata hai jise dial-up internet par bhi asaani se download kiya ja sakta tha.
          </p>
        </div>

        {/* 4.2 MP4 Container Format */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          4.2 MP4 (MPEG-4 Part 14) Multimedia Container
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>MP4</strong> (MPEG-4 Part 14, <code>.mp4</code>) koi audio compression algorithm nahi hai, balki ek <strong>Digital Multimedia Container Format</strong> hai. Yeh Apple QuickTime format (<code>.mov</code>) par aadharit hai aur ISO/IEC dwara standardize kiya gaya hai.
        </p>

        {/* Codec vs Container Distinction */}
        <div className="p-4 rounded-xl border-2 border-brand-500/40 bg-brand-50/20 dark:bg-brand-500/[0.04] my-4">
          <strong className="text-brand-700 dark:text-brand-400 block text-sm font-bold mb-1 flex items-center gap-1.5">
            <Layers className="w-4 h-4" /> Crucial Distinction: Codec vs Container (अति-महत्वपूर्ण अंतर)
          </strong>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Students aksar MP3 aur MP4 me confuse hote hain:
            <br />
            • <strong>MP3:</strong> Sirf ek AUDIO COMPRESSION CODEC hai jo sound ko compress karta hai.
            <br />
            • <strong>MP4:</strong> Ek MULTIMEDIA CONTAINER (Lifafa / Envelope) hai. Ek single MP4 file ke andar:
            <br />
            &nbsp;&nbsp;1. Ek Video Stream (H.264 ya H.265 encoded)
            <br />
            &nbsp;&nbsp;2. Ek ya do Audio Streams (AAC ya MP3 encoded multi-language sound)
            <br />
            &nbsp;&nbsp;3. Subtitle Tracks (English, Hindi SRT tracks)
            <br />
            &nbsp;&nbsp;4. Still Images aur Chapter Metadata
            <br />
            ek saath synchronized packet ke roop me pack hokar rehte hain.
          </p>
        </div>

        {/* 4.3 FLAC & ALAC Lossless Audio Codecs */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          4.3 Lossless Audio Codecs: FLAC & ALAC
        </h3>
        <p className="mb-4 leading-relaxed">
          Audiophiles aur sound engineers jo MP3 ke lossy compression se quality nahi khona chahte, unke liye lossless audio codecs ka vikas kiya gaya:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          {/* FLAC */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-emerald-600 dark:text-emerald-400 block text-sm font-mono font-bold mb-1">
              1. FLAC (Free Lossless Audio Codec)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              <strong>FLAC</strong> (Xiph.Org Foundation dwara banaya gaya) ek open-source, royalty-free lossless audio format hai. Yeh linear prediction aur Golomb-Rice entropy coding ka upyog karke raw CD audio (WAV) ke size ko lagbhag <strong>50% se 60% tak chhota (~2:1 ratio)</strong> kar deta hai bina ek bhi sample lose kiye.
            </p>
            <div className="text-[11px] text-text-muted space-y-0.5 bg-secondary/50 p-2.5 rounded border border-border">
              <p>• <strong>Quality:</strong> 100% Studio Master Quality (Up to 24-bit / 192 kHz high-res).</p>
              <p>• <strong>Licensing:</strong> Free & Open Source (FOSS).</p>
              <p>• <strong>Support:</strong> Android, Windows, VLC, Tidal HiFi, Linux native.</p>
            </div>
          </div>

          {/* ALAC */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-blue-600 dark:text-blue-400 block text-sm font-mono font-bold mb-1">
              2. ALAC (Apple Lossless Audio Codec)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              <strong>ALAC</strong> (Apple dwara 2004 me viksit kiya gaya aur 2011 me open source kiya gaya) Apple ka apna lossless audio codec hai jo <code>.m4a</code> container file ke andar store hota hai. Yeh bhi bilkul FLAC ki tarah bit-perfect original audio recovery deta hai.
            </p>
            <div className="text-[11px] text-text-muted space-y-0.5 bg-secondary/50 p-2.5 rounded border border-border">
              <p>• <strong>Quality:</strong> 100% Bit-Exact lossless reproduction.</p>
              <p>• <strong>Role:</strong> Apple Music Lossless streaming, iTunes, iPhone, iPad aur macOS ecosystem ka default standard.</p>
              <p>• <strong>File Size:</strong> FLAC ke barabar (original ka ~55%).</p>
            </div>
          </div>
        </div>

        {/* 4.4 ITU G.722 Wideband Speech Coding */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-3">
          4.4 ITU-T G.722 Wideband Speech Coding Standard
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>ITU-T G.722</strong> telecom networks aur VoIP systems ke liye 1988 me banaya gaya ek wideband speech audio coding standard hai. Iska mukhya uddeshya telephone par manushya ki aawaz (speech) ko crystal-clear aur natural banana hai, jise aam bhasha mein <strong>"HD Voice"</strong> kaha jata hai.
        </p>

        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              • Working Principle: SB-ADPCM (Sub-Band ADPCM)
            </strong>
            <p className="text-xs text-text-secondary">
              G.722 audio ko 16 kHz sampling rate par sample karta hai aur signal ko do sub-bands me divide karta hai: <strong>Lower Sub-band (50 Hz - 4 kHz)</strong> aur <strong>Upper Sub-band (4 kHz - 7 kHz)</strong>. Lower band ko 48 kbps aur upper band ko 16 kbps allocate karke total <strong>64 kbps</strong> bitrate par ultra-crisp audio deliver karta hai.
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              • Why G.722 is Superior to Traditional Phone Calls (G.711)
            </strong>
            <p className="text-xs text-text-secondary">
              Traditional telephone call (G.711) sirf 300 Hz se 3.4 kHz (narrowband) tak hi aawaz bhej sakti thi, jisse aawaz dabbi-dabbi aur metallic lagti thi. G.722 50 Hz se 7 kHz tak audio cover karta hai, jisse 's', 'f', 'th' jaise akshar bilkul saaf sunai dete hain aur conference calls me thakan nahi hoti.
            </p>
          </div>
        </div>

        {/* Master Comparison Tables for Unit 2 */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4">
          Key Unit 2 Comparison Tables for Semester Exams
        </h3>

        {/* Table 1: JPEG vs MPEG */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">
          1. JPEG vs MPEG Comparison:
        </h4>
        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs mb-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2 px-3 font-bold">Parameter</th>
                <th className="py-2 px-3 font-bold text-amber-600">JPEG</th>
                <th className="py-2 px-3 font-bold text-purple-600">MPEG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 px-3 font-semibold">Primary Target</td>
                <td className="py-2 px-3 text-text-secondary">Still continuous-tone photographic images.</td>
                <td className="py-2 px-3 text-text-secondary">Moving digital video with synchronized audio.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Redundancy Targeted</td>
                <td className="py-2 px-3 text-text-secondary">Spatial redundancy only (within single frame).</td>
                <td className="py-2 px-3 text-text-secondary">Both Spatial (Intra) and Temporal (Inter-frame) redundancy.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Frame Concept</td>
                <td className="py-2 px-3 text-text-secondary">No frame concept (single independent image).</td>
                <td className="py-2 px-3 text-text-secondary">I-Frames, P-Frames, and B-Frames with GOP structure.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Motion Compensation</td>
                <td className="py-2 px-3 text-text-secondary">Not applicable (still image).</td>
                <td className="py-2 px-3 text-text-secondary">Core engine (tracks movement vectors between frames).</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Hardware Complexity</td>
                <td className="py-2 px-3 text-text-secondary">Low computational complexity.</td>
                <td className="py-2 px-3 text-text-secondary">High computational complexity (dedicated hardware codecs).</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2: MP3 vs MP4 */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">
          2. MP3 vs MP4 Comparison:
        </h4>
        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs mb-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2 px-3 font-bold">Parameter</th>
                <th className="py-2 px-3 font-bold text-rose-600">MP3</th>
                <th className="py-2 px-3 font-bold text-blue-600">MP4</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 px-3 font-semibold">Nature & Classification</td>
                <td className="py-2 px-3 text-text-secondary">Audio Compression Codec (MPEG-1 Layer 3).</td>
                <td className="py-2 px-3 text-text-secondary">Multimedia Container Format (MPEG-4 Part 14).</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Supported Content</td>
                <td className="py-2 px-3 text-text-secondary">Audio only (speech, songs, podcasts).</td>
                <td className="py-2 px-3 text-text-secondary">Video, Audio, Subtitles, Chapters, and Still Images.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">File Extension</td>
                <td className="py-2 px-3 text-text-secondary font-mono">.mp3</td>
                <td className="py-2 px-3 text-text-secondary font-mono">.mp4, .m4v</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Underlying Principle</td>
                <td className="py-2 px-3 text-text-secondary">Psychoacoustic masking & MDCT frequency coding.</td>
                <td className="py-2 px-3 text-text-secondary">Box/Atom hierarchy packaging encoded tracks.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 3: FLAC vs ALAC */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">
          3. FLAC vs ALAC Comparison:
        </h4>
        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs mb-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2 px-3 font-bold">Parameter</th>
                <th className="py-2 px-3 font-bold text-emerald-600">FLAC</th>
                <th className="py-2 px-3 font-bold text-blue-600">ALAC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 px-3 font-semibold">Developer & Origin</td>
                <td className="py-2 px-3 text-text-secondary">Xiph.Org Foundation (Josh Coalson, 2001).</td>
                <td className="py-2 px-3 text-text-secondary">Apple Inc. (2004, open-sourced 2011).</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Container Format</td>
                <td className="py-2 px-3 text-text-secondary font-mono">Native FLAC bitstream (.flac)</td>
                <td className="py-2 px-3 text-text-secondary font-mono">MP4/QuickTime container (.m4a)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Compression Nature</td>
                <td className="py-2 px-3 text-text-secondary">100% Lossless (Bit-perfect reproduction).</td>
                <td className="py-2 px-3 text-text-secondary">100% Lossless (Bit-perfect reproduction).</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Primary Ecosystem</td>
                <td className="py-2 px-3 text-text-secondary">Android, Windows, Linux, Tidal, VLC player.</td>
                <td className="py-2 px-3 text-text-secondary">Apple Music, iOS, macOS, iTunes, iPod gear.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 4: H.261 vs H.265 */}
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">
          4. H.261 vs H.265 (HEVC) Comparison:
        </h4>
        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs mb-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2 px-3 font-bold">Parameter</th>
                <th className="py-2 px-3 font-bold text-amber-600">H.261 (1990)</th>
                <th className="py-2 px-3 font-bold text-emerald-600">H.265 / HEVC (2013)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 px-3 font-semibold">Era & Target Resolution</td>
                <td className="py-2 px-3 text-text-secondary">ISDN Video Phone (QCIF 176×144, CIF 352×288).</td>
                <td className="py-2 px-3 text-text-secondary">Modern 4K Ultra-HD (3840×2160) and 8K Streaming.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Block Structure</td>
                <td className="py-2 px-3 text-text-secondary">Fixed 16×16 Macroblocks.</td>
                <td className="py-2 px-3 text-text-secondary">Flexible Coding Tree Units (CTUs) up to 64×64.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Intra-Prediction Modes</td>
                <td className="py-2 px-3 text-text-secondary">None (pure transform coding).</td>
                <td className="py-2 px-3 text-text-secondary">35 directional and planar prediction modes.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold">Bandwidth Efficiency</td>
                <td className="py-2 px-3 text-text-secondary font-mono">64 kbps to 2 Mbps (Low efficiency).</td>
                <td className="py-2 px-3 text-text-secondary font-mono">50% bitrate reduction over H.264 (Ultra efficient).</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 10-Mark Exam Blueprint Checklist for Unit 2 */}
        <div className="p-5 rounded-2xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-500/[0.04] my-8">
          <div className="flex items-center gap-2 text-brand-700 dark:text-brand-400 font-bold text-base mb-2">
            <Award className="w-5 h-5" />
            <span>Unit 2 Complete 10-Mark Answer Writing Checklist (BTEUP Exam Special)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">
            Exam room mein baithe samay Unit 2 se banne wale 4 sambhavit 10-mark questions aur unke anivarya sub-headings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q1. Multimedia Compression Need & Lossy vs Lossless (10 Marks)</strong>
              <p className="text-text-secondary">• Data Compression formal definition<br />• File size proof (Image, Audio, 11 GB/min Video)<br />• Storage, Bandwidth, Streaming reasons<br />• 4 Redundancy types (Coding, Spatial, Temporal, Psycho)<br />• Figure 2.1 Pipeline diagram<br />• 8-Point Lossy vs Lossless Comparison Table</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q2. Huffman Coding & RLE with Numerical Examples (10 Marks)</strong>
              <p className="text-text-secondary">• Variable-Length vs Fixed-Length concept<br />• Prefix-Free Property definition<br />• 6-Step Huffman tree construction algorithm<br />• Worked 5-symbol numerical example & bit saving math<br />• Figure 2.2 Huffman Tree Diagram<br />• RLE string & bitmap examples + Worst case data expansion</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q3. JPEG Compression Standard & Workflow (10 Marks)</strong>
              <p className="text-text-secondary">• Definition & Purpose of JPEG<br />• Stage 1: RGB to YCbCr conversion<br />• Stage 2: Chroma Subsampling (4:2:0)<br />• Stage 3: 8×8 Block Partitioning<br />• Stage 4: 2D-DCT (DC vs AC coefficients)<br />• Stage 5: Quantization (lossy round-off step)<br />• Stage 6: Zig-zag scan + RLE + Huffman<br />• Figure 2.3 JPEG Pipeline Diagram</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q4. Video & Audio Standards: MPEG, H.265 & MP3 (10 Marks)</strong>
              <p className="text-text-secondary">• MPEG Spatial vs Temporal redundancy<br />• I-Frame, P-Frame, B-Frame detailed comparison<br />• Group of Pictures (GOP) structure<br />• H.261 origin vs H.265 HEVC 50% bitrate reduction & CTU<br />• MP3 Psychoacoustics (Frequency & Temporal Masking)<br />• MP3 vs MP4 Container distinction</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MtUnit2Content;
