import React, { useState, useEffect } from 'react';

const Loop = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        const rows = 5;
        const cols = 5;
        const result = [];
        for (let i = 0; i < rows; i++) {
            let row = "";
            for (let j = 0; j < cols; j++) {
                row += "* "; 
            }
            result.push(row.trim()); 
        }

        setName(result);
    }, []);

    return (
        <div>
            <h2 className="text-center font-bold sm:text-4xl text-2xl text-black pt-10 pb-5">
                Star using nested loop
            </h2>
            <div className="text-center">
                {name.map((row, index) => (
                    <p key={index} className="sm:text-3xl text-xl">{row}</p>
                ))}
            </div>
        </div>
    );
};

export default Loop;
