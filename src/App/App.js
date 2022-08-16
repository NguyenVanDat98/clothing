

import Header from '../layout/header/Header';
import Main from '../layout/main/Main';
import './App.css';
import {Routes,Route} from "react-router-dom"
import FormCreate from '../component/FormCreate';
import { useCallback, useEffect, useState } from 'react';
import { API_URL, DATA_1, DATA_2 } from '../common/common';
import storeState from '../common/storeState';
import { observer } from "mobx-react"

 function App() {
  const [data , setData ]=useState([]);
  const [dataCart , setDataCart ]=useState([]);
  const [render , setReRender ]=useState(true);
  const fetchData =  useCallback(async()=>{ 
    await fetch(API_URL+DATA_1).then(res=>res.json()).then(resole=>setData(resole))
    await fetch(API_URL+DATA_2).then(res=>res.json()).then(resole=>setDataCart(resole))
  },[storeState.render])
  useEffect(()=>{
      fetchData()
  },[fetchData]);
 useEffect(()=>{
  storeState.setNum(dataCart.length)
  storeState.SetSum(data.length)
 },[data])


  return (
    <div className="App">
      <Header></Header>
      <Routes>
      {data && <Route path='/clothing/' element={<Main dataCart={dataCart} data={data} />}> </Route>}
        <Route path='/shop/add' element={<FormCreate/>}> </Route>
      </Routes>
      
    </div>
  );
}

export default observer(App) ;