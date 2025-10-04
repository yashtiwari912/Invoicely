import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Plan from '@/components/Plan'
import Testimonials from '@/components/Testimonials'

import React from 'react'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Testimonials />
            <Plan />
            <Faq />
            <Footer />

        </>
    )
}
