import React from 'react'
import './Work.css'

const Work = (props) => {
  return (
    <section className="work" style={props.workStyle}>
      {props.imageUrl &&
        <div className="work__image-wrapper">
          <img src={props.imageUrl} className="work__image" alt="..." />
        </div>
      }
      <div className="p-4">
        <h5>Card title</h5>
        <p>This is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p>Last updated 3 mins ago</p>
      </div>
    </section>
  )
}

export default Work