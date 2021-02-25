import React from 'react'

const Part = ({ partName, exercises }) => {
    return (
        <>
            <p>
                {partName} {exercises}
            </p>
        </>
    );
}

export default Part