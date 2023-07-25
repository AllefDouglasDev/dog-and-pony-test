import { LocationList } from "./components/Location/LocationList"

export default function HomePage() {
  return (
    <main className="flex flex-col gap-8 min-h-screen items-center bg-base-pure py-24 px-5 relative">
      <LocationList />
      <footer className="flex flex-col items-center justify-center gap-2 mt-2">
        <p className="text-base-200">This project is for test purpose only.</p>
        <a
          target="_blank"
          href="https://www.dogandponystudios.com"
          className="text-functional-pure uppercase text-xs"
        >
          www.dogandponystudios.com
        </a>
      </footer>
    </main>
  )
}
