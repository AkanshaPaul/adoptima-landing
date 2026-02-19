import React from 'react'
import Hero from './components/Hero'
import LogoTicker from './components/LogoTicker'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Hero />
      <LogoTicker />
      <Features />
      <Pricing />
      <CallToAction />
    </div>
  )
}

export default App
