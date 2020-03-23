import React from 'react'
import './AdminProfile.css'
import UserImage from '../Assets/Screenshot.jpg'

const AdminProfile = () => {
  return (
	<section className="admin-profile">
    <div class="admin-profile__image-wrapper">
      <img alt="userimage" src={ UserImage } />
    </div>
    <h1>Setareh Mozaffari</h1>
	</section>
  )
}
 
export default AdminProfile
