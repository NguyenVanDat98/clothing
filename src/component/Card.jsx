import React from 'react'; 
import "../style/index.scss"

const Card =({name,imgg,price,button,id})=> {

    return (
        <div className='Card'>
            <img src={imgg}  />
            <section>
            <h2>{name}</h2>
            <h5>${price} </h5>
            <button onClick={()=>button({name,imgg,price,id})} >Add to Cart</button>
            
            </section>
        </div>
    );
};
export default Card;



