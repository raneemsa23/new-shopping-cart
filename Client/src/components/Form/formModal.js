import React from "react";
import Modal from "react-modal";
import "./formModal.css";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../../store/orderSlice";
import { clearCart } from "../../store/cartSlice";
export default function FormModal(props) {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	let { order } = useSelector((state) => state.order);
	function closeModal() {
        props.setIsShow(false)
		// console.log(order);
		// order={};
		//  props.setChecked(false)
		dispatch(clearOrder());
        dispatch(clearCart())
	}
	console.log("formmodel", order);
	return (
		<div>
			{order && (
				<Modal isOpen={order} onRequestClose={closeModal}>
					<span className="Modal close-icon " onClick={closeModal}>
						&times;
					</span>
					<div className="alert-success alert text-center">
						Order Successfuly
					</div>
					<table>
						<tr>
							<td>Name:</td>
							<td>{order.name}</td>
						</tr>
						<tr>
							<td>Email:</td>
							<td>{order.email}</td>
						</tr>
						<tr>
							<td>Total:</td>
							<td>
								{cartItems.reduce((acc, p) => {
									return acc + p.price;
								}, 0)}
							</td>
						</tr>
						<tr>
							<td>Number of this product is :</td>
							<td>{cartItems.length}</td>
						</tr>
						<tr>
							<td>Tiltle of product</td>
							<td>
								{cartItems.map((p) => (
									<span key={p.id}>{p.title + " "}</span>
								))}
							</td>
						</tr>
					</table>
				</Modal>
			)}
		</div>
	);
}
