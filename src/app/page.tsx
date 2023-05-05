'use client'

import { useState } from "react"
import { Office } from "./components/Office"
import { NewLocationForm } from "./components/Location/NewLocationForm"
import { FormProps } from "./components/Location/LocationForm/validator"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { EditLocationForm } from "./components/Location/EditLocationForm"
import { useLocations } from "./hooks/useLocations"

export default function Home() {
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false)
  const [editingLocationIds, setEditingLocationIds] = useState<string[]>([])
  const { locations, createLocation, editLocation, deleteLocation } = useLocations()
  const [parent] = useAutoAnimate()

  const handleCreateNewLocation = (data: FormProps) => {
    createLocation(data)
    setIsCreateFormVisible(false)
  }

  const handleEditLocation = (data: FormProps, id: string) => {
    editLocation(data, id)
    handleCloseEditionForm(id)
  }

  const handleDeleteLocation = (id: string) => {
    deleteLocation(id)
  }

  const handleOpenEditionForm = (id: string) => {
    setEditingLocationIds(state => [...state, id])
  }

  const handleCloseEditionForm = (id: string) => {
    setEditingLocationIds(_editingLocationIds => 
      _editingLocationIds.filter(editingLocationId => editingLocationId !== id)
    )
  }

  return (
    <main className="flex flex-col gap-8 min-h-screen items-center bg-base-pure py-44 px-5">
      <h1 className="text-6xl text-functional-pure font-light">Offices</h1>
      <div className="flex flex-col gap-4" ref={parent}>
        {isCreateFormVisible ? (
          <NewLocationForm 
            onCreate={handleCreateNewLocation}
            onClose={() => setIsCreateFormVisible(false)} 
          />
        ) : (
          <button 
            type="button" 
            className="w-80 min-w-80 rounded-lg bg-functional-pure text-white flex items-center justify-between px-4 py-3"
            onClick={() => setIsCreateFormVisible(true)}
          >
            <span>Add New Location</span>
            <div className="text-2xl">+</div>
          </button>
        )}
        {locations.map(location => editingLocationIds.includes(location.id) ? (
          <EditLocationForm 
            key={location.id} 
            location={location}
            onSave={data => handleEditLocation(data, location.id)} 
            onClose={() => handleCloseEditionForm(location.id)}
          />
        ) : (
          <Office 
            key={location.id} 
            {...location} 
            onDelete={() => handleDeleteLocation(location.id)}
            onEdit={() => handleOpenEditionForm(location.id)}
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
