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

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



const CHANGE_NAME = "change_name";
const FETCH_TODO_LIST = 'FETCH_TODO_LIST';

function myReducer(state = {name:'No Name'}, action){
    if (action.type === CHANGE_NAME){
        return {
        ...state,
        name: action.name,
        };
    }else if (action.type === FETCH_TODO_LIST){  
        return {
            ...state,
            toDoList: action.payload,
            };
    }
    return state;
}

const logger = store => next => action =>{
    console.log('before middle ware', store.getState());
    const result = next(action);
    console.log('after middle ware', store.getState());
    return result;
}

const store = createStore(myReducer, applyMiddleware(logger, thunk));

// console.log("state : ",store.getState());

store.subscribe(()=>{
    // console.log('sateAfter', store.getState());
});

store.dispatch({
    type: CHANGE_NAME,
    name:'shiela',
});

const fetchTodoList = () =>{
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response =>{
                response.json().then(data =>{
                    dispatch({
                        type: FETCH_TODO_LIST,
                        payload: data,
                    })
                })
            })
            .catch(error => {})
    }
};

store.dispatch(fetchTodoList()); 

// ---------------------------------------