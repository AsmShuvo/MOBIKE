import React from 'react';

const CoverPage = ({ img, text, heading }) => {
    const containerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh', // Adjust as needed for your layout
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // Text color
        textAlign: 'center',
        padding: '2rem', // Adjust padding as needed
    };

    const contentStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a semi-transparent background to the text for better readability
        padding: '2rem',
        borderRadius: '10px',
        width: '400px', // Set the width to 400px
    };

    return (
        <div style={containerStyle} className='flex flex-col'>
            <div className='text-primary mb-5 plain tracking-widest text-lg'>
                {text}
            </div>
            <h1 className='text-7xl font-extrabold heading tracking-wider '>{heading}</h1>

        </div>
    );
};

export default CoverPage;
