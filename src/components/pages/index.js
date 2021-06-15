
import React from 'react'
import  MainTemplate  from '../templates/MainTemplate';
import Hero from '../Hero/Hero';
import PriceList from '../PriceList/PriceList';
import Opinion from '../Opinion/Opinion';
import LikeCar from '../LikeCar/LikeCar';
import Contact from '../Contact/Contact'


const IndexPage = () => {
    return (
        <MainTemplate>
            <Hero/>
            <PriceList/>
            <Opinion/>
            <LikeCar/>
            <Contact/>
        </MainTemplate>
    )
}

export default IndexPage
