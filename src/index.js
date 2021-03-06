// import React,{useState} from 'react';
// import ReactDOM from 'react-dom';
// import Greeting from './Components/Greeting';
// import Clock from './Components/Clock';
// import PersonList from './Components/PersonListFile/PersonList';
// import LifeCycle from './ComponentsTest/LifeCycle';

//     const App = ()=> {
//         const [show, setShow] = useState(true);
//         return(
//             <div>
//                 {/* <Greeting name='masoud' age={12}/>
//                 <Clock />
//                 <PersonList /> */}
//                 {show && <LifeCycle />}
//                 <button onClick={()=> setShow(false)}>Don't show it</button>
//             </div>
//         );
//     }
    

//     const htmlRoot = document.getElementById('root');
//     ReactDOM.render(<App />, htmlRoot);

import {createStore} from 'redux';

const CHANGE_NAME = "change_name"
function myReducer(state = {name:'No Name'}, action){
    if (action.type === CHANGE_NAME){
        return {
        ...state,
        name:action.name,
        };
    }
    return state;
}

const store = createStore(myReducer);

console.log("state : ",store.getState());

store.subscribe(()=>{
    console.log('sateAfter', store.getState());
});

store.dispatch({
    type: CHANGE_NAME,
    name:'shiela',
});
