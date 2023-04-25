import {FC} from 'react';
import '../styles/home.css';

const Home: FC = () => {
    return (
        <div className='homeWrapper'>
            <h1>Hello. <br></br>This is one more project that was developed using TypeScript. 
            Please visit "Store" page to check what this application can do =).
            </h1>
        </div>
    ) 
}

export default Home;

// style={{ color: '#3c5e91', fontFamily: 'cursive' }}