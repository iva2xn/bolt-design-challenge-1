"use client"

import type React from "react"
import { useRef } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function SkyShader({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0066FF] relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <MeshGradient
          className="w-full h-full"
          colors={["#0066FF", "#3399FF", "#6699FF", "#99BFFF", "#CCE0FF"]}
          speed={0.055}
        />
      </div>

      {children}
    </div>
  )
}