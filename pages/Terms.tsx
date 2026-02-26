import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-huggn-primary mb-2 uppercase tracking-wide">Terms of Service</h1>
      <p className="text-sm text-huggn-textLight mb-8">Effective Date: February 26, 2026 | Last Updated: February 26, 2026</p>

      <div className="prose prose-stone max-w-none text-huggn-text space-y-8">
        <p>
          These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and <strong>Ryon Labs LLC</strong> ("Company," "we," "us," or "our") governing your access to and use of the <strong>Huggn</strong> mobile application and related services, including our website at <a href="https://huggn.app" className="text-huggn-primary font-medium underline">huggn.app</a> (collectively, the "Service").
        </p>

        <p>
          <strong>By downloading, installing, accessing, or using Huggn, you agree to be bound by these Terms in their entirety.</strong> If you do not agree to any part of these Terms, you must immediately cease all use of the Service and delete the application from your device.
        </p>

        <p>
          For questions, contact: <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>
        </p>

        {/* Important Medical & Crisis Disclaimer */}
        <div className="bg-huggn-secondary p-8 rounded-2xl border border-huggn-primary/10">
          <h2 className="text-xl font-bold text-huggn-primary mb-4 mt-0 uppercase tracking-wide">IMPORTANT MEDICAL AND CRISIS DISCLAIMER</h2>
          <p className="font-bold text-huggn-primary mb-4">PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.</p>
          <div className="space-y-4 text-huggn-text font-medium">
            <p>Huggn is an AI-powered wellbeing companion and is <strong>NOT</strong> a licensed medical professional, therapist, psychologist, psychiatrist, counselor, or healthcare provider of any kind.</p>
            <p><strong>Huggn does not provide and is not intended to provide:</strong> medical advice, clinical diagnosis, psychotherapy, counseling, crisis intervention, treatment, or care of any kind — whether medical, psychological, psychiatric, or otherwise.</p>
            <p>The Service is intended solely for general informational, self-reflection, and personal wellbeing support purposes.</p>

            <div className="bg-white/50 p-6 rounded-xl mt-6 border border-huggn-primary/5">
              <p className="font-bold mb-2">If you are experiencing any of the following, you must immediately contact your local emergency services or a qualified healthcare professional:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>A medical or psychological emergency</li>
                <li>Thoughts of self-harm or suicide</li>
                <li>Severe psychological distress</li>
                <li>A crisis of any nature requiring professional intervention</li>
              </ul>
              <p className="mt-4 font-bold">Emergency contacts include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>911</strong> (United States)</li>
                <li><strong>112</strong> (Europe)</li>
                <li><strong>988</strong> Suicide & Crisis Lifeline (United States)</li>
                <li>Or the equivalent emergency and crisis services in your country</li>
              </ul>
            </div>

            <p className="mt-4">Huggn does not monitor conversations for emergencies, is not designed to detect all crisis situations, and does not have the ability to intervene in emergencies or contact emergency services on your behalf. While the App includes certain automated safety features, these features are not guaranteed to be accurate, complete, or reliable, and should not be relied upon in any emergency or crisis situation.</p>
            <p className="font-bold text-huggn-primary">By using the Service, you acknowledge and agree that you are solely responsible for your own mental health, physical health, and all decisions and actions you take. You agree that the Company bears no responsibility or liability for any outcomes arising from your use of the Service.</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white p-8 rounded-2xl border border-huggn-primary/10">
          <h2 className="text-xl font-bold text-huggn-primary mb-4 mt-0">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-5 space-y-2 text-huggn-textLight text-sm">
            <li><a href="#eligibility" className="text-huggn-primary underline hover:text-huggn-primary/80">Eligibility</a></li>
            <li><a href="#description" className="text-huggn-primary underline hover:text-huggn-primary/80">Description of Service</a></li>
            <li><a href="#assumption-risk" className="text-huggn-primary underline hover:text-huggn-primary/80">Assumption of Risk</a></li>
            <li><a href="#no-relationship" className="text-huggn-primary underline hover:text-huggn-primary/80">No Therapist–Client or Medical Relationship</a></li>
            <li><a href="#ai-disclaimer" className="text-huggn-primary underline hover:text-huggn-primary/80">AI-Generated Content Disclaimer</a></li>
            <li><a href="#third-party-ai" className="text-huggn-primary underline hover:text-huggn-primary/80">Third-Party AI Services and Data Transmission</a></li>
            <li><a href="#account" className="text-huggn-primary underline hover:text-huggn-primary/80">Account Registration</a></li>
            <li><a href="#billing" className="text-huggn-primary underline hover:text-huggn-primary/80">Subscriptions, Credits, and Billing</a></li>
            <li><a href="#conduct" className="text-huggn-primary underline hover:text-huggn-primary/80">User Conduct</a></li>
            <li><a href="#ip" className="text-huggn-primary underline hover:text-huggn-primary/80">Intellectual Property</a></li>
            <li><a href="#user-content" className="text-huggn-primary underline hover:text-huggn-primary/80">User Content and License</a></li>
            <li><a href="#no-monitor" className="text-huggn-primary underline hover:text-huggn-primary/80">No Duty to Monitor</a></li>
            <li><a href="#privacy" className="text-huggn-primary underline hover:text-huggn-primary/80">Privacy</a></li>
            <li><a href="#warranty" className="text-huggn-primary underline hover:text-huggn-primary/80">Disclaimer of Warranties</a></li>
            <li><a href="#liability" className="text-huggn-primary underline hover:text-huggn-primary/80">Limitation of Liability</a></li>
            <li><a href="#indemnification" className="text-huggn-primary underline hover:text-huggn-primary/80">Indemnification</a></li>
            <li><a href="#termination" className="text-huggn-primary underline hover:text-huggn-primary/80">Termination</a></li>
            <li><a href="#governing-law" className="text-huggn-primary underline hover:text-huggn-primary/80">Governing Law</a></li>
            <li><a href="#arbitration" className="text-huggn-primary underline hover:text-huggn-primary/80">Dispute Resolution and Arbitration</a></li>
            <li><a href="#force-majeure" className="text-huggn-primary underline hover:text-huggn-primary/80">Force Majeure</a></li>
            <li><a href="#modifications" className="text-huggn-primary underline hover:text-huggn-primary/80">Modifications to the Service</a></li>
            <li><a href="#changes-terms" className="text-huggn-primary underline hover:text-huggn-primary/80">Changes to These Terms</a></li>
            <li><a href="#severability" className="text-huggn-primary underline hover:text-huggn-primary/80">Severability</a></li>
            <li><a href="#entire-agreement" className="text-huggn-primary underline hover:text-huggn-primary/80">Entire Agreement</a></li>
            <li><a href="#waiver" className="text-huggn-primary underline hover:text-huggn-primary/80">Waiver</a></li>
            <li><a href="#assignment" className="text-huggn-primary underline hover:text-huggn-primary/80">Assignment</a></li>
            <li><a href="#reservation" className="text-huggn-primary underline hover:text-huggn-primary/80">Reservation of Rights</a></li>
            <li><a href="#contact-terms" className="text-huggn-primary underline hover:text-huggn-primary/80">Contact Information</a></li>
          </ol>
        </div>

        {/* 1. Eligibility */}
        <section id="eligibility">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">1. ELIGIBILITY</h2>
          <p className="text-huggn-textLight mb-4">You must be at least <strong>18 years old</strong> to use the Service.</p>
          <p className="mb-2 font-semibold text-huggn-primary">By using Huggn, you represent and warrant that:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>You are at least 18 years of age.</li>
            <li>You have the legal capacity to enter into a binding agreement.</li>
            <li>You will use the Service in compliance with all applicable laws and regulations.</li>
            <li>You are not located in a jurisdiction where the use of such services is prohibited.</li>
            <li>You are not accessing the Service on behalf of any person under 18 years of age.</li>
          </ul>
          <p className="mt-4 text-huggn-textLight italic">We do not knowingly permit individuals under 18 to use the Service. If we learn that a user is under 18, we will terminate their account and delete associated data.</p>
        </section>

        {/* 2. Description of Service */}
        <section id="description">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">2. DESCRIPTION OF SERVICE</h2>
          <p className="text-huggn-textLight mb-4">Huggn provides AI-generated, voice-based conversational responses designed to support emotional reflection, personal growth, and general wellbeing. The AI companion applies techniques grounded in Cognitive Behavioral Therapy (CBT) principles.</p>
          <p className="mb-2 font-bold">The Service:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>Uses artificial intelligence technologies provided by third parties</li>
            <li>Is not human-operated therapy, counseling, or medical care</li>
            <li>Does not create any healthcare, therapeutic, or fiduciary relationship</li>
            <li>Does not store session transcripts on our servers or your device</li>
            <li>Does not permanently store session summaries on our servers</li>
            <li>Does not store assessment test scores on our servers</li>
          </ul>
          <p className="mb-2 font-bold">You understand and agree that:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>All AI responses are generated algorithmically and may be incomplete, inaccurate, inappropriate, or otherwise unsuitable.</li>
            <li>The Service may produce outputs that do not reflect current medical, psychological, or scientific consensus.</li>
            <li>AI outputs do not constitute professional advice of any kind.</li>
            <li>You will not rely on Huggn as a substitute for professional medical, psychological, or psychiatric care.</li>
            <li>You remain solely responsible for your actions, decisions, health, and wellbeing at all times.</li>
            <li>The quality, availability, and functionality of the Service may vary and are not guaranteed.</li>
          </ul>
        </section>

        {/* 3. Assumption of Risk */}
        <section id="assumption-risk">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">3. ASSUMPTION OF RISK</h2>
          <p className="font-bold text-huggn-primary mb-4">By using the Service, you voluntarily assume all risks associated with such use, including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>The risk that AI-generated content may be inaccurate, incomplete, misleading, or inappropriate</li>
            <li>The risk that the Service may not detect or appropriately respond to crisis situations, expressions of self-harm, suicidal ideation, or other emergencies</li>
            <li>The risk that reliance on AI-generated content may lead to adverse outcomes</li>
            <li>The risk of emotional or psychological discomfort arising from interactions with the AI</li>
            <li>The risk of service interruptions, errors, or technical failures</li>
            <li>The risk that data transmitted to third-party providers may be processed, stored, or handled in ways outside our control</li>
            <li>The risk that the Service may not be suitable for your particular needs or circumstances</li>
          </ul>
          <p className="text-huggn-textLight">You acknowledge that the Service is provided as a general wellbeing tool and is not tailored to your specific medical, psychological, or personal situation. You are solely responsible for evaluating whether the Service is appropriate for you.</p>
        </section>

        {/* 4. No Therapist–Client or Medical Relationship */}
        <section id="no-relationship">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">4. NO THERAPIST–CLIENT OR MEDICAL RELATIONSHIP</h2>
          <p className="mb-2">Use of Huggn <strong>does not create:</strong></p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>A therapist–client relationship</li>
            <li>A doctor–patient relationship</li>
            <li>A counselor–client relationship</li>
            <li>A fiduciary relationship</li>
            <li>A confidential healthcare relationship</li>
            <li>Any professional–client relationship of any kind</li>
          </ul>
          <p className="text-huggn-textLight mb-4"><strong>Ryon Labs LLC is not a healthcare provider, mental health provider, or medical institution.</strong> The Company is not subject to healthcare-specific regulations such as HIPAA, and the Service is not a "covered entity" or "business associate" under HIPAA or any similar healthcare privacy regulation.</p>
          <p className="text-huggn-textLight">No communication through the Service — whether from the AI, the Company, or any of our employees, contractors, or representatives — should be interpreted as medical advice, psychiatric advice, psychological advice, therapeutic guidance, or professional counsel of any kind.</p>
        </section>

        {/* 5. AI-Generated Content Disclaimer */}
        <section id="ai-disclaimer">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">5. AI-GENERATED CONTENT DISCLAIMER</h2>
          <p className="text-huggn-textLight mb-4">All content provided through the Service is generated by artificial intelligence systems. You acknowledge and agree that:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li><strong>AI outputs are not reviewed, verified, or endorsed by any human professional</strong>, including therapists, psychologists, physicians, or counselors, before being presented to you.</li>
            <li>AI outputs may contain errors, inaccuracies, biases, or omissions.</li>
            <li>AI outputs may not be appropriate for your specific situation, condition, or circumstances.</li>
            <li>AI outputs do not reflect the opinions, recommendations, or professional judgment of Ryon Labs LLC or any of its employees, contractors, or affiliates.</li>
            <li>The Company makes <strong>no representations or warranties</strong> regarding the accuracy, completeness, reliability, suitability, or appropriateness of any AI-generated content.</li>
            <li>You should independently verify any information provided through the Service before relying on it.</li>
            <li>AI technology is inherently unpredictable and may produce unexpected, inconsistent, or contradictory outputs.</li>
          </ul>
          <p className="font-bold text-huggn-primary">You agree not to hold the Company responsible for any AI-generated content, including any content that is inaccurate, inappropriate, offensive, or otherwise objectionable.</p>
        </section>

        {/* 6. Third-Party AI Services and Data Transmission */}
        <section id="third-party-ai">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">6. THIRD-PARTY AI SERVICES AND DATA TRANSMISSION</h2>
          <p className="text-huggn-textLight mb-4">Huggn utilizes third-party AI technology to generate conversational responses, including but not limited to services provided by <strong>ElevenLabs</strong> (including ElevenLabs Agents) and <strong>OpenAI</strong>.</p>
          <p className="mb-2 font-bold text-huggn-primary">By using Huggn, you acknowledge and agree that:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>You are interacting with an AI system and not a human being.</li>
            <li>Your voice, communications, and other inputs may be transmitted to, recorded, processed, stored, viewed, and shared with ElevenLabs, OpenAI, and other third-party service providers as necessary to provide the Service.</li>
            <li>You consent to this transmission, processing, and sharing.</li>
            <li>Third-party providers process data under their own respective privacy policies, terms of service, and data retention practices, over which we have no control.</li>
            <li>This disclosure is required under the ElevenLabs Agents Terms and applicable laws.</li>
          </ul>
          <p className="mb-2 font-bold text-huggn-primary">We are not responsible for:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>The data practices, data retention, or data processing of any third-party provider</li>
            <li>Errors, inaccuracies, or failures generated by third-party AI systems</li>
            <li>Service outages, interruptions, or degradation caused by third-party providers</li>
            <li>Any changes to third-party provider terms, policies, or practices</li>
            <li>Any loss, damage, or harm arising from data transmission to or processing by third-party providers</li>
          </ul>
          <p className="text-sm text-huggn-textLight">We encourage you to review the privacy policies and terms of service of our third-party providers:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-huggn-textLight mt-2">
            <li>ElevenLabs: <a href="https://elevenlabs.io/privacy-policy" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | <a href="https://elevenlabs.io/terms-of-use" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
            <li>OpenAI: <a href="https://openai.com/privacy" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | <a href="https://openai.com/terms" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">Terms</a></li>
          </ul>
        </section>

        {/* 7. Account Registration */}
        <section id="account">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">7. ACCOUNT REGISTRATION</h2>
          <p className="text-huggn-textLight mb-4">To use certain features of the Service, you are required to create an account using Apple Sign In or Google Sign In.</p>
          <p className="mb-2 font-bold">You agree to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>Provide accurate and complete information during registration</li>
            <li>Maintain the confidentiality of your login credentials and account access</li>
            <li>Immediately notify us of any unauthorized access to or use of your account</li>
            <li>Accept full responsibility for all activity that occurs under your account, whether or not authorized by you</li>
          </ul>
          <p className="mb-2 font-bold">You acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>You are permitted to maintain only one account</li>
            <li>We reserve the right to suspend, disable, or terminate any account at our sole discretion, with or without notice, for any reason or no reason</li>
            <li>We are not liable for any loss or damage arising from your failure to maintain the security of your account credentials</li>
          </ul>
        </section>

        {/* 8. Subscriptions, Credits, and Billing */}
        <section id="billing">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">8. SUBSCRIPTIONS, CREDITS, AND BILLING</h2>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.1 Credit System</h3>
          <p className="text-huggn-textLight mb-6">The Service operates on a credit-based system. Sessions consume credits based on actual usage. The rate of credit consumption may vary depending on session characteristics and is determined by actual usage data from our voice AI provider.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.2 Subscription Plans</h3>
          <p className="text-huggn-textLight mb-6">Subscription plans provide an allotment of credits. The estimated session time included in each plan (for example, approximately 200 minutes for the monthly plan) is an approximation only. Actual available session time may be more or less than the estimate depending on individual usage patterns and technical factors.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.3 Payments</h3>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>All payments are processed through Apple In-App Purchases (iOS) and Google Play Billing (Android).</li>
            <li><strong>The Company does not directly collect, process, or store your payment card or financial information.</strong></li>
            <li>Subscriptions renew automatically at the end of each billing cycle unless canceled prior to renewal.</li>
            <li>You may cancel your subscription at any time through your device's app store settings (Apple App Store or Google Play Store).</li>
            <li>Cancellation takes effect at the end of the current billing period. You will retain access to the Service until the end of the period for which you have already paid.</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.4 Refunds</h3>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>Refund requests are handled by the respective app store (Apple or Google) in accordance with their refund policies.</li>
            <li><strong>The Company does not process refunds directly.</strong> All billing disputes must be resolved with the applicable app store.</li>
            <li>Credits are non-transferable and have no cash value.</li>
            <li>Unused credits may expire at the end of the subscription period and do not carry over unless otherwise stated.</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.5 Price Changes</h3>
          <p className="text-huggn-textLight">We reserve the right to change subscription pricing at any time. Price changes will take effect at the start of the next billing cycle following notice of the change. Your continued subscription after a price change constitutes acceptance of the new pricing.</p>
        </section>

        {/* 9. User Conduct */}
        <section id="conduct">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">9. USER CONDUCT</h2>
          <p className="mb-2 font-bold">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Use the Service for any illegal, fraudulent, or unauthorized purpose</li>
            <li>Use the Service in any manner that could damage, disable, overburden, or impair the Service</li>
            <li>Attempt to reverse engineer, decompile, disassemble, or otherwise derive the source code of the Service</li>
            <li>Scrape, crawl, or use automated means to access the Service or extract data</li>
            <li>Upload, transmit, or distribute malicious code, viruses, or any other harmful technology</li>
            <li>Harass, abuse, threaten, stalk, or intimidate any person through the Service</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
            <li>Use the Service to develop a competing product or service</li>
            <li>Attempt to manipulate, exploit, or circumvent AI systems, safety protocols, or content filters</li>
            <li>Share your account credentials with any third party</li>
            <li>Use the Service in any way that violates applicable laws or regulations</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
          </ul>
          <p className="font-bold text-huggn-primary">We reserve the right to suspend or terminate your access immediately and without notice if you violate any of these Terms. Such termination shall not limit any other rights or remedies available to us.</p>
        </section>

        {/* 10. Intellectual Property */}
        <section id="ip">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">10. INTELLECTUAL PROPERTY</h2>
          <p className="text-huggn-textLight mb-4">All content, software, code, algorithms, branding, trademarks, trade names, logos, design, user interface, and functionality of the Huggn application and website are the exclusive property of Ryon Labs LLC or its licensors and are protected by applicable intellectual property laws, including copyright, trademark, and trade secret laws.</p>
          <p className="text-huggn-textLight mb-4"><strong>You are granted a limited, non-exclusive, non-transferable, non-sublicensable, revocable license</strong> to access and use the Service for your personal, non-commercial purposes only, subject to these Terms.</p>
          <p className="mb-2 font-bold">You may not:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Copy, reproduce, distribute, publish, display, or create derivative works of any part of the Service</li>
            <li>Modify, adapt, translate, or reverse engineer any part of the Service</li>
            <li>Sell, resell, rent, lease, license, or sublicense access to the Service</li>
            <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
            <li>Use any of our trademarks, trade names, or branding without prior written consent</li>
          </ul>
          <p className="font-bold text-huggn-primary">Any unauthorized use of the Service or its content terminates your license immediately and may result in civil or criminal liability.</p>
        </section>

        {/* 11. User Content and License */}
        <section id="user-content">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">11. USER CONTENT AND LICENSE</h2>
          <p className="text-huggn-textLight mb-4">By submitting any content to the Service (including voice input, text, onboarding responses, assessment responses, and any other information you provide), you grant Ryon Labs LLC a non-exclusive, worldwide, royalty-free, fully paid-up license to use, process, transmit, and store such content solely for the purpose of providing and operating the Service.</p>
          <p className="text-huggn-textLight mb-4">This license is limited to what is technically necessary to deliver the Service and does not extend to any other use. We do not claim ownership of your content.</p>
          <p className="text-huggn-textLight">You represent and warrant that you have the right to submit all content you provide and that such content does not violate any third party's rights or any applicable law.</p>
        </section>

        {/* 12. No Duty to Monitor */}
        <section id="no-monitor">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">12. NO DUTY TO MONITOR</h2>
          <p className="mb-2 font-bold">The Company does not:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Monitor user conversations in real time</li>
            <li>Review, audit, or evaluate the content of any session</li>
            <li>Provide real-time crisis intervention or emergency response</li>
            <li>Guarantee the accuracy, appropriateness, or safety of any AI-generated response</li>
            <li>Have any duty, obligation, or ability to intervene in any user's personal, medical, or psychological situation</li>
          </ul>
          <p className="font-bold text-huggn-primary">We expressly disclaim any duty to monitor, review, or intervene in any user interaction with the Service. While the AI includes certain automated safety features, these features operate algorithmically and are not guaranteed to detect or appropriately respond to all situations.</p>
        </section>

        {/* 13. Privacy */}
        <section id="privacy">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">13. PRIVACY</h2>
          <p className="text-huggn-textLight mb-4">Your use of the Service is also governed by our Privacy Policy, available at <a href="#/privacy" className="text-huggn-primary font-medium underline">https://huggn.app/#/privacy</a>. By using the Service, you acknowledge that you have read and understood our Privacy Policy and consent to the data practices described therein.</p>
          <p className="text-huggn-textLight">The Privacy Policy is incorporated into these Terms by reference.</p>
        </section>

        {/* 14. Disclaimer of Warranties */}
        <section id="warranty">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">14. DISCLAIMER OF WARRANTIES</h2>
          <p className="text-huggn-textLight italic mb-4">THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
          <p className="mb-2 font-bold">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, RYON LABS LLC EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li><strong>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</strong></li>
            <li><strong>ANY WARRANTY THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS</strong></li>
            <li><strong>ANY WARRANTY REGARDING THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF AI-GENERATED CONTENT</strong></li>
            <li><strong>ANY WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS</strong></li>
            <li><strong>ANY WARRANTY THAT THE SERVICE WILL PROVIDE ANY THERAPEUTIC, EMOTIONAL, PSYCHOLOGICAL, OR MEDICAL BENEFIT</strong></li>
            <li><strong>ANY WARRANTY REGARDING THE PERFORMANCE, AVAILABILITY, OR SUITABILITY OF THIRD-PARTY SERVICES INTEGRATED WITH THE SERVICE</strong></li>
            <li><strong>ANY WARRANTY THAT SAFETY FEATURES, INCLUDING CRISIS DETECTION, WILL FUNCTION ACCURATELY OR RELIABLY</strong></li>
          </ul>
          <p className="font-bold text-huggn-primary mb-2">NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM THE COMPANY OR THROUGH THE SERVICE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.</p>
          <p className="font-bold text-huggn-primary">YOU ACKNOWLEDGE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.</p>
        </section>

        {/* 15. Limitation of Liability */}
        <section id="liability">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">15. LIMITATION OF LIABILITY</h2>
          <p className="font-bold text-huggn-primary mb-4">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
          <p className="mb-2 font-bold">RYON LABS LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, CONTRACTORS, AFFILIATES, LICENSORS, AND SERVICE PROVIDERS SHALL NOT BE LIABLE FOR ANY:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Indirect, incidental, special, consequential, punitive, or exemplary damages</li>
            <li>Loss of profits, revenue, data, goodwill, or other intangible losses</li>
            <li>Emotional distress, psychological harm, or mental anguish</li>
            <li>Personal injury or bodily harm</li>
            <li>Damages arising from reliance on AI-generated content</li>
            <li>Damages arising from decisions or actions taken based on information provided through the Service</li>
            <li>Damages arising from the conduct, acts, or omissions of third-party service providers</li>
            <li>Damages arising from unauthorized access to or alteration of your data</li>
            <li>Damages arising from any interruption, suspension, or termination of the Service</li>
            <li>Damages arising from any failure of crisis detection or safety features</li>
            <li>Any other damages arising out of or related to your use of or inability to use the Service</li>
          </ul>
          <p className="text-huggn-textLight italic mb-4">REGARDLESS OF THE THEORY OF LIABILITY (WHETHER CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p className="font-bold text-huggn-primary mb-4">IN NO EVENT SHALL THE COMPANY'S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THE SERVICE EXCEED THE LESSER OF: (A) THE TOTAL AMOUNT YOU HAVE ACTUALLY PAID TO THE COMPANY (IF ANY) IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE HUNDRED U.S. DOLLARS (USD $100.00).</p>
          <p className="text-huggn-textLight italic text-sm">SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IN SUCH JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW.</p>
        </section>

        {/* 16. Indemnification */}
        <section id="indemnification">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">16. INDEMNIFICATION</h2>
          <p className="text-huggn-textLight mb-4"><strong>You agree to defend, indemnify, and hold harmless Ryon Labs LLC, its officers, directors, employees, agents, contractors, affiliates, licensors, and service providers</strong> from and against any and all claims, demands, actions, suits, proceedings, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees and court costs) arising out of or related to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Your use of or access to the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law or regulation</li>
            <li>Your violation of any third party's rights</li>
            <li>Your reliance on AI-generated content or any decisions or actions taken based thereon</li>
            <li>Any content you submit to or through the Service</li>
            <li>Any dispute between you and a third party arising from your use of the Service</li>
            <li>Your misuse of the Service or any of its features</li>
          </ul>
          <p className="text-huggn-textLight italic">This indemnification obligation shall survive the termination of these Terms and your use of the Service.</p>
        </section>

        {/* 17. Termination */}
        <section id="termination">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">17. TERMINATION</h2>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">17.1 Termination by Us</h3>
          <p className="text-huggn-textLight mb-6">We may suspend, restrict, or terminate your access to the Service at any time, for any reason or no reason, with or without notice, at our sole discretion. Reasons for termination may include, but are not limited to, violation of these Terms, suspected fraudulent or abusive activity, or discontinuation of the Service.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">17.2 Termination by You</h3>
          <p className="text-huggn-textLight mb-6">You may terminate your account at any time through the App settings or by contacting us at <a href="mailto:info@ryonlabs.com" className="text-huggn-primary underline">info@ryonlabs.com</a>. You may also delete the App from your device at any time.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">17.3 Effects of Termination</h3>
          <p className="mb-2">Upon termination:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Your license to use the Service ends immediately.</li>
            <li>We may delete your account data in accordance with our Privacy Policy.</li>
            <li>You remain responsible for any outstanding obligations incurred prior to termination.</li>
            <li>Any credits remaining in your account at the time of termination are forfeited and have no cash value.</li>
            <li>Sections of these Terms that by their nature should survive termination shall continue to apply, including but not limited to: Assumption of Risk, Disclaimer of Warranties, Limitation of Liability, Indemnification, Governing Law, Dispute Resolution, and Intellectual Property.</li>
          </ul>
        </section>

        {/* 18. Governing Law */}
        <section id="governing-law">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">18. GOVERNING LAW</h2>
          <p className="text-huggn-textLight">
            These Terms and any dispute arising out of or related to the Service shall be governed by and construed in accordance with the laws of the <strong>State of Delaware, United States</strong>, without regard to its conflict-of-law principles.
          </p>
        </section>

        {/* 19. Dispute Resolution and Arbitration */}
        <section id="arbitration">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">19. DISPUTE RESOLUTION AND ARBITRATION</h2>
          <p className="font-bold text-huggn-primary mb-6">PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY TRIAL.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">19.1 Informal Resolution</h3>
          <p className="text-huggn-textLight mb-6">Before initiating any formal dispute resolution proceeding, you agree to first contact us at <a href="mailto:info@ryonlabs.com" className="text-huggn-primary underline">info@ryonlabs.com</a> and attempt to resolve the dispute informally for at least thirty (30) days.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">19.2 Binding Arbitration</h3>
          <p className="text-huggn-textLight mb-6">If the dispute cannot be resolved informally, <strong>any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved exclusively through final and binding arbitration</strong> administered by the American Arbitration Association ("AAA") under its Consumer Arbitration Rules, to the extent applicable. Arbitration shall be conducted in the English language. The arbitrator's decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">19.3 Class Action Waiver</h3>
          <p className="font-bold text-huggn-primary mb-4">YOU AND THE COMPANY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.</p>
          <p className="mb-2">You expressly waive:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>The right to a trial by jury</li>
            <li>The right to participate in a class action, collective action, or representative action</li>
            <li>The right to participate in any consolidated or multi-party proceeding</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">19.4 Exceptions</h3>
          <p className="text-huggn-textLight mb-6">Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">19.5 Fallback Forum</h3>
          <p className="text-huggn-textLight">If the arbitration provision is found to be unenforceable, any dispute shall be resolved exclusively in the state or federal courts located in the State of Delaware, United States, and you consent to personal jurisdiction in such courts.</p>
        </section>

        {/* 20. Force Majeure */}
        <section id="force-majeure">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">20. FORCE MAJEURE</h2>
          <p className="text-huggn-textLight">The Company shall not be liable for any failure or delay in performing its obligations under these Terms where such failure or delay results from circumstances beyond our reasonable control, including but not limited to: acts of God, natural disasters, epidemics, pandemics, war, terrorism, civil unrest, government actions, power outages, internet or telecommunications failures, third-party service provider outages or failures, cyberattacks, or any other event beyond our reasonable control.</p>
        </section>

        {/* 21. Modifications to the Service */}
        <section id="modifications">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">21. MODIFICATIONS TO THE SERVICE</h2>
          <p className="text-huggn-textLight mb-4">We reserve the right to modify, update, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice, for any reason. This includes changes to features, functionality, pricing, credit systems, supported platforms, third-party integrations, and AI capabilities.</p>
          <p className="text-huggn-textLight">We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.</p>
        </section>

        {/* 22. Changes to These Terms */}
        <section id="changes-terms">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">22. CHANGES TO THESE TERMS</h2>
          <p className="text-huggn-textLight mb-4">We may update these Terms at any time at our sole discretion. The updated version will include a revised "Last Updated" date at the top of this page.</p>
          <p className="text-huggn-textLight">Continued use of the Service after any changes to these Terms constitutes your acceptance of and agreement to the revised Terms. If you do not agree to the revised Terms, you must stop using the Service.</p>
        </section>

        {/* 23. Severability */}
        <section id="severability">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">23. SEVERABILITY</h2>
          <p className="text-huggn-textLight">If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, shall be severed from these Terms. The remaining provisions shall continue in full force and effect.</p>
        </section>

        {/* 24. Entire Agreement */}
        <section id="entire-agreement">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">24. ENTIRE AGREEMENT</h2>
          <p className="text-huggn-textLight">These Terms, together with the Privacy Policy and any other agreements or policies expressly incorporated by reference herein, constitute the entire agreement between you and Ryon Labs LLC regarding the Service. These Terms supersede all prior or contemporaneous understandings, agreements, negotiations, representations, warranties, and communications, whether written or oral, relating to the Service.</p>
        </section>

        {/* 25. Waiver */}
        <section id="waiver">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">25. WAIVER</h2>
          <p className="text-huggn-textLight">The failure of the Company to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of the Company to be effective.</p>
        </section>

        {/* 26. Assignment */}
        <section id="assignment">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">26. ASSIGNMENT</h2>
          <p className="text-huggn-textLight">You may not assign, delegate, or transfer your rights or obligations under these Terms without the prior written consent of the Company. The Company may freely assign, delegate, or transfer its rights and obligations under these Terms without restriction. These Terms shall be binding upon and inure to the benefit of each party's successors and permitted assigns.</p>
        </section>

        {/* 27. Reservation of Rights */}
        <section id="reservation">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">27. RESERVATION OF RIGHTS</h2>
          <p className="text-huggn-textLight">Ryon Labs LLC expressly reserves all rights not specifically granted to you under these Terms. Nothing in these Terms shall be construed as granting you any right, title, or interest in the Service beyond the limited license expressly provided herein. The Company reserves the right to exercise all legal and equitable remedies available to it in connection with any violation of these Terms.</p>
        </section>

        {/* 28. Contact Information */}
        <section id="contact-terms" className="border-t border-huggn-primary/10 pt-8 mt-12">
          <h2 className="text-xl font-bold text-huggn-primary mb-4 uppercase tracking-wide">28. Contact Information</h2>
          <p className="text-huggn-textLight mb-4">If you have any questions about these Terms, please contact us:</p>
          <address className="not-italic text-huggn-textLight space-y-1">
            <p className="font-bold text-huggn-primary">Ryon Labs LLC</p>
            <p>Huggn Application</p>
            <p>Email: <a href="mailto:info@ryonlabs.com" className="text-huggn-primary underline font-medium">info@ryonlabs.com</a></p>
            <p>Website: <a href="https://huggn.app" className="text-huggn-primary underline">https://huggn.app</a></p>
          </address>
        </section>

        <div className="text-center text-sm text-huggn-textLight pt-8 border-t border-huggn-primary/10">
          <p>&copy; 2026 Ryon Labs LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};