import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    //handleAdd
    const handleIncrement = (e, increment) => setCounter(counter + increment);
    const handleReset = (e) => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={(e) => handleIncrement(e, -1)}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={(e) => handleIncrement(e, 1)}>+1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

// CounterApp.defaultProps = {
//     value: 0
// };

export default CounterApp;