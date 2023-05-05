'use client'

import { useState } from "react"
import { Office } from "./components/Office"
import { NewLocationForm } from "./components/Location/NewLocationForm"

export default function Home() {
  const [isCreatingNewLocation, setIsCreatingNewLocation] = useState(false)
  const [offices] = useState([
    {
      id: '1',
      name:"Headquarters",
      location:"3762 W. Dallas St.",
      person:{
        name: 'Hellena John',
        position: 'Software Tester',
        email: 'georgia.young@example.com',
        phone: '(808) 555-0111',
      }
    },
    {
      id: '2',
      name:"Headquarters",
      location:"3762 W. Dallas St.",
      person:{
        name: 'Hellena John',
        position: 'Software Tester',
        email: 'georgia.young@example.com',
        phone: '(808) 555-0111',
      }
    }
  ])

  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center bg-base-pure">
      <h1 className="text-6xl text-functional-pure font-light">Offices</h1>
      <div className="flex flex-col gap-4">
        <button 
          type="button" 
          className="w-80 min-w-80 rounded-lg bg-functional-pure text-white flex items-center justify-between px-4 py-3"
          onClick={() => setIsCreatingNewLocation(true)}
        >
          <span>Add New Location</span>
          <div className="text-2xl">+</div>
        </button>
        {isCreatingNewLocation && <NewLocationForm onClose={() => setIsCreatingNewLocation(false)} />}
        {offices.map(office => (<Office key={office.id} {...office} />))}
        <footer className="flex flex-col items-center justify-center gap-2 mt-2" >
          <p className="text-base-200">This project is for test purpose only.</p>
          <a 
            target="_blank" 
            href="https://www.dogandponystudios.com" 
            className="text-functional-pure uppercase text-xs"
          >
            www.dogandponystudios.com
          </a>
        </footer>
      </div>
    </main>
  )
}
