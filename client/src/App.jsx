import { Routes, Route } from 'react-router-dom';

import React from 'react'
import LinksOnTop from './components/linksOnTop/LinksOnTop'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Plans from './components/plans/Plans'
import About from './components/about/About'
import Contact from './components/contact/Contact'


function App() {


    return (
        <>
            <LinksOnTop />

            <Routes>

                <Route path="/" element={<Content />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>


            <Footer />
        </>
    )
}

export default App
