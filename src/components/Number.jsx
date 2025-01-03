import React, { useState, useEffect } from 'react';

const Number = () => {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        function addNumbers(num1, num2) {
            return num1 + num2;
        }
        let result = addNumbers(10, 15);
        setSum(result); 
    }, []); 

    return (
        <div>
            <h2 className="text-center font-bold text-4xl text-black pt-10">Add Two Numbers using Function</h2>
            <p id="result" className='text-center font-medium text-3xl pt-5'>The sum is: {sum}</p>
        </div>
    );
};

export default Number;
