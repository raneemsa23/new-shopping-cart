import React, { useState } from "react";
import "../../css/Form/Form.css";
import Input from "../Input/Input";
import Fade from "react-reveal/Fade";
import FormModal from "./formModal";
export default function Form(props) {
	const [val, setVal] = useState("");
	const [checked,setChecked]=useState(true)
	const [order,setOrder]=useState(false)
	function handleSubmit(e) {
		e.preventDefault();
		let order = {
			name: val.name,
			email: val.email,
		};
		setOrder(order)
		setChecked(true)
		console.log("order", order);
	
	}
	function handleChange(e) {
		setVal({ ...val, [e.target.name]: e.target.value });
	}
	return (
		<div>

		
		<Fade right>
			<div className="form">
				<span className="close-icon" onClick={() => props.setIsShow(false)}>
					&times;
				</span>

				<form onSubmit={handleSubmit}>
					<Input
						name="name"
						type="text"
						handleChange={handleChange}
						label="Name"
					/>

					<Input
						name="email"
						type="text"
						handleChange={handleChange}
						label="Email"
					/>
					<div>
						<button className="btn btn-primary w-100" type="submit">
							checkout
						</button>
					</div>
				</form>
			</div>
			
		</Fade>
		    {
				order&&checked&&<FormModal order={order} setOrder={setOrder}/>
			}

		</div>
	);
}
