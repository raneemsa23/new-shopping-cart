import React from 'react'

// import Cart from "./components/Cart/Cart";
import Filter from "../components/Filter/Filter";

import Products from "../components/Products/Products";
import Cart from '../components/Cart/Cart';
export default function Home() {
  return (
    <div>
        
        	<main>
				
				<div className="wrapper">
					<div className="wrapper-products">
						<Products />
					</div>
					<div className="wrapper-filter">
						<Filter />
					</div>
				</div>
				<Cart />
			</main>
    </div>
  )
}
