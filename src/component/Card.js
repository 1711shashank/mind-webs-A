import React from 'react'
import './Card.css';
import CardLeft from './CardLeft';
import CardRight from './CardRight';

const Card = ({cardData}) => {

    
    return (
        <>
            <div className='card'>
                <CardLeft data={cardData.left}/>
                <CardRight data={cardData.right}/>
            </div>
        </>
    )
}

export default Card