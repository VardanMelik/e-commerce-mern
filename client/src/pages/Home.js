import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Nabvar from '../components/Nabvar'
import Slide  from '../components/Slider'

function Home() {
    return (
        <div>
            <div className="container">
                <Announcement />
                <Nabvar />
                <Slide />
                <Categories />
            </div>
        </div>
    )
}

export default Home
