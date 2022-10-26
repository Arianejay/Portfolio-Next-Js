import React from 'react'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <div className="absolute p-4 bottom-0">
      <p className="uppercase tracking-[1px] text-[0.8rem]">
        &#169; Ariane Jay Tan {year}{' '}
      </p>
    </div>
  )
}

export default Footer
