"use client";

import { useState } from "react";
import { Office } from "./components/Office";
import { CreateLocationForm } from "./components/Location/CreateLocationForm";
import { FormProps } from "./components/Location/LocationForm/validator";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { UpdateLocationForm } from "./components/Location/UpdateLocationForm";
import { useLocations } from "./hooks/useLocations";
import { FeedbackBanner } from "./components/FeedbackBanner";
import clsx from "clsx";

export default function Home() {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
  const [editingLocationIds, setEditingLocationIds] = useState<string[]>([]);
  const { locations, createLocation, editLocation, deleteLocation } =
    useLocations();
  const [parent] = useAutoAnimate();

  const handleCreateLocation = (data: FormProps) => {
    createLocation(data);
    setIsCreateFormVisible(false);
  };

  const handleUpdateLocation = (data: FormProps, id: string) => {
    editLocation(data, id);
    handleCloseEditionForm(id);
    setIsFeedbackVisible(true);
  };

  const handleDeleteLocation = (id: string) => {
    deleteLocation(id);
  };

  const handleOpenEditionForm = (id: string) => {
    setEditingLocationIds((state) => [...state, id]);
  };

  const handleCloseEditionForm = (id: string) => {
    setEditingLocationIds((_editingLocationIds) =>
      _editingLocationIds.filter(
        (editingLocationId) => editingLocationId !== id
      )
    );
  };

  return (
    <main className="flex flex-col gap-8 min-h-screen items-center bg-base-pure py-44 px-5 relative">
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
            className={clsx([
              "flex items-center justify-between px-4 py-3",
              "w-80 min-w-80 rounded-lg bg-functional-pure text-white",
            ])}
            onClick={() => setIsCreateFormVisible(true)}
          >
            <span>Add New Location</span>
            <div className="text-2xl">+</div>
          </button>
        )}
        {locations.map((location) =>
          editingLocationIds.includes(location.id) ? (
            <UpdateLocationForm
              key={location.id}
              location={location}
              onSave={(data) => handleUpdateLocation(data, location.id)}
              onClose={() => handleCloseEditionForm(location.id)}
            />
          ) : (
            <Office
              key={location.id}
              {...location}
              onDelete={() => handleDeleteLocation(location.id)}
              onUpdate={() => handleOpenEditionForm(location.id)}
            />
          )
        )}
        <footer className="flex flex-col items-center justify-center gap-2 mt-2">
          <p className="text-base-200">
            This project is for test purpose only.
          </p>
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
  );
}
