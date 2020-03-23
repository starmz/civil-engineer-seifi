import React from 'react'
import './Home.css'
import Background from '../Assets/background.jpg'

const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${Background})`,
    height: '100%',
    backgroundSize: 'cover',
    opacity: 0.2
  }

  return (
    <section className="home">
      <div className="home-background" style={ sectionStyle }>
        test
     </div>
    </section>
  )
}

export default Home
