var events      = require('events'),
    restaurant  = require('./resturantClass'),
    express     = require('express'),
    config      = require('./config').events;
    port        =process.env.PORT || 5000;

var restaurantOrders = new restaurant(),
       app          = express()
       
       app.get('/',(req,res)=>{
      
        //demo
        restaurantOrders.addOrder(50);
        restaurantOrders.addOrder(3);
        restaurantOrders.addOrder(7);
        restaurantOrders.cancelOrder(1);
        restaurantOrders.resetOrders();
        restaurantOrders.addOrder(1);
       res.send(JSON.stringify(restaurantOrders.massageLog));/////////////////////////////////////////////////////////////////////////////
       res.end();
       

     });
   
     app.listen(port,()=>{console.log(`listening on port ${port}!`);
    })
       restaurantOrders
                  .on(config.ALL_ORDERS,restaurantOrders.getAllOrders)
                  .on(config.EMPTY,restaurantOrders.resetOrders)
                  .on(config.FULL,restaurantOrders.checkOrder)
                  .on(config.ADD_OR_CANCEL,restaurantOrders.orderChange)
                  .on(config.CANCEL_ERROR,restaurantOrders.errorCancelOrder);
    
        return restaurantOrders;
   









