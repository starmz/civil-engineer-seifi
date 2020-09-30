import React from 'react'
import './Profile.css'
import structure from '../../Assets/engineer-1.jpg'

const Profile = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="profile">
      <div className="profile__image-wrapper">
        <img src={structure} className="profile__image" alt="..." />
      </div>
      <div className="p-4 text-left">
        <h5>Card title</h5>
        <p>This is a wider card with supporting text below as a natural lead-in to additionalThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p>Last updated 3 mins ago</p>
      </div>
    </section>
  )
})

export default Profile
