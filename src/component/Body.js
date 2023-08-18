import React, { useState } from 'react'
import './Body.css'
import Card from './Card'
import { cardData } from './helperFunction';
import shape1 from '../assets/shape1.png';
import shape2 from '../assets/shape2.png';
import FeaturesRow from './FeaturesRow';



const Body = () => {

    const [activeButton, setActiveButton] = useState(0);

    const activeCardData = cardData.find(card => card.left.title === cardData[activeButton].left.title);


    return (
        <>
            <div className='body'>
                <p className='body-title'> AI to write code, blogs & more</p>
                <p className='body-plainText'> Enhance everything you do by using the latest from OpenAl to solve <br /> problems, write solutions and make life easier. </p>

                <button className='get-started'> Get Started </button>

                <Card cardData={activeCardData} />
                <FeaturesRow cardData={cardData} activeButton={activeButton} setActiveButton={setActiveButton} />

            </div>

            <div className='colored-background'></div>
            <img src={shape1} className='shape1' alt='' width='100%' />
            <img src={shape2} className='shape2' alt='' width='100%' />

        </>
    )
}

export default Body