import React from 'react'
import './Works.css'
import Work from '../../Components/Work'
import structure_1 from '../../Assets/structure-1.jpg'
import structure_3 from '../../Assets/structure-3.jpg'

const Works = React.forwardRef((props, ref) => {
  const largCardStyle = {
    backgroundColor: '#0f0f0f',
    color: '#ffffff'
  }
  const yellowCardStyle = {
    backgroundColor: '#FCB571',
    color: '#000000'
  }
  const whiteCardStyle = {
    backgroundColor: '#ffffff',
    color: '#000000'
  }
  return (
    <div ref={ref} className="works">
      <section className="works__row">
        <div className="item-large">
          <Work imageUrl={structure_1} workStyle={largCardStyle}/>
        </div>
        <div className="item-small">
          <Work workStyle={yellowCardStyle} />
        </div>
        <div className="item-small">
          <Work workStyle={whiteCardStyle} />
        </div>
      </section>
      <section className="works__row">
        <div className="item-small">
          <Work workStyle={whiteCardStyle} />
        </div>
        <div className="item-small">
          <Work workStyle={yellowCardStyle} />
        </div>
        <div className="item-large">
          <Work imageUrl={structure_3} workStyle={largCardStyle}/>
        </div>
      </section>
    </div>
  )
})

export default Works