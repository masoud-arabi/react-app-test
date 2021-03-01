import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Components/Greeting';
import Clock from './Components/Clock';

    const App = ()=> (
        <div>
            <Greeting name='masoud' age={12}/>
            <Clock />
        </div>
        );
    

    const htmlRoot = document.getElementById('root');
    ReactDOM.render(<App />, htmlRoot);
