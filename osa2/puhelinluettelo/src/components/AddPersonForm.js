import React from 'react'

const AddPersonForm = (props) => {

    const { formHandler, nameChangeHandler, numChangeHandler, nameValue, numberValue } = props

    return (
        <>
            <form onSubmit={formHandler}>
                <div>
                    name: <input value={nameValue} onChange={nameChangeHandler} />
                </div>
                <div>
                    number: <input value={numberValue} onChange={numChangeHandler} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    );
}

export default AddPersonForm;