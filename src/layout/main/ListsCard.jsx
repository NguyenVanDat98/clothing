import React from 'react';
import Card from '../../component/Card';
import {Toaster} from 'react-hot-toast';
const  ListsCard = ({data,handleAdd}) => {

    return (
        <div className='listCard'>
             <Toaster
                    
                    position="top-center"
                    reverseOrder={false}
                    />
           {data.map((el,index)=><Card key={index} button={handleAdd} data={el} />)} 
        </div>
    );
};
export default ListsCard;



