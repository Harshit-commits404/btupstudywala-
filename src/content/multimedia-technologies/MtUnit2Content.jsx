import React from 'react';

const MtUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 02
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Multimedia Technologies
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Basic Compression Techniques
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Lossy aur Lossless compression kya hote hain? Image, Video aur Audio compression ke liye kaun se algortihms aur standards use hote hain (JPEG, MPEG, MP3, etc).
        </p>
      </header>

      <section id="compression-intro" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction to Compression</h2>
        <p className="mb-4">
          Multimedia files (high-res images, 4k videos, pure audio) ka size bahut bada hota hai. Compression ka kaam in files ke size ko chota karna hai taaki inhe easily store kiya ja sake aur internet par fast bheja (transmit) ja sake.
        </p>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs mt-4">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b">
                <th className="py-2 px-4">Feature</th>
                <th className="py-2 px-4 text-emerald-600">Lossless Compression</th>
                <th className="py-2 px-4 text-amber-600">Lossy Compression</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Definition</td>
                <td className="py-2 px-4 border-b">Data size kam hota hai, bina ek bhi bit gawaye (no data loss).</td>
                <td className="py-2 px-4 border-b">Data size kam karne ke liye unimportant data hamesha ke liye hata diya jata hai.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Original Quality</td>
                <td className="py-2 px-4 border-b">100% original file wapas milti hai (Decompression par).</td>
                <td className="py-2 px-4 border-b">Original file wapas nahi aati, slight quality loss hota hai.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium">Examples</td>
                <td className="py-2 px-4">Huffman, RLE, FLAC, ZIP, ALAC</td>
                <td className="py-2 px-4">JPEG, MP3, MPEG, MP4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="lossless-methods" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Lossless Methods (Huffman, RLE, LZMA)</h2>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li><strong>RLE (Run-Length Encoding):</strong> Ye ek simple algorithm hai jisme agar ek hi data baar-baar repeat ho raha ho to use ek sequence mein likh diya jata hai. <br/>Example: "AAAAABBBCC" ko "5A3B2C" likh diya jata hai.</li>
          <li><strong>Huffman Coding:</strong> Ye ek variable-length coding algorithm hai. Jo character sabse zyada baar aata hai (most frequent), use sabse chota code (bits) diya jata hai, aur jo kam aata hai use bada code. Isse overall size kam ho jata hai.</li>
          <li><strong>LZMA (Lempel-Ziv-Markov chain-Algorithm):</strong> Ye modern dictionary-based algorithm hai jo 7z (.7z archive) format mein use hota hai. Ye bahut high compression ratio deta hai (lossless).</li>
        </ul>
      </section>

      <section id="image-video" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Image & Video Formats (JPEG, MPEG, H.26x)</h2>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li><strong>JPEG (Joint Photographic Experts Group):</strong> Ye still images ke liye sabse popular Lossy compression standard hai. Ye DCT (Discrete Cosine Transform) ka use karke human eye ko na dikhne wale minute details ko hata deta hai.</li>
          <li><strong>MPEG (Moving Picture Experts Group):</strong> Ye audio aur video compression ke liye ek standard hai. Video ek continuous flow of images (frames) hota hai. MPEG lagatar aane wale frames ke beech ka difference (Motion compensation) store karta hai (I-frames, P-frames, B-frames), jisse size drastically kam ho jata hai.</li>
          <li><strong>MP4:</strong> Ye ek multimedia container format hai (MPEG-4 Part 14) jo video, audio, aur subtitles ko ek sath store karta hai.</li>
          <li><strong>H.261 & H.265:</strong> <br/>- H.261 purana video coding standard hai jo ISDN lines par Video Conferencing ke liye banaya gaya tha.<br/>- H.265 (HEVC - High Efficiency Video Coding) modern standard hai jo H.264 ke mukable 50% better compression deta hai aur 4k/8k video streaming ke liye use hota hai.</li>
        </ul>
      </section>

      <section id="audio-formats" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Audio Formats (MP3, FLAC, ALAC, ITU G.722)</h2>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li><strong>MP3 (MPEG Audio Layer 3):</strong> Ye audio ke liye Lossy compression format hai. Ye "Psychoacoustics" (insan ka kaan kaise sunta hai) ka use karta hai. Jo frequency insan nahi sun sakte ya jo loud sound ke peeche chup jate hain, MP3 unhe data se nikal deta hai.</li>
          <li><strong>FLAC (Free Lossless Audio Codec):</strong> Ye ek open-source Lossless audio format hai. Ye ZIP file ki tarah audio ko compress karta hai (size aadha ho jata hai) bina ek bhi bit quality loss kiye. Audiophiles ise bahut pasand karte hain.</li>
          <li><strong>ALAC (Apple Lossless Audio Codec):</strong> Ye FLAC jaisa hi Lossless audio codec hai, lekin ise Apple ne banaya hai aur ye Apple music/devices par native support karta hai.</li>
          <li><strong>ITU G.722:</strong> Ye ek wideband speech coding standard hai jo telecommunications (jaise VoIP ya high quality telephone call) mein use hota hai. Ye voice calls ko crystal clear banata hai.</li>
        </ul>
      </section>
    </article>
  );
};

export default MtUnit2Content;
