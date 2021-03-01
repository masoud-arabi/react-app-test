
import React from 'react';
import PropTypes from 'prop-types';


const Greeting = ({age , name})=>{
    return (
        <div>
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