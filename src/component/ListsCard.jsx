import React from 'react';
import { API_URL, DATA_2 } from '../common/common';
import storeState from '../common/storeState';
import Card from './Card';


const  ListsCard = ({data,handleAdd}) => {

    return (
        <div className='listCard'>
           {data.map(({name,price,imgg,id},index)=><Card key={index} id={id} button={handleAdd}  imgg={imgg} name={name} price={price}  />)} 
        </div>
    );
};
export default ListsCard;



