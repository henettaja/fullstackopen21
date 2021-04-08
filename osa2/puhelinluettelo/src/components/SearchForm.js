import React from "react"

const SearchForm = ({ searchValue, searchChangeHandler }) => {
	return (
		<>
			<div>
				search: <input value={searchValue} onChange={searchChangeHandler} />
			</div>
		</>
	)
}

export default SearchForm
