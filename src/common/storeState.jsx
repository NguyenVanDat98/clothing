import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"

// Model the application state.
class Timer {
    statusDisplay = false
    count = 0
    SumProduct = 0
    render = true
    numberProduct = 0
    total = 0
    data
    check= false;

    constructor() {
        makeAutoObservable(this)
    
    }
    setRender(){
        this.render = !this.render
    }
    setCheck(){
        this.check= !this.check
    }

    changeDis() {
        this.statusDisplay = !this.statusDisplay
    }

    countProduct() {
        this.count += 1
    }
       
    setNum(e){
        this.numberProduct = e
    }
    setSum(e){
        this.SumProduct = e
    }
    setTotal(e){
        this.total= e
    }
    setData(e){
        this.data = e
    }
}

const storeState = new Timer()
export default storeState