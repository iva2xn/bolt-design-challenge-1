"use client"

import SkyShader from "./sky-shader"

import { Figtree, Instrument_Serif } from "next/font/google"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function HeroSky() {
  return (
    <SkyShader>
      <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      {/* FIX APPLIED HERE: Added a subtle text shadow to the parent container for better readability */}
      <div
        className="text-left"
        style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">✨ follow @055px for more free stuffs</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl tracking-tight font-light text-white mb-4 flex flex-wrap items-baseline">
            <span
                className={`${instrumentSerif.className} font-medium italic`}
                style={{ fontSize: "1.5em", lineHeight: "1" }}
            >
                @ivann
            </span>
            <span className="ml-2">Built</span>
            <br />
            <span className="font-light tracking-tight text-white mt-1 block">These designs</span>
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Pricing
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </main>
    </SkyShader>
  )
}