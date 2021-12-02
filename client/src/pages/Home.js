import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Nabvar from '../components/Nabvar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slide  from '../components/Slider'

function Home() {
    return (
        <div>
            <div className="container">
                <Announcement />
                <Nabvar />
                <Slide />
                <Categories />
                <Products/>
                <Newsletter />
                <Footer />
            </div>
        </div>
    )
}

export default Home
