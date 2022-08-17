import React from 'react';
import Card from '../../component/Card';

const  ListsCard = ({data,handleAdd}) => {

    return (
        <div className='listCard'>
           {data.map((el,index)=><Card key={index} button={handleAdd} data={el} />)} 
        </div>
    );
};
export default ListsCard;



