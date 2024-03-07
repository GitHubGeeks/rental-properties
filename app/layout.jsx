import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Rental Properties ! Find the best rentals',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <html>
        <body>
          <Navbar />
            <div>{children}</div>  
            <Footer />
        </body>
    </html>

  )
}

export default MainLayout