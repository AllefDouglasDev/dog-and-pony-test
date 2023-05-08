import { useCallback, useState } from "react";
import { FormProps } from "../components/Location/LocationForm/validator";
import type { Location } from '../types/models'
import defaultLocations from '../fixtures/locations.json'

export function useLocations() {
  const [locations, setLocations] = useState<Location[]>(defaultLocations)

  const createLocation = useCallback((data: FormProps) => {
    const location = { id: self.crypto.randomUUID(), ...data }
    setLocations(_locations => [...locations, location])
  }, [locations])

  const editLocation = useCallback((data: FormProps, id: string) => {
    setLocations(_locations => {
      return _locations.map(location => {
        return location.id === id ? { id, ...data } : location
      })
    }) 
  }, [])

  const deleteLocation = useCallback((id: string) => {
    setLocations(_locations => _locations.filter(location => location.id !== id))
  }, [])

  return { locations, createLocation, editLocation, deleteLocation }
}
