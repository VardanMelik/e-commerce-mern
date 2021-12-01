import React from 'react'
import Announcement from '../components/Announcement'
import Nabvar from '../components/Nabvar'
import Slide  from '../components/Slider'

function Home() {
    return (
        <div>
            <div className="container">
                <Announcement />
                <Nabvar />
                <Slide />
            </div>
        </div>
    )
}

export default Home
