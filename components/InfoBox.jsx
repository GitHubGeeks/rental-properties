import React from 'react'

const InfoBox = ({
    heading,
    backgroundColor = ' bg-gray-100',
    textColor = 'text-gray-800',
    buttonInfo,
    children


}) => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className={`${textColor}text-2xl font-bold`}>{heading}</h2>
            <p className={`${textColor}mt-2 mb-4`}>
                    {children}
            </p>
            <a
              href={buttonInfo.link}
              className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80 `}
            >
              {buttonInfo.text}
            </a>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Property Owners</h2>
            <p className="mt-2 mb-4">
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </p>
            <a
              href="/add-property.html"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            >
              Add Property
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default InfoBox