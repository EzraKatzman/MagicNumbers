import { Link } from 'react-router-dom'
import hero from '../Images/unsplash.png'

const Home = () => {
    return (
      <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto dark:text-tgray-100'>
        <section className='m-4'>
          <div className='text-center'>
            <h2 className='font-semibold text-4xl p-4'>Sharpen your number skills</h2>
            <p className='text-lg text-tgray-600 dark:text-tgray-300'>Select from one of three difficulties, and race against the clock!</p>
            
            <div className='p-2 mt-2'>
              <p className='text-md p-2 m-2'>Sign up to track your high scores</p>
              <Link to='/signup' className='p-2 px-2 text-md font-bold text-tgray-50 bg-purple-600 dark:bg-purple-700 hover:bg-purple-700 dark:hover:bg-purple-600 rounded-full shadow-md'>Join Now</Link>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center my-12'>
            <img src={hero} alt='Hero Image' className='mx-auto'/>
          </div>
        </section>
        <section className='m-4'>
          <div className='text-center'>
            <h2 className='font-semibold text-4xl p-4'>Features</h2>
            <div className='sm:flex sm:justify-center sm:items-center'>
              <div className='m-2 p-2 sm:w-1/3'>
                <svg className='block mx-auto h-12 w-12 m-2 p-1 text-tgray-50 bg-lime-600 dark:bg-lime-700 rounded-md' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' />
                </svg>
                <h3 className='font-semibold dark:text-tgray-100'>Auto-generated Math Problems</h3>
                <p className='text-tgray-700 dark:text-tgray-300'>Magic Numbers generates its own math problems, and ensures that each one as a clean solution</p>
              </div>
              <div className='m-2 p-2 sm:w-1/3'>
                <svg className='block mx-auto h-12 w-12 m-2 p-1 text-tgray-50 bg-cyan-600 dark:bg-cyan-700 rounded-md' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                </svg>
                <h3 className='font-semibold dark:text-tgray-100'>3 Difficulty Levels</h3>
                <p className='text-tgray-700  dark:text-tgray-300'>Pick between easy, medium, and hard difficulties and improve your math reflexes</p>
              </div>
              <div className='m-2 p-2 sm:w-1/3'>
                <svg className='block mx-auto h-12 w-12 m-2 p-1 text-tgray-50 bg-red-600 dark:bg-red-700 rounded-md' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                <h3 className='font-semibold dark:text-tgray-100'>Leaderboards</h3>
                <p className='text-tgray-700 dark:text-tgray-300'>See if you have what it takes to get your name on the list of top performers</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Home
