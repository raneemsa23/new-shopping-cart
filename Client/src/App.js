import React,{useState} from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import {data} from './data'
export default function App() {
	const [products,setProducts]=useState(data)
	return (
		<div className="layout">
			<Header className="layout-header" />
		<main>
		<div className="wrapper">
			<div className="wrapper-products">
			<Products products={products}/>
			</div>
			<div  className="wrapper-filter">
				filter
			</div>
		</div>
		</main>
			<Footer className="layout-footer"/>
		</div>
	);
}
