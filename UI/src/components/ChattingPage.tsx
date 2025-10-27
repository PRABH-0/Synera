import React from 'react'
import { Link } from 'react-router-dom'
const ChattingPage: React.FC = () => {
  return (
    <div>
      <li>
        <Link to='/Chatting' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="ChattingPage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="#ffffff" className="inline-block size-5.5 my-1.5"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
          <span className="is-drawer-close:hidden text-white px-3">ChattingPage</span>
        </Link>
      </li>
    </div>
  )
}

export default ChattingPage
