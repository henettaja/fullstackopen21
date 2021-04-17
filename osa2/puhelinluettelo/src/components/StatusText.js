import React from "react"

const StatusText = ({ status }) => {
	if (status.err) {
		return <div className={"error"}>{status.msg}</div>
	} else {
		return <div className="status">{status.msg}</div>
	}
}

export default StatusText
