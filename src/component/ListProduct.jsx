import React from 'react'
import ShowProduct from './ShowProduct'
import productsListArr from './arrProduct'

export default function ListProduct(props) {
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',margin:'10px  '}}>
        {
            productsListArr.map((val,index,all)=>{
               return <ShowProduct all={all} val={val} kye={index} select = {props.select} />
            })
        }
    </div>
  )
}
