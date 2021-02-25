import React, { useState } from "react"
import Content from "./Content"
import Header from "./Header"

const Course = ({ course }) => {

    return (
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course;