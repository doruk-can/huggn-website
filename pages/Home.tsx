import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto w-full text-center">
        <div className="mb-8 flex justify-center">
            {/* Logo Presentation */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl mb-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img 
                    src="./logo-square.png" 
                    alt="Huggn" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-huggn-primary mb-6 tracking-tight">
          Your AI Therapy Companion <br/> Here When You Need to Talk
        </h1>
        <p className="text-lg md:text-xl text-huggn-textLight max-w-2xl mx-auto mb-10 leading-relaxed">
          A safe, private space to talk through what's on your mind — anytime, anywhere. Huggn combines the warmth of real conversation with clinically-proven CBT techniques, powered by AI trained on hundreds of therapeutic resources. Every response is generated in real time, using the latest AI technology to give you meaningful, personalized support.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="transform hover:scale-105 transition-transform duration-200 pointer-events-none opacity-80">
              <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 w-48 h-14 border border-white/10 shadow-lg">
                <img src="./apple-icon.png" alt="Apple" className="w-8 h-8 object-contain" />
                <div className="text-left">
                  <div className="text-[10px] leading-none">Download on the</div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </div>
            </a>

            <a href="#" className="transform hover:scale-105 transition-transform duration-200 pointer-events-none opacity-80">
               <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 w-48 h-14 border border-white/10 shadow-lg">
                <img src="./google-icon.png" alt="Google Play" className="w-7 h-7 object-contain" />
                <div className="text-left">
                  <div className="text-[10px] leading-none">GET IT ON</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </div>
            </a>
          </div>
          <p className="text-sm text-huggn-textLight/60 font-medium italic">
            Coming soon on iOS and Android.!
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-huggn-bg p-8 rounded-2xl border border-huggn-primary/5">
              <div className="w-12 h-12 bg-huggn-secondary rounded-full flex items-center justify-center mb-6 text-huggn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-huggn-primary mb-3">Voice-First Therapy</h3>
              <p className="text-huggn-textLight">
                Talk naturally, just like with a real therapist. Huggn listens, reflects, and responds with warmth and empathy — in real time, through voice.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-huggn-bg p-8 rounded-2xl border border-huggn-primary/5">
               <div className="w-12 h-12 bg-huggn-secondary rounded-full flex items-center justify-center mb-6 text-huggn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-huggn-primary mb-3">Private & Secure</h3>
              <p className="text-huggn-textLight">
                Your conversations stay on your device — only voice data is sent to our AI provider to generate real-time responses. No personal identity information is shared, and we don't store your conversations in our database.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-huggn-bg p-8 rounded-2xl border border-huggn-primary/5">
               <div className="w-12 h-12 bg-huggn-secondary rounded-full flex items-center justify-center mb-6 text-huggn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 00 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 00 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 00 2.456-2.454L18 2.25l.259 1.035a3.375 3.375 0 00 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.456 2.454zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 00 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 00 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-huggn-primary mb-3">Personalized Mental Health Tools</h3>
              <p className="text-huggn-textLight">
                Huggn offers personalized exercises and thoughtfully selected self-assessments to help you explore your emotions, patterns, and progress — all in your own time, at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};