import React from 'react'

const MarginWrapper = ({children}) => {
    return (
      <div className='mx-8 sm:mx-16 lg:mx-32 2xl:mx-64 ' >
          {children}
      </div>
    )
  }
  
  export default MarginWrapper