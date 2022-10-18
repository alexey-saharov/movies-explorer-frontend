import React from 'react'
import './Preloader.css'

export const Preloader = ({ isActive }) => {
  return (
    <div className={`preloader ${isActive && 'preloader_active'}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};
