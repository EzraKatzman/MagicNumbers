import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto dark:text-tgray-100">
            <h3>Login Page (as well as sign-up), where users can create accounts or login</h3>
            <p>I wanna make this a modal at some point</p>
            <Link to='/signup' className='text-center italic'>New user? Create an account here!</Link>
        </div>
    )
}

export default Login
