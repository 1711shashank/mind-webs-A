import React, { useState } from 'react';

import './Header.css';
import logo from '../assets/logo.png';
import shape4 from '../assets/shape4.png';
import shape3 from '../assets/shape3.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const Header = () => {
    const [activeItem, setActiveItem] = useState('Home'); // Initialize active item

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <>
            <div className='header'>
                <img className='shape4' src={shape4} alt='' width='100%' />
                <img className='logo' src={logo} alt='' width='100%' />
                <div className="header-company-name">Enhance AI</div>
                <div className='nav-list'>
                    <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')} > Home         </li>
                    <li className={activeItem === 'Features' ? 'active' : ''} onClick={() => handleItemClick('Features')} > Features         </li>
                    <li className={activeItem === 'Pricing' ? 'active' : ''} onClick={() => handleItemClick('Pricing')} > Pricing        </li>
                    <li className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')} > Contact        </li>
                    <li className={activeItem === 'Login' ? 'active' : ''} onClick={() => handleItemClick('Login')} > Login          </li>
                </div>

                <div className='free-signup'>
                    <PersonAddIcon sx={{margin:'2px 10px 0 0', fontSize:'2.2rem'}}/>
                    Free Signup
                    </div>
                <img className='shape3' src={shape3} alt='' width='100%' />

            </div>
        </>
    );
};

export default Header;
