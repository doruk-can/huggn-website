import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-huggn-primary mb-2 uppercase tracking-wide">Privacy Policy</h1>
      <p className="text-sm text-huggn-textLight mb-8">Last Updated: February 15, 2026</p>
      
      <div className="prose prose-stone max-w-none text-huggn-text space-y-8">
        <p>
          This Privacy Policy describes how Ryon Labs LLC ("Company," "we," "us," or "our") collects, uses, processes, and protects information when you use the Huggn mobile application and related services (the "Services").
        </p>

        <p>
          By using Huggn, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the Services.
        </p>

        <p>
          For questions, contact: <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>
        </p>

        <div className="bg-huggn-secondary/20 p-8 rounded-2xl border border-huggn-primary/10">
          <h2 className="text-xl font-bold text-huggn-primary mb-6 mt-0">SUMMARY OF KEY POINTS</h2>
          <ul className="list-disc pl-5 space-y-3 text-huggn-text font-medium">
            <li>We collect limited account information (email and login credentials).</li>
            <li>We do not store therapy session transcripts.</li>
            <li>We do not store session summaries.</li>
            <li>We do not store assessment test scores.</li>
            <li>We do not sell personal information.</li>
            <li>We do not use user conversations to train AI models.</li>
            <li>AI responses are generated using third-party providers (OpenAI and ElevenLabs).</li>
            <li>Huggn is intended only for individuals 18 years of age or older.</li>
          </ul>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">1. WHAT INFORMATION WE COLLECT</h2>
          <h3 className="text-xl font-semibold text-huggn-primary mb-2">A. Information You Provide</h3>
          <p className="mb-2">We collect:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Email address</li>
            <li>Account login credentials</li>
            <li>Any information you voluntarily enter into the application during use</li>
          </ul>
          <p className="mt-4 font-medium italic">Therapy conversations are processed in real time but are not stored by us.</p>
          
          <h3 className="text-xl font-semibold text-huggn-primary mb-2 mt-6">B. Sensitive Information</h3>
          <p className="text-huggn-textLight mb-2">
            Because Huggn is a mental health support application, information you share during sessions may include sensitive health-related data.
          </p>
          <p className="text-huggn-textLight mb-2">We process such information solely to provide real-time AI-generated responses.</p>
          <p className="text-huggn-textLight">We do not permanently store therapy session content.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2 mt-6">C. Automatically Collected Information</h3>
          <p className="mb-2">We may collect limited technical information necessary for security and operation, including:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>IP address</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Basic usage logs</li>
          </ul>
          <p className="mt-4 font-medium italic text-huggn-primary">We do not use analytics tools such as Firebase, Google Analytics, or tracking frameworks.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">2. HOW WE PROCESS YOUR INFORMATION</h2>
          <p className="mb-2">We process personal information only to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Create and manage user accounts</li>
            <li>Authenticate login access</li>
            <li>Provide real-time AI-powered conversations</li>
            <li>Maintain application security</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">We do not use personal information for advertising or marketing profiling.</p>
          <p className="text-huggn-textLight">We do not analyze conversations for behavioral targeting.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">3. ARTIFICIAL INTELLIGENCE PROCESSING & DATA TRANSMISSION</h2>
          <p className="mb-2">Huggn provides AI-generated responses using third-party providers, including:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>OpenAI</li>
            <li>ElevenLabs (including ElevenLabs Agents)</li>
          </ul>
          <p className="mt-4 text-huggn-text">Specifically, you acknowledge that your data may be:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li><strong>Transmitted</strong> to ElevenLabs and third-party model providers in real-time.</li>
            <li><strong>Stored and processed</strong> by those providers according to their respective security and privacy protocols.</li>
            <li><strong>Used only in real-time</strong> for the purpose of AI response generation within the Service.</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">User inputs may be transmitted to these providers in real time to generate responses.</p>
          <p className="mb-2 font-bold mt-4">We do not:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Train our own AI models using your conversations</li>
            <li>Store transcripts for machine learning</li>
            <li>Fine-tune models using your session data</li>
          </ul>
          <p className="mt-4 text-sm text-huggn-textLight italic">
            Third-party providers process data under their own privacy policies and terms. We are not responsible for the independent data practices of those providers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">4. LEGAL BASIS FOR PROCESSING (GDPR NOTICE)</h2>
          <p className="text-huggn-textLight mb-2">
            If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process personal data under the following legal bases:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Performance of a contract (to provide Services)</li>
            <li>Consent (where required)</li>
            <li>Legitimate interests (application security and functionality)</li>
            <li>Legal compliance</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">You may withdraw consent at any time by discontinuing use of the Services and contacting us.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">5. DATA RETENTION</h2>
          <p className="text-huggn-textLight">We retain account information only as long as your account remains active.</p>
          <p className="mb-2 font-bold mt-4">We do not retain:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Session transcripts</li>
            <li>Session summaries</li>
            <li>Assessment test results</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">If you delete your account, we will delete associated personal data unless required to retain it by law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">6. DATA SHARING</h2>
          <p className="text-huggn-textLight mb-2">We do not sell personal information.</p>
          <p className="text-huggn-textLight mb-2">We do not share personal information for advertising purposes.</p>
          <p className="mb-2">We may share information only:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>With AI service providers (OpenAI, ElevenLabs) for real-time processing</li>
            <li>If required by law</li>
            <li>To protect legal rights or safety</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">7. INTERNATIONAL DATA TRANSFERS</h2>
          <p className="text-huggn-textLight">
            Your data may be processed in the United States or other countries where our service providers operate. These countries may have different data protection laws than your jurisdiction. By using Huggn, you consent to such transfers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">8. SECURITY</h2>
          <p className="text-huggn-textLight">
            We implement reasonable technical and organizational safeguards to protect personal information. However, no system is 100% secure. Use of the Services is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">9. CHILDREN UNDER 18</h2>
          <p className="text-huggn-textLight">
            Huggn is not intended for individuals under 18 years of age. We do not knowingly collect data from minors. If we become aware that data from a minor has been collected, we will delete it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">10. YOUR PRIVACY RIGHTS</h2>
          <p className="mb-2">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Access your personal data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Restrict processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">
            To exercise rights, contact: <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>
          </p>
          <p className="text-huggn-textLight italic text-sm mt-2">We will respond in accordance with applicable law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">11. UNITED STATES PRIVACY RIGHTS</h2>
          <p className="text-huggn-textLight mb-4">
            Residents of certain U.S. states (including California, Colorado, Texas, and others) may have additional rights under applicable privacy laws.
          </p>
          <p className="text-huggn-textLight mb-2">We do not sell or share personal data for cross-context behavioral advertising.</p>
          <p className="text-huggn-textLight mb-4">We do not engage in profiling that produces legal or similarly significant effects.</p>
          <p className="text-huggn-textLight">
            To exercise state-specific rights, contact us at <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">12. DO-NOT-TRACK</h2>
          <p className="text-huggn-textLight">We do not currently respond to Do-Not-Track browser signals.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">13. CHANGES TO THIS POLICY</h2>
          <p className="text-huggn-textLight">
            We may update this Privacy Policy from time to time. The updated version will include a revised "Last Updated" date. Continued use of the Services constitutes acceptance of updates.
          </p>
        </section>

        <section className="border-t border-huggn-primary/10 pt-8 mt-12">
          <h2 className="text-xl font-bold text-huggn-primary mb-4 uppercase">14. Contact Information</h2>
          <address className="not-italic text-huggn-textLight space-y-1">
            <p className="font-bold text-huggn-primary">Ryon Labs LLC</p>
            <p>Huggn Application</p>
            <p>Email: <a href="mailto:info@ryonlabs.com" className="text-huggn-primary underline">info@ryonlabs.com</a></p>
          </address>
        </section>
      </div>
    </div>
  );
};