export const Initval = { 

        dataProduct :[],
        dataUser : [],
        totalProduct : function(){
            return this.dataProduct.length
        },
        totalBill : function(){
            return this.dataUser.reduce((a,b)=>a+b.price*b.count,0)
        },
        countCart : function(){
            return this.dataUser.reduce((a,b)=>a+b.count,0)
        },
   
}