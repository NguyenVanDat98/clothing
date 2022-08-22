import React from 'react'; 
import "../style/index.scss"

const Card =(props)=> {
   const{name,imgg,price,file,id}=props.data;
    return (
        <div className='Card'>
            
            <img src={file||imgg}  />
            <section>
            <h2>{name}</h2>
            <h5>${price} </h5>
            <button onClick={()=>props.button(props.data)} >Add to Cart</button>
            
            </section>
        </div>
    );
};
export default Card;



