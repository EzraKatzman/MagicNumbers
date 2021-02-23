import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './Pages/Home'
import Problems from './Pages/Problems'
import Leaderboard from './Pages/Leaderboard'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

import Navbar from './Components/Navbar'

function App() {
    const isDark = useSelector(state => state.isDark)

    return (
    <Router>
      <div className={`${isDark ? 'dark' : ''} max-w-screen-lg xl:max-w-screen-xl mx-auto`}>
        <div> {/* class for this div will affect global background color for dark theme */} 
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/problems' component={Problems}/>
            <Route path='/leaders' component={Leaderboard}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
