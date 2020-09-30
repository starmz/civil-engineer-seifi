import React from 'react'
import './Home.css'
import Background from '../../Assets/background/bridge-3.jpg'

const Home = (props) => {
  const sectionStyle = {
    backgroundImage: `url(${Background})`
  }
  return (
    <section className="home" style={ sectionStyle }>
      <div className="home__content">
        <p className="content__title">Setareh Mozaffari</p>
        <p className="content__title">Front-end Developer</p>
        <p className="content__description">An experienced front-end developer, highly motivated and eager to learn new tech-staks</p>
        <div className="content__button">
          <button type="button" className="content__button-transparent" onClick={() => { props.goToWorks('worksSection') }}>Explore work</button>
          <button type="button" className="content__button-transparent" onClick={() => { props.goToWorks('profileSection') }}>View profile</button>
        </div>
      </div>
    </section>
  )
}

export default Home
