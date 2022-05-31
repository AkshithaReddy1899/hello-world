import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
        <h1>Welcome to rails-react</h1>
        <Link to='/greetings' className='link-to'>Click here to go to greetings</Link>
    </div>
  )
}

export default Home