import React from 'react'

const CloseButton: React.FC = () => {
    return (


        <div
            className="  m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-transparent"
            data-tip="Open"
        >
            <label
                htmlFor="my-drawer-4"
                className="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180 hover:bg-transparent"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    fill="none"
                    stroke="#ffffff"
                    className="inline-block size-5.5 my-1.5 w-30"
                >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M9 4v16"></path>
                    <path d="M14 10l2 2l-2 2"></path>
                </svg>
            </label>
        </div>

    )
}

export default CloseButton
