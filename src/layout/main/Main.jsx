import React, { useCallback, useEffect, useState } from 'react';
import ListCardNotification from './ListCardNotification';
import "../../style/index.scss"
import { API_URL, DATA_2,DATA_1 } from '../../common';
import ListsCard from './ListsCard';
import toast from 'react-hot-toast';
import { useDispatch , useSelector} from 'react-redux';
import { changeAction, CHANGE_STATE_COUNTCART, CHANGE_TODO_DATA_USER } from '../../Redux/Reducer/Reducer';


const Main = ({}) => {
    const [data , setData ]=useState([]);
    const [dataCart , setDataCart ]=useState([]); 

    let dispatch = useDispatch()

    let change = useSelector(ee=>ee.state)
    
////////fetch DATA API/////////////
 ///create a funtion Callback at fetch API_DATA
    const fetchData =  useCallback(async()=>{ 
      await fetch(API_URL+DATA_1).then(res=>res.json()).then(resole=>setData(resole)).catch(err=>console.log(err))   
    },[])
    const fetCart =useCallback (async()=>{
        await fetch(API_URL+DATA_2).then(res=>res.json()).then(resole=>setDataCart(resole)).catch(err=>console.log(err))
    },[])
  //////
    useEffect(()=>{
        fetchData()
    },[]);

 let handleSort =(e)=>{
    let sort  = [...data].sort((a,b)=> {switch (e.target.value) {
         case "nameUp":
             if (a.name < b.name) {
                 return -1;
               }
               if (a.name > b.name) {
                 return 1;
               }    
               return 0;
        
         case "nameDown":
             if (a.name > b.name) {
                 return -1;
               }
               if (a.name < b.name) {
                 return 1;  
               }    
               return 0;
             
         case "priceUp":
            return a.price-b.price
             
         case "priceDown":
            return b.price-a.price
             
     
         default:
             break;
     } } )
     setData(sort)
  console.table(sort)

 }

    useEffect(()=>{
        fetCart()
    },[change.render])
    ////////set count Product
    useEffect(()=>{   

        let total = dataCart.reduce((e,a)=> (e + parseInt(a.price)*parseInt(a.count)) ,0)  
            dispatch(changeAction("Change/State",{totalBill:total,countCart : dataCart.reduce((a,e)=>a+e.count ,0), totalProduct : data.length   }))

            dispatch(changeAction(CHANGE_TODO_DATA_USER, dataCart ))
    },[data])
/////////handle Control  add to Cart ////////
const handleAdd = (el)=>{  
    let indexProduct = dataCart.findIndex(item => item.id === el.id);
    let indexProdcutSelect = dataCart.filter(e=>e.id==el.id)[0]
  
    if(indexProduct !== -1){
     //////// if find id Success then do it
        console.group( dataCart[indexProduct].count);
         
        fetch(API_URL+DATA_2+`/${el.id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({...el, count: indexProdcutSelect.count +1})
        })
       
        dataCart[indexProduct].count ++ 
        toast.success(`${indexProdcutSelect.name}  :  ${indexProdcutSelect.count +1} , ${(indexProdcutSelect.count+1)*indexProdcutSelect.price}$`)
    console.group( dataCart[indexProduct].count);

    }else{
        /////////else can't find do it 
        dataCart.push(el)
        fetch(API_URL+DATA_2,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({...el})
        } )      
        toast.success('Add to Cart Successfully!')    

    }
    dispatch(changeAction(CHANGE_TODO_DATA_USER, dataCart ))
    dispatch(changeAction(CHANGE_STATE_COUNTCART, dataCart.reduce((a,e)=>a+e.count ,0)))
    // dispatch(changeAction("Change/State-render"))
}

    return (
        <div className='mainContent'>           
            <p>Total : {change.totalProduct}</p>
            <button value="nameDown" onClick={handleSort} >sort A-Z</button>
            <button value="nameUp" onClick={handleSort} >sort Z-A</button>
            <button value="priceUp" onClick={handleSort} >sort 1-9</button>
            <button value="priceDown" onClick={handleSort} >sort 9-1</button>    
            <ListsCard handleAdd={handleAdd} data={data}/>
            <ListCardNotification/>
        </div>
    );
};
export default Main ;
