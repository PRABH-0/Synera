import React from 'react'
import { Link } from 'react-router-dom'

const ProfilePage: React.FC = () => {
  return (
    <div>
      <li>
        <Link to='/Profile' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="ProfilePage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  strokeWidth="2" fill="none" stroke="#ffffff" className="inline-block size-4 my-1.5"> <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          <span className="is-drawer-close:hidden text-white">ProfilePage</span>
        </Link>
      </li>
    </div>
  )
}

export default ProfilePage
