import React from 'react'
import baner from "../assets/Img-baner/baner.png"

export const Baner = () => {
  return (
    <div>
        <div className="w-full pt-2">
        <img
              className=""
              src={baner}
              alt="Transistor"
              width={2000}
            />
        </div>
    </div>
  )
}
