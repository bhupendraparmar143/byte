import React from 'react'
import './Home.css'
import homeImg from '../images/home-img.png'
import Contest from '../Contest-Page/Contest'
import Leaderboard from '../Leaderboard-Page/Leaderboard2'
import Footer from '../Footer-Page/Footer'
const Home = () => {
    return (<>
        <section>
            <div className="container-fluid homePage wow">
                <div className="inner-container">
                    <div className="inner-content">
                        <h1 className="wow welcome-line animate__animated animate__rotateInDownLeft">Welcome to the BYTE++ Society</h1>
                        <p className='text wow animate__animated animate__slideInUp'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae facilis deleniti culpa officia debitis modi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sed dolore placeat tempore sunt? Rerum harum quo iure quidem nobis suscipit iste dicta officia impedit magni, quasi sint excepturi animi.</p>
                    </div>
                    <img src={homeImg} className="wow home-img animate__animated animate__flipInY" alt="" />
                </div>
            </div>
        </section>
        <Contest/>
        <Leaderboard/>
        <Footer/>
    </>
    )
}

export default Home
