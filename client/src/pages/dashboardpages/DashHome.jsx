import React from 'react'

const DashHome = () => {
  return (
    <>
    <div>
      <style>
        {`
          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60vh;
            margin: 90px auto 0 auto;
          }

          .image-container img {
            width: 80%;
            max-width: 500px;
            height: auto;
            object-fit: contain;
          }
        `}
      </style>

      <div className="image-container">
        <img 
          src="/image/logo-banking.png" 
          alt="MyBank Logo"
        />
      </div>
    </div>
    </>
  )
}

export default DashHome
