import './globals.css'

export const metadata = {
  title: 'Superteam OpenSource',
  description: 'Database of Solana Open Source projects'
}

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

import Image from 'next/image';

import solana_icon from '@/img/solana-icon.svg';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={"flex flex-row justify-center " + inter.className}>
          <main className="px-10 w-full max-w-screen-xl">

            <div className="flex py-10 mt-3 flex-col flex-start items-start sm:w-full sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-row items-center flex-nowrap">
                <Image src={solana_icon} alt="Solana" width={30} />
                <h1 className="text-2xl ml-3">OpenSource</h1>
              </div>
              <a href="https://airtable.com/appaWGnMf4eBJS9pb/shrLQ5YdZ55WAZ0uY" target="_blank" className="text-xl mt-5 sm:mt-0 p-3 border-2 border-[#AC0086] hover:border-[#FF00C7] rounded-xl">Add Repository</a>
            </div>
            
            <h1 className="text-3xl mb-5 mt-5 hidden sm:block">Search for Open Source repositories built on Solana!</h1>
            <h1 className="text-3xl mb-5 mt-5 block sm:hidden">Find repositories</h1>

            {children}
            
            <div className="min-h-[25px]"></div>

          </main>
        </div>
      </body>
    </html>
  )
}
