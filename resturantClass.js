
var events = require('events'),
    config = require('./config').events;


const maxNumOfOrders = 10;
class restaurant extends events.EventEmitter{
    constructor()
    {
        super();
        this.order = 0;
        this.massageLog=[];     


    }
        addOrder(amount){
        if(this.order+amount<= maxNumOfOrders)
        {    this.order += amount;   
             this.emit('orderHasChanged');
            
        }
        this.emit('restaurantIsFull')
        
    }
    cancelOrder(amount){
        if(amount > this.order)
        {
            this.order = 0;
            this.emit('cancelOrderError')
        }
        else{
            this.order -=amount;
            this.emit('orderHasChanged');
        }
    }
    resetOrders(){
        this.order = 0;
        this.emit('emptyRestaurant');


    }
    getAllOrders(){
        this.emit('numOfOrders');
        return this.order; 

    }


//callbacks
 getAllOrders(){
    this.massageLog.push(`number of orders is: ${this.order}`);
    console.log(`number of orders is: ${this.order}`);
}
 resetOrders(){
        this.massageLog.push(`no pending order ${this.order=0}`);
        console.log(`no pending order ${this.order=0}`);
}
 checkOrder(maxNumOfOrders){
    if(this.order > maxNumOfOrders)
        this.massageLog.push(`can not get more orders now ${this.order}`);
        console.log(`can not get more orders now ${this.order}`);
}
 orderChange(){
    this.massageLog.push(`order has been changed ${this.order}`);
    console.log(`order has been changed ${this.order}`);
}

 errorCancelOrder(){
    this.massageLog.push(`order can not be canceled ${this.order}`);
    console.log(`order can not be canceled ${this.order}`);
}
}
//events
module.exports = restaurant;


