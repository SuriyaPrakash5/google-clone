import React from 'react'
import { GlobeIcon } from "@heroicons/react/solid"

function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">

            <div className="px-8 py-3">
                <p className='link'>India</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 px-8 py-4">
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    {/* <GlobeIcon /> */}
                    <p className="link text-gray-500">About</p>
                    <p className="link text-gray-500">Advertising</p>
                    <p className="link text-gray-500">Business</p>
                    <p className="link text-gray-500">How Search Works</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p className="link">Privacy</p>
                    <p className="link">Terms</p>
                    <p className="link">Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
