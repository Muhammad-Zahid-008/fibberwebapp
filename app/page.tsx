"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BsStars } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";


export default function Home() {

  const pathname = usePathname();
  const router = useRouter();



  useEffect(() => {
    // Handle hash scroll on page load
    const hashValue = window.location.hash?.replace("#", "");
    if (!hashValue) return;

    setTimeout(() => {
      const targetSection = document.getElementById(hashValue);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }, []);


  const handleDownload = (e: any) => {
    e.preventDefault();

    if (pathname === "/") {
      // If we're on the home page, scroll to pricing section
      const pricingSection = document.getElementById("download");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If we're on another page, navigate to home with hash
      // The useEffect in the home page will handle the scroll
      router.push("/#download");
    }
  };

  const marqueeLogos = Array.from({ length: 14 }, (_, idx) => ({
    src: `/assests/${idx + 1}.png`,
    alt: `Partner logo ${idx + 1}`,
  }));

  return (
    <div className="min-h-screen">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section id="home" className=" ">
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
              <button
                onClick={handleDownload}
                className="relative border border-white inline-flex items-center gap-3 rounded-full font-medium text-white cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-3 rounded-full bg-gradient-to-bl hover:bg-gradient-to-tr from-[#00B8FF] to-[#C702EF] px-8 py-3 shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all duration-500">
                  <span className="text-base font-semibold">Download Now</span>
                  <BsStars />
                </span>
              </button>

              {/* <button className="relative border border-white inline-flex items-center gap-3 rounded-full font-medium text-white overflow-hidden">
            
                <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-white/30 to-transparent"></span>

              
                <span className="relative z-10 flex items-center gap-3 rounded-full bg-transparent px-10 py-3 transition-all duration-500 hover:bg-white/10">
                  <span className="text-base font-semibold">Learn more</span>
                </span>
              </button> */}

            </div>

            {/* Social Proof */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 md:pt-12">
              <div className="text-center md:text-left w-full md:w-auto">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">40,000+</div>
                <div className="text-gray-300 text-sm md:text-base">People discovering deeper truths with AI.</div>
              </div>
              <div className="w-full md:flex-1 overflow-hidden md:border-l-2 md:border-white md:pl-8">
                <Marquee gradient={false} speed={50} className="py-2">
                  {marqueeLogos.map((logo) => (
                    <div key={logo.src} className="mx-4 md:mx-8">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={40}
                        className="h-8 w-auto object-contain opacity-80"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </section>


        {/* AI-Precision Section */}
        <section id="how-it-works" className="px-[5%] py-20 lg:py-40 bg-white text-black relative">
          {/* Bottom Gradient Background */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#081351]/30 via-[#081351]/10 t/20-transparent pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#061353] leading-extended">
                Designed to <br /> Decode Speech <br /> With
                <span className="bg-gradient-to-r from-[#3555FF] to-[#C702EF] bg-clip-text text-transparent">
                  {" "}   AI-Precision
                </span>
              </h2>
            </div>
            <div className="flex items-start lg:pl-20">
              <p className="text-[#061353] text-lg">
                Fibber transforms ordinary conversations into powerful insights using advanced
                AI speech analysis. Detect tone, emotion, and authenticity in every voice
                helping you uncover what words alone can&apos;t reveal.
              </p>
            </div>
          </div>

          {/* Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-40 relative z-10">
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
        <section id="features" className="px-[5%] lg:px-[5%] py-20 bg-[#061353]">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1 — spans 6 columns */}
            <div className="lg:col-span-6 relative overflow-hidden bg-white backdrop-blur-xl border border-white/10 rounded-3xl pl-10 text-black">
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
                  <Image
                    src="/assests/phone.svg"
                    alt="Fibber mobile app preview"
                    width={320}
                    height={640}
                    className="w-72 md:w-80 object-contain translate-y-2"
                    priority
                  />
                </div>
              </div>
            </div>


            {/* Card 2 — spans 3 columns */}
            <div className="lg:col-span-3 bg-[linear-gradient(50deg,#C702EF_0%,#3555FF_50%,#00B8FF_100%)] backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center flex-col w-full h-full">
                <h3 className="text-4xl font-semibold text-white mb-3">98% Emotion Detection Accuracy</h3>
                <p className="text-white text-xl">
                  Powered by cutting-edge AI trained on diverse voice patterns for reliable
                  tone and stress recognition.
                </p>
              </div>
            </div>


            <div className="lg:col-span-3 bg-[linear-gradient(50deg,#C702EF_0%,#3555FF_50%,#00B8FF_100%)] backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between">
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

        {/* Pricing Section */}
        <section id="pricing" className="px-[5%] py-20 bg-white text-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#061353] leading-extended">
                Your Fibber <br />
                <span className="bg-gradient-to-r from-[#3555FF] to-[#C702EF] bg-clip-text text-transparent">
                  {" "}   Membership
                </span>
              </h2>
            </div>
            <div>
            </div>
            <div className="flex items-start lg:pl-20">
              <p className="text-[#061353] text-lg">
                Unlock the full power of Truth Scores, Cognitive Load Mapping, and Voice Stress Analysis – Choose the precise level of deception detection tailored to your requirements.
              </p>
            </div>
          </div>

          {/* Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-40 relative z-10">
            <div
              className="
    group 
    p-6 
    border border-white/10 
    rounded-3xl 
    shadow-sm 
    w-full
    bg-[#F8F7FF]
    transition duration-300

    hover:bg-gradient-to-l 
    hover:from-[#5A4FF3]
    hover:to-[#9A4DFF]
    hover:text-white
  "
            >

              {/* Title */}
              <h3 className="text-4xl font-semibold text-[#061353] mb-2 group-hover:text-white">
                Basic
              </h3>

              {/* Price Row */}
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#5A4FF3] to-[#008CFF] bg-clip-text text-transparent
      group-hover:text-white group-hover:bg-none">
                  $4.99
                </span>

                <span className="bg-[#F2F2F2] px-2 py-1 text-xs text-gray-600 rounded-md group-hover:bg-white/20 group-hover:text-white">
                  -15%
                </span>
              </div>

              <p className="text-black text-sm mb-4 group-hover:text-white">
                per user/month, billed monthly
              </p>

              {/* Tick + Usage */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 rounded-md bg-[#5A4FF3] flex items-center justify-center group-hover:bg-white">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                      className="group-hover:stroke-[#5A4FF3]" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-white">25 uses monthly</span>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-white text-lg font-semibold
    bg-gradient-to-r from-[#C857F4] via-[#8C5BFE] to-[#0EA5EA] shadow-md transition duration-300
    group-hover:bg-none group-hover:bg-white group-hover:text-[#B758F3]"
              >
                Get started <BsStars />
              </button>

            </div>




            <div className="
    group 
    p-6 
    border border-white/10 
    rounded-3xl 
    shadow-sm 
    w-full
    bg-[#F8F7FF]
    transition duration-300

    hover:bg-gradient-to-l 
    hover:from-[#5A4FF3]
    hover:to-[#9A4DFF]
    hover:text-white
  "
            >

              {/* Title */}
              <h3 className="text-4xl font-semibold text-[#061353] mb-2 group-hover:text-white">
                Plus
              </h3>

              {/* Price Row */}
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#5A4FF3] to-[#008CFF] bg-clip-text text-transparent
      group-hover:text-white group-hover:bg-none">
                  $9.99
                </span>

                <span className="bg-[#F2F2F2] px-2 py-1 text-xs text-gray-600 rounded-md group-hover:bg-white/20 group-hover:text-white">
                  -15%
                </span>
              </div>

              <p className="text-black text-sm mb-4 group-hover:text-white">
                per user/month, billed monthly
              </p>

              {/* Tick + Usage */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 rounded-md bg-[#5A4FF3] flex items-center justify-center group-hover:bg-white">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                      className="group-hover:stroke-[#5A4FF3]" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-white">50 uses monthly</span>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-white text-lg font-semibold
    bg-gradient-to-r from-[#C857F4] via-[#8C5BFE] to-[#0EA5EA] shadow-md transition duration-300
    group-hover:bg-none group-hover:bg-white group-hover:text-[#B758F3]"
              >
                Get started <BsStars />
              </button>

            </div>

            <div className="
    group 
    p-6 
    border border-white/10 
    rounded-3xl 
    shadow-sm 
    w-full
    bg-[#F8F7FF]
    transition duration-300

    hover:bg-gradient-to-l 
    hover:from-[#5A4FF3]
    hover:to-[#9A4DFF]
    hover:text-white
  "
            >

              {/* Title */}
              <h3 className="text-4xl font-semibold text-[#061353] mb-2 group-hover:text-white">
                Premium
              </h3>

              {/* Price Row */}
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#5A4FF3] to-[#008CFF] bg-clip-text text-transparent
      group-hover:text-white group-hover:bg-none">
                  $19.99
                </span>

                <span className="bg-[#F2F2F2] px-2 py-1 text-xs text-gray-600 rounded-md group-hover:bg-white/20 group-hover:text-white">
                  -15%
                </span>
              </div>

              <p className="text-black text-sm mb-4 group-hover:text-white">
                per user/month, billed monthly
              </p>

              {/* Tick + Usage */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 rounded-md bg-[#5A4FF3] flex items-center justify-center group-hover:bg-white">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                      className="group-hover:stroke-[#5A4FF3]" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-white">Unlimited uses</span>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-white text-lg font-semibold
    bg-gradient-to-r from-[#C857F4] via-[#8C5BFE] to-[#0EA5EA] shadow-md transition duration-300
    group-hover:bg-none group-hover:bg-white group-hover:text-[#B758F3]"
              >
                Get started <BsStars />
              </button>
            </div>

          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="px-[5%] py-20 bg-[#081351] text-white">
          <div className="max-w-4xl mx-auto text-center mb-12">
          
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Testimonials (Demo)</h2>
          
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We reduced interview time by 30% because Fibber highlights which responses deserve a deeper follow-up.",
                name: "Sarah Kim",
                title: "Head of People, Arclight Labs",
              },
              {
                quote:
                  "Our compliance team finally has a repeatable framework to identify deception without bias or guesswork.",
                name: "Marcus White",
                title: "Risk Lead, Lendly",
              },
              {
                quote: "I run every key sales call through Fibber to understand tone shifts before walking into negotiations.",
                name: "Ana Rodriguez",
                title: "Enterprise AE, Orbiq",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col gap-6 h-full"
              >
                <p className="text-lg leading-relaxed text-white/90">“{item.quote}”</p>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/60">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="px-[5%] py-20 bg-white text-[#061353]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold">FAQs</h2>
        
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "What does this app do?",
                answer:
                  "Record any conversation and Fibber will analyze the audio for voice patterns, speech metrics, and sentiment cues then deliver an easy-to-read insight report.",
              },
              {
                question: "How do I record my audio?",
                answer:
                  "Tap Record inside the app, speak clearly, and tap Stop when you’re done. The clip uploads automatically for analysis no extra steps required.",
              },
              {
                question: "How long does analysis take?",
                answer:
                  "Most files process instantly. Longer conversations (10+ minutes) may take a few extra seconds while we map tone, stress, and sentiment.",
              },
              {
                question: "What types of results will I see?",
                answer:
                  "Fibber returns visual dashboards and summaries that highlight tone shifts, stress levels, sentiment, clarity, and other speech metrics so you know exactly what to focus on.",
              },
            ].map((faq) => (
              <div key={faq.question} className="border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
                <p className="font-semibold text-lg mb-2">{faq.question}</p>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div id="download" className="bg-[#081351] py-6 md:py-12">
        <div className="px-[10%]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-extended">
                Download the <br />
                <span className="text-white">
                  {" "}   Fibber AI App
                </span>
              </h2>
              <br />
              <p>
                Start analyzing speech and detecting deception instantly. Available on all major mobile platforms.
              </p>
              <div>

                <div className="flex flex-col sm:flex-row items-center gap-4 my-10">
                  <button
                    onClick={() => {
                      window.open('https://play.google.com/store/apps/details?id=com.fibberai.app', '_blank');

                    }}
                    className="relative border border-white inline-flex items-center gap-3 rounded-full font-medium text-white cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-3 rounded-full bg-gradient-to-bl hover:bg-gradient-to-tr from-[#00B8FF] to-[#C702EF] px-8 py-3 shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all duration-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  clipRule="evenodd" d="M17.1803 15.266L19.1254 14.1854C20.8399 13.2329 20.8399 10.7671 19.1254 9.81459L17.1802 8.73394L16.2071 9.70708L16.1919 9.72196L13.8148 12L16.1919 14.278L16.2071 14.2929L17.1803 15.266ZM12.3696 13.3851L14.8004 15.7146L15.362 16.2762L5.71411 21.6361C5.02468 22.0191 4.26996 22.0374 3.62199 21.7922L4.19957 21.2146L12.3696 13.3851ZM12.3696 10.6149L14.8004 8.28535L15.362 7.72378L5.71411 2.36386C5.02469 1.98085 4.26997 1.96256 3.622 2.20776L4.19957 2.78533L12.3696 10.6149ZM2.1841 3.59829L2.79289 4.20708L2.80809 4.22196L10.9243 12L2.80809 19.778L2.79289 19.7929L2.1841 20.4017C2.06606 20.1128 2 19.7931 2 19.4507V4.54925C2 4.20688 2.06606 3.88713 2.1841 3.59829Z" fill="white" />
                      </svg>
                      <span className="text-base font-semibold">Playstore</span>

                    </span>
                  </button>

                  <button
                    onClick={() => {


                      window.open('https://apps.apple.com/app/fibber', '_blank');

                    }}
                    className="relative border border-white inline-flex items-center gap-3 rounded-full font-medium text-white overflow-hidden">
                    {/* Gradient Border Layer */}
                    <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-white/30 to-transparent"></span>

                    {/* Inner Transparent Area */}
                    <span className="relative z-10 flex items-center gap-3 rounded-full bg-transparent px-10 py-3 transition-all duration-500 hover:bg-white/10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.26721 13.7531L14.7328 13.7484L12 9.32812L9.26721 13.7531Z" fill="white" />
                        <path d="M12 1.03125C5.94375 1.03125 1.03125 5.94375 1.03125 12C1.03125 18.0562 5.94375 22.9688 12 22.9688C18.0562 22.9688 22.9688 18.0562 22.9688 12C22.9688 5.94375 18.0562 1.03125 12 1.03125ZM18.4547 17.0953L17.2547 17.8359L15.6 15.1547L8.39531 15.1641L6.74531 17.8359L5.54531 17.0953L6.73594 15.1641H4.84688V13.7531L7.60781 13.7484L11.1703 7.98281L9.38437 5.09062L10.5844 4.35L12 6.64219L13.4156 4.35L14.6156 5.09062L12.8297 7.98281L16.3875 13.7391L19.1531 13.7344V15.1453H17.2547L18.4547 17.0953Z" fill="white" />
                      </svg>
                      <span className="text-base font-semibold">Appstore</span>
                    </span>
                  </button>

                </div>



              </div>
            </div>
            <div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <Image
                src="/assests/liar-phone.svg"
                alt="Fibber live analysis screen"
                width={320}
                height={640}
                className="w-72 md:w-80 object-contain"
              />
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
}

