import React from 'react'

export default function ProductSelect(props) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderLeft:'1px black solid',width:'95%',margin:'10px',textAlign:'left',paddingLeft:'10px',paddingRight:'5px'}}>
        <div>
        <p>{props.val.productName}</p>
        <p style={{fontWeight:'bold',fontSize:'20px'}}>₪ {props.val.productPrice} </p>
        <button style={{backgroundColor:'red',height:'25px',width:'180px',color:'white'}}  onClick={()=>{
          props.delet(props.ind)
        }}>delete  product</button>
        </div>
        <img style={{height:'90px',width:'120px'}} src={props.val.productImg} alt="" />
    </div>
  )
}
