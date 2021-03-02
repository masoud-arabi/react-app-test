import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Components/Greeting';
import Clock from './Components/Clock';
import PersonList from './Components/PersonListFile/PersonList';

    const App = ()=> (
        <div>
            <Greeting name='masoud' age={12}/>
            <Clock />
            <PersonList />
        </div>
        );
    

    const htmlRoot = document.getElementById('root');
    ReactDOM.render(<App />, htmlRoot);
