import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import datainfo from './components/data'

function App() {
  const dataElements = datainfo.map(info =>{
    return <Card 
      key={info.id}
      {...info}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {dataElements}
      </section>
    </div>
  )
}

export default App
