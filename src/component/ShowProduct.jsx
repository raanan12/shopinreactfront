import React from 'react'
import '../App.css'

export default function ShowProduct(props) {
  return (
    <div className='product' style={{margin:'5px',padding:'5px',width:'270px',marginTop:'20px'}}>
        <img style={{height:'235px',width:'255px',borderRadius:'10px'}} src={props.val.productImg} alt="" />
        <p>{props.val.productName}</p>
        <p style={{fontWeight:'bold',fontSize:'20px',textAlign:'right'}}>₪ {props.val.productPrice} </p>
        <button style={{background:'green',color:'white',border:'none',borderRadius:'4px',height:'25px',width:'150px'}} onClick={()=>{props.select(props.all[props.kye])}}>הוספה לסל</button>
    </div>
  )
}
