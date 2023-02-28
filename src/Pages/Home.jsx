import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {
const history = useNavigate();
  return (
    <>
    <Navbar/> 
    <div className='homeemain'>
        <h1 className='hell'> <span className='fontt'>Hello!</span> welcome to UserVerse.</h1>
        <br />
        <button className='clickk' onClick={()=> history("/signup")}>Let's Go</button>
        <h4 className='jk'>Find random users and their details in an UserVerse.</h4>
        <h5 className='ok'>User Universe Browse and Explore a Comprehensive Database of Random User Information from Around the World</h5>
    </div>
    {/* <div class="book">
    <p>Hello</p>
    <div class="cover">
        <p>Hover Me</p>
    </div>
   </div>  */}
    <Footer/>
    </>
  )
}

export default Home