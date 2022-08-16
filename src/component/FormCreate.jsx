import React, { useState } from 'react';
import { API_URL, DATA_1, makeId } from '../common/common';
import "../layout/main/styleForm/form.scss"

const FormCreate = ({ }) => {
    const [name , setName ]=useState();
    const [price , setPrice ]=useState();
    const [imgg , setImgg ]=useState();
   
function handleSubmit (e){
   e.preventDefault()
    fetch(API_URL+DATA_1 , {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body : JSON.stringify({name,price,imgg,id:makeId(12)})
    } )
    setName("")
    setPrice("")
    setImgg("")
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add New Product</h2>
                <div> <label htmlFor="">Name:  </label> <input value={name} onChange={(e)=> setName(e.target.value)}  type="text" /> </div>
                <div> <label htmlFor="">Price: </label> <input value={price} onChange={(e)=> setPrice(e.target.value)} type="number" /> </div>
                <div> <label htmlFor="">Image: </label> <input value={imgg} onChange={(e)=> setImgg(e.target.value)} type="text" /> </div>
                <div className='button'> 
                    <button  type='submit' >save</button>
                    <button type='reset'>reset</button>
                    </div>
            </form>
        </div>
    )
}
export default FormCreate

