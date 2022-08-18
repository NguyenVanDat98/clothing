import React, { useCallback, useEffect, useState } from 'react';
import ListCardNotification from './ListCardNotification';
import "../../style/index.scss"
import { API_URL, DATA_2,storeState, observer, DATA_1 } from '../../common';
import ListsCard from './ListsCard';
import toast, {Toaster} from 'react-hot-toast';

const Main = ({}) => {
    const [data , setData ]=useState([]);
    const [dataCart , setDataCart ]=useState([]);
  
////////fetch DATA API/////////////
    const fetchData =  useCallback(async()=>{ 
      await fetch(API_URL+DATA_1).then(res=>res.json()).then(resole=>setData(resole)).catch(err=>console.log(err))
   
    },[])
    const fetCart =useCallback (async()=>{
        await fetch(API_URL+DATA_2).then(res=>res.json()).then(resole=>setDataCart(resole)).catch(err=>console.log(err))
    },[storeState.render])
  
    useEffect(()=>{
        fetchData()
    },[fetchData]);

    useEffect(()=>{
        fetCart()
    },[fetCart])
    ////////set count Product
    useEffect(()=>{
        storeState.setNum(dataCart.reduce((a,e)=>a+e.count ,0))   
        storeState.setData(data)    
        storeState.setSum(data.length)
        let total = dataCart.reduce((e,a)=> (e + parseInt(a.price)*parseInt(a.count)) ,0)  
            storeState.setTotal(total)
    },[data,dataCart])
/////////handle Control  add to Cart ////////
const handleAdd =(el)=>{  
    let indexProdcut = dataCart.findIndex(item => item.id === el.id);
    let indexProdcutSelect = dataCart.filter(e=>e.id==el.id)[0]

    if(indexProdcut !== -1){
        //////// if find id Success then do it
        fetch(API_URL+DATA_2+`/${el.id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({...el, count: indexProdcutSelect.count +1})
        } )
        toast.success(`${indexProdcutSelect.name}  :  ${indexProdcutSelect.count +1} , ${(indexProdcutSelect.count+1)*indexProdcutSelect.price}$`)

    }else{
        /////////else can't find do it
        dataCart.push({...el,count:1})
        storeState.setNum(dataCart.reduce((a,e)=>a+e.count ,0))
        fetch(API_URL+DATA_2,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({...el, count:1})
        } )      
        toast.success('Add to Cart Successfully!')        
    }
    storeState.setRender()
}

    return (
        <div className='mainContent'>           
            <p>Total : {storeState.SumProduct}</p>
            <ListsCard handleAdd={handleAdd} data={data}/>
            <ListCardNotification data={dataCart}   />
        </div>
    );
};
export default observer(Main) ;
