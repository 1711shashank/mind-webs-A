import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const CardRight = ({ data }) => {
    return (
        <div className="card-right" style={{ paddingRight: '4rem' }}>

            <div className="customFlex">
                <div className='icon-container-black'>   <KeyboardArrowRightIcon sx={{ margin: '5px 5px 3px 5px', fontSize: '3rem' }} />    </div>
                <p style={{ fontSize: '2.2rem', marginTop: '5px' }}>{data.title}</p>
            </div>

            <p className='card-subtitle'>{data.subtitle}</p>

            <CardPoints data={data} />

            <button className="copy-output">
                <ContentCopyOutlinedIcon sx={{ marginRight: '10px', fontSize: '1.6rem' }} />
                Copy output
            </button>
        </div>
    );
};

export default CardRight;
















const CardPoints = ({ data }) => {
    return (
        <>
            <div style={{ width: '100%' }}>
                {data.steps.map((step, index) => (
                    <div className="customFlex cardPoint" key={index}>
                        <div className='icon-container-gray'>
                            <KeyboardArrowRightIcon sx={{ margin: '5px 5px 3px 5px', fontSize: '2rem' }} />
                        </div>
                        <p style={{ fontSize: '1.6rem', textAlign: 'left' }}>{step}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
