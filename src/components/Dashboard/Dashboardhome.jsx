import React, { useState } from 'react'
import Profile from './profile';
import UserBooking from './userbooking';
import { Link } from 'react-router-dom'
function Dashboardhome() {
    const [profile,setProfile] = useState(true);

  return (
    <div className='paddingtop container'>
        <div className='d-flex gap-4'>
        <aside className='mt-4'>
            <p onClick={()=>setProfile(true)} className={`${profile?'clase':''} dashbaordasidepara`}>User Profile</p>
            <p onClick={()=>setProfile(false)} className={`${profile?'':'clase'} dashbaordasidepara`}>User Bookings</p>
            <Link to = '/'><button>New Bookings</button></Link>
        </aside>
        <div>
            {
                profile?<Profile/>:<UserBooking/>
            }
        </div>
        </div>
    </div>
  )
}

export default Dashboardhome