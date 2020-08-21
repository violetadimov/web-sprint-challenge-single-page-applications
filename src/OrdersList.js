import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const apiUrl = 'https://reqres.in/api/users'
function OrdersList(props) {
  const { values }= props
  const [orders, setOrders] = useState([])

  const getOrder=() => {
    axios.get(apiUrl)
      .then(res => {
        setOrders(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewOrder = () => {
    axios.post(apiUrl, values)
      .then(res => {
        setOrders([...orders, res.data])
      })
      .catch(err => {
        console.log(err)
      })
      
  }
  return(
    <div>
        {
            orders.map(order =>(
                console.log(
                    `
                    Name: ${orders.name},
                    Size : ${orders.size},
                    Sauce: ${orders.sauce},
                    Toppings: ${orders.toppings}
                    `
                )
            ))
            
            
            // <div className='user'>
            //     <pre>{JSON.stringify(orders, null, 2)}</pre>
            // </div>
            // orders.map(order => (
            //     //<OrderDetails key={order.id} order={order}/>
            //     <div>
            //         <p>Name:{order.name}</p>
            //         <p>Size: {order.size}</p>
            //         <p>Sauce: {order.sauce}</p>
            //         <p>Topping(s):{order.toppings} </p>
            //         <p>Special instructions: {order.instructions}</p>
            //     </div>
            // ))
        }
        
        
        <Link to='/'><button>Home</button></Link>
    </div>
  )
};

// function OrderDetails({ order }){
//     return(
//         <div className='orderlist'>
//             <p>Name:{orders.name}</p>
//             <p>Size: {orders.size}</p>
//             <p>Sauce: {orders.sauce}</p>
//             <p>Topping(s):{orders.toppings} </p>
//             <p>Special instructions: {orders.instructions}</p>
//         </div>
//     )
// }

export default OrdersList;