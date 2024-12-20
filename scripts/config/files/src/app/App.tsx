import './App.scss';
import { useEffect, useState } from 'react';

const App = () => {

    const [name, setName] = useState('React App');

    useEffect(() => {

        console.log(`Welcome to ${name}`);

    }, []); // eslint test. this should display an error if eslint is working

    return (
        <div className='app-wrap'>
            <h1>React App initialized</h1>
        </div>
    );
};

export default App