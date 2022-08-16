import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"

// Model the application state.
class Timer {
    statusDisplay = false
    coust = 0
    SumProduct = 0
    render = true
    numberProduct = 0
    total = 0

    constructor() {
        makeAutoObservable(this)
    }
    setRender(){
        this.render= !this.render
    }

    changeDis() {
        this.statusDisplay = !this.statusDisplay
    }

    coustProduct() {
        this.coust += 1
    }
       
    setNum(e){
        this.numberProduct = e
    }
    SetSum(e){
        this.SumProduct = e
    }
    setTotal(e){
        this.total= e
    }
}

const storeState = new Timer()
export default storeState