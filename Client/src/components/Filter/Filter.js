import React from 'react'
import '../../css/Filter/Filter.css'
export default function Filter(props) {
  return (
    <div className='filter'>
        <h3 className='filter-title'>Filter</h3>
        <p>Number of products : <span>{props.filterArray.length==0?props.products.length:props.filterArray.length}</span></p>
        <div>
            <h5 className='filter-title'>filter by size</h5>
            <select name="" id="" value={props.size} onChange={props.handleFilterBySize}>
                <option value="all">all</option>
                <option value="sm">sm</option>
                <option value="lg">lg</option>
                <option value="xl">xl</option>
                <option value="xs">xs</option>
                <option value="md">md</option>
            </select>
            <h5 className='filter-title'>order by</h5>
            <select name="" id="" onChange={props.handleSort} value={props.sort}>
              <option value="latest">latest</option>
              <option value="lowest">lowest</option>
              <option value="heighest">heighest</option>
            </select>
        </div>
    </div>
  )
}
