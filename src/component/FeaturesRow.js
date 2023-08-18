import './FeaturesRow.css'
import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';


const FeaturesRow = () => {
    const buttonList = [
        { label: 'Explain Code', icon: <MessageOutlinedIcon sx={{ marginRight: '1rem', fontSize: '2.2rem' }} /> },
        { label: 'Regex', icon: <p style={{ fontWeight: '700', marginRight: '1rem', fontSize: '2.2rem' }}> (.*) </p> },
        { label: 'Convert Code', icon: <MultipleStopIcon sx={{ marginRight: '1rem', fontSize: '2.2rem' }} /> },
        { label: 'Fix Grammar', icon: <CreateIcon sx={{ margin: '0px 10px 0 0', fontSize: '2.2rem' }} /> },
        { label: 'Top', icon: <AssignmentIcon sx={{ marginRight: '1rem', fontSize: '2.2rem' }} /> },
    ];

    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    return (
        <>
            <div className='featuresRow'>
                {
                    buttonList.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            className={`features-button ${activeButton === index ? 'activeButton' : ''}`}
                        >
                            {button.icon}
                            {button.label}
                        </button>
                    ))
                }
                <img className='openAI-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/768px-OpenAI_Logo.svg.png?20230731013808" alt='' />

            </div>
            <div className='featuresRow-bottomText' style={{ width: '65%', display: 'flex' }}>
                <p>Example of AI for Programming</p>
                <p>Example of AI for Content</p>
            </div>

            <div className='free-signup-bg-wt'>
                <PersonAddIcon sx={{ margin: '2px 10px 0 0', fontSize: '2.2rem' }} />
                Free Signup
            </div>
        </>
    );
}

export default FeaturesRow;
