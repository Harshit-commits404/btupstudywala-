import React from 'react';
import {
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  Compass,
  MessageSquare,
  Users,
  FileText,
  Mail,
  Video,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const CsUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Communication: Theory and Practice
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Meaning & Definition</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">7-Step Communication Process</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Verbal & Non-Verbal</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Formal vs Informal (Grapevine)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Directional Flow (Upward/Downward)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">7 C's of Communication</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Barriers & Modern Tools</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Technical knowledge akele kisi engineer ko successful nahi bana sakti. Apne ideas, blueprints, software solutions, aur reports ko sahi tareeqe se express karna utna hi zaroori hai. Is unit me hum communication ke theoretical foundations, circular transmission model, practical classification, aur corporate barriers ko Hinglish me comprehensively explore karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 1.1 Meaning and Definition of Communication */}
      {/* ========================================================= */}
      <section id="sec-1-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Meaning and Definition of Communication
          </h2>
        </div>

        {/* Origin & Concept */}
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Communication shabd Latin bhasha ke word <strong>"Communicare"</strong> ya <strong>"Communis"</strong> se generate hua hai, jiska literal meaning hota hai — <em>"to share"</em>, <em>"to impart"</em>, ya <em>"to make common"</em>. Yani jab do ya do se zyada vyakti kisi information, thought, opinion ya emotion ko is tarah share karte hain ki dono ke beech ek <strong>Common Understanding</strong> ban sake, to use Communication kehte hain.
        </p>

        {/* Standard Definitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-2.5">
              <BookOpen className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Koontz and O'Donnell Definition:</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic">
                  "Communication is the transfer of information from a sender to a receiver with the information being understood by the receiver."
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-2.5">
              <BookOpen className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Newman and Summer Definition:</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic">
                  "Communication is an exchange of facts, ideas, opinions, or emotions by two or more persons."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Engineers Need Communication */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Technical Professionals & Diploma Engineers ke liye Importance</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Ek engineer factory floor par ho, construction site par ho, ya software company me coding kar raha ho — har jagah communication ek primary driver hota hai:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-slate-900 dark:text-white">Campus Placements & Interviews:</h5>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Aapka technical knowledge resume par hota hai, lekin interviewer ke questions ko confidence ke sath structure karke bolna, body language maintain karna aur mock GD (Group Discussion) clear karna purely communication skills par depend karta hai.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-slate-900 dark:text-white">Technical Documentation & Reporting:</h5>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Machine maintenance report likhna, project quotation banana, circuit design ki working explain karna ya clients ko technical email likhna accurate language ki maang karta hai.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-slate-900 dark:text-white">Safety & Industrial Coordination:</h5>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Factory me safety protocols, emergency warnings, aur shift handovers me ambiguous bhasha accidents ka kaaran ban sakti hai. Clear instructions save lives.
              </p>
            </div>
          </div>
        </div>

        {/* Common Confusion Box */}
        <div className="p-4 rounded-lg bg-amber-500/10 border-l-4 border-amber-500 mb-6">
          <h4 className="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Common Confusion: Information Transfer vs Communication</span>
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            Sirf kisi ko data bhej dena (jaise WhatsApp par PDF forward karna) communication nahi kehlata jab tak samne wala use open karke uske intent ko accurately samajh na le aur feedback na de. <strong>"Communication is not what is said, it is what is understood."</strong>
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.2 The Communication Process */}
      {/* ========================================================= */}
      <section id="sec-1-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            The Communication Process / Cycle
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">
          Communication koi static one-way act nahi hai, balki ek dynamic, circular, continuous <strong>Two-Way Process</strong> hai. Is process me jab tak feedback sender tak wapas nahi pahunchta, cycle complete nahi maani jaati.
        </p>

        {/* Educational Figure */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Shannon-Weaver_model.svg/640px-Shannon-Weaver_model.svg.png"
          alt="Communication cycle showing Sender, Encoding, Message, Channel, Receiver, Decoding, Feedback and Noise"
          caption="Figure 1.1: Complete Communication Cycle: Sender, Encoding, Channel (Message), Decoding, Receiver, aur Feedback Loop with Noise."
          source="Wikimedia Commons (Shannon-Weaver / Berlo SMCR Model, Public Domain)"
          fallback={
            <div className="w-full py-8 px-4 flex flex-col items-center justify-center bg-slate-900 text-white rounded-lg font-mono text-xs">
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl border border-brand-500/40 p-4 rounded-xl">
                <span className="p-2 bg-blue-900/60 border border-blue-400 rounded text-center">
                  <strong>Sender</strong><br />(Idea generator)
                </span>
                <span className="text-slate-400">➔</span>
                <span className="p-2 bg-slate-800 border border-slate-600 rounded text-center">
                  <strong>Encoding</strong><br />(Words/Symbols)
                </span>
                <span className="text-slate-400">➔</span>
                <span className="p-2 bg-purple-900/60 border border-purple-400 rounded text-center">
                  <strong>Message & Channel</strong><br />(Noise Interference)
                </span>
                <span className="text-slate-400">➔</span>
                <span className="p-2 bg-slate-800 border border-slate-600 rounded text-center">
                  <strong>Decoding</strong><br />(Interpretation)
                </span>
                <span className="text-slate-400">➔</span>
                <span className="p-2 bg-emerald-900/60 border border-emerald-400 rounded text-center">
                  <strong>Receiver</strong><br />(Recipient)
                </span>
              </div>
              <div className="mt-3 text-center text-amber-400 font-bold">
                ↩ Feedback Loop (Receiver sends acknowledgment back to Sender) ↩
              </div>
            </div>
          }
        />

        {/* 7 Key Components in Detail */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>7 Essential Elements of the Communication Process</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-sm mb-1">1. Sender (Communicator / Source):</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Woh person jo communication initiate karta hai. Uske brain me koi idea, instruction, feeling ya question hota hai jise woh kisi doosre person ke sath share karna chahta hai.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-sm mb-1">2. Encoding:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Apne dimag ke abstract thought ya idea ko transmissible roop (words, sentences, mathematical symbols, body gestures, audio signals) me translate karne ki mental activity ko Encoding kehte hain.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-sm mb-1">3. Message:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Yeh actual physical product hai jo encode hone ke baad generate hota hai — jaise formal email, circular, spoken speech, WhatsApp text ya engineering drawing.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-sm mb-1">4. Medium / Channel:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Woh vehicle ya path jiske through encoded message sender se receiver tak travel karta hai (e.g., sound waves in air, optical fiber internet, printed paper, telephone cable).
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-sm mb-1">5. Receiver:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Woh vyakti ya audience jiske liye message intended tha. Receiver message ko sensory organs (eyes, ears) se capture karta hai.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-sm mb-1">6. Decoding:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Receiver dwara incoming symbols, words aur gestures ko interpret karke uska meaning nikalne ki process. Sahi decoding tabhi hoti hai jab receiver aur sender ki language aur mental frequency match kare.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 mb-6">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1">7. Feedback (The Completion Step):</h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Receiver ka response jo woh decoding ke baad sender ko return karta hai (e.g., <em>"Yes sir, got it!"</em>, head nod, acknowledgement email, counter question). Feedback ke bina sender ko pata nahi chal sakta ki uska message accurately deliver hua ya misunderstood ho gaya. <strong>Feedback converts One-Way Communication into Two-Way Communication.</strong>
          </p>
        </div>

        {/* Noise Callout */}
        <div className="p-4 rounded-lg bg-red-500/10 border-l-4 border-red-500 mb-6">
          <h4 className="font-bold text-red-900 dark:text-red-300 text-sm mb-1 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span>Noise (Interference / Disruption):</span>
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            Communication process ke kisi bhi stage par aane wali koi bhi disturbance jo message ko distort, delay ya corrupt kar deti hai use <strong>Noise</strong> kehte hain. Noise acoustic ho sakti hai (loudspeaker sound), technical ho sakti hai (phone line static), ya psychological ho sakti hai (receiver ka mind absent hona).
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.3 Types of Communication */}
      {/* ========================================================= */}
      <section id="sec-1-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Types and Classifications of Communication
          </h2>
        </div>

        {/* Classification 1: Verbal vs Non-Verbal */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>1. Based on Expression: Verbal vs Non-Verbal Communication</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-base mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>Verbal Communication (With Words)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Jahan message deliver karne ke liye specific words aur structured language ka prayog hota hai:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
              <li>
                <strong>Oral Communication:</strong> Face-to-face talks, group meetings, telephone, seminars.
                <span className="block text-[11px] text-slate-500 mt-0.5"><em>Plus:</em> Immediate feedback, dynamic tone. <em>Minus:</em> No permanent legal record, distortion in word-of-mouth.</span>
              </li>
              <li>
                <strong>Written Communication:</strong> Letters, emails, technical reports, manuals, SMS.
                <span className="block text-[11px] text-slate-500 mt-0.5"><em>Plus:</em> Permanent legal record, high precision. <em>Minus:</em> Time-consuming, lack of instant personal touch.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-base mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Non-Verbal Communication (Without Words)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Bina bole ya bina likhe, body signals aur expressions se message express karna:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
              <li><strong>Kinesics (Body Language):</strong> Eye contact, facial smile/frown, hand gestures, posture.</li>
              <li><strong>Proxemics (Space Language):</strong> Interpersonal physical distance (intimate, personal, social, public zone).</li>
              <li><strong>Paralanguage:</strong> Pitch of voice, tone, volume, speed of speech, deliberate pauses.</li>
              <li><strong>Haptics (Touch):</strong> Professional firm handshake vs casual shoulder pat.</li>
              <li><strong>Chronemics:</strong> Time punctuality (meeting me timely aana professionalism darshata hai).</li>
            </ul>
          </div>
        </div>

        {/* Mehrabian's Rule */}
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 mb-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-1 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Albert Mehrabian's 7-38-55 Communication Rule</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Psychological research ke mutabiq face-to-face communication me impact ka ratio hota hai:<br />
            • <strong>7%</strong> Words (Actual vocabulary used)<br />
            • <strong>38%</strong> Vocal Tone (Voice pitch, modulation, speed)<br />
            • <strong>55%</strong> Non-Verbal Body Language (Eye contact, facial expression, posture)<br />
            Isliye interview me sirf <em>"kya bol rahe ho"</em> hi nahi balki <em>"kaise bol rahe ho"</em> zyada count hota hai.
          </p>
        </div>

        {/* Classification 2: Formal vs Informal (Grapevine) */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>2. Formal vs Informal Communication (The Grapevine)</span>
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Parameter</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Formal Communication</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Informal Communication (Grapevine)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Channel & Path</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Official scalar chain / predetermined official hierarchy ko follow karta hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Spontaneous hota hai; koi fixed path nahi hota (canteen talks, water cooler gossip).</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Speed</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Dheema hota hai (paperwork, formal approvals, administrative steps).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Bahut tez speed se jungle ke aag ki tarah spread hota hai.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Evidence & Record</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Written document, letterhead, ya official email backup hamesha available hota hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Oral/verbal hota hai, koi official paper trail ya accountability nahi hoti.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Distortion & Rumors</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Factual accuracy high hoti hai, distortion minimal rehta hai.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Rumors aur misinformation add hone ka high risk rehta hai.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Classification 3: Directional Flow */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>3. Directional Flow of Communication in Workplace</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">Downward</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Top management se lower level tak (Principal $\to$ HOD $\to$ Students / Manager $\to$ Workers). Examples: Policies, orders, rules, company circulars.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">Upward</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Subordinates se higher authorities tak. Examples: Leave application, project progress report, suggestions, grievance petitions.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">Horizontal / Lateral</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Same hierarchical level ke colleagues ke beech. Examples: Mechanical HOD aur Electrical HOD ke beech coordination meeting.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">Diagonal / Crosswise</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Cross-departmental levels par direct interact karna scalar chain bypass karke (e.g. Software developer directly contacting Finance Manager for budget approval).
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.4 7 C's of Effective Communication */}
      {/* ========================================================= */}
      <section id="sec-1-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            The 7 C's of Effective Communication
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Har professional message (chahe woh interview me answer ho, formal email ho, ya lab report ho) ko effective, persuasive aur error-free banane ke liye globally recognized <strong>7 C's Checklist</strong> follow ki jaati hai:
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-sm sm:text-base text-brand-600 dark:text-brand-400 mb-1">1. Clarity (Spashtata):</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Message ka purpose aur thought bilkul crystal clear hona chahiye. Complex words aur double meaning sentences se bachein. Ek sentence me ek hi core thought express karein.
            </p>
            <div className="p-2 bg-slate-200 dark:bg-slate-900 rounded text-xs font-mono">
              <span className="text-red-500">Unclear:</span> "The machine is acting somewhat strange occasionally."<br />
              <span className="text-emerald-500">Clear:</span> "The CNC lathe machine motor vibrates excessively when operating above 2000 RPM."
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-sm sm:text-base text-brand-600 dark:text-brand-400 mb-1">2. Conciseness (Sankshiptata):</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Minimum possible words me complete meaning convey karna bina kisi meaning loss ke. Filler words aur redundancy ko delete karein.
            </p>
            <div className="p-2 bg-slate-200 dark:bg-slate-900 rounded text-xs font-mono">
              <span className="text-red-500">Wordy:</span> "In spite of the fact that it was raining, at the present moment we proceeded."<br />
              <span className="text-emerald-500">Concise:</span> "Although it was raining, we proceeded immediately."
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-sm sm:text-base text-brand-600 dark:text-brand-400 mb-1">3. Concreteness (Thos Panna):</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Message me hawa-hawaai baatein nahi honi chahiye; specific facts, accurate data, aur definite figures hone chahiye jo laser-sharp meaning banayein.
            </p>
            <div className="p-2 bg-slate-200 dark:bg-slate-900 rounded text-xs font-mono">
              <span className="text-red-500">Vague:</span> "College students got very good marks in electrical exam."<br />
              <span className="text-emerald-500">Concrete:</span> "84% of Diploma Semester 1 students scored distinction (above 75%) in FEEE."
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-sm sm:text-base text-brand-600 dark:text-brand-400 mb-1">4. Correctness (Shuddhata):</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Grammar, spelling, punctuation aur technical facts me zero error hona chahiye. Galat figures client trust ko damage kar dete hain.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-sm sm:text-base text-brand-600 dark:text-brand-400 mb-1">5. Coherence (Tark-sangat):</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Saare sentences aur paragraphs ek logical sequence me interconnected hone chahiye. Flow smooth hona chahiye taaki reader ka track break na ho.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-sm sm:text-base text-brand-600 dark:text-brand-400 mb-1">6. Completeness (Sampoornata):</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Message me 5 W's (Who, What, When, Where, Why) ka answer hona chahiye taaki receiver ko decision lene ke liye follow-up emails na bhejni padein.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-sm sm:text-base text-brand-600 dark:text-brand-400 mb-1">7. Courtesy (Vinamrata / Politeness):</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Receiver ke perspective ki respect karna (You-attitude). Aggressive, rude ya sarcastic tone avoid karein.
            </p>
            <div className="p-2 bg-slate-200 dark:bg-slate-900 rounded text-xs font-mono">
              <span className="text-red-500">Rude:</span> "You forgot to attach the blueprint file again."<br />
              <span className="text-emerald-500">Courteous:</span> "It seems the blueprint file was missed in the attachment; could you please re-send it?"
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.5 Barriers to Communication and Tools */}
      {/* ========================================================= */}
      <section id="sec-1-5" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Barriers to Communication and Modern Communication Tools
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Kisi bhi communication process ke beech aane wali rukawatein jo message ko corrupt, delay ya misunderstand karwati hain, unhe <strong>Barriers to Communication</strong> kehte hain. Unhe 5 mukhya shreniyon me divide kiya jaata hai:
        </p>

        {/* 5 Categories of Barriers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-red-600 dark:text-red-400 text-sm mb-1">1. Physical & Environmental Barriers:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Surroundings me practical physical hurdles: Heavy workshop machinery ka sound, long physical distance, poor microphone/speaker system, electricity cut, bad phone connectivity, excessive room temperature ya uncomfortable seating.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-red-600 dark:text-red-400 text-sm mb-1">2. Semantic & Linguistic Barriers:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Bhasha aur shabdon ka arth na samajh aana: High technical jargon use karna jo non-technical client ko samajh na aaye, ek hi word ke alag-alag meanings (homophones), ambiguous vocabulary, ya faulty translation.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-red-600 dark:text-red-400 text-sm mb-1">3. Psychological & Emotional Barriers:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Insan ke man ki sthiti: Extreme gussa (anger), anxiety, stress, prejudice (pehle se kisi ke prati galat dharana bana lena), defensive attitude, ya wandering mind (inattention).
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-red-600 dark:text-red-400 text-sm mb-1">4. Organizational & Cultural Barriers:</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Company ki rigid hierarchy jahan junior ko boss se baat karne ka fear ho, information overload, cultural differences (kuch cultures me thumbs-up insult maana jaata hai jabki doosre me encouragement).
            </p>
          </div>
        </div>

        {/* How to Overcome Barriers */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Strategies to Overcome Communication Barriers</span>
        </h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
          <li><strong>Practice Active Listening:</strong> Sirf bolne ki jaldi me mat raho; samne wale ko bina interrupt kiye poora suno aur understand karo.</li>
          <li><strong>Use Simple, Direct Language:</strong> Jargon tabhi use karo jab audience technical peer ho; clients aur workers ke sath plain words bolo.</li>
          <li><strong>Encourage Continuous Feedback:</strong> Conversation ke end me poochho: <em>"Did I explain that clearly, or would you like me to clarify anything?"</em></li>
          <li><strong>Control Emotions:</strong> Gusse ya high frustration me immediate formal email ya reply send mat karo; calm mind se respond karo.</li>
        </ul>

        {/* Modern Tools of Communication */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Modern Digital Communication Tools in Corporate & Engineering Life</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <Mail className="w-5 h-5 text-red-500 mb-1.5" />
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Corporate Email</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              (Outlook, Gmail): Official documentation, legal record keeping, formal announcements aur external client communication ka gold standard.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <Video className="w-5 h-5 text-blue-500 mb-1.5" />
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Video Conferencing</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              (MS Teams, Zoom, Google Meet): Remote work meetings, live screen sharing, product demos, aur virtual campus placement interviews.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <MessageSquare className="w-5 h-5 text-emerald-500 mb-1.5" />
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Enterprise Chat</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              (Slack, Teams Channels): Fast agile coordination, quick team updates, channel-based departmental discussions, file sharing.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <FileText className="w-5 h-5 text-amber-500 mb-1.5" />
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Cloud Collaboration</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              (Google Workspace, OneDrive, Notion): Real-time collaborative document authoring, simultaneous spreadsheet editing, version control.
            </p>
          </div>
        </div>

        {/* Quick Summary Card */}
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Unit 1 Exam Preparation Takeaway</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            • Communication is derived from 'Communicare' (meaning to share/make common).<br />
            • The 7 elements of communication process: Sender, Encoding, Message, Channel, Receiver, Decoding, and Feedback (with Noise).<br />
            • Verbal uses words (Oral & Written); Non-Verbal uses body language (Kinesics, Proxemics, Paralanguage).<br />
            • Grapevine is informal, rapid communication without official record.<br />
            • Remember the 7 C's: Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.
          </p>
        </div>
      </section>
    </article>
  );
};

export default CsUnit1Content;
