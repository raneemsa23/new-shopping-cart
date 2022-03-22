import React,{useEffect, useState} from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import {data} from './data'
export default function App() {
	const [products,setProducts]=useState(data)
	const [filterArray,setFilterArray]=useState([])
	const [size,setSize]=useState("all")
	const [sort,setSort]=useState("")
   
	const [filterbysort,setFilterbysort]=useState([])
    const[cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem("cartItems"))||[])

function handleAddToCart(item){
	let isExist=false;
	let cartItemsClone=[...cartItems]
	cartItemsClone.map(p=>{
		if(p.id==item.id){
			isExist=true;
			p.qty++

		}
		
	})
	if(!isExist){
		cartItemsClone.push({...item,qty:1})
	}
	setCartItems(cartItemsClone)
	
}
	function handleFilterBySize(e){
		setProducts(data)
		console.log("products",products);
		console.log("filterArray",filterArray);
		setSize(e.target.value);
		if(e.target.value==='all'){
			setProducts(data)
			setFilterArray([])
		}
		
		else{
			setFilterArray(products.filter(p=>p.size.indexOf(e.target.value)!= -1))
	
		}
		
		
	}
	function handleSort(e){

		setSort(e.target.value);
		let order =e.target.value
	    setFilterbysort(products.sort(function(a,b){
			if(order=="lowest"){
				return a.price -b.price
			}
			else if(order=="heighest"){
				return b.price -a.price
			}
			else if(order=='latest'){
				return b.id - a.id
			}
			

		}))
		
	}
 useEffect(()=>{
	 localStorage.setItem("cartItems",JSON.stringify(cartItems))
 },[cartItems])

	function removeFromCart(id){
     setCartItems(cartItems.filter(p=>p.id!=id))
	}
	return (
		<div className="layout">
			<Header className="layout-header" />
		<main>
		<div className="wrapper">
			<div className="wrapper-products">
			<Products
			 products={products} 
			 filterArray={filterArray}
			 handleAddToCart={handleAddToCart}/>
			</div>
			<div  className="wrapper-filter">
				<Filter 
			    sort={sort}
				size={size}
				handleSort={handleSort} 
				handleFilterBySize={handleFilterBySize} 
				filterArray={filterArray}
				products={products}
				/>
				
			</div>
			
		</div>
		<Cart cartItems={cartItems}
		removeFromCart={removeFromCart}/>
		</main>
			<Footer className="layout-footer"/>
		</div>
	);
}
