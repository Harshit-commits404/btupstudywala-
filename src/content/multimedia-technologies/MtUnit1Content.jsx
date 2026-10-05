import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  Clock,
  Compass,
  Cpu,
  Layers,
  Terminal,
  Shield,
  HardDrive,
  Activity,
  Server,
  Tv,
  Monitor,
  Headphones,
  Mic,
  Video,
  Music,
  Film,
  Image,
  FileText,
  Sparkles,
  Radio,
  Wifi,
  Share2,
  ArrowRight,
  Workflow,
  Sliders,
  Database,
  Zap,
  Award,
  HelpCircle,
  Check,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const MtUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER HERO TITLEPLATE */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Multimedia Technologies
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 10 Periods</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 font-medium border border-purple-500/20">
            Semester 5 (BTEUP)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Introduction to Multimedia
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (मल्टीमीडिया का परिचय: आधारभूत सिद्धांत, हार्डवेयर, सॉफ्टवेयर, ऑपरेटिंग सिस्टम एवं संचार प्रणाली)
          </p>
        </div>

        {/* Syllabus Topics Chips Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Official Syllabus:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Foundation & Concepts
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Multimedia Hardware
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Multimedia Software
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Multimedia Operating Systems
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
            Multimedia Communication System
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl border-l-2 border-brand-500/40 pl-4 py-1">
          Multimedia modern computing aur digital communication ka sabse dynamic aur impactful kshetra hai. Is chapter mein hum Multimedia ke basic foundation (Text, Graphics, Images, Audio, Video, Animation), specialized multimedia hardware components (CPU, GPU, RAM, Storage, I/O), software classifications aur production workflow, Multimedia Operating Systems ke continuous real-time scheduling aur audio-video synchronization, aur high-speed Multimedia Communication Systems ke end-to-end architecture ko BTEUP Polytechnic examination ke 10-mark descriptive standards ke anusar deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* SECTION 1: FOUNDATION AND CORE CONCEPTS OF MULTIMEDIA */}
      {/* ========================================================= */}
      <section id="multimedia-foundation" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.0
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Multimedia Foundation & Core Concepts
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (मल्टीमीडिया का अर्थ, परिभाषा, आवश्यकता, मुख्य तत्व एवं विशेषताएं)
          </div>
        </div>

        {/* 1.1 Meaning & Definition */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          1.1 Meaning & Formal Definition of Multimedia
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Multimedia</strong> shabda do alag-alag Latin/English shabdon ke mel se bana hai:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20">
            <strong className="text-blue-700 dark:text-blue-400 block text-base mb-1 font-mono">
              1. Multi (अनेक / बहुत सारे)
            </strong>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Iska arth hota hai "More than one" yaani ek se adhik. Traditional computer systems pehle sirf ek single medium (jaise pure monochrome plain text) par kaam karte the, jabki multimedia mein ek se adhik media types shaamil hote hain.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20">
            <strong className="text-purple-700 dark:text-purple-400 block text-base mb-1 font-mono">
              2. Medium / Media (माध्यम)
            </strong>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Information ko ek sthan se dusre sthan tak transmit karne ya user ke samne express karne ka madhyam (channel/format). Udaharan ke liye Text, Audio, Graphics, Video ya Animation.
            </p>
          </div>
        </div>

        {/* Formal Definition Box */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Standard Definition • Multimedia</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "Multimedia is the integration of multiple media elements—such as text, graphics, images, audio, video, and animation—into a single computer-controlled digital system, which can be acquired, processed, stored, synchronized, and presented interactively to the user."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Multimedia ek aisi computer-controlled digital technology hai jisme Text, Photo (Images), Sound (Audio), Chalchitra (Video) aur Chitra-Gati (Animation) ko aapas mein jodkar computer screen aur speakers ke jariye information ko aakarshak aur interactive tarike se prastut kiya jata hai.
            </span>
          </div>
        </div>

        {/* 1.2 Why Multimedia is Used */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.2 Why Multimedia is Used? (मल्टीमीडिया की आवश्यकता एवं महत्व)
        </h3>
        <p className="mb-4 leading-relaxed">
          Traditional computing mein communication sirf plain black-and-white text ke jariye hota tha. Plain text padhne mein monotonous aur boring hota hai, aur complex concepts ko aasani se vyakt nahi kar pata. Multimedia ka upyog nimnlikhit mukhya karno se kiya jata hai:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-sm sm:text-base leading-relaxed">
          <li>
            <strong>High Retention & Better Understanding (अधिक याददाश्त और आसान समझ):</strong> Human psychology ke anusar, insaan jo sirf sunta hai uska lagbhag 20% yaad rakhta hai, jo dekhta hai uska 30% yaad rakhta hai, lekin jab audio aur video ko ek saath dekhta aur sunta hai, to retention 60% se 70% tak badh jata hai.
          </li>
          <li>
            <strong>Multisensory Engagement (इंद्रियों की सहभागिता):</strong> Multimedia aankhon (Visual - Text, Graphics, Video) aur kaanon (Auditory - Audio/Speech) dono ko ek saath engage karta hai, jisse learning immersive ban jaati hai.
          </li>
          <li>
            <strong>Interactive Control (उपयोगकर्ता का सीधा नियंत्रण):</strong> Normal TV broadcast passive hota hai jisme viewer sirf dekh sakta hai. Multimedia systems (jaise web portals, interactive educational apps, games) user ko click karne, seek karne, pause karne aur content ke flow ko control karne ki aazadi dete hain.
          </li>
          <li>
            <strong>Simulation of Complex Phenomena (जटिल प्रक्रियाओं का सजीव प्रदर्शन):</strong> Medical surgery, space exploration, rocket launch, ya civil engineering bridge construction ko bina kisi khatre ke computer par 3D animation aur audio ke madhyam se simulate karke sikhaya ja sakta hai.
          </li>
          <li>
            <strong>Global Reach & Compact Storage:</strong> Digital multimedia data ko internet aur high-speed networks par instant globally transmit kiya ja sakta hai aur SSD/Cloud par million gigabytes data safely archive kiya ja sakta hai.
          </li>
        </ul>

        {/* 1.3 Main Media Elements */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.3 Six Core Media Elements in Detail (मल्टीमीडिया के 6 मुख्य तत्व)
        </h3>
        <p className="mb-4 leading-relaxed">
          Ek complete multimedia system mukhya roop se chhah (6) fundamental media elements se milkar banta hai. Pratyek element ka apna vishisht role aur computational requirement hoti hai:
        </p>

        <div className="space-y-4 my-6">
          {/* Element 1: Text */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <FileText className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                1. Text (पाठ / टेक्स्ट)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 ml-auto">
                Discrete / Static Media
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Text multimedia ka sabse basic, fundamental aur universally used element hai. Iska upyog precise information, titles, subtitles, instructions, menus aur detailed documentation dene ke liye hota hai.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-secondary/50 p-3 rounded-lg border border-border">
              <p><strong>Technical Format:</strong> ASCII (7-bit / 8-bit) aur modern Unicode (UTF-8, UTF-16) jo duniya ki sabhi bhashaon ko represent karta hai.</p>
              <p><strong>Typography:</strong> Serif fonts (Times New Roman), Sans-serif fonts (Arial, Inter), font size, weight, leading aur kerning.</p>
              <p><strong>Example:</strong> Video subtitles, web page hyperlinks, software button labels, interactive quiz questions.</p>
            </div>
          </div>

          {/* Element 2: Graphics */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Layers className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                2. Graphics (रेखाचित्र / ग्राफिक्स)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 ml-auto">
                Vector-based / Geometric
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Graphics non-photographic visual representations hote hain jinhe mathematical lines, curves, shapes, charts, diagrams aur blueprints ke jariye banaya jata hai. Yeh aksar <strong>Vector Graphics</strong> hote hain jinhe kitna bhi zoom kiya jaye, unki sharpness kharab nahi hoti.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-secondary/50 p-3 rounded-lg border border-border">
              <p><strong>Technical Representation:</strong> Mathematical equations (Bézier curves, polygons, Cartesian coordinates). Formats: SVG, AI, CDR, EPS.</p>
              <p><strong>Role:</strong> Data visualisation, architecture blueprints, corporate logos, UI wireframes, flowcharts.</p>
              <p><strong>Example:</strong> Company ka logo, pie charts, CAD technical engineering drawings, website SVG icons.</p>
            </div>
          </div>

          {/* Element 3: Images */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Image className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                3. Images (स्थिर चित्र / डिजिटल इमेजेस)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 ml-auto">
                Raster / Bitmap Media
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Images do-dimensional (2D) static photographic captures hoti hain jo chhote-chhote colored dots jinhe <strong>Pixels (Picture Elements)</strong> kehte hain, ki rectangular grid (Matrix) se banti hain. Zoom karne par inke pixels dikhne lagte hain (Pixelation).
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-secondary/50 p-3 rounded-lg border border-border">
              <p><strong>Technical Attributes:</strong> Resolution (e.g., 1920×1080), Aspect Ratio (16:9, 4:3), Color Depth (24-bit True Color = 16.7 million colors). Formats: JPEG, PNG, WebP, TIFF.</p>
              <p><strong>Role:</strong> Real-world realism pradan karna, human faces aur landscapes ko natural roop mein dikhana.</p>
              <p><strong>Example:</strong> Digital camera se li gayi photo, scanned document, e-commerce product photograph.</p>
            </div>
          </div>

          {/* Element 4: Audio */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <Music className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                4. Audio (ध्वनि / ऑडियो)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 ml-auto">
                Continuous / Time-based
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Audio acoustic sound waves ka digital representation hai. Isme Voice/Speech (bol), Music (sangeet) aur Sound Effects (SFX - jaise button click sound, vehicle horn, ambient background noise) shaamil hain. Audio ek continuous time-based media hai jiska pratyek sample samay par depend karta hai.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-secondary/50 p-3 rounded-lg border border-border">
              <p><strong>Technical Digitization:</strong> ADC (Analog to Digital Converter), Sampling Rate (CD Quality = 44.1 kHz, Studio = 48 kHz/96 kHz), Bit Depth (16-bit, 24-bit). Formats: MP3, AAC, WAV, FLAC.</p>
              <p><strong>Role:</strong> Emotional impact badhana, verbal explanation dena, aur interactive UI feedback sound provide karna.</p>
              <p><strong>Example:</strong> Teacher ka lecture voiceover, background orchestral music, video game gunshot sound.</p>
            </div>
          </div>

          {/* Element 5: Video */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Film className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                5. Video (चलचित्र / वीडियो)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 ml-auto">
                Continuous / High-Bandwidth
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Video vastavik recording hoti hai jisme photographic frames ko aisi tezi se screen par display kiya jata hai jisse human eye ko seamless motion (gati) ka aabhas hota hai. Video ke saath hamesha synchronized audio track juda hota hai.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-secondary/50 p-3 rounded-lg border border-border">
              <p><strong>Technical Parameters:</strong> Frame Rate (FPS - 24 fps for Cinema, 30 fps for TV, 60 fps for Gaming), Bitrate (Mbps), Compression Codecs (H.264/AVC, H.265/HEVC, AV1). Containers: MP4, MKV.</p>
              <p><strong>Role:</strong> Sabse powerful media element jo real-world actions, demonstrations aur live events ko accurately deliver karta hai.</p>
              <p><strong>Example:</strong> YouTube tutorial video, live cricket match stream, video conference call.</p>
            </div>
          </div>

          {/* Element 6: Animation */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                <Zap className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                6. Animation (एनिमेशन / सजीवता)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 ml-auto">
                Generated Motion
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Animation computer-generated ya drawn still pictures ko sequentially tezi se display karke motion ka illusion (bhram) paida karne ki kala hai. Video real-world recording hoti hai, jabki animation artificial/computer-created models ya sketches par adharit hoti hai.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-secondary/50 p-3 rounded-lg border border-border">
              <p><strong>Types:</strong> 2D Animation (Vector keyframing - Toon Boom, Flash/Animate) aur 3D Animation (Polygonal modeling, Rigging, Skinning, Lighting, Raytracing - Maya, Blender).</p>
              <p><strong>Role:</strong> Un kalpnaon, scientific working models ya cartoon characters ko jeevant karna jo vastavik camera se shoot nahi kiye ja sakte.</p>
              <p><strong>Example:</strong> Car engine working animation, DNA double-helix rotation, Pixar animated movies, video game character movement.</p>
            </div>
          </div>
        </div>

        {/* 1.4 How Elements Work Together */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.4 How Elements Work Together in a Multimedia System (तत्वों का एकीकरण)
        </h3>
        <p className="mb-4 leading-relaxed">
          Multimedia system ki asali shakti kisi single element mein nahi, balki unke <strong>Synergy (सामूहिक समन्वय)</strong> mein hoti hai. Ek single screen par jab:
        </p>
        <div className="p-4 rounded-xl border border-border bg-secondary/40 text-sm leading-relaxed space-y-2 mb-6">
          <p>
            <span className="font-bold text-brand-600 dark:text-brand-400">• Text</span> concept ka naam aur definition batata hai,
          </p>
          <p>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">• Graphics & Images</span> uska structural diagram aur real photograph dikhate hain,
          </p>
          <p>
            <span className="font-bold text-teal-600 dark:text-teal-400">• Animation</span> internal mechanical movement ya chemical reaction ko simulate karta hai,
          </p>
          <p>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">• Video</span> real-life field test ya laboratory demonstration dikhata hai, aur
          </p>
          <p>
            <span className="font-bold text-rose-600 dark:text-rose-400">• Audio</span> background narration aur auditory feedback ke dwara guide karta hai,
          </p>
          <p className="pt-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-border">
            Tab yeh sabhi elements computer system ke dwara ek single timeline par synchronize hokar user ko comprehensive multi-sensory experience dete hain.
          </p>
        </div>

        {/* 1.5 Basic Characteristics/Features of Multimedia */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.5 Essential Characteristics of Multimedia
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">1. Digital Nature</strong>
            <p className="text-xs text-text-secondary">Sabhi media types computer ke andar binary 0s aur 1s ke roop mein store aur process hote hain.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">2. Interactivity</strong>
            <p className="text-xs text-text-secondary">User content ke execution sequence, navigation aur speed ko keyboard, mouse ya touch se control kar sakta hai.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">3. Integrated System</strong>
            <p className="text-xs text-text-secondary">Sabhi media elements alag-alag file hone ke bajaye ek cohesive single application framework mein integrate hote hain.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">4. Synchronization</strong>
            <p className="text-xs text-text-secondary">Continuous media (audio aur video) ka aapas mein precise timing coordination hota hai taaki lip-sync kharab na ho.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">5. Non-Linearity</strong>
            <p className="text-xs text-text-secondary">Kitab ki tarah page-by-page padhne ki bajaye hypermedia links se user seedhe kisi bhi topic par jump kar sakta hai.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">6. High Bandwidth & Storage</strong>
            <p className="text-xs text-text-secondary">Normal text ke mukable multimedia data transmission ke liye gigabit network aur high processing power chahiye hoti hai.</p>
          </div>
        </div>

        {/* 1.6 Real-World Domains & Applications */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          1.6 Real-World Applications of Multimedia
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-sm">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-1 font-semibold flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-brand-600" />
              1. Education & E-Learning (शिक्षा एवं ई-लर्निंग)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Virtual classrooms, interactive textbooks, video lectures (NPTEL, Coursera), 3D medical anatomy models jisme student organs ko 360 degree rotate karke dekh sakta hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-1 font-semibold flex items-center gap-1.5">
              <Tv className="w-4 h-4 text-brand-600" />
              2. Entertainment & Gaming (मनोरंजन एवं गेमिंग)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              High-definition OTT platforms (Netflix, Hotstar), AAA video games (raytraced graphics, 7.1 surround sound), Hollywood VFX (visual effects) aur computer CGI movies.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-1 font-semibold flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-brand-600" />
              3. Digital Advertising & E-Commerce (विज्ञापन एवं ई-कॉमर्स)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Interactive social media video ads, 3D product previews (Amazon/Flipkart par shoes ya furniture ka 3D AR view), billboards aur interactive digital kiosks.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white block mb-1 font-semibold flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-brand-600" />
              4. Corporate Presentations & Engineering Simulations
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Aerospace flight simulators (pilot training without real aircraft risk), architectural 3D building walkthroughs, annual company business meetings and webinars.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 1: MULTIMEDIA COMPONENTS DIAGRAM */}
        <EducationalFigure
          caption="Figure 1.1: Comprehensive Structural Hierarchy & Interactivity of Core Multimedia Elements"
          source="Educational Engineering Standards • BTEUP Curriculum"
          license="Open Educational Diagram"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="inline-block p-3 rounded-xl bg-brand-600 text-white font-bold text-sm sm:text-base shadow-md uppercase tracking-wider mb-6">
              Interactive Multimedia System
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono max-w-xl mx-auto">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-300">
                <FileText className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <strong>TEXT</strong>
                <p className="text-[10px] text-text-muted mt-1">Titles, Specs, Subtitles</p>
              </div>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                <Layers className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                <strong>GRAPHICS</strong>
                <p className="text-[10px] text-text-muted mt-1">Vectors, Blueprints, Charts</p>
              </div>
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
                <Image className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <strong>IMAGES</strong>
                <p className="text-[10px] text-text-muted mt-1">Bitmaps, 24-bit Pixels</p>
              </div>
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300">
                <Music className="w-5 h-5 mx-auto mb-1 text-rose-600" />
                <strong>AUDIO</strong>
                <p className="text-[10px] text-text-muted mt-1">Speech, BGM, Sound FX</p>
              </div>
              <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
                <Film className="w-5 h-5 mx-auto mb-1 text-indigo-600" />
                <strong>VIDEO</strong>
                <p className="text-[10px] text-text-muted mt-1">Frames, Motion, Live Feed</p>
              </div>
              <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300">
                <Zap className="w-5 h-5 mx-auto mb-1 text-teal-600" />
                <strong>ANIMATION</strong>
                <p className="text-[10px] text-text-muted mt-1">2D/3D Tweens, CGI Sim</p>
              </div>
            </div>
            <div className="mt-5 text-xs text-text-muted flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>All 6 components bound together by Operating System Scheduling & Synchronization</span>
            </div>
          </div>
        </EducationalFigure>

        {/* Exam Point Box */}
        <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 my-6">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm mb-1">
            <Award className="w-4 h-4" />
            <span>Exam Point • 10-Mark Question Tip:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Agar exam mein question aaye: <em>"Define Multimedia. Explain its main elements and real-world applications with a block diagram (10 Marks)"</em>, to sabse pehle derivation likhein (Multi + Media), fir formal definition, chhah (6) elements ke bullet points with format examples, characteristics, Figure 1.1 ka diagram, aur 4 real-world domains likhkar answer complete karein.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: TOPIC 1 - MULTIMEDIA HARDWARE */}
      {/* ========================================================= */}
      <section id="multimedia-hardware" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              TOPIC 1 • 10-MARK QUESTION
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Multimedia Hardware
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (मल्टीमीडिया हार्डवेयर: आवश्यकता, प्रोसेसिंग यूनिट्स [CPU/GPU/RAM], इनपुट, स्टोरेज एवं आउटपुट डिवाइसेज)
          </div>
        </div>

        {/* 2.1 What is Multimedia Hardware? */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          2.1 What is Multimedia Hardware? (मल्टीमीडिया हार्डवेयर क्या है?)
        </h3>
        <p className="mb-4 leading-relaxed">
          <strong>Multimedia Hardware</strong> un sabhi physical devices, electronic circuits, chips, peripheral units aur connection buses ka samuh hai jinka upyog multimedia data (audio, video, high-resolution graphics) ko <strong>Capture (in-take)</strong> karne, <strong>Digitize</strong> karne, <strong>Process (calculate/render)</strong> karne, <strong>Store</strong> karne, aur <strong>Display/Play (output)</strong> karne ke liye kiya jata hai.
        </p>

        {/* 2.2 Why Hardware is Required for Multimedia */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          2.2 Why is Specialized Hardware Required for Multimedia?
        </h3>
        <p className="mb-4 leading-relaxed">
          Normal office computers jo sirf MS Word, Excel ya accounting software chalate hain, unhe high-performance hardware ki zaroorat nahi hoti. Lekin multimedia applications mein hardware ke samne aam computing ke mukable 100 guna se 1000 guna zyada chunautiyan hoti hain:
        </p>
        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface flex items-start gap-3">
            <span className="p-1 rounded bg-brand-500/10 text-brand-600 mt-0.5"><Zap className="w-4 h-4" /></span>
            <div>
              <strong className="text-sm text-slate-900 dark:text-white block">1. Massive Data Volume (अत्यधिक डेटा साइज)</strong>
              <p className="text-xs text-text-secondary mt-0.5">
                Ek single uncompressed 4K frame (3840×2160 pixels × 3 bytes per pixel) lagbhag <strong>24.8 MB</strong> ka hota hai. Agar video 60 FPS par chal rahi hai, to sirf 1 second mein <strong>1.48 GB</strong> data generate hota hai! Ise handle karne ke liye ultra-fast buses aur memory bandwidth chahiye.
              </p>
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface flex items-start gap-3">
            <span className="p-1 rounded bg-brand-500/10 text-brand-600 mt-0.5"><Clock className="w-4 h-4" /></span>
            <div>
              <strong className="text-sm text-slate-900 dark:text-white block">2. Strict Real-Time Deadlines (कड़े समय प्रतिबंध)</strong>
              <p className="text-xs text-text-secondary mt-0.5">
                Video playback mein har 16.6 milliseconds (60Hz) mein ek naya frame screen par render hona zaroori hai. Agar hardware slow pad gaya, to video mein frame drops, stutter aur audio lag paida ho jayega jo unacceptable hai.
              </p>
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface flex items-start gap-3">
            <span className="p-1 rounded bg-brand-500/10 text-brand-600 mt-0.5"><Cpu className="w-4 h-4" /></span>
            <div>
              <strong className="text-sm text-slate-900 dark:text-white block">3. Heavy Mathematical Transformations (जटिल गणितीय गणनाएं)</strong>
              <p className="text-xs text-text-secondary mt-0.5">
                Video aur audio compression algorithms (DCT, Wavelet, Motion Estimation, Color Space conversion from RGB to YUV) mein billions of floating-point calculations per second (FLOPS) hoti hain jinhe general-purpose CPU akele bina GPU/DSP acceleration ke handle nahi kar sakta.
              </p>
            </div>
          </div>
        </div>

        {/* 2.3 Input Devices Used in Multimedia */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          2.3 Input Devices Used in Multimedia (इनपुट डिवाइसेज)
        </h3>
        <p className="mb-4 leading-relaxed">
          Input devices vastavik duniya ke analog signals (light waves, sound waves, physical motion) ko capture karke digital binary format (0s aur 1s) mein convert karti hain:
        </p>

        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs my-5">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2.5 px-3.5 font-bold text-slate-900 dark:text-white">Device</th>
                <th className="py-2.5 px-3.5 font-bold text-slate-900 dark:text-white">Primary Purpose</th>
                <th className="py-2.5 px-3.5 font-bold text-slate-900 dark:text-white">Working Principle & Technology</th>
                <th className="py-2.5 px-3.5 font-bold text-brand-600 dark:text-brand-400">Multimedia Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-blue-500" /> Keyboard & Mouse
                </td>
                <td className="py-2.5 px-3.5 text-text-secondary">Text entry, menu navigation, object selection</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Key matrices, optical laser sensors for X-Y pointer displacement</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Script writing, timeline scrubbing, parameter sliders adjust karna</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Image className="w-4 h-4 text-emerald-500" /> Optical Scanner
                </td>
                <td className="py-2.5 px-3.5 text-text-secondary">Physical paper/photo to digital image</td>
                <td className="py-2.5 px-3.5 text-text-secondary">CCD (Charge-Coupled Device) sensor array, 1200-4800 DPI resolution</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Purani photos digitize karna, hand-drawn sketches ko Photoshop mein lana</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Mic className="w-4 h-4 text-rose-500" /> Microphone
                </td>
                <td className="py-2.5 px-3.5 text-text-secondary">Acoustic audio wave in-take</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Diaphragm vibration → Electric signal → ADC conversion (Dynamic / Condenser)</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Podcast recording, dubbing voiceovers, singer vocals, acoustic instruments</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-indigo-500" /> Digital Camera / Webcam
                </td>
                <td className="py-2.5 px-3.5 text-text-secondary">High-res still photos & live motion video</td>
                <td className="py-2.5 px-3.5 text-text-secondary">CMOS/CCD light sensors with Bayer color filter, optical zoom lens</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Live video conferences, movie production shoots, YouTube vlog recording</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-purple-500" /> Graphics Tablet (Digitizer)
                </td>
                <td className="py-2.5 px-3.5 text-text-secondary">Freehand drawing & digital painting</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Electromagnetic resonance (EMR), Stylus with 8192 pressure levels & tilt</td>
                <td className="py-2.5 px-3.5 text-text-secondary">2D concept sketching, 3D character sculpting in ZBrush, digital calligraphy</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2.4 Processing Hardware */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          2.4 Processing Hardware (प्रोसेसिंग हार्डवेयर: CPU, GPU, RAM)
        </h3>
        <p className="mb-4 leading-relaxed">
          Processing hardware multimedia computer ka "Dimaag" (Brain) aur "Engine" hota hai. Yahi un sabhi complex algorithms ko execute karta hai:
        </p>

        <div className="space-y-4 my-5">
          {/* CPU */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Cpu className="w-5 h-5" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Central Processing Unit (CPU)
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              CPU general-purpose calculations, operating system management, file I/O operations aur multimedia software logic ko execute karta hai. Modern multimedia CPUs multi-core hote hain (8 cores, 16 threads ya usse zyada).
            </p>
            <div className="text-xs text-text-secondary bg-secondary/50 p-3 rounded-lg border border-border space-y-1.5">
              <p>
                <strong>SIMD Instruction Sets (Single Instruction Multiple Data):</strong> Media processing ko tez karne ke liye modern CPUs mein special vector instruction sets hote hain—jaise Intel/AMD ke <strong>SSE, AVX-2, AVX-512</strong>. Yeh ek single clock cycle mein multiple audio/video data bits ko parallel process karte hain.
              </p>
              <p>
                <strong>Role in Multimedia:</strong> Audio DSP synthesis, video decoding orchestration, codec packet demuxing, physics simulation, software filters.
              </p>
            </div>
          </div>

          {/* GPU */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Zap className="w-5 h-5" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Graphics Processing Unit (GPU)
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              GPU ko vishesh roop se parallel graphics rendering ke liye design kiya gaya hai. Jahan CPU ke paas 8 ya 16 powerful cores hote hain, wahi GPU ke paas <strong>hazaaron chhote arithmetic cores (CUDA Cores / Stream Processors)</strong> hote hain jo ek saath lakho pixels ko parallel process kar sakte hain.
            </p>
            <div className="text-xs text-text-secondary bg-secondary/50 p-3 rounded-lg border border-border space-y-1.5">
              <p>
                <strong>Hardware Video Encoders/Decoders:</strong> Dedicated silicon chips (jaise NVIDIA NVENC/NVDEC ya Intel QuickSync) jo CPU par bojh dale bina 4K/8K video ko real-time mein encode aur decode karte hain.
              </p>
              <p>
                <strong>Ray Tracing & Shaders:</strong> Real-time ray tracing (RT Cores) physical light reflections, shadows aur refractions ko photorealistic banata hai.
              </p>
            </div>
          </div>

          {/* CPU vs GPU Comparison Table */}
          <div className="my-5">
            <h5 className="text-sm font-bold font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
              Comparison Table • CPU vs GPU in Multimedia Processing
            </h5>
            <div className="overflow-x-auto border border-border rounded-xl shadow-2xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-secondary/70 border-b border-border">
                    <th className="py-2.5 px-3.5 font-bold">Feature</th>
                    <th className="py-2.5 px-3.5 font-bold text-blue-600 dark:text-blue-400">CPU (Central Processing Unit)</th>
                    <th className="py-2.5 px-3.5 font-bold text-purple-600 dark:text-purple-400">GPU (Graphics Processing Unit)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 px-3.5 font-semibold">Core Architecture</td>
                    <td className="py-2 px-3.5 text-text-secondary">Few complex cores (4 to 16 cores) optimized for sequential computing</td>
                    <td className="py-2 px-3.5 text-text-secondary">Thousands of smaller cores (2000 to 10,000+ cores) built for massive parallelism</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3.5 font-semibold">Specialization</td>
                    <td className="py-2 px-3.5 text-text-secondary">General-purpose logic, OS tasks, branched execution</td>
                    <td className="py-2 px-3.5 text-text-secondary">Vector math, matrix multiplications, pixel shading, 3D polygon rasterization</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3.5 font-semibold">Memory Type</td>
                    <td className="py-2 px-3.5 text-text-secondary">System RAM (DDR4 / DDR5) with wide latency tolerance</td>
                    <td className="py-2 px-3.5 text-text-secondary">VRAM (GDDR6 / HBM2) with enormous memory bandwidth (up to 1000 GB/s)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3.5 font-semibold">Multimedia Task</td>
                    <td className="py-2 px-3.5 text-text-secondary">Audio track mixing, user interface events, file saving</td>
                    <td className="py-2 px-3.5 text-text-secondary">4K video timeline color grading, 3D animation rendering, live video scaling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RAM */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Database className="w-5 h-5" />
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Random Access Memory (RAM) & VRAM
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              RAM high-speed volatile memory hoti hai jisme active multimedia applications aur uncompressed media frames store hote hain. Video editing software (jaise Premiere Pro ya DaVinci Resolve) playback ke dauran uncompressed frames ko RAM ke andar cache karta hai taaki timeline bina ruke smooth chale.
            </p>
            <div className="text-xs text-text-secondary bg-secondary/50 p-3 rounded-lg border border-border">
              <p><strong>Kyun Zaroori Hai Badi RAM?:</strong> Ek 10-minute ki uncompressed 4K video timeline par kaam karte samay hazaron video frames, audio tracks, effects layers aur undo history RAM mein rehte hain. Isliye multimedia workstations mein minimum 16 GB se 64 GB RAM mandatory hoti hai.</p>
            </div>
          </div>
        </div>

        {/* 2.5 Storage Devices */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          2.5 Storage Devices (भंडारण उपकरण)
        </h3>
        <p className="mb-4 leading-relaxed">
          Multimedia production mein data file sizes gigabytes aur terabytes mein hote hain. Storage devices ko do categories mein dekha jata hai:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white font-semibold block text-base mb-1 flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-amber-500" />
              1. Solid State Drive (SSD - NVMe M.2)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              NAND flash chips par adharit memory jisme koi moving parts nahi hote. Read/Write speed 3,500 se 7,500 MB/s hoti hai.
            </p>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              Ideal for Active Video Editing & OS
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white font-semibold block text-base mb-1 flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-blue-500" />
              2. Hard Disk Drive (HDD)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              Magnetic spinning platters par adharit storage. Capacity bahut zyada aur sasti hoti hai, lekin speed lagbhag 120-180 MB/s tak seemit hoti hai.
            </p>
            <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
              Ideal for Bulk Archival & Raw Footage Backup
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white font-semibold block text-base mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-purple-500" />
              3. Optical Storage (CD, DVD, Blu-Ray)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              Laser beam dwara pits aur lands read karke data read/write kiya jata hai. CD (700 MB), DVD (4.7 GB), Blu-Ray (25 GB - 50 GB).
            </p>
            <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
              Historical Distribution Medium (Movies, Games)
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-slate-900 dark:text-white font-semibold block text-base mb-1 flex items-center gap-1.5">
              <Server className="w-4 h-4 text-teal-500" />
              4. External & NAS (Network Attached Storage)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed mb-2">
              USB 3.2 / Thunderbolt portable SSDs aur RAID configurations wale network servers jo multiple editors ko ek saath raw video footage access karne dete hain.
            </p>
            <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
              Collaborative Studio Workflows
            </span>
          </div>
        </div>

        {/* 2.6 Output Devices in Multimedia */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          2.6 Output Devices in Multimedia (आउटपुट डिवाइसेज)
        </h3>
        <p className="mb-4 leading-relaxed">
          Output devices processed digital binary data ko wapas insaano ke anubhav karne yogya roop (roshni aur aawaz) mein badalti hain:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-sm leading-relaxed">
          <li>
            <strong>High-Resolution Monitors & Displays:</strong> Multimedia graphics aur video ke liye accurate colors (100% sRGB / DCI-P3 gamut), IPS/OLED panel technology, 4K resolution (3840×2160) aur smooth refresh rates (60Hz / 120Hz) zaroori hote hain taaki colors natural dikhein.
          </li>
          <li>
            <strong>Audio Output Hardware (DAC, Studio Monitors, Headphones):</strong> Digital audio bits ko analog sound waves mein badalne ke liye high-fidelity <strong>Digital-to-Analog Converter (DAC)</strong> aur Sound Card ka use hota hai. Studio reference monitor speakers bina kisi artificial bass boost ke flat sound dete hain taaki audio mixer ko har mistake sunayi de.
          </li>
          <li>
            <strong>Digital Projectors:</strong> Badi audience ke samne interactive presentations, cinema halls ya classrooms mein display karne ke liye DLP (Digital Light Processing) ya 3LCD projectors ka upyog kiya jata hai.
          </li>
          <li>
            <strong>Color Printers:</strong> DTP (Desktop Publishing) aur graphic design mein print proofing ke liye high-DPI color laser aur inkjet printers ka upyog hota hai.
          </li>
        </ul>

        {/* EDUCATIONAL FIGURE 2: MULTIMEDIA HARDWARE BLOCK DIAGRAM */}
        <EducationalFigure
          caption="Figure 1.2: Multimedia Hardware Architecture & End-to-End Processing Pipeline"
          source="Wikimedia Commons / Computer Architecture Reference"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Von_Neumann_Architecture.svg"
          license="CC BY-SA 3.0"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">
              Hardware Data Flow • Input → Processing → Storage → Output
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono max-w-xl mx-auto items-stretch">
              {/* Box 1: Input */}
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">INPUT</strong>
                  <p className="text-[10px] text-text-muted">Digitizers & ADC</p>
                </div>
                <div className="text-[11px] text-text-secondary mt-2 space-y-0.5">
                  <p>• Mic (Audio ADC)</p>
                  <p>• Camera (CMOS)</p>
                  <p>• Scanner (CCD)</p>
                  <p>• Pen Tablet</p>
                </div>
              </div>

              {/* Box 2: Processing */}
              <div className="p-3 rounded-xl bg-purple-500/10 border-2 border-purple-500/50 flex flex-col justify-between shadow-sm">
                <div>
                  <strong className="text-purple-700 dark:text-purple-300 block mb-1 text-sm">PROCESSING</strong>
                  <p className="text-[10px] text-text-muted">High-Speed Engine</p>
                </div>
                <div className="text-[11px] text-text-secondary mt-2 space-y-0.5">
                  <p>• Multi-core CPU</p>
                  <p>• Parallel GPU</p>
                  <p>• DDR5 RAM Cache</p>
                  <p>• DSP Sound Card</p>
                </div>
              </div>

              {/* Box 3: Storage */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-amber-700 dark:text-amber-300 block mb-1 text-sm">STORAGE</strong>
                  <p className="text-[10px] text-text-muted">Non-Volatile Media</p>
                </div>
                <div className="text-[11px] text-text-secondary mt-2 space-y-0.5">
                  <p>• NVMe M.2 SSD</p>
                  <p>• High-Cap HDD</p>
                  <p>• NAS RAID Server</p>
                  <p>• Optical Blu-Ray</p>
                </div>
              </div>

              {/* Box 4: Output */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <strong className="text-emerald-700 dark:text-emerald-300 block mb-1 text-sm">OUTPUT</strong>
                  <p className="text-[10px] text-text-muted">DAC & Rendering</p>
                </div>
                <div className="text-[11px] text-text-secondary mt-2 space-y-0.5">
                  <p>• 4K OLED Monitor</p>
                  <p>• Studio Speakers</p>
                  <p>• Headphones (DAC)</p>
                  <p>• 3LCD Projector</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-text-muted">
              <span>Bus Subsystem: PCIe 4.0 / 5.0 (64 GB/s) High-Speed Interconnect</span>
            </div>
          </div>
        </EducationalFigure>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 my-6">
          <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-sm mb-1">
            <Lightbulb className="w-4 h-4 text-blue-600" />
            <span>Yaad Rakho • Hardware Architecture Tip:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Exam mein Multimedia Hardware par question aane par hamesha 4 mukhya blocks bana kar explain karein: <strong>1. Input</strong>, <strong>2. Processing (CPU + GPU + RAM)</strong>, <strong>3. Storage</strong>, aur <strong>4. Output</strong>. CPU aur GPU ka comparison table zaroor likhein, isse examiner par solid impression padta hai aur full marks milte hain.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: TOPIC 2 - MULTIMEDIA SOFTWARE */}
      {/* ========================================================= */}
      <section id="multimedia-software" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              TOPIC 2 • 10-MARK QUESTION
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Multimedia Software & Production
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (मल्टीमीडिया सॉफ्टवेयर: श्रेणियां, टूल्स, हार्डवेयर बनाम सॉफ्टवेयर तुलना एवं प्रोडक्शन वर्कफ्लो)
          </div>
        </div>

        {/* 3.1 Meaning & Definition */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          3.1 Meaning & Definition of Multimedia Software
        </h3>
        <p className="mb-4 leading-relaxed">
          Bina software ke computer hardware bejaan dabba hai. <strong>Multimedia Software</strong> un computer programs, libraries, drivers, aur application packages ka collection hai jinka upyog multimedia content (text, graphics, audio, video, animation) ko <strong>Create (banane)</strong>, <strong>Edit (sudharne/katne)</strong>, <strong>Synthesize</strong>, <strong>Integrate (aapas mein jodkar author karne)</strong>, aur <strong>Play (display karne)</strong> ke liye kiya jata hai.
        </p>

        {/* 3.2 Seven Major Categories */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          3.2 Major Categories of Multimedia Software (सॉफ्टवेयर की 7 श्रेणियां)
        </h3>
        <p className="mb-4 leading-relaxed">
          Multimedia production ek vast domain hai. Isme kaam ke nature ke aadhar par software ko 7 mukhya categories mein vargikrit (classify) kiya jata hai:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          {/* Category 1: Image & Graphics */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600"><Image className="w-4 h-4" /></span>
                <strong className="text-base font-bold text-slate-900 dark:text-white">1. Image & Graphics Software</strong>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                Digital photos ko retouch karne, color grading karne aur vector illustrations banane ke liye use hota hai.
              </p>
            </div>
            <div className="text-xs bg-secondary/50 p-2.5 rounded-lg border border-border space-y-1">
              <p><strong>Raster Editors:</strong> Adobe Photoshop, GIMP (Open Source), Corel PaintShop Pro.</p>
              <p><strong>Vector Editors:</strong> Adobe Illustrator, CorelDRAW, Inkscape.</p>
              <p className="text-text-muted">Use: Photo retouching, background removal, website UI mockups, logos.</p>
            </div>
          </div>

          {/* Category 2: Audio Editing */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600"><Music className="w-4 h-4" /></span>
                <strong className="text-base font-bold text-slate-900 dark:text-white">2. Audio Editing Software (DAWs)</strong>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                Multi-track voice recording, background noise cancellation, pitch correction, frequency equalization aur audio mixing ke liye.
              </p>
            </div>
            <div className="text-xs bg-secondary/50 p-2.5 rounded-lg border border-border space-y-1">
              <p><strong>Popular Tools:</strong> Audacity (Free), Adobe Audition, Pro Tools, FL Studio, Logic Pro.</p>
              <p className="text-text-muted">Use: Podcast editing, movie sound mixing, music composition, noise reduction.</p>
            </div>
          </div>

          {/* Category 3: Video Editing */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600"><Film className="w-4 h-4" /></span>
                <strong className="text-base font-bold text-slate-900 dark:text-white">3. Video Editing Software (NLE)</strong>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                Non-Linear Editing (NLE) tools jisme video clips ko timeline par arrange kiya jata hai, cuts, transitions, green-screen chroma key aur audio sync lagaya jata hai.
              </p>
            </div>
            <div className="text-xs bg-secondary/50 p-2.5 rounded-lg border border-border space-y-1">
              <p><strong>Industry Standards:</strong> Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, Kdenlive.</p>
              <p className="text-text-muted">Use: Feature films, YouTube video production, TV commercials, news editing.</p>
            </div>
          </div>

          {/* Category 4: Animation Software */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600"><Zap className="w-4 h-4" /></span>
                <strong className="text-base font-bold text-slate-900 dark:text-white">4. 2D / 3D Animation Software</strong>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                Characters aur objects ko virtual space mein model karke unme movement (kinematics) generate karna aur realistic rendering karna.
              </p>
            </div>
            <div className="text-xs bg-secondary/50 p-2.5 rounded-lg border border-border space-y-1">
              <p><strong>3D Tools:</strong> Blender (Free & Powerful), Autodesk Maya, 3ds Max, Cinema 4D.</p>
              <p><strong>2D Tools:</strong> Adobe Animate, Toon Boom Harmony.</p>
              <p className="text-text-muted">Use: 3D animated movies, video game assets, scientific simulations.</p>
            </div>
          </div>

          {/* Category 5: Presentation Software */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600"><Tv className="w-4 h-4" /></span>
                <strong className="text-base font-bold text-slate-900 dark:text-white">5. Presentation Software</strong>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                Text, charts, images, audio narration aur video clips ko slide-by-slide interactive presentation format mein combine karna.
              </p>
            </div>
            <div className="text-xs bg-secondary/50 p-2.5 rounded-lg border border-border space-y-1">
              <p><strong>Popular Tools:</strong> Microsoft PowerPoint, Google Slides, Apple Keynote, Prezi.</p>
              <p className="text-text-muted">Use: College seminars, boardroom corporate pitches, classroom lectures.</p>
            </div>
          </div>

          {/* Category 6: Multimedia Authoring Tools */}
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600"><Workflow className="w-4 h-4" /></span>
                <strong className="text-base font-bold text-slate-900 dark:text-white">6. Multimedia Authoring Tools</strong>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                Alag-alag media elements ko jodkar ek standalone interactive software package (jaise CBT - Computer Based Training CD/App) taiyar karna.
              </p>
            </div>
            <div className="text-xs bg-secondary/50 p-2.5 rounded-lg border border-border space-y-1">
              <p><strong>Authoring Systems:</strong> Adobe Director (Historical), Articulate Storyline, Adobe Captivate, Unity 3D engine.</p>
              <p className="text-text-muted">Use: Interactive e-learning courses, interactive touch-screen museum guides.</p>
            </div>
          </div>
        </div>

        {/* Category 7: Media Players */}
        <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface my-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600"><Activity className="w-4 h-4" /></span>
            <strong className="text-base font-bold text-slate-900 dark:text-white">7. Media Players (मीडिया प्लेयर्स)</strong>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
            Yeh end-user software hote hain jinka kaam created multimedia content ko decode karke screen aur speakers par play karna hota hai. Yeh internal codecs (H.264, AAC, MP3) ka use karke compressed files ko uncompress karte hain.
          </p>
          <div className="text-xs text-text-muted">
            <strong>Examples:</strong> VLC Media Player (Universal Codec support), Windows Media Player, QuickTime Player, MPV.
          </div>
        </div>

        {/* 3.3 Hardware vs Software Comparison Table */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          3.3 Multimedia Hardware vs Multimedia Software (महत्वपूर्ण अंतर)
        </h3>
        <p className="mb-4 leading-relaxed">
          Polytechnic parikshaon mein Hardware aur Software ke beech seedha antar aksar pucha jata hai:
        </p>

        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs my-5">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2.5 px-3.5 font-bold text-slate-900 dark:text-white">Parameter</th>
                <th className="py-2.5 px-3.5 font-bold text-blue-600 dark:text-blue-400">Multimedia Hardware</th>
                <th className="py-2.5 px-3.5 font-bold text-purple-600 dark:text-purple-400">Multimedia Software</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">Basic Nature</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Physical electronic components jinhe chua aur dekha ja sakta hai (Tangible).</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Coded programs aur instructions ka samuh jinhe chua nahi ja sakta (Intangible).</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">Primary Function</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Raw physical signal capture, electronic signal transmission aur computation execution.</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Media content ko manipulate, edit, color grade, compress aur synchronize karna.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">Dependency</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Bina software ke hardware kuch process nahi kar sakta (Idle silicon).</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Hardware platform (CPU, GPU, RAM, Screen) ke bina software execute nahi ho sakta.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">Wear and Tear</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Physical wear and tear hota hai (heating, component degradation over years).</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Physical roop se kharab nahi hota, par software bugs ya OS obsolescence ho sakti hai.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">Upgradation</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Naya graphics card ya RAM stick kharid kar physical installation karna padta hai (Costly).</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Internet se patch download karke ya license renew karke update ho jata hai.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">Examples</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Intel Core i7 CPU, NVIDIA RTX GPU, Wacom Tablet, 4K OLED Monitor, Studio Mic.</td>
                <td className="py-2.5 px-3.5 text-text-secondary">Adobe Premiere Pro, Blender 3D, Audacity, Photoshop, VLC Media Player.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3.4 General Multimedia Production Workflow */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          3.4 General Multimedia Production Workflow (उत्पादन जीवन चक्र)
        </h3>
        <p className="mb-4 leading-relaxed">
          Kisi bhi professional multimedia project (jaise ek educational e-learning app, movie documentary ya commercial ad) ko shuru se ant tak pura karne ke liye 6-stage structured lifecycle follow kiya jata hai:
        </p>

        <div className="space-y-3 my-5">
          <div className="p-4 rounded-xl border border-border bg-surface flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <div>
              <strong className="text-sm font-bold text-slate-900 dark:text-white block">Planning & Pre-Production (योजना एवं पूर्व-उत्पादन)</strong>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Project ka objective tay karna, target audience ko analyse karna, budget aur deadlines fix karna. Is stage par <strong>Script Writing</strong> aur <strong>Storyboarding</strong> (har scene ka visual sketch) banaya jata hai.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <div>
              <strong className="text-sm font-bold text-slate-900 dark:text-white block">Content Creation & Gathering (सामग्री निर्माण एवं संग्रहण)</strong>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Raw assets create ya capture karna: High-definition cameras se video shoot karna, studio mic se audio voiceovers aur Foley effects record karna, Illustrator mein vectors design karna aur Blender mein 3D models banana.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <div>
              <strong className="text-sm font-bold text-slate-900 dark:text-white block">Editing & Processing (संपादन एवं प्रसंस्करण)</strong>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Raw media ko refine karna: Premiere Pro mein unwanted video footage ko cut/trim karna, Audacity mein background hiss noise hatana, Photoshop mein brightness/contrast adjust karna aur VFX visual effects apply karna.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
            <div>
              <strong className="text-sm font-bold text-slate-900 dark:text-white block">Integration & Authoring (एकीकरण एवं संयोजन)</strong>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Sabhi alag-alag components (text, background music, video clips, button icons) ko ek single interactive timeline ya software engine (jaise Unity ya Storyline) mein integrate karna aur interactive button actions assign karna.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
            <div>
              <strong className="text-sm font-bold text-slate-900 dark:text-white block">Testing & Quality Assurance (परीक्षण एवं गुणवत्ता जांच)</strong>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Cross-platform testing: Kya application alag-alag screen resolutions (Mobile, Tablet, Desktop) par theek se dikh rahi hai? Kya audio aur video ka lip-sync perfect hai? Kya sabhi buttons aur links theek se kaam kar rahe hain?
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
            <div>
              <strong className="text-sm font-bold text-slate-900 dark:text-white block">Publishing & Distribution (प्रकाशन एवं वितरण)</strong>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Final master render nikalna: Appropriate compression formats (e.g. H.264/MP4 for web streaming, high-bitrate ProRes for TV broadcast), YouTube/CDN par upload karna, ya app store par deploy karna.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATIONAL FIGURE 3: PRODUCTION WORKFLOW */}
        <EducationalFigure
          caption="Figure 1.3: Systematic Engineering Stages of the Multimedia Production Lifecycle"
          source="Polytechnic Curriculum Standard • Production Flow"
          license="Open Educational Diagram"
          maxWidth="max-w-2xl"
        >
          <div className="w-full py-4 text-center font-sans">
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto text-xs font-mono">
              <span className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 font-bold text-blue-700 dark:text-blue-300">
                1. Planning & Storyboard
              </span>
              <span className="text-text-muted">➔</span>
              <span className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-bold text-emerald-700 dark:text-emerald-300">
                2. Content Creation
              </span>
              <span className="text-text-muted">➔</span>
              <span className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 font-bold text-purple-700 dark:text-purple-300">
                3. Editing & Filters
              </span>
              <span className="text-text-muted">➔</span>
              <span className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 font-bold text-amber-700 dark:text-amber-300">
                4. Integration / Authoring
              </span>
              <span className="text-text-muted">➔</span>
              <span className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 font-bold text-rose-700 dark:text-rose-300">
                5. Quality Testing
              </span>
              <span className="text-text-muted">➔</span>
              <span className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 font-bold text-teal-700 dark:text-teal-300">
                6. Web / OTT Publishing
              </span>
            </div>
            <div className="mt-4 text-[11px] text-text-muted">
              Cyclic feedback: Testing dauran koi issue aane par content wapas Step 3 (Editing) ya Step 4 (Integration) par jata hai.
            </div>
          </div>
        </EducationalFigure>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: TOPIC 3 - MULTIMEDIA OPERATING SYSTEMS */}
      {/* ========================================================= */}
      <section id="multimedia-os" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              TOPIC 3 • 10-MARK QUESTION
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Multimedia Operating Systems
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (मल्टीमीडिया ऑपरेटिंग सिस्टम: आवश्यकता, संसाधन प्रबंधन, रियल-टाइम शेड्यूलिंग एवं ऑडियो-वीडियो सिंक्रोनाइज़ेशन)
          </div>
        </div>

        {/* 4.1 What is an OS & What is a Multimedia OS */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          4.1 Operating System vs Multimedia Operating System
        </h3>
        <p className="mb-4 leading-relaxed">
          Sadharan roop se, <strong>Operating System (OS)</strong> ek aisa master system software hai jo computer hardware aur user ke applications ke beech bridge (interface) ka kaam karta hai.
        </p>

        {/* Multimedia OS Definition Box */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Multimedia Operating System</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A Multimedia Operating System is an operating system that provides guaranteed real-time scheduling, high-throughput I/O transfer, deterministic buffer management, and precise inter-media synchronization to capture, process, and deliver continuous multimedia streams without timing violations or perceptual glitching."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Normal OS (jaise basic batch ya traditional time-sharing OS) sirf is baat ki parwah karta hai ki kaam pura ho jaye (Fairness). Lekin Multimedia OS is baat ki guarantee deta hai ki audio aur video <em>theek samay par</em> bina atke (glitch-free) aur aapas mein milte hue (synchronized) play hon.
            </span>
          </div>
        </div>

        {/* 4.2 Why Multimedia Applications Have Different Requirements */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          4.2 Why Multimedia Has Different Requirements Than Text Applications
        </h3>
        <p className="mb-4 leading-relaxed">
          Polytechnic pariksha mein yeh concept sabse zyada pucha jata hai: <em>"Normal text applications aur Multimedia applications ke beech OS requirements mein kya antar hai?"</em>
        </p>
        <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface my-4 space-y-3 text-sm leading-relaxed">
          <p>
            <strong>Normal Text Application (e.g., MS Word, Compiler, Database Query):</strong> Yeh <em>Discrete (Asynchronous) Data</em> hota hai. Agar aapne printer par print bheja ya compiler run kiya aur computer ne 0.5 second ka delay le liya, to result par koi farq nahi padta. Output 100% correct aayega. Yahan <strong>Timing Deadlines critical nahi hoti hain</strong>.
          </p>
          <p>
            <strong>Multimedia Application (e.g., Live Video Streaming, Zoom Call, 4K Movie Playback):</strong> Yeh <em>Continuous (Time-Dependent) Media</em> hota hai. Agar video chalte samay video packet 100 millisecond late ho gaya, to screen par video freeze (lag) ho jayegi. Agar audio aage nikal gaya aur video peeche reh gayi, to lip-movement aur aawaz match nahi karegi. Yahan <strong>Timing Deadlines aur Continuity sarvoppari hoti hain</strong>.
          </p>
        </div>

        {/* Comparison Table: Normal OS vs Multimedia OS */}
        <div className="my-6">
          <h5 className="text-sm font-bold font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            Comparison Table • Normal OS vs Multimedia OS Requirements
          </h5>
          <div className="overflow-x-auto border border-border rounded-xl shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/70 border-b border-border">
                  <th className="py-2.5 px-3.5 font-bold">Requirement</th>
                  <th className="py-2.5 px-3.5 font-bold text-slate-600 dark:text-slate-400">Normal / Traditional OS</th>
                  <th className="py-2.5 px-3.5 font-bold text-brand-600 dark:text-brand-400">Multimedia Operating System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2.5 px-3.5 font-semibold">Service Philosophy</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Best-Effort Service (Kaam bina kisi fixed time limit ke complete ho).</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Guaranteed Quality of Service (QoS) & Soft Real-Time deadlines.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-semibold">Scheduling Priority</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Round Robin ya FCFS (Sabhi processes ko barabar fair CPU time mile).</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Real-Time Earliest Deadline First (EDF) ya Rate Monotonic (RM).</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-semibold">Delay Tolerance</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">High tolerance (Kuch second ka delay user aasani se tolerate kar leta hai).</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Extremely low tolerance (Few milliseconds jitter causes audio popping & video stutter).</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-semibold">Memory Management</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Standard Virtual Memory Paging (Pages Hard Disk par swap ho sakte hain).</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Locked memory pages (DMA zero-copy buffers; swapping strictly prohibited).</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-semibold">File System Layout</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Non-contiguous block allocation (Fragmented blocks acceptable).</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Contiguous disk block allocation for sequential continuous high-bandwidth stream.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-semibold">Synchronization</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Process synchronization (Semaphores, Mutex) for mutual exclusion.</td>
                  <td className="py-2.5 px-3.5 text-text-secondary">Intra-media (frame timing) & Inter-media (lip-sync audio-video) synchronization.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4.3 How OS Manages Multimedia Resources */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          4.3 How OS Manages Critical Multimedia Resources
        </h3>
        <p className="mb-4 leading-relaxed">
          Multimedia system smooth chalne ke liye OS nimnlikhit mukhya computer resources ko rigorously manage karta hai:
        </p>

        <div className="space-y-4 my-5">
          {/* CPU Scheduling */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-base font-bold text-slate-900 dark:text-white block mb-1">
              1. Real-Time CPU Scheduling (CPU शेड्यूलिंग)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              Multimedia OS <strong>Preemptive Priority Scheduling</strong> aur <strong>EDF (Earliest Deadline First)</strong> ka upyog karta hai. Jis video frame ka display deadline sabse pehle khatam hone wala hai, CPU turant dusre background tasks ko rok kar pehle us video frame ko decode aur render karta hai.
            </p>
          </div>

          {/* Memory Management */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-base font-bold text-slate-900 dark:text-white block mb-1">
              2. Memory & Buffer Management (मेमोरी एवं बफर प्रबंधन)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              OS RAM ke andar dedicated <strong>Ring/Circular Buffers</strong> create karta hai. Video camera ya network se aane wala data pehle buffer mein bhar jata hai. Agar CPU kuch milliseconds ke liye kisi dusre task mein busy ho jaye, to display device buffer se data lekar continuous chalti rehti hai, jisse video break nahi hoti (Buffer Under-run prevention).
            </p>
          </div>

          {/* Storage & File System */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-base font-bold text-slate-900 dark:text-white block mb-1">
              3. Continuous Media File Systems (स्टोरेज एवं फाइल सिस्टम)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              Normal file systems (jaise FAT32 ya purana NTFS) files ke tukde-tukde alag-alag disk sectors par store kar dete hain (Fragmentation). Multimedia OS continuous video files ko disk par lagatar (contiguous) sectors mein store karta hai taaki disk head ko baar-baar seek na karna pade aur continuous reading speed bani rahe.
            </p>
          </div>

          {/* Device & Driver Management */}
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-base font-bold text-slate-900 dark:text-white block mb-1">
              4. Low-Latency Audio/Video Drivers (डिवाइस ड्राइवर्स)
            </strong>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-2">
              OS low-latency device drivers (jaise Windows par WASAPI Exclusive Mode ya ASIO, macOS par CoreAudio, aur Linux par ALSA/JACK/PipeWire) provide karta hai. Yeh application ko seedhe sound card aur graphics card ke hardware hardware buffer se baat karne dete hain, jisse Windows kernel latency bypass ho jaati hai.
            </p>
          </div>
        </div>

        {/* 4.4 Detailed Concept: Audio-Video Synchronization */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          4.4 Detailed Concept: Audio-Video Synchronization (लिप-सिंक सिद्धांत)
        </h3>
        <p className="mb-4 leading-relaxed">
          Multimedia system ka sabse sensitive task <strong>Synchronization</strong> hota hai:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm font-mono">
              1. Intra-Media Synchronization (आंतरिक समय समन्वय)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Ek single media stream ke andar consecutive samples ka time-distance maintain karna. Jaise 30 FPS video mein har frame ke beech theek <strong>33.3 milliseconds</strong> ka difference hona chahiye. Agar yeh difference fluctuate hota hai to use <em>Jitter</em> kehte hain.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-emerald-600 dark:text-emerald-400 block mb-1 text-sm font-mono">
              2. Inter-Media Synchronization (तत्वों के मध्य समय समन्वय)
            </strong>
            <p className="text-xs text-text-secondary leading-relaxed">
              Do alag-alag media streams (Audio track aur Video track) ke beech temporal alignment banaaye rakhna. Iska sabse prashiddha udaharan <strong>Lip-Synchronization (Lip-Sync)</strong> hai, yaani actor ke honto ke hilne aur aawaz ke aane mein koi farq na ho.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 my-4 text-xs sm:text-sm">
          <strong className="text-amber-800 dark:text-amber-400 block mb-1 font-bold">
            Human Perception Limits (मानव आंख और कान की संवेदनशीलता सीमा):
          </strong>
          <p className="text-slate-700 dark:text-slate-300">
            Psychological experiments ke anusar:
            <br/>• <strong>Audio Lead:</strong> Audio agar video se <strong>+20 ms</strong> se zyada pehle aa jaye, to human brain use turant pakad leta hai aur ajeeb lagne lagta hai.
            <br/>• <strong>Audio Lag:</strong> Audio agar video se <strong>-80 ms</strong> se zyada peeche reh jaye, to lip-sync kharab mana jata hai.
            <br/>Multimedia OS timestamping (PTS - Presentation Time Stamp) ka use karke is timing window (-80ms to +20ms) ke andar synchronization lock rakhta hai.
          </p>
        </div>

        {/* EDUCATIONAL FIGURE 4: MULTIMEDIA OS ARCHITECTURE */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/800px-Operating_system_placement.svg.png"
          alt="Operating system layered architecture diagram showing applications, operating system kernel services, and hardware devices placement"
          caption="Figure 1.4: Multimedia Operating System Architectural Placement & Layered Resource Governance"
          source="Wikimedia Commons • OS Architecture Standard"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Operating_system_placement.svg"
          license="Public Domain / CC0"
          maxWidth="max-w-xl"
        />

        {/* 4.5 Real-World Operating Systems Supporting Multimedia */}
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-6 mb-2">
          Real-World OS Examples Supporting Multimedia:
        </h4>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
          Aajkal ke consumer operating systems mein specialized multimedia subsystems integrate kiye gaye hain:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-text-secondary mb-6">
          <li><strong>Microsoft Windows:</strong> DirectX (DirectShow, Direct3D), Windows Media Foundation (WMF), WASAPI drivers.</li>
          <li><strong>Apple macOS / iOS:</strong> CoreAudio (extremely low audio latency), Metal graphics API, AVFoundation subsystem.</li>
          <li><strong>Linux:</strong> Real-Time Linux Kernels (RT_PREEMPT patch), PipeWire, JACK Audio Server, ALSA, Wayland/Vulkan display pipelines.</li>
        </ul>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: TOPIC 4 - MULTIMEDIA COMMUNICATION SYSTEM */}
      {/* ========================================================= */}
      <section id="multimedia-communication" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              TOPIC 4 • 10-MARK QUESTION
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Multimedia Communication System
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (मल्टीमीडिया संचार प्रणाली: सिद्धांत, मुख्य घटक, संचार प्रवाह, QoS आवश्यकताएं एवं नेटवर्क चुनौतियां)
          </div>
        </div>

        {/* 5.1 Meaning & Definition */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          5.1 Meaning & Concept of Multimedia Communication
        </h3>
        <p className="mb-4 leading-relaxed">
          Jab multimedia content (audio, video, images, text) ko kisi local computer ki hard drive par dekhne ke bajaye ek <strong>Telecommunication Network</strong> (jaise Internet, LAN, Fiber Optic, 4G/5G mobile cellular network) ke madhyam se ek jagah se dusri jagah bheja (transmit) aur receive kiya jata hai, to is pure system ko <strong>Multimedia Communication System</strong> kehte hain.
        </p>

        {/* Standard Definition Box */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Multimedia Communication System</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A Multimedia Communication System is an integrated framework of transmission channels, hardware protocols, encoding algorithms, and network devices designed to transport time-sensitive, high-bandwidth heterogeneous media streams across a network while preserving acceptable Quality of Service (QoS)."
          </blockquote>
        </div>

        {/* 5.2 Seven Major Components */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          5.2 Seven Core Components of a Multimedia Communication System
        </h3>
        <p className="mb-4 leading-relaxed">
          Polytechnic pariksha mein iska block diagram aur components ka vivaran 10 marks mein pucha jata hai:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 font-semibold">1. Sender / Source (प्रेषक)</strong>
            <p className="text-text-secondary leading-relaxed">
              Jahan se media generate hota hai. Jaise live camera, microphone, ya Netflix ka video media server.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 font-semibold">2. Multimedia Data Generation</strong>
            <p className="text-text-secondary leading-relaxed">
              Analog signals ka digital binary stream mein rupantaran (ADC sampling & quantization).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 font-semibold">3. Encoder / Compression Subsystem (एनकोडर)</strong>
            <p className="text-text-secondary leading-relaxed">
              Uncompressed heavy raw video/audio ko internet par bhejne yogya banane ke liye H.264/H.265 ya AAC codecs se compress karna (size 95% tak kam karna).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 font-semibold">4. Communication Network / Channel (संचार माध्यम)</strong>
            <p className="text-text-secondary leading-relaxed">
              Physical path jahan se packets travel karte hain (Fiber Optic Cables, 4G/5G Radio Waves, Wi-Fi, Routers & Switches).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 font-semibold">5. Receiver Subsystem (प्राप्तकर्ता)</strong>
            <p className="text-text-secondary leading-relaxed">
              Network packets ko receive karna, unhe sequence mein jodna aur jitter buffer mein temporary store karna.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 font-semibold">6. Decoder / Decompression Subsystem (डिकोडर)</strong>
            <p className="text-text-secondary leading-relaxed">
              Compressed video/audio bits ko wapas displayable raw RGB pixels aur PCM audio samples mein convert karna.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border bg-surface my-2 text-xs sm:text-sm">
          <strong className="text-brand-600 dark:text-brand-400 block mb-1 font-semibold">7. Output / Display / Playback Devices</strong>
          <p className="text-text-secondary leading-relaxed">
            Smartphone screen, TV monitor aur speakers jahan end-user final synchronized video aur audio ka anand leta hai.
          </p>
        </div>

        {/* 5.3 Communication Flow Pipeline */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          5.3 End-to-End Multimedia Communication Flow
        </h3>
        <p className="mb-4 leading-relaxed">
          Media stream shuru se ant tak nimnlikhit steps se hokar guzarti hai:
        </p>

        <div className="p-4 rounded-2xl border border-border bg-secondary/30 my-4 text-xs font-mono space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold">STEP 1</span>
            <span><strong>Capture:</strong> Camera lens & Mic membrane convert physical phenomena into electric voltages.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold">STEP 2</span>
            <span><strong>Digitization:</strong> ADC converts continuous analog waves into discrete digital binary samples.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-700 dark:text-purple-300 font-bold">STEP 3</span>
            <span><strong>Compression (Encoding):</strong> Redundant spatial & temporal bits eliminated via H.264/AAC.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-700 dark:text-purple-300 font-bold">STEP 4</span>
            <span><strong>Packetization & Transport:</strong> Data chopped into IP packets and transmitted via UDP/RTP.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">STEP 5</span>
            <span><strong>Playout Buffering:</strong> Receiver absorbs network jitter and arranges packets in presentation order.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">STEP 6</span>
            <span><strong>Decoding:</strong> Hardware decoder uncompresses stream back to raw RGB frames and sound samples.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">STEP 7</span>
            <span><strong>Presentation:</strong> Display monitor & Speakers output synchronized video & audio to user.</span>
          </div>
        </div>

        {/* 5.4 Quality of Service (QoS) Requirements */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          5.4 Critical Quality of Service (QoS) Parameters
        </h3>
        <p className="mb-4 leading-relaxed">
          Multimedia data transmission standard web-browsing se bilkul alag hota hai. Network ko nimnlikhit <strong>QoS (Quality of Service)</strong> parameters maintain karne padte hain:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">1. High Bandwidth & Bitrate</strong>
            <p className="text-xs text-text-secondary">Network ko lagatar high data rate (e.g. 5 to 25 Mbps for 4K video) deliver karni hoti hai.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">2. Low Latency (Delay)</strong>
            <p className="text-xs text-text-secondary">Live video call (Zoom/Meet) mein end-to-end delay <strong>150 ms</strong> se kam hona chahiye, warna dono taraf log ek dusre ke upar bolne lagenge.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">3. Low Jitter (Delay Variation)</strong>
            <p className="text-xs text-text-secondary">Packets ke aane ke samay mein variation kam se kam hona chahiye taaki playout buffer khali na ho.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">4. Packet Loss Tolerance</strong>
            <p className="text-xs text-text-secondary">Live video mein 1-2% packet drop hone par screen par halka glitch aayega, lekin video rukti nahi hai (UDP preference).</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">5. Reliability vs Real-time</strong>
            <p className="text-xs text-text-secondary">File download mein 100% accuracy zaroori hai (TCP), par live video streaming mein timeliness zaroori hai (UDP/RTP).</p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1 text-sm">6. Traffic Prioritization</strong>
            <p className="text-xs text-text-secondary">Routers QoS tagging (DiffServ) se email packets ke mukable video/audio packets ko pehle aage bhejte hain.</p>
          </div>
        </div>

        {/* 5.5 Comparison Table: Text vs Multimedia Communication */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          5.5 Text Communication vs Multimedia Communication (तुलना)
        </h3>

        <div className="overflow-x-auto border border-border rounded-xl shadow-2xs my-5">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-secondary/70 border-b border-border">
                <th className="py-2.5 px-3.5 font-bold">Parameter</th>
                <th className="py-2.5 px-3.5 font-bold text-slate-600 dark:text-slate-400">Text / Data Communication</th>
                <th className="py-2.5 px-3.5 font-bold text-brand-600 dark:text-brand-400">Multimedia Communication</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 px-3.5 font-semibold">Bandwidth Requirement</td>
                <td className="py-2 px-3.5 text-text-secondary">Very low (Few Kilobits per second - kbps).</td>
                <td className="py-2 px-3.5 text-text-secondary">Very high (Megabits to Gigabits per second - Mbps/Gbps).</td>
              </tr>
              <tr>
                <td className="py-2 px-3.5 font-semibold">Sensitivity to Delay</td>
                <td className="py-2 px-3.5 text-text-secondary">Delay-insensitive (Email 10 second baad pahuche to koi dikkat nahi).</td>
                <td className="py-2 px-3.5 text-text-secondary">Delay-sensitive (Video call mein 200ms se zyada delay par communication toot jata hai).</td>
              </tr>
              <tr>
                <td className="py-2 px-3.5 font-semibold">Error / Loss Tolerance</td>
                <td className="py-2 px-3.5 text-text-secondary">Zero tolerance (Ek single bit badli to pure program ya bank balance mein error).</td>
                <td className="py-2 px-3.5 text-text-secondary">Loss-tolerant (Kuch video packets kho bhi jayein to human eye use notice nahi karti).</td>
              </tr>
              <tr>
                <td className="py-2 px-3.5 font-semibold">Transport Protocol</td>
                <td className="py-2 px-3.5 text-text-secondary">TCP (Transmission Control Protocol - Reliable with retransmission).</td>
                <td className="py-2 px-3.5 text-text-secondary">UDP (User Datagram Protocol) + RTP (Real-Time Transport Protocol).</td>
              </tr>
              <tr>
                <td className="py-2 px-3.5 font-semibold">Data Nature</td>
                <td className="py-2 px-3.5 text-text-secondary">Discrete, bursty transmission.</td>
                <td className="py-2 px-3.5 text-text-secondary">Continuous, stream-oriented isochronous transmission.</td>
              </tr>
              <tr>
                <td className="py-2 px-3.5 font-semibold">Example</td>
                <td className="py-2 px-3.5 text-text-secondary">SMS, Email, Web Page HTML download, FTP file transfer.</td>
                <td className="py-2 px-3.5 text-text-secondary">Zoom Video Call, YouTube Live Streaming, WhatsApp Audio Call.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* EDUCATIONAL FIGURE 5: COMMUNICATION SYSTEM ARCHITECTURE */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Communication_shannon-weaver2.svg/1000px-Communication_shannon-weaver2.svg.png"
          alt="Shannon Weaver communication model diagram showing information source, transmitter encoder, channel with noise source, receiver decoder, and destination"
          caption="Figure 1.5: End-to-End Shannon-Weaver Telecommunication Pipeline adapted for Digital Multimedia Data Transmission"
          source="Wikimedia Commons • Communication Engineering Standard"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Communication_shannon-weaver2.svg"
          license="CC BY-SA 3.0"
          maxWidth="max-w-xl"
        />

        {/* 5.6 Technical Challenges in Multimedia Communication */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          5.6 Major Challenges in Multimedia Communication (तकनीकी चुनौतियां)
        </h3>
        <p className="mb-4 leading-relaxed">
          Multimedia data ko internet par bhejte samay network engineers ko nimnlikhit mukhya chunautiyon ka samna karna padta hai:
        </p>

        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              1. Network Congestion & Bandwidth Bottlenecks (नेटवर्क जाम)
            </strong>
            <p className="text-xs text-text-secondary">
              Jab hazaron users ek saath live streaming karte hain, to router queues bhar jaati hain jisse bandwidth kam ho jaati hai aur video quality automatic 1080p se gir kar 360p (Adaptive Bitrate Streaming - ABR) ho jaati hai.
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              2. Packet Loss & Frame Corruption (पैकेट लॉस)
            </strong>
            <p className="text-xs text-text-secondary">
              Congestion ke dauran routers packets discard kar dete hain. Video mein I-Frame (Keyframe) kho jaane par agle kayi seconds tak poori screen par pixelated green/gray artefacts (garbled video) dikhne lagte hain.
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              3. Jitter & Buffer Under-run (जिटर)
            </strong>
            <p className="text-xs text-text-secondary">
              Packets ke aniyamit (irregular) timing se aane par receiver ka playout buffer khali ho jata hai jisse video beech mein ghoomne lagti hai (Spinning Wheel / Buffering).
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-border bg-surface">
            <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-0.5">
              4. Desynchronization across Heterogeneous Paths (अलग-अलग रास्तों से डेटा जाना)
            </strong>
            <p className="text-xs text-text-secondary">
              Aksar video packets ek network route se aur audio packets dusre network route se aate hain, jisse receiver par dono ke arrival times mein gap ho jata hai aur lip-sync bigad jata hai.
            </p>
          </div>
        </div>

        {/* 10-Mark Exam Blueprint Checklist */}
        <div className="p-5 rounded-2xl border-2 border-brand-500/30 bg-brand-50/40 dark:bg-brand-500/[0.04] my-8">
          <div className="flex items-center gap-2 text-brand-700 dark:text-brand-400 font-bold text-base mb-2">
            <Award className="w-5 h-5" />
            <span>Unit 1 Complete 10-Mark Answer Writing Checklist (BTEUP Exam Special)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">
            Exam room mein baithe samay Unit 1 se banne wale 4 potential 10-mark questions aur unke zaroori sub-headings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q1. Multimedia Hardware (10 Marks)</strong>
              <p className="text-text-secondary">• Definition & Concept<br/>• Input Devices (Mic, Camera, Scanner, Tablet)<br/>• Processing: CPU vs GPU table & RAM<br/>• Storage: SSD vs HDD vs Optical<br/>• Output: Monitor, Sound Card, Speakers<br/>• Block Diagram (Figure 1.2)</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q2. Multimedia Software (10 Marks)</strong>
              <p className="text-text-secondary">• Definition & Role<br/>• 7 Categories with examples<br/>• Hardware vs Software Table<br/>• 6-Stage Production Workflow<br/>• Production Lifecycle Diagram (Figure 1.3)</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q3. Multimedia OS (10 Marks)</strong>
              <p className="text-text-secondary">• OS & Multimedia OS Definition<br/>• Normal OS vs Multimedia OS Table<br/>• Real-Time CPU Scheduling (EDF)<br/>• Audio-Video Lip-Sync Concept (-80ms to +20ms)<br/>• Memory Buffering & Drivers<br/>• Layered Architecture (Figure 1.4)</p>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border">
              <strong className="text-slate-900 dark:text-white block mb-1">Q4. Multimedia Communication (10 Marks)</strong>
              <p className="text-text-secondary">• Definition & Concept<br/>• 7 Major Components<br/>• End-to-End Pipeline (7 Steps)<br/>• QoS Parameters (Bandwidth, Jitter, Latency)<br/>• Text vs Multimedia Table<br/>• Technical Challenges (Loss, Delay, Congestion)</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MtUnit1Content;
