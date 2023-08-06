import React from 'react'
import wagon from './3.png'
import home from './4.png'
export default function Header(props) {
  return (
    <div style={{background:'rgb(007, 001, 001)',display:'flex',justifyContent:'space-between',alignItems:'center',height:'120px'}}>
        <p style={{background:"red",borderRadius:'50%',width:'20px',position:'absolute',top:'15px',left:'2px',color:'white'}}>{props.numP.length}</p>
        <img className='pages' onClick={()=>{
          if(props.selP.length !== 0){
            props.pag(2)}
            else{
              alert('No products selected')
            }
          }
          }
           style={{backgroundColor:'white',borderRadius:'50%',marginLeft:'10px',height:'50px',width:'50px',cursor:'pointer'}} src={wagon} alt="" />
        <h1 style={{color:'white',fontSize:'50px',}}>sv-shop</h1>
        <img className='pages' onClick={()=>{props.pag(1)}} style={{backgroundColor:'white',borderRadius:'50%',marginRight:'10px',padding:'5px',height:'45px',width:'45px',cursor:'pointer'}} src={home} alt="" />
    </div>
  )
}
