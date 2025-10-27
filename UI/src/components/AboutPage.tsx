import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage: React.FC = () => {
  return (
    <div>
      <li>
        <Link to='/About' className=" w-10 is-drawer-close:tooltip is-drawer-close:tooltip-right size-8" data-tip="AboutPage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="#ffffff" className="inline-block size-4 my-1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          <span className="is-drawer-close:hidden text-white">AboutPage</span>
        </Link>
      </li>
    </div>
  )
}

export default AboutPage 