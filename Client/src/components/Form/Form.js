import React, { useState } from "react";
import "../../css/Form/Form.css";
import Input from "../Input/Input";
import Fade from "react-reveal/Fade";
import FormModal from "./formModal";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../store/orderSlice";
import { clearCart } from "../../store/cartSlice";
export default function Form(props) {
	const [val, setVal] = useState("");
	const [checked,setChecked]=useState(false)
	// const [order,setOrder]=useState(false)
	const {order}=useSelector(state=>state.order)
    const dispatch=useDispatch()
	function handleSubmit(e) {
		e.preventDefault();
		
		let orderItem = {
			name: val.name,
			email: val.email,
		};
		// setOrder(order)
		dispatch(postOrder(orderItem))
		// console.lo;
		dispatch(clearCart())
		setChecked(true)
		console.log("orderrr", order);
	
	
	}
	function handleChange(e) {
		setVal({ ...val, [e.target.name]: e.target.value });
	}
	console.log("vall",val);
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
		{<FormModal setIsShow={props.setIsShow}/>}
		    {/* {
				order&&checked&&<FormModal setChecked={setChecked}  />
			} */}

		</div>
	);
}
