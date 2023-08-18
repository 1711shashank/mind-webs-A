import './FeaturesRow.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const FeaturesRow = ({ cardData, activeButton, setActiveButton }) => {

    return (
        <>
            <div className='featuresRow'>
                {
                    cardData.map((card, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveButton(index)}
                            className={`features-button ${activeButton === index ? 'activeButton' : ''}`}
                        >
                            {card.left.icon}
                            {card.left.title}
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
