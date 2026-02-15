import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-huggn-primary mb-2 uppercase tracking-wide">Terms of Service</h1>
      <p className="text-sm text-huggn-textLight mb-8">Last Updated: February 15, 2026</p>
      
      <div className="prose prose-stone max-w-none text-huggn-text space-y-8">
        <p>
          These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User,” “you,” or “your”) and Ryon Labs LLC (“Company,” “we,” “us,” or “our”) governing your access to and use of the Huggn mobile application and related services (collectively, the “Service”).
        </p>

        <p>
          By downloading, accessing, or using Huggn, you agree to be bound by these Terms. If you do not agree, you must not use the Service.
        </p>

        <div className="bg-huggn-secondary p-8 rounded-2xl border border-huggn-primary/10">
            <h2 className="text-xl font-bold text-huggn-primary mb-4 mt-0 uppercase tracking-wide">IMPORTANT MEDICAL & CRISIS DISCLAIMER</h2>
            <div className="space-y-4 text-huggn-text font-medium">
                <p>Huggn is an AI-powered companion and is NOT a licensed medical professional, therapist, psychologist, psychiatrist, or healthcare provider.</p>
                <p>Huggn does not provide medical advice, diagnosis, psychotherapy, counseling, crisis intervention, or treatment of any kind.</p>
                <p>The Service is intended for informational and self-reflection purposes only.</p>
                
                <div className="bg-white/50 p-6 rounded-xl mt-6 border border-huggn-primary/5">
                    <p className="font-bold mb-2">If you are:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Experiencing a medical emergency,</li>
                        <li>In crisis,</li>
                        <li>Having thoughts of self-harm or suicide,</li>
                        <li>Experiencing severe psychological distress,</li>
                    </ul>
                    <p className="mt-4 font-bold">You must immediately contact:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Your local emergency services (e.g., <strong>911</strong> in the US, <strong>112</strong> in Europe, or the equivalent in your country).</li>
                        <li>A national crisis or suicide prevention hotline in your region.</li>
                    </ul>
                </div>
                
                <p className="mt-4 italic text-huggn-textLight">Huggn does not monitor conversations in real-time and does not have the ability to intervene in emergencies.</p>
                <p className="font-bold text-huggn-primary">By using the Service, you acknowledge and agree that you are solely responsible for your mental health decisions.</p>
            </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">1. ELIGIBILITY</h2>
          <p className="text-huggn-textLight">You must be at least 18 years old to use the Service.</p>
          <p className="mb-2 mt-4 font-semibold text-huggn-primary">By using Huggn, you represent and warrant that:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>You are at least 18 years of age.</li>
            <li>You have the legal capacity to enter into these Terms.</li>
            <li>You will use the Service in compliance with all applicable laws.</li>
          </ul>
          <p className="mt-4 text-huggn-textLight italic">We do not knowingly permit individuals under 18 to use the Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">2. DESCRIPTION OF SERVICE</h2>
          <p className="text-huggn-textLight mb-4">Huggn provides AI-generated conversational responses designed to support emotional reflection and personal growth.</p>
          <p className="mb-2 font-bold">The Service:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Uses artificial intelligence technologies</li>
            <li>Is not human-operated therapy</li>
            <li>Does not store user session transcripts</li>
            <li>Does not store session summaries</li>
            <li>Does not store assessment results</li>
          </ul>
          <p className="mt-4 text-huggn-textLight italic">All AI responses are generated algorithmically and may be incomplete, inaccurate, or inappropriate.</p>
          <p className="mb-2 mt-4 font-bold">You agree that:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>AI outputs may contain errors.</li>
            <li>You will not rely on Huggn as a substitute for professional care.</li>
            <li>You remain solely responsible for your actions and decisions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">3. NO THERAPIST–CLIENT OR MEDICAL RELATIONSHIP</h2>
          <p className="mb-2">Use of Huggn does not create:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>A therapist–client relationship</li>
            <li>A doctor–patient relationship</li>
            <li>A fiduciary relationship</li>
            <li>A confidential healthcare relationship</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">Ryon Labs LLC is not a healthcare provider and is not subject to healthcare-specific regulations such as HIPAA.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">4. THIRD-PARTY AI SERVICES & ELEVENLABS DISCLOSURE</h2>
          <p className="mb-4">Huggn utilizes third-party AI technology, including ElevenLabs Agents and OpenAI, to generate conversational responses. By using Huggn, you acknowledge and agree that:</p>
          <ul className="list-disc pl-5 space-y-3 text-huggn-textLight mb-4 font-medium">
            <li>You are interacting with an AI and not a human.</li>
            <li>Your communications with the AI may be recorded, processed, viewed, and shared with ElevenLabs and other third-party model providers as necessary to provide the Service.</li>
            <li>You consent to this processing and sharing.</li>
          </ul>
          <p className="text-sm italic">This disclosure is required under the ElevenLabs Agents Terms and applicable laws.</p>
          <p className="mt-4 text-huggn-textLight">Your input may be processed by these third-party providers solely to generate responses within the Service. We do not control how these providers process data beyond our contractual agreements with them.</p>
          <p className="mb-2 mt-4 font-bold text-huggn-primary">We are not responsible for:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Errors generated by third-party AI systems</li>
            <li>Service outages</li>
            <li>Data handling practices of third-party providers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">5. ACCOUNT REGISTRATION</h2>
          <p className="mb-4 text-huggn-textLight">To use certain features, you may be required to create an account.</p>
          <p className="mb-2 font-bold">You agree to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Provide accurate information</li>
            <li>Maintain confidentiality of login credentials</li>
            <li>Accept responsibility for activity under your account</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">We reserve the right to suspend or terminate accounts at our sole discretion.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">6. SUBSCRIPTIONS & BILLING</h2>
          <p className="mb-2">Some features may require payment. Payments are processed through:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Apple App Store</li>
            <li>Google Play Store</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">We do not store payment information.</p>
          <p className="mb-2 mt-4 font-bold">Subscriptions:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Renew automatically unless canceled</li>
            <li>Can be canceled via your device settings</li>
            <li>Are subject to app store refund policies</li>
          </ul>
          <p className="mt-4 text-sm italic">We are not responsible for billing disputes handled by third-party app stores.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">7. USER CONDUCT</h2>
          <p className="mb-2 font-bold">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Use the Service for illegal purposes</li>
            <li>Attempt to reverse engineer or scrape the Service</li>
            <li>Upload malicious code</li>
            <li>Harass, abuse, or threaten others</li>
            <li>Use the Service to compete with us</li>
            <li>Attempt to manipulate AI systems</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">We may suspend or terminate access without notice if these Terms are violated.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">8. INTELLECTUAL PROPERTY</h2>
          <p className="text-huggn-textLight mb-4">All content, software, branding, design, and functionality of Huggn are owned by Ryon Labs LLC.</p>
          <p className="text-huggn-textLight mb-4">You are granted a limited, non-transferable, non-exclusive license for personal, non-commercial use.</p>
          <p className="mb-2 font-bold">You may not:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Copy, reproduce, or resell</li>
            <li>Modify or reverse engineer</li>
          </ul>
          <p className="mt-4 font-bold text-huggn-primary">Any unauthorized use terminates your license immediately.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">9. NO DUTY TO MONITOR</h2>
          <p className="mb-2">We do not:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Monitor user conversations</li>
            <li>Review conversations in real time</li>
            <li>Provide crisis intervention</li>
            <li>Guarantee response accuracy</li>
          </ul>
          <p className="mt-4 italic">We assume no duty to monitor or intervene.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">10. DISCLAIMER OF WARRANTIES</h2>
          <p className="text-huggn-textLight italic mb-4">The Service is provided “AS IS” and “AS AVAILABLE.”</p>
          <p className="mb-2 font-bold">To the fullest extent permitted by law, we disclaim all warranties, including:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Accuracy, reliability, and fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Emotional or psychological benefit</li>
          </ul>
          <p className="mb-2 mt-4 font-bold">We do not guarantee:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Continuous availability or error-free performance</li>
            <li>That AI outputs will meet expectations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">11. LIMITATION OF LIABILITY</h2>
          <p className="font-bold text-huggn-primary mb-2">To the maximum extent permitted by law, Ryon Labs LLC shall not be liable for any:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Indirect damages or emotional distress</li>
            <li>Consequential damages or loss of data</li>
            <li>Personal injury or psychological harm</li>
            <li>Decisions made based on AI outputs</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">Our total liability shall not exceed the amount you paid (if any) to us in the twelve (12) months preceding the claim.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">12. INDEMNIFICATION</h2>
          <p className="text-huggn-textLight">
            You agree to defend, indemnify, and hold harmless Ryon Labs LLC from any claims, damages, liabilities, or expenses arising from your use of the Service, your violation of these Terms, or your misuse of AI outputs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">13. TERMINATION</h2>
          <p className="text-huggn-textLight">We may suspend or terminate your access at any time for any reason. Upon termination, your license ends immediately and we may delete associated account data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">14. GOVERNING LAW</h2>
          <p className="text-huggn-textLight">
            These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict-of-law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">15. DISPUTE RESOLUTION & ARBITRATION</h2>
          <p className="text-huggn-textLight mb-4">
            Any dispute arising from these Terms shall be resolved through binding arbitration in the United States.
          </p>
          <p className="font-bold text-huggn-primary mb-2">You waive:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>The right to a jury trial</li>
            <li>The right to participate in class actions</li>
          </ul>
          <p className="mt-4 italic">Arbitration shall be conducted on an individual basis only. If arbitration is unenforceable, disputes shall be resolved in courts located in the United States.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">16. CHANGES TO TERMS</h2>
          <p className="text-huggn-textLight">
            We may update these Terms at any time. Continued use of the Service constitutes acceptance of revised Terms.
          </p>
        </section>

        <section className="border-t border-huggn-primary/10 pt-8 mt-12">
          <h2 className="text-xl font-bold text-huggn-primary mb-4 uppercase tracking-wide">17. Contact Information</h2>
          <address className="not-italic text-huggn-textLight">
            <p className="font-bold text-huggn-primary">Ryon Labs LLC</p>
            <p>Email: <a href="mailto:info@ryonlabs.com" className="text-huggn-primary underline font-medium">info@ryonlabs.com</a></p>
          </address>
        </section>
      </div>
    </div>
  );
};