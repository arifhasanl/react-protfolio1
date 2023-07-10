import React from 'react';
import  './section.css'
const Section = ({heading,para}) => {
    return (
        <div className='mb-10 relative section-title ml-3 '>
            <h2 className='text-5xl font-bold uppercase text-gray-800'>{heading}</h2>
            <p className='text-2xl mt-2'>{para}</p>
        </div>
    );
};

export default Section;