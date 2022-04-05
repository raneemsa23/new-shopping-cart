import React from 'react'
import { NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <div className="nav">
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/orders">Orders</NavLink></li>
					</ul>
				</div>
    </div>
  )
}
