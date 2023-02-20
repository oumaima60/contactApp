import React, {useState,useRef } from 'react'
import {v4 as uuid} from 'uuid';
import Contact from './Contact';


export default function FormContact () {
  const[contacts,setContacs]=useState([
    {
      id:uuid(),name:'Oumaima ouahabi',tel:'0798654312',ville:'tanger'
    },
    {
      id:uuid(),name:'Amina Radi',tel:'0798654312',ville:'casablanca'
    },
    {
      id:uuid(),name:'Yahya mehyaoui',tel:'069876245',ville:'Tanger'
    },
    {
      id:uuid(),name:'Khadja mosaoui',tel:'0798654321',ville:'Agadir '

    },
    {
      id:uuid(),name:'Rajae sabiri',tel:'098765343',ville:'souira '

    }


  ]);
  const name=useRef();
  const tel=useRef();
  const ville=useRef();

  const[search,setsearch]=useState('');

  const addC=()=>{
    const nom= name.current.value;
    const tele=tel.current.value;
    const villle=ville.current.value;
    setContacs([...contacts,{name:nom,tel:tele,ville:villle}]);
    name.current.value='';
    tel.current.value='';
    ville.current.value='';
  };
  const del=(idC)=>{
    let ncontact=contacts.filter((t)=>{
      return t.id!==idC
    })
    setContacs(ncontact);
  }
  const triercroissant=()=>{
    const contacttrier=contacts.slice().sort((a,b) => a.name.localeCompare(b.name));
    setContacs(contacttrier);
  }
  const trierdecroissant =()=>{
    const contacttrier=contacts.slice().sort((b,a) => a.name.localeCompare(b.name));
    setContacs(contacttrier);

  }


  return (
    < div className='App' style={{width:"80%",border:"dotted",marginLeft:"10%",paddingTop:"5%",paddingBottom:"5%",backgroundColor:"darkgray   "}}>
    <h1 style={{textAlign:"center",fontFamily:"fantasy"}} >CONTACT APP</h1>
    &nbsp;&nbsp;
   
   <br/><br/>
   
   
    <div className='row justify-content-center' >
    <div className='mt-5 py-3 col-6' style={{backgroundColor:'white'}}>
    
    <div style={{backgroundColor:"darkgray   "}}>
    <form action='' style={{textAlign:"center",backgroundColor:"darkgray   ",padding:"5%"}}>
    <h4 style={{textAlign:"center"}}>AJOUTER CONTACT</h4>
    <br/>
     NOM :&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" placeholder='Nom&Prenom' style={{width:'50%'}}  id='nom'  ref={name} />
     

     <br />  <br /> 
    TEL :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="Tel" placeholder='Phone' style={{width:'50%'}} id='tel' ref={tel} />
    
    <br />  <br />
    VILLE :&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" placeholder='Ville' style={{width:'50%'}} id='ville' ref={ville}  />
    <br /><br />
   
    
   <input  type="button"  className='btn btn-outline-primary' value="  AJOUTER  "   onClick={addC}/> 

    </form>
    </div>
    </div>
    </div>
    <br/><br/>
    <h4  style={{textAlign:"center"}}>RECHERCHER CONTACT</h4>
    <br/>
  
    <div className='row justify-content-center' style={{textAlign:"center"}}>
    <input type='search' placeholder='Rechercher' className='form-control justify-content-center' id='btn0' style={{width:'25%'}} onChange={(e)=>{setsearch(e.target.value)}} />
  

    </div>
    <br/>
    
    <h4 style={{textAlign:"center"}}>LISTE CONTACT</h4>
    <br/>
    <div  style={{textAlign:"center"}}>
    {/* Button trier croissant */}
    Trier :  &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg"values='croissant' onClick={triercroissant}   width="30" height="25" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
        <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
      </svg>

   {/* Button trier decroissant  */}
   <svg xmlns="http://www.w3.org/2000/svg" values='decroissant' onClick={trierdecroissant} width="30" height="25" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
    <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
    <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
    <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
   </svg>
   </div>
    <br />
<div>

    {
      

contacts.filter((t)=>{
  return search.toLowerCase()==='' ? t :t.ville.toLocaleLowerCase().includes(search);
}).map((t)=>{

return <div key={t.id}><Contact   delf={(idC)=>{del(t.id)}} tel={t.tel} vill={t.ville} txt={t.name}/></div> 



})




}
</div> 
   
    

</div>
  );
}