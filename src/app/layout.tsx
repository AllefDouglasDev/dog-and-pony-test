import { twMerge } from 'tailwind-merge'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Dog and Pony',
  description: 'Dog and Pony test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          'flex flex-col gap-8 min-h-screen items-center bg-base-pure py-24 px-5 relative',
          roboto.className,
        )}
      >
        {children}
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
      </body>
    </html>
  )
}
