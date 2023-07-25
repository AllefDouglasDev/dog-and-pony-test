'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useLocations } from '@/app/hooks/useLocations'

import { CreateLocationForm } from './CreateLocationForm'
import { FeedbackBanner } from '../FeedbackBanner'
import { FormProps } from './LocationForm/validator'
import { LocationCard } from '../LocationCard'
import { UpdateLocationForm } from './UpdateLocationForm'

export const LocationList = () => {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false)
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false)
  const [editingLocationIds, setEditingLocationIds] = useState<string[]>([])
  const { locations, createLocation, editLocation, deleteLocation } =
    useLocations()
  const [parent] = useAutoAnimate()

  const handleCreateLocation = (data: FormProps) => {
    createLocation(data)
    setIsCreateFormVisible(false)
  }

  const handleUpdateLocation = (data: FormProps, id: string) => {
    editLocation(data, id)
    handleCloseEditionForm(id)
    setIsFeedbackVisible(true)
  }

  const handleDeleteLocation = (id: string) => {
    deleteLocation(id)
  }

  const handleOpenEditionForm = (id: string) => {
    setEditingLocationIds(state => [...state, id])
  }

  const handleCloseEditionForm = (id: string) => {
    setEditingLocationIds(_editingLocationIds =>
      _editingLocationIds.filter(editingLocationId => editingLocationId !== id),
    )
  }

  return (
    <div className="flex flex-col gap-8">
      {isFeedbackVisible && (
        <FeedbackBanner
          text="The locaton has been updated."
          onClose={() => setIsFeedbackVisible(false)}
        />
      )}
      <h1 className="text-6xl text-functional-pure font-light">Offices</h1>
      <div className="flex flex-col gap-4" ref={parent}>
        {isCreateFormVisible ? (
          <CreateLocationForm
            onCreate={handleCreateLocation}
            onClose={() => setIsCreateFormVisible(false)}
          />
        ) : (
          <button
            type="button"
            className={twMerge([
              'flex items-center justify-between px-4 py-3',
              'w-80 min-w-80 rounded-lg bg-functional-pure text-white',
            ])}
            onClick={() => setIsCreateFormVisible(true)}
          >
            <span>Add New Location</span>
            <div className="text-2xl">+</div>
          </button>
        )}
        {locations.map(location =>
          editingLocationIds.includes(location.id) ? (
            <UpdateLocationForm
              key={location.id}
              location={location}
              onSave={data => handleUpdateLocation(data, location.id)}
              onClose={() => handleCloseEditionForm(location.id)}
            />
          ) : (
            <LocationCard
              key={location.id}
              {...location}
              onDelete={() => handleDeleteLocation(location.id)}
              onUpdate={() => handleOpenEditionForm(location.id)}
            />
          ),
        )}
      </div>
    </div>
  )
}
