import React, { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { API_URL, DATA_1, makeId, storeState , observer } from '../common';
import "../style/index.scss"

const FormCreate = ({ }) => {
    const [name , setName ]=useState("");
    const [price , setPrice ]=useState("");
    const [imgg , setImgg ]=useState("");
    const [file , setfile ]=useState("");

    
function handleSubmit (e){
    e.preventDefault()
    console.log(storeState.data);
    if(storeState.data.filter(ee=>ee.name==name).length>0){
        toast.error("Use name product diffrent,Please!")
    }else if( name.length*price.length>0 ){
        console.log(file);
        fetch(API_URL+DATA_1 , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({name,price, file , imgg,id:makeId(12) ,coust : 1})
        } )
        setName("")
        setPrice("")
        setImgg("")
        document.getElementById("urlImg").value=""
        toast.success('Successfully!')
    }
  
}
    return (
        <div>
            <Toaster
                    position="top-center"
                    reverseOrder={false}
                    />
            <form onSubmit={handleSubmit}>
                <h2>Add New Product</h2>
                <div> <label htmlFor="name">Name:  </label> <input id='name' value={name} onChange={(e)=> setName(e.target.value)}  type="text" required /> </div>
                <div> <label htmlFor="price">Price: </label> <input id='price' value={price} onChange={(e)=> setPrice(e.target.value)} type="number" required /> </div>
                <div className='checkboxx'>
                  <input className='check' type="checkbox" onClick={()=>{storeState.setCheck()}} />

                  <div className='block'>  <div className='circle'> </div></div>  
                </div>
                
                <div > <label htmlFor="urlImg">Image: </label> <input id='urlImg' onChange={(e)=> storeState.check ? setImgg(e.target.value) :setfile(URL.createObjectURL(e.target.files[0]))} type={storeState.check ? "text" :"file"} /> </div>

                <div className='button'> 
                    <button  type='submit' >save</button>
                    <button type='reset'>reset</button>
                    </div>
            </form>
        </div>
    )
}
export default observer(FormCreate)

