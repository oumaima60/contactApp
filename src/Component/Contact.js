import React from 'react';

export default function Contact({txt,tel,vill,delf}) {
  return (
    
    <div style={{textAlign:"center",border:"dotted",width:"950px",marginLeft:"2%"}}>

      <input type='text' style={{width:'15%',backgroundColor:"darkgray ",border:"none",marginLeft:"50px",marginRight:"50px"}} readOnly value={txt} />
      <input type='tel'  style={{width:'15%',backgroundColor:"darkgray ",border:"none",marginLeft:"50px",marginRight:"50px"}} readOnly value={tel}/>
      <input type='text'    style={{width:'15%',backgroundColor:"darkgray ",border:"none",marginLeft:"50px",marginRight:"50px"}} readOnly value={vill}/>
      <input type='button' className='btn btn-outline-dark'  onClick={delf}  value="supprimer" style={{width:'9%',textAlign:"center",fontSize:"13px"}}/>
     
    </div>
   
  );
}
