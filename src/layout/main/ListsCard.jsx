import React from 'react';
import Card from '../../component/Card';

const  ListsCard = ({data,handleAdd}) => {

    return (
        <div className='listCard'>
           {data.map(({name,price,imgg,id},index)=><Card key={index} id={id} button={handleAdd}  imgg={imgg} name={name} price={price}  />)} 
        </div>
    );
};
export default ListsCard;



