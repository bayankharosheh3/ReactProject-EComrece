import React from 'react'
import "./styles.css"
import Video from './Video'

const Videos = () => {
  return (
    <section className='videos-sec'>
        <h2>Recommended Videos</h2>
        <div className='videos-content'>
            <Video/>
            <Video/>
            <Video/>
        </div>  
        <button>Show more</button>
    </section>
  )
}

export default Videos