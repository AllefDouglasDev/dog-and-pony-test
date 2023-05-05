'use client'

import { useState } from "react"
import { Office } from "./components/Office"
import { NewLocationForm } from "./components/Location/NewLocationForm"
import { FormProps } from "./components/Location/LocationForm/validator"
import type { Location } from './types/models'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Home() {
  const [isCreatingNewLocation, setIsCreatingNewLocation] = useState(false)
  const [offices, setOffices] = useState<Location[]>([])
  const [parent] = useAutoAnimate()

  const handleCreateNewLocation = (data: FormProps) => {
    const office = { id: self.crypto.randomUUID(), ...data }
    setOffices(_offices => [...offices, office])
    setIsCreatingNewLocation(false)
  }

  const handleDeleteLocation = (id: string) => {
    setOffices(_offices => _offices.filter(office => office.id !== id))
  }

  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center bg-base-pure">
      <h1 className="text-6xl text-functional-pure font-light">Offices</h1>
      <div className="flex flex-col gap-4" ref={parent}>
        {isCreatingNewLocation ? (
          <NewLocationForm 
            onCreate={handleCreateNewLocation}
            onClose={() => setIsCreatingNewLocation(false)} 
          />
        ) : (
          <button 
            type="button" 
            className="w-80 min-w-80 rounded-lg bg-functional-pure text-white flex items-center justify-between px-4 py-3"
            onClick={() => setIsCreatingNewLocation(true)}
          >
            <span>Add New Location</span>
            <div className="text-2xl">+</div>
          </button>
        )}
        {offices.map(office => (
          <Office 
            key={office.id} 
            {...office} 
            onDelete={() => handleDeleteLocation(office.id)}
          />
        ))}
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
