import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Components/Greeting';
import Clock from './Components/Clock';
import PersonList from './Components/PersonListFile/PersonList';
import LifeCycle from './ComponentsTest/LifeCycle';

    const App = ()=> {
        const [show, setShow] = useState(true);
        return(
            <div>
                {/* <Greeting name='masoud' age={12}/>
                <Clock />
                <PersonList /> */}
                {show && <LifeCycle />}
                <button onClick={()=> setShow(false)}>Don't show it</button>
            </div>
        );
    }
    

    const htmlRoot = document.getElementById('root');
    ReactDOM.render(<App />, htmlRoot);
