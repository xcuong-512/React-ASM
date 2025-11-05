import React, { useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../assets/hero_banner.jpg'
import HeroTitle from '../../assets/hero_title.png'
import PLayIcon from '../../assets/play_icon.png'
import InforIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className='home'>
            <Navbar onSearch={setSearchTerm} />
            <div className="hero">
                <img src={HeroBanner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={HeroTitle} alt="" className='caption-img' />
                    <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a
                        quest to save the city from an immortal enemy.
                    </p>
                    <div className="hero-btns">
                        <button className='btn'><img src={PLayIcon} alt="" />Play</button>
                        <button className='btn dark-btn'><img src={InforIcon} alt="" />More Info</button>
                    </div>
                    <TitleCards searchTerm={searchTerm} />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} searchTerm={searchTerm} />
                <TitleCards title={"Only on Cineon"} category={"popular"} searchTerm={searchTerm} />
                <TitleCards title={"Upcoming"} category={"upcoming"} searchTerm={searchTerm} />
                <TitleCards title={"Top Pics for You"} category={"now_playing"} searchTerm={searchTerm} />
            </div>
            <Footer />
        </div>
    )
}

export default Home
