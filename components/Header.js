import { useRouter } from 'next/router'
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, ViewGridIcon, XIcon } from '@heroicons/react/solid'
import { CogIcon } from "@heroicons/react/outline"
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions';

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null)

    const search = e => {
        e.preventDefault()

        const term = searchInputRef.current.value

        if (!term) return

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    width={120}
                    height={40}
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                />

                <form className="flex flex-grow border border-gray-200 px-6 py-3 ml-10 mr-5 rounded-full shadow-md max-w-3xl items-center hover:shadow-lg focus-within:shadow-lg">
                    <input className="flex-grow w-full focus:outline-none" ref={searchInputRef} defaultValue={router.query.term} type="text" />

                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon
                        className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
                    />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>

                <div className="flex ml-auto items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden h-10 sm:inline-flex p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <ViewGridIcon
                        className="hidden h-10 sm:inline-flex p-2 mr-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500"
                    />
                    <Avatar
                        className=""
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSh7uVK9CEGYbuzKX13uR53gDIEdQh15kag&usqp=CAU"
                    />
                </div>
            </div>

            {/* Header Options */}
            <HeaderOptions />

        </header>
    )
}

export default Header
