"use client"

import Book from "./book"
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
      <div className="relative w-full h-screen">
        <main className="absolute bottom-8 left-8 z-20 max-w-lg">
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
              <span className="text-white/90 text-xs font-light relative z-10">✨ follow @iva2xn on X</span>
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
          </div>
        </main>
        <div className="absolute inset-0 flex items-center justify-center pb-60">
          <Book />
        </div>
      </div>
    </SkyShader>
  )
}