import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components'
import { MSFProvider } from '@/contexts/MSFContext'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={inter.className}>
        <MSFProvider>
          <Component {...pageProps} />
        </MSFProvider>
      </div>
    </>
  )
}
