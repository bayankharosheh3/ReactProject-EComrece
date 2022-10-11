import React from 'react'
import "./styles.css"

const Seen = () => {
     const src ="./assets/images/10.png"
  return (
    <section className='seen-sec'>
        <h2>As Seen On</h2>
        <img src={src}/>
    </section>
  )
}

export default Seen