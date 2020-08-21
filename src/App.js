import React, { useState } from "react";
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'
import Form from "./Form";
import HomePage from "./HomePage";
import * as yup from 'yup'
import formSchema from "./validation/forSchema";
import { Link } from 'react-router-dom'
import ConfirmationPage from "./ConfirmationPage";
import OrdersList from "./OrdersList";

const apiUrl = 'https://reqres.in/api/users'
 
const initialValues = {
  name: "",
  size: "",
  sauce: "",
  toppings: {
    pepperoni: false,
    sausage: false,
    chicken: false,
    onions: false
  },
  instructions: ""
}

const initialOrders = {
  name: "violeta",
  size: "medium",
  sauce: "marinara",
  toppings: {
    pepperoni: false,
    sausage: true,
    chicken: false,
    onions: false
  },
  instructions: "none"
}

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
}

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [values, setValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  // const getOrder=() => {
  //   axios.get(apiUrl)
  //     .then(res => {
  //       setOrders(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  const postNewOrder = () => {
    axios.post(apiUrl, values)
      .then(res => {
        setOrders([...orders, res.data])
        setValues(initialValues)
      })
      .catch(err => {
        console.log(err)
      })
      
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
    setValues({
      ...values,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {

    setValues({
      ...values,
      toppings: {
        ...values.toppings,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newOrders = {
      name: values.name,
      size: values.size,
      sauce: values.sauce,
      toppings: Object.keys(values.toppings).filter(topping => values.toppings[topping])

    }
    postNewOrder(newOrders)
  }

  return (
    <div className='app'>
      <nav>
          <h1>Lambda Eats</h1>
          <div  className='nav-links'>
            <Link to='/'> Home</Link>
            <Link to=''>Help</Link>
          </div>
      </nav>
      <Switch>
        <Route path='/orders'>
          <OrdersList values={values}/>
        </Route>
        <Route path='/pizza/confirmation'>
          <ConfirmationPage/>
        </Route>
        <Route path='/pizza'>
          <Form 
            values={values}
            update={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            errors={formErrors}
          />
          {
            //<OrdersList/>
          }
        </Route>
        <Route exact path='/'>
          <HomePage />
          {
            // console.log(
              
            //   // <div className='user'>
            //   //   <pre>{JSON.stringify(orders, null, 2)}</pre>
            //   // </div>
              
            //   `
            //   Name: ${orders.name},
            //   Size : ${orders.size},
            //   Sauce: ${orders.sauce},
            //   Toppings: ${orders.toppings}
            //   `
            // )
            // <div>
            //   <h2>List of Orders</h2>
              
              // <div className='user'>
              //     <pre>{JSON.stringify(orders, null, 2)}</pre>
              // </div>
            //   {
            //       // <div className='user'>
            //       //     <pre>{JSON.stringify(orders, null, 2)}</pre>
            //       // </div>
            //       // orders.map(order => (
            //       //     //<OrderDetails key={order.id} order={order}/>
            //       //     <div>
            //       //         <p>Name:{order.name}</p>
            //       //         <p>Size: {order.size}</p>
            //       //         <p>Sauce: {order.sauce}</p>
            //       //         <p>Topping(s):{order.toppings} </p>
            //       //         <p>Special instructions: {order.instructions}</p>
            //       //     </div>
            //       // ))
            //   }
              
        
            // </div>
          }
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;

