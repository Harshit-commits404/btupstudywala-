import React from 'react';

const MtUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 01
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Multimedia Technologies
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Introduction to Multimedia
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Multimedia ke core concepts, components (Text, Audio, Video, Image, Animation), hardware/software requirements aur multimedia communication system.
        </p>
      </header>

      <section id="multimedia-concepts" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Multimedia Foundation & Concepts</h2>
        <p className="mb-4">
          Multimedia do shabdon se milkar bana hai: Multi (bahut saare) aur Media (madhyam). Jab information ko represent karne ke liye text, audio, video, graphics/images, aur animation ka ek saath use kiya jata hai, to use Multimedia kehte hain.
        </p>
        <p className="mb-4"><strong>Key Elements of Multimedia:</strong></p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Text:</strong> Basic information present karne ke liye.</li>
          <li><strong>Audio:</strong> Sound, music, ya speech data.</li>
          <li><strong>Video:</strong> Moving pictures with sound.</li>
          <li><strong>Graphics (Images):</strong> Still pictures, drawings, ya photographs.</li>
          <li><strong>Animation:</strong> Series of static images jinhe tezi se dikhaya jata hai taaki movement ka illusion bane.</li>
        </ul>
      </section>

      <section id="hardware-software" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Multimedia Hardware & Software</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Multimedia Hardware</h3>
        <p className="mb-4">
          Multimedia systems ko process karne ke liye specialized hardware ki zaroorat hoti hai:
          <br/>- <strong>Input Devices:</strong> Keyboard, Mouse, Scanner, Microphone, Web Camera.
          <br/>- <strong>Output Devices:</strong> High-resolution Monitor, Speakers, Printers, Projectors.
          <br/>- <strong>Storage Devices:</strong> SSD, HDD, CD/DVD, USB drives (kyunki multimedia files size mein badi hoti hain).
          <br/>- <strong>Processing:</strong> Powerful CPU aur GPU (Graphics Processing Unit).
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">Multimedia Software</h3>
        <p className="mb-4">
          In softwares ka use multimedia content banane, edit karne aur play karne ke liye hota hai:
          <br/>- <strong>Image Editing:</strong> Adobe Photoshop, CorelDRAW.
          <br/>- <strong>Audio Editing:</strong> Audacity, Adobe Audition.
          <br/>- <strong>Video Editing:</strong> Adobe Premiere Pro, Final Cut Pro.
          <br/>- <strong>Animation:</strong> Adobe Animate, Maya, Blender.
        </p>
      </section>

      <section id="multimedia-os" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Multimedia Operating Systems & Communication</h2>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Multimedia Operating Systems</h3>
        <p className="mb-4">
          Multimedia data (jaise live video streaming ya audio playback) real-time constraint (samay ki pabandi) ke sath aata hai. Isliye, normal OS ke alawa ek Multimedia OS ko Quality of Service (QoS), real-time scheduling aur fast file management handle karna padta hai taaki video aur audio ke beech synchronization bana rahe aur video "atke" nahi (no lag).
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">Multimedia Communication System</h3>
        <p className="mb-4">
          Multimedia data ko ek jagah se dusri jagah bhejne ke network ko multimedia communication system kehte hain (jaise Video Conferencing ya Netflix streaming). Isme network bandwidth ka zyada hona, delay (latency) kam hona, aur data loss kam hona bahut zaroori hai. Isme compression techniques ka bahut bada role hota hai.
        </p>
      </section>
    </article>
  );
};

export default MtUnit1Content;
