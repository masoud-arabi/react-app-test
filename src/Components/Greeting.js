
import React from 'react';
import PropTypes from 'prop-types';

const onClick = (e)=>{
    console.log('from component');
}
const Greeting = ({age , name})=>{
    return (
        <div>
            <button onClick={onClick}>cliack here</button>
            hello world {name} {age}
        </div>
    );
};


Greeting.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
};

Greeting.defaultProps = {
    name: 'User',
};



export default Greeting;