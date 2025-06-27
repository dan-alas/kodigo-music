import React from 'react'

export default function SidebarCard({card}) {

    const {title, description, buttonText} = card
    
  return (
    
     <div className="text-white bg-ultra-light p-3 rounded mt-3">
        <h6>{title}</h6>
        <p>{description}</p>
        <button className="btn bg-white">{buttonText}</button>
    </div>
        
  )
}
