import React from 'react'
import './AdminProfile.css'
import UserImage from '../Assets/beard_male_man_face.png'

const AdminProfile = () => {
  const imageStyle = {
    backgroundImage: `url(${UserImage})`
  }
  return (
	<section className="admin-profile">
    <div className="admin-profile__image" style={ imageStyle } />
    <h1>Setareh Mozaffari</h1>
    <small>senior front-end developer</small>
    <p admin-profile__description className="admin-profile__description">I’m Setareh Mozaffari a senior front-end developer from Tehran, IRAN.</p>
	</section>
  )
}
 
export default AdminProfile
