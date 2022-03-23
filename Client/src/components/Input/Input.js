import React from "react";

export default function Input(props) {
	return (
		<div>
			<label htmlFor="">{props.label}</label>
			<input
				type={props.type}
				name={props.name}
				id=""
				required
				className="w-100 mb-3"
				onChange={props.handleChange}
			/>
		</div>
	);
}
