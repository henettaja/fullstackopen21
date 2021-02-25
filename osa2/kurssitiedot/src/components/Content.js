import React from 'react'
import Part from "./Part";

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part, i) =>
                <Part partName={parts[i].name} exercises={parts[i].exercises} />
            )}
        </>
    )
}

export default Content;