import React from 'react'
import './Card.css';
import CardLeft from './CardLeft';
import CardRight from './CardRight';

const Card = () => {

    const cardData = {
        left: {
            title: 'Explain Code',
            description: 'Explain some Code based on the syntax provided',
            placeholder: 'print("Hello World")',
        },
        right: {
            title: 'What does this code do?',
            subtitle:'The following code does:',
            steps: [
                'The above code is a function definition.',
                'It defines a new function called `Hello World` that takes a single argument called `text`',
                'The body of the function is a single line of code that prints out the value of the `text` if it is defined, or `Hello World` if it is not defined.',
            ],
        },
    };
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