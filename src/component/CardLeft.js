import React from 'react';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const CardLeft = ({ data }) => {
    return (
        <div className="card-left">
            <div className="customFlex">
                <MessageOutlinedIcon sx={{ margin: '5px 10px 0 0', fontSize: '3rem' }} />
                <div style={{ fontSize: '2.5rem' }}>{data.title}</div>
            </div>

            <p className='card-subtitle'>{data.description}</p>

            <p style={{ fontSize: '1.6rem', fontWeight: '500', margin: '1.5rem 0 8px 0' }}>Paste your code below:</p>

            <textarea className="textarea" placeholder={data.placeholder} />

            <div className="free-signup" style={{ marginTop: 'auto' }}>
                <ContentCopyOutlinedIcon sx={{ margin: '2px 10px 0 0', fontSize: '2.2rem' }} />
                Enhance with AI
            </div>
        </div>
    );
};

export default CardLeft;
