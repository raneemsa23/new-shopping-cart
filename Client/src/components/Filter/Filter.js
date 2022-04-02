import React, { useEffect, useState } from 'react'
import '../../css/Filter/Filter.css'
import Bounce from 'react-reveal/Bounce';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySize, filterBySort } from '../../store/filterSlice';

export default function Filter(props) {
  const {products}=useSelector(state=>state.product)
 
  const {filteredArray}=useSelector(state=>state.filter)
  console.log(filteredArray);
    const {size}=useSelector(state=>state.filter)
    const {sort}=useSelector(state=>state.filter)

  const dispatch=useDispatch()
  function handleFilterBySize(e){

    let size=e.target.value
   
    dispatch(filterBySize({products,size}))
  }
  function handeSort(e){
 let order=e.target.value
 dispatch(filterBySort({filteredArray,order,products}))
  }
  return (
    <Bounce right>
      <div className='filter'>
<h3 className='filter-title'>Filter</h3>
<p>Number of products : <span>{filteredArray.length==0?products.length:filteredArray.length}</span></p>
<div>
    <h5 className='filter-title'>filter by size</h5>
    <select name="" id="" value={size} onChange={handleFilterBySize}>
        <option value="all">all</option>
        <option value="sm">sm</option>
        <option value="lg">lg</option>
        <option value="xl">xl</option>
        <option value="xs">xs</option>
        <option value="md">md</option>
    </select>
    <h5 className='filter-title'>order by</h5>
    <select name="" id="" onChange={handeSort}  value={sort}>
      <option value="latest">latest</option>
      <option value="lowest">lowest</option>
      <option value="heighest">heighest</option>
    </select>
</div>
</div>
        </Bounce>
  )
}
