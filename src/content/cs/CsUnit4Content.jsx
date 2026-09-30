import React from 'react';
import {
  BookOpen,
  Award,
  Compass,
} from 'lucide-react';

export const CsUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Functional Grammar
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Sentence Types & Structures</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">8 Parts of Speech</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">12 Tenses Master Matrix</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Active vs Passive (Technical Lab Voice)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Punctuation & Capitalization Rules</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Grammar bhasha ka operating system hai. Bina correct syntax ke jis tarah computer program compile nahi hota, usi tarah grammatical errors technical reports aur engineering emails ki credibility khatam kar dete hain. Is unit me hum functional, application-oriented grammar ko step-by-step master karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 4.1 The Sentence and its Types */}
      {/* ========================================================= */}
      <section id="sec-4-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            The Sentence and Its Structural & Functional Types
          </h2>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <BookOpen className="w-5 h-5 text-brand-500" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Definition of a Sentence</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                A <strong>Sentence</strong> is a grammatically complete group of words that makes complete sense on its own. Isme kam se kam ek <strong>Subject</strong> (karta) aur ek <strong>Predicate</strong> jisme ek Finite Verb (kriya) ho, hona anivarya hota hai.
              </p>
            </div>
          </div>
        </div>

        {/* 1. Classification by Function */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>A. Classification by Function (Purpose of Speech)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-sm text-brand-600 dark:text-brand-400 mb-1">1. Assertive / Declarative Sentence</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Kisi fact, scientific principle ya statement ko declare karta hai. Yeh affirmative ya negative ho sakta hai. Full stop (.) se end hota hai.
            </p>
            <p className="text-xs font-mono bg-slate-200 dark:bg-slate-900 p-2 rounded text-slate-800 dark:text-slate-200">
              e.g., "Copper has high electrical conductivity."
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-sm text-brand-600 dark:text-brand-400 mb-1">2. Interrogative Sentence</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Question poochhne ke liye use hota hai (Wh- family ya Auxiliary verb inversion). Question mark (?) se end hota hai.
            </p>
            <p className="text-xs font-mono bg-slate-200 dark:bg-slate-900 p-2 rounded text-slate-800 dark:text-slate-200">
              e.g., "What is the peak inverse voltage of this diode?"
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-sm text-brand-600 dark:text-brand-400 mb-1">3. Imperative Sentence</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Command, instruction, request, advice ya warning express karta hai. Isme subject <em>'You'</em> hidden/implied rehta hai.
            </p>
            <p className="text-xs font-mono bg-slate-200 dark:bg-slate-900 p-2 rounded text-slate-800 dark:text-slate-200">
              e.g., "Wear safety goggles during the lathe operation."
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-sm text-brand-600 dark:text-brand-400 mb-1">4. Exclamatory Sentence</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              Achanak strong emotion, surprise, danger ya admiration express karta hai. Exclamation mark (!) se end hota hai.
            </p>
            <p className="text-xs font-mono bg-slate-200 dark:bg-slate-900 p-2 rounded text-slate-800 dark:text-slate-200">
              e.g., "What an ingenious mechanical design this is!"
            </p>
          </div>
        </div>

        {/* 2. Classification by Structure */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>B. Classification by Structural Complexity</span>
        </h3>

        <div className="space-y-3 mb-6">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">1. Simple Sentence:</h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-1.5">
              Contains only <strong>one Independent Clause</strong> (single subject and single finite verb).
            </p>
            <span className="font-mono text-xs text-brand-600 dark:text-brand-400">e.g., "The electric motor generates rotary torque."</span>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">2. Compound Sentence:</h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-1.5">
              Contains <strong>two or more Independent Clauses</strong> joined by Coordinating Conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So).
            </p>
            <span className="font-mono text-xs text-brand-600 dark:text-brand-400">e.g., "The main power grid failed, <strong>but</strong> the emergency diesel generator kicked in immediately."</span>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">3. Complex Sentence:</h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-1.5">
              Contains <strong>one Independent Clause</strong> and at least <strong>one Subordinate (Dependent) Clause</strong> joined by subordinating conjunctions (because, although, if, when, since, unless).
            </p>
            <span className="font-mono text-xs text-brand-600 dark:text-brand-400">e.g., "<strong>If</strong> the motor temperature exceeds 90°C, the thermal overload relay will trip."</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.2 Parts of Speech */}
      {/* ========================================================= */}
      <section id="sec-4-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            The 8 Parts of Speech (Grammatical Anatomy)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          English bhasha ka har shabd sentence me apne function ke aadhaar par 8 categories me divide hota hai:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Part of Speech</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Function in Sentence</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Technical Context Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">1. Noun</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Naming word (Person, place, component, material, concept).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><em>Silicon, Transformer, Voltage, Laboratory, Resistance.</em></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">2. Pronoun</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Replaces a noun to avoid repetitive awkward naming.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><em>It, They, Which, That, Who, Itself (The machine turned <strong>itself</strong> off).</em></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">3. Verb</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Action word ya state-of-being (heart of every sentence).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><em>Rotates, Dissipates, Induces, Calculate, Measures, Is, Are.</em></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">4. Adjective</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Modifies ya qualifies a noun (describes property/quantity).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><em>Capacitive, Sinusoidal, High-voltage, Thermal, Efficient.</em></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">5. Adverb</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Modifies verb, adjective ya doosre adverb ko (how, when, where).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><em>Rapidly, Smoothly, Very, Linearly, Periodically, Accurately.</em></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">6. Preposition</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Shows spatial, temporal, ya directional relation of noun.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><em>In, Across, Through, Between, Under, Over, During.</em></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">7. Conjunction</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Connector (joins words, phrases ya clauses).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><em>And, Because, Although, Since, Therefore, While, Whereas.</em></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">8. Interjection</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Expresses spontaneous emotion (rarely used in formal technical writing).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700"><em>Caution!, Beware!, Alas!, Wow!</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.3 Tenses */}
      {/* ========================================================= */}
      <section id="sec-4-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            The 12 Tenses Master Matrix (Formulas & Engineering Applications)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Tense kriya (verb) ke form ko indicate karta hai jo action ke exact time (Present, Past, Future) aur completeness status (Simple, Continuous, Perfect, Perfect Continuous) ko darshata hai:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Tense Name</th>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Grammar Formula / Syntax</th>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Engineering Sentence Example</th>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Typical Usage in Technical Writing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              {/* Present */}
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">Simple Present</td>
                <td className="p-2.5 font-mono border border-slate-200 dark:border-slate-700">Subject + V₁ (s/es) + Object</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">A transformer converts AC voltage levels.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Universal scientific truths, machine working principles.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">Present Continuous</td>
                <td className="p-2.5 font-mono border border-slate-200 dark:border-slate-700">Subject + is/am/are + V₁-ing + Obj</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The technician is calibrating the ammeter.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Ongoing real-time laboratory processes.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">Present Perfect</td>
                <td className="p-2.5 font-mono border border-slate-200 dark:border-slate-700">Subject + has/have + V₃ + Object</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">We have completed the circuit assembly.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Actions just completed with current relevance.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">Present Perfect Cont.</td>
                <td className="p-2.5 font-mono border border-slate-200 dark:border-slate-700">Sub + has/have been + V₁-ing + since/for</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The generator has been running for 5 hours.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Long endurance testing duration in labs.</td>
              </tr>
              {/* Past */}
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400">Simple Past</td>
                <td className="p-2.5 font-mono border border-slate-200 dark:border-slate-700">Subject + V₂ (Past Form) + Object</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The fuse blew due to an unexpected short circuit.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Historical engineering project reports, accident logs.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400">Past Continuous</td>
                <td className="p-2.5 font-mono border border-slate-200 dark:border-slate-700">Subject + was/were + V₁-ing + Object</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The turbine was vibrating when power cut occurred.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Describing ongoing events during past accidents.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400">Past Perfect</td>
                <td className="p-2.5 font-mono border border-slate-200 dark:border-slate-700">Subject + had + V₃ + Object</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The engineer had turned off the valve before leaving.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Sequence of two past actions (earlier action gets 'had').</td>
              </tr>
              {/* Future */}
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400">Simple Future</td>
                <td className="p-2.5 font-mono border border-slate-200 dark:border-slate-700">Subject + will/shall + V₁ + Object</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The solar plant will produce 50 MW of power.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">Project proposals, future projections, quotations.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.4 Active and Passive Voice */}
      {/* ========================================================= */}
      <section id="sec-4-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Active and Passive Voice: The Technical Lab Reporting Standard
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Voice verb ki woh form hoti hai jo yeh batati hai ki Subject khud kaam kar raha hai (<strong>Active Voice</strong>) ya Subject par kaam kiya ja raha hai (<strong>Passive Voice</strong>).
        </p>

        {/* Why Passive Voice is Mandatory in Science */}
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 mb-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-1">
            Why Engineers and Scientists Prefer Passive Voice:
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Engineering lab reports, research papers aur instruction manuals me <strong>"Kaam karne wala kaun hai" (Doer)</strong> important nahi hota, balki <strong>"Kya experiment ya result hua" (Action / Object)</strong> sabse important hota hai. Personal pronouns (I, We, My) use karne se bacha jaata hai:
          </p>
          <div className="p-2.5 bg-slate-200 dark:bg-slate-900 rounded font-mono text-xs mt-2 space-y-1">
            <p className="text-red-600 dark:text-red-400">✗ Active (Unprofessional): "I connected the ammeter across the load and measured 2 Amps."</p>
            <p className="text-emerald-600 dark:text-emerald-400">✓ Passive (Scientific Standard): "The ammeter was connected across the load, and a current of 2 A was recorded."</p>
          </div>
        </div>

        {/* 4 Golden Rules of Transformation */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>4 Golden Rules for Converting Active to Passive Voice</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">RULE 1</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">Active voice ke <strong>Object ko Passive voice ka Subject</strong> banayein.</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">RULE 2</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">Tense aur naye Subject ke number (singular/plural) ke anusaar <strong>'be' verb (is, are, was, were, been, being)</strong> add karein.</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">RULE 3</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">Main verb ko HAMESHA <strong>Past Participle (3rd Form, V₃)</strong> me convert karein.</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">RULE 4</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">Original doer ke aage <strong>'by'</strong> lagayein (agar doer unknown ya irrelevant ho to omit kar dein).</p>
          </div>
        </div>

        {/* Tense-wise Conversion Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Tense</th>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Active Voice Sentence</th>
                <th className="p-2.5 border border-slate-200 dark:border-slate-700">Passive Voice Conversion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold font-sans border border-slate-200 dark:border-slate-700">Simple Present</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The technician repairs the motor.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">The motor <strong>is repaired</strong> by the technician.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold font-sans border border-slate-200 dark:border-slate-700">Present Continuous</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">They are testing the transformer.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">The transformer <strong>is being tested</strong> by them.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold font-sans border border-slate-200 dark:border-slate-700">Present Perfect</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">We have detected the fault.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">The fault <strong>has been detected</strong> by us.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold font-sans border border-slate-200 dark:border-slate-700">Simple Past</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The student solved the equation.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">The equation <strong>was solved</strong> by the student.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold font-sans border border-slate-200 dark:border-slate-700">Simple Future</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">The team will install the radar.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">The radar <strong>will be installed</strong> by the team.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-2.5 font-bold font-sans border border-slate-200 dark:border-slate-700">Modals (can/must/should)</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700">You must wear a helmet.</td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400">A helmet <strong>must be worn</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.5 Punctuation */}
      {/* ========================================================= */}
      <section id="sec-4-5" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Punctuation and Capitalization Standards
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Punctuation marks written bhasha me traffic signals ka kaam karte hain. Ek galat comma poore sentence ka meaning ulat-palat kar sakta hai (jaise: <em>"Let's eat, Grandpa!"</em> vs <em>"Let's eat Grandpa!"</em>). Mukhya punctuation marks aur unke rules:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">1. Full Stop (.) & Comma (,)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Full stop declarative sentence ke end me lagta hai. Comma short pause, clauses ko separate karne, ya series of items (resistor, capacitor, and inductor) ko alag karne ke liye use hota hai.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">2. Semicolon (;) vs Colon (:)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Semicolon:</strong> Do closely related independent clauses ko bina conjunction ke jodta hai (<em>"The engine started; the vibration vanished."</em>)<br />
              <strong>Colon:</strong> Kisi list, technical specification ya explanation ko introduce karta hai.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">3. Apostrophe (') Possession vs Contraction</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Singular possession: <em>"The student's project."</em> Plural possession: <em>"The students' hostel."</em><br />
              <strong>Critical warning:</strong> <em>"It's"</em> means <em>"It is"</em>; jabki <em>"Its"</em> ek possessive pronoun hai (<em>"The motor lost its torque."</em>).
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-brand-600 dark:text-brand-400">4. Capitalization (Bade Akshar)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Sentence ka first letter, Proper Nouns (India, Newton, Siemens), acronyms (BTEUP, AICTE, ISRO), aur pronoun 'I' hamesha Capital letters me likhe jaate hain.
            </p>
          </div>
        </div>

        {/* Quick Revision Card */}
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Unit 4 Quick Revision Takeaway</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            • Sentences: Assertive (Statement), Interrogative (Question), Imperative (Order/Command), Exclamatory (Emotion).<br />
            • Structure: Simple (1 clause), Compound (joined by FANBOYS), Complex (Independent + Dependent clause).<br />
            • Passive Voice is the scientific standard for lab reports (Object + be-verb + V₃).<br />
            • Distinguish Semicolon (connecting two clauses) and Colon (introducing lists).
          </p>
        </div>
      </section>
    </article>
  );
};

export default CsUnit4Content;
