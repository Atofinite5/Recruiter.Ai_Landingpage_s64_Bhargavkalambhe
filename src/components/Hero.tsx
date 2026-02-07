"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      })
        .from(".connector-path", {
          strokeDashoffset: 1500,
          strokeDasharray: 1500,
          duration: 2.5,
          ease: "power1.inOut"
        }, "-=0.5")
        .from(".floating-element", {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.4)"
        }, "-=1.5")
        .from(".trusted-by", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=1");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen pt-32 pb-10 px-6 hero-gradient overflow-hidden flex flex-col items-center justify-start">

      {/* SVG CONNECTORS - Greenhouse "Network" Style */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <path
          className="connector-path"
          d="M 160 380 C 160 300, 220 280, 280 200"
          stroke="#3B63F6"
          strokeWidth="5"
          fill="none"
          opacity="0.2"
        />
        <path
          className="connector-path"
          d="M 1280 340 C 1220 320, 1100 280, 1140 160"
          stroke="#3B63F6"
          strokeWidth="5"
          fill="none"
          opacity="0.2"
        />
        <path
          className="connector-path"
          d="M 1340 660 C 1300 700, 1260 760, 1340 820"
          stroke="#3B63F6"
          strokeWidth="5"
          fill="none"
          opacity="0.2"
        />
      </svg>

      <div className="max-w-[1400px] w-full mx-auto relative h-[800px] flex flex-col items-center">

        {/* PRIYA GROUP (Left) */}
        <div className="absolute top-[2%] left-[4%] z-20 floating-element -rotate-2">
          <div className="bg-white rounded-[1.5rem] p-5 max-w-[260px] bubble-shadow border border-white/40">
            <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
              "Doing HR myself takes away from building the product. I need speed."
            </p>
          </div>
        </div>
        <div className="absolute top-[35%] left-[5%] z-20 floating-element">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md p-1.5 pr-6 rounded-2xl border border-white/80 shadow-sm">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-xl object-cover" alt="Priya" />
            <div>
              <p className="font-bold text-[#1A1A1A] text-[11px]">Priya S.</p>
              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">CEO @ Innovate</p>
            </div>
          </div>
        </div>

        {/* AMIT GROUP (Right - 7deg Tilt) */}
        <div className="absolute top-[2%] right-[12%] z-20 floating-element -rotate-[7deg]">
          <div className="bg-white rounded-[1.5rem] p-5 max-w-[280px] bubble-shadow border border-white/40">
            <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
              "The best talent is off the market in days. Our manual process is too slow."
            </p>
          </div>
        </div>
        <div className="absolute top-[25%] right-[2%] z-20 floating-element">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md p-1.5 pr-6 rounded-2xl border border-white/80 shadow-sm">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-xl object-cover" alt="Amit" />
            <div>
              <p className="font-bold text-[#1A1A1A] text-[11px]">Amit T.</p>
              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">VP HR @ ScaleUp</p>
            </div>
          </div>
        </div>

        {/* RAHUL GROUP (Bottom Right) */}
        <div className="absolute bottom-[28%] right-0 z-20 floating-element">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md p-1.5 pr-6 rounded-l-2xl border-y border-l border-white/80 shadow-sm">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-xl object-cover" alt="Rahul" />
            <div>
              <p className="font-bold text-[#1A1A1A] text-[11px]">Rahul M.</p>
              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Hiring Lead</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[5%] right-[2%] z-20 floating-element rotate-2">
          <div className="bg-white rounded-[1.5rem] p-5 max-w-[280px] bubble-shadow border border-white/40">
            <p className="text-gray-500 text-xs font-medium leading-relaxed italic">
              "I skim 200 resumes a day. I need an AI that actually understands potential."
            </p>
          </div>
        </div>

        {/* CENTER CONTENT AREA - Greenhouse Typography Style */}
        <div className="mt-20 flex flex-col items-center text-center z-30 max-w-4xl px-4">
          <div className="hero-text brush-underline-container">
            <h1 className="text-[48px] md:text-[64px] font-serif-display text-[#1A1A1A] leading-tight tracking-tight">
              Every <span className="font-handwriting italic text-[#1A1A1A] ml-1">Hire</span>
            </h1>
            <div className="brush-stroke"></div>
          </div>

          <h2 className="hero-text text-[54px] md:text-[76px] font-serif-display text-[#3B63F6] leading-none tracking-tight mt-1">
            Faster and Better
          </h2>

          <p className="hero-text mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            The hiring software designed to help teams find, interview, and hire the best talent with AI-driven precision and human-centric workflows.
          </p>

          <div className="hero-text mt-12 flex flex-col sm:flex-row items-center gap-5">
            <button className="bg-[#3453A3] text-white px-10 py-4 rounded-full text-lg font-bold flex items-center gap-3 transition-all hover:bg-[#2a4382] shadow-xl hover:-translate-y-1 active:scale-95">
              Request a demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-[#1A1A1A] px-10 py-4 rounded-full text-lg font-bold flex items-center gap-3 transition-all border border-gray-100 shadow-md hover:bg-gray-50 active:scale-95">
              <div className="bg-[#1A1A1A] p-1.5 rounded-full">
                <Play className="w-3 h-3 fill-white text-white" />
              </div>
              Watch video
            </button>
          </div>

          {/* Social Proof (Greenhouse Style) */}
          <div className="trusted-by mt-24 w-full">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xl font-black text-gray-800 tracking-tighter">STRIPE</div>
              <div className="text-xl font-black text-gray-800 tracking-tighter">NETFLIX</div>
              <div className="text-xl font-black text-gray-800 tracking-tighter">HUBSPOT</div>
              <div className="text-xl font-black text-gray-800 tracking-tighter">AIRBNB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
