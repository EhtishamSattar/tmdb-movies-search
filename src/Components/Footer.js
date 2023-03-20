import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 relative -top-28">
                <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://www.themoviedb.org/" className="flex items-center mb-4 sm:mb-0">
                            <span className="self-center text-2xl font-mono whitespace-nowrap text-blue-600 font-extrabold">TMDB </span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Policies</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Rating</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Go Premier</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©  <a href="https://www.themoviedb.org/" className="hover:underline">The Movie DataBase </a>. All Rights Reserved.</span>
                </div>
            </footer>

        </>
    )
}

export default Footer
