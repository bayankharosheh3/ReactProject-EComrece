import React from 'react'
import "./styles.css"

const RightIcons = () => {
    const src = ["./assets/icons/search.svg","./assets/icons/heart.svg","/assets/icons/shape.svg"]
  return (
    <div className='right-icon'>
        <a className='login-link'><span>Log in</span></a>
        {
            src.map(item => <a><img src={item} className='icons'/></a> )
        }
    </div>
  )
}

export default RightIcons