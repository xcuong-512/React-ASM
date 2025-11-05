import React from 'react'
import './TVShows.css'
import TitleCards from '../../components/TitleCards/TitleCards'

const TVShows = () => {
    return (
        <div className='tvshows'>
            <div className="tvshows-hero">
                <h1>TV Shows</h1>
                <p>Explore the best television series, trending now and all-time favorites.</p>
            </div>

            <div className="tvshows-sections">
                <TitleCards title={"Popular Series"} />
                <TitleCards title={"Trending Now"} />
                <TitleCards title={"Top Rated TV Shows"} />
            </div>
        </div>
    )
}

export default TVShows
