import { useState } from 'react'
import { Link } from 'react-router-dom'
import DarkToggle from './DarkToggle'

const Navbar = () => {
    const [isOpen, setView] = useState(false)

    return (
        <header className='sm:grid sm:grid-cols-3 sm:items-center py-4 px-2 border-b border-tgray-200 mb-14 sm:mb-20 xl:mb-8 dark:bg-tgray-900'>
            <div className='flex items-center justify-between px-4 sm:p-0'>
                <div>
                    <Link to='/' className='block font-semibold rounded italic logo dark:text-tgray-200 '>Magic Numbers</Link>
                </div>
                <div className='sm:hidden'>
                    <button onClick={() => setView(!isOpen)} type='button' className='block focus:outline-none'>
                        <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                            <path className={isOpen ? 'block dark:text-gray-50' : 'hidden'} fillRule='evenodd' d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'/>
                            <path className={isOpen ? 'hidden' : 'block dark:text-gray-50'} fillRule='evenodd' d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'/>
                        </svg>
                    </button>
                </div>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} px-4 py-2 pb-4 sm:flex sm:p-0 text-center uppercase justify-self-center`}>
              <Link to='/problems' className='block my-1 px-2 py-1 font-semibold hover:bg-tgray-200 dark:hover:bg-tgray-800 dark:text-tgray-50 rounded-full'>Problems</Link>
              <Link to='/leaders' className='block my-1 px-2 py-1 font-semibold hover:bg-tgray-200 dark:hover:bg-tgray-800 dark:text-tgray-50 rounded-full'>Leaderboard</Link>
              <Link to='/login' className='block my-1 px-2 py-1 font-semibold hover:bg-tgray-200 dark:hover:bg-tgray-800 dark:text-tgray-50 rounded-full'>Login</Link>
              <Link to='/signup' className='block my-1 px-2 py-1 font-semibold hover:bg-tgray-200 dark:hover:bg-tgray-800 dark:text-tgray-50 rounded-full'>Sign up</Link>
              <div className='block sm:hidden px-2 py-1'>
                <DarkToggle ></DarkToggle>
              </div>
            </nav>
            <div className='hidden sm:block px-4 py-2 pb-4 sm:p-0 justify-self-end'>
                <DarkToggle></DarkToggle>
            </div>
        </header>
    )
}

export default Navbar
