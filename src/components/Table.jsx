import React, { useState, useEffect } from 'react';

const Table = () => {
    const [table, setTable] = useState([]);

    useEffect(() => {
        const number = 2; 
        const result = [];
        for (let i = 1; i <= 10; i++) {
            result.push(`${number} * ${i} = ${number * i}`);
        }
        setTable(result); 
    }, []); 

    return (
        <div>
            <h2 className="text-center font-bold sm:text-4xl text-2xl text-black pt-10">Table of 2</h2>
            <ul className=" text-center pt-5 font-medium ">
                {table.map((line, index) => (
                    <li key={index} className="sm:text-3xl text-xl">{line}</li>
                ))}
            </ul>
        </div>
    );
};

export default Table;