import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto dark:text-tgray-100">
            <h3>Signup page where new users can create an account</h3>
            <p>This might also become a modal? Not 100% sure yet</p>
            <Link to='/login' className='text-center italic'>Already have an account? Login here</Link>
        </div>
    )
}

export default Signup
