import React, { useEffect } from 'react';
import ListCardNotification from './ListCardNotification';
import "../../style/index.scss"
import { API_URL, DATA_2,storeState, observer } from '../../common';
import ListsCard from './ListsCard';
import toast, {Toaster} from 'react-hot-toast';

const Main = ({data,dataCart}) => {

    useEffect(()=>{
        storeState.setNum(dataCart.length) 
        let total = dataCart.reduce((e,a)=> (e + parseInt(a.price)*parseInt(a.coust)) ,0)  
        storeState.setTotal(total)
    },[dataCart,storeState.total]);

const handleAdd =(el)=>{
    // console.log(el.coust)
    if(dataCart.map(e=>e.id).includes(el.id)){

        toast.success(`${dataCart.filter(e=>e.id==el.id)[0].name}  :  ${dataCart.filter(e=>e.id==el.id)[0].coust +1} , ${(dataCart.filter(e=>e.id==el.id)[0].coust+1)*dataCart.filter(e=>e.id==el.id)[0].price}$`)
        fetch(API_URL+DATA_2+`/${el.id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({...el, coust: dataCart.filter(e=>e.id==el.id)[0].coust +1})
        } )


    }else{
        dataCart.push({...el,coust:1})
        storeState.setNum(dataCart.length)
        fetch(API_URL+DATA_2,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({...el, coust:1})
        } )
      
        toast.success('Add to Cart Successfully!')
        
    }
    storeState.setRender()
}

    return (
        <div className='mainContent'>
            <Toaster
                    position="top-center"
                    reverseOrder={false}
                    />
            <p>Total : {storeState.SumProduct}</p>
            <ListsCard handleAdd={handleAdd} data={data}/>
            <ListCardNotification data={dataCart}   />
        </div>
    );
};
export default observer(Main) ;
