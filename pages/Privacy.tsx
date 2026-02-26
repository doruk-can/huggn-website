import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-huggn-primary mb-2 uppercase tracking-wide">Privacy Policy</h1>
      <p className="text-sm text-huggn-textLight mb-8">Effective Date: February 26, 2026 | Last Updated: February 26, 2026</p>

      <div className="prose prose-stone max-w-none text-huggn-text space-y-8">
        <p>
          This Privacy Policy describes how <strong>Ryon Labs LLC</strong> ("Company," "we," "us," or "our") collects, uses, processes, stores, and protects information when you use the <strong>Huggn</strong> mobile application (the "App") and related services, including our website at <a href="https://huggn.app" className="text-huggn-primary font-medium underline">huggn.app</a> (collectively, the "Services").
        </p>

        <p>
          By using Huggn, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the Services.
        </p>

        <p>
          For questions, contact: <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>
        </p>

        {/* Summary of Key Points */}
        <div className="bg-huggn-secondary/20 p-8 rounded-2xl border border-huggn-primary/10">
          <h2 className="text-xl font-bold text-huggn-primary mb-6 mt-0">SUMMARY OF KEY POINTS</h2>
          <ul className="list-disc pl-5 space-y-3 text-huggn-text font-medium">
            <li>Huggn is an AI-powered wellbeing support tool — <strong>not a medical device</strong>. It does not diagnose conditions, replace licensed therapists, or provide emergency services.</li>
            <li>We collect limited account information (email and login credentials via Apple/Google Sign In).</li>
            <li><strong>We do not store therapy session transcripts</strong> on our servers or your device.</li>
            <li><strong>We do not permanently store session summaries on our servers</strong> — summaries are delivered to your device and then removed from our servers.</li>
            <li><strong>We do not store assessment test scores on our servers</strong> — they are stored only on your device.</li>
            <li><strong>We do not sell personal information.</strong></li>
            <li><strong>We do not use your conversations to train AI models.</strong></li>
            <li><strong>We do not use your data for advertising, marketing, or behavioral profiling.</strong></li>
            <li>AI responses are generated using third-party providers (ElevenLabs and OpenAI).</li>
            <li>Voice audio is streamed in real time and <strong>is not recorded or stored by Huggn</strong>.</li>
            <li>Your most sensitive data (session summaries, assessment results, exercises) is stored on your personal device, giving you direct control.</li>
            <li>Huggn is intended only for individuals <strong>18 years of age or older</strong>.</li>
            <li>We do not use analytics tools such as Firebase, Google Analytics, or third-party tracking frameworks within the App.</li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-white p-8 rounded-2xl border border-huggn-primary/10">
          <h2 className="text-xl font-bold text-huggn-primary mb-4 mt-0">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-5 space-y-2 text-huggn-textLight text-sm">
            <li><a href="#about-huggn" className="text-huggn-primary underline hover:text-huggn-primary/80">About Huggn</a></li>
            <li><a href="#scope" className="text-huggn-primary underline hover:text-huggn-primary/80">Scope and Applicability</a></li>
            <li><a href="#definitions" className="text-huggn-primary underline hover:text-huggn-primary/80">Definitions</a></li>
            <li><a href="#info-collect" className="text-huggn-primary underline hover:text-huggn-primary/80">What Information We Collect</a></li>
            <li><a href="#how-collect" className="text-huggn-primary underline hover:text-huggn-primary/80">How We Collect Your Data</a></li>
            <li><a href="#purposes" className="text-huggn-primary underline hover:text-huggn-primary/80">Purposes and Legal Bases for Processing</a></li>
            <li><a href="#voice-audio" className="text-huggn-primary underline hover:text-huggn-primary/80">Voice and Audio Data</a></li>
            <li><a href="#ai-processing" className="text-huggn-primary underline hover:text-huggn-primary/80">AI Processing and Automated Decision-Making</a></li>
            <li><a href="#data-storage" className="text-huggn-primary underline hover:text-huggn-primary/80">Data Storage Locations</a></li>
            <li><a href="#third-party" className="text-huggn-primary underline hover:text-huggn-primary/80">Third-Party Service Providers</a></li>
            <li><a href="#data-sharing" className="text-huggn-primary underline hover:text-huggn-primary/80">Data Sharing and Disclosure</a></li>
            <li><a href="#international" className="text-huggn-primary underline hover:text-huggn-primary/80">International Data Transfers</a></li>
            <li><a href="#data-retention" className="text-huggn-primary underline hover:text-huggn-primary/80">Data Retention</a></li>
            <li><a href="#data-security" className="text-huggn-primary underline hover:text-huggn-primary/80">Data Security</a></li>
            <li><a href="#privacy-rights" className="text-huggn-primary underline hover:text-huggn-primary/80">Your Privacy Rights</a></li>
            <li><a href="#us-rights" className="text-huggn-primary underline hover:text-huggn-primary/80">Additional Rights for U.S. State Residents (Including California)</a></li>
            <li><a href="#gdpr-rights" className="text-huggn-primary underline hover:text-huggn-primary/80">Additional Rights for EEA/UK Residents (GDPR)</a></li>
            <li><a href="#children" className="text-huggn-primary underline hover:text-huggn-primary/80">Children's Privacy</a></li>
            <li><a href="#crisis" className="text-huggn-primary underline hover:text-huggn-primary/80">Crisis Detection and Safety Protocol</a></li>
            <li><a href="#medical-disclaimer" className="text-huggn-primary underline hover:text-huggn-primary/80">Medical Disclaimer</a></li>
            <li><a href="#subscriptions" className="text-huggn-primary underline hover:text-huggn-primary/80">Subscriptions and Payments</a></li>
            <li><a href="#cookies" className="text-huggn-primary underline hover:text-huggn-primary/80">Cookies and Tracking Technologies</a></li>
            <li><a href="#dnt" className="text-huggn-primary underline hover:text-huggn-primary/80">Do-Not-Track Signals</a></li>
            <li><a href="#third-party-links" className="text-huggn-primary underline hover:text-huggn-primary/80">Third-Party Links</a></li>
            <li><a href="#changes" className="text-huggn-primary underline hover:text-huggn-primary/80">Changes to This Policy</a></li>
            <li><a href="#contact" className="text-huggn-primary underline hover:text-huggn-primary/80">Contact Us</a></li>
          </ol>
        </div>

        {/* 1. About Huggn */}
        <section id="about-huggn">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">1. ABOUT HUGGN</h2>
          <p className="text-huggn-textLight">
            Huggn is an AI-powered wellbeing support application that provides real-time voice-based sessions grounded in Cognitive Behavioral Therapy (CBT) principles. The AI companion applies CBT techniques — including identifying thought patterns, challenging cognitive distortions, suggesting behavioral experiments, and teaching coping skills — in an empathetic, non-judgmental manner.
          </p>
          <div className="bg-huggn-secondary/30 p-6 rounded-xl mt-4 border border-huggn-primary/10">
            <p className="font-bold text-huggn-primary mb-2">Important:</p>
            <p className="text-huggn-textLight">
              Huggn is <strong>not</strong> a medical device. The App does not diagnose medical or psychological conditions, does not replace licensed therapists, psychiatrists, or any healthcare professionals, and does not provide emergency or crisis services. The AI does not represent itself as a licensed therapist or a human being. Huggn is a wellbeing support tool that uses AI technology to complement — not substitute — professional mental health care.
            </p>
          </div>
        </section>

        {/* 2. Scope and Applicability */}
        <section id="scope">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">2. SCOPE AND APPLICABILITY</h2>
          <p className="text-huggn-textLight mb-4">
            This Privacy Policy applies to all users of the Huggn App on iOS and Android platforms, our website at <a href="https://huggn.app" className="text-huggn-primary font-medium underline">huggn.app</a>, and any related services or communications. This Policy applies regardless of which language (English or Turkish) you use within the App.
          </p>
          <p className="text-huggn-textLight">
            This Policy does not apply to third-party websites, applications, or services that may be linked from within our App or website. We encourage you to review the privacy policies of any third-party services before providing your information to them.
          </p>
        </section>

        {/* 3. Definitions */}
        <section id="definitions">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">3. DEFINITIONS</h2>
          <p className="mb-4">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc pl-5 space-y-3 text-huggn-textLight">
            <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person, as defined under applicable data protection laws.</li>
            <li><strong>"Sensitive Data"</strong> means personal data revealing health information, psychological wellbeing indicators, self-reported mental health concerns, and assessment results.</li>
            <li><strong>"Processing"</strong> means any operation performed on personal data, including collection, recording, storage, alteration, retrieval, use, disclosure, transfer, or deletion.</li>
            <li><strong>"Session"</strong> means a single voice-based interaction between you and the AI companion within the App.</li>
            <li><strong>"Session Summary"</strong> means the AI-generated text summary produced after each Session.</li>
            <li><strong>"Assessment"</strong> means a standardized clinical screening tool (such as PHQ-9 or GAD-7) available within the App.</li>
            <li><strong>"Device Local Storage"</strong> means data stored on your personal device using secure on-device storage mechanisms.</li>
          </ul>
        </section>

        {/* 4. What Information We Collect */}
        <section id="info-collect">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">4. WHAT INFORMATION WE COLLECT</h2>
          <p className="text-huggn-textLight mb-6">We collect the minimum data necessary to provide, maintain, and improve our Services.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">4.1 Account and Authentication Data</h3>
          <p className="mb-2">When you create an account using Apple Sign In or Google Sign In, we receive and process:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>Email address</li>
            <li>Full name (as provided by the identity provider)</li>
            <li>Profile photo URL (if available)</li>
            <li>Unique user identifier</li>
            <li>Authentication provider information</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">4.2 Profile Data</h3>
          <p className="mb-2">To provide and manage your account, we store the following in our cloud infrastructure:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>Display name and avatar</li>
            <li>Credit balance and transaction history</li>
            <li>Subscription status and plan type</li>
            <li>Language preference (English or Turkish)</li>
            <li>Onboarding completion status</li>
            <li>Records of assigned assessments and exercises</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">4.3 Onboarding Data</h3>
          <p className="mb-2">During the initial setup, we ask you to provide:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Preferred name</li>
            <li>Age range</li>
            <li>Primary concerns (selected from predefined options and/or free-text input)</li>
            <li>Therapy goals</li>
            <li>Previous therapy experience</li>
            <li>Current mood rating (scale of 1–10)</li>
          </ul>
          <p className="text-huggn-textLight italic mb-6">This data is stored on your device's local storage. Only the onboarding completion status (a simple flag, not the content of your responses) is transmitted to our cloud servers.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">4.4 Assessment Data</h3>
          <p className="text-huggn-textLight mb-2">The App offers clinically validated screening tools including PHQ-9 (depression screening) and GAD-7 (anxiety screening). When you complete an assessment, we process:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Individual question responses</li>
            <li>Total score and severity level</li>
            <li>AI-generated analysis summary</li>
          </ul>
          <p className="font-medium italic text-huggn-primary mb-6">Assessment data is stored exclusively on your device's local storage. Assessment responses are temporarily transmitted to our AI processing provider solely for the purpose of generating your analysis summary, after which they are not retained by our servers.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">4.5 Session Data</h3>
          <p className="mb-2">For each voice session, we process:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Session identifier</li>
            <li>Session duration</li>
            <li>Credits consumed</li>
            <li>Session status</li>
            <li>AI-generated session summary</li>
          </ul>
          <p className="text-huggn-textLight mb-6">Session metadata (identifier, duration, credits, status) is stored in our cloud infrastructure for billing and account management. Session summaries are generated on our servers, temporarily stored to facilitate delivery to your device, and then removed from our servers. <strong>The permanent copy of your session summary resides on your device's local storage.</strong></p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">4.6 Voice and Audio Data</h3>
          <p className="text-huggn-textLight mb-6">During sessions, your voice is streamed in real time to our voice AI provider to facilitate the conversation. Please see <strong>Section 7</strong> for detailed information about how voice data is handled.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">4.7 Exercise and Assignment Data</h3>
          <p className="text-huggn-textLight mb-6">The AI may assign CBT-based exercises and homework. Records of assigned exercises, completion status, and related data are stored on your device's local storage.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">4.8 Device and Technical Data</h3>
          <p className="mb-2">We may automatically collect limited technical information necessary for the operation and security of the App, including:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Device type and operating system version</li>
            <li>App version</li>
            <li>General error and crash logs (anonymized)</li>
            <li>Language and region settings</li>
            <li>IP address</li>
          </ul>
          <p className="font-medium italic text-huggn-primary">We do not use analytics tools such as Firebase, Google Analytics, or third-party tracking frameworks within the App. We do not analyze conversations for behavioral targeting.</p>
        </section>

        {/* 5. How We Collect Your Data */}
        <section id="how-collect">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">5. HOW WE COLLECT YOUR DATA</h2>
          <p className="mb-4">We collect data through the following methods:</p>
          <ul className="list-disc pl-5 space-y-3 text-huggn-textLight">
            <li><strong>Directly from you:</strong> When you create an account, complete the onboarding questionnaire, take assessments, participate in voice sessions, or communicate with us.</li>
            <li><strong>Automatically:</strong> When you use the App, we collect certain limited technical data about your device as described in Section 4.8.</li>
            <li><strong>From third-party identity providers:</strong> When you sign in with Apple or Google, we receive basic profile information from those providers.</li>
            <li><strong>From third-party payment processors:</strong> When you subscribe or make purchases, we receive transaction confirmation data from Apple, Google, and our subscription management provider.</li>
          </ul>
        </section>

        {/* 6. Purposes and Legal Bases for Processing */}
        <section id="purposes">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">6. PURPOSES AND LEGAL BASES FOR PROCESSING</h2>
          <p className="text-huggn-textLight mb-6">We process personal information only for the purposes described below. We do not use personal information for advertising, marketing profiling, or behavioral targeting.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-huggn-primary/10 rounded-xl">
              <thead>
                <tr className="bg-huggn-secondary/30">
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Purpose</th>
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Data Used</th>
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="text-huggn-textLight">
                <tr>
                  <td className="p-3 border border-huggn-primary/10">Providing the Services (sessions, assessments, exercises)</td>
                  <td className="p-3 border border-huggn-primary/10">Account, profile, session, voice, assessment, exercise data</td>
                  <td className="p-3 border border-huggn-primary/10">Performance of contract; Consent for sensitive data</td>
                </tr>
                <tr className="bg-huggn-secondary/10">
                  <td className="p-3 border border-huggn-primary/10">Account creation and authentication</td>
                  <td className="p-3 border border-huggn-primary/10">Account and authentication data</td>
                  <td className="p-3 border border-huggn-primary/10">Performance of contract</td>
                </tr>
                <tr>
                  <td className="p-3 border border-huggn-primary/10">Personalizing your experience (session continuity)</td>
                  <td className="p-3 border border-huggn-primary/10">Onboarding data, session summaries, assessment results</td>
                  <td className="p-3 border border-huggn-primary/10">Performance of contract; Legitimate interest</td>
                </tr>
                <tr className="bg-huggn-secondary/10">
                  <td className="p-3 border border-huggn-primary/10">Processing payments and managing subscriptions</td>
                  <td className="p-3 border border-huggn-primary/10">User ID, purchase information, credit balance</td>
                  <td className="p-3 border border-huggn-primary/10">Performance of contract; Legal obligation</td>
                </tr>
                <tr>
                  <td className="p-3 border border-huggn-primary/10">Crisis detection and safety</td>
                  <td className="p-3 border border-huggn-primary/10">Session content (real-time analysis only)</td>
                  <td className="p-3 border border-huggn-primary/10">Vital interests of the user; Legitimate interest</td>
                </tr>
                <tr className="bg-huggn-secondary/10">
                  <td className="p-3 border border-huggn-primary/10">Maintaining application security</td>
                  <td className="p-3 border border-huggn-primary/10">Technical data, IP address, usage logs</td>
                  <td className="p-3 border border-huggn-primary/10">Legitimate interest</td>
                </tr>
                <tr>
                  <td className="p-3 border border-huggn-primary/10">Improving and maintaining the Services</td>
                  <td className="p-3 border border-huggn-primary/10">Anonymized and aggregated usage data, crash reports</td>
                  <td className="p-3 border border-huggn-primary/10">Legitimate interest</td>
                </tr>
                <tr className="bg-huggn-secondary/10">
                  <td className="p-3 border border-huggn-primary/10">Communicating with you (support, updates)</td>
                  <td className="p-3 border border-huggn-primary/10">Email address, account data</td>
                  <td className="p-3 border border-huggn-primary/10">Legitimate interest; Performance of contract</td>
                </tr>
                <tr>
                  <td className="p-3 border border-huggn-primary/10">Complying with legal obligations</td>
                  <td className="p-3 border border-huggn-primary/10">Account data, transaction records</td>
                  <td className="p-3 border border-huggn-primary/10">Legal obligation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-huggn-textLight mt-4 italic">Where we rely on legitimate interest as a legal basis, we have assessed that our interests do not override your fundamental rights and freedoms.</p>
        </section>

        {/* 7. Voice and Audio Data */}
        <section id="voice-audio">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">7. VOICE AND AUDIO DATA</h2>
          <p className="text-huggn-textLight mb-6">Voice-based sessions are a core feature of Huggn. It is important that you understand how your voice data is handled:</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">7.1 Real-Time Streaming</h3>
          <p className="text-huggn-textLight mb-6">During a session, your voice is captured by your device's microphone and streamed in real time to our third-party voice AI provider to facilitate the conversation. The audio stream is processed as it is transmitted and is <strong>not recorded or stored on your device or on our servers</strong>.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">7.2 Conversation Transcripts</h3>
          <p className="text-huggn-textLight mb-6">Our voice AI provider may generate and retain conversation transcripts and associated metadata on their servers in accordance with their own data retention and privacy policies. <strong>We do not store full conversation transcripts on our servers or on your device.</strong> We are not responsible for the data retention or processing practices of our third-party providers. We encourage you to review their respective privacy policies.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">7.3 Session Summaries</h3>
          <p className="text-huggn-textLight mb-6">After a session, a brief AI-generated summary is created. This summary captures key themes and action items — <strong>not a verbatim transcript</strong>. The summary is delivered to your device and stored in your device's local storage. It is temporarily held on our servers for delivery purposes only and then removed.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">7.4 Context for Future Sessions</h3>
          <p className="text-huggn-textLight mb-6">To provide continuity across sessions, your past session summaries and assessment results may be shared with the AI at the start of a new session as contextual information. This allows the AI to reference previous conversations and tailor its approach. <strong>Only summaries — never full transcripts — are used for this purpose.</strong></p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">7.5 What We Share with Our Voice AI Provider</h3>
          <p className="mb-2">When initiating a session, we transmit the following information to our voice AI provider:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>Your real-time audio stream</li>
            <li>Session configuration parameters</li>
            <li>Your preferred name and language preference</li>
            <li>Previous test and session summaries (for conversational context)</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">7.6 No AI Model Training</h3>
          <p className="text-huggn-textLight">We do not train our own AI models using your conversations. We do not store transcripts for machine learning purposes. We do not fine-tune models using your session data. Your voice data and session content are used exclusively for the purpose of providing the real-time AI conversation service.</p>
        </section>

        {/* 8. AI Processing and Automated Decision-Making */}
        <section id="ai-processing">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">8. AI PROCESSING AND AUTOMATED DECISION-MAKING</h2>
          <p className="text-huggn-textLight mb-6">Huggn uses AI technologies provided by third parties to deliver its core services:</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.1 Session Conversations</h3>
          <p className="text-huggn-textLight mb-6">Real-time voice conversations are powered by third-party conversational AI. The AI applies CBT techniques during the conversation based on your input. The AI does not make clinical diagnoses or treatment decisions.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.2 Summary and Analysis Generation</h3>
          <p className="text-huggn-textLight mb-6">After sessions, conversation data is processed by third-party AI providers to generate brief session summaries. Assessment responses are also processed to generate analysis summaries. These providers process data transiently for the sole purpose of generating the requested output.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.3 Exercise Assignment</h3>
          <p className="text-huggn-textLight mb-6">Based on session content and assessment results, the AI may suggest or assign CBT-based exercises. These recommendations are generated algorithmically and do not constitute medical advice.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.4 Crisis Detection</h3>
          <p className="text-huggn-textLight mb-6">The AI includes built-in safety protocols to detect indicators of crisis, including references to self-harm or suicidal ideation. When such indicators are detected, the AI provides information about emergency services and crisis resources. This analysis occurs in real time during the session and does not involve storing additional data. See <strong>Section 19</strong> for more detail.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.5 No Profiling for Marketing</h3>
          <p className="text-huggn-textLight mb-6">We do not use any personal data collected through the App — including session content, assessments, or wellbeing information — for marketing, advertising, profiling, or any purpose unrelated to providing the Services.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">8.6 Third-Party AI Providers</h3>
          <p className="text-huggn-textLight mb-4">Huggn provides AI-generated responses using third-party providers, including <strong>OpenAI</strong> and <strong>ElevenLabs</strong> (including ElevenLabs Agents). You acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Your data may be transmitted to these providers in real time to generate AI responses.</li>
            <li>These providers may store and process your data according to their own respective privacy policies, security protocols, and data retention practices.</li>
            <li><strong>We are not responsible for the independent data practices, data retention, or data processing of these third-party providers.</strong></li>
            <li>Your use of the Services constitutes your acknowledgment and acceptance of data transmission to these providers.</li>
          </ul>
          <p className="text-sm text-huggn-textLight">We encourage you to review their respective privacy policies:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-huggn-textLight mt-2">
            <li>ElevenLabs: <a href="https://elevenlabs.io/privacy-policy" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">https://elevenlabs.io/privacy-policy</a></li>
            <li>OpenAI: <a href="https://openai.com/privacy" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">https://openai.com/privacy</a></li>
          </ul>
        </section>

        {/* 9. Data Storage Locations */}
        <section id="data-storage">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">9. DATA STORAGE LOCATIONS</h2>
          <p className="text-huggn-textLight mb-6">Your data is stored across the following locations, each serving a specific purpose:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-huggn-primary/10">
              <thead>
                <tr className="bg-huggn-secondary/30">
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Location</th>
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Data Stored</th>
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-huggn-textLight">
                <tr>
                  <td className="p-3 border border-huggn-primary/10 font-medium">Your Device (Local Storage)</td>
                  <td className="p-3 border border-huggn-primary/10">Session summaries, assessment responses and results, onboarding data, exercise records, active session state</td>
                  <td className="p-3 border border-huggn-primary/10">Keeping your most sensitive data under your direct control</td>
                </tr>
                <tr className="bg-huggn-secondary/10">
                  <td className="p-3 border border-huggn-primary/10 font-medium">Your Device (Secure Storage — Keychain / Keystore)</td>
                  <td className="p-3 border border-huggn-primary/10">Authentication tokens</td>
                  <td className="p-3 border border-huggn-primary/10">Secure session management</td>
                </tr>
                <tr>
                  <td className="p-3 border border-huggn-primary/10 font-medium">Our Cloud Infrastructure</td>
                  <td className="p-3 border border-huggn-primary/10">User profiles, session metadata (ID, duration, credits, status), credit transactions, subscription records</td>
                  <td className="p-3 border border-huggn-primary/10">Account management and service delivery</td>
                </tr>
                <tr className="bg-huggn-secondary/10">
                  <td className="p-3 border border-huggn-primary/10 font-medium">Third-Party AI Provider Servers</td>
                  <td className="p-3 border border-huggn-primary/10">Subject to their own retention policies</td>
                  <td className="p-3 border border-huggn-primary/10">AI service delivery</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-huggn-secondary/30 p-6 rounded-xl mt-4 border border-huggn-primary/10">
            <p className="font-bold text-huggn-primary mb-2">Design Principle:</p>
            <p className="text-huggn-textLight">We have deliberately designed Huggn so that your most sensitive information — session summaries, assessment results, onboarding responses, and exercise data — is stored primarily on your personal device. This gives you direct control over your most sensitive data.</p>
          </div>
        </section>

        {/* 10. Third-Party Service Providers */}
        <section id="third-party">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">10. THIRD-PARTY SERVICE PROVIDERS</h2>
          <p className="text-huggn-textLight mb-6">We engage the following third-party service providers to deliver our Services:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-huggn-primary/10">
              <thead>
                <tr className="bg-huggn-secondary/30">
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Provider</th>
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Purpose</th>
                  <th className="text-left p-3 border border-huggn-primary/10 font-bold text-huggn-primary">Data Shared</th>
                </tr>
              </thead>
              <tbody className="text-huggn-textLight">
                <tr>
                  <td className="p-3 border border-huggn-primary/10 font-medium">ElevenLabs</td>
                  <td className="p-3 border border-huggn-primary/10">Real-time voice AI conversations</td>
                  <td className="p-3 border border-huggn-primary/10">Audio stream, session configuration, preferred name, language, past session summaries</td>
                </tr>
                <tr className="bg-huggn-secondary/10">
                  <td className="p-3 border border-huggn-primary/10 font-medium">OpenAI</td>
                  <td className="p-3 border border-huggn-primary/10">Text analysis, summary generation, exercise assignment</td>
                  <td className="p-3 border border-huggn-primary/10">Conversation transcripts (for summarization), assessment responses (for analysis)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-huggn-primary/10 font-medium">Apple</td>
                  <td className="p-3 border border-huggn-primary/10">Authentication, in-app purchases</td>
                  <td className="p-3 border border-huggn-primary/10">Identity token, purchase receipts</td>
                </tr>
                <tr className="bg-huggn-secondary/10">
                  <td className="p-3 border border-huggn-primary/10 font-medium">Google</td>
                  <td className="p-3 border border-huggn-primary/10">Authentication</td>
                  <td className="p-3 border border-huggn-primary/10">OAuth tokens</td>
                </tr>
                <tr>
                  <td className="p-3 border border-huggn-primary/10 font-medium">RevenueCat</td>
                  <td className="p-3 border border-huggn-primary/10">Subscription management and validation</td>
                  <td className="p-3 border border-huggn-primary/10">User identifier, purchase and subscription information</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-huggn-textLight mt-4 font-medium">Each third-party provider operates under its own privacy policy and terms of service. We do not control and are not responsible for the data practices of these providers.</p>
          <p className="text-sm text-huggn-textLight mt-2">We encourage you to review their privacy policies:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-huggn-textLight mt-2">
            <li>ElevenLabs: <a href="https://elevenlabs.io/privacy-policy" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">https://elevenlabs.io/privacy-policy</a></li>
            <li>OpenAI: <a href="https://openai.com/privacy" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">https://openai.com/privacy</a></li>
            <li>Apple: <a href="https://www.apple.com/legal/privacy/" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a></li>
            <li>Google: <a href="https://policies.google.com/privacy" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            <li>RevenueCat: <a href="https://www.revenuecat.com/privacy" className="text-huggn-primary underline" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a></li>
          </ul>
        </section>

        {/* 11. Data Sharing and Disclosure */}
        <section id="data-sharing">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">11. DATA SHARING AND DISCLOSURE</h2>
          <p className="text-huggn-textLight mb-2 font-bold">We do not sell, rent, or trade your personal data to any third party.</p>
          <p className="text-huggn-textLight mb-2 font-bold">We do not share your personal data for advertising or marketing purposes.</p>
          <p className="text-huggn-textLight mb-4 font-bold">Your wellbeing and session data is never used for targeted advertising, cross-context behavioral advertising, or profiling.</p>
          <p className="mb-2">We may disclose your personal data only in the following limited circumstances:</p>
          <ul className="list-disc pl-5 space-y-3 text-huggn-textLight">
            <li><strong>Service Providers:</strong> As described in Section 10, we share data with third-party providers who assist us in delivering the Services.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, or sale of assets, your personal data may be transferred as part of the transaction. We will notify you of any such change and any choices you may have regarding your data.</li>
            <li><strong>With Your Consent:</strong> We may share data with other parties when you have given us explicit consent to do so.</li>
          </ul>
        </section>

        {/* 12. International Data Transfers */}
        <section id="international">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">12. INTERNATIONAL DATA TRANSFERS</h2>
          <p className="text-huggn-textLight mb-4">
            Your data may be processed in the United States or other countries where our service providers operate. These countries may have different data protection laws than your jurisdiction.
          </p>
          <p className="text-huggn-textLight mb-4">
            Where required by applicable law, we rely on appropriate safeguards for international data transfers, which may include Standard Contractual Clauses, adequacy decisions by relevant authorities, or your consent.
          </p>
          <p className="text-huggn-textLight">
            By using Huggn, you acknowledge and consent to such transfers to the extent permitted by applicable law.
          </p>
        </section>

        {/* 13. Data Retention */}
        <section id="data-retention">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">13. DATA RETENTION</h2>
          <p className="text-huggn-textLight mb-6">We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">What We Do NOT Retain on Our Servers</h3>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li>Session transcripts</li>
            <li>Full session content or conversation logs</li>
            <li>Assessment test scores or individual responses</li>
            <li>Onboarding questionnaire responses</li>
            <li>Exercise completion data</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">Retention by Data Category</h3>
          <ul className="list-disc pl-5 space-y-3 text-huggn-textLight mb-6">
            <li><strong>Device-Stored Data</strong> (session summaries, assessments, onboarding data, exercises): Retained on your device until you delete it within the App or uninstall the App.</li>
            <li><strong>Account and Profile Data:</strong> Retained for the duration of your account and for a reasonable period thereafter to comply with legal obligations, resolve disputes, and enforce agreements.</li>
            <li><strong>Transaction and Credit Records:</strong> Retained as required by applicable tax, accounting, and financial regulations.</li>
            <li><strong>Session Metadata</strong> (identifier, duration, credits, status): Retained for the duration of your account for service delivery and billing accuracy.</li>
            <li><strong>Session Summaries (server-side):</strong> Temporarily stored only for the purpose of delivery to your device and then removed from our servers.</li>
            <li><strong>Voice Data:</strong> Not stored by Huggn. Any data retained by our third-party AI providers is subject to their own privacy policies and retention practices, over which we have no control.</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">Account Deletion</h3>
          <p className="text-huggn-textLight mb-4">You may request deletion of your account at any time through the App settings or by contacting us at <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>. Upon account deletion:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Personal identifiers associated with your profile (such as display name and avatar) are removed from our servers.</li>
            <li>All device-stored data (assessments, session summaries, exercises) is cleared from your device.</li>
            <li>Certain non-identifying records (such as credit transaction history) may be retained as required by applicable financial and tax regulations.</li>
          </ul>
          <p className="text-huggn-textLight mb-4">If you delete your account, we will delete associated personal data unless required to retain it by law.</p>
          <p className="text-huggn-textLight italic text-sm">For data held by our third-party providers, we recommend that you review and exercise your rights directly with those providers under their respective privacy policies.</p>
        </section>

        {/* 14. Data Security */}
        <section id="data-security">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">14. DATA SECURITY</h2>
          <p className="text-huggn-textLight mb-4">We implement reasonable technical and organizational safeguards to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Encryption of data in transit using TLS/SSL protocols</li>
            <li>Secure storage of authentication credentials using platform-native secure storage (iOS Keychain / Android Keystore)</li>
            <li>Server-side access controls and authentication for all API endpoints</li>
            <li>Row-level security policies on our database infrastructure</li>
            <li>Regular security reviews and updates</li>
            <li>Minimization of data stored on servers — sensitive data is kept on-device wherever possible</li>
          </ul>
          <p className="text-huggn-textLight">While we strive to protect your personal data, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security, but we are committed to maintaining commercially reasonable safeguards and to promptly addressing any security incidents. Use of the Services is at your own risk.</p>
        </section>

        {/* 15. Your Privacy Rights */}
        <section id="privacy-rights">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">15. YOUR PRIVACY RIGHTS</h2>
          <p className="mb-4">Depending on your location and applicable law, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-5 space-y-3 text-huggn-textLight">
            <li><strong>Right of Access:</strong> You may request confirmation of whether we process your personal data and request a copy of that data.</li>
            <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete personal data.</li>
            <li><strong>Right to Erasure:</strong> You may request deletion of your personal data, subject to our legal obligations to retain certain records.</li>
            <li><strong>Right to Restrict Processing:</strong> You may request that we limit the processing of your personal data in certain circumstances.</li>
            <li><strong>Right to Data Portability:</strong> Where technically feasible, you may request a copy of your personal data in a structured, commonly used, machine-readable format.</li>
            <li><strong>Right to Object:</strong> You may object to the processing of your personal data based on legitimate interests.</li>
            <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw that consent at any time by discontinuing use of the Services and contacting us. Withdrawal does not affect the lawfulness of processing carried out prior to withdrawal.</li>
          </ul>
          <p className="mt-4 text-huggn-textLight">
            To exercise any of these rights, please contact us at <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>. We will respond to your request within the timeframe required by applicable law (typically 30 days).
          </p>
        </section>

        {/* 16. Additional Rights for U.S. State Residents */}
        <section id="us-rights">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">16. ADDITIONAL RIGHTS FOR U.S. STATE RESIDENTS (INCLUDING CALIFORNIA)</h2>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">California Residents (CCPA/CPRA)</h3>
          <p className="text-huggn-textLight mb-4">If you are a California resident, you have additional rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (collectively, "CCPA"):</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li><strong>Right to Know:</strong> You may request information about the categories and specific pieces of personal information we have collected about you, the sources of collection, the business purposes, and the categories of third parties with whom we share it.</li>
            <li><strong>Right to Delete:</strong> You may request that we delete your personal information, subject to certain exceptions.</li>
            <li><strong>Right to Correct:</strong> You may request that we correct inaccurate personal information.</li>
            <li><strong>Right to Opt-Out of Sale or Sharing:</strong> We do not sell your personal information. We do not share your personal information for cross-context behavioral advertising.</li>
            <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> You may request that we limit our use of your sensitive personal information to what is necessary to provide the Services.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
          </ul>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">Other U.S. State Residents</h3>
          <p className="text-huggn-textLight mb-6">Residents of other U.S. states with applicable privacy laws (including Colorado, Connecticut, Texas, Virginia, Oregon, Montana, Utah, and others) may have similar rights, including the rights to access, correct, delete, and opt out of certain processing of personal data.</p>

          <h3 className="text-xl font-semibold text-huggn-primary mb-2">Applicable to All U.S. Residents</h3>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>We do not sell or share personal data for cross-context behavioral advertising.</li>
            <li>We do not engage in profiling that produces legal or similarly significant effects.</li>
          </ul>
          <p className="text-huggn-textLight">To exercise your rights, contact us at <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>. We will verify your identity before processing your request and respond in accordance with applicable law.</p>
        </section>

        {/* 17. Additional Rights for EEA/UK Residents (GDPR) */}
        <section id="gdpr-rights">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">17. ADDITIONAL RIGHTS FOR EEA/UK RESIDENTS (GDPR)</h2>
          <p className="text-huggn-textLight mb-4">If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process personal data under the following legal bases:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-6">
            <li><strong>Performance of a contract</strong> — to provide the Services</li>
            <li><strong>Consent</strong> — where required, particularly for sensitive (health-related) data</li>
            <li><strong>Legitimate interests</strong> — application security, functionality, and service improvement</li>
            <li><strong>Legal compliance</strong> — where required by applicable law</li>
          </ul>
          <p className="text-huggn-textLight mb-4">In addition to the rights listed in Section 15, you also have:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>The right to lodge a complaint with your local data protection supervisory authority if you believe your rights have been violated.</li>
            <li>Where we transfer your data outside the EEA/UK, we rely on appropriate safeguards as described in Section 12.</li>
          </ul>
          <p className="text-huggn-textLight">You may withdraw consent at any time by discontinuing use of the Services and contacting us at <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>.</p>
        </section>

        {/* 18. Children's Privacy */}
        <section id="children">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">18. CHILDREN'S PRIVACY</h2>
          <p className="text-huggn-textLight mb-4">Huggn is intended for use only by individuals aged <strong>18 years or older</strong>. We do not knowingly collect, store, or process personal data from anyone under the age of 18.</p>
          <p className="text-huggn-textLight mb-4">By using the App, you confirm that you are at least 18 years of age. If we become aware that we have inadvertently collected personal data from a person under 18, we will take immediate steps to delete that data from our systems and request its removal from our third-party providers.</p>
          <p className="text-huggn-textLight">If you are a parent or guardian and believe that your child under 18 has provided us with personal data, please contact us immediately at <a href="mailto:info@ryonlabs.com" className="text-huggn-primary font-medium underline">info@ryonlabs.com</a>.</p>
        </section>

        {/* 19. Crisis Detection and Safety Protocol */}
        <section id="crisis">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">19. CRISIS DETECTION AND SAFETY PROTOCOL</h2>
          <p className="text-huggn-textLight mb-4">The App includes built-in safety mechanisms designed to detect indicators of crisis, including but not limited to expressions of self-harm or suicidal ideation.</p>
          <p className="mb-4">When such indicators are detected during a session, the AI is designed to:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight mb-4">
            <li>Acknowledge the user's distress with empathy</li>
            <li>Provide information about local emergency services and crisis hotlines</li>
            <li>Encourage the user to seek immediate professional help</li>
          </ul>
          <p className="text-huggn-textLight font-bold mb-4">Huggn is not intended to serve as a substitute for emergency services, professional crisis intervention, or any form of medical or psychological treatment. The AI is not intended to contact emergency services on your behalf, make diagnoses, or render definitive clinical judgments. Huggn makes no guarantees regarding the accuracy, reliability, or completeness of any crisis detection functionality.</p>
          <p className="text-huggn-textLight italic">If you or someone you know is in immediate danger, please contact your local emergency services directly.</p>
        </section>

        {/* 20. Medical Disclaimer */}
        <section id="medical-disclaimer">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">20. MEDICAL DISCLAIMER</h2>
          <div className="bg-huggn-secondary/20 p-8 rounded-2xl border border-huggn-primary/10">
            <p className="font-bold text-huggn-primary mb-4">Huggn is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or medical condition.</p>
            <p className="text-huggn-textLight mb-4">The App provides AI-powered wellbeing support based on CBT principles. It is not intended to replace professional medical or psychological care. The AI does not identify itself as a licensed therapist, physician, or any other healthcare professional. No information provided within the App should be considered medical advice.</p>
            <p className="text-huggn-textLight mb-4">The Company makes no representations or warranties regarding the accuracy, completeness, or suitability of any information provided through the App. You acknowledge that any reliance on such information is at your sole risk.</p>
            <p className="text-huggn-textLight mb-4">If you are experiencing a medical or psychological emergency, please contact your local emergency services immediately.</p>
            <p className="text-huggn-textLight font-medium">Always consult a qualified healthcare professional before making any decisions related to your mental or physical health.</p>
          </div>
        </section>

        {/* 21. Subscriptions and Payments */}
        <section id="subscriptions">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">21. SUBSCRIPTIONS AND PAYMENTS</h2>
          <p className="text-huggn-textLight mb-4">Huggn offers subscription plans that provide credits for voice sessions:</p>
          <ul className="list-disc pl-5 space-y-2 text-huggn-textLight">
            <li>Sessions consume credits based on actual usage.</li>
            <li>Subscription plans offer an estimated amount of session time. For example, the monthly plan offers approximately 200 minutes, though actual availability may vary based on individual session characteristics.</li>
            <li>Credits are deducted server-side based on actual usage data from our voice AI provider.</li>
            <li>Payments are processed through Apple In-App Purchases (iOS) and Google Play Billing (Android).</li>
            <li><strong>Huggn does not directly collect, process, or store your payment card information.</strong> All payment processing is handled by Apple, Google, and our subscription management provider.</li>
            <li>Subscription management, cancellation, and refund requests are handled through the respective app store (Apple App Store or Google Play Store) in accordance with their policies.</li>
          </ul>
        </section>

        {/* 22. Cookies and Tracking Technologies */}
        <section id="cookies">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">22. COOKIES AND TRACKING TECHNOLOGIES</h2>
          <p className="text-huggn-textLight mb-4">The Huggn mobile application <strong>does not use cookies or third-party tracking technologies</strong>. We do not use analytics tools such as Firebase, Google Analytics, or similar tracking frameworks within the App.</p>
          <p className="text-huggn-textLight mb-4">Our website (<a href="https://huggn.app" className="text-huggn-primary underline">huggn.app</a>) may use essential cookies strictly necessary for website functionality. We do not use tracking cookies, advertising cookies, or third-party analytics cookies that track you across websites.</p>
          <p className="text-huggn-textLight">We do not engage in cross-app tracking or share data with advertising networks.</p>
        </section>

        {/* 23. Do-Not-Track Signals */}
        <section id="dnt">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">23. DO-NOT-TRACK SIGNALS</h2>
          <p className="text-huggn-textLight">We do not currently respond to Do-Not-Track (DNT) browser signals, as there is no industry-standard technology for recognizing or honoring DNT signals. Notwithstanding this, we do not track users across third-party websites or services.</p>
        </section>

        {/* 24. Third-Party Links */}
        <section id="third-party-links">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">24. THIRD-PARTY LINKS</h2>
          <p className="text-huggn-textLight">The App or our website may contain links to third-party websites or services (such as crisis hotlines, mental health resources, or app store pages). We are not responsible for the privacy practices, content, or security of those third-party services. We encourage you to review their privacy policies before providing any personal data.</p>
        </section>

        {/* 25. Changes to This Policy */}
        <section id="changes">
          <h2 className="text-2xl font-bold text-huggn-primary mb-4">25. CHANGES TO THIS POLICY</h2>
          <p className="text-huggn-textLight mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. The updated version will include a revised "Last Updated" date at the top of this Policy.</p>
          <p className="text-huggn-textLight">We encourage you to review this Privacy Policy periodically. Continued use of the Services after any changes constitutes your acceptance of the updated Policy.</p>
        </section>

        {/* 26. Contact Us */}
        <section id="contact" className="border-t border-huggn-primary/10 pt-8 mt-12">
          <h2 className="text-xl font-bold text-huggn-primary mb-4 uppercase">26. Contact Us</h2>
          <p className="text-huggn-textLight mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <address className="not-italic text-huggn-textLight space-y-1">
            <p className="font-bold text-huggn-primary">Ryon Labs LLC</p>
            <p>Huggn Application</p>
            <p>Email: <a href="mailto:info@ryonlabs.com" className="text-huggn-primary underline">info@ryonlabs.com</a></p>
            <p>Website: <a href="https://huggn.app" className="text-huggn-primary underline">https://huggn.app</a></p>
          </address>
          <p className="text-huggn-textLight mt-4">We will acknowledge receipt and respond within the timeframes required by applicable law.</p>
          <p className="text-huggn-textLight mt-2 italic text-sm">If you are not satisfied with our response, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.</p>
        </section>

        <div className="text-center text-sm text-huggn-textLight pt-8 border-t border-huggn-primary/10">
          <p>&copy; 2026 Ryon Labs LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};