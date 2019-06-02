import React from 'react'



export default function TableRow(props) {





	return (

		<div>
			<hr className="table-hr-light" size='1'/>
			<div className="table-row">

				<div >
					<span style={{color: '#b9b6b6'}}>{props.index + 1} &nbsp; &nbsp;</span>
				</div>
				<div className="artist">
					<span>{props.track.artist} &nbsp; - &nbsp;</span>
				</div>
				<div className="title">
					<span>{props.track.title}</span>
				</div>
			</div>
		</div>
	)
}