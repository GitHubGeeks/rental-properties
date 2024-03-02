import React from 'react'

export const metadata = {
    title: '',
    description: '',
    keywords: ''
}

const MainLayout = ({children}) => {
  return (
    <html>
        <body>
            <div>{children}</div>  
        </body>
    </html>

  )
}

export default MainLayout