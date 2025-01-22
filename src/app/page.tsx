"use client"

import React from 'react'
import CreativeInput from './components/CreativeInput/CreativeInput'
export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 p-6">
      <div className="space-y-8">
        <CreativeInput placeholder="Escribe algo mágico..." />
      </div>
    </main>
  )
}

