import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <section>
                <div className="text-center">
                    <h2 className="font-semibold text-4xl p-4">Sharpen your number skills</h2>
                    <p className="text-lg">Select from one of three difficulties, and race against the clock!</p>
                    
                    <div className='flex justify-center p-2'>
                        <p className='text-lg p-2'>Sign up to track your high scores</p>
                        <Link to='/signup' className='px-2 py-2 font-bold bg-gray-900 hover:bg-gray-700 text-gray-50 rounded-full'>Join Now</Link>
                    </div>
                    
                </div>
            </section>
            <section>
                <div className="text-center">Image preview of the actual math thing?</div>
            </section>
            <section>
                <div className="text-center">
                    <h2 className="font-semibold text-4xl p-4">Features</h2>
                    <div className='sm:flex sm:justify-center sm:items-center'>
                        <div className='border-black m-2 p-2 w-1/3'>
                            <h3 className="font-semibold">Auto-generated Math Problems</h3>
                            <p>Magic Numbers generates its own math problems, and ensures that each one as a clean solution</p>
                        </div>
                        <div className='border-black m-2 p-2 w-1/3'>
                            <h3 className="font-semibold">3 Difficulty Levels</h3>
                            <p>Pick between easy, medium, and hard difficulties and improve your math reflexes</p>
                        </div>
                        <div className='border-black m-2 p-2 w-1/3'>
                            <h3 className="font-semibold">Leaderboards</h3>
                            <p>See if you have what it takes to get your name on the list of top performers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
