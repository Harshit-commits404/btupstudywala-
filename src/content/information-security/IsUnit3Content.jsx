import React from 'react';

const IsUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            CHAPTER 03
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Information Security
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Cryptography and Secure Software
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Is unit mein Cryptography ke basics (Symmetric aur Asymmetric), Public Key Infrastructure (PKI) aur secure software development ki best practices cover kiye gaye hain.
        </p>
      </header>

      <section id="crypto-basics" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Basics of Cryptography</h2>
        <p className="mb-4">
          Cryptography ek science (aur kala) hai jisme readable data (Plaintext) ko unreadable format (Ciphertext) mein convert kiya jata hai, taaki sirf authorized receiver hi use wapas read kar sake. Is process ko <strong>Encryption</strong> kehte hain, aur wapas original data mein badalne ko <strong>Decryption</strong> kehte hain.
        </p>
        <p className="mb-4">Iske do mukhya types hote hain:</p>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Symmetric Cryptography (Secret Key)</h3>
        <p className="mb-4">
          Isme encryption aur decryption dono ke liye ek hi <strong>Shared Secret Key</strong> ka use hota hai. Ye fast hoti hai, lekin key ko safely share karna ek badi problem hoti hai (Key distribution problem). Example: AES, DES.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">Asymmetric Cryptography (Public Key)</h3>
        <p className="mb-4">
          Isme do keys ka pair use hota hai: ek <strong>Public Key</strong> (jo sabko baanti jati hai) aur ek <strong>Private Key</strong> (jo secret rakhi jati hai). Jo data public key se encrypt hota hai, wo sirf uski jodi daar private key se hi decrypt ho sakta hai. Ye secure key exchange aur digital signatures mein use hota hai. Example: RSA, ECC.
        </p>
      </section>

      <section id="pki" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Public Key Infrastructure (PKI)</h2>
        <p className="mb-4">
          PKI ek aesa system aur framework hai jo digital certificates issue aur manage karta hai, taaki asymmetric cryptography ka effectively aur safely use kiya ja sake internet par.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Digital Certificates:</strong> Ye ek electronic document hota hai jo kisi entity (website ya user) ki identity ko ek public key ke sath bind karta hai.</li>
          <li><strong>CA (Certificate Authority):</strong> Ye ek trusted third-party organization hai (jaise DigiCert, Let's Encrypt) jo digital certificates verify karke issue karti hai.</li>
          <li><strong>RA (Registration Authority):</strong> CA ke behalf par users ki identity verify karti hai.</li>
        </ul>
        <p className="mb-4">Jab aap kisi HTTPS website par jate hain, to aapka browser PKI framework ka use karke hi us website ke certificate ko CA dwara verify karta hai.</p>
      </section>

      <section id="secure-software" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Security Considerations While Developing Software</h2>
        <p className="mb-4">
          Aajkal zyadatar attacks software vulnerabilities (kamiyon) ka fayda uthate hain. Isliye software banate samay security ko dhyan mein rakhna (Secure SDLC) bahut zaroori hai:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Input Validation:</strong> User se aane wale kisi bhi input par bharosa na karein. Hamesha check karein ki data sahi format mein hai. Isse SQL Injection aur XSS attacks roke ja sakte hain.</li>
          <li><strong>Least Privilege:</strong> Software aur uske processes ko utne hi permissions dein jitne uske kaam ke liye zaroori hain. (jaise database read karna hai to admin access mat do).</li>
          <li><strong>Secure Storage:</strong> Passwords ko kabhi plaintext mein database mein save na karein, balki unhe strong Hashing (jaise bcrypt) ke sath store karein.</li>
          <li><strong>Error Handling:</strong> Error messages mein system details (jaise stack trace ya database names) user ko na dikhayein, balki generic errors show karein.</li>
          <li><strong>Keep Dependencies Updated:</strong> Third-party libraries aur frameworks ko regularly update karein taaki known bugs fix ho sakein.</li>
        </ul>
      </section>
    </article>
  );
};

export default IsUnit3Content;
