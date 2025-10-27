import React from 'react'
import { Link } from 'react-router-dom'
const MorePage: React.FC = () => {
  return (
    <div>
      <li>
              <Link to='/hashtag' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="HashtagPage">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="#ffffff" className="inline-block size-4 my-1.5"><path d="M 4 13 h 6 c 0.55 0 1 -0.45 1 -1 V 4 c 0 -0.55 -0.45 -1 -1 -1 H 4 c -0.55 0 -1 0.45 -1 1 v 8 c 0 0.55 0.45 1 1 1 Z m 0 8 h 6 c 0.55 0 1 -0.45 1 -1 v -4 c 0 -0.55 -0.45 -1 -1 -1 H 4 c -0.55 0 -1 0.45 -1 1 v 4 c 0 0.55 0.45 1 1 1 Z m 10 0 h 6 c 0.55 0 1 -0.45 1 -1 v -8 c 0 -0.55 -0.45 -1 -1 -1 h -6 c -0.55 0 -1 0.45 -1 1 v 8 c 0 0.55 0.45 1 1 1 Z M 13 4 v 4 c 0 0.55 0.45 1 1 1 h 6 c 0.55 0 1 -0.45 1 -1 V 4 c 0 -0.55 -0.45 -1 -1 -1 h -6 c -0.55 0 -1 0.45 -1 1 Z"></path></svg>
                <span className="is-drawer-close:hidden text-white">HashtagPage</span>
              </Link>
            </li>
    </div>
  )
}

export default MorePage
