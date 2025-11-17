import Header from "./components/Header";
import Footer from "./components/Footer";
import { BsStars } from "react-icons/bs";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className=" ">
          <div className="px-[5%] py-20 text-center">


            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-purple-600/30 mb-8">
              <span className="text-white text-sm">Welcome to Fibber App</span>
              <BsStars className="text-white" />

            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-white mb-6">
              AI-Powered Speech Analysis<br />for Lie Detection
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-10">
              Record any conversation and get instant AI analysis, emotion, and authenticity,
              deeper insights behind every word with our AI Speech Analysis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <button className="relative border border-white inline-flex items-center gap-3 rounded-full font-medium text-white">
                <span className="relative z-10 flex items-center gap-3 rounded-full bg-gradient-to-bl hover:bg-gradient-to-tr from-[#00B8FF] to-[#C702EF] px-8 py-3 shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all duration-500">
                  <span className="text-base font-semibold">Get started</span>
                  <BsStars />
                </span>
              </button>

              <button className="relative border border-white inline-flex items-center gap-3 rounded-full font-medium text-white overflow-hidden">
                {/* Gradient Border Layer */}
                <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-white/30 to-transparent"></span>

                {/* Inner Transparent Area */}
                <span className="relative z-10 flex items-center gap-3 rounded-full bg-transparent px-10 py-3 transition-all duration-500 hover:bg-white/10">
                  <span className="text-base font-semibold">Learn more</span>
                </span>
              </button>

            </div>

            {/* Social Proof */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12">
              <div className="text-left">
              <div className="text-5xl font-bold text-white mb-2">40,000+</div>
              <div className="text-gray-300">People discovering deeper truths with AI.</div>
            </div>
            <div className="flex-1 overflow-hidden border-l-2 border-white">
              <Marquee gradient={false} speed={50} className="py-2">
                <div className="text-gray-400 font-semibold text-xl mx-8">afterpay</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">airbnb</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">Airtable</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">Airwallex</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">afterpay</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">airbnb</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">Airtable</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">Airwallex</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">afterpay</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">airbnb</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">Airtable</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">Airwallex</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">afterpay</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">airbnb</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">Airtable</div>
                <div className="text-gray-400 font-semibold text-xl mx-8">Airwallex</div>
              </Marquee>
            </div>
            </div>
          </div>
        </section>


        {/* AI-Precision Section */}
        <section className="px-[5%] py-40 bg-white text-black relative">
          {/* Bottom Gradient Background */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#081351]/30 via-[#081351]/10 t/20-transparent pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#061353] leading-extended">
                Designed to <br/> Decode Speech <br/> With
                <span className="bg-gradient-to-r from-[#3555FF] to-[#C702EF] bg-clip-text text-transparent">
               {" "}   AI-Precision
                </span>
              </h2>
            </div>
            <div className="flex items-start pl-20">
              <p className="text-[#061353] text-lg">
                Fibber transforms ordinary conversations into powerful insights using advanced
                AI speech analysis. Detect tone, emotion, and authenticity in every voice
                helping you uncover what words alone can&apos;t reveal.
              </p>
            </div>
          </div>

          {/* Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-40 relative z-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">

              <h3 className="text-2xl font-semibold text-[#061353] mb-3">Record & Analyze Speech</h3>
              <p className="text-gray-600">
                Easily record or upload any conversation and let Fibber&apos;s AI analyze tone,
                stress, and emotion in real time.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">

              <h3 className="text-2xl font-semibold text-[#061353] mb-3">Detect Voice Stress</h3>
              <p className="text-gray-600">
                Our AI identifies subtle vocal patterns and emotional cues to highlight
                possible stress or hesitation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">

              <h3 className="text-2xl font-semibold text-[#061353] mb-3">Generate Authenticity Insights</h3>
              <p className="text-gray-600">
                Receive a detailed report summarizing emotional stability, tone variation,
                and authenticity indicators in speech.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Fibber Unique Section */}
        <section className="px-[5%] lg:px-[5%] py-20 bg-[#061353]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                What Makes Fibber Unique?
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-gray-300 text-lg">
                Fibber turns everyday conversations into measurable insights with AI-powered
                speech and emotion analysis.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1 — spans 6 columns */}
            <div className="md:col-span-6 relative overflow-hidden bg-white backdrop-blur-xl border border-white/10 rounded-3xl pl-10 text-black">
              {/* Background Gradient Glow */}
              <div className="absolute bottom-0 left-0 pointer-events-none overflow-visible">
                <svg
                  width="700"
                  height="500"
                  viewBox="0 0 700 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="gradient_blur_bottom_left" cx="30%" cy="70%" r="60%">

                      <stop offset="40%" stopColor="#3555FF" stopOpacity="0.4" />

                      <stop offset="100%" stopColor="#C702EF" stopOpacity="0" />
                    </radialGradient>
                    <filter id="blur_filter_bottom" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
                    </filter>
                  </defs>
                  <circle
                    cx="140"
                    cy="350"
                    r="300"
                    fill="url(#gradient_blur_bottom_left)"
                    filter="url(#blur_filter_bottom)"
                  />
                </svg>
              </div>

              {/* Content Grid */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-0">
                {/* Left side — Text */}
                <div className="flex flex-col w-full h-full justify-between items-start text-left py-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#061353]">
                    40,000+ Conversations Analyzed
                  </h3>
                  <p className="text-[#5A5A5A] leading-relaxed text-[16px]">
                    Easily record or upload any conversation and let Fibber&apos;s AI analyze tone,
                    stress, and emotion in real time.
                  </p>
                </div>

                {/* Right side — Image */}
                <div className="relative flex justify-center md:justify-end">
                  <img
                    src="/assests/phone.svg"
                    alt="Featured analysis preview"
                    className="w-72 md:w-80 object-contain translate-y-2"
                  />
                </div>
              </div>
            </div>


            {/* Card 2 — spans 3 columns */}
            <div className="md:col-span-3 bg-[linear-gradient(50deg,#C702EF_0%,#3555FF_50%,#00B8FF_100%)] backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center flex-col w-full h-full">
                <h3 className="text-4xl font-semibold text-white mb-3">98% Emotion Detection Accuracy</h3>
                <p className="text-white text-xl">
                  Powered by cutting-edge AI trained on diverse voice patterns for reliable
                  tone and stress recognition.
                </p>
              </div>
            </div>


            <div className="md:col-span-3 bg-[linear-gradient(50deg,#C702EF_0%,#3555FF_50%,#00B8FF_100%)] backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center flex-col w-full h-full">
                <h3 className="text-4xl font-semibold text-white mb-3">Instant AI Reports in Seconds</h3>
                <div>
                  <p className="text-white text-xl mb-4">
                    Get quick summaries of tone, emotion, and authenticity after each recording.
                  </p>
                  <span className="inline-block text-white text-xs leading-tight">
                    <strong className="font-semibold block">Disclaimer:&nbsp;</strong>
                    Results are for personal insight and communication analysis only, not for
                    legal or professional lie detection.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

