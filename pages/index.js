import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'

import { ViewGridIcon, SearchIcon, MicrophoneIcon } from "@heroicons/react/solid"
import { useRef } from 'react'
import { useRouter } from 'next/router'


// https://google-clone-suriyaprakash5.vercel.app/

export default function Home() {

  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-end text-sm text-gray-700">
        {/* left */}

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* Avatar */}
          <Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSh7uVK9CEGYbuzKX13uR53gDIEdQh15kag&usqp=CAU" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center w-4/5 mt-20 flex-grow">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-300 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className='btn text-black' onClick={search}>Google Search</button>
          <button className='btn text-black'>I'm Feeling Lucky</button>
        </div>

        {/* <div className='mt-4 link text-sm text-blue-800'>
      Join virtual talks and more to celebrate diversity & allyship
    </div> */}

        <div className="flex space-x-2 text-sm mt-8">
          <p>Google offered in: </p>
          <p className="link text-blue-800">हिन्दी </p>
          <p className="link text-blue-800">বাংলা</p>
          <p className="link text-blue-800">తెలుగు</p>
          <p className="link text-blue-800">मराठी</p>
          <p className="link text-blue-800">தமிழ்</p>
          <p className="link text-blue-800">മലയാളം</p>
        </div>
      </form>

      {/* Footer */}
      <Footer />

    </div>
  )
}
