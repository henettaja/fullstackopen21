import React from "react"
import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({ course }) => {

    const allExercises = course.parts.reduce((sum, part) => part.exercises + sum, 0)

    return (
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total exercises={allExercises} />
        </>
    )
}

export default Course