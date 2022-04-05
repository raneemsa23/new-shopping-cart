import "./App.css";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Nav from "./components/Nav/Nav";
export default function App() {
	return (
	<BrowserRouter>
		<div className="layout">
			<Header className="layout-header" />
			<Nav/>
		<Routes>
         <Route path="/" element={<Home/>} exact/>
		 <Route path="/orders" element={<Orders/>} exact/>
		</Routes>
			<Footer className="layout-footer" />
		</div>
	</BrowserRouter>
	);
}
